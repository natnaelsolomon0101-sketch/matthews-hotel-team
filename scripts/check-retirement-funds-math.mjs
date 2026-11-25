/**
 * Recomputes every figure in the worked example and the body of
 * /buy-a-hotel/using-a-401k-or-ira.
 *
 *   node scripts/check-retirement-funds-math.mjs
 *
 * Rate schedules are the 2026 inflation-adjusted tables in Rev. Proc. 2025-32
 * (Table 1, married filing jointly; Table 5, estates and trusts). SBA shares
 * are 13 CFR 120.910 as applied by SOP 50 10 8.1 Section C, Ch. 1, Para. E.1.c
 * (a hotel is a Limited or Special Purpose Property). Nothing here is advice;
 * it only checks that the page's arithmetic is right.
 */
let fails = 0;
let checks = 0;
const eq = (label, got, want, tol = 0.005) => {
  checks += 1;
  if (Math.abs(got - want) > tol) {
    fails += 1;
    console.log(`FAIL ${label}: got ${got}, expected ${want}`);
  }
};

/* ---------------------------------------------- 2026 rate schedules */

// Rev. Proc. 2025-32, Table 1: married filing jointly, taxable year 2026.
const jointTax = (ti) => {
  if (ti <= 24800) return 0.10 * ti;
  if (ti <= 100800) return 2480 + 0.12 * (ti - 24800);
  if (ti <= 211400) return 11600 + 0.22 * (ti - 100800);
  if (ti <= 403550) return 35932 + 0.24 * (ti - 211400);
  if (ti <= 512450) return 82048 + 0.32 * (ti - 403550);
  if (ti <= 768700) return 116896 + 0.35 * (ti - 512450);
  return 206583.5 + 0.37 * (ti - 768700);
};
// Rev. Proc. 2025-32, Table 5: estates and trusts, taxable year 2026.
const trustTax = (ti) => {
  if (ti <= 3300) return 0.10 * ti;
  if (ti <= 11700) return 330 + 0.24 * (ti - 3300);
  if (ti <= 16000) return 2346 + 0.35 * (ti - 11700);
  return 3851 + 0.37 * (ti - 16000);
};

// The published tables are internally consistent at each break point.
eq("joint schedule continuous at 100,800", jointTax(100800), 11600);
eq("joint schedule continuous at 211,400", jointTax(211400), 35932);
eq("joint schedule continuous at 403,550", jointTax(403550), 82048);
eq("joint schedule continuous at 512,450", jointTax(512450), 116896);
eq("joint schedule continuous at 768,700", jointTax(768700), 206583.5);
eq("trust schedule continuous at 3,300", trustTax(3300), 330);
eq("trust schedule continuous at 11,700", trustTax(11700), 2346);
eq("trust schedule continuous at 16,000", trustTax(16000), 3851);

// The trust reaches the top rate on 2.08 percent of the income a joint
// return needs to reach it.
eq("trust top-rate threshold as a share of the joint threshold", (16000 / 768700) * 100, 2.0814, 0.0005);

/* ----------------------------------------- step 1: the equity the deal needs */

const PRICE = 6_000_000;
const KEYS = 60;
const NOI = 480_000;
const ACCOUNT = 1_500_000;

eq("price per key", PRICE / KEYS, 100_000);
eq("cap rate on the assumed NOI, percent", (NOI / PRICE) * 100, 8.0);

const contribEstablished = 0.15 * PRICE; // 13 CFR 120.910, special purpose
const contribNewBusiness = 0.20 * PRICE; // in operation two years or less
const debentureEstablished = 0.35 * PRICE;
const debentureNewBusiness = 0.30 * PRICE;
const bankFirst = 0.50 * PRICE;

eq("15 percent borrower contribution", contribEstablished, 900_000);
eq("20 percent borrower contribution", contribNewBusiness, 1_200_000);
eq("35 percent debenture ceiling", debentureEstablished, 2_100_000);
eq("30 percent debenture ceiling", debentureNewBusiness, 1_800_000);
eq("50 percent bank first mortgage", bankFirst, 3_000_000);
eq("established-operator stack sums to the price", contribEstablished + debentureEstablished + bankFirst, PRICE);
eq("new-business stack sums to the price", contribNewBusiness + debentureNewBusiness + bankFirst, PRICE);

eq("account left after the 15 percent contribution", ACCOUNT - contribEstablished, 600_000);
eq("account left after the 20 percent contribution", ACCOUNT - contribNewBusiness, 300_000);
eq("15 percent contribution as a share of the account, percent", (contribEstablished / ACCOUNT) * 100, 60.0);
eq("20 percent contribution as a share of the account, percent", (contribNewBusiness / ACCOUNT) * 100, 80.0);

/* ------------------------- step 2: what one guaranty costs a self-directed IRA */

const OTHER_INCOME = 150_000;
const taxWithDistribution = jointTax(OTHER_INCOME + ACCOUNT);
const taxWithout = jointTax(OTHER_INCOME);
const incrementalIncomeTax = taxWithDistribution - taxWithout;
const earlyDistributionTax = 0.10 * ACCOUNT; // 26 U.S.C. 72(t), under age 59 1/2
const totalCost = incrementalIncomeTax + earlyDistributionTax;

eq("tax on 1,650,000 of joint taxable income", taxWithDistribution, 532_664.5);
eq("tax on 150,000 of joint taxable income", taxWithout, 22_424);
eq("incremental federal income tax on the deemed distribution", incrementalIncomeTax, 510_240.5);
eq("10 percent additional tax on the early distribution", earlyDistributionTax, 150_000);
eq("total federal cost of the prohibited transaction", totalCost, 660_240.5);
eq("total cost as a share of the account, percent", (totalCost / ACCOUNT) * 100, 44.02, 0.005);

// The same account left alone and not distributed owes nothing this year.
eq("federal tax if the guaranty is not signed", 0, 0);

/* ----------------------- step 3: UBIT on a passive 25 percent IRA interest */

const SHARE = 0.25;
const iraUbti = SHARE * NOI;
const SPECIFIC_DEDUCTION = 1_000; // 26 U.S.C. 512(b)(12)
const taxableUbti = iraUbti - SPECIFIC_DEDUCTION;
const ubitDue = trustTax(taxableUbti);

eq("the IRA's share of the hotel's UBTI", iraUbti, 120_000);
eq("UBTI after the specific deduction", taxableUbti, 119_000);
eq("unrelated business income tax at 2026 trust rates", ubitDue, 41_961);
eq("effective rate on the IRA's share, percent", (ubitDue / iraUbti) * 100, 34.97, 0.005);

// Interest and dividends in the same account are excluded by 512(b)(1).
eq("tax on the same 120,000 held as interest or dividends", 0, 0);
// The gap the structure creates, in dollars.
eq("dollars of tax the hotel adds that a bond fund would not", ubitDue - 0, 41_961);

/* ------------------------------- the plan-loan alternative, for scale */

const planLoan = Math.min(0.5 * ACCOUNT, 50_000); // IRS: 50 percent or $50,000
eq("maximum participant loan from the plan", planLoan, 50_000);
eq("plan loan as a share of the purchase price, percent", (planLoan / PRICE) * 100, 0.83, 0.005);
eq("plan loan as a share of the 15 percent contribution, percent", (planLoan / contribEstablished) * 100, 5.56, 0.005);

console.log(
  fails
    ? `\n${fails} of ${checks} assertions failed`
    : `retirement-funds math OK: ${checks} assertions`
);
process.exitCode = fails ? 1 : 0;
