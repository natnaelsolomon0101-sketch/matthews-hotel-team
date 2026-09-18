#!/usr/bin/env -S npx tsx
/**
 * Internal-link audit. Verifies that every market → relevant brands and
 * every brand → relevant markets have a contextual cross-link in
 * the rendered HTML. Catches dropped <Link> tags from refactors.
 *
 * Walks every URL in sitemap, fetches the page, parses internal hrefs,
 * computes coverage matrix, writes:
 *   reports/internal-links.json   — full link graph
 *   reports/internal-links.md     — coverage summary + missing edges
 *
 * Run: pnpm tsx scripts/internal-links-audit.ts            # against prod
 *      pnpm tsx scripts/internal-links-audit.ts --local    # localhost:3000
 */
import fs from "node:fs";
import path from "node:path";
import { listings } from "../src/lib/data/listings";
import { closed } from "../src/lib/data/closed";
import { team } from "../src/lib/data/team";
import { insights } from "../src/lib/data/insights";
import { markets } from "../src/lib/data/markets";
import { brands } from "../src/lib/data/brands";
import { services } from "../src/lib/data/services";
import { offices } from "../src/lib/data/offices";
import { glossary } from "../src/lib/data/glossary";
import { mhiQuarters } from "../src/lib/data/mhi";
import { clusters, answerPath } from "../src/lib/data/answers";
import { tools } from "../src/lib/data/tools/dscr-calculator";
import { EDITIONS } from "../src/lib/rates/sheet";

const PROD = "https://matthewshotelmarkets.com";
const LOCAL = process.env.LOCAL_BASE ?? "http://localhost:3000";
// Defaults to a local server. Production only with an explicit --prod: a
// full run is ~160 requests, and repeated scripted traffic trips Vercel's
// bot challenge, which blocks every AI crawler.
const base = process.argv.includes("--prod") ? PROD : LOCAL;
const TARGET_DOMAIN = "matthewshotelmarkets.com";

type Edge = { from: string; to: string };
type PageReport = { url: string; outboundInternal: string[]; missing: string[] };

/**
 * Every route on the site. This used to stop at listings/closed/team/insights/
 * markets/brands/services/offices, which meant `/glossary`, `/research` and
 * every answer-cluster page were invisible to the audit (Agent 5, request 3).
 * They are all here now, so a dropped <Link> in any of them fails CI.
 */
function urls(): string[] {
  const u: string[] = [
    "/",
    "/about",
    "/listings",
    "/closed",
    "/team",
    "/insights",
    "/process",
    "/contact",
    "/press",
    "/glossary",
    "/research",
    "/research/mhi",
    "/markets",
    "/services",
    "/hotels-for-sale",
    "/rates",
    "/rates/methodology",
    "/data/hotel-financing-statistics",
  ];
  for (const l of listings.filter((x) => x.hasDetail !== false && !x.omUrl))
    u.push(`/listings/${l.slug}`);
  for (const c of closed) u.push(`/closed/${c.slug}`);
  for (const t of team.filter((m) => m.hasBio !== false)) u.push(`/team/${t.slug}`);
  for (const i of insights) u.push(`/insights/${i.slug}`);
  for (const m of markets) u.push(`/markets/${m.slug}`);
  for (const b of brands) u.push(`/hotels-for-sale/${b.slug}`);
  for (const s of services) u.push(`/services/${s.slug}`);
  for (const o of offices) u.push(`/offices/${o.slug}`);
  for (const g of glossary) u.push(`/glossary/${g.slug}`);
  for (const q of mhiQuarters) u.push(`/research/mhi/${q.slug}`);
  for (const e of EDITIONS) u.push(`/rates/${e.slug}`);
  for (const c of clusters) {
    u.push(`/${c.cluster}`);
    for (const p of c.spokes) u.push(answerPath(p));
  }
  for (const t of tools) u.push(`/tools/${t.slug}`);
  return u;
}

/** Wave 1 spoke slugs per cluster, for rule R6 (a hub links every spoke). */
function spokesFor(hubPath: string): string[] {
  const c = clusters.find((x) => `/${x.cluster}` === hubPath);
  return c ? c.spokes.map((s) => s.slug) : [];
}

function extractHrefs(html: string): string[] {
  const re = /href="([^"]+)"/g;
  const out = new Set<string>();
  let m;
  while ((m = re.exec(html)) !== null) {
    let href = m[1];
    try {
      if (href.startsWith("//")) continue;
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) continue;
      const u = new URL(href, base);
      if (!u.hostname.includes(TARGET_DOMAIN) && !u.hostname.includes("localhost")) continue;
      href = u.pathname;
      out.add(href);
    } catch {
      // ignore malformed
    }
  }
  return Array.from(out);
}

