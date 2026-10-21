/**
 * Recomputes every figure on /hotel-financing/bank-cre-concentration-limits
 * before the page is saved, and re-checks the template's own limits.
 *
 * Sourced inputs (read 2026-10-21):
 *   - 100 percent of total capital for construction, land development and
 *     other land; 300 percent of total capital for total commercial real
 *     estate together with 50 percent growth over the prior 36 months:
 *     71 FR 74580 at 74587, criteria (1) and (2);
 *   - total capital for those criteria is total risk-based capital, Call
 *     Report schedule RC-R line 21: same page, footnote 5;
 *   - loans secured by hotels and motels are reported in schedule RC-C item
 *     1.e.(2), other nonfarm nonresidential: FFIEC 031 and 041 instructions,
 *     September 2026 edition, page RC-C-6d;
 *   - supervisory loan-to-value limits of 85 percent on improved property and
 *     80 percent on commercial construction, the 100 percent of total capital
 *     aggregate on loans above them, and the 30 percent sub-limit on
 *     commercial property: appendix A to subpart A of 12 CFR part 365;
 *   - total capital in those guidelines is tier 1 capital plus the allowance:
 *     same appendix, footnote 4;
 *   - 200 percent industry median, 311 percent at banks with $1 billion to
 *     $10 billion of assets, 289 percent at $10 billion to $100 billion, the
 *     214 percent year-end 2008 peak and 3.1 percent 2025 CRE loan growth:
 *     FDIC Risk Review 2026, pages 16 and 17;
 *   - 31 percent of all banks, 1,374 of them, CRE-concentrated at year-end
 *     2024: FDIC Risk Review 2025, footnote 12;
 *   - 7 eased, 45 unchanged, 1 tightened of 53 respondents on nonfarm
 *     nonresidential standards in the second quarter of 2026, and 30.2 plus
 *     3.8 plus 1.9 percent tighter than the post-2005 midpoint against 18.9
 *     percent easier: July 2026 SLOOS, table 1, questions 8 and the special
 *     question;
 *   - 1.75 times actual net worth: 12 U.S.C. 1757a(a)(1).
 *
 * Hypothetical inputs (assumptions, not published figures): the bank's
 * $900,000,000 of assets, $104,000,000 of total risk-based capital,
 * $97,000,000 of tier 1 plus allowance, $85,000,000 of construction loans,
 * $300,000,000 of commercial real estate loans now and $205,000,000 36 months
 * ago, the 100-key hotel, its $10,000,000 value and both loan requests.
 *
 * Re-run:  npx tsx scripts/check-cre-concentration-math.mjs
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
const pct1 = (a, b) => Number(((a / b) * 100).toFixed(1));

/* ------------------------------------------------------ sourced constants */
const SCREEN_ADC = 100; // percent of total capital, criterion (1)
const SCREEN_CRE = 300; // percent of total capital, criterion (2)
const SCREEN_GROWTH = 50; // percent over the prior 36 months, criterion (2)
const LTV_IMPROVED = 85; // percent, improved property
const LTV_COMMERCIAL_CONSTRUCTION = 80; // percent
const EXCESS_AGGREGATE = 100; // percent of total capital
const EXCESS_COMMERCIAL = 30; // percent of total capital
const MEDIAN_INDUSTRY = 200; // percent, year-end 2025
const MEDIAN_1B_10B = 311; // percent, year-end 2025
const MEDIAN_10B_100B = 289; // percent, year-end 2025
const PEAK_2008 = 214; // percent, year-end 2008
const CU_MULTIPLE = 1.75; // times actual net worth

/* ------------------------------------------- SLOOS, July 2026, question 8 */
const SLOOS_TOTAL = 53;
const SLOOS_EASED = 7;
const SLOOS_UNCHANGED = 45;
const SLOOS_TIGHTENED = 1;
const SLOOS_TIGHTER_THAN_MIDPOINT = 30.2 + 3.8 + 1.9;
const SLOOS_EASIER_THAN_MIDPOINT = 18.9;

console.log("-- sources agree with themselves --");
eq("SLOOS question 8 responses sum to the total", SLOOS_EASED + SLOOS_UNCHANGED + SLOOS_TIGHTENED, SLOOS_TOTAL);
eq("SLOOS tighter than the midpoint, percent", Number(SLOOS_TIGHTER_THAN_MIDPOINT.toFixed(1)), 35.9);
eq("SLOOS easier than the midpoint, percent", SLOOS_EASIER_THAN_MIDPOINT, 18.9);
eq("the 2025 median is below the 2008 peak", MEDIAN_INDUSTRY < PEAK_2008 ? 1 : 0, 1);
eq("the $1B to $10B median is above the 300 percent screen", MEDIAN_1B_10B > SCREEN_CRE ? 1 : 0, 1);
eq("the $10B to $100B median is below the screen", MEDIAN_10B_100B < SCREEN_CRE ? 1 : 0, 1);

