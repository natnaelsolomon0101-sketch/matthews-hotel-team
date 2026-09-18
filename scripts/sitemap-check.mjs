#!/usr/bin/env node
/**
 * Sitemap hygiene + crawl depth gate. Runs against a LOCAL production build
 * only (the base URL is an argument and must be localhost).
 *
 *   node scripts/sitemap-check.mjs http://localhost:3000
 *
 * Fails when:
 *  - robots.txt does not point at /sitemap.xml, or the sitemap is not XML;
 *  - a sitemap URL is a machine format (.md, .json, .csv, .txt, .xml);
 *  - a sitemap URL is listed twice, or has no valid <lastmod>, or a <lastmod>
 *    in the future;
 *  - a sitemap URL does not answer 200 text/html without a redirect;
 *  - a sitemap URL is noindex, or its rel=canonical is not itself;
 *  - a sitemap URL cannot be reached by following links from the home page,
 *    or sits deeper than MAX_DEPTH clicks from it;
 *  - /sitemap (the HTML site map) does not link every sitemap URL;
 *  - a machine-format endpoint with an HTML parent does not send
 *    `Link: <parent>; rel="canonical"`.
 *
 * Writes reports/sitemap-check.json (depth per URL) for the run report.
 */
import fs from "node:fs";
import path from "node:path";

const BASE = (process.argv[2] ?? "").replace(/\/$/, "");
if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(BASE)) {
  console.error("usage: node scripts/sitemap-check.mjs http://localhost:<port> (local builds only)");
  process.exit(2);
}
const SITE = "https://matthewshotelmarkets.com";
const MAX_DEPTH = 3;
const HTML_SITEMAP = "/sitemap";

/** Machine-format endpoints and the HTML page each one must name as canonical. */
const MACHINE_CANONICALS = {
  "/rates.json": "/rates",
  "/rates.csv": "/rates",
  "/data/sba-hotel-lending.json": "/data/sba-hotel-lending",
  "/data/sba-hotel-lending.csv": "/data/sba-hotel-lending",
  "/agent-index.json": "/developers",
};

const failures = [];
const fail = (msg) => failures.push(msg);

const get = (p, init = {}) =>
  fetch(BASE + p, { redirect: "manual", headers: { "User-Agent": "matthews-sitemap-check" }, ...init });

function hrefs(html) {
  const out = new Set();
  for (const m of html.matchAll(/<a\b[^>]*?\bhref="([^"]+)"/g)) {
    const raw = m[1].replace(/&amp;/g, "&");
    if (/^(mailto:|tel:|#|\/\/)/.test(raw)) continue;
    let u;
    try {
      u = new URL(raw, SITE);
    } catch {
      continue;
    }
    if (u.origin !== SITE && !/^localhost$|^127\.0\.0\.1$/.test(u.hostname)) continue;
    out.add(u.pathname.replace(/(.)\/$/, "$1"));
  }
  return out;
}

// 1. robots.txt names the sitemap.
const robots = await (await get("/robots.txt")).text();
if (!new RegExp(`^Sitemap:\\s*${SITE}/sitemap\\.xml\\s*$`, "mi").test(robots))
  fail("robots.txt: no `Sitemap: " + SITE + "/sitemap.xml` line");

// 2. Parse sitemap.xml.
const smRes = await get("/sitemap.xml");
if (smRes.status !== 200 || !/xml/.test(smRes.headers.get("content-type") ?? ""))
  fail(`/sitemap.xml: HTTP ${smRes.status} ${smRes.headers.get("content-type")}`);
const xml = await smRes.text();
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1] ?? "",
  lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? "",
}));
if (entries.length === 0) fail("/sitemap.xml: no <url> entries");

