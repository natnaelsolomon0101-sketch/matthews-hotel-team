#!/usr/bin/env node
/**
 * Recomputes every number on
 * /hotel-valuation/insurance-costs-and-hotel-value and re-checks the
 * template's own limits (geo/05-templates.md §1.1).
 *
 *   node scripts/check-insurance-value-math.mjs
 *
 * Nothing here is fetched. The source figures are the ones read on 2026-11-05
 * out of Marsh's Global Insurance Market Index release of October 21, 2026,
 * Summit Hotel Properties' Form 10-Q for the quarter ended September 30, 2026,
 * Host Hotels & Resorts' and RLJ Lodging Trust's Forms 10-K for fiscal 2025,
 * SBA SOP 50 10 8.1 effective October 1, 2026, and 13 CFR 120.160. They are
 * hard-coded so a hand-edit to the page that moves a number fails this script
 * instead of shipping quietly. Exits non-zero on any mismatch.
 */
import { readFileSync } from "node:fs";

const src = readFileSync(
  new URL(
    "../src/lib/data/answers/hotel-valuation/insurance-costs-and-hotel-value.ts",
    import.meta.url,
  ),
  "utf8",
);

let fails = 0;
const eq = (label, got, want) => {
  const ok = got === want;
  if (!ok) fails++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
};
const has = (label, needle) => {
  const ok = src.includes(needle);
  if (!ok) fails++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}`);
};
const money = (n) => `$${Math.round(n).toLocaleString("en-US")}`;
const pct = (n, d = 1) => `${(Math.round(n * 10 ** d) / 10 ** d).toFixed(d)}%`;

/* ----------------------------------------- the generic rule in the answer */

// Insurance is a fixed charge, so a premium change divided by the cap rate is
// the value change. The direct answer prints the 8.00% case.
eq("$100,000 of premium at 8.00%", money(100000 / 0.08), "$1,250,000");
eq("$100,000 of premium at 7.00%", money(100000 / 0.07), "$1,428,571");
eq("$100,000 of premium at 8.50%", money(100000 / 0.085), "$1,176,471");
has("answer prints the 8.00% case", "$100,000 of annual premium is $1,250,000 of value at an 8.00% cap rate");
has("section 1 prints the 7.00% case", "$100,000 of annual premium carries $1,428,571 of value");
has("section 1 prints the 8.50% case", "it carries $1,176,471");

/* --------------------------------- Summit Hotel Properties, 10-Q Q3 2026 */

const SUMMIT = {
  line: { q3_2026: 13638, q3_2025: 14106, ytd_2026: 41093, ytd_2025: 41123 },
  revenue: { q3_2026: 185706, q3_2025: 177117, ytd_2026: 569778, ytd_2025: 554512 },
};
const lineChange = ((SUMMIT.line.q3_2026 - SUMMIT.line.q3_2025) / SUMMIT.line.q3_2025) * 100;
const revChange =
  ((SUMMIT.revenue.q3_2026 - SUMMIT.revenue.q3_2025) / SUMMIT.revenue.q3_2025) * 100;
eq("Summit line change, Q3", pct(lineChange), "-3.3%");
eq("Summit revenue change, Q3", pct(revChange), "4.8%");
eq(
  "Summit line as share of revenue, Q3 2026",
  pct((SUMMIT.line.q3_2026 / SUMMIT.revenue.q3_2026) * 100, 2),
  "7.34%",
);
eq(
  "Summit line as share of revenue, Q3 2025",
  pct((SUMMIT.line.q3_2025 / SUMMIT.revenue.q3_2025) * 100, 2),
  "7.96%",
);
has("page prints the Q3 2026 line", "$13,638,000");
has("page prints the Q3 2025 line", "$14,106,000");
has("page prints the nine-month lines", "$41,093,000 against $41,123,000");
has("page prints the revenue move", "$177,117,000 to $185,706,000");
has("page prints the 3.3% fall", "a fall of 3.3%");
has("page prints the 4.8% rise", "rose 4.8%");
has("page prints the revenue-share move", "from 7.96% to 7.34%");

/* ------------------------------------ Host Hotels & Resorts, 10-K FY2025 */

eq("Host other property-level expenses, change", pct(((426 - 411) / 411) * 100), "3.6%");
has("page prints Host's two years", "$426 million in 2025 against $411 million in 2024, up 3.6%");
has("Host revenues in the source label", "$6,114 million against $5,684 million");

/* ------------------------------------------ RLJ Lodging Trust, 10-K FY2025 */

has("RLJ property retention", "$250,000 self-insured retention per property claim");
has("RLJ named storm retention", "5% of total insured value for a named storm");
has("RLJ earthquake retention", "up to 5% of total insured value in earthquake-prone areas");
has("RLJ general liability retention", "$500,000 general liability retention per claim");

/* ---------------------------------------------------- SBA and the CFR text */

has("SOP threshold and edition", "SOP 50 10 8.1, effective October 1, 2026");
has("SOP 50,000 threshold", "7(a) loans over $50,000 and 504 projects over $50,000");
has("SOP cannot-be-approved sentence", "if hazard insurance is not available, the loan cannot be approved");
has(
  "13 CFR 120.160(c) quoted verbatim",
  'SBA requires hazard insurance for 7(a) loans greater than $500,000 and for 504 projects greater than $500,000, on all collateral.',
);
has("13 CFR 120.170 flood", "13 CFR 120.170 applies the Flood Disaster Protection Act of 1973");
has("10 days' notice", "at least 10 days' written notice before cancellation");

/* ------------------------------------------------ Marsh, October 21, 2026 */

has("Marsh release date", "released October 21, 2026");
has("Marsh global composite", "global commercial insurance rates down 5% in the third quarter of 2026");
has("Marsh global property", "property rates down 10%");
has("Marsh US property", "the US among five regions recording double-digit property decreases, at 10%");
has("Marsh prior quarters", "fallen 12% in the second quarter and 9% in the first");
has("Marsh cause", "benign US hurricane season");

/* --------------------------------------------------- the worked example */

const KEYS = 120;
const OCC = 0.71; // Matthews Hotel Index Q1 2026, Tampa
const ADR = 175; // assumption, inside the index's $135 to $215 band
const REVENUE = 5600000; // assumption
const NOI_OLD = 1450000; // assumption
const PREMIUM_OLD = 250000; // assumption
const CUT = 0.1; // Marsh US property, Q3 2026
const CAP_LOW = 0.075; // Matthews Hotel Index Q1 2026, Tampa select-service
const CAP_HIGH = 0.0825;
const TIV = 19200000; // assumption
const RETENTION_PCT = 0.05; // RLJ, named storm, certain coastal hotels
const DSCR = 1.35; // the Matthews Hotel Debt Index loan definition
const COUPON = 0.075; // assumption: no lender publishes a spread
const AMORT_YEARS = 25;

const availableNights = KEYS * 365;
const occupiedNights = availableNights * OCC;
const roomsRevenue = occupiedNights * ADR;
eq("available room nights", availableNights.toLocaleString("en-US"), "43,800");
eq("occupied room nights", occupiedNights.toLocaleString("en-US"), "31,098");
eq("rooms revenue", money(roomsRevenue), "$5,442,150");
eq("NOI margin on assumed revenue", pct((NOI_OLD / REVENUE) * 100), "25.9%");
eq("premium as share of revenue", pct((PREMIUM_OLD / REVENUE) * 100), "4.5%");
eq("premium as share of NOI", pct((PREMIUM_OLD / NOI_OLD) * 100), "17.2%");

const premiumNew = PREMIUM_OLD * (1 - CUT);
const saving = PREMIUM_OLD - premiumNew;
const noiNew = NOI_OLD + saving;
eq("premium after the 10% cut", money(premiumNew), "$225,000");
eq("annual saving", money(saving), "$25,000");
eq("NOI after the saving", money(noiNew), "$1,475,000");

const valueOldHigh = NOI_OLD / CAP_HIGH;
const valueNewHigh = noiNew / CAP_HIGH;
eq("value at 8.25%, before", money(valueOldHigh), "$17,575,758");
eq("value at 8.25%, after", money(valueNewHigh), "$17,878,788");
eq("value effect at 8.25%", money(valueNewHigh - valueOldHigh), "$303,030");
eq("value effect per key at 8.25%", money((valueNewHigh - valueOldHigh) / KEYS), "$2,525");
eq("value effect at 7.50%", money(saving / CAP_LOW), "$333,333");
eq("value effect per key at 7.50%", money(saving / CAP_LOW / KEYS), "$2,778");

const monthlyRate = COUPON / 12;
const n = AMORT_YEARS * 12;
const annualConstant = (monthlyRate / (1 - Math.pow(1 + monthlyRate, -n))) * 12;
eq("annual debt constant", pct(annualConstant * 100, 4), "8.8679%");
const adsOld = NOI_OLD / DSCR;
const adsNew = noiNew / DSCR;
eq("maximum annual debt service, before", money(adsOld), "$1,074,074");
eq("maximum annual debt service, after", money(adsNew), "$1,092,593");
const loanOld = adsOld / annualConstant;
const loanNew = adsNew / annualConstant;
eq("loan, before", money(loanOld), "$12,111,941");
eq("loan, after", money(loanNew), "$12,320,767");
eq("additional proceeds", money(loanNew - loanOld), "$208,827");
eq(
  "proceeds as a share of the value effect at 8.25%",
  `${Math.round(((loanNew - loanOld) / (valueNewHigh - valueOldHigh)) * 100)}%`,
  "69%",
);

const retention = TIV * RETENTION_PCT;
eq("total insured value per key", money(TIV / KEYS), "$160,000");
eq("named storm retention", money(retention), "$960,000");
eq("retention as a share of the new NOI", pct((retention / noiNew) * 100), "65.1%");
eq("retention against the annual saving", `${Math.round((retention / saving) * 10) / 10}`, "38.4");

has("worked example prints the occupied nights", "31,098 occupied nights");
has("worked example prints rooms revenue", "$5,442,150 of rooms revenue");
has("worked example prints the margin", "a 25.9% margin");
has("worked example prints the premium shares", "4.5% of revenue and 17.2% of net operating income");
has("worked example prints the new NOI", "$1,450,000 to $1,475,000");
has("worked example prints the 8.25% values", "$17,575,758 to $17,878,788");
has("worked example prints the per-key effects", "$303,030 of value, or $2,525 a key");
has("worked example prints the 7.50% case", "$333,333, or $2,778 a key");
has("worked example prints the debt service", "$1,074,074 to $1,092,593");
has("worked example prints the constant", "annual debt constant is 8.8679%");
has("worked example prints the loan", "$12,111,941 to $12,320,767");
has("worked example prints the proceeds", "$208,827 of additional proceeds, about 69% of the value effect");
has("worked example prints the retention", "$960,000 on that total insured value");
has("worked example prints the retention ratios", "65.1% of the hotel's new net operating income and 38.4 times");
has("worked example is labelled hypothetical", "Hypothetical. The hotel, its occupancy");
has("worked example names its assumptions", "the coupon and the cap rate are assumptions");

/* ------------------------------------------- Matthews Hotel Index figures */

has("MHI Tampa select-service band", "Tampa select-service cap rates of 7.5% to 8.25%");
has("MHI Tampa full-service band", "full-service of 6.75% to 7.75%");
has("MHI Tampa occupancy and ADR", "71% occupancy and ADR of $135 to $215");
has("rate sheet edition and Treasury", "the 10-year Treasury at 5.29% as of September 30, 2026");

/* ------------------------------------------- template limits, §1.1 checks */

const field = (name) => {
  const m = src.match(new RegExp(`\\n  ${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1] : "";
};
const words = (s) => s.split(/\s+/).filter(Boolean).length;

