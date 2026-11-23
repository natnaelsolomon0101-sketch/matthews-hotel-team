#!/usr/bin/env node
/**
 * Recomputes every figure in the worked example and every published amount on
 * /sell-a-hotel/covid-eidl-when-you-sell.
 *
 *   node scripts/check-eidl-math.mjs
 *
 * Sources for the inputs (read 2026-11-23):
 *   - SBA, About COVID-19 EIDL: $2,000,000 maximum, 30-year term, 3.75% fixed
 *     for businesses, collateral above $25,000, personal guaranty above
 *     $200,000, no prepayment penalty, approvals above $500,000 from
 *     October 8, 2021.
 *   - SBA, Manage your EIDL (last updated July 17, 2026): the monthly
 *     obligation begins 30 months from the disbursement date, interest accrues
 *     through the deferment, and an unpaid deferment balance becomes a balloon.
 *   - Matthews Hotel Markets rate sheet, October 2026 edition: SBA 7(a)
 *     variable ceiling 10.00%, 25-year 504 debenture 6.54%.
 *
 * The installment, the deferment accrual and the amortization are arithmetic
 * from those published terms, not figures SBA publishes per loan. Exits
 * non-zero on the first mismatch.
 */
let checks = 0;
let failures = 0;
const r2 = (x) => Math.round(x * 100) / 100;
const eq = (label, got, want, tol = 0.005) => {
  checks++;
  if (Math.abs(got - want) > tol) {
    failures++;
    console.log(`FAIL ${label}: got ${got}, expected ${want}`);
  }
};

/* ---------------------------------------------------- published loan terms */
const PRINCIPAL = 2_000_000;      // program maximum
const RATE = 0.0375;              // businesses, fixed
const TERM_MONTHS = 360;          // 30 years
const DEFERMENT_MONTHS = 30;      // payments begin 30 months from disbursement
const GUARANTY_THRESHOLD = 200_000;
const COLLATERAL_THRESHOLD = 25_000;
eq("term in years", TERM_MONTHS / 12, 30);
eq("deferment in years", DEFERMENT_MONTHS / 12, 2.5);
eq("guaranty threshold", GUARANTY_THRESHOLD, 200_000);
eq("collateral threshold", COLLATERAL_THRESHOLD, 25_000);

/* ------------------------------------------- deferment interest, 30 months */
const deferralInterest = PRINCIPAL * RATE * (DEFERMENT_MONTHS / 12);
eq("deferment interest", r2(deferralInterest), 187_500);

/* ------------------------------- level monthly payment, 3.75% over 30 years */
const i = RATE / 12;
const exactPayment = (PRINCIPAL * i) / (1 - Math.pow(1 + i, -TERM_MONTHS));
eq("monthly payment, unrounded", r2(exactPayment), 9_262.31);
// Every cash figure below uses the installment as a note would state it, to
// the cent, so the page's arithmetic adds up the way a payment history does.
const payment = 9_262.31;

/* ------------------------- 30 payments, June 1 2024 through November 1 2026 */
const PAID = 30;
const balance = PRINCIPAL * Math.pow(1 + i, PAID) - payment * ((Math.pow(1 + i, PAID) - 1) / i);
eq("balance after 30 payments", r2(balance), 1_905_413.85);
const paidTotal = payment * PAID;
eq("cash paid in 30 payments", r2(paidTotal), 277_869.30);
const principalPaid = PRINCIPAL - balance;
eq("principal retired", r2(principalPaid), 94_586.15);
const interestPaid = paidTotal - principalPaid;
eq("interest paid", r2(interestPaid), 183_283.15);
eq("principal share of payments, percent", Math.round((principalPaid / paidTotal) * 1000) / 10, 34.0);

/* -------------------------------------------------------- the payoff today */
const payoff = balance + deferralInterest;
eq("payoff", r2(payoff), 2_092_913.85);
eq("payoff above original principal", r2(payoff - PRINCIPAL), 92_913.85);

/* ----------------------------------------------------------- the closing */
const KEYS = 112;
const PER_KEY = 100_000;
const price = KEYS * PER_KEY;
eq("price", price, 11_200_000);
const mortgage = 6_400_000;
const costRate = 0.045;
const costs = price * costRate;
eq("brokerage and closing costs", r2(costs), 504_000);
const beforeSba = price - mortgage - costs;
eq("equity before SBA", r2(beforeSba), 4_296_000);
const afterSba = beforeSba - payoff;
eq("net after the EIDL payoff", r2(afterSba), 2_203_086.15);
eq("EIDL share of equity, percent", Math.round((payoff / beforeSba) * 1000) / 10, 48.7);

/* ------------------------------------- carry cost against the rate sheet */
const RATE_504 = 0.0654;   // 25-year SBA 504 debenture, October 2026 edition
const RATE_7A_CEILING = 0.10; // SBA 7(a) variable ceiling over $350,000
eq("annual interest at 3.75 percent", r2(payoff * RATE), 78_484.27);
eq("annual interest at the 504 debenture", r2(payoff * RATE_504), 136_876.57);
eq("annual interest at the 7(a) ceiling", r2(payoff * RATE_7A_CEILING), 209_291.38);
eq("504 premium over the EIDL rate", r2(payoff * (RATE_504 - RATE)), 58_392.30);
eq("7(a) ceiling premium over the EIDL rate", r2(payoff * (RATE_7A_CEILING - RATE)), 130_807.12);
eq("7(a) ceiling spread in points", r2((RATE_7A_CEILING - RATE) * 100), 6.25);

/* ---------------------------------- SBA program totals, April 28 2022 report */
const EIDLS_APPROVED = 3_923_374;
const DOLLARS_APPROVED = 378_410_624_804;
eq("EIDLs approved", EIDLS_APPROVED, 3_923_374);
eq("dollars approved", DOLLARS_APPROVED, 378_410_624_804);
eq("average approved loan", Math.round(DOLLARS_APPROVED / EIDLS_APPROVED), 96_450);

console.log(
  failures
    ? `\n${failures} of ${checks} checks FAILED`
    : `check-eidl-math: ${checks}/${checks} assertions pass`,
);
process.exitCode = failures ? 1 : 0;
