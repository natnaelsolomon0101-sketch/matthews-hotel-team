/**
 * Recomputes every figure on /hotel-valuation/hotel-to-apartment-conversion
 * and asserts that the page's prose carries the recomputed value.
 *
 *   node scripts/check-conversion-math.mjs
 *
 * Exits non-zero on the first mismatch. The page states a depreciation
 * switch that is worth money early in a 39-year schedule and costs money
 * late in one, which is only a defensible claim if the arithmetic holds at
 * both points, so both are computed here from the statute's own inputs
 * (26 U.S.C. 168(c): 39 years nonresidential, 27.5 years residential) and
 * the change-of-use mechanics in 26 CFR 1.168(i)-4(d)(3)(i).
 */
import { readFileSync } from "node:fs";

const SRC = "src/lib/data/answers/hotel-valuation/hotel-to-apartment-conversion.ts";
const file = readFileSync(SRC, "utf8");

let checks = 0;
let failures = 0;

/** Assert a computed value, to a given number of decimals. */
function eq(label, actual, expected, dp = 2) {
  checks++;
  const a = Number(actual.toFixed(dp));
  const e = Number(expected.toFixed(dp));
  if (a !== e) {
    failures++;
    console.log(`FAIL ${label}: computed ${a}, expected ${e}`);
  }
}

/** Assert the page prose contains a string (usually a formatted figure). */
function onPage(label, needle) {
  checks++;
  if (!file.includes(needle)) {
    failures++;
    console.log(`FAIL ${label}: page does not contain "${needle}"`);
  }
}

const usd = (n) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/* ---------------------------------------------------- statutory constants */

const NONRESIDENTIAL_YEARS = 39; // 26 U.S.C. 168(c)
const RESIDENTIAL_YEARS = 27.5; // 26 U.S.C. 168(c)
eq("nonresidential recovery period", NONRESIDENTIAL_YEARS, 39, 1);
eq("residential recovery period", RESIDENTIAL_YEARS, 27.5, 1);
onPage("39 years on the page", "39 years for nonresidential real property");
onPage("27.5 years on the page", "27.5 years for residential rental property");
onPage("80 percent test on the page", "80 percent or more of the gross rental income");
onPage("transient-unit exclusion on the page", "more than one-half of the units in which are used on a transient basis");

/* ------------------------------------------------- the hypothetical hotel */

const BUILDING_BASIS = 8_400_000;
onPage("building basis on the page", usd(BUILDING_BASIS).replace(".00", ""));

// Annual deduction as nonresidential real property, straight line.
const hotelAnnual = BUILDING_BASIS / NONRESIDENTIAL_YEARS;
eq("hotel annual depreciation", hotelAnnual, 215_384.615384);
onPage("hotel annual on the page", usd(hotelAnnual));

// Placed in service March 2015. The mid-month convention treats it as
// mid-March, so 2015 gets 9.5 of 12 months.
const FIRST_YEAR_MONTHS = 9.5;
const year2015 = hotelAnnual * (FIRST_YEAR_MONTHS / 12);
eq("2015 partial year", year2015, 170_512.820513);
onPage("2015 partial year on the page", usd(year2015));

/* ------------------------------------- convert late: year of change 2027 */

// 2015 partial, then 2016 through 2026 inclusive = 11 full years.
const fullYearsTo2026 = 11;
eq("full years 2016-2026", fullYearsTo2026, 2026 - 2016 + 1, 0);

const elevenFullYears = hotelAnnual * fullYearsTo2026;
eq("eleven full years", elevenFullYears, 2_369_230.769231);
onPage("eleven full years on the page", usd(elevenFullYears));

const accumTo2026 = year2015 + elevenFullYears;
eq("accumulated through 2026", accumTo2026, 2_539_743.589744);
onPage("accumulated through 2026 on the page", usd(accumTo2026));

const basis2027 = BUILDING_BASIS - accumTo2026;
eq("adjusted basis 1 Jan 2027", basis2027, 5_860_256.410256);
onPage("adjusted basis 2027 on the page", usd(basis2027));

// 26 CFR 1.168(i)-4(d)(3)(i): treated as placed in service in the year of
// change, over the new (shorter) recovery period, and the year-of-change
// allowance is computed without applying the applicable convention.
const residential2027 = basis2027 / RESIDENTIAL_YEARS;
eq("2027 residential deduction", residential2027, 213_100.233101);
onPage("2027 deduction on the page", usd(residential2027));

const lateDelta = hotelAnnual - residential2027;
eq("late-conversion first-year cost", lateDelta, 2_284.382284);
onPage("late-conversion cost on the page", usd(lateDelta));

// The sign is what the page claims: converting late reduces the deduction.
checks++;
if (!(residential2027 < hotelAnnual)) {
  failures++;
  console.log("FAIL late conversion should reduce the first-year deduction");
}

/* ------------------------------------ convert early: year of change 2018 */

// 2015 partial, then 2016 and 2017 = 2 full years.
const twoFullYears = hotelAnnual * 2;
eq("two full years", twoFullYears, 430_769.230769);
onPage("two full years on the page", usd(twoFullYears));

const accumTo2017 = year2015 + twoFullYears;
eq("accumulated through 2017", accumTo2017, 601_282.051282);
onPage("accumulated through 2017 on the page", usd(accumTo2017));

const basis2018 = BUILDING_BASIS - accumTo2017;
eq("adjusted basis 1 Jan 2018", basis2018, 7_798_717.948718);
onPage("adjusted basis 2018 on the page", usd(basis2018));

