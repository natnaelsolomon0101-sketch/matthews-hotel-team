#!/usr/bin/env node
// Metadata and crawl-hygiene audit of the LOCAL production build.
//
//   node scripts/metadata-audit.mjs http://localhost:<port> [--json out.json]
//
// Crawls every URL in the local /sitemap.xml (paths are re-based onto the
// local server; nothing is ever requested from matthewshotelmarkets.com) and
// reports per URL: status and redirects, title (length, duplicates), meta
// description (length, duplicates, missing), H1 count, canonical
// (present and self-referential), og:title / og:description / og:image,
// robots meta, <html lang>, hreflang, images without alt, heading-level
// skips, BreadcrumbList presence, trailing-slash consistency, internal links
// that point at a redirected URL (vercel.json sources), and the 404 page.
//
// FAILS (exit 1) on: non-200 or redirected sitemap URL, missing title,
// missing description, duplicate title, not exactly one H1, canonical missing
// or not self-referential, noindex on a sitemap URL, missing html lang,
// <img> without an alt attribute, internal link to a redirected URL, unknown
// path not returning a real 404. Everything else is a WARNING in the report.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const base = (process.argv[2] || "").replace(/\/$/, "");
if (!/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(base)) {
  console.error("usage: node scripts/metadata-audit.mjs http://localhost:<port>  (local builds only)");
  process.exit(2);
}
const jsonIdx = process.argv.indexOf("--json");
const jsonOut = jsonIdx > -1 ? process.argv[jsonIdx + 1] : null;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://matthewshotelmarkets.com";
const TITLE_MAX = 60;
const TITLE_HARD_MAX = 70; // beyond this Google truncates on every device
const DESC_MIN = 120;
const DESC_MAX = 160;

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, "i"));
  return m ? decode(m[1] ?? m[2]) : null;
};
const metaContent = (html, key, value) => {
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    if ((attr(m[0], key) || "").toLowerCase() === value) return attr(m[0], "content");
  }
  return null;
};

async function get(pathname) {
  const res = await fetch(base + pathname, { redirect: "manual", headers: { accept: "text/html" } });
  const body = res.status === 200 || res.status === 404 ? await res.text() : "";
  return { status: res.status, location: res.headers.get("location"), body };
}

function analyse(pathname, html) {
  // Next streams <head> metadata; with a static prerender it is in the HTML.
  const head = html;
  const noScripts = html.replace(/<script\b[\s\S]*?<\/script>/gi, "").replace(/<noscript\b[\s\S]*?<\/noscript>/gi, "");
  const title = decode((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "").trim();
  const description = (metaContent(head, "name", "description") || "").trim();
  const canonicalTag = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]).find((t) => (attr(t, "rel") || "").toLowerCase() === "canonical");
  const canonical = canonicalTag ? attr(canonicalTag, "href") : null;
  const h1s = [...noScripts.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => decode(m[1].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim());
  const headings = [...noScripts.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  const skips = [];
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] > headings[i - 1] + 1) skips.push(`h${headings[i - 1]}->h${headings[i]}`);
  }
  const imgs = [...noScripts.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const imgsNoAlt = imgs.filter((t) => attr(t, "alt") === null).map((t) => attr(t, "src") || "?");
  // alt="" is valid for decorative images, but only when the image is hidden
  // from assistive tech or sits inside aria-hidden markup. Report the count.
  const imgsEmptyAlt = imgs.filter((t) => attr(t, "alt") === "").length;
  const htmlTag = (html.match(/<html\b[^>]*>/i) || [""])[0];
  const links = [...noScripts.matchAll(/<a\b[^>]*>/gi)]
    .map((m) => attr(m[0], "href"))
    .filter((h) => h && (h.startsWith("/") || h.startsWith(SITE)))
    .map((h) => (h.startsWith(SITE) ? h.slice(SITE.length) || "/" : h))
    .map((h) => h.split("#")[0].split("?")[0])
    .filter(Boolean);
  const ld = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]).join("\n");
  return {
    path: pathname,
    title,
    titleLen: title.length,
    description,
    descLen: description.length,
    canonical,
    h1s,
    headingSkips: [...new Set(skips)],
    imgsNoAlt,
    imgsEmptyAlt,
    lang: attr(htmlTag, "lang"),
    robots: metaContent(head, "name", "robots"),
    ogTitle: metaContent(head, "property", "og:title"),
    ogDescription: metaContent(head, "property", "og:description"),
    ogImage: metaContent(head, "property", "og:image"),
    hreflang: /<link\b[^>]*hreflang=/i.test(head),
    breadcrumb: /"BreadcrumbList"/.test(ld),
    links: [...new Set(links)],
  };
}

