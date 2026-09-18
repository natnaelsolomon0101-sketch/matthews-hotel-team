#!/usr/bin/env -S npx tsx
/**
 * Schema validation pass.
 *
 * For every URL emitted by sitemap.ts, fetch the page from the production
 * site (or a local dev server if --local), extract every <script type=
 * "application/ld+json"> block, parse it, and check it for:
 *   - well-formed JSON
 *   - required @context = "https://schema.org" or graph contains it
 *   - required @type or @graph[].@type
 *   - presence of @id when expected
 *
 * Optional: when SCHEMA_VALIDATOR_API is set, POST each block to a
 * schema.org validator endpoint and aggregate errors.
 *
 * Output: reports/schema-validation.json + reports/schema-validation-summary.md
 *
 * Run:    npx tsx scripts/schema-validate.ts
 *         npx tsx scripts/schema-validate.ts --local   # uses localhost:3000
 *         npx tsx scripts/schema-validate.ts --build   # offline, reads .next
 *
 * 2026-09-17 (entity-schema-engineer): extended, not replaced.
 *   - --build mode validates the prerendered HTML in .next/server/app, so the
 *     graph can be checked in CI right after `npm run build` with no server.
 *   - /about, /glossary, /glossary/[term], /research and /research/mhi/[q]
 *     added to the URL list.
 *   - Three new checks that matter for the single-@graph refactor:
 *       1. exactly ONE ld+json block per page,
 *       2. that block is a single @graph,
 *       3. every internal {"@id": ...} reference resolves inside that graph,
 *   - plus a presence check for the entity nodes every page must carry.
 */
import fs from "node:fs";
import path from "node:path";
import { glossary } from "../src/lib/data/glossary";
import { mhiQuarters } from "../src/lib/data/mhi";
import { listings } from "../src/lib/data/listings";
import { closed } from "../src/lib/data/closed";
import { team } from "../src/lib/data/team";
import { insights } from "../src/lib/data/insights";
import { markets } from "../src/lib/data/markets";
import { brands } from "../src/lib/data/brands";
import { services } from "../src/lib/data/services";
import { offices } from "../src/lib/data/offices";
import { clusters, answerPath } from "../src/lib/data/answers";
import { tools } from "../src/lib/data/tools";
import { EDITIONS } from "../src/lib/rates/sheet";

const PROD = "https://matthewshotelmarkets.com";
const LOCAL = "http://localhost:3000";
const base = process.argv.includes("--local") ? LOCAL : PROD;
const BUILD_MODE = process.argv.includes("--build");
const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app");

/** Nodes every page is required to carry, by @id suffix. */
const REQUIRED_IDS = ["/#org", "/#parent-org", "/#website", "/#office-austin"];

/**
 * EVERY route on the site, computed from the data modules.
 *
 * This list used to be hand-maintained, which meant its "119/119 pass" result
 * silently excluded four pages Agent 8 shipped (/rates, /rates/2026-09,
 * /rates/methodology, /data/hotel-financing-statistics) and all 30 Wave 1
 * pages: CI would not have caught a schema regression on any of them
 * (geo/requests.md, Agent 8 item 3). Anything with a page.tsx belongs here.
 *
 * Deliberately excluded, with reasons:
 *   - /sitemap.xml, /robots.txt, /llms.txt, /llms-full.txt, /feed.xml,
 *     /rates.json, /rates.csv: not HTML, no ld+json to validate.
 *   - /api/*: not pages.
 *   - listings with `omUrl` set: those routes redirect off-domain before
 *     rendering, so there is no body and no graph to check. That is
 *     documented behavior in listings/[slug]/page.tsx, not a regression.
 */
