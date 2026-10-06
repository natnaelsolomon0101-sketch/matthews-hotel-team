#!/usr/bin/env node
/**
 * Recomputes every number in the worked example on
 * /sell-a-hotel/liquor-license-transfer.
 *
 *   node scripts/check-liquor-license-math.mjs
 *
 * Rules used, each read from a primary source in the run that wrote the page
 * (2026-10-06):
 *   - California escrow and the order claims are paid, Cal. Bus. & Prof. Code
 *     24074 (eight tiers, in the statute's own order).
 *   - California transfer application fee for an on-sale general license from
 *     one person to another, $1,250, Cal. Bus. & Prof. Code 24072(a)(1).
 *   - California temporary permit for a transferee, $100, for not more than
 *     four calendar months, extendable four more for another $100,
 *     Cal. Bus. & Prof. Code 24045.5.
 *   - Florida transfer fee on a quota license, 4 mills on the average annual
 *     gross alcoholic beverage sales of the 3 preceding years, not to exceed
 *     $5,000, Fla. Stat. 561.32(3)(a).
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
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: got ${money(got)}, page says ${money(want)}`);
};

/* ---------------------------------------- the hypothetical */
const PRICE = 19_800_000;          // whole hotel, 112 keys
const LICENSE_CONSIDERATION = 250_000; // allocated to the on-sale general licence
check("price net of the licence allocation", PRICE - LICENSE_CONSIDERATION, 19_550_000);

/* Claims filed with the escrow holder before the department notifies it of
   approval, keyed to the tier of Bus. & Prof. Code 24074 each one falls in. */
const TIERS = [
  ["1. United States, income and withholding taxes", 38_000],
  ["2. wages, salaries and fringe benefits accrued before the sale", 96_000],
  ["3. secured creditors, to the extent of proceeds from sale of the security", 0],
  ["4. mechanics' liens", 41_000],
  ["5. escrow fees, prevailing brokerage fees, reasonable attorney's fees", 52_000],
  ["6. goods sold and delivered for resale, services, landlord past-due rent", 34_000],
  ["7. claims reduced to court-ordered judgments", 0],
  ["8. all other claims", 30_000],
];

const totalClaims = TIERS.reduce((s, [, v]) => s + v, 0);
check("total claims filed", totalClaims, 291_000);

/* Pay the tiers in the statute's order until the escrow is exhausted. */
let left = LICENSE_CONSIDERATION;
const paid = [];
for (const [label, claim] of TIERS) {
  const p = Math.min(claim, left);
  left -= p;
  paid.push([label, claim, p, claim - p]);
}
console.log("\n  the waterfall, in the order 24074 sets:");
for (const [label, claim, p, short] of paid) {
  console.log(`    ${label}\n      claimed ${money(claim)}  paid ${money(p)}  unpaid ${money(short)}`);
}

check("paid to tier 1", paid[0][2], 38_000);
check("paid to tier 2", paid[1][2], 96_000);
check("paid to tier 4", paid[3][2], 41_000);
check("paid to tier 5", paid[4][2], 52_000);
check("escrow left when tier 6 is reached", 250_000 - 38_000 - 96_000 - 0 - 41_000 - 52_000, 23_000);
check("paid to tier 6", paid[5][2], 23_000);
check("tier 6 shortfall", paid[5][3], 11_000);
check("paid to tier 8", paid[7][2], 0);
check("to the seller out of this escrow", left, 0);
check("claims left unpaid", totalClaims - LICENSE_CONSIDERATION, 41_000);

/* ---------------------------------------- what the state charges */
const CA_TRANSFER_FEE = 1_250;           // 24072(a)(1)
const CA_TEMP_PERMIT = 100;              // 24045.5
const CA_TEMP_EXTENSION = 100;           // 24045.5
check("California transfer application fee", CA_TRANSFER_FEE, 1_250);
check("temporary permit plus one extension", CA_TEMP_PERMIT + CA_TEMP_EXTENSION, 200);
check("outer bound of the temporary permit, months", 4 + 4, 8);

/* ---------------------------------------- the cost of the wait */
const PRIME = 0.07;      // October 2026 rate sheet, as of September 30, 2026
const DAYS = 122;        // four calendar months
const carry = LICENSE_CONSIDERATION * PRIME * (DAYS / 365);
check("carry on $250,000 at Prime for four months", carry, 5_849, 0.5);
console.log(`     ${money(LICENSE_CONSIDERATION)} x ${PRIME} x ${DAYS}/365 = ${money(carry)}`);

/* ---------------------------------------- the Florida contrast */
const FL_AVG_SALES = 1_400_000;   // 3-year average annual gross alcoholic beverage sales
const FL_MILLS = 0.004;           // 4 mills
const FL_CAP = 5_000;
const flUncapped = FL_AVG_SALES * FL_MILLS;
check("Florida 4 mills on the 3-year average", flUncapped, 5_600);
check("Florida fee after the statutory cap", Math.min(flUncapped, FL_CAP), 5_000);

console.log(bad ? `\n${bad} figure(s) do not reproduce` : "\nall figures reproduce");
process.exitCode = bad ? 1 : 0;
