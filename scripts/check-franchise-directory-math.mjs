/**
 * Recomputes every figure on /hotel-financing/sba-franchise-directory, both
 * the counts read out of the Directory file and the arithmetic in the worked
 * example.
 *
 *   npx tsx scripts/check-franchise-directory-math.mjs
 *
 * The counts come from the October 9, 2026 edition of the SBA Franchise
 * Directory (Franchise Directory Oct 9 2026_REM01.xlsx, 280 KB, downloaded
 * from legacy.sba.gov on 2026-10-14): 3,461 rows carrying a brand name, of
 * which 2,438 are marked Y in the "MEETS FTC DEFINITION OF A FRANCHISE?"
 * column, 1,009 N and 14 E; 2,437 of the Y rows carry an SBA Franchise
 * Identifier Code; 281 rows carry a recertified date; 22 rows repeat the
 * 30-day transient revenue test in their notes column; 19 mention a comfort
 * letter.
 *
 * The rules the worked example applies are sourced on the page:
 *   - SBA Franchise Directory, per-brand notes: "The Applicant is not
 *     eligible if the management company is, or is affiliated with, the
 *     franchisor."
 *   - SOP 50 10 8.1 (effective October 1, 2026), Appendix 18: SBA's maximum
 *     allowable spread on a variable-rate 7(a) loan over $350,000 is the base
 *     rate plus 3.00%, and the 7(a) loan maximum is $5,000,000.
 *   - /rates, October 2026 edition: Prime 7.00% as of September 29, 2026.
 * The 1.35x coverage test is the example's own assumption, stated as such on
 * the page, because no lender publishes its DSCR floor.
 */
let checks = 0;
const eq = (label, got, want, tol = 0.005) => {
  checks++;
  if (Math.abs(got - want) > tol) {
    console.error(`FAIL ${label}: got ${got}, expected ${want}`);
    process.exitCode = 1;
  }
};
const ok = (label, cond) => {
  checks++;
  if (!cond) {
    console.error(`FAIL ${label}`);
    process.exitCode = 1;
  }
};

/* ------------------------------------- 1. the Directory's own composition */
const ROWS = 3461;
const MEETS = 2438;
const NOT_MEETS = 1009;
const DISASTER_ONLY = 14;
const CODED = 2437;
eq("the three determination groups add to the total row count", MEETS + NOT_MEETS + DISASTER_ONLY, ROWS);
ok("coded rows never exceed the rows marked as meeting the definition", CODED <= MEETS);
ok("every site brand checked (24) is a subset of the coded rows", 24 <= CODED);

/* ------------------------- 2. the 22-month gap with no Franchise Directory */
const dropped = new Date(Date.UTC(2023, 7, 1)); // SOP 50 10 7 effective August 1, 2023
const restored = new Date(Date.UTC(2025, 5, 1)); // SOP 50 10 8 effective June 1, 2025
const months =
  (restored.getUTCFullYear() - dropped.getUTCFullYear()) * 12 +
  (restored.getUTCMonth() - dropped.getUTCMonth());
eq("months between the edition that dropped the Directory and the one that restored it", months, 22);

/* --------------------------------------- 3. the 7(a) ceiling on /rates */
const PRIME = 7.0;
const MAX_SPREAD = 3.0;
eq("SBA 7(a) maximum allowable rate above $350,000", PRIME + MAX_SPREAD, 10.0);

/* ------------------------------------------ 4. the hypothetical hotel */
const REVENUE = 2_400_000;
const FEE_BRAND = 0.03; // franchisor-affiliated manager
const FEE_INDEPENDENT = 0.035; // independent manager
const NOI_MARGIN = 0.30; // margin under the brand-affiliated fee
const DSCR = 1.35; // the example's assumption, not a published floor
const RATE = 0.10; // the 7(a) ceiling
const AMORT_YEARS = 25;
const SEVEN_A_CAP = 5_000_000;

const feeBrand = REVENUE * FEE_BRAND;
const feeIndependent = REVENUE * FEE_INDEPENDENT;
eq("management fee at 3.0% of revenue", feeBrand, 72_000);
eq("management fee at 3.5% of revenue", feeIndependent, 84_000);
eq("the fee difference", feeIndependent - feeBrand, 12_000);

const noiBrand = REVENUE * NOI_MARGIN;
const noiIndependent = noiBrand - (feeIndependent - feeBrand);
eq("NOI under the brand-affiliated manager", noiBrand, 720_000);
eq("that NOI as a percent of revenue", (noiBrand / REVENUE) * 100, 30.0);
eq("NOI under the independent manager", noiIndependent, 708_000);