/* -------------------------------------------------- hypothetical scenario */
const ASSETS = 900000000;
const TOTAL_RISK_BASED_CAPITAL = 104000000; // the 2006 guidance's denominator
const TIER1_PLUS_ALLOWANCE = 97000000; // the real estate guidelines' and FDIC's
const ADC_LOANS = 85000000;
const CRE_NOW = 300000000;
const CRE_36_MONTHS_AGO = 205000000;
const KEYS = 100;
const VALUE = 10000000;
const LOAN_A = 7000000;
const LOAN_B = 8800000;

console.log("\n-- the bank, before the loan --");
eq("assets, dollars", ASSETS, 900000000);
eq("construction as a share of total capital, percent", pct1(ADC_LOANS, TOTAL_RISK_BASED_CAPITAL), 81.7);
eq("construction is under the 100 percent screen", pct1(ADC_LOANS, TOTAL_RISK_BASED_CAPITAL) < SCREEN_ADC ? 1 : 0, 1);
eq("CRE on total risk-based capital, percent", pct1(CRE_NOW, TOTAL_RISK_BASED_CAPITAL), 288.5);
eq("CRE on tier 1 plus allowance, percent", pct1(CRE_NOW, TIER1_PLUS_ALLOWANCE), 309.3);
eq(
  "the two denominators straddle the 300 percent line",
  pct1(CRE_NOW, TOTAL_RISK_BASED_CAPITAL) < SCREEN_CRE && pct1(CRE_NOW, TIER1_PLUS_ALLOWANCE) > SCREEN_CRE ? 1 : 0,
  1,
);
const growthBefore = pct1(CRE_NOW - CRE_36_MONTHS_AGO, CRE_36_MONTHS_AGO);
eq("36-month CRE growth, percent", growthBefore, 46.3);
eq("growth is under the 50 percent leg", growthBefore < SCREEN_GROWTH ? 1 : 0, 1);

console.log("\n-- the $7,000,000 request --");
eq("value per key, dollars", VALUE / KEYS, 100000);
eq("loan-to-value, percent", pct1(LOAN_A, VALUE), 70.0);
eq("inside the 85 percent supervisory limit", pct1(LOAN_A, VALUE) <= LTV_IMPROVED ? 1 : 0, 1);
const creAfterA = CRE_NOW + LOAN_A;
eq("CRE after funding, dollars", creAfterA, 307000000);
eq("CRE after funding, percent of total capital", pct1(creAfterA, TOTAL_RISK_BASED_CAPITAL), 295.2);
eq("points below the 300 percent screen", Number((SCREEN_CRE - pct1(creAfterA, TOTAL_RISK_BASED_CAPITAL)).toFixed(1)), 4.8);
const growthAfterA = pct1(creAfterA - CRE_36_MONTHS_AGO, CRE_36_MONTHS_AGO);
eq("36-month growth after funding, percent", growthAfterA, 49.8);
eq("points below the 50 percent leg", Number((SCREEN_GROWTH - growthAfterA).toFixed(1)), 0.2);
eq("both legs still under", growthAfterA < SCREEN_GROWTH && pct1(creAfterA, TOTAL_RISK_BASED_CAPITAL) < SCREEN_CRE ? 1 : 0, 1);
const ceiling = (SCREEN_CRE / 100) * TOTAL_RISK_BASED_CAPITAL;
eq("3.00 times total capital, dollars", ceiling, 312000000);
eq("room left below the screen, dollars", ceiling - creAfterA, 5000000);
eq("the room left is smaller than another loan this size", ceiling - creAfterA < LOAN_A ? 1 : 0, 1);

console.log("\n-- the $8,800,000 request --");
eq("loan-to-value, percent", pct1(LOAN_B, VALUE), 88.0);
eq("above the 85 percent supervisory limit", pct1(LOAN_B, VALUE) > LTV_IMPROVED ? 1 : 0, 1);
eq("above the 80 percent construction limit too", pct1(LOAN_B, VALUE) > LTV_COMMERCIAL_CONSTRUCTION ? 1 : 0, 1);
const commercialBucket = (EXCESS_COMMERCIAL / 100) * TIER1_PLUS_ALLOWANCE;
const aggregateBucket = (EXCESS_AGGREGATE / 100) * TIER1_PLUS_ALLOWANCE;
eq("30 percent commercial bucket, dollars", commercialBucket, 29100000);
eq("100 percent aggregate bucket, dollars", aggregateBucket, 97000000);
eq("the commercial bucket sits inside the aggregate", commercialBucket < aggregateBucket ? 1 : 0, 1);
eq("share of the commercial bucket taken by one loan, percent", pct1(LOAN_B, commercialBucket), 30.2);
eq("the whole loan is counted, not the slice above 85 percent", LOAN_B, 8800000);
eq("the slice above the limit would have been", LOAN_B - (LTV_IMPROVED / 100) * VALUE, 300000);
eq(
  "counting the whole loan is 29.3 times the slice",
  Number((LOAN_B / (LOAN_B - (LTV_IMPROVED / 100) * VALUE)).toFixed(1)),
  29.3,
);