const title = field("title");
eq("title length <= 60", title.length <= 60, true);
const description = field("description");
eq("description length <= 155", description.length <= 155, true);

const answer = field("answer");
const answerWords = words(answer);
eq("answer word count in 40..70", answerWords >= 40 && answerWords <= 70, true);
console.log(`     answer is ${answerWords} words`);
eq("answer contains a digit", /\d/.test(answer), true);
eq(
  "answer contains a date",
  /(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, 20\d\d/.test(
    answer,
  ),
  true,
);

const takeawayBlock = src.slice(src.indexOf("takeaways: ["), src.indexOf("sections: ["));
const takeaways = [...takeawayBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
eq("takeaway count in 3..5", takeaways.length >= 3 && takeaways.length <= 5, true);

const faqBlock = src.slice(src.indexOf("faq: ["), src.indexOf("sources: ["));
const faqAnswers = [...faqBlock.matchAll(/\n      a: "((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
eq("faq count in 5..8", faqAnswers.length >= 5 && faqAnswers.length <= 8, true);
const overLong = faqAnswers.filter((a) => words(a) > 50);
eq("every faq answer <= 50 words", overLong.length, 0);

const bodyWords = words(
  [...src.matchAll(/\n      body:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]).join(" "),
);
console.log(`     section bodies run ${bodyWords} words`);
eq("section bodies are at least 1,000 words", bodyWords >= 1000, true);

eq("no em-dash", src.includes("—"), false);
eq("exactly one cta, to /contact", (src.match(/href: "\/contact"/g) ?? []).length, 1);

/* ------------------------------------------------------------------- done */

console.log(fails ? `\n${fails} check(s) failed` : "\nall checks passed");
process.exitCode = fails ? 1 : 0;
