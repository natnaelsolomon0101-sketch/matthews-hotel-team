#!/usr/bin/env node
/**
 * Recomputes every number in the worked example and the body arithmetic on
 * /hotel-financing/prepayment-penalties. Run before saving the page.
 *
 *   node scripts/check-prepayment-math.mjs
 *
 * The rules applied below are primary and were read in the run that wrote the
 * page (2026-10-12):
 *   - 13 CFR 120.223: the SBA 7(a) subsidy recoupment fee, its three
 *     conditions and the 5 / 3 / 1 percent schedule on the prepaid amount.
 *   - SBA Form 1504 (4-18), the Development Company 504 Debenture, which sets
 *     the repurchase premium as RP = D x (I x P) with the year factors P.
 *   - 26 CFR 1.860G-2(a)(8)(ii): defeasance with government securities.
 *   - BANK 2026-BNK52 prospectus (424B2, June 16, 2026) for the L / D / O
 *     prepayment codes and for the yield maintenance discount rate, which is
 *     the interpolated Treasury constant maturity from Federal Reserve
 *     statistical release H.15.
 *   - Federal Reserve H.15, release date October 9, 2026: Treasury constant
 *     maturities for October 8, 2026, 5-year 4.99% and 7-year 5.11%.
 *
 * The hotel and both loans are hypothetical. Their inputs are assumptions.
 */
const money = (n) => "$" + Math.round(n).toLocaleString("en-US");
const pct1 = (n) => n.toFixed(1) + "%";
let fail = 0;
const eq = (label, got, want) => {
  const ok = got === want;
  if (!ok) fail++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
};

/* ============================ A. SBA 7(a) subsidy recoupment fee ========= */
/* 13 CFR 120.223: fee applies only when maturity >= 15 years AND the
   prepayment falls in one of the first three 12-month periods after first
   disbursement AND it exceeds 25 percent of the highest outstanding principal
   balance of the loan in that period. The charge is 5 / 3 / 1 percent of the
   total prepayments made in that period. */
const a = {
  maturityYears: 25,
  originalPrincipal: 4_800_000,
  highestBalanceYear2: 4_690_000,
  payoffAmount: 4_655_000,
  periodIndex: 2, // second 12-month period after first disbursement
};
const SRF_RATES = { 1: 0.05, 2: 0.03, 3: 0.01 };
const srfApplies =
  a.maturityYears >= 15 &&
  a.periodIndex >= 1 &&
  a.periodIndex <= 3 &&
  a.payoffAmount > 0.25 * a.highestBalanceYear2;
eq("A1 maturity meets the 15-year test", a.maturityYears >= 15, true);
eq("A2 25 percent threshold in year 2", money(0.25 * a.highestBalanceYear2), "$1,172,500");
eq("A3 payoff clears the threshold", srfApplies, true);
const srfFee = SRF_RATES[a.periodIndex] * a.payoffAmount;
eq("A4 fee rate in the second period", SRF_RATES[a.periodIndex] * 100 + "%", "3%");
eq("A5 subsidy recoupment fee", money(srfFee), "$139,650");
eq("A6 fee as a share of the payoff", pct1((srfFee / a.payoffAmount) * 100), "3.0%");
/* The counterfactual the page prints: a partial prepayment inside the 25
   percent line costs nothing at all. */
const partial = 1_000_000;
eq("A7 partial prepayment as a share of the highest balance",
  pct1((partial / a.highestBalanceYear2) * 100), "21.3%");
eq("A8 fee on that partial prepayment", money(partial <= 0.25 * a.highestBalanceYear2 ? 0 : SRF_RATES[2] * partial), "$0");
/* Fee in the first and third periods, on the same payoff. */
eq("A9 same payoff in the first period", money(SRF_RATES[1] * a.payoffAmount), "$232,750");
eq("A10 same payoff in the third period", money(SRF_RATES[3] * a.payoffAmount), "$46,550");

/* ============================ B. SBA 504 repurchase premium ============== */
/* SBA Form 1504: RP = D x (I x P). D is the remaining principal balance of
   the debenture, I the rate stated on its face in decimals, P the factor for
   the applicable year. For a 20- or 25-year debenture P runs 1.00, .90, .80,
   .70, .60, .50, .40, .30, .20, .10 and is zero from year 11. */
