#!/usr/bin/env node
// Live-site monitor for matthewshotelmarkets.com. Run by
// .github/workflows/site-monitor.yml every 15 minutes, on GitHub's servers.
//
// Checks, with one request per URL (AGENTS.md rule 5):
//   - key pages answer 200 HTML and are not behind Vercel's bot challenge;
//   - no page references /_next/image (the optimizer quota is spent, so those
//     URLs answer 402 and photos go blank; see next.config.ts);
//   - every image on those pages answers 200 with an image content type.
//
// Prints a Markdown report. Exits 1 when anything is broken.
//
//   node scripts/site-monitor.mjs [base-url]

const BASE = (process.argv[2] || "https://matthewshotelmarkets.com").replace(/\/$/, "");
const PAGES = ["/", "/listings", "/hotel-financing", "/rates", "/contact"];
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36 matthews-site-monitor";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url) {
  try {
    const res = await fetch(url, { headers: { "user-agent": UA, accept: "text/html,image/*,*/*" }, redirect: "follow" });
    return res;
  } catch (err) {
    return { status: 0, headers: new Headers(), text: async () => "", error: String(err) };
  }
}

const problems = [];
const rows = [];
const images = new Set();

for (const path of PAGES) {
  const res = await get(BASE + path);
  const mitigated = res.headers.get("x-vercel-mitigated");
  const html = res.status === 200 ? await res.text() : "";
  let status = "ok";
  if (res.status !== 200) status = `HTTP ${res.status}${res.error ? ` (${res.error})` : ""}`;
  else if (mitigated) status = `Vercel bot challenge (${mitigated})`;
  else if (html.includes("/_next/image")) status = "uses /_next/image (optimizer returns 402)";
  if (status !== "ok") problems.push(`Page ${path}: ${status}`);
  rows.push(`| page | ${path} | ${status} |`);
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    const src = m[1].replace(/&amp;/g, "&");
    if (!src.startsWith("data:")) images.add(new URL(src, BASE + "/").href);
  }
  await sleep(1000);
}

for (const url of images) {
  const res = await get(url);
  const type = res.headers.get("content-type") || "";
  let status = "ok";
  if (res.status !== 200) status = `HTTP ${res.status}`;
  else if (!type.startsWith("image/")) status = `not an image (${type})`;
  if (status !== "ok") problems.push(`Image ${url}: ${status}`);
  rows.push(`| image | ${url.replace(BASE, "")} | ${status} |`);
  await sleep(500);
}

const when = new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";
console.log(problems.length ? `## matthewshotelmarkets.com has ${problems.length} problem(s)` : "## matthewshotelmarkets.com is healthy");
console.log(`\nChecked ${when}: ${PAGES.length} pages, ${images.size} images.\n`);
if (problems.length) console.log(problems.map((p) => `- ${p}`).join("\n") + "\n");
console.log("| kind | url | status |\n|---|---|---|\n" + rows.join("\n"));
if (images.size === 0) {
  console.log("\n- No images found on the checked pages, which is itself a problem.");
  process.exit(1);
}
process.exit(problems.length ? 1 : 0);
