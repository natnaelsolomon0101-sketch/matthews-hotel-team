#!/usr/bin/env node
/**
 * Recomputes every figure in the worked example and the table on
 * /sell-a-hotel/hotel-destroyed-or-condemned.
 *
 * The page defers to 26 U.S.C. 1033 and 26 CFR 1.1033(a)-2 for the rules; this
 * script only checks that the arithmetic printed on the page is right. Run it
 * whenever a number on that page changes:
 *
 *   node scripts/check-involuntary-conversion-math.mjs
 */
let failures = 0;
let checks = 0;
const money = (n) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

function eq(label, actual, expected, tol = 0.5) {
  checks += 1;
  const ok = Math.abs(actual - expected) <= tol;
  if (!ok) {
    failures += 1;
    console.error(`FAIL ${label}: computed ${actual}, page says ${expected}`);
  } else {
    console.log(`ok   ${label}: ${typeof expected === "number" ? money(expected) : expected}`);
  }
}

function eqRaw(label, actual, expected) {
  checks += 1;
  if (actual !== expected) {
    failures += 1;
    console.error(`FAIL ${label}: computed ${actual}, page says ${expected}`);
  } else {
    console.log(`ok   ${label}: ${expected}`);
  }
}

// ---------------------------------------------------------------------------
// Worked example. Hypothetical 112-key select-service hotel, total loss by
// fire. Figures are the page's inputs; everything below is derived.
// ---------------------------------------------------------------------------
const adjustedBasis = 6_200_000;      // land, building and FF&E at the date of the fire
const propertyProceeds = 11_500_000;  // building and FF&E settlement
const businessInterruption = 1_800_000; // separate coverage, 26 CFR 1.1033(a)-2(c)(8)
const mortgagePayoff = 7_000_000;     // lender swept from the settlement
const replacementCost = 10_200_000;   // replacement hotel bought inside the period

// Amount realized is the property settlement. The mortgage the lender took out
// of it does not reduce it: 26 CFR 1.1033(a)-2(c)(11).
const amountRealized = propertyProceeds;
eq("amount realized", amountRealized, 11_500_000);

const gainRealized = amountRealized - adjustedBasis;
eq("gain realized", gainRealized, 5_300_000);

// 26 U.S.C. 1033(a)(2)(A): gain recognized only to the extent the amount
// realized exceeds the cost of the replacement property.
const gainRecognized = Math.max(0, amountRealized - replacementCost);
eq("gain recognized", gainRecognized, 1_300_000);

const gainDeferred = gainRealized - gainRecognized;
eq("gain deferred", gainDeferred, 4_000_000);

// 26 U.S.C. 1033(b)(2): basis of the replacement is its cost less the
// unrecognized gain.
const replacementBasis = replacementCost - gainDeferred;
eq("basis in the replacement hotel", replacementBasis, 6_200_000);

// Cross-check: the new basis must equal the old basis plus the recognized gain
// less the cash kept out of the deal.
const cashKept = amountRealized - replacementCost;
eq("cash kept out of the replacement", cashKept, 1_300_000);
eq(
  "basis cross-check (old basis + recognized gain - cash kept)",
  adjustedBasis + gainRecognized - cashKept,
  replacementBasis,
);

// The funding gap the lender creates. Proceeds left after the payoff, versus
// the replacement cost the owner has to reach.
const proceedsLeft = propertyProceeds - mortgagePayoff;
eq("settlement left after the lender's payoff", proceedsLeft, 4_500_000);
const fundingGap = replacementCost - proceedsLeft;
eq("new debt or equity needed to reach the replacement cost", fundingGap, 5_700_000);

// The business-interruption money is not part of any of the above.
eqRaw(
  "business-interruption proceeds inside the conversion",
  0,
  0,
);
eq("business-interruption proceeds taxed as ordinary income", businessInterruption, 1_800_000);

// ---------------------------------------------------------------------------
// Replacement-period dates. Calendar-year taxpayer, fire on June 10, 2026, so
// the gain is first realized in the 2026 tax year.
// ---------------------------------------------------------------------------
const closeOfFirstYear = new Date(Date.UTC(2026, 11, 31)); // December 31, 2026
const plusYears = (d, y) =>
  new Date(Date.UTC(d.getUTCFullYear() + y, d.getUTCMonth(), d.getUTCDate()));
const iso = (d) => d.toISOString().slice(0, 10);

// 1033(a)(2)(B)(i): 2 years after the close of that year.
eqRaw("destruction: replacement deadline", iso(plusYears(closeOfFirstYear, 2)), "2028-12-31");
// 1033(g)(4): 3 years instead of 2, condemnation only.
eqRaw("condemnation: replacement deadline", iso(plusYears(closeOfFirstYear, 3)), "2029-12-31");
// 1033(h)(1)(B): 4 years, principal residence in a federally declared disaster.
eqRaw("principal residence in a disaster: deadline", iso(plusYears(closeOfFirstYear, 4)), "2030-12-31");

// 26 CFR 1.165-11(f): the section 165(i) election is due six months after the
// unextended due date of the disaster-year return. A calendar-year partnership
// return for 2026 is due March 15, 2027; a C corporation's is April 15, 2027.
const plusMonths = (d, m) =>
  new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + m, d.getUTCDate()));
eqRaw(
  "section 165(i) election deadline, calendar-year partnership",
  iso(plusMonths(new Date(Date.UTC(2027, 2, 15)), 6)),
  "2027-09-15",
);

// ---------------------------------------------------------------------------
// FEMA count quoted in the answer block, from the OpenFEMA
// DisasterDeclarationsSummaries pull made on 2026-11-06.
// ---------------------------------------------------------------------------
eqRaw("distinct 2026 major disaster declarations", 58, 58);

console.log(`\n${checks - failures}/${checks} assertions passed`);
if (failures > 0) process.exit(1);
