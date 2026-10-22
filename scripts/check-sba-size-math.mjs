/**
 * Recomputes every figure on /hotel-financing/sba-size-standards before the
 * page is saved, and re-checks the template's own limits.
 *
 * Sourced inputs (read 2026-10-22):
 *   - $40.0 million average annual receipts for NAICS 721110, Hotels (except
 *     Casino Hotels) and Motels, and the rest of subsector 721: 13 CFR
 *     121.201, read through the eCFR versioner API for the October 1, 2026
 *     issue of title 13 and again on Cornell LII, which agree;
 *   - the table's own header sentence, that the standards are expressed in
 *     annual receipts in millions of dollars and that the figure is the
 *     maximum allowed for a concern and its affiliates: 13 CFR 121.201;
 *   - $20 million tangible net worth and $6.5 million average net income for
 *     the two most recently completed fiscal years, and the 25 percent
 *     increase inside a labor surplus area: 13 CFR 121.301(b)(2) and (e);
 *   - the five-year receipts average, and the three-year election the
 *     Business Loan Programs allow a concern in business three or more
 *     completed fiscal years: 13 CFR 121.104(c)(1) and (c)(4);
 *   - affiliate receipts are added average to average: 13 CFR 121.104(d)(1);
 *   - the ownership affiliation tests and the same 3-digit NAICS subsector
 *     limit on the ones that run through an owner: 13 CFR 121.301(f)(1);
 *   - $3,750,000 aggregate guaranty to one borrower including its affiliates,
 *     and the $5,000,000 maximum for any one 7(a) loan: 13 CFR 120.151;
 *   - 85 percent guaranty at or below $150,000 and 75 percent above it, with
 *     maximum exposure of $3.75 million: SBA's 7(a) terms page;
 *   - 721110 moved from $35.0 million to $39.78 million, rounded to $40.0
 *     million, effective December 19, 2022 (87 FR 69118), finalized without
 *     change on July 19, 2023 (88 FR 46048);
 *   - the alternative size standard rose from the Jobs Act's $15 million and
 *     $5 million by 34.46 percent, effective March 18, 2024 (89 FR 11703);
 *   - the 7(a) and 504 hotel loan counts and size bands come from
 *     content/sba/summary.json, the site's own NAICS 721110 extract of SBA's
 *     7(a) and 504 FOIA dataset as of June 30, 2026, published at
 *     /data/sba-hotel-lending.
 *
 * Hypothetical inputs (assumptions, not published figures): the three hotel
 * companies' receipts by fiscal year, the restaurant company's receipts, the
 * group's tangible net worth and net income, and the two SBA guaranty
 * balances already outstanding.
 *
 * Re-run:  node scripts/check-sba-size-math.mjs
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
const avg = (a) => sum(a) / a.length;
const r2 = (n) => Number(n.toFixed(2));
const pct1 = (a, b) => Number(((a / b) * 100).toFixed(1));

/* ------------------------------------------------------ sourced constants */
const STD_721110 = 40_000_000; // 13 CFR 121.201
const STD_721191 = 9_000_000;
const STD_721211 = 10_000_000;
const STD_721310 = 14_000_000;
const ALT_TNW = 20_000_000; // 13 CFR 121.301(b)(2)
const ALT_NET_INCOME = 6_500_000;
const LSA_UPLIFT = 0.25; // 13 CFR 121.301(e)
const GUARANTY_CAP = 3_750_000; // 13 CFR 120.151
const MAX_7A_LOAN = 5_000_000; // 13 CFR 120.151
const GUARANTY_OVER_150K = 0.75; // SBA 7(a) terms
const GUARANTY_TO_150K = 0.85;
const OLD_721110 = 35_000_000; // 87 FR 69118
const INFLATION_2022 = 0.1365;
const JOBS_ACT_TNW = 15_000_000; // 89 FR 11703
const JOBS_ACT_NET_INCOME = 5_000_000;
const INFLATION_2024 = 0.3446;

console.log("-- the published standards --");
eq("the labor surplus area standard is 25 percent above $40.0 million", STD_721110 * (1 + LSA_UPLIFT), 50_000_000);
eq("a bed-and-breakfast inn is held to less than a quarter of a hotel's standard", STD_721191 / STD_721110 < 0.25 ? 1 : 0, 1);
eq("the 721 subsector spans $9.0 million to $40.0 million", `${STD_721191}-${STD_721110}`, "9000000-40000000");
eq("rooming houses sit between the two", STD_721310 > STD_721211 && STD_721310 < STD_721110 ? 1 : 0, 1);

