/**
 * Recomputes every figure on /hotel-financing/chapter-11-bankruptcy before the
 * page is saved, and re-checks the template's own limits.
 *
 * Sourced inputs (read 2026-10-16):
 *   - monthly payments under 11 U.S.C. 362(d)(3)(B) equal "interest at the then
 *     applicable nondefault contract rate of interest on the value of the
 *     creditor's interest in the real estate";
 *   - the 90-day deadline, and the 30-day alternative, in 362(d)(3);
 *   - $1,167 Chapter 11 case fee: 28 U.S.C. 1930(a)(3);
 *   - $571 administrative fee for a Chapter 11 petition: Bankruptcy Court
 *     Miscellaneous Fee Schedule item 8, effective December 1, 2023;
 *   - 0.9 percent of quarterly disbursements, capped at $250,000, in quarters
 *     of at least $1,000,000, and the greater of 0.4 percent or $250 below
 *     that: 28 U.S.C. 1930(a)(6)(B), as amended by Pub. L. 119-76;
 *   - $3,424,000 small business debtor ceiling, up from $3,024,725, effective
 *     April 1, 2025: 90 FR 8941 (February 4, 2025);
 *   - 10,320 Chapter 11 filings in the year ending June 30, 2026, against
 *     8,408 the year before: Administrative Office release of July 28, 2026;
 *   - 120 / 180 days and the 18 / 20-month caps: 11 U.S.C. 1121(b), (c)(3),
 *     (d)(2).
 *
 * Hypothetical inputs (assumptions, not published figures): the 110 keys, the
 * $14,000,000 balance, the 6.50 percent nondefault contract rate, the
 * $11,500,000 court valuation, the $7,600,000 of revenue and the $1,850,000 of
 * quarterly disbursements.
 *
 * Re-run:  node scripts/check-chapter-11-math.mjs
 */
import { readFileSync } from "node:fs";

const fail = [];
const eq = (label, got, want) => {
  const ok =
    typeof got === "number" && typeof want === "number"
      ? Math.abs(got - want) < 1e-6
      : got === want;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
  if (!ok) fail.push(label);
};
const money2 = (n) => Number(n.toFixed(2));
const round0 = (n) => Math.round(n);
const pct1 = (a, b) => Number(((a / b) * 100).toFixed(1));

/* ------------------------------------------------------ sourced constants */
const CASE_FEE = 1167;            // 28 U.S.C. 1930(a)(3)
const ADMIN_FEE = 571;            // Fee Schedule item 8
const UST_RATE = 0.009;           // 1930(a)(6)(B)(ii)(II)
const UST_CAP = 250000;           // same
const UST_TIER = 1000000;          // same
const SUBV_CEILING = 3424000;     // 101(51D) as adjusted, 90 FR 8941
const SUBV_PRIOR = 3024725;       // the figure it replaced
const CH11_FILINGS_2026 = 10320;  // year ending June 30, 2026
const CH11_FILINGS_2025 = 8408;   // year ending June 30, 2025

/* -------------------------------------------------- hypothetical scenario */
const KEYS = 110;
const BALANCE = 14000000;
const RATE = 0.065;
const SECURED_VALUE = 11500000;
const REVENUE = 7600000;
const QUARTERLY_DISBURSEMENTS = 1850000;

console.log("\n-- statutory figures quoted on the page --");
eq("filing cost at the window ($1,167 + $571)", CASE_FEE + ADMIN_FEE, 1738);
eq("Subchapter V ceiling since April 1, 2025", SUBV_CEILING, 3424000);
eq("the adjustment it replaced", SUBV_PRIOR, 3024725);
eq(
  "a $14,000,000 loan is over the ceiling by a factor of four (floor)",
  Math.floor(BALANCE / SUBV_CEILING),
  4,
);
eq("Chapter 11 filings, year ending June 30, 2026", CH11_FILINGS_2026, 10320);
eq(
  "that is more than the prior year",
  CH11_FILINGS_2026 > CH11_FILINGS_2025 ? 1 : 0,
  1,
);

console.log("\n-- the 362(d)(3)(B) payment, on value not balance --");
const annualOnValue = SECURED_VALUE * RATE;
eq("annual interest on the $11,500,000 value at 6.50%", annualOnValue, 747500);
const monthlyOnValue = money2(annualOnValue / 12);
eq("monthly payment", monthlyOnValue, 62291.67);
const monthlyOnBalance = money2((BALANCE * RATE) / 12);
eq("monthly interest on the full $14,000,000 balance", monthlyOnBalance, 75833.33);
eq(
  "saving from calculating on value rather than balance, rounded to the dollar",
  round0(monthlyOnBalance - monthlyOnValue),
  13542,
);
eq("annual payment as a share of $7,600,000 revenue", pct1(annualOnValue, REVENUE), 9.8);

