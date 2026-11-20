/**
 * Recomputes every figure in the worked example, the answer block and the
 * published-threshold prose of /hotel-financing/deduct-or-capitalize-a-renovation,
 * and asserts each one appears in the page module exactly as computed.
 *
 * The arithmetic follows, in order: 26 CFR 1.263(a)-3 (which line is tested
 * against which unit of property, and the routine maintenance safe harbor),
 * 26 CFR 1.168(i)-8(d)(2) (the partial disposition loss) with 1.263(a)-3(g)(2)(i)
 * (the removal cost that then need not be capitalized), 26 U.S.C. 179(e) (which
 * building systems are qualified real property) and 179(b)(1), (b)(2) and (b)(3)
 * (the dollar cap, the phaseout threshold and the taxable-income limit), with the
 * 2026 dollar amounts from Rev. Proc. 2025-32.
 *
 *   node scripts/check-renovation-capitalization-math.mjs
 */
import { readFileSync } from "node:fs";

const SRC =
  "src/lib/data/answers/hotel-financing/deduct-or-capitalize-a-renovation.ts";
const text = readFileSync(SRC, "utf8");

let pass = 0;
const fail = [];

function assert(label, actual, expected) {
  if (actual === expected) pass++;
  else fail.push(`${label}: computed ${expected}, got ${actual}`);
}

/** Asserts a computed value is printed in the page, formatted as the page formats it. */
function printed(label, value, formatted) {
  if (text.includes(formatted)) pass++;
  else fail.push(`${label}: page does not print "${formatted}" (value ${value})`);
}

const usd = (n) => `$${n.toLocaleString("en-US")}`;
const pct1 = (n) => `${n.toFixed(1)} percent`;

/* ------------------------------------------- the hypothetical PIP line items */

const KEYS = 118;
const LINES = {
  plumbing: 620_000, // guest-bath tubs, toilets, sinks: restoration of the plumbing system
  flooring: 410_000, // all public-area floors: restoration of the building structure
  hvac: 708_000, // PTAC units in every guest room: the HVAC system
  roof: 520_000, // full roof replacement, tear-off included
  security: 118_000, // locks and cameras: the security system
  fire: 84_000, // alarm panel and sprinkler heads: fire protection
  ffe: 1_034_000, // soft goods and case goods: section 1245 property
  routine: 46_000, // twice-yearly coil cleaning: routine maintenance safe harbor
};
const TEAR_OFF = 38_000; // the part of the roof line that is removal and disposal

const totalPip = Object.values(LINES).reduce((a, b) => a + b, 0);
assert("PIP total sums from its eight line items", 3_540_000, totalPip);
printed("PIP total", totalPip, usd(totalPip));

const perKey = totalPip / KEYS;
assert("cost per key", 30_000, perKey);
printed("cost per key", perKey, usd(perKey));
printed("key count", KEYS, `${KEYS}-key`);
for (const [name, amount] of Object.entries(LINES)) {
  printed(`line item ${name}`, amount, usd(amount));
}
printed("tear-off and disposal", TEAR_OFF, usd(TEAR_OFF));

/* ------------------------------------- first year with no elections (1.263(a)-3) */

const noElections = LINES.routine;
printed("first-year deduction with no elections", noElections, usd(noElections));
const noElectionsPct = Number(((100 * noElections) / totalPip).toFixed(1));
assert("no-election deduction as a share of the PIP", 1.3, noElectionsPct);
printed("no-election share", noElectionsPct, pct1(noElectionsPct));

/* ------------------------- the partial disposition election, 26 CFR 1.168(i)-8(d)(2) */

const OLD_ROOF_BASIS = 300_000;
const LIFE_YEARS = 39; // nonresidential real property, straight line
const YEARS_HELD = 14;

const accumulated = Math.round((OLD_ROOF_BASIS * YEARS_HELD) / LIFE_YEARS);
assert("accumulated depreciation on the old roof", 107_692, accumulated);
printed("accumulated depreciation", accumulated, usd(accumulated));

const remainingBasis = OLD_ROOF_BASIS - accumulated;
assert("remaining basis, the partial disposition loss", 192_308, remainingBasis);
printed("partial disposition loss", remainingBasis, usd(remainingBasis));
printed("old roof allocated basis", OLD_ROOF_BASIS, usd(OLD_ROOF_BASIS));
printed("straight-line life", LIFE_YEARS, `${LIFE_YEARS}-year life`);
printed("years held", YEARS_HELD, `${YEARS_HELD} full years`);

// 1.263(a)-3(g)(2)(i): with the election, the removal cost need not be capitalized.
const roofCapitalized = LINES.roof - TEAR_OFF;
assert("roof cost capitalized after the election", 482_000, roofCapitalized);
printed("roof capitalized", roofCapitalized, usd(roofCapitalized));

