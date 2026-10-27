/**
 * Recomputes every number in the worked example and the body arithmetic on
 * /sell-a-hotel/estate-tax-and-basis-step-up.
 *
 * Inputs are either hypothetical assumptions (labelled on the page as such) or
 * figures read from a cited source this run:
 *   - 26 U.S.C. 2010(c)(3)(A): basic exclusion amount $15,000,000
 *   - 26 U.S.C. 2001(c): rate schedule, $345,800 plus 40% over $1,000,000
 *   - Rev. Proc. 2025-32, sections 3.41 and 3.51: the 2026 section 2032A cap
 *     of $1,460,000 and the section 6601(j) dollar amount of $1,940,000
 *   - IRS Topic 409: 25% maximum on unrecaptured section 1250 gain, 20% top
 *     long-term capital gain rate
 *   - IRS Publication 946: 39-year recovery period, nonresidential real property
 *   - 26 U.S.C. 6166(a): up to 10 installments, first up to 5 years out
 *   - 26 U.S.C. 6601(j): 2% on the 2-percent portion, 45% of the underpayment
 *     rate on the excess
 *   - IRS news release of August 21, 2026: 7% underpayment rate for the quarter
 *     beginning October 1, 2026
 *   - Prime rate of 7.00% as of September 30, 2026 on /rates
 *
 * Run: node scripts/check-estate-tax-math.mjs
 */