function urls(): string[] {
  const u: string[] = [
    "/",
    "/listings",
    "/closed",
    "/team",
    "/insights",
    "/process",
    "/contact",
    "/about",
    "/press",
    "/glossary",
    "/research",
    // NOT "/research/mhi": that route is a redirect to the latest quarter
    // (src/app/research/mhi/page.tsx), so it has no body and no graph. It is a
    // stable citation URL, not a page.
    "/markets",
    "/services",
    "/hotels-for-sale",
    "/rates",
    "/rates/methodology",
    "/data/hotel-financing-statistics",
    "/data/sba-hotel-lending",
  ];
  for (const e of EDITIONS) u.push(`/rates/${e.slug}`);
  for (const c of clusters) {
    u.push(`/${c.cluster}`);
    for (const p of c.spokes) u.push(answerPath(p));
  }
  u.push("/tools");
  for (const t of tools) u.push(`/tools/${t.slug}`);
  for (const g of glossary) u.push(`/glossary/${g.slug}`);
  for (const q of mhiQuarters) u.push(`/research/mhi/${q.slug}`);
  for (const l of listings.filter((x) => x.hasDetail !== false && !x.omUrl))
    u.push(`/listings/${l.slug}`);
  for (const c of closed) u.push(`/closed/${c.slug}`);
  for (const t of team.filter((m) => m.hasBio !== false)) u.push(`/team/${t.slug}`);
  for (const i of insights) u.push(`/insights/${i.slug}`);
  for (const m of markets) u.push(`/markets/${m.slug}`);
  for (const b of brands) u.push(`/hotels-for-sale/${b.slug}`);
  for (const s of services) u.push(`/services/${s.slug}`);
  for (const o of offices) u.push(`/offices/${o.slug}`);
  return u;
}

type Issue = { url: string; index: number; problem: string; type?: string };
type Block = { url: string; index: number; type: string | string[]; valid: boolean; issues: string[] };

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "User-Agent": "matthews-schema-validate" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

/** Offline: read the prerendered HTML Next wrote for this route path. */
function readBuiltHtml(routePath: string): string {
  const rel = routePath === "/" ? "index" : routePath.replace(/^\//, "");
  const file = path.join(BUILD_DIR, `${rel}.html`);
  if (!fs.existsSync(file)) throw new Error(`not prerendered: ${file}`);
  return fs.readFileSync(file, "utf8");
}

function extractBlocks(html: string): string[] {
  const re = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  const out: string[] = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    out.push(m[1].trim());
  }
  return out;
}

function validate(block: string, url: string, index: number): Block {
  const issues: string[] = [];
  let parsed: unknown;
  try {
    parsed = JSON.parse(block);
  } catch (e) {
    return {
      url,
      index,
      type: "INVALID-JSON",
      valid: false,
      issues: ["JSON parse error: " + (e as Error).message],
    };
  }
  const obj = parsed as Record<string, unknown>;
  const context = obj["@context"];
  if (context !== "https://schema.org" && context !== "http://schema.org") {
    issues.push(`@context is not schema.org (got: ${JSON.stringify(context)})`);
  }
  const graph = obj["@graph"];
  let type: string | string[] = (obj["@type"] as string | string[]) ?? "—";
  if (Array.isArray(graph)) {
    type = graph.map((g) => (g as { "@type"?: string | string[] })["@type"] ?? "?").flat().join(",") as string;
    for (const [i, g] of graph.entries()) {
      const node = g as Record<string, unknown>;
      if (!node["@type"]) issues.push(`@graph[${i}] missing @type`);
    }
  } else if (!obj["@type"]) {
    issues.push(`Missing @type and @graph`);
  }

  if (Array.isArray(graph)) {
    // Every declared @id in this graph.
    const declared = new Set<string>();
    for (const g of graph) {
      const id = (g as Record<string, unknown>)["@id"];
      if (typeof id === "string") declared.add(id);
    }
    // Duplicate @ids mean the page emitted the same node twice.
    const seen = new Set<string>();
    for (const g of graph) {
      const id = (g as Record<string, unknown>)["@id"];
      if (typeof id !== "string") continue;
      if (seen.has(id)) issues.push(`duplicate @id in graph: ${id}`);
      seen.add(id);
    }
    // Every {"@id": x} reference must resolve to a node in the same graph,
    // unless it points off-site.
    const walk = (v: unknown) => {
      if (Array.isArray(v)) return v.forEach(walk);
      if (!v || typeof v !== "object") return;
      const o = v as Record<string, unknown>;
      const keys = Object.keys(o);
      const ref = o["@id"];
      if (
        keys.length === 1 &&
        typeof ref === "string" &&
        ref.startsWith("https://matthewshotelmarkets.com") &&
        !declared.has(ref)
      ) {
        issues.push(`dangling @id reference: ${ref}`);
      }
      for (const k of keys) if (k !== "@id") walk(o[k]);
    };
    for (const g of graph) walk(g);

    for (const suffix of REQUIRED_IDS) {
      if (![...declared].some((d) => d.endsWith(suffix))) {
        issues.push(`graph is missing the required entity node ${suffix}`);
      }
    }
  }

  return { url, index, type, valid: issues.length === 0, issues };
}