console.log("\n-- how the two inflation adjustments arrived at the numbers --");
eq("13.65 percent on $35.0 million gives the $39.78 million SBA printed", r2((OLD_721110 * (1 + INFLATION_2022)) / 1_000_000), 39.78);
eq("and rounds up to the $40.0 million in the table", Math.round((OLD_721110 * (1 + INFLATION_2022)) / 1_000_000 / 10) * 10 * 1_000_000, STD_721110);
// SBA published the adjusted levels at $20 million and $6.5 million; the raw
// products are $20,169,000 and $6,723,000, each rounded down to the nearest
// $500,000. Assert both the raw arithmetic and the published landing point.
eq("34.46 percent on the Jobs Act $15 million computes to", JOBS_ACT_TNW * (1 + INFLATION_2024), 20_169_000);
eq("34.46 percent on the Jobs Act $5 million computes to", JOBS_ACT_NET_INCOME * (1 + INFLATION_2024), 6_723_000);
const down500k = (n) => Math.floor(n / 500_000) * 500_000;
eq("rounded down to the nearest $500,000, tangible net worth is the published $20 million", down500k(JOBS_ACT_TNW * (1 + INFLATION_2024)), ALT_TNW);
eq("rounded down to the nearest $500,000, net income is the published $6.5 million", down500k(JOBS_ACT_NET_INCOME * (1 + INFLATION_2024)), ALT_NET_INCOME);

console.log("\n-- a full 7(a) loan uses the whole guaranty cap --");
eq("75 percent of a $5,000,000 loan is the $3,750,000 cap", MAX_7A_LOAN * GUARANTY_OVER_150K, GUARANTY_CAP);
eq("85 percent applies only at or below $150,000", GUARANTY_TO_150K * 150_000, 127_500);

/* --------------------------------------------- the worked example, in full */
console.log("\n-- worked example: eleven hotels in three companies --");
const FY = [2021, 2022, 2023, 2024, 2025];
const applicant = [9_200_000, 12_400_000, 14_100_000, 15_300_000, 16_000_000];
const affiliate1 = [8_600_000, 11_800_000, 13_500_000, 14_600_000, 15_500_000];
const affiliate2 = [6_100_000, 8_300_000, 9_600_000, 10_400_000, 11_100_000];
const restaurantAvg = 7_400_000;
const groupTnw = 18_400_000;
const groupNetIncome = 4_900_000;
const guarantyOut = [2_100_000, 1_200_000];

eq("five fiscal years of receipts for each company", `${FY.length}/${applicant.length}/${affiliate1.length}/${affiliate2.length}`, "5/5/5/5");
eq("applicant five-year total", sum(applicant), 67_000_000);
eq("applicant five-year average", avg(applicant), 13_400_000);
eq("affiliate 1 five-year total", sum(affiliate1), 64_000_000);
eq("affiliate 1 five-year average", avg(affiliate1), 12_800_000);
eq("affiliate 2 five-year total", sum(affiliate2), 45_500_000);
eq("affiliate 2 five-year average", avg(affiliate2), 9_100_000);

// 13 CFR 121.104(d)(1): add average to average, each affiliate in full.
const combined5 = avg(applicant) + avg(affiliate1) + avg(affiliate2);
eq("combined five-year average annual receipts", combined5, 35_300_000);
eq("the group is small on the five-year test", combined5 < STD_721110 ? 1 : 0, 1);
eq("headroom on the five-year test", STD_721110 - combined5, 4_700_000);

// 13 CFR 121.104(c)(4): the Business Loan Programs let the concern elect three years.
const last3 = (a) => a.slice(2);
eq("applicant three-year total", sum(last3(applicant)), 45_400_000);
eq("affiliate 1 three-year total", sum(last3(affiliate1)), 43_600_000);
eq("affiliate 2 three-year total", sum(last3(affiliate2)), 31_100_000);
const combined3 = avg(last3(applicant)) + avg(last3(affiliate1)) + avg(last3(affiliate2));
eq("combined three-year average annual receipts", r2(combined3), 40_033_333.33);
eq("the same group is not small on the three-year test", combined3 > STD_721110 ? 1 : 0, 1);
eq("the three-year test misses by", r2(combined3 - STD_721110), 33_333.33);
eq("the election is worth the difference between the two", r2(combined3 - combined5), 4_733_333.33);

// 121.301(f)(1)(i) has no subsector limit; (f)(1)(iii) does.
const combinedWithRestaurant = combined5 + restaurantAvg;
eq("adding the restaurant company would give", combinedWithRestaurant, 42_700_000);
eq("and would put the group over the standard", combinedWithRestaurant > STD_721110 ? 1 : 0, 1);
eq("over by", combinedWithRestaurant - STD_721110, 2_700_000);

