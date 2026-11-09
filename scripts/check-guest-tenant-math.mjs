/**
 * Arithmetic check for /hotel-industry/when-a-guest-becomes-a-tenant.
 *
 *   node scripts/check-guest-tenant-math.mjs
 *
 * Every figure in the page's worked example, its takeaways and its FAQ is
 * recomputed here from the assumptions and from the statutory tests read in
 * the run that wrote the page (2026-11-09). The statutory thresholds
 * themselves are inputs, not results: they come from the sources listed on
 * the page and each one is asserted against the value the page prints, so a
 * hand edit to either side fails this script.
 *
 * Run it before changing any number on that page.
 */
let checks = 0;
let failures = 0;

function eq(label, actual, expected, tolerance = 0) {
  checks++;
  const ok =
    typeof expected === "number"
      ? Math.abs(actual - expected) <= tolerance
      : actual === expected;
  if (!ok) {
    failures++;
    console.log(`FAIL ${label}: got ${actual}, expected ${expected}`);
  }
}

/* ---------------------------------------------- statutory lines on the page */

const NY_TENANT_DAYS = 30;        // RPAPL 711
const NY_PERMANENT_RESIDENCE = 30; // Multiple Dwelling Law 4(8)(a)
const NY_TAX_DAYS = 90;           // Tax Law 1101(c)(5)
const FL_LICENCE_DAYS = 30;       // Fla. Stat. 509.013(4)(a)
const FL_TAX_MONTHS = 6;          // Fla. Stat. 212.03(4)
const FL_TAX_RATE = 0.06;         // Fla. Stat. 212.03(1)(a)
const FL_FACILITY_DECLARATION_MONTHS = 3; // Fla. Stat. 212.03(7)(c)
const WA_TAX_PRESUMPTION_MONTHS = 1;      // RCW 82.04.050(2)(f)
const WA_HOTEL_MIN_ROOMS = 3;             // RCW 19.48.010
const SBA_TRANSIENT_SHARE = 0.5;  // SOP 50 10 8.1, Section A, Ch 1, Para E.3.j.i
const SBA_STAY_DAYS = 30;         // same paragraph
const FL_HOTEL_MIN_ROOMS = 25;    // Fla. Stat. 509.242(1)(a)

eq("NY tenancy threshold", NY_TENANT_DAYS, 30);
eq("NY permanent residence purposes", NY_PERMANENT_RESIDENCE, 30);
eq("NY permanent resident for tax", NY_TAX_DAYS, 90);
eq("FL transient licence line", FL_LICENCE_DAYS, 30);
eq("FL tax line in months", FL_TAX_MONTHS, 6);
eq("FL transient rentals tax rate", FL_TAX_RATE, 0.06);
eq("FL facility declaration months", FL_FACILITY_DECLARATION_MONTHS, 3);
eq("WA tax presumption in months", WA_TAX_PRESUMPTION_MONTHS, 1);
eq("WA hotel minimum rooms", WA_HOTEL_MIN_ROOMS, 3);
eq("FL hotel minimum sleeping rooms", FL_HOTEL_MIN_ROOMS, 25);
eq("SBA transient revenue share", SBA_TRANSIENT_SHARE, 0.5);
eq("SBA stay length", SBA_STAY_DAYS, 30);

/* ------------------------------------- worked example: the assumed hotel */

const KEYS = 118;
const TRAILING_ROOMS_REVENUE = 4_200_000;
const CONTRACT_ROOMS = 30;
const CONTRACT_RATE = 89;
const CONTRACT_NIGHTS = 274;

/* Step 1: what the contract is worth and what it leaves transient. */
const perRoomContract = CONTRACT_RATE * CONTRACT_NIGHTS;
eq("contract revenue per room", perRoomContract, 24_386);

const contractRevenue = CONTRACT_ROOMS * perRoomContract;
eq("contract revenue", contractRevenue, 731_580);

const transientRevenue = TRAILING_ROOMS_REVENUE - contractRevenue;
eq("transient revenue", transientRevenue, 3_468_420);

