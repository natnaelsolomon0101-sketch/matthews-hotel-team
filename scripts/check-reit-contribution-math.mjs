/**
 * Recomputes every figure in the worked example and the answer block of
 * /sell-a-hotel/contribute-hotel-to-a-reit, and asserts that each one appears
 * in the page module exactly as computed.
 *
 * The arithmetic follows, in order: 26 CFR 1.752-1(f) (net the liability
 * increase against the decrease), 26 U.S.C. 722 (basis of the interest is the
 * adjusted basis of the contributed property) and 26 U.S.C. 731(a)(1) (gain to
 * the extent money distributed exceeds that basis).
 *
 *   node scripts/check-reit-contribution-math.mjs
 */
import { readFileSync } from "node:fs";

const SRC = "src/lib/data/answers/sell-a-hotel/contribute-hotel-to-a-reit.ts";
const text = readFileSync(SRC, "utf8");

let pass = 0;
const fail = [];

function assert(label, actual, expected) {
  const ok = actual === expected;
  if (ok) pass++;
  else fail.push(`${label}: computed ${expected}, got ${actual}`);
}

/** Asserts a computed value is printed in the page, formatted as the page formats it. */
function printed(label, value, formatted) {
  const ok = text.includes(formatted);
  if (ok) pass++;
  else fail.push(`${label}: ${formatted} (from ${value}) not found in ${SRC}`);
}

const usd = (n) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

/* ------------------------------------------------- the hypothetical's inputs */

const VALUE = 18_000_000;      // fair market value of the hotel
const MORTGAGE = 7_500_000;    // mortgage the partnership takes on
const BASIS = 4_200_000;       // owner's adjusted basis after 22 years
const SHARE_AFTER = 150_000;   // owner's share of partnership liabilities after
const UNIT_VALUE = 17.5;       // value per operating partnership unit

for (const [label, v] of Object.entries({ VALUE, MORTGAGE, BASIS, SHARE_AFTER })) {
  printed(`input ${label}`, v, usd(v));
}
printed("input UNIT_VALUE", UNIT_VALUE, "$17.50");

/* --------------------------------------------------- step 0: units issued */

const equity = VALUE - MORTGAGE;
assert("equity arithmetic", equity, 10_500_000);
printed("equity", equity, usd(equity));

const units = equity / UNIT_VALUE;
assert("units arithmetic", units, 600_000);
assert("units are whole", Number.isInteger(units), true);
printed("units", units, "600,000 units");

/* ------------------------ step 1: the liability shift, 26 CFR 1.752-1(f) */

const netDecrease = MORTGAGE - SHARE_AFTER;
assert("net decrease arithmetic", netDecrease, 7_350_000);
printed("net decrease", netDecrease, usd(netDecrease));

/* ------------------------------- step 2: basis of the interest, sec. 722 */

const unitBasis = BASIS;
assert("section 722 basis is carryover, not value", unitBasis === VALUE, false);
assert("section 722 basis", unitBasis, 4_200_000);

/* -------------------------------- step 3: recognized gain, sec. 731(a)(1) */

const gain = Math.max(0, netDecrease - unitBasis);
assert("gain arithmetic", gain, 3_150_000);
printed("recognized gain", gain, usd(gain));

// Basis is reduced by the distribution but not below zero (sec. 733), so the
// whole excess is gain and nothing is left in basis.
const basisAfter = Math.max(0, unitBasis - netDecrease);
assert("basis after the deemed distribution", basisAfter, 0);

const gainShareOfEquity = (gain / equity) * 100;
assert("gain as a share of equity", Number(gainShareOfEquity.toFixed(1)), 30.0);
printed("gain share of equity", gainShareOfEquity, "30.0 percent");

/* ------------------------------- step 4: what a taxable sale would produce */

const saleGain = VALUE - BASIS;
assert("sale gain arithmetic", saleGain, 13_800_000);
printed("sale gain", saleGain, usd(saleGain));

const deferred = saleGain - gain;
assert("deferred arithmetic", deferred, 10_650_000);
assert("deferred plus recognized equals total", deferred + gain, saleGain);
printed("deferred", deferred, usd(deferred));

const deferredPct = (deferred / saleGain) * 100;
assert("deferred share", Number(deferredPct.toFixed(1)), 77.2);
printed("deferred share", deferredPct, "77.2 percent");

/* --------------------- step 5: the liability share that zeroes out the gain */

const shareNeeded = MORTGAGE - BASIS;
assert("share needed arithmetic", shareNeeded, 3_300_000);
printed("share needed", shareNeeded, usd(shareNeeded));

// At exactly that share the net decrease equals basis and the gain is zero.
const netAtThreshold = MORTGAGE - shareNeeded;
assert("net decrease at the threshold equals basis", netAtThreshold, BASIS);
assert("gain at the threshold", Math.max(0, netAtThreshold - BASIS), 0);
printed("net decrease at threshold", netAtThreshold, usd(netAtThreshold));

// And one dollar less of allocated debt puts a dollar of gain back.
assert("one dollar below the threshold", Math.max(0, MORTGAGE - (shareNeeded - 1) - BASIS), 1);

/* -------------------------------------- the answer block's Host 10-K facts */

const HOST_UNITS_TOTAL = 682_283_862;      // common units outstanding, 2026-02-20
const HOST_UNITS_HOST_INC = 672_851_030;   // of which Host Inc. owned
const thirdParty = HOST_UNITS_TOTAL - HOST_UNITS_HOST_INC;
assert("third-party units arithmetic", thirdParty, 9_432_832);
// Host rounds this to 9.4 million in its own text; check the page's rounding.
assert("third-party units round to 9.4 million", Number((thirdParty / 1e6).toFixed(1)), 9.4);
printed("third-party units", thirdParty, "9.4 million units");

const hostIncPct = (HOST_UNITS_HOST_INC / HOST_UNITS_TOTAL) * 100;
assert("Host Inc. share rounds to 99 percent", Math.round(hostIncPct), 99);
printed("Host Inc. share", hostIncPct, "99 percent");

// 9.4 million units convert at 1.021494 to the 9.6 million shares Host reports.
const CONVERSION = 1.021494;
const shares = (thirdParty * CONVERSION) / 1e6;
assert("converted shares round to 9.6 million", Number(shares.toFixed(1)), 9.6);
printed("conversion factor", CONVERSION, "1.021494");
printed("converted shares", shares, "9.6 million common shares");

/* -------------------------------------------- statutory thresholds printed */

printed("section 856(d)(3) ownership cap", 35, "35 percent");
printed("section 856(d)(2)(B) ownership test", 10, "10 percent");
printed("disguised sale window", 2, "two years");
printed("sections 704(c)(1)(B) and 737 window", 7, "seven years");

/* ------------------------------------------------------------------ report */

console.log(`check-reit-contribution-math: ${pass} assertions passed`);
if (fail.length) {
  console.error(`\n${fail.length} FAILED:`);
  for (const f of fail) console.error(`  - ${f}`);
  process.exit(1);
}