const sm = await get("/sitemap.xml");
if (sm.status !== 200) {
  console.error(`FAIL /sitemap.xml: HTTP ${sm.status}`);
  process.exit(1);
}
const locs = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1].trim()));
const failures = [];
const warnings = [];
const fail = (p, msg) => failures.push(`${p}: ${msg}`);
const warn = (p, msg) => warnings.push(`${p}: ${msg}`);

const paths = [];
for (const loc of locs) {
  if (!loc.startsWith(SITE)) {
    fail(loc, "sitemap URL is not on the canonical host");
    continue;
  }
  paths.push(loc.slice(SITE.length) || "/");
}
if (new Set(paths).size !== paths.length) fail("/sitemap.xml", "duplicate <loc> entries");

const redirectSources = new Set(
  (JSON.parse(fs.readFileSync(path.join(ROOT, "vercel.json"), "utf8")).redirects || []).map((r) => r.source),
);

const pages = [];
const queue = [...new Set(paths)];
const CONCURRENCY = 8;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    for (let p = queue.shift(); p !== undefined; p = queue.shift()) {
      const r = await get(p);
      if (r.status !== 200) {
        fail(p, `sitemap URL returns HTTP ${r.status}${r.location ? ` -> ${r.location}` : ""}`);
        continue;
      }
      pages.push(analyse(p, r.body));
    }
  }),
);
pages.sort((a, b) => a.path.localeCompare(b.path));

const byTitle = new Map();
const byDesc = new Map();
for (const pg of pages) {
  const p = pg.path;
  const self = SITE + (p === "/" ? "" : p);
  if (p !== "/" && p.endsWith("/")) fail(p, "sitemap URL has a trailing slash (site convention is none)");
  if (redirectSources.has(p)) fail(p, "sitemap URL is a vercel.json redirect source");

  if (!pg.title) fail(p, "missing <title>");
  else {
    byTitle.set(pg.title, [...(byTitle.get(pg.title) || []), p]);
    if (pg.titleLen > TITLE_HARD_MAX) warn(p, `title ${pg.titleLen} chars (> ${TITLE_HARD_MAX}): "${pg.title}"`);
    else if (pg.titleLen > TITLE_MAX) warn(p, `title ${pg.titleLen} chars (> ${TITLE_MAX})`);
  }
  if (!pg.description) fail(p, "missing meta description");
  else {
    byDesc.set(pg.description, [...(byDesc.get(pg.description) || []), p]);
    if (pg.descLen < DESC_MIN) warn(p, `description ${pg.descLen} chars (< ${DESC_MIN})`);
    if (pg.descLen > DESC_MAX) warn(p, `description ${pg.descLen} chars (> ${DESC_MAX})`);
  }
  if (pg.h1s.length !== 1) fail(p, `${pg.h1s.length} <h1> elements (want exactly 1)`);
  if (!pg.canonical) fail(p, "missing canonical");
  else if (pg.canonical.replace(/\/$/, "") !== self.replace(/\/$/, "")) fail(p, `canonical is ${pg.canonical}, expected ${self}`);
  if (pg.robots && /noindex/i.test(pg.robots)) fail(p, `robots meta "${pg.robots}" on a sitemap URL`);
  if (pg.lang !== "en") fail(p, `<html lang> is ${JSON.stringify(pg.lang)}`);
  if (!pg.ogTitle) warn(p, "missing og:title");
  if (!pg.ogDescription) warn(p, "missing og:description");
  if (!pg.ogImage) warn(p, "missing og:image");
  if (pg.hreflang) warn(p, "hreflang present (single-locale site: not expected)");
  if (pg.imgsNoAlt.length) fail(p, `<img> without alt attribute: ${pg.imgsNoAlt.slice(0, 3).join(", ")}`);
  if (pg.headingSkips.length) warn(p, `heading levels skip: ${pg.headingSkips.join(", ")}`);
  if (p !== "/" && !pg.breadcrumb) warn(p, "no BreadcrumbList in JSON-LD");
  for (const l of pg.links) {
    if (redirectSources.has(l)) fail(p, `internal link to redirected URL ${l}`);
    if (l !== "/" && l.endsWith("/")) warn(p, `internal link with trailing slash ${l}`);
  }
}
for (const [t, ps] of byTitle) if (ps.length > 1) fail(ps[0], `duplicate title "${t}" also on ${ps.slice(1).join(", ")}`);
for (const [d, ps] of byDesc) if (ps.length > 1) warn(ps[0], `duplicate description also on ${ps.slice(1).join(", ")}: "${d.slice(0, 70)}..."`);