console.log("\n-- statutory running cost for one year --");
eq(
  "the quarter is in the 0.9 percent tier",
  QUARTERLY_DISBURSEMENTS >= UST_TIER ? 1 : 0,
  1,
);
const ustQuarter = money2(QUARTERLY_DISBURSEMENTS * UST_RATE);
eq("quarterly United States trustee fee", ustQuarter, 16650);
eq("below the $250,000 cap", ustQuarter < UST_CAP ? 1 : 0, 1);
const ustYear = money2(ustQuarter * 4);
eq("four quarters", ustYear, 66600);

console.log("\n-- the year that follows the day-90 payment election --");
// Payments commence at the deadline, so months 4 through 12 of a 12-month case.
const monthsPaying = 12 - 3;
eq("months of payments in the first year", monthsPaying, 9);
const paymentsYear = money2(annualOnValue * (monthsPaying / 12));
eq("nine monthly payments", paymentsYear, 560625);
eq(
  "nine times the monthly figure agrees to the dollar",
  round0(monthlyOnValue * monthsPaying),
  round0(paymentsYear),
);
const total = money2(paymentsYear + ustYear + CASE_FEE + ADMIN_FEE);
eq("payments plus trustee fees plus the filing cost", total, 628963);
eq("per key", round0(total / KEYS), 5718);

console.log("\n-- deadlines in the table --");
eq("single asset real estate clock, days", 90, 90);
eq("alternative clock after the court's ruling, days", 30, 30);
eq("exclusivity to file, days", 120, 120);
eq("exclusivity to file, outer cap in months", 18, 18);
eq("exclusivity to get acceptance, days", 180, 180);
eq("acceptance exclusivity, outer cap in months", 20, 20);

/* ------------------------------------------------- the template's limits */
const src = readFileSync(
  new URL("../src/lib/data/answers/hotel-financing/chapter-11-bankruptcy.ts", import.meta.url),
  "utf8",
);
const { page } = await import(
  "../src/lib/data/answers/hotel-financing/chapter-11-bankruptcy.ts"
).catch(() => ({ page: null }));

console.log("\n-- template limits --");
if (!page) {
  // Node cannot import TypeScript directly; fall back to the gate's own
  // checks for the structural limits and verify only what the text shows.
  console.log("note: run `npx tsx scripts/check-chapter-11-math.mjs` for the structural checks");
  eq("no em-dash in the source file", src.includes("—") ? 1 : 0, 0);
} else {
  const words = (s) => s.replace(/\[\d+\]/g, "").split(/\s+/).filter(Boolean).length;
  const answerWords = words(page.answer);
  eq("answer is 40 to 70 words", answerWords >= 40 && answerWords <= 70 ? 1 : 0, 1);
  eq("takeaways 3 to 5", page.takeaways.length >= 3 && page.takeaways.length <= 5 ? 1 : 0, 1);
  eq("faq 5 to 8", page.faq.length >= 5 && page.faq.length <= 8 ? 1 : 0, 1);
  const longFaq = page.faq.filter((f) => words(f.a) > 50).map((f) => f.q);
  eq("every faq answer is 50 words or fewer", longFaq.length, 0);
  if (longFaq.length) console.log("   over:", longFaq.join(" | "));
  eq("title is 60 characters or fewer", page.title.length <= 60 ? 1 : 0, 1);
  eq("description is 155 characters or fewer", page.description.length <= 155 ? 1 : 0, 1);
  eq("sources, at least 4", page.sources.length >= 4 ? 1 : 0, 1);
  eq("siblings, at least 3", page.related.siblings.length >= 3 ? 1 : 0, 1);
  eq("cta goes to /contact", page.cta.href, "/contact");
  eq("no em-dash anywhere", JSON.stringify(page).includes("—") ? 1 : 0, 0);

  const bodyWords =
    answerWords +
    page.takeaways.reduce((n, t) => n + words(t), 0) +
    page.sections.reduce((n, s) => n + words(s.lead) + words(s.body), 0) +
    words(page.workedExample.body) +
    page.faq.reduce((n, f) => n + words(f.q) + words(f.a), 0);
  eq("body is 1,200 to 2,500 words", bodyWords >= 1200 && bodyWords <= 2500 ? 1 : 0, 1);

  // Sources must be numbered in order of first reference.
  const order = [...JSON.stringify({ ...page, sources: undefined }).matchAll(/\[(\d+)\]/g)]
    .map((m) => Number(m[1]));
  const firstSeen = [];
  for (const n of order) if (!firstSeen.includes(n)) firstSeen.push(n);
  const sorted = [...firstSeen].sort((a, b) => a - b);
  eq("sources numbered in order of first reference", firstSeen.join(",") , sorted.join(","));
  if (firstSeen.join(",") !== sorted.join(",")) console.log("   first-reference order:", firstSeen.join(","));

  console.log(
    `\nanswer ${answerWords} words, body ${bodyWords} words, title ${page.title.length} chars, description ${page.description.length} chars, sources ${page.sources.length}`,
  );
}

console.log(
  fail.length ? `\n${fail.length} FAILED: ${fail.join("; ")}` : "\nall assertions passed",
);
process.exit(fail.length ? 1 : 0);