const r2 = (n) => Math.round(n * 100) / 100;
const fail = [];
const check = (label, got, want, tol = 0.51) => {
  const ok = Math.abs(got - want) <= tol;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: got ${got}, page says ${want}`);
  if (!ok) fail.push(label);
};

// ---- published 2026 figures
const BEA = 15_000_000;              // 26 U.S.C. 2010(c)(3)(A)
const TOP_RATE = 0.4;                // 26 U.S.C. 2001(c)
const S2032A_CAP = 1_460_000;        // Rev. Proc. 2025-32 s 3.41
const S6601J_DOLLARS = 1_940_000;    // Rev. Proc. 2025-32 s 3.51
const UNDERPAYMENT = 0.07;           // IRS, quarter beginning October 1, 2026
const PRIME = 0.07;                  // /rates, October 2026 edition
const RECOVERY = 39;                 // IRS Pub 946, nonresidential real property

// 26 U.S.C. 2001(c): tentative tax on an amount over $1,000,000
const tentative = (amount) => 345_800 + TOP_RATE * (amount - 1_000_000);

// applicable credit amount, 26 U.S.C. 2010(c)(1)
const CREDIT = tentative(BEA);
check("applicable credit amount for 2026", CREDIT, 5_945_800);

// 26 U.S.C. 6601(j)(2)(A): the 2-percent portion
const TWO_PCT_PORTION = tentative(S6601J_DOLLARS + BEA) - CREDIT;
check("2-percent portion for 2026", TWO_PCT_PORTION, 776_000);
check("2-percent portion equals 40% of the indexed dollar amount",
  TOP_RATE * S6601J_DOLLARS, 776_000);

// ---- part 1: hypothetical 112-key hotel, hold versus sell
const FMV = 18_000_000;
const KEYS = 112;
const LAND_COST = 1_800_000;
const BLDG_COST = 9_200_000;
const DEBT = 6_000_000;
const OTHER_ASSETS = 2_000_000;
const ADMIN = 400_000;
const YEARS_HELD = 25;               // January 2001 through December 2025

check("value per key", Math.round(FMV / KEYS), 160_714, 1);

const ANNUAL_DEP = BLDG_COST / RECOVERY;
check("annual straight-line depreciation on the building", r2(ANNUAL_DEP), 235_897.44);

const DEP_TAKEN = ANNUAL_DEP * YEARS_HELD;
check("depreciation taken over 25 years", r2(DEP_TAKEN), 5_897_435.90);

const ADJ_BASIS = LAND_COST + (BLDG_COST - DEP_TAKEN);
check("adjusted basis at the start of 2026", r2(ADJ_BASIS), 5_102_564.10);

const GAIN = FMV - ADJ_BASIS;
check("total gain on a 2026 sale", r2(GAIN), 12_897_435.90);

// IRS Topic 409: unrecaptured section 1250 gain at a maximum 25%, the rest at 20%
const TAX_1250 = DEP_TAKEN * 0.25;
check("tax on unrecaptured section 1250 gain at 25%", r2(TAX_1250), 1_474_358.98);

const REST = GAIN - DEP_TAKEN;
check("remaining long-term capital gain", r2(REST), 7_000_000);

const TAX_LTCG = REST * 0.2;
check("tax on the remaining gain at 20%", TAX_LTCG, 1_400_000);

const INCOME_TAX = TAX_1250 + TAX_LTCG;
check("federal income tax on a 2026 sale", r2(INCOME_TAX), 2_874_358.98);

// route A: sell in 2026, then die holding the cash
const NET_CASH = FMV - DEBT - INCOME_TAX;
check("cash left after the loan and the tax", r2(NET_CASH), 9_125_641.02);

const GROSS_A = NET_CASH + OTHER_ASSETS;
check("route A gross estate", r2(GROSS_A), 11_125_641.02);

const TAXABLE_A = GROSS_A - ADMIN;
check("route A taxable estate", r2(TAXABLE_A), 10_725_641.02);
check("route A estate tax", Math.max(0, TAXABLE_A - BEA) * TOP_RATE, 0);

// route B: hold until death, heirs take a stepped-up basis and sell at the same price
const GROSS_B = FMV + OTHER_ASSETS;
check("route B gross estate", GROSS_B, 20_000_000);

const TAXABLE_B = GROSS_B - DEBT - ADMIN;
check("route B taxable estate", TAXABLE_B, 13_600_000);
check("route B estate tax", Math.max(0, TAXABLE_B - BEA) * TOP_RATE, 0);
check("route B gain on an immediate sale at the same price", FMV - FMV, 0);

const TO_FAMILY_B = GROSS_B - DEBT - ADMIN;
check("route B to the family", TO_FAMILY_B, 13_600_000);
check("the step-up is worth the whole income tax bill",
  r2(TO_FAMILY_B - TAXABLE_A), 2_874_358.98);

// the heir's new depreciation, on a hypothetical allocation of the stepped-up basis
const HEIR_BLDG = 13_500_000;
const HEIR_DEP = HEIR_BLDG / RECOVERY;
check("heir's annual depreciation on the stepped-up building basis", r2(HEIR_DEP), 346_153.85);
check("added annual depreciation from the step-up", r2(HEIR_DEP - ANNUAL_DEP), 110_256.41);

// ---- part 2: the same owner with a three-hotel estate, where estate tax bites
const GROSS_2 = 42_000_000;
const HOTELS_2 = 30_000_000;
const DEDUCTIONS_2 = 8_000_000;      // mortgages and administration, 26 U.S.C. 2053

const ADJ_GROSS_2 = GROSS_2 - DEDUCTIONS_2;   // 26 U.S.C. 6166(b)(6)
check("adjusted gross estate", ADJ_GROSS_2, 34_000_000);

const TAXABLE_2 = GROSS_2 - DEDUCTIONS_2;
const ESTATE_TAX_2 = tentative(TAXABLE_2) - CREDIT;
check("estate tax on a $34,000,000 taxable estate", ESTATE_TAX_2, 7_600_000);
check("the same figure as a flat 40% of the excess over the exclusion",
  TOP_RATE * (TAXABLE_2 - BEA), 7_600_000);

// 26 U.S.C. 6166(a)(1): the 35% test
const SHARE = HOTELS_2 / ADJ_GROSS_2;
check("hotels as a share of the adjusted gross estate, in percent", r2(SHARE * 100), 88.24);
if (!(SHARE > 0.35)) fail.push("35% test");
console.log(`ok   35% test: ${r2(SHARE * 100)}% exceeds 35%`);

// 26 U.S.C. 6166(a)(2): the deferrable portion
const DEFERRABLE = ESTATE_TAX_2 * SHARE;
check("tax that may be paid in installments", r2(DEFERRABLE), 6_705_882.35);

const DUE_NOW = ESTATE_TAX_2 - DEFERRABLE;
check("tax due with the return", r2(DUE_NOW), 894_117.65);

const INSTALMENT = DEFERRABLE / 10;
check("each of ten installments", r2(INSTALMENT), 670_588.24);

// 26 U.S.C. 6601(j): interest in the first year, before any principal is paid
const EXCESS = DEFERRABLE - TWO_PCT_PORTION;
check("the portion above the 2-percent portion", r2(EXCESS), 5_929_882.35);

const RATE_45 = 0.45 * UNDERPAYMENT;
check("45% of the 7% underpayment rate, in percent", r2(RATE_45 * 100), 3.15);

const INT_2PCT = TWO_PCT_PORTION * 0.02;
check("first-year interest on the 2-percent portion", INT_2PCT, 15_520);

const INT_EXCESS = EXCESS * RATE_45;
check("first-year interest on the excess", r2(INT_EXCESS), 186_791.29);

const INT_TOTAL = INT_2PCT + INT_EXCESS;
check("first-year interest under section 6166", r2(INT_TOTAL), 202_311.29);

const PRIME_CARRY = DEFERRABLE * PRIME;
check("the same balance carried at Prime", r2(PRIME_CARRY), 469_411.76);
check("first-year saving against Prime", r2(PRIME_CARRY - INT_TOTAL), 267_100.47);

// ---- section 2032A, for the body
check("2032A cap as a share of the 2026 exclusion, in percent",
  r2((S2032A_CAP / BEA) * 100), 9.73);

console.log(
  fail.length === 0
    ? "\nAll checks passed."
    : `\n${fail.length} FAILED: ${fail.join(", ")}`,
);
process.exit(fail.length === 0 ? 0 : 1);
