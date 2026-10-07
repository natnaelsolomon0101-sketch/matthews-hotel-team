/**
 * Recomputes every number in the worked example and the derived comparisons on
 * /hotel-industry/hotel-worker-minimum-wage.
 *
 *   node scripts/check-hotel-wage-math.mjs
 *
 * Published rates, read at their publishers on 2026-10-07:
 *   Los Angeles CHMWO cash wage  $22.50 (9/8/2025), $25.00 (7/1/2026),
 *                                $25.50 (7/1/2027), $28.50 (7/1/2028),
 *                                $29.00 (7/1/2029)
 *   Los Angeles health benefit   $4.25 (7/1/2026), $6.00 (7/1/2027)
 *   Los Angeles citywide minimum $18.42 (7/1/2026)
 *   Long Beach hotel worker      $26.50 (7/1/2026)
 *   California statewide         $16.90 (1/1/2026)
 *   BLS 2025 median, maids and housekeeping cleaners in accommodation $16.78
 *
 * Everything else below is an assumption, labeled as such on the page.
 */
const eq = (label, got, want, tol = 0.005) => {
  if (Math.abs(got - want) > tol) {
    console.error(`FAIL ${label}: got ${got}, expected ${want}`);
    process.exitCode = 1;
  } else {
    console.log(`ok   ${label} = ${want}`);
  }
};

/* ---------------------------------------------------- published rates */
const CASH_2025 = 22.5, CASH_2026 = 25.0, CASH_2027 = 25.5, CASH_2028 = 28.5;
const HB_2026 = 4.25, HB_2027 = 6.0;
const LA_CITYWIDE = 18.42, LONG_BEACH = 26.5, CA_STATE = 16.9, BLS_MEDIAN = 16.78;

/* ------------------------------------------------- derived comparisons */
const allIn2026 = CASH_2026 + HB_2026;
eq("Los Angeles all-in floor, July 1 2026", allIn2026, 29.25);

const allIn2027 = CASH_2027 + HB_2027;
eq("Los Angeles all-in floor, July 1 2027", allIn2027, 31.5);

eq("all-in floor over the BLS national median, percent",
   Math.round(((allIn2026 - BLS_MEDIAN) / BLS_MEDIAN) * 1000) / 10, 74.3);

eq("all-in floor over the Los Angeles citywide minimum, percent",
   Math.round(((allIn2026 - LA_CITYWIDE) / LA_CITYWIDE) * 1000) / 10, 58.8);

eq("Long Beach over the California statewide minimum, percent",
   Math.round(((LONG_BEACH - CA_STATE) / CA_STATE) * 1000) / 10, 56.8);

/* ------------------------------------------------ hypothetical hotel */
const KEYS = 150;          // assumption
const WORKERS = 45;        // assumption
const HOURS_EACH = 2080;   // assumption: full time, no overtime
const CAP = 0.08;          // assumption, chosen for round arithmetic

const hours = WORKERS * HOURS_EACH;
eq("covered hours a year", hours, 93600);

/* Scenario A: every covered hour was paid at the old floor. */
const stepA = allIn2026 - CASH_2025;
eq("scenario A step per hour", stepA, 6.75);
const costA = hours * stepA;
eq("scenario A annual cost", costA, 631800);
eq("scenario A value at an 8 percent cap rate", costA / CAP, 7897500);
eq("scenario A cost per key", costA / KEYS, 4212);
eq("scenario A value per key", costA / CAP / KEYS, 52650);

/* Scenario B: the hotel already paid $25.00 cash and $3.00 of health benefits. */
const EXISTING_HB = 3.0;   // assumption
const stepB = HB_2026 - EXISTING_HB;
eq("scenario B step per hour", stepB, 1.25);
const costB = hours * stepB;
eq("scenario B annual cost", costB, 117000);
eq("scenario B value at an 8 percent cap rate", costB / CAP, 1462500);
eq("scenario B cost per key", costB / KEYS, 780);

/* The next scheduled step, July 1 2027. */
const step2027 = allIn2027 - allIn2026;
eq("July 2027 step per hour", step2027, 2.25);
const cost2027 = hours * step2027;
eq("July 2027 annual cost", cost2027, 210600);
eq("July 2027 value at an 8 percent cap rate", cost2027 / CAP, 2632500);

/* The July 1 2028 cash step, health benefit not yet calculated. */
const step2028 = CASH_2028 - CASH_2027;
eq("July 2028 cash step per hour", step2028, 3.0);
eq("July 2028 annual cash cost", hours * step2028, 280800);

if (!process.exitCode) console.log("\nall hotel wage arithmetic checks passed");
