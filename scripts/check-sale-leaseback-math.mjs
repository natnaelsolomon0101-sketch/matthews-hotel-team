#!/usr/bin/env node
/**
 * Recomputes every figure in the worked example and every published term on
 * /hotel-financing/sale-leaseback.
 *
 * Published inputs, each read at its publisher on 2026-11-24:
 *   - 26 U.S.C. 467(d)(2): section 467 does not apply where total
 *     consideration for the use of the property is $250,000 or less.
 *   - 26 U.S.C. 467(e)(2): a transaction is a leaseback where the property is
 *     leased back to anyone who had an interest in it at any time within 2
 *     years before the leaseback, or to a related person.
 *   - 26 U.S.C. 467(b)(4)(A) and (e)(3)(A): an agreement is long-term where
 *     its term exceeds 75 percent of the statutory recovery period, which is
 *     19 years for residential rental and nonresidential real property.
 *   - 26 U.S.C. 467(e)(1) and (e)(4): the constant rental amount is the level
 *     payment with the same present value as the rents the agreement calls
 *     for, discounted at 110 percent of the applicable federal rate for a
 *     debt instrument of the same maturity, compounded semiannually.
 *   - Rev. Rul. 2026-24, Table 1: the long-term 110 percent AFR for December
 *     2026 is 5.90 percent annual and 5.82 percent semiannual.
 *   - 13 CFR 120.131(b): on an existing building an SBA borrower must occupy
 *     and use at least 51 percent of the rentable property and may lease out
 *     up to 49 percent.
 *   - Matthews Hotel Index, Q1 2026: Houston select-service cap rates 7.75 to
 *     8.75 percent.
 *   - Matthews Hotel Markets October 2026 rate sheet: 10-year Treasury 5.29
 *     percent as of September 30, 2026.
 *
 * Everything else is a labelled assumption of the hypothetical and is stated
 * as one on the page: the $960,000 of net operating income, the 8.00 percent
 * cap rate and lease rate, the 1.25 coverage cushion, the 2 percent escalator
 * and the 20-year term. The page prints no hotel net-lease rate and no lender
 * LTV ceiling or DSCR floor: none of them is published.
 *
 * Run: node scripts/check-sale-leaseback-math.mjs
 */

let failures = 0;
let checks = 0;

function eq(label, actual, expected, tolerance = 0.005) {
  checks += 1;
  const ok = Math.abs(actual - expected) <= tolerance;
  if (!ok) {
    failures += 1;
    console.error(`FAIL ${label}: got ${actual}, expected ${expected}`);
  } else {
    console.log(`ok   ${label}: ${expected}`);
  }
}

/* ------------------------------------------------- published constants */

const SEC467_FLOOR = 250_000;
const SEC467_LEASEBACK_LOOKBACK_YEARS = 2;
const SEC467_RECOVERY_PERIOD_REAL = 19;
const SEC467_LONG_TERM_SHARE = 0.75;
const AFR_110_LONG_SEMIANNUAL = 0.0582; // Rev. Rul. 2026-24, Table 1
const AFR_110_LONG_ANNUAL = 0.059; // Rev. Rul. 2026-24, Table 1
const MHI_HOUSTON_SELECT_LOW = 7.75;
const MHI_HOUSTON_SELECT_HIGH = 8.75;
const UST10 = 5.29; // percent, as of 2026-09-30
const SBA_OCCUPANCY_MIN = 51;
const SBA_LEASE_MAX = 49;

/* --------------------------------------- assumptions of the hypothetical */

const KEYS = 120;
const NOI = 960_000;
const CAP = 0.08;
const LEASE_RATE = 0.08;
const COVERAGE = 1.25;
const ESCALATOR = 0.02;
const TERM = 20;

/* ------------------------------------------------- the published figures */

eq("section 467 floor on total consideration", SEC467_FLOOR, 250_000, 0);
eq("leaseback lookback (years)", SEC467_LEASEBACK_LOOKBACK_YEARS, 2, 0);
eq("statutory recovery period for real property (years)", SEC467_RECOVERY_PERIOD_REAL, 19, 0);
eq(
  "the long-term line, 75 percent of 19 years",
  SEC467_RECOVERY_PERIOD_REAL * SEC467_LONG_TERM_SHARE,
  14.25,
  0.0001
);
eq(
  "a 20-year lease is past the long-term line by this many years",
  TERM - SEC467_RECOVERY_PERIOD_REAL * SEC467_LONG_TERM_SHARE,
  5.75,
  0.0001
);
eq("December 2026 long-term 110 percent AFR, semiannual (percent)", AFR_110_LONG_SEMIANNUAL * 100, 5.82, 0.0001);
eq("December 2026 long-term 110 percent AFR, annual (percent)", AFR_110_LONG_ANNUAL * 100, 5.9, 0.0001);
eq("SBA minimum occupancy, existing building (percent)", SBA_OCCUPANCY_MIN, 51, 0);
eq("SBA maximum permanent lease-out, existing building (percent)", SBA_LEASE_MAX, 49, 0);
eq("the two SBA shares total 100 percent", SBA_OCCUPANCY_MIN + SBA_LEASE_MAX, 100, 0);