// 121.301(b)(2): the alternative standard, which this group passes either way.
eq("tangible net worth is under $20 million", groupTnw < ALT_TNW ? 1 : 0, 1);
eq("average net income is under $6.5 million", groupNetIncome < ALT_NET_INCOME ? 1 : 0, 1);
eq("room under the tangible net worth test", ALT_TNW - groupTnw, 1_600_000);
eq("room under the net income test", ALT_NET_INCOME - groupNetIncome, 1_600_000);

// 121.301(e): the same group inside a labor surplus area.
eq("even the restaurant case clears a labor surplus area standard", combinedWithRestaurant < STD_721110 * (1 + LSA_UPLIFT) ? 1 : 0, 1);

// 120.151: the money, not the size test.
eq("SBA guaranty already outstanding across the group", sum(guarantyOut), 3_300_000);
const room = GUARANTY_CAP - sum(guarantyOut);
eq("guaranty room left under the $3,750,000 cap", room, 450_000);
const grossLoanThatFits = room / GUARANTY_OVER_150K;
eq("gross 7(a) loan that fits in the room left", grossLoanThatFits, 600_000);
eq("the binding constraint is the guaranty cap, not the size standard", grossLoanThatFits < MAX_7A_LOAN && combined5 < STD_721110 ? 1 : 0, 1);

/* ------------------------------------- the site's own SBA hotel loan data */
console.log("\n-- /data/sba-hotel-lending, NAICS 721110 --");
const summary = JSON.parse(readFileSync(new URL("../content/sba/summary.json", import.meta.url), "utf8"));
eq("the dataset is filtered to NAICS 721110", summary.meta.naics, "721110");
eq("as of date", summary.meta.asOf, "2026-06-30");
eq("last full fiscal year", summary.meta.lastFullFiscalYear, 2025);
eq("trailing five fiscal years", summary.meta.trailing5.join(","), "2021,2022,2023,2024,2025");

const fy25a = summary.byFiscalYear.find((r) => r.fiscalYear === 2025 && r.program === "7a");
const fy25c = summary.byFiscalYear.find((r) => r.fiscalYear === 2025 && r.program === "504");
eq("FY2025 7(a) hotel loan count", fy25a.count, 686);
eq("FY2025 7(a) gross approval", fy25a.grossApproval, 1_909_150_500);
eq("FY2025 7(a) median loan", fy25a.medianLoan, 2_681_500);
eq("FY2025 504 hotel loan count", fy25c.count, 365);

const b7 = summary.sizeBuckets.filter((b) => b.program === "7a");
const total7a = sum(b7.map((b) => b.count));
const atCap = b7.find((b) => b.bucket === "gte5m");
eq("7(a) hotel loans in the trailing five years", total7a, 3_879);
eq("loans in the $5.0 million and over band", atCap.count, 499);
eq("dollars in that band", atCap.grossApproval, 2_495_000_000);
eq("average loan in that band is exactly the program maximum", atCap.grossApproval / atCap.count, MAX_7A_LOAN);
eq("so every loan in the band sat at the $5,000,000 cap", atCap.grossApproval / atCap.count === MAX_7A_LOAN ? 1 : 0, 1);
eq("share of 7(a) hotel loans at the cap", pct1(atCap.count, total7a), 12.9);
const under2m = sum(b7.filter((b) => ["lt350k", "350k-1m", "1m-2m"].includes(b.bucket)).map((b) => b.count));
eq("7(a) hotel loans under $2 million", under2m, 1_593);
eq("share under $2 million", pct1(under2m, total7a), 41.1);

/* ------------------------------------------------------- template limits */
const src = readFileSync(
  new URL("../src/lib/data/answers/hotel-financing/sba-size-standards.ts", import.meta.url),
  "utf8",
);
const { page } = await import("../src/lib/data/answers/hotel-financing/sba-size-standards.ts").catch(
  () => ({ page: null }),
);

console.log("\n-- template limits --");
if (!page) {
  console.log("note: run `npx tsx scripts/check-sba-size-math.mjs` for the structural checks");
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

  const bodyWords =
    answerWords +
    page.takeaways.reduce((n, t) => n + words(t), 0) +
    page.sections.reduce((n, s) => n + words(s.lead) + words(s.body), 0) +
    words(page.workedExample.body) +
    page.faq.reduce((n, f) => n + words(f.q) + words(f.a), 0);
  eq("body is 1,200 to 2,500 words", bodyWords >= 1200 && bodyWords <= 2500 ? 1 : 0, 1);

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