console.log("\n-- the credit union comparison --");
eq("member business loan multiple", CU_MULTIPLE, 1.75);
eq(
  "a credit union with this bank's net worth could hold, dollars",
  CU_MULTIPLE * TIER1_PLUS_ALLOWANCE,
  169750000,
);

/* ------------------------------------------------- the template's limits */
const src = readFileSync(
  new URL("../src/lib/data/answers/hotel-financing/bank-cre-concentration-limits.ts", import.meta.url),
  "utf8",
);
const { page } = await import(
  "../src/lib/data/answers/hotel-financing/bank-cre-concentration-limits.ts"
).catch(() => ({ page: null }));

console.log("\n-- template limits --");
if (!page) {
  console.log("note: run `npx tsx scripts/check-cre-concentration-math.mjs` for the structural checks");
  eq("no em-dash in the source file", src.includes("—") ? 1 : 0, 0);
} else {
  const words = (s) => s.replace(/\[\d+\]/g, "").split(/\s+/).filter(Boolean).length;
  const answerWords = words(page.answer);
  eq("answer is 40 to 70 words", answerWords >= 40 && answerWords <= 70 ? 1 : 0, 1);
  eq("answer carries a number and a date", /\d/.test(page.answer) && /20\d\d/.test(page.answer) ? 1 : 0, 1);
  eq("takeaways 3 to 5", page.takeaways.length >= 3 && page.takeaways.length <= 5 ? 1 : 0, 1);
  eq("faq 5 to 8", page.faq.length >= 5 && page.faq.length <= 8 ? 1 : 0, 1);
  const longFaq = page.faq.filter((f) => words(f.a) > 50).map((f) => f.q);
  eq("every faq answer is 50 words or fewer", longFaq.length, 0);
  if (longFaq.length) console.log("   over:", longFaq.join(" | "));
  eq("title is 60 characters or fewer", page.title.length <= 60 ? 1 : 0, 1);
  eq("description is 155 characters or fewer", page.description.length <= 155 ? 1 : 0, 1);
  eq("sources, at least 4", page.sources.length >= 4 ? 1 : 0, 1);
  eq("siblings, at least 3", page.related.siblings.length >= 3 ? 1 : 0, 1);
  eq("sections, at least 4", page.sections.length >= 4 ? 1 : 0, 1);
  eq("one table with at least 3 rows", page.table.rows.length >= 3 ? 1 : 0, 1);
  eq("every table row matches the column count", page.table.rows.filter((r) => r.length !== page.table.columns.length).length, 0);
  eq("cta goes to /contact", page.cta.href, "/contact");
  eq("author is a known slug", ["luke-thompson", "miles-cortez", "nate-solomon"].includes(page.authorSlug) ? 1 : 0, 1);
  eq("reviewer is a known slug", ["luke-thompson", "miles-cortez", "nate-solomon"].includes(page.reviewerSlug) ? 1 : 0, 1);
  eq("worked example says it is hypothetical", /Hypothetical/i.test(page.workedExample.label) ? 1 : 0, 1);
  eq("no em-dash anywhere", JSON.stringify(page).includes("—") ? 1 : 0, 0);

  const bodyWords =
    answerWords +
    page.takeaways.reduce((n, t) => n + words(t), 0) +
    page.sections.reduce((n, s) => n + words(s.lead) + words(s.body), 0) +
    words(page.workedExample.body) +
    page.faq.reduce((n, f) => n + words(f.q) + words(f.a), 0);
  eq("body is 1,200 to 2,500 words", bodyWords >= 1200 && bodyWords <= 2500 ? 1 : 0, 1);

  // Sources must be numbered in order of first reference.
  const order = [...JSON.stringify({ ...page, sources: undefined }).matchAll(/\[(\d+)\]/g)].map((m) =>
    Number(m[1]),
  );
  const firstSeen = [];
  for (const n of order) if (!firstSeen.includes(n)) firstSeen.push(n);
  const sorted = [...firstSeen].sort((a, b) => a - b);
  eq("sources numbered in order of first reference", firstSeen.join(","), sorted.join(","));
  if (firstSeen.join(",") !== sorted.join(",")) console.log("   first-reference order:", firstSeen.join(","));

  console.log(
    `\nanswer ${answerWords} words, body ${bodyWords} words, title ${page.title.length} chars, description ${page.description.length} chars, sources ${page.sources.length}`,
  );
}

console.log(fail.length ? `\n${fail.length} FAILED: ${fail.join("; ")}` : "\nall assertions passed");
process.exit(fail.length ? 1 : 0);
