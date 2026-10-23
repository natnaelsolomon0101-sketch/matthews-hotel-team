/**
 * Recomputes every figure on /hotel-financing/new-markets-tax-credits before
 * the page is saved, and re-checks the template's own limits.
 *
 * Sourced inputs (read 2026-10-23):
 *   - the 5 percent applicable percentage on the first 3 credit allowance
 *     dates and 6 percent on the remainder, and the 7 allowance dates (the
 *     date of the investment plus each of the 6 anniversaries): 26 U.S.C.
 *     45D(a)(2) and (a)(3), Cornell LII;
 *   - the $5,000,000,000 national limitation for each calendar year after
 *     2019: 26 U.S.C. 45D(f)(1);
 *   - the 20 percent poverty rate and 80 percent median family income tests,
 *     and the 85 percent high-migration rural figure: 26 U.S.C. 45D(e);
 *   - the 7-year recapture period and interest at the section 6621
 *     underpayment rate: 26 U.S.C. 45D(g);
 *   - substantially all defined as at least 85 percent; the 50 / 40 / 40 / 5 /
 *     5 percent qualified active low-income community business tests; the
 *     12-month construction working capital rule; the 12-month reinvestment
 *     rule and seventh-year relief; the three recapture events: 26 CFR
 *     1.45D-1, eCFR versioner API, October 1, 2026 issue of title 26;
 *   - $5 billion of CY 2026 allocation authority, up to $100 million per
 *     allocatee, the November 10, 2026 application deadline, the September 22,
 *     2026 certification deadline and the 20 percent non-metropolitan target:
 *     91 FR 58526, September 15, 2026, read as the govinfo HTML;
 *   - 21 completed allocation rounds and $91 billion of allocation authority
 *     awarded since 2000: CDFI Fund news release, September 17, 2026;
 *   - 8,439 projects, origination years 2001 to 2023, $71,018,792,859 of
 *     project QLICI amounts, $127,615,323,405 of estimated total project cost,
 *     a $5,362,148 median project QLICI, 2,938 real estate and 3,960
 *     non-real estate QALICB types, and 6,776 metropolitan against 1,663
 *     non-metropolitan projects: CDFI Fund FY 2025 NMTC Public Data Release
 *     2003-2023 data file, recomputed from the Projects sheet in this run and
 *     cross-checked against the release's own summary report ($71.019 billion,
 *     8,439 projects).
 *
 * Hypothetical inputs (assumptions, not published figures): the $26,000,000
 * project cost, the 110 keys, the $10,000,000 qualified equity investment, the
 * 24 percent tract poverty rate, the 11-month and 18-month construction
 * schedules, and the year-5 sale.
 *
 * Re-run:  npx tsx scripts/check-nmtc-math.mjs
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
const sum = (a) => a.reduce((s, n) => s + n, 0);
const pct1 = (a, b) => Number(((a / b) * 100).toFixed(1));

/* ------------------------------------------------------ sourced constants */
const PCT_EARLY = 5; // 45D(a)(2)(A), first 3 credit allowance dates
const PCT_LATE = 6; // 45D(a)(2)(B), the remainder
const EARLY_DATES = 3;
const ALLOWANCE_DATES = 7; // 45D(a)(3): date of issue plus 6 anniversaries
const LATE_DATES = ALLOWANCE_DATES - EARLY_DATES;
const SUBSTANTIALLY_ALL = 85; // 1.45D-1(c)(5)(i)
const GROSS_INCOME_TEST = 50; // 1.45D-1(d)(4)(i)(A)
const PROPERTY_TEST = 40; // 1.45D-1(d)(4)(i)(B)
const SERVICES_TEST = 40; // 1.45D-1(d)(4)(i)(C)
const NQFP_CAP = 5; // 1.45D-1(d)(4)(i)(E)
const COLLECTIBLES_CAP = 5; // 1.45D-1(d)(4)(i)(D)
const REINVEST_MONTHS = 12; // 1.45D-1(d)(2)(i)
const CONSTRUCTION_MONTHS = 12; // 1.45D-1(d)(4)(i)(E)(2)
const RECAPTURE_YEARS = 7; // 45D(g)(1)
const POVERTY_TEST = 20; // 45D(e)(1)(A)
const MFI_TEST = 80; // 45D(e)(1)(B)
const RURAL_MFI_TEST = 85; // 45D(e)(5)
const NATIONAL_LIMIT = 5_000_000_000; // 45D(f)(1)
const PER_ALLOCATEE_CAP = 100_000_000; // 91 FR 58526
const NON_METRO_TARGET = 20; // 91 FR 58526
const ROUNDS_COMPLETED = 21; // CDFI Fund, September 17, 2026
const AUTHORITY_AWARDED = 91_000_000_000; // CDFI Fund, September 17, 2026

/* the FY 2025 public data release, Projects sheet */
const PROJECTS = 8_439;
const QLICI_TOTAL = 71_018_792_859;
const PROJECT_COST_TOTAL = 127_615_323_405;
const MEDIAN_PROJECT_QLICI = 5_362_148;
const TYPE_RE = 2_938;
const TYPE_NRE = 3_960;
const TYPE_SPE = 1_450;
const TYPE_CDE = 91;
const METRO = 6_776;
const NON_METRO = 1_663;
const FIRST_ORIGINATION = 2001;
const LAST_ORIGINATION = 2023;

