/**
 * Recomputes every number in the worked example and the body arithmetic on
 * /sell-a-hotel/selling-to-a-foreign-buyer.
 *
 * Inputs are either hypothetical assumptions (labelled on the page as such) or
 * figures read from a cited source this run:
 *   - 31 CFR 802.1101 filing fee bands
 *   - CFIUS Annual Report to Congress CY 2025, Tables I-4 and I-6 and the
 *     declaration and notice counts
 *   - 50 U.S.C. 4565(b): 45-day review, 45-day investigation, one 15-day
 *     extension, 15 days for the President to announce
 *   - Prime rate of 7.00% as of September 30, 2026 on /rates
 *
 * Run: node scripts/check-foreign-buyer-math.mjs
 */
const r2 = (n) => Math.round(n * 100) / 100;
const fail = [];
const check = (label, got, want, tol = 0.51) => {
  const ok = Math.abs(got - want) <= tol;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: got ${got}, page says ${want}`);
  if (!ok) fail.push(label);
};

// ---- hypothetical hotel
const PRICE = 24_000_000;
const KEYS = 118;
check("price per key", Math.round(PRICE / KEYS), 203_390, 1);

// ---- 31 CFR 802.1101 fee band for a $24.0m transaction
const feeFor = (v) =>
  v < 500_000 ? 0
  : v < 5_000_000 ? 750
  : v < 50_000_000 ? 7_500
  : v < 250_000_000 ? 75_000
  : v < 750_000_000 ? 150_000
  : 300_000;
check("notice filing fee", feeFor(PRICE), 7_500, 0);
check("fee as percent of price", r2((feeFor(PRICE) / PRICE) * 100), 0.03, 0.005);

// ---- declaration route, CY 2025 averages (Annual Report, p. 11 and Table I-4)
const DAYS_TO_ACCEPT_DECL = 6.87;
const DECL_ASSESS_AVG = 30.1;
const declRoute = r2(DAYS_TO_ACCEPT_DECL + DECL_ASSESS_AVG);
check("declaration route, days", declRoute, 36.97, 0.005);

// ---- notice route, CY 2025 averages (Table I-6)
const REVIEW_AVG = 45.4;
const INVESTIGATION_AVG = 82.8;
check("notice route closing in review, days", REVIEW_AVG, 45.4, 0.005);
const gap = r2(INVESTIGATION_AVG - declRoute);
check("extra days, investigation vs declaration", gap, 45.83, 0.005);

// ---- cost of that delay at the Prime rate on the October 2026 rate sheet
const PRIME = 0.07;
const carry = Math.round((PRICE * PRIME * gap) / 365);
check("carry cost of the 45.83-day gap", carry, 210_944, 1);

// ---- statutory ceiling, 50 U.S.C. 4565(b)(1)(C), (b)(2)(C), (d)(2)
const ceiling = 45 + 45 + 15;
check("statutory ceiling before the President's window", ceiling, 105, 0);
check("ceiling including the President's 15 days", ceiling + 15, 120, 0);

// ---- how rare a real estate filing is, CY 2025
const RE_DECLARATIONS = 7;
const RE_NOTICES = 7;
const ALL_FILINGS = 347;
check("real estate filings in 2025", RE_DECLARATIONS + RE_NOTICES, 14, 0);
check(
  "real estate share of all 2025 filings, percent",
  r2(((RE_DECLARATIONS + RE_NOTICES) / ALL_FILINGS) * 100),
  4.03,
  0.005,
);

// ---- investigation rate on 2025 notices (p. 14)
check("share of 2025 notices investigated, percent", r2((114 / 207) * 100), 55.07, 0.005);

// ---- 802.203 close proximity and 802.217 extended range, as a radius
check("close proximity plus extended range, miles", 1 + 99, 100, 0);

console.log(fail.length ? `\nFAILED: ${fail.join("; ")}` : "\nall figures reconciled");
process.exit(fail.length ? 1 : 0);