const P_20_25 = [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
const P_10 = [1.0, 0.8, 0.6, 0.4, 0.2, 0];
const b = { remainingBalance: 1_780_000, faceRate: 0.06, year: 2 };
const rp = (D, I, P) => D * (I * P);
eq("B1 factor P in year 2 of a 25-year debenture", P_20_25[1], 0.9);
eq("B2 repurchase premium in year 2", money(rp(b.remainingBalance, b.faceRate, P_20_25[1])), "$96,120");
eq("B3 same debenture repurchased in year 1", money(rp(b.remainingBalance, b.faceRate, P_20_25[0])), "$106,800");
eq("B4 same debenture repurchased in year 6", money(rp(b.remainingBalance, b.faceRate, P_20_25[5])), "$53,400");
eq("B5 same debenture repurchased in year 11", money(rp(b.remainingBalance, b.faceRate, P_20_25[10])), "$0");
eq("B6 year 2 premium as a share of the balance",
  pct1((rp(b.remainingBalance, b.faceRate, P_20_25[1]) / b.remainingBalance) * 100), "5.4%");
eq("B7 a 10-year debenture in year 2 uses factor .80", P_10[1], 0.8);

/* ============================ C. the two SBA fees together ============== */
const combined = srfFee + rp(b.remainingBalance, b.faceRate, P_20_25[1]);
eq("C1 7(a) fee plus 504 premium", money(combined), "$235,770");

/* ============================ D. CMBS defeasance ======================== */
/* A 120-month interest-only loan with the prepayment code L(27), D(86), O(7),
   the code BANK 2026-BNK52 carries on its select-service hotel loan. The
   borrower sells in month 42, which is inside the defeasance window, so the
   only route out is defeasance: a portfolio of government securities that
   pays every remaining scheduled payment. 26 CFR 1.860G-2(a)(8)(ii). */
const d = {
  balance: 12_400_000,
  couponAnnual: 0.0645,
  termMonths: 120,
  lockoutMonths: 27,
  defeasanceMonths: 86,
  openMonths: 7,
  payoffMonth: 42,
  keys: 118,
};
eq("D1 the code adds up to the loan term",
  d.lockoutMonths + d.defeasanceMonths + d.openMonths, d.termMonths);
eq("D2 month 42 is past lockout", d.payoffMonth > d.lockoutMonths, true);
eq("D3 month 42 is inside the defeasance window",
  d.payoffMonth <= d.lockoutMonths + d.defeasanceMonths, true);
eq("D4 first open month", d.lockoutMonths + d.defeasanceMonths + 1, 114);
eq("D5 months of waiting to reach the open period", 114 - d.payoffMonth, 72);

/* 30/360 interest-only payment. The page says so: a real loan on actual/360
   pays a few dollars more in a 31-day month. */
const monthlyPayment = (d.balance * d.couponAnnual) / 12;
eq("D6 monthly interest-only payment", money(monthlyPayment), "$66,650");
const remaining = d.termMonths - d.payoffMonth; // payments due months 43..120
eq("D7 remaining scheduled payments", remaining, 78);

/* Discount rate: linear interpolation of the Treasury constant maturities one
   longer and one shorter than the remaining term, per the prospectus. 78
   months is 6.5 years; H.15 for October 8, 2026 prints 4.99 at 5 years and
   5.11 at 7 years. */
const ust5 = 4.99, ust7 = 5.11, remainingYears = remaining / 12;
const discountAnnualPct = ust5 + ((remainingYears - 5) / (7 - 5)) * (ust7 - ust5);
eq("D8 remaining term in years", remainingYears, 6.5);
eq("D9 interpolated discount rate", discountAnnualPct.toFixed(2) + "%", "5.08%");

const pvAt = (annualPct) => {
  const r = annualPct / 100 / 12;
  let pv = 0;
  for (let m = 1; m <= remaining; m++) {
    const cash = monthlyPayment + (m === remaining ? d.balance : 0);
    pv += cash / Math.pow(1 + r, m);
  }
  return pv;
};
const deposit = pvAt(discountAnnualPct);
eq("D10 defeasance deposit at 5.08 percent", money(deposit), "$13,338,751");
const premium = deposit - d.balance;
eq("D11 cost above the loan balance", money(premium), "$938,751");
eq("D12 cost as a share of the balance", pct1((premium / d.balance) * 100), "7.6%");
eq("D13 cost per key", money(premium / d.keys), "$7,956");
/* Total cash to retire the loan, before the lender's and the consultant's
   costs, which no public source publishes. */
eq("D14 total cash at the release date", money(deposit), "$13,338,751");

/* Sensitivity: when Treasury yields sit above the coupon the portfolio costs
   less than the balance, and the premium disappears. */
const depositHigh = pvAt(7.0);
eq("D15 deposit if the discount rate were 7.00 percent", money(depositHigh), "$12,044,666");
eq("D16 that is below the loan balance", depositHigh < d.balance, true);
const depositAtCoupon = pvAt(6.45);
eq("D17 deposit if the discount rate equalled the 6.45 percent coupon",
  money(depositAtCoupon), "$12,400,000");

/* The sale the cost has to come out of. */
const sale = { price: 19_500_000, brokerageAndClosingPct: 0.03 };
const closingCosts = sale.price * sale.brokerageAndClosingPct;
eq("D18 brokerage and closing at 3.0 percent", money(closingCosts), "$585,000");
const netBeforeDefeasance = sale.price - closingCosts - d.balance;
eq("D19 net proceeds before the defeasance premium", money(netBeforeDefeasance), "$6,515,000");
const netAfter = netBeforeDefeasance - premium;
eq("D20 net proceeds after the defeasance premium", money(netAfter), "$5,576,249");
eq("D21 share of the seller's net proceeds the premium takes",
  pct1((premium / netBeforeDefeasance) * 100), "14.4%");

/* ============================ E. yield maintenance floor ================ */
/* The YM@ codes in the prospectus price a prepayment at the greater of a
   yield maintenance charge and a stated percentage of the prepaid amount. On
   this hypothetical balance a 1 percent floor is: */
eq("E1 a 1 percent floor on the same balance", money(0.01 * d.balance), "$124,000");
eq("E2 the floor binds when the yield maintenance charge is smaller",
  Math.max(0, depositHigh - d.balance) < 0.01 * d.balance, true);

console.log(fail === 0 ? "\nALL CHECKS PASS" : `\n${fail} CHECK(S) FAILED`);
process.exit(fail === 0 ? 0 : 1);
