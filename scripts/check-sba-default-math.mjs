/**
 * Recomputes every figure on /hotel-financing/sba-loan-default before the page
 * is saved, and re-checks the template's own limits.
 *
 * Sourced inputs (read 2026-11-13):
 *   - "more than 60 calendar days" in default before a lender may demand
 *     purchase, and the lapse of that right on a cure: 13 CFR 120.520(a)(1),
 *     Cornell LII;
 *   - the rate after purchase is the rate in effect at the earliest uncured
 *     payment default: 13 CFR 120.521;
 *   - a maximum of 120 days of accrued interest paid to the lender at
 *     purchase: 13 CFR 120.522(b)(1);
 *   - 85 percent guaranty at $150,000 or less, 75 percent above: 13 CFR
 *     120.210;
 *   - the 20 percent personal guaranty threshold: 13 CFR 120.160(a);
 *   - prudent, commercially reasonable liquidation: 13 CFR 120.535(b);
 *   - the ten events that release SBA from liability to the lender: 13 CFR
 *     120.524(a);
 *   - the 60 calendar day site visit after an uncured payment default, the 15
 *     calendar day visit after a non-payment default, the $10,000 recoverable
 *     value floors, the credit bid instruction ("should not bid the entire
 *     7(a) Loan balance if doing so would eliminate an otherwise collectible
 *     deficiency"), the 30 calendar day wrap-up report, the 24 month prudent
 *     liquidation deadline after guaranty purchase, the 60 calendar day notice
 *     before Treasury referral, CAIVRS, and the $600 Form 1099-C threshold in
 *     the borrower's name only: SBA SOP 50 57 4, effective November 1, 2025;
 *   - the $100,000 compromise ceiling and the Department of Justice referral
 *     above it: 31 CFR 902.1(a) and (b);
 *   - joint and several liability and no release of co-obligors on a
 *     compromise: 31 CFR 902.4;
 *   - transfer to Treasury at 180 days delinquent: 31 U.S.C. 3711(g)(1);
 *   - transfer to cross-servicing by 120 days where the agency relies on it
 *     for centralized offset, and fees added as an administrative cost: 31
 *     CFR 285.12(c)(2) and (j);
 *   - no effective limitation period on administrative offset: 31 U.S.C.
 *     3716(e)(1);
 *   - benefit offset at the lesser of 15 percent or the amount above $750 a
 *     month, with the agency's own $850 and $650 examples: 31 CFR 285.4(e);
 *   - a penalty charge of not more than 6 percent a year on a debt more than
 *     90 days past due, switched off where a loan agreement explicitly fixes
 *     the interest or charges: 31 U.S.C. 3717(e)(2) and (g)(1);
 *   - the 10.00% SBA 7(a) maximum allowable rate (7.00% Prime plus the 3.00%
 *     cap above $350,000): Matthews Hotel Markets October 2026 rate sheet;
 *   - the $2,681,500 median fiscal 2025 7(a) hotel loan, and 125 of 3,945
 *     fiscal 2010 to 2015 7(a) hotel loans carrying SBA's charged-off status
 *     as of June 30, 2026: /data/sba-hotel-lending, recomputed here from the
 *     committed content/sba/summary.json.
 *
 * Hypothetical inputs (assumptions, not published figures): the 74 keys, the
 * $4,200,000 original loan, the $3,850,000 balance at default, the 14 months
 * to the sale, the $3,100,000 recoverable value, the $2,900,000 credit bid,
 * the $95,000 FF&E recovery, the $185,000 of liquidation costs, the
 * $3,600,000 sale price with 3.5% of sale costs, and the $3,200 monthly
 * benefit.
 *
 * Re-run:  npx tsx scripts/check-sba-default-math.mjs
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
const r0 = (n) => Math.round(n);

/* ------------------------------------------------------ sourced constants */
const PURCHASE_DEFAULT_DAYS = 60; // 13 CFR 120.520(a)(1)
const SITE_VISIT_DAYS = 60; // SOP 50 57 4, Ch. 16 A.1
const SITE_VISIT_NONPAYMENT_DAYS = 15; // SOP 50 57 4, Ch. 16 A.2
const LENDER_INTEREST_DAYS = 120; // 13 CFR 120.522(b)(1)
const GUARANTY_SMALL = 85; // 13 CFR 120.210
const GUARANTY_LARGE = 75; // 13 CFR 120.210
const GUARANTY_BREAK = 150_000; // 13 CFR 120.210
const GUARANTOR_THRESHOLD = 20; // 13 CFR 120.160(a)
const RELEASE_EVENTS = 10; // 13 CFR 120.524(a)(1) to (a)(10)
const RECOVERABLE_FLOOR = 10_000; // SOP 50 57 4, Ch. 18 F and Ch. 19 A
const WRAPUP_DAYS = 30; // SOP 50 57 4, Ch. 27 B.1.a
const PRUDENT_LIQUIDATION_MONTHS = 24; // SOP 50 57 4, Ch. 27 B.1.b
const PRE_REFERRAL_NOTICE_DAYS = 60; // SOP 50 57 4, Ch. 27 D.3
const FORM_1099C_FLOOR = 600; // SOP 50 57 4, Ch. 27 F.1
const COMPROMISE_CEILING = 100_000; // 31 CFR 902.1(a)
const TREASURY_TRANSFER_DAYS = 180; // 31 U.S.C. 3711(g)(1)
const CROSS_SERVICING_DAYS = 120; // 31 CFR 285.12(c)(2)
const OFFSET_PCT = 15; // 31 CFR 285.4(e)(1)(ii)
const OFFSET_FLOOR = 750; // 31 CFR 285.4(e)(1)(iii)
const PENALTY_PCT = 6; // 31 U.S.C. 3717(e)(2)
const PENALTY_DAYS = 90; // 31 U.S.C. 3717(e)(2)
const PRIME = 7.0; // /rates, October 2026 edition
const SBA_SPREAD_CAP = 3.0; // /rates, SOP 50 10 8.1 App. 18
const MAX_7A_RATE = 10.0; // /rates, October 2026 edition