const seen = new Set();
const now = Date.now();
const pages = new Map(); // path -> Set of outbound internal paths
for (const e of entries) {
  if (!e.loc.startsWith(SITE)) {
    fail(`${e.loc}: not on ${SITE}`);
    continue;
  }
  const p = e.loc.slice(SITE.length) || "/";
  if (seen.has(p)) fail(`${p}: listed twice`);
  seen.add(p);
  if (/\.(md|json|csv|txt|xml)$/i.test(p)) fail(`${p}: machine format in sitemap`);
  const t = Date.parse(e.lastmod);
  if (!e.lastmod || Number.isNaN(t)) fail(`${p}: missing or invalid <lastmod>`);
  else if (t > now + 86_400_000) fail(`${p}: <lastmod> ${e.lastmod} is in the future`);

  const res = await get(p);
  const type = res.headers.get("content-type") ?? "";
  if (res.status !== 200) {
    fail(`${p}: HTTP ${res.status}${res.headers.get("location") ? " -> " + res.headers.get("location") : ""}`);
    continue;
  }
  if (!type.startsWith("text/html")) {
    fail(`${p}: content-type ${type}`);
    continue;
  }
  const html = await res.text();
  if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html)) fail(`${p}: noindex`);
  if (/noindex/i.test(res.headers.get("x-robots-tag") ?? "")) fail(`${p}: X-Robots-Tag noindex`);
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  if (!canonical) fail(`${p}: no rel=canonical`);
  else if (canonical.replace(/\/$/, "") !== e.loc.replace(/\/$/, ""))
    fail(`${p}: canonical is ${canonical}`);
  pages.set(p, hrefs(html));
}

// 3. All-identical lastmod is the `new Date()` anti-pattern.
if (entries.length > 5 && new Set(entries.map((e) => e.lastmod)).size === 1)
  fail("every <lastmod> is identical: that is a build timestamp, not an edit date");

// 4. Click depth from the home page, over sitemap pages only.
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const cur = queue.shift();
  for (const next of pages.get(cur) ?? []) {
    if (!pages.has(next) || depth.has(next)) continue;
    depth.set(next, depth.get(cur) + 1);
    queue.push(next);
  }
}
let maxDepth = 0;
const byDepth = {};
for (const p of pages.keys()) {
  const d = depth.get(p);
  if (d === undefined) {
    fail(`${p}: orphan, not reachable by links from /`);
    continue;
  }
  byDepth[d] = (byDepth[d] ?? 0) + 1;
  if (d > maxDepth) maxDepth = d;
  if (d > MAX_DEPTH) fail(`${p}: ${d} clicks from / (max ${MAX_DEPTH})`);
}

// 5. The HTML site map and sitemap.xml list exactly the same URLs.
if (pages.has(HTML_SITEMAP)) {
  const html = await (await get(HTML_SITEMAP)).text();
  const start = html.indexOf('id="site-map-list"');
  const list = start === -1 ? "" : html.slice(start, html.indexOf("</main>", start));
  if (!list) fail(`${HTML_SITEMAP}: no #site-map-list block`);
  const listed = hrefs(list);
  for (const p of pages.keys()) {
    if (p !== HTML_SITEMAP && !listed.has(p)) fail(`${HTML_SITEMAP}: does not link ${p}`);
  }
  for (const p of listed) {
    if (!pages.has(p)) fail(`${HTML_SITEMAP}: links ${p}, which is not in sitemap.xml`);
  }
} else {
  fail(`${HTML_SITEMAP}: HTML site map is not in sitemap.xml`);
}

// 6. Canonical Link headers on machine formats.
for (const [endpoint, parent] of Object.entries(MACHINE_CANONICALS)) {
  const res = await get(endpoint);
  const link = res.headers.get("link") ?? "";
  if (res.status !== 200) fail(`${endpoint}: HTTP ${res.status}`);
  else if (!link.includes(`<${SITE}${parent}>; rel="canonical"`))
    fail(`${endpoint}: Link header is "${link}", expected canonical ${parent}`);
}

fs.mkdirSync(path.join(process.cwd(), "reports"), { recursive: true });
fs.writeFileSync(
  path.join(process.cwd(), "reports", "sitemap-check.json"),
  JSON.stringify(
    { urls: entries.length, maxDepth, byDepth, depth: Object.fromEntries(depth), failures },
    null,
    2,
  ) + "\n",
);

console.log(
  `sitemap: ${entries.length} URLs, max click depth from / = ${maxDepth} ` +
    `(${Object.entries(byDepth).map(([d, n]) => `depth ${d}: ${n}`).join(", ")})`,
);
if (failures.length) {
  for (const f of failures) console.error("FAIL " + f);
  console.error(`${failures.length} sitemap failure(s)`);
  process.exit(1);
}
console.log("sitemap OK: every URL is 200 text/html, self-canonical, indexable, linked, dated");