const residential2018 = basis2018 / RESIDENTIAL_YEARS;
eq("2018 residential deduction", residential2018, 283_589.743590);
onPage("2018 deduction on the page", usd(residential2018));

const earlyDelta = residential2018 - hotelAnnual;
eq("early-conversion first-year gain", earlyDelta, 68_205.128205);
onPage("early-conversion gain on the page", usd(earlyDelta));

const earlyPct = (earlyDelta / hotelAnnual) * 100;
eq("early-conversion percentage", earlyPct, 31.666667, 4);
onPage("early-conversion percentage on the page", "31.7 percent");
checks++;
if (Number(earlyPct.toFixed(1)) !== 31.7) {
  failures++;
  console.log(`FAIL early percentage rounds to ${earlyPct.toFixed(1)}, not 31.7`);
}

// The sign is what the page claims: converting early raises the deduction.
checks++;
if (!(residential2018 > hotelAnnual)) {
  failures++;
  console.log("FAIL early conversion should raise the first-year deduction");
}

/* --------------------------- why the sign flips: the remaining 39-year life */

// Years of the 39-year schedule used by 31 Dec 2026.
const yearsUsedTo2026 = accumTo2026 / hotelAnnual;
eq("39-year life used by end of 2026", yearsUsedTo2026, 11.791667, 4);
onPage("years used on the page", "11.79");

const remainingLife2027 = NONRESIDENTIAL_YEARS - yearsUsedTo2026;
eq("39-year life remaining at 1 Jan 2027", remainingLife2027, 27.208333, 4);
onPage("remaining life on the page", "27.21");

// That remaining life is shorter than the 27.5 the switch restarts, which is
// exactly why the late switch is a small loss rather than a gain.
checks++;
if (!(remainingLife2027 < RESIDENTIAL_YEARS)) {
  failures++;
  console.log("FAIL remaining 39-year life should be under 27.5 years at 2027");
}

// And longer than 27.5 at the early date, which is why that switch pays.
const yearsUsedTo2017 = accumTo2017 / hotelAnnual;
const remainingLife2018 = NONRESIDENTIAL_YEARS - yearsUsedTo2017;
eq("39-year life used by end of 2017", yearsUsedTo2017, 2.791667, 4);
eq("39-year life remaining at 1 Jan 2018", remainingLife2018, 36.208333, 4);
checks++;
if (!(remainingLife2018 > RESIDENTIAL_YEARS)) {
  failures++;
  console.log("FAIL remaining 39-year life should exceed 27.5 years at 2018");
}

/* ------------------------------------------------ takeaway figures match */

onPage("takeaway early figure", "$68,205");
onPage("takeaway late figure", "$2,284");

/* --------------------------------------------- rate-sheet figure parity */

// The originalDataPoint quotes the live October 2026 rate sheet rather than
// restating a number, so assert the sheet still says it.
const sheet = readFileSync("src/lib/rates/sheet.ts", "utf8");
checks++;
if (!sheet.includes("6.54%")) {
  failures++;
  console.log("FAIL src/lib/rates/sheet.ts no longer carries the 6.54% debenture");
}
onPage("debenture on the page", "6.54%");
onPage("debenture date on the page", "September 10, 2026");

/* --------------------------------------------------- page-shape contracts */

const answer = /answer:\s*"((?:[^"\\]|\\.)*)"/.exec(file)?.[1] ?? "";
const answerWords = answer.replace(/\[\d+\]/g, "").split(/\s+/).filter(Boolean).length;
checks++;
if (answerWords < 40 || answerWords > 70) {
  failures++;
  console.log(`FAIL direct answer is ${answerWords} words, needs 40 to 70`);
}
checks++;
if (!/\d/.test(answer)) {
  failures++;
  console.log("FAIL direct answer carries no number");
}
checks++;
if (!/(January|February|March|April|May|June|July|August|September|October|November|December)( \d{1,2},)? 20\d\d/.test(answer)) {
  failures++;
  console.log("FAIL direct answer carries no date");
}

const faqAnswers = [...file.matchAll(/\n      a:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
checks++;
if (faqAnswers.length < 5 || faqAnswers.length > 8) {
  failures++;
  console.log(`FAIL ${faqAnswers.length} FAQ answers found, needs 5 to 8`);
}
for (const [i, a] of faqAnswers.entries()) {
  const w = a.replace(/\[\d+\]/g, "").split(/\s+/).filter(Boolean).length;
  checks++;
  if (w > 50) {
    failures++;
    console.log(`FAIL FAQ ${i + 1} answer is ${w} words, limit 50`);
  }
}

const title = /\n  title:\s*"((?:[^"\\]|\\.)*)"/.exec(file)?.[1] ?? "";
checks++;
if (title.length === 0 || title.length > 60) {
  failures++;
  console.log(`FAIL title is ${title.length} chars, limit 60`);
}

const description = /\n  description:\s*"((?:[^"\\]|\\.)*)"/.exec(file)?.[1] ?? "";
checks++;
if (description.length === 0 || description.length > 155) {
  failures++;
  console.log(`FAIL description is ${description.length} chars, limit 155`);
}

/* ------------------------------------------------------------------ done */

console.log(
  failures
    ? `\n${failures} of ${checks} assertions failed`
    : `conversion math: ${checks}/${checks} assertions pass`,
);
if (failures) process.exitCode = 1;