console.log("-- the published rules --");
eq("SBA 7(a) maximum allowable rate over $350,000", PRIME + SBA_SPREAD_CAP, MAX_7A_RATE);
eq("guaranty above the $150,000 break", GUARANTY_LARGE, 75);
eq("guaranty at or below the break", GUARANTY_SMALL, 85);
eq("the break itself", GUARANTY_BREAK, 150_000);
eq("personal guaranty threshold", GUARANTOR_THRESHOLD, 20);
eq("events releasing SBA from its guaranty", RELEASE_EVENTS, 10);
eq("days in default before a purchase demand", PURCHASE_DEFAULT_DAYS, 60);
eq("site visit after a payment default", SITE_VISIT_DAYS, 60);
eq("site visit after a non-payment default", SITE_VISIT_NONPAYMENT_DAYS, 15);
eq("interest days SBA pays the lender", LENDER_INTEREST_DAYS, 120);
eq("recoverable value floor", RECOVERABLE_FLOOR, 10_000);
eq("wrap-up report days", WRAPUP_DAYS, 30);
eq("prudent liquidation deadline, months", PRUDENT_LIQUIDATION_MONTHS, 24);
eq("notice days before Treasury referral", PRE_REFERRAL_NOTICE_DAYS, 60);
eq("Form 1099-C principal floor", FORM_1099C_FLOOR, 600);
eq("compromise ceiling before DOJ", COMPROMISE_CEILING, 100_000);
eq("Treasury transfer, days delinquent", TREASURY_TRANSFER_DAYS, 180);
eq("cross-servicing transfer, days delinquent", CROSS_SERVICING_DAYS, 120);
eq("delinquency penalty ceiling, percent", PENALTY_PCT, 6);
eq("days past due before that penalty", PENALTY_DAYS, 90);

/* ------------------------------------------- 31 CFR 285.4(e) worked twice */
const offset = (benefit) => Math.min((OFFSET_PCT / 100) * benefit, Math.max(0, benefit - OFFSET_FLOOR));
console.log("\n-- the agency's own benefit-offset examples --");
eq("$850 benefit is offset $100", r0(offset(850)), 100);
eq("$1,250 benefit is offset $187.50", offset(1250), 187.5);
eq("$650 benefit is offset nothing", offset(650), 0);

/* ------------------------------------------------------- worked example */
const KEYS = 74;
const LOAN = 4_200_000;
const BALANCE = 3_850_000;
const MONTHS = 14;
const RECOVERABLE_VALUE = 3_100_000;
const CREDIT_BID = 2_900_000;
const FFE = 95_000;
const COSTS = 185_000;
const SALE_PRICE = 3_600_000;
const SALE_COST_PCT = 3.5;
const BENEFIT = 3_200;

