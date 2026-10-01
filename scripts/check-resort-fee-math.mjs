/**
 * Recomputes every figure in the worked example for
 * /hotel-industry/resort-fees before the page is saved.
 *
 * Sourced inputs (read 2026-10-01):
 *   - "total price" must be the maximum total of all fees a consumer must pay
 *     including any mandatory ancillary good or service, excluding government
 *     charges: 16 CFR 464.1 (eCFR, title 16).
 *   - $53,088 maximum civil penalty per violation under 15 U.S.C. 45(m)(1)(A):
 *     16 CFR 1.98(d); confirmed unchanged for 2026 by 91 FR 58446 (Sept 15, 2026).
 *   - each day of a continuing failure to comply with a rule is a separate
 *     violation: 15 U.S.C. 45(m)(1)(C).
 *   - $10,000 maximum civil penalty per violation: Cal. Bus. & Prof. Code
 *     17568.6(e)(1).
 *
 * Hypothetical inputs (assumptions, not published figures): the 140 keys, the
 * $249 room rate, the $35 fee, the 70 percent occupancy, the 15 percent
 * occupancy tax, and the 30-day exposure window.
 */
const KEYS = 140;
const ROOM_RATE = 249;
const RESORT_FEE = 35;
const OCC = 0.70;
const NIGHTS = 365;
const TAX_RATE = 0.15;
const DAYS_EXPOSED = 30;
const FED_PENALTY = 53088;   // 16 CFR 1.98(d)
const CA_PENALTY = 10000;    // Cal. Bus. & Prof. Code 17568.6(e)(1)

const fail = [];
const eq = (label, got, want) => {
  const ok = Math.abs(got - want) < 1e-6;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
  if (!ok) fail.push(label);
};

console.log("--- the nightly total price, 16 CFR 464.1 and 464.2");
const totalPrice = ROOM_RATE + RESORT_FEE;
eq("federal total price (room rate + mandatory fee)", totalPrice, 284);

const tax = +(totalPrice * TAX_RATE).toFixed(2);
eq("assumed occupancy tax at 15% of the total price", tax, 42.60);

const finalAmount = +(totalPrice + tax).toFixed(2);
eq("final amount of payment, 464.2(c)(2)", finalAmount, 326.60);

const feeShare = +((RESORT_FEE / totalPrice) * 100).toFixed(1);
eq("mandatory fee as a percent of the total price", feeShare, 12.3);

console.log("--- annual mandatory fee revenue");
const occupiedNights = KEYS * OCC * NIGHTS;
eq("occupied room nights per year (140 keys x 70% x 365)", occupiedNights, 35770);

const feeRevenue = occupiedNights * RESORT_FEE;
eq("annual mandatory fee revenue at $35 per occupied night", feeRevenue, 1251950);

console.log("--- maximum penalty exposure, 30 days of a continuing violation");
const fedMax = DAYS_EXPOSED * FED_PENALTY;
eq("30 separate violations at $53,088 each, 45(m)(1)(C)", fedMax, 1592640);

const gap = fedMax - feeRevenue;
eq("federal ceiling less a full year of fee revenue", gap, 340690);
console.log(`     (the 30-day ceiling exceeds a full year of the fee revenue)`);
eq("ceiling exceeds a year of fee revenue", fedMax > feeRevenue ? 1 : 0, 1);

eq("California ceiling per violation, 17568.6(e)(1)", CA_PENALTY, 10000);

console.log(fail.length ? `\n${fail.length} FAILED` : "\nall resort-fee figures check out");
process.exitCode = fail.length ? 1 : 0;