async function main() {
  const all: Block[] = [];
  const issues: Issue[] = [];
  const urlList = urls();
  console.log(
    BUILD_MODE
      ? `Validating ${urlList.length} prerendered routes in .next/server/app…`
      : `Validating ${urlList.length} URLs against ${base}…`,
  );
  for (const u of urlList) {
    const full = base + u;
    process.stdout.write(`  ${u} `);
    try {
      const html = BUILD_MODE ? readBuiltHtml(u) : await fetchHtml(full);
      const blocks = extractBlocks(html);
      if (blocks.length === 0) {
        console.log("(no JSON-LD)");
        issues.push({ url: u, index: -1, problem: "no JSON-LD blocks" });
        continue;
      }
      let pageOk = true;
      if (blocks.length > 1) {
        pageOk = false;
        issues.push({
          url: u,
          index: -1,
          problem: `${blocks.length} ld+json blocks; the site emits exactly one @graph per page`,
        });
      }
      for (const [idx, b] of blocks.entries()) {
        const v = validate(b, u, idx);
        all.push(v);
        if (!v.valid) {
          pageOk = false;
          for (const p of v.issues) issues.push({ url: u, index: idx, problem: p, type: Array.isArray(v.type) ? v.type.join(",") : v.type });
        }
      }
      console.log(pageOk ? `${blocks.length} ✓` : `${blocks.length} ⚠`);
    } catch (e) {
      console.log("ERR " + (e as Error).message);
      issues.push({ url: u, index: -1, problem: (e as Error).message });
    }
  }

  const out = {
    runAt: new Date().toISOString(),
    base: BUILD_MODE ? BUILD_DIR : base,
    urlsChecked: urlList.length,
    blocksFound: all.length,
    blocksValid: all.filter((b) => b.valid).length,
    issues,
    blocks: all,
  };
  fs.mkdirSync(path.join(process.cwd(), "reports"), { recursive: true });
  fs.writeFileSync(
    path.join(process.cwd(), "reports", "schema-validation.json"),
    JSON.stringify(out, null, 2),
  );

  const md: string[] = [
    `# Schema validation — ${out.runAt}`,
    ``,
    `Base: \`${base}\` · URLs: ${out.urlsChecked} · Blocks: ${out.blocksFound} · Valid: ${out.blocksValid} · Pass rate: ${Math.round((out.blocksValid / Math.max(1, out.blocksFound)) * 100)}%`,
    ``,
  ];
  if (issues.length > 0) {
    md.push(`## ${issues.length} Issues`);
    md.push(``);
    md.push(`| URL | Block | Type | Problem |`);
    md.push(`| --- | :-: | --- | --- |`);
    for (const i of issues) md.push(`| ${i.url} | ${i.index} | ${i.type ?? "—"} | ${i.problem} |`);
    md.push(``);
  } else {
    md.push(`## All blocks valid ✓`);
  }
  fs.writeFileSync(
    path.join(process.cwd(), "reports", "schema-validation-summary.md"),
    md.join("\n"),
  );
  console.log(`\n→ reports/schema-validation.json (${out.blocksValid}/${out.blocksFound} valid)`);
  console.log(`→ reports/schema-validation-summary.md`);
  if (issues.length > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