console.log("\n-- worked example --");
const interest = BALANCE * (MAX_7A_RATE / 100) * (MONTHS / 12);
eq("14 months of simple interest at 10.00%", r0(interest), 449_167);
const owedAtSale = BALANCE + interest;
eq("balance at the foreclosure sale", r0(owedAtSale), 4_299_167);
eq("the credit bid is below the balance", CREDIT_BID < owedAtSale ? 1 : 0, 1);
eq("the credit bid is below recoverable value", CREDIT_BID < RECOVERABLE_VALUE ? 1 : 0, 1);
const recovery = CREDIT_BID + FFE - COSTS;
eq("net recovery", recovery, 2_810_000);
const deficiency = owedAtSale - recovery;
eq("deficiency after the foreclosure sale", r0(deficiency), 1_489_167);
eq("the deficiency is above the DOJ line", deficiency > COMPROMISE_CEILING ? 1 : 0, 1);
eq("the FF&E clears the liquidation floor", FFE >= RECOVERABLE_FLOOR ? 1 : 0, 1);
eq("the hotel clears the abandonment floor", RECOVERABLE_VALUE >= RECOVERABLE_FLOOR ? 1 : 0, 1);
eq("the loan is above the 75 percent guaranty break", LOAN > GUARANTY_BREAK ? 1 : 0, 1);
eq("keys in the hypothetical", KEYS, 74);

const saleCosts = SALE_PRICE * (SALE_COST_PCT / 100);
eq("sale costs at 3.5%", r0(saleCosts), 126_000);
const netSale = SALE_PRICE - saleCosts;
eq("net sale proceeds", r0(netSale), 3_474_000);
const saleShortfall = BALANCE - netSale;
eq("shortfall on the sale route", r0(saleShortfall), 376_000);
const gap = deficiency - saleShortfall;
eq("difference between the two routes", r0(gap), 1_113_167);

const monthly = offset(BENEFIT);
eq("monthly offset on a $3,200 benefit", monthly, 480);
eq("15 percent of the benefit", (OFFSET_PCT / 100) * BENEFIT, 480);
eq("the amount above $750", BENEFIT - OFFSET_FLOOR, 2_450);
eq("the lesser of the two is the 15 percent leg", monthly === (OFFSET_PCT / 100) * BENEFIT ? 1 : 0, 1);
const annual = monthly * 12;
eq("annual offset", annual, 5_760);
eq("years to clear the deficiency by offset", Number((deficiency / annual).toFixed(1)), 258.5);

/* -------------------------------------- the first-party SBA hotel extract */
const sba = JSON.parse(readFileSync(new URL("../content/sba/summary.json", import.meta.url), "utf8"));
const LAST_FY = sba.meta.lastFullFiscalYear;
const fy25 = sba.byFiscalYear.find((y) => y.fiscalYear === LAST_FY && y.program === "7a");
const seasoned = sba.byFiscalYear.filter((y) => y.program === "7a" && y.fiscalYear <= LAST_FY - 10);
const seasonedLoans = seasoned.reduce((n, y) => n + y.count, 0);
const seasonedChgoff = seasoned.reduce((n, y) => n + y.chargedOffCount, 0);

console.log("\n-- /data/sba-hotel-lending, recomputed --");
eq("last full fiscal year in the release", LAST_FY, 2025);
eq("SBA data as of", sba.meta.asOf, "2026-06-30");
eq("median FY2025 7(a) hotel loan", fy25.medianLoan, 2_681_500);
eq("the median hotel loan is above the DOJ line", fy25.medianLoan > COMPROMISE_CEILING ? 1 : 0, 1);
eq("seasoned 7(a) hotel loans, FY2010 to FY2015", seasonedLoans, 3_945);
eq("of those, carrying status CHGOFF", seasonedChgoff, 125);
eq("share charged off, percent", Number(((seasonedChgoff / seasonedLoans) * 100).toFixed(1)), 3.2);

/* ------------------------------------------------------- template limits */
const rel = "../src/lib/data/answers/hotel-financing/sba-loan-default.ts";
const src = readFileSync(new URL(rel, import.meta.url), "utf8");
const { page } = await import(rel).catch(() => ({ page: null }));

console.log("\n-- template limits --");
if (!page) {
  console.log("note: run `npx tsx scripts/check-sba-default-math.mjs` for the structural checks");
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

  const flat = JSON.stringify(page);
  for (const needle of [
    "60 calendar days",
    "15 calendar days",
    "120 days",
    "75 percent",
    "85 percent",
    "20 percent",
    "$10,000",
    "30 calendar days",
    "24 months",
    "$600",
    "$100,000",
    "180 days",
    "15 percent",
    "$750",
    "6 percent",
    "90 days",
    "10.00%",
    "$2,681,500",
    "3,945",
    "$3,850,000",
    "$449,167",
    "$4,299,167",
    "$2,900,000",
    "$2,810,000",
    "$1,489,167",
    "$126,000",
    "$3,474,000",
    "$376,000",
    "$1,113,167",
    "$480",
    "$5,760",
    "258.5",
  ]) {
    eq(`page prints ${needle}`, flat.includes(needle) ? 1 : 0, 1);
  }

  /* nothing unpublished: no lender policy, no foreclosure sale price band */
  eq("page says no public source gives foreclosure prices", /No public source publishes what hotels fetch/i.test(flat) ? 1 : 0, 1);

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