async function main() {
  const urlList = urls();
  const reports: PageReport[] = [];
  const edges: Edge[] = [];

  for (const u of urlList) {
    const full = base + u;
    process.stdout.write(`  ${u} `);
    try {
      const res = await fetch(full, { headers: { "User-Agent": "matthews-link-audit" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      const out = extractHrefs(html).filter((h) => h !== u);
      reports.push({ url: u, outboundInternal: out, missing: expectedFor(u, out) });
      for (const o of out) edges.push({ from: u, to: o });
      console.log(`${out.length} internal links`);
    } catch (e) {
      console.log(`ERR ${(e as Error).message}`);
      reports.push({ url: u, outboundInternal: [], missing: ["FETCH_FAILED"] });
    }
  }

  fs.mkdirSync(path.join(process.cwd(), "reports"), { recursive: true });
  fs.writeFileSync(
    path.join(process.cwd(), "reports", "internal-links.json"),
    JSON.stringify({ runAt: new Date().toISOString(), base, edges, reports }, null, 2),
  );

  const missingTotal = reports.reduce((s, r) => s + r.missing.length, 0);
  const md: string[] = [
    `# Internal links audit — ${new Date().toISOString()}`,
    ``,
    `Base: \`${base}\` · Pages: ${reports.length} · Edges: ${edges.length} · Missing expected: ${missingTotal}`,
    ``,
  ];
  if (missingTotal > 0) {
    md.push(`## Missing edges`);
    md.push(``);
    md.push(`| Page | Missing |`);
    md.push(`| --- | --- |`);
    for (const r of reports) {
      if (r.missing.length === 0) continue;
      md.push(`| ${r.url} | ${r.missing.join(", ")} |`);
    }
    md.push(``);
  } else {
    md.push(`## All expected internal cross-links present ✓`);
  }
  fs.writeFileSync(
    path.join(process.cwd(), "reports", "internal-links.md"),
    md.join("\n"),
  );

  console.log(`\n→ reports/internal-links.json`);
  console.log(`→ reports/internal-links.md (${missingTotal} missing edges)`);
  if (missingTotal > 0) process.exitCode = 1;
}

// Expected internal links for each route family, verified against the
// component tree. Surfaces refactors that drop a <Link>.
function expectedFor(url: string, found: string[]): string[] {
  const has = (s: string) => found.some((f) => f.startsWith(s));
  const missing: string[] = [];

  if (url.startsWith("/markets/")) {
    // Only a market with an active listing in it can link one. Asserting a
    // listing link on a market with none would push someone to invent one.
    const m = markets.find((x) => `/markets/${x.slug}` === url);
    const hasActive = !!m && listings.some((l) => l.city === m.city && l.state === m.state);
    if (hasActive && !has("/listings/")) missing.push("≥1 /listings/ link");
    if (!has("/team/")) missing.push("≥1 /team/ link");
    if (!has("/hotels-for-sale/")) missing.push("≥1 /hotels-for-sale/ link");
    if (!has("/contact")) missing.push("/contact CTA");
  }
  if (url.startsWith("/hotels-for-sale/")) {
    if (!has("/markets/")) missing.push("≥1 /markets/ link");
    if (!has("/contact")) missing.push("/contact CTA");
  }
  if (url.startsWith("/listings/")) {
    if (!has("/contact")) missing.push("/contact CTA (or omUrl)");
  }
  if (url.startsWith("/insights/")) {
    // Articles with no credited author have no byline to link.
    const a = insights.find((x) => `/insights/${x.slug}` === url);
    if ((a?.authorSlugs?.length ?? 0) > 0 && !has("/team/")) missing.push("byline /team/ link");
  }
  if (url === "/" || url === "/team" || url === "/listings" || url === "/closed") {
    if (!has("/insights")) missing.push("/insights link");
  }

  // ------------------------------------------------------------------
  // Rules R5–R12 from geo/05-architecture.md §6. Each assertion below maps
  // 1:1 to a numbered rule, so a failure names the rule it broke.
  // ------------------------------------------------------------------
  const CLUSTER_HUBS = clusters.map((c) => `/${c.cluster}`);

  // R5 / R7 / R8 / R9 / R10 — every cluster spoke.
  if (/^\/(hotel-financing|sell-a-hotel|hotel-valuation)\/.+/.test(url)) {
    const hub = "/" + url.split("/")[1];
    if (!found.includes(hub)) missing.push(`R5: hub link ${hub}`);
    const sibs = found.filter((f) => f.startsWith(hub + "/") && f !== url).length;
    if (sibs < 3) missing.push(`R7: >=3 sibling links (found ${sibs})`);
    if (!has("/contact")) missing.push("R9: /contact CTA");
    if (!has("/team/")) missing.push("R10: author /team/ link");
    if (!has("/rates") && !has("/research/mhi"))
      missing.push("R8: /rates or /research/mhi");
  }

  // R6 — every hub links every one of its spokes.
  if (CLUSTER_HUBS.includes(url)) {
    for (const s of spokesFor(url)) {
      if (!found.includes(`${url}/${s}`)) missing.push(`R6: spoke ${s}`);
    }
  }

  // R11 — a glossary term links the answer page that uses it.
  if (url.startsWith("/glossary/")) {
    if (!CLUSTER_HUBS.some((h) => has(h)))
      missing.push("R11: >=1 cluster answer link");
  }

  // Tool pages follow the same rules as a spoke.
  if (url.startsWith("/tools/")) {
    if (!has("/contact")) missing.push("R9: /contact CTA");
    if (!has("/team/")) missing.push("R10: author /team/ link");
    if (!has("/rates")) missing.push("R8: /rates link");
  }

  // R1 / R2 / R4 — no orphans. Every page carries the footer, so every page
  // must reach these. Checking on "/" alone would pass a site whose footer
  // only rendered on the home page.
  for (const hub of [...CLUSTER_HUBS, "/glossary", "/research", "/rates", "/markets", "/services", "/hotels-for-sale", "/press"]) {
    if (hub !== url && !has(hub)) missing.push(`R2: nav/footer ${hub}`);
  }

  return missing;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
