#!/usr/bin/env node
/**
 * Recomputes every number in the worked example on
 * /sell-a-hotel/tax-clearance-and-withholding.
 *
 *   node scripts/check-tax-clearance-math.mjs
 *
 * Rates and rules used, each read from a primary source in the run that
 * wrote the page (2026-10-05):
 *   - Florida transient rentals tax, 6 percent of the total rental charged,
 *     Fla. Stat. 212.03(1)(a).
 *   - Florida transferee's maximum liability, the greater of fair market
 *     value or total purchase price, Fla. Stat. 213.758(6).
 *   - FIRPTA withholding, 15 percent of the amount realized,
 *     26 U.S.C. 1445(a).
 *   - California real estate withholding, 3 1/3 percent of the sales price,
 *     Cal. Rev. & Tax. Code 18662(e)(2)(A).
 *   - Prime at 7.00 percent, Matthews Hotel Markets October 2026 rate sheet
 *     (as of September 30, 2026).
 *
 * Exits non-zero if any figure on the page does not reproduce.
 */
const money = (n) => `$${n.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
let bad = 0;
const check = (label, got, want, tol = 0.005) => {
  const ok = Math.abs(got - want) <= tol;
  if (!ok) bad++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: computed ${money(got)} vs page ${money(want)}`);
};

// The hypothetical.
const price = 15_400_000;        // total purchase price
const realProperty = 14_700_000; // allocated to the real property interest
const ffe = 700_000;             // allocated to furniture, fixtures and equipment
const barAndRestaurant = 120_000; // the slice held in the selling activity
const roomRevenue = 1_540_000;   // five months of room revenue
const basis = 11_900_000;        // adjusted basis in the real property
const FL_TRANSIENT = 0.06;
const FIRPTA = 0.15;
const CA_WITHHOLD = 1 / 30;      // 3 1/3 percent
const PRIME = 0.07;

// 1. Unremitted Florida state transient rentals tax.
const flTax = roomRevenue * FL_TRANSIENT;
check("Florida tax on five months of rooms", flTax, 92_400);

// 2. The statutory cap on the buyer's exposure is the price, not the tax.
const cap = Math.max(price, price); // greater of FMV or purchase price; FMV assumed equal
const capMultiple = cap / flTax;
check("cap as a multiple of the tax", capMultiple, 166.666667, 0.0005);

// 3. A holdback set at 125 percent of the estimate.
const holdback = flTax * 1.25;
check("escrow holdback at 125 percent", holdback, 115_500);

// 4. FIRPTA on the real property allocation.
const firpta = realProperty * FIRPTA;
check("FIRPTA withholding", firpta, 2_205_000);
const gain = realProperty - basis;
check("gain on the real property", gain, 2_800_000);
const shareOfGain = (firpta / gain) * 100;
check("withholding as a percent of gain", shareOfGain, 78.75, 0.005);

// 5. Ninety days of waiting on a withholding certificate, at Prime.
const waitCost = firpta * PRIME * (90 / 365);
check("cost of a 90-day wait at Prime", waitCost, 38_058.90, 0.01);

// 6. California variant: 3 1/3 percent of the real property sales price.
const caWithhold = realProperty * CA_WITHHOLD;
check("California withholding at 3 1/3 percent", caWithhold, 490_000);

// 7. California sales tax reaches only the selling-activity property.
check("FF&E outside the selling activity", ffe - barAndRestaurant, 580_000);

console.log(bad ? `\n${bad} figure(s) do not reproduce` : "\nall figures reproduce");
process.exitCode = bad ? 1 : 0;
