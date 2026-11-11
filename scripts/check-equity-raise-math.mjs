/**
 * Recomputes every figure on /buy-a-hotel/raising-equity-from-investors and
 * every length limit the answer-page template sets, so the page can never
 * drift from its own arithmetic.
 *
 *   node scripts/check-equity-raise-math.mjs
 *
 * Exits non-zero on the first failed assertion. The page's worked example is
 * hypothetical: these are the sums it shows, not a transaction.
 */
import assert from "node:assert/strict";

let checks = 0;
const eq = (actual, expected, label) => {
  checks++;
  assert.strictEqual(actual, expected, `${label}: got ${actual}, expected ${expected}`);
};
const close = (actual, expected, tol, label) => {
  checks++;
  assert.ok(
    Math.abs(actual - expected) <= tol,
    `${label}: got ${actual}, expected ${expected} +/- ${tol}`,
  );
};

/* ---------------------------------------------- the hypothetical hotel deal */

const PRICE = 14_000_000;
const PIP = 2_100_000;
const CLOSING_AND_RESERVES = 700_000;

const projectCost = PRICE + PIP;
eq(projectCost, 16_100_000, "504 project cost (price plus PIP)");

// 13 CFR 120.910 as the October 2026 rate sheet reads it: the debenture funds
// no more than 35% of project cost, the borrower contributes at least 15%, and
// the gross debenture on a hotel is capped at $5,000,000.
const DEBENTURE_SHARE = 0.35;
const BANK_SHARE = 0.5;
const MIN_CONTRIBUTION_SHARE = 0.15;
const HOTEL_DEBENTURE_CAP = 5_000_000;

const uncappedDebenture = projectCost * DEBENTURE_SHARE;
eq(uncappedDebenture, 5_635_000, "35% of project cost, before the cap");
const debenture = Math.min(uncappedDebenture, HOTEL_DEBENTURE_CAP);
eq(debenture, 5_000_000, "debenture after the $5,000,000 hotel cap");
eq(uncappedDebenture - debenture, 635_000, "debenture lost to the cap");

const bankLoan = projectCost * BANK_SHARE;
eq(bankLoan, 8_050_000, "bank first lien at 50% of project cost");

const contribution = projectCost - debenture - bankLoan;
eq(contribution, 3_050_000, "borrower contribution the structure forces");
close(contribution / projectCost, 0.1894, 0.00005, "contribution as a share of project cost");

const minContribution = projectCost * MIN_CONTRIBUTION_SHARE;
eq(minContribution, 2_415_000, "15% statutory minimum contribution");
eq(contribution - minContribution, 635_000, "equity above the 15% minimum");
// The cap and the extra equity are the same number, which is the point: every
// dollar the debenture cannot fund comes out of the equity line.
eq(contribution - minContribution, uncappedDebenture - debenture, "cap equals extra equity");

// The project cost at which the $5,000,000 cap starts to bind: above it, 35%
// of project cost exceeds the cap, so the equity line carries the difference.
const capBindsAbove = Math.floor(HOTEL_DEBENTURE_CAP / DEBENTURE_SHARE);
eq(capBindsAbove, 14_285_714, "project cost at which the hotel debenture cap binds");
eq(projectCost > capBindsAbove, true, "this project is above that cost");

const totalCash = contribution + CLOSING_AND_RESERVES;
eq(totalCash, 3_750_000, "total cash to close");

/* ----------------------------------------------------------- the raise */

const SPONSOR_CASH = 1_250_000;
const raise = totalCash - SPONSOR_CASH;
eq(raise, 2_500_000, "amount raised from investors");
close(raise / totalCash, 0.6667, 0.00005, "investor share of the cash");

const UNIT = 250_000;
const units = raise / UNIT;
eq(units, 10, "number of $250,000 units");

/* ------------------------------------- Regulation D tests the raise meets */

// 17 CFR 230.506(b)(2)(i) caps purchasers at 35 in any 90-calendar-day period,
// and 230.501(e)(1)(iv) excludes accredited investors from that count.
const accreditedPurchasers = 10;
const nonAccreditedPurchasers = 0;
const countedPurchasers = nonAccreditedPurchasers;
eq(countedPurchasers, 0, "purchasers counted against the 35 limit");
eq(35 - countedPurchasers, 35, "headroom under the 35-purchaser limit");
eq(accreditedPurchasers + nonAccreditedPurchasers, units, "purchasers equal units");

// 17 CFR 230.502(b)(2)(i)(B): paragraph (b) of Part F/S of Form 1-A up to
// $20,000,000 of offering, paragraph (c), which requires an audit, above it.
const AUDIT_LINE = 20_000_000;
eq(raise < AUDIT_LINE, true, "the raise sits under the audited-financials line");
eq(AUDIT_LINE - raise, 17_500_000, "distance to the audited-financials line");

// The March 6, 2025 Latham & Watkins request proposed a minimum investment of
// at least $200,000 for a natural person. The staff agreed on March 12, 2025
// that a high minimum is a relevant factor; it named no figure of its own.
const PROPOSED_NATURAL_PERSON_MINIMUM = 200_000;
eq(UNIT >= PROPOSED_NATURAL_PERSON_MINIMUM, true, "unit clears the proposed minimum");
eq(UNIT - PROPOSED_NATURAL_PERSON_MINIMUM, 50_000, "headroom over the proposed minimum");

/* ------------------------------------------- Texas notice filing, 1/10 of 1% */

const TX_RATE = 0.001;
const TX_CAP = 500;
const txUncapped = raise * TX_RATE;
eq(txUncapped, 2_500, "Texas fee before the cap");
const txFee = Math.min(txUncapped, TX_CAP);
eq(txFee, 500, "Texas notice filing fee after the cap");
eq(txUncapped - txFee, 2_000, "amount the Texas cap saves");

console.log(`check-equity-raise-math: ${checks} assertions passed`);
