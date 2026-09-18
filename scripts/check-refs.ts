/**
 * Citation integrity for every answer page (and tool page): each inline [n]
 * must point at a listed source, and each listed source must be cited at
 * least once. Also flags em-dashes and filler words in page copy ("leverage"
 * is allowed: in hotel finance it means debt, not a verb).
 *
 *   npx tsx scripts/check-refs.ts
 *
 * Exits non-zero on any failure. Part of scripts/geo-check.sh.
 */
import { answerPages, answerPath } from "../src/lib/data/answers";
import { tools } from "../src/lib/data/tools";

const BANNED = /\b(unlock(s|ed|ing)?|navigate|seamless(ly)?|robust|delve|in today's)\b/i;

let failures = 0;
const pages = [
  ...answerPages.map((p) => ({ path: answerPath(p), page: p as unknown as Record<string, unknown> })),
  ...tools.map((t) => ({ path: `/tools/${t.slug}`, page: t as unknown as Record<string, unknown> })),
];

for (const { path, page } of pages) {
  const { sources, ...rest } = page as { sources?: { n: number }[] };
  const text = JSON.stringify(rest);
  const problems: string[] = [];

  if (Array.isArray(sources) && sources.every((s) => typeof s.n === "number")) {
    const cited = new Set([...text.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1])));
    const listed = new Set(sources.map((s) => s.n));
    const dangling = [...cited].filter((n) => !listed.has(n));
    const uncited = [...listed].filter((n) => !cited.has(n));
    if (dangling.length) problems.push(`[n] with no source: ${dangling.join(", ")}`);
    if (uncited.length) problems.push(`source never cited: ${uncited.join(", ")}`);
  }
  if (text.includes("—")) problems.push("contains an em-dash");
  const banned = text.match(BANNED);
  if (banned) problems.push(`banned word: "${banned[0]}"`);

  if (problems.length) {
    failures++;
    console.log(`FAIL ${path}: ${problems.join("; ")}`);
  }
}

console.log(failures ? `\n${failures} page(s) failed` : `refs OK on ${pages.length} pages`);
if (failures) process.exitCode = 1;