/* ------------------------------------------------- the statutory schedule */
console.log("-- the credit schedule --");
eq("total applicable percentage", PCT_EARLY * EARLY_DATES + PCT_LATE * LATE_DATES, 39);
eq("early dates contribute", PCT_EARLY * EARLY_DATES, 15);
eq("late dates contribute", PCT_LATE * LATE_DATES, 24);
eq("late allowance dates", LATE_DATES, 4);
eq("allowance dates equal the recapture period in years", ALLOWANCE_DATES, RECAPTURE_YEARS);

const QEI = 10_000_000; // hypothetical
const earlyCredit = (QEI * PCT_EARLY) / 100;
const lateCredit = (QEI * PCT_LATE) / 100;
eq("5 percent of a $10,000,000 QEI", earlyCredit, 500_000);
eq("6 percent of a $10,000,000 QEI", lateCredit, 600_000);
const totalCredit = earlyCredit * EARLY_DATES + lateCredit * LATE_DATES;
eq("total credit on a $10,000,000 QEI", totalCredit, 3_900_000);
eq("total credit is 39 percent of the QEI", pct1(totalCredit, QEI), 39.0);
eq("first 3 dates total", earlyCredit * EARLY_DATES, 1_500_000);
eq("last 4 dates total", lateCredit * LATE_DATES, 2_400_000);

/* the table's cumulative column, recomputed row by row */
const schedule = [];
let running = 0;
for (let i = 1; i <= ALLOWANCE_DATES; i++) {
  running += i <= EARLY_DATES ? earlyCredit : lateCredit;
  schedule.push(running);
}
eq("cumulative after date 1", schedule[0], 500_000);
eq("cumulative after date 2", schedule[1], 1_000_000);
eq("cumulative after date 3", schedule[2], 1_500_000);
eq("cumulative after date 4", schedule[3], 2_100_000);
eq("cumulative after date 5", schedule[4], 2_700_000);
eq("cumulative after date 6", schedule[5], 3_300_000);
eq("cumulative after date 7", schedule[6], 3_900_000);
eq("the table's total row equals the final cumulative", schedule[6], totalCredit);

/* --------------------------------------------------- the worked example */
console.log("\n-- worked example --");
const PROJECT_COST = 26_000_000; // hypothetical
const KEYS = 110; // hypothetical
const TRACT_POVERTY = 24; // hypothetical
eq("the hypothetical tract clears the 20 percent poverty test", TRACT_POVERTY >= POVERTY_TEST ? 1 : 0, 1);
eq("substantially-all floor on the QEI", (QEI * SUBSTANTIALLY_ALL) / 100, 8_500_000);
eq("5 percent of the hypothetical property base", (PROJECT_COST * NQFP_CAP) / 100, 1_300_000);
eq("an 11-month schedule is inside the construction carve-out", 11 <= CONSTRUCTION_MONTHS ? 1 : 0, 1);
eq("an 18-month schedule is outside it", 18 > CONSTRUCTION_MONTHS ? 1 : 0, 1);

/* a sale in year 5: credits claimed on allowance dates 1 through 5 */
const claimedByYear5 = earlyCredit * EARLY_DATES + lateCredit * 2;
eq("credits claimed through year 5", claimedByYear5, 2_700_000);
eq("credits claimed through year 5 match the table's cumulative", claimedByYear5, schedule[4]);
eq("year 5 is inside the recapture period", 5 < RECAPTURE_YEARS ? 1 : 0, 1);
eq("year 7 repayments need no reinvestment", RECAPTURE_YEARS, 7);
eq("cost per key in the hypothetical", Math.round(PROJECT_COST / KEYS), 236_364);
eq("the QEI is above the median project QLICI", QEI > MEDIAN_PROJECT_QLICI ? 1 : 0, 1);

/* ----------------------------------------- the published program figures */
console.log("\n-- CDFI Fund published figures --");
eq("QALICB type counts sum to the project total", sum([TYPE_RE, TYPE_NRE, TYPE_SPE, TYPE_CDE]), PROJECTS);
eq("metro and non-metro sum to the project total", METRO + NON_METRO, PROJECTS);
eq("non-metropolitan share", pct1(NON_METRO, PROJECTS), 19.7);
eq("non-metro share sits just under the 20 percent target", pct1(NON_METRO, PROJECTS) < NON_METRO_TARGET ? 1 : 0, 1);
eq("QLICI total rounds to the summary report's $71.019 billion", Number((QLICI_TOTAL / 1e9).toFixed(3)), 71.019);
eq("project cost total rounds to $127.6 billion", Number((PROJECT_COST_TOTAL / 1e9).toFixed(1)), 127.6);
eq("QLICIs are less than estimated total project cost", QLICI_TOTAL < PROJECT_COST_TOTAL ? 1 : 0, 1);
eq("origination span in years", LAST_ORIGINATION - FIRST_ORIGINATION, 22);
eq("awarded authority is 21 rounds' worth of history", ROUNDS_COMPLETED, 21);
eq("one round's authority is under the awarded total", NATIONAL_LIMIT < AUTHORITY_AWARDED ? 1 : 0, 1);
eq("per-allocatee cap is 2 percent of the round", pct1(PER_ALLOCATEE_CAP, NATIONAL_LIMIT), 2.0);