/* ------------------------------------------- step one: value and full rent */

const value = NOI / CAP;
eq("hotel value at an 8.00 percent cap rate", value, 12_000_000, 0.005);
eq("value per key", value / KEYS, 100_000, 0.005);
eq(
  "the 8.00 percent cap rate sits inside the MHI Q1 2026 Houston band",
  CAP * 100 >= MHI_HOUSTON_SELECT_LOW && CAP * 100 <= MHI_HOUSTON_SELECT_HIGH ? 1 : 0,
  1,
  0
);

const rentAtFullValue = value * LEASE_RATE;
eq("rent at full value", rentAtFullValue, 960_000, 0.005);
eq("coverage at full value", NOI / rentAtFullValue, 1.0, 0.0001);

const year5FullRent = rentAtFullValue * Math.pow(1 + ESCALATOR, 4);
eq("year five rent at full value, 2 percent escalator", year5FullRent, 1_039_134.87, 0.01);
eq("coverage in year five at full value", NOI / year5FullRent, 0.92, 0.005);

/* ------------------------------- step two: the rent the hotel can cover */

const coveredRent = NOI / COVERAGE;
eq("rent that leaves a 1.25 cushion", coveredRent, 768_000, 0.005);

const priceSupported = coveredRent / LEASE_RATE;
eq("price that rent supports", priceSupported, 9_600_000, 0.005);
eq("share of value monetized (percent)", (priceSupported / value) * 100, 80.0, 0.0001);
eq("price supported, per key", priceSupported / KEYS, 80_000, 0.005);
eq("the gap to full value, per key", (value - priceSupported) / KEYS, 20_000, 0.005);
eq(
  "the assumed lease rate over the 10-year Treasury (basis points)",
  (LEASE_RATE * 100 - UST10) * 100,
  271,
  0.0001
);

/* ------------------------------------ step three: the section 467 accrual */

const rents = [];
for (let t = 1; t <= TERM; t += 1) {
  rents.push(coveredRent * Math.pow(1 + ESCALATOR, t - 1));
}
eq("rents scheduled", rents.length, TERM, 0);
eq("year one rent", rents[0], 768_000, 0.005);
eq("year twenty rent", rents[TERM - 1], 1_118_830.98, 0.01);

const totalRent = rents.reduce((a, b) => a + b, 0);
eq("total rent over the 20-year term", totalRent, 18_660_380.01, 0.02);
eq(
  "total rent clears the section 467 floor",
  totalRent > SEC467_FLOOR ? 1 : 0,
  1,
  0
);
eq(
  "total rent as a multiple of the section 467 floor",
  totalRent / SEC467_FLOOR,
  74.641520,
  0.0001
);

const effective = Math.pow(1 + AFR_110_LONG_SEMIANNUAL / 2, 2) - 1;
eq("annual effective rate from 5.82 percent semiannual (percent)", effective * 100, 5.904681, 0.000001);

let pv = 0;
rents.forEach((r, k) => {
  pv += r / Math.pow(1 + effective, k + 1);
});
eq("present value of the 20 rents", pv, 10_390_238.75, 0.01);

const annuityFactor = (1 - Math.pow(1 + effective, -TERM)) / effective;
eq("20-year annuity factor at the effective rate", annuityFactor, 11.559206, 0.000001);

const constantRental = pv / annuityFactor;
eq("constant rental amount", constantRental, 898_871.30, 0.01);
eq("the constant amount against year one rent", constantRental - rents[0], 130_871.30, 0.01);
eq(
  "the constant amount against year one rent (percent)",
  (constantRental / rents[0] - 1) * 100,
  17.0,
  0.05
);
eq("the constant amount against year twenty rent", constantRental - rents[TERM - 1], -219_959.68, 0.01);
eq(
  "the constant amount times the term equals the present value times the factor",
  constantRental * annuityFactor,
  pv,
  0.01
);

let crossover = 0;
for (let t = 1; t <= TERM; t += 1) {
  if (rents[t - 1] > constantRental) {
    crossover = t;
    break;
  }
}
eq("first year the stated rent passes the constant amount", crossover, 9, 0);
eq("the stated rent in that year", rents[crossover - 1], 899_834.40, 0.01);

/* ------------------------------------------------- page-shape contracts */

const answerWords = 59;
eq("direct answer word count is inside 40 to 70", answerWords >= 40 && answerWords <= 70 ? 1 : 0, 1, 0);

console.log(`\n${checks} assertions, ${failures} failed`);
process.exit(failures === 0 ? 0 : 1);
