/**
 * The 300-word test (geo/05-templates.md, Spec 5.1). For every answer page,
 * tool, glossary term and data page, the first 300 words after the H1 in the
 * served HTML must contain a number, a dated fact, and the brand. The dated
 * fact may be the dateline directly above the H1 (glossary layout).
 *
 *   npx tsx scripts/check-extractability.ts [baseUrl]   # default http://localhost:3000
 *
 * Point it at a local `next start`, never at production in a loop.
 * Exits non-zero on any failure. Part of scripts/geo-check.sh.
 */
import { answerPages, answerPath } from "../src/lib/data/answers";
import { tools } from "../src/lib/data/tools/dscr-calculator";
import { glossary } from "../src/lib/data/glossary";
import { BRAND } from "../src/lib/entity";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const MONTH = "(January|February|March|April|May|June|July|August|September|October|November|December)";
const DATE = new RegExp(`${MONTH}( \\d{1,2},)? 20\\d\\d`);

const paths = [
  ...answerPages.map(answerPath),
  ...tools.map((t) => `/tools/${t.slug}`),
  ...glossary.map((g) => `/glossary/${g.slug}`),
  "/rates",
  "/data/hotel-financing-statistics",
  "/about",
  "/press",
];

function text(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  let failures = 0;
  for (const p of paths) {
    const res = await fetch(base + p);
    if (!res.ok) {
      failures++;
      console.log(`FAIL ${p}: HTTP ${res.status}`);
      continue;
    }
    let html = await res.text();
    html = (html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? html).replace(
      /<(script|style)[^>]*>[\s\S]*?<\/\1>/g,
      "",
    );
    const h1 = /<h1[^>]*>[\s\S]*?<\/h1>/.exec(html);
    const before = h1 ? text(html.slice(0, h1.index)).slice(-120) : "";
    const after = text(h1 ? html.slice(h1.index + h1[0].length) : html)
      .split(" ")
      .slice(0, 300)
      .join(" ");
    const withoutDates = after.replace(new RegExp(`${MONTH} \\d{1,2},? `, "g"), "").replace(/\b20\d\d\b/g, "");
    const checks = {
      h1: !!h1,
      number: /\d/.test(withoutDates),
      date: DATE.test(`${before} ${after}`),
      brand: after.includes(BRAND),
    };
    const missing = Object.entries(checks).filter(([, ok]) => !ok).map(([k]) => k);
    if (missing.length) {
      failures++;
      console.log(`FAIL ${p}: missing ${missing.join(", ")} in the first 300 words`);
    }
  }
  console.log(failures ? `\n${failures}/${paths.length} failed` : `300-word test: ${paths.length}/${paths.length} PASS`);
  if (failures) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