// Every internal link target that is not itself a sitemap URL: a 404 fails, a
// redirect is a warning (vercel.json redirects never run under `next start`,
// so those are matched by source above; this catches in-app redirects such
// as /research/mhi -> the newest quarter, which is a deliberate alias).
{
  const known = new Set(pages.map((p) => p.path));
  const linkedFrom = new Map();
  for (const pg of pages) for (const l of pg.links) if (!known.has(l) && !linkedFrom.has(l)) linkedFrom.set(l, pg.path);
  const targets = [...linkedFrom.keys()].filter((l) => !redirectSources.has(l));
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (let l = targets.shift(); l !== undefined; l = targets.shift()) {
        const res = await fetch(base + l, { method: "GET", redirect: "manual" });
        await res.arrayBuffer();
        if (res.status >= 300 && res.status < 400) warn(linkedFrom.get(l), `internal link ${l} answers HTTP ${res.status} -> ${res.headers.get("location")}`);
        else if (res.status === 404) fail(linkedFrom.get(l), `internal link ${l} is a 404`);
      }
    }),
  );
}

// 404 handling: an unknown path must be a real 404 (not a soft 404), must be
// noindex, and must carry the site nav and links to the hubs.
const HUBS = ["/hotel-financing", "/sell-a-hotel", "/hotel-valuation", "/buy-a-hotel", "/rates", "/listings", "/contact"];
for (const p of ["/this-page-does-not-exist-audit", "/hotel-financing/this-page-does-not-exist-audit", "/glossary/this-page-does-not-exist-audit"]) {
  const r = await get(p);
  if (r.status !== 404) {
    fail(p, `unknown path returns HTTP ${r.status} (soft 404)`);
    continue;
  }
  const a = analyse(p, r.body);
  if (!/noindex/i.test(a.robots || "")) fail(p, "404 page is not noindex");
  if (a.h1s.length !== 1) fail(p, `404 page has ${a.h1s.length} <h1>`);
  const missing = HUBS.filter((h) => !a.links.includes(h));
  if (missing.length) fail(p, `404 page does not link to ${missing.join(", ")}`);
}
// Trailing-slash variant must not serve a duplicate 200.
{
  const r = await get("/rates/");
  if (r.status === 200) fail("/rates/", "trailing-slash variant serves 200 (duplicate content)");
  else if (![301, 308].includes(r.status)) warn("/rates/", `trailing-slash variant returns HTTP ${r.status}`);
}

const stats = {
  urls: pages.length,
  titleOver60: pages.filter((p) => p.titleLen > TITLE_MAX).length,
  titleOver70: pages.filter((p) => p.titleLen > TITLE_HARD_MAX).length,
  descShort: pages.filter((p) => p.descLen && p.descLen < DESC_MIN).length,
  descLong: pages.filter((p) => p.descLen > DESC_MAX).length,
  duplicateTitles: [...byTitle.values()].filter((v) => v.length > 1).length,
  duplicateDescriptions: [...byDesc.values()].filter((v) => v.length > 1).length,
  missingOgImage: pages.filter((p) => !p.ogImage).length,
  noBreadcrumb: pages.filter((p) => p.path !== "/" && !p.breadcrumb).length,
  headingSkips: pages.filter((p) => p.headingSkips.length).length,
  emptyAltImages: pages.reduce((n, p) => n + p.imgsEmptyAlt, 0),
};
if (jsonOut) {
  fs.mkdirSync(path.dirname(path.resolve(jsonOut)), { recursive: true });
  fs.writeFileSync(jsonOut, JSON.stringify({ stats, failures, warnings, pages: pages.map((pg) => ({ ...pg, links: undefined })) }, null, 2));
}
const verbose = process.argv.includes("--verbose");
console.log(`metadata audit: ${pages.length} sitemap URLs`);
console.log(JSON.stringify(stats));
if (warnings.length) {
  console.log(`${warnings.length} warnings${verbose ? "" : " (run with --verbose to list)"}`);
  if (verbose) for (const w of warnings) console.log(`  warn  ${w}`);
}
if (failures.length) {
  for (const f of failures) console.error(`  FAIL  ${f}`);
  console.error(`metadata audit: ${failures.length} failures`);
  process.exit(1);
}
console.log("metadata audit: PASS");