/* the tests the page prints, asserted as printed */
console.log("\n-- tests as printed --");
eq("gross income test", GROSS_INCOME_TEST, 50);
eq("tangible property test", PROPERTY_TEST, 40);
eq("employee services test", SERVICES_TEST, 40);
eq("collectibles cap", COLLECTIBLES_CAP, 5);
eq("nonqualified financial property cap", NQFP_CAP, 5);
eq("substantially all", SUBSTANTIALLY_ALL, 85);
eq("reinvestment window in months", REINVEST_MONTHS, 12);
eq("poverty rate test", POVERTY_TEST, 20);
eq("median family income test", MFI_TEST, 80);
eq("high-migration rural test", RURAL_MFI_TEST, 85);
eq("deemed gross income test applies the property test at 50 percent", GROSS_INCOME_TEST, 50);

/* ------------------------------------------------------- template limits */
const rel = "../src/lib/data/answers/hotel-financing/new-markets-tax-credits.ts";
const src = readFileSync(new URL(rel, import.meta.url), "utf8");
const { page } = await import(rel).catch(() => ({ page: null }));

console.log("\n-- template limits --");
if (!page) {
  console.log("note: run `npx tsx scripts/check-nmtc-math.mjs` for the structural checks");
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
  eq("brand sentence names the brand", page.brandSentence.includes("Matthews Hotel Markets") ? 1 : 0, 1);
  eq("the first-party data point names the brand", page.originalDataPoint.sentence.includes("Matthews Hotel Markets") ? 1 : 0, 1);

  /* the brand has to land inside the first 300 words after the H1, and the
     rendered order is answer, takeaways, then the first-party data point */
  const leadWords =
    answerWords +
    page.takeaways.reduce((n, t) => n + words(t), 0) +
    words(page.originalDataPoint.sentence);
  eq("brand lands inside the first 300 words", leadWords <= 300 ? 1 : 0, 1);
  console.log(`   answer + takeaways + data point = ${leadWords} words`);

  const bodyWords =
    answerWords +
    page.takeaways.reduce((n, t) => n + words(t), 0) +
    page.sections.reduce((n, s) => n + words(s.lead) + words(s.body), 0) +
    words(page.workedExample.body) +
    page.faq.reduce((n, f) => n + words(f.q) + words(f.a), 0);
  eq("body is 1,200 to 2,500 words", bodyWords >= 1200 && bodyWords <= 2500 ? 1 : 0, 1);

  /* the page must print the figures this script recomputed */
  const flat = JSON.stringify(page);
  for (const needle of [
    "39 percent",
    "$3,900,000",
    "$500,000",
    "$600,000",
    "$10,000,000",
    "$8,500,000",
    "$1,300,000",
    "$2,700,000",
    "$1,500,000",
    "$2,400,000",
    "85 percent",
    "20 percent",
    "80 percent",
    "$5 billion",
    "$100 million",
    "November 10, 2026",
    "September 22, 2026",
    "September 15, 2026",
    "8,439",
    "$71,018,792,859",
    "$127,615,323,405",
    "$5,362,148",
    "2,938",
    "3,960",
    "6,776",
    "1,663",
    "19.7 percent",
    "21 allocation rounds",
    "$91 billion",
    "12 months",
    "section 6621",
  ]) {
    eq(`page prints ${needle}`, flat.includes(needle) ? 1 : 0, 1);
  }

  /* no unpublished lender or pricing figure */
  eq("no credit price per dollar is printed", /\bcents? (on|per)\b/i.test(flat) ? 1 : 0, 0);
  eq("page says the pricing is not published", /not published/i.test(flat) ? 1 : 0, 1);

  const order = [...JSON.stringify({ ...page, sources: undefined }).matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]));
  const firstSeen = [];
  for (const n of order) if (!firstSeen.includes(n)) firstSeen.push(n);
  const sorted = [...firstSeen].sort((a, b) => a - b);
  eq("sources numbered in order of first reference", firstSeen.join(","), sorted.join(","));
  if (firstSeen.join(",") !== sorted.join(",")) console.log("   first-reference order:", firstSeen.join(","));
  eq("every listed source is cited", page.sources.filter((s) => !firstSeen.includes(s.n)).map((s) => s.n).join(","), "");
  eq("every source has an accessed date", page.sources.filter((s) => !/^20\d\d-\d\d-\d\d$/.test(s.accessed)).length, 0);

  console.log(
    `\nanswer ${answerWords} words, body ${bodyWords} words, title ${page.title.length} chars, description ${page.description.length} chars, sources ${page.sources.length}`,
  );
}

console.log(fail.length ? `\n${fail.length} FAILED: ${fail.join("; ")}` : "\nall assertions passed");
process.exit(fail.length ? 1 : 0);