/* --------------------------- section 179, 26 U.S.C. 179(e) and Rev. Proc. 2025-32 */

const CAP_2026 = 2_560_000; // 179(b)(1)
const PHASEOUT_2026 = 4_090_000; // 179(b)(2)
printed("2026 section 179 cap", CAP_2026, usd(CAP_2026));
printed("2026 phaseout threshold", PHASEOUT_2026, usd(PHASEOUT_2026));

// 179(e)(2) names roofs, HVAC, fire protection and alarm, and security systems.
const qualifiedRealProperty =
  roofCapitalized + LINES.hvac + LINES.security + LINES.fire;
assert("qualified real property", 1_392_000, qualifiedRealProperty);
printed("qualified real property", qualifiedRealProperty, usd(qualifiedRealProperty));

// The plumbing and flooring restorations are neither qualified real property
// nor qualified improvement property that section 179 reaches on this page's facts.
assert(
  "plumbing and flooring stay outside section 179",
  1_030_000,
  LINES.plumbing + LINES.flooring,
);

const s179Property = qualifiedRealProperty + LINES.ffe;
assert("section 179 property placed in service", 2_426_000, s179Property);
printed("section 179 property placed in service", s179Property, usd(s179Property));

assert(
  "below the phaseout threshold, so 179(b)(2) does not reduce the cap",
  true,
  s179Property < PHASEOUT_2026,
);
const headroom = CAP_2026 - s179Property;
assert("headroom inside the dollar cap", 134_000, headroom);
printed("headroom inside the cap", headroom, usd(headroom));

// 179(b)(3): the limit that actually binds here.
const TAXABLE_INCOME = 610_000;
const s179Allowed = Math.min(s179Property, CAP_2026, TAXABLE_INCOME);
assert("section 179 allowed", 610_000, s179Allowed);
printed("section 179 allowed", s179Allowed, usd(s179Allowed));

const carryforward = s179Property - s179Allowed;
assert("section 179 carryforward", 1_816_000, carryforward);
printed("section 179 carryforward", carryforward, usd(carryforward));

/* ------------------------------------------- first year with the elections made */

const withElections = LINES.routine + TEAR_OFF + remainingBasis + s179Allowed;
assert("first-year deductions with the elections", 886_308, withElections);
printed("first-year deductions with the elections", withElections, usd(withElections));

const withPct = Number(((100 * withElections) / totalPip).toFixed(1));
assert("elected deduction as a share of the PIP", 25.0, withPct);
printed("elected share", withPct, pct1(withPct));

const remainderPct = Number((100 - withPct).toFixed(1));
assert("the share that depreciates instead", 75.0, remainderPct);
printed("depreciated share", remainderPct, pct1(remainderPct));

const multiple = Number((withElections / noElections).toFixed(1));
assert("the elections are worth this multiple in year one", 19.3, multiple);
printed("multiple", multiple, `${multiple} times`);

/* ---------------------------- published thresholds quoted in the page's prose */

printed("de minimis ceiling with an AFS", 5000, "$5,000");
printed("de minimis ceiling without an AFS", 2500, "$2,500");
printed("the $500 the regulation itself prints", 500, "$500");
printed("small-taxpayer building basis ceiling", 1_000_000, "$1,000,000");
printed("small-taxpayer annual cap", 10_000, "$10,000");
printed("small-taxpayer gross receipts ceiling", 10_000_000, "$10,000,000");
printed("small-taxpayer percentage of basis", 2, "2 percent");
printed("routine maintenance window for a building", 10, "10-year period");
printed("building systems count", 9, "nine");
printed("179D base floor for 2026", 0.59, "$0.59");
printed("179D base ceiling for 2026", 1.19, "$1.19");
printed("179D prevailing-wage floor for 2026", 2.97, "$2.97");
printed("179D prevailing-wage ceiling for 2026", 5.94, "$5.94");
printed("179D base increment", 0.02, "$0.02");
printed("179D prevailing-wage increment", 0.12, "$0.12");
printed("179D savings threshold", 25, "25 percent");
printed("179D termination date", 0, "June 30, 2026");
printed("the regulation's effective date", 0, "January 1, 2014");
printed("lobby floor share in Example 28", 10, "10 percent");
printed("public-area floor share in Example 29", 40, "40 percent");

/* ------------------------------------------------------------------ report */

console.log(`check-renovation-capitalization-math: ${pass} assertions passed`);
if (fail.length) {
  console.error(`\n${fail.length} FAILED:`);
  for (const f of fail) console.error(`  - ${f}`);
  process.exit(1);
}
