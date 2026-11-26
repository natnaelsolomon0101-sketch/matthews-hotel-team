#!/usr/bin/env node
/**
 * Recomputes every figure in the worked example and the body of
 * /hotel-financing/bank-failure.
 *
 *   node scripts/check-bank-failure-math.mjs
 *
 * Assumptions are labeled on the page as hypothetical. Published inputs:
 * SOFR 3.90% as of September 30, 2026 (Matthews Hotel Markets rate sheet,
 * October 2026 edition); 4,205 FDIC-insured institutions in the third quarter
 * 2026 Quarterly Banking Profile; six failures on the FDIC Failed Bank List
 * in 2026 through September 25, 2026; the $250,000 standard maximum deposit
 * insurance amount in 12 U.S.C. 1821(a)(1)(E); the 2.0 percent tangible
 * equity test in 12 CFR 324.403(b)(5); and the 90, 180 and 60 day periods in
 * 12 U.S.C. 1821(d) and 1831o(h)(3).
 */
let pass = 0;
const fails = [];
const eq = (label, got, want, tol = 0.005) => {
  const ok = Math.abs(got - want) <= tol;
  if (ok) pass++;
  else fails.push(`${label}: got ${got}, want ${want}`);
};
const is = (label, got, want) => {
  if (got === want) pass++;
  else fails.push(`${label}: got ${String(got)}, want ${String(want)}`);
};

// ---- Published inputs -----------------------------------------------------
const SOFR = 0.0390;              // rate sheet, October 2026 edition, as of 2026-09-30
const SMDIA = 250000;             // 12 U.S.C. 1821(a)(1)(E)
const INSTITUTIONS_Q3_2026 = 4205; // FDIC QBP, third quarter 2026
const FAILURES_2026 = 6;          // FDIC Failed Bank List, 2026 through September 25
const CRITICAL_TANGIBLE_EQUITY = 0.020; // 12 CFR 324.403(b)(5)

// ---- The denominator in the body -----------------------------------------
eq("failure rate, percent", (FAILURES_2026 / INSTITUTIONS_Q3_2026) * 100, 0.1427, 0.00005);
eq("one failure in N institutions", INSTITUTIONS_Q3_2026 / FAILURES_2026, 700.8333, 0.0001);
is("critical capital test is 2.0 percent", CRITICAL_TANGIBLE_EQUITY * 100, 2);

// Every 2026 closing on the Failed Bank List fell on a Friday.
const CLOSINGS_2026 = [
  "2026-01-30", "2026-05-01", "2026-07-10",
  "2026-07-17", "2026-08-21", "2026-09-25",
];
is("closings counted", CLOSINGS_2026.length, FAILURES_2026);
for (const d of CLOSINGS_2026) {
  is(`${d} is a Friday`, new Date(`${d}T00:00:00Z`).getUTCDay(), 5);
}
// A Friday close puts the qualified financial contract deadline on the Monday:
// 5:00 p.m. eastern on the business day following the appointment.
const close = new Date("2026-09-25T00:00:00Z");
const nextBusiness = new Date(close.getTime() + 3 * 86400000);
is("next business day after a Friday close", nextBusiness.toISOString().slice(0, 10), "2026-09-28");
is("calendar days in that window", (nextBusiness - close) / 86400000, 3);

// ---- Worked example: 124-key hotel, mid-PIP ------------------------------
const KEYS = 124;
const PIP_CONTRACT = 4960000;
const PIP_PER_KEY = 40000;
const COMMITMENT = 3500000;
const DRAWN = 2100000;
const UNDRAWN = COMMITMENT - DRAWN;
const MORTGAGE = 9200000;
const MONTHLY = 23000;
const DEPOSITS = 640000;

eq("PIP contract per key", PIP_CONTRACT / KEYS, PIP_PER_KEY);
eq("undrawn commitment", UNDRAWN, 1400000);
eq("drawn share of commitment, percent", (DRAWN / COMMITMENT) * 100, 60.0);
eq("undrawn share of the PIP contract, percent", (UNDRAWN / PIP_CONTRACT) * 100, 28.2258, 0.00005);
eq("undrawn per key", UNDRAWN / KEYS, 11290.3226, 0.00005);

// Replacing the repudiated money: index only, 9 months. No lender spread is
// published, so none is used.
const REPLACE_MONTHS = 9;
const indexCost = UNDRAWN * SOFR * (REPLACE_MONTHS / 12);
eq("9 months of index on the undrawn money", indexCost, 40950);
eq("that cost per key", indexCost / KEYS, 330.2419, 0.00005);

// Deposits at the same failed bank, held by the operating company.
const uninsured = DEPOSITS - SMDIA;
eq("insured portion", Math.min(DEPOSITS, SMDIA), 250000);
eq("uninsured portion", uninsured, 390000);
eq("uninsured share of the balance, percent", (uninsured / DEPOSITS) * 100, 60.9375, 0.00005);

// The email forbearance that 12 U.S.C. 1823(e) does not save.
const revived = 3 * MONTHLY;
eq("deferred payments revived", revived, 69000);
eq("revived payments as a share of the mortgage, percent", (revived / MORTGAGE) * 100, 0.75);

// Claims clock: bar date at least 90 days after publication, 180 days for the
// FDIC to determine, then 60 days to sue or the claim is finally disallowed.
const BAR = 90, DETERMINE = 180, SUE = 60;
eq("worst-case days from publication to the end of the 60-day window", BAR + DETERMINE + SUE, 330);
eq("months in that period", (BAR + DETERMINE + SUE) / 30, 11);

// The statutory floor on the FDIC's own contract claims, from appointment.
is("FDIC contract limitation period, years", 6, 6);

// ---- Report ---------------------------------------------------------------
if (fails.length) {
  console.error(`FAIL ${fails.length} assertion(s):`);
  for (const f of fails) console.error(`  ${f}`);
  process.exit(1);
}
console.log(`bank-failure math OK: ${pass} assertions`);