const dsBrand = noiBrand / DSCR;
const dsIndependent = noiIndependent / DSCR;
eq("annual debt service supported at 1.35x on $720,000 of NOI", dsBrand, 533_333.3333333333, 1e-6);
eq("annual debt service supported at 1.35x on $708,000 of NOI", dsIndependent, 524_444.4444444444, 1e-6);
eq("the debt service difference", dsBrand - dsIndependent, 8_888.888888888889, 1e-6);
eq("the rounded figures printed on the page", Math.round(dsBrand), 533_333);
eq("the rounded figures printed on the page", Math.round(dsIndependent), 524_444);
eq("the rounded debt service difference printed on the page", Math.round(dsBrand - dsIndependent), 8_889);

/* a level-payment, fully amortizing loan: payment = i / (1 - (1+i)^-n) */
const i = RATE / 12;
const n = AMORT_YEARS * 12;
const monthlyFactor = i / (1 - Math.pow(1 + i, -n));
const annualFactor = monthlyFactor * 12;
eq("monthly payment factor at 10.00% over 25 years", monthlyFactor, 0.00908701, 5e-9);
eq("annual payment factor at 10.00% over 25 years", annualFactor, 0.10904409, 5e-9);

const loanBrand = dsBrand / annualFactor;
const loanIndependent = dsIndependent / annualFactor;
eq("loan supported by $720,000 of NOI", Math.round(loanBrand), 4_890_988);
eq("loan supported by $708,000 of NOI", Math.round(loanIndependent), 4_809_472);
eq("the loan capacity given up", Math.round(loanBrand - loanIndependent), 81_516);
ok("the higher loan is still under the 7(a) cap, so the coverage test binds", loanBrand < SEVEN_A_CAP);
ok("the lower loan is also under the 7(a) cap", loanIndependent < SEVEN_A_CAP);
ok("the page rounds the capacity loss down, not up", 81_500 <= Math.round(loanBrand - loanIndependent));

/* -------------------------------------------- the template's own limits */
const mod = await import("../src/lib/data/answers/hotel-financing/sba-franchise-directory.ts");
const page = mod.page;
const words = (s) => s.replace(/\[\d+\]/g, "").split(/\s+/).filter(Boolean).length;

const answerWords = words(page.answer);
checks++;
if (answerWords < 40 || answerWords > 70) {
  console.error(`FAIL answer length: ${answerWords} words, want 40 to 70`);
  process.exitCode = 1;
}
checks++;
if (page.takeaways.length < 3 || page.takeaways.length > 5) {
  console.error(`FAIL takeaways: ${page.takeaways.length}, want 3 to 5`);
  process.exitCode = 1;
}
checks++;
if (page.faq.length < 5 || page.faq.length > 8) {
  console.error(`FAIL faq count: ${page.faq.length}, want 5 to 8`);
  process.exitCode = 1;
}
for (const f of page.faq) {
  checks++;
  const count = words(f.a);
  if (count > 50) {
    console.error(`FAIL faq answer over 50 words (${count}): ${f.q}`);
    process.exitCode = 1;
  }
}
checks++;
if (page.title.length > 60) {
  console.error(`FAIL title ${page.title.length} chars`);
  process.exitCode = 1;
}
checks++;
if (page.description.length > 155) {
  console.error(`FAIL description ${page.description.length} chars`);
  process.exitCode = 1;
}
checks++;
if (page.related.siblings.length < 3) {
  console.error(`FAIL siblings: ${page.related.siblings.length}, want 3 or more`);
  process.exitCode = 1;
}
checks++;
if (page.table.rows.some((r) => r.length !== page.table.columns.length)) {
  console.error("FAIL table: a row does not match the column count");
  process.exitCode = 1;
}

const body = [
  page.answer,
  ...page.takeaways,
  ...page.sections.flatMap((s) => [s.h2, s.lead, s.body]),
  page.workedExample.body,
  ...page.faq.flatMap((f) => [f.q, f.a]),
  page.originalDataPoint.sentence,
  page.brandSentence,
].join(" ");
const bodyWords = words(body);
checks++;
if (bodyWords < 1200 || bodyWords > 2500) {
  console.error(`FAIL body length: ${bodyWords} words, want 1200 to 2500`);
  process.exitCode = 1;
}
console.log(
  `answer ${answerWords} words, body ${bodyWords} words, title ${page.title.length} chars, description ${page.description.length} chars`,
);

console.log(
  process.exitCode
    ? "franchise directory math FAILED"
    : `franchise directory math OK: ${checks} assertions`,
);
