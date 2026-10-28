#!/usr/bin/env node
/**
 * Arithmetic check for /hotel-financing/interest-deduction-limits.
 *
 *   node scripts/check-163j-math.mjs
 *
 * Every number printed on that page that is the result of a calculation is
 * recomputed here from the page's own stated inputs, and the page text is read
 * back to confirm the printed figure matches. Exits non-zero on any mismatch.
 *
 * Statutory and published inputs (not recomputed, read from the sources):
 *   - 30 percent of adjusted taxable income: 26 U.S.C. 163(j)(1)(B)
 *   - $32,000,000 gross receipts for tax years beginning in 2026:
 *     Rev. Proc. 2025-32 section 4.30
 *   - more than 35 percent of losses to limited partners: 26 U.S.C. 1256(e)(3)(B)
 *   - 39-year nonresidential real property: 26 U.S.C. 168(c)
 *   - 40-year alternative depreciation system: 26 U.S.C. 168(g)(2)(C)(iv)
 *   - $256,000 / $512,000 excess business loss: Rev. Proc. 2025-32 section 4.31
 */
import { readFileSync } from "node:fs";

const SRC = "src/lib/data/answers/hotel-financing/interest-deduction-limits.ts";
const text = readFileSync(SRC, "utf8");

let failures = 0;
const usd = (n) =>
  "$" + Math.round(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

/** Round to cents so binary floating point never fails a dollar assertion. */
const cents = (n) => (typeof n === "number" ? Math.round(n * 100) / 100 : n);

function assert(label, got, want) {
  const ok = cents(got) === cents(want);
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: got ${got}, want ${want}`);
}

/** The page must literally print the computed figure. */
function printed(label, value) {
  const needle = typeof value === "number" ? usd(value) : value;
  const ok = text.includes(needle);
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: page prints ${needle}`);
  return ok;
}

/* ---------------------------------------------- the worked example inputs */
const revenue = 6_400_000;
const opex = 4_600_000;
const debt = 14_000_000;
const coupon = 0.0725;
const depreciation = 900_000;
const lpLossShare = 0.6;

const PRICE = 15_500_000;
const LAND = 2_000_000;
const BUILDING = 10_000_000;
const SHORT_LIFE = 3_500_000;

/* ------------------------------------------------------- step one, inputs */
const operatingProfit = revenue - opex;
assert("operating profit = revenue less opex", operatingProfit, 1_800_000);
printed("operating profit", operatingProfit);

const interest = debt * coupon;
assert("interest = debt x coupon", interest, 1_015_000);
printed("annual interest", interest);

assert("basis allocation adds to price", LAND + BUILDING + SHORT_LIFE, PRICE);
printed("purchase price", PRICE);
printed("land allocation", LAND);
printed("building allocation", BUILDING);
printed("short-life allocation", SHORT_LIFE);

/* ------------------------------------------- step two, adjusted taxable income */
const taxableBefore = operatingProfit - interest - depreciation;
assert("taxable income before the limitation", taxableBefore, -115_000);
printed("negative taxable income", "negative $115,000");

const ati = taxableBefore + interest + depreciation;
assert("ATI = taxable income + interest + depreciation", ati, 1_800_000);
assert("ATI equals operating profit (the 2025 add-back)", ati, operatingProfit);

/* ---------------------------------------------------------- step three, the cap */
const cap = 0.3 * ati;
assert("cap = 30 percent of ATI", cap, 540_000);
printed("deductible interest", cap);

const disallowed = interest - cap;
assert("disallowed = interest less cap", disallowed, 475_000);
printed("excess business interest", disallowed);

/* ----------------------------------- what the 2025 amendment was worth here */
const atiPre2025 = taxableBefore + interest;
assert("pre-2025 ATI excluded the depreciation add-back", atiPre2025, 900_000);
printed("pre-2025 ATI", atiPre2025);

const capPre2025 = 0.3 * atiPre2025;
assert("pre-2025 cap", capPre2025, 270_000);
printed("pre-2025 cap", capPre2025);

const disallowedPre2025 = interest - capPre2025;
assert("pre-2025 disallowed", disallowedPre2025, 745_000);
printed("pre-2025 disallowed", disallowedPre2025);

assert(
  "amendment moved cap less pre-2025 cap into the current year",
  cap - capPre2025,
  270_000,
);
assert(
  "which is also the fall in the disallowed amount",
  disallowedPre2025 - disallowed,
  cap - capPre2025,
);

/* -------------------------------------------- step four, pricing the election */
const macrs = BUILDING / 39;
assert("39-year straight line, rounded", Math.round(macrs), 256_410);
printed("MACRS building depreciation", 256_410);

const ads = BUILDING / 40;
assert("40-year alternative system", ads, 250_000);
printed("ADS building depreciation", ads);

const annualCost = Math.round(macrs) - ads;
assert("annual depreciation cost of electing out", annualCost, 6_410);
printed("annual cost of the election", annualCost);

/* -------------------------------------------- step five, the aggregation trap */
const HOTELS = 9;
const PER_HOTEL = 3_600_000;
const THRESHOLD_2026 = 32_000_000;

const group = HOTELS * PER_HOTEL;
assert("nine hotels at $3.6M each", group, 32_400_000);
printed("group gross receipts", group);
assert("overage against the 2026 line", group - THRESHOLD_2026, 400_000);
printed("overage", group - THRESHOLD_2026);
printed("2026 gross receipts line", THRESHOLD_2026);

/* ------------------------------------- the syndicate test and the reg example */
const ok35 = lpLossShare > 0.35;
assert("60 percent is more than the 35 percent syndicate line", ok35, true);

const REG_RECEIPTS = 5_000_000;
const REG_NON_INTEREST = 4_500_000;
const REG_INTEREST = 600_000;
const regLoss = REG_RECEIPTS - (REG_NON_INTEREST + REG_INTEREST);
assert("1.1256(e)-2(c) example net loss", regLoss, -100_000);
printed("reg example receipts", REG_RECEIPTS);
printed("reg example non-interest expenses", REG_NON_INTEREST);
printed("reg example interest", REG_INTEREST);
printed("reg example net loss", "$100,000");
assert(
  "half of that loss to the limited owner exceeds 35 percent",
  0.5 > 0.35,
  true,
);

/* --------------------------------------------------- published figures echoed */
printed("excess business loss threshold, 2026", 256_000);
printed("excess business loss threshold, joint", 512_000);
printed("stale IRS form page figure", 29_000_000);
printed("debt amount", debt);
printed("depreciation", depreciation);

console.log(
  failures
    ? `\n${failures} assertion(s) failed`
    : "\nall 163(j) page arithmetic checks pass",
);
process.exit(failures ? 1 : 0);