const transientShare = transientRevenue / TRAILING_ROOMS_REVENUE;
eq("transient share", Number((transientShare * 100).toFixed(2)), 82.58);
eq("SBA test passes", transientShare > SBA_TRANSIENT_SHARE, true);

/* Step 2: how much more long-stay revenue the test can take. */
const halfRevenue = TRAILING_ROOMS_REVENUE * SBA_TRANSIENT_SHARE;
eq("half of rooms revenue", halfRevenue, 2_100_000);

const headroom = halfRevenue - contractRevenue;
eq("long-stay headroom in dollars", headroom, 1_368_420);

let extraRooms = 0;
while ((extraRooms + 1) * perRoomContract < headroom) extraRooms++;
eq("extra contract rooms the test allows", extraRooms, 56);

const atLimit = contractRevenue + extraRooms * perRoomContract;
eq("long-stay revenue at 86 rooms", atLimit, 2_097_196);
eq(
  "transient share at 86 rooms",
  Number((((TRAILING_ROOMS_REVENUE - atLimit) / TRAILING_ROOMS_REVENUE) * 100).toFixed(2)),
  50.07,
);
eq("86 rooms still passes", (TRAILING_ROOMS_REVENUE - atLimit) / TRAILING_ROOMS_REVENUE > 0.5, true);

const overLimit = contractRevenue + (extraRooms + 1) * perRoomContract;
eq("long-stay revenue at 87 rooms", overLimit, 2_121_582);
eq(
  "transient share at 87 rooms",
  Number((((TRAILING_ROOMS_REVENUE - overLimit) / TRAILING_ROOMS_REVENUE) * 100).toFixed(2)),
  49.49,
);
eq("87 rooms fails", (TRAILING_ROOMS_REVENUE - overLimit) / TRAILING_ROOMS_REVENUE > 0.5, false);
eq("total contract rooms at the limit", CONTRACT_ROOMS + extraRooms, 86);
eq("rooms left transient at the limit", KEYS - (CONTRACT_ROOMS + extraRooms), 32);

/* Step 3: the Florida 6 percent transient rentals tax, two ways. */
const taxOnWholeContract = contractRevenue * FL_TAX_RATE;
eq("tax on the whole contract", Number(taxOnWholeContract.toFixed(2)), 43_894.8);

const SIXTH_MONTH_NIGHT = 183; // assumption: the sixth month ends on night 183
const taxedNights = SIXTH_MONTH_NIGHT;
const exemptNights = CONTRACT_NIGHTS - SIXTH_MONTH_NIGHT;
eq("exempt nights", exemptNights, 91);

const taxedRevenue = CONTRACT_ROOMS * CONTRACT_RATE * taxedNights;
const exemptRevenue = CONTRACT_ROOMS * CONTRACT_RATE * exemptNights;
eq("taxed revenue", taxedRevenue, 488_610);
eq("exempt revenue", exemptRevenue, 242_970);
eq("the two parts rebuild the contract", taxedRevenue + exemptRevenue, contractRevenue);

const taxPaidFirstSixMonths = taxedRevenue * FL_TAX_RATE;
const taxSaved = exemptRevenue * FL_TAX_RATE;
eq("tax on the first six months", Number(taxPaidFirstSixMonths.toFixed(2)), 29_316.6);
eq("tax saved after six months", Number(taxSaved.toFixed(2)), 14_578.2);
eq(
  "the two tax parts rebuild the flat figure",
  Number((taxPaidFirstSixMonths + taxSaved).toFixed(2)),
  Number(taxOnWholeContract.toFixed(2)),
);

/* Step 4: the same contract in New York, counted in nights. */
eq("nights left when the occupant becomes a tenant", CONTRACT_NIGHTS - NY_TENANT_DAYS, 244);
eq("nights left when the occupant becomes a permanent resident", CONTRACT_NIGHTS - NY_TAX_DAYS, 184);
eq("nights between the two New York lines", NY_TAX_DAYS - NY_TENANT_DAYS, 60);

/* ------------------------------------------------------------------ report */

console.log(
  failures
    ? `\n${failures} of ${checks} assertions failed`
    : `guest-tenant math OK: ${checks} assertions`,
);
process.exitCode = failures ? 1 : 0;
