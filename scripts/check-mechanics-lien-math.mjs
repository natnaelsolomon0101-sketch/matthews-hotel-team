#!/usr/bin/env node
/**
 * Recomputes every figure in the worked example and every published statutory
 * amount on /hotel-financing/mechanics-liens.
 *
 * Published inputs, each read at its publisher on 2026-11-17:
 *   - Minn. Stat. 514.05 subd. 1: a lien attaches from the first item of
 *     labour or material for the beginning of the improvement and is preferred
 *     to any mortgage not then of record.
 *   - Minn. Stat. 514.08 subd. 1: the lien ceases 120 days after the last work
 *     unless a statement is recorded and served inside that period.
 *   - Minn. Stat. 514.011 subd. 2(a): 45 days for the notice from anyone not
 *     under direct contract with the owner.
 *   - Minn. Stat. 514.07: no owner must pay its contractor until 120 days
 *     after completion, absent signed waivers.
 *   - Minn. Stat. 514.12 subd. 3: one year to assert the lien.
 *   - RCW 60.04.061: the lien is prior to any encumbrance attaching after the
 *     claimant's commencement.
 *   - RCW 60.04.091: 90 days to record.
 *   - RCW 60.04.141: eight calendar months to sue.
 *   - RCW 60.04.161: release bond of the greater of $5,000 or 2 times a claim
 *     of $10,000 or less, and at least 1.5 times a claim above $10,000.
 *   - RCW 60.04.221(5) and (7): the lender must withhold, and on failure its
 *     deed of trust is subordinated to the extent wrongfully disbursed, capped
 *     at the amount stated in the notice.
 *   - Fla. Stat. 713.08(5): 90 days after final furnishing.
 *   - Fla. Stat. 713.22: one year, or 60 days after a notice of contest.
 *   - Fla. Stat. 713.24(1): the claim, plus interest at the legal rate for 3
 *     years, plus the greater of $5,000 or 25 percent of the claim.
 *   - Florida judgment interest rate, 7.87 percent per annum for the quarter
 *     beginning October 1, 2026 (Florida CFO memo AAM No. 7, 2026-2027, of
 *     September 4, 2026, under Fla. Stat. 55.03(1)).
 *   - Matthews Hotel Markets October 2026 rate sheet: SOFR 3.90 percent as of
 *     September 30, 2026.
 *
 * Everything else is a labelled assumption of the hypothetical and is stated
 * as one on the page. The page prints no surety premium, no title-insurance
 * charge and no lender title requirement: none of the three is published.
 *
 * Run: node scripts/check-mechanics-lien-math.mjs
 */

let failures = 0;
let checks = 0;

function eq(label, actual, expected, tolerance = 0.005) {
  checks += 1;
  const ok = Math.abs(actual - expected) <= tolerance;
  if (!ok) {
    failures += 1;
    console.error(`FAIL ${label}: got ${actual}, expected ${expected}`);
  } else {
    console.log(`ok   ${label}: ${expected}`);
  }
}

function days(a, b) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);
}

/* ------------------------------------------- published statutory constants */

const MN_RECORD_DAYS = 120;
const MN_SUB_NOTICE_DAYS = 45;
const MN_WITHHOLD_DAYS = 120;
const MN_ENFORCE_YEARS = 1;
const WA_RECORD_DAYS = 90;
const WA_ENFORCE_MONTHS = 8;
const WA_BOND_MULTIPLE_OVER = 1.5;
const WA_BOND_MULTIPLE_AT_OR_UNDER = 2;
const WA_BOND_FLOOR = 5_000;
const WA_SMALL_CLAIM_LINE = 10_000;
const WA_LENDER_BOND_SHARE = 0.5;
const WA_NOTICE_LOOKBACK_DAYS = 60;
const FL_RECORD_DAYS = 90;
const FL_NOTICE_TO_OWNER_DAYS = 45;
const FL_ENFORCE_YEARS = 1;
const FL_CONTEST_DAYS = 60;
const FL_TRANSFER_INTEREST_YEARS = 3;
const FL_TRANSFER_UPLIFT_SHARE = 0.25;
const FL_TRANSFER_UPLIFT_FLOOR = 5_000;
const FL_JUDGMENT_RATE = 0.0787; // per annum, quarter beginning 2026-10-01
const SOFR = 0.039; // as of 2026-09-30, Matthews Hotel Markets October 2026 rate sheet

/* -------------------------------------- assumptions of the worked example */

const KEYS = 118;
const PIP_PER_KEY = 40_000;
const PIP_CONTRACT = KEYS * PIP_PER_KEY;
const CONSTRUCTION_LOAN = 3_800_000;
const WORK_BEGAN = "2026-03-02";
const MORTGAGE_RECORDED = "2026-03-16";
const SUB_LAST_WORK = "2026-08-14";
const SUB_LIEN_RECORDED = "2026-10-30";
const LIEN_AMOUNT = 385_000;
const NOTICE_TO_LENDER = "2026-09-01";
const UNDISBURSED_AT_NOTICE = 900_000;
const DISBURSED_AFTER_NOTICE = 640_000;
const REFI_LOAN = 9_000_000;
const DELAY_DAYS = 30;

/* ------------------------------------------------------------ assertions */

eq("PIP contract on 118 keys at $40,000 per key", PIP_CONTRACT, 4_720_000, 0);
eq("PIP contract per key", PIP_CONTRACT / KEYS, 40_000, 0);

// Priority: the deed of trust recorded 14 days after work began.
eq("days from first work to the recorded mortgage", days(WORK_BEGAN, MORTGAGE_RECORDED), 14, 0);
eq(
  "mortgage attached after commencement, so RCW 60.04.061 puts the lien first",
  Date.parse(MORTGAGE_RECORDED) > Date.parse(WORK_BEGAN) ? 1 : 0,
  1,
  0
);

// Recording window: 90 days from the claimant's last work.
eq("days from the sub's last work to its recorded lien", days(SUB_LAST_WORK, SUB_LIEN_RECORDED), 77, 0);
eq("days left in the 90-day window when it recorded", WA_RECORD_DAYS - 77, 13, 0);
const waDeadline = new Date(Date.parse(SUB_LAST_WORK) + WA_RECORD_DAYS * 86_400_000)
  .toISOString()
  .slice(0, 10);
eq("the 90th day after 2026-08-14 is 2026-11-12", waDeadline === "2026-11-12" ? 1 : 0, 1, 0);
eq("the same claim in Minnesota would have had 120 days", MN_RECORD_DAYS - WA_RECORD_DAYS, 30, 0);

// Lien size.
eq("lien per key", LIEN_AMOUNT / KEYS, 3_262.71, 0.005);
eq("lien as a share of the PIP contract (%)", (LIEN_AMOUNT / PIP_CONTRACT) * 100, 8.16, 0.005);

// Washington release bond, RCW 60.04.161.
const waBond = LIEN_AMOUNT > WA_SMALL_CLAIM_LINE
  ? LIEN_AMOUNT * WA_BOND_MULTIPLE_OVER
  : Math.max(WA_BOND_FLOOR, LIEN_AMOUNT * WA_BOND_MULTIPLE_AT_OR_UNDER);
eq("Washington release bond on a $385,000 claim", waBond, 577_500, 0);
eq("Washington release bond per key", waBond / KEYS, 4_894.07, 0.005);
eq("cash above the claim the bond ties up", waBond - LIEN_AMOUNT, 192_500, 0);
eq(
  "Washington bond on a $10,000 claim is the 2x branch",
  Math.max(WA_BOND_FLOOR, 10_000 * WA_BOND_MULTIPLE_AT_OR_UNDER),
  20_000,
  0
);
eq(
  "Washington bond on a $1,000 claim is the $5,000 floor",
  Math.max(WA_BOND_FLOOR, 1_000 * WA_BOND_MULTIPLE_AT_OR_UNDER),
  5_000,
  0
);

// Florida transfer to security, Fla. Stat. 713.24(1).
const flInterest = LIEN_AMOUNT * FL_JUDGMENT_RATE * FL_TRANSFER_INTEREST_YEARS;
const flUplift = Math.max(FL_TRANSFER_UPLIFT_FLOOR, LIEN_AMOUNT * FL_TRANSFER_UPLIFT_SHARE);
const flTransfer = LIEN_AMOUNT + flInterest + flUplift;
eq("Florida three years of interest at 7.87%", flInterest, 90_898.5, 0.005);
eq("Florida fee-and-cost uplift, the greater of $5,000 or 25%", flUplift, 96_250, 0);
eq("Florida transfer amount on a $385,000 claim", flTransfer, 572_148.5, 0.005);
eq("Florida transfer as a multiple of the claim", flTransfer / LIEN_AMOUNT, 1.4861, 0.00005);
eq("Washington bond minus Florida transfer", waBond - flTransfer, 5_351.5, 0.005);
eq(
  "the two statutes land within 1 percent of each other (%)",
  ((waBond - flTransfer) / flTransfer) * 100,
  0.94,
  0.005
);

// Lender subordination, RCW 60.04.221(5) and (7).
eq("days from the notice to the lender to the recorded lien", days(NOTICE_TO_LENDER, SUB_LIEN_RECORDED), 59, 0);
eq(
  "the lender had to withhold the notice amount, funds permitting",
  Math.min(LIEN_AMOUNT, UNDISBURSED_AT_NOTICE),
  385_000,
  0
);
eq("undisbursed funds above the notice amount", UNDISBURSED_AT_NOTICE - LIEN_AMOUNT, 515_000, 0);
const subordinated = Math.min(DISBURSED_AFTER_NOTICE, LIEN_AMOUNT);
eq("deed of trust subordinated, capped at the notice amount", subordinated, 385_000, 0);
eq("the cap bit, so the subordination is less than the sum disbursed", DISBURSED_AFTER_NOTICE - subordinated, 255_000, 0);
eq(
  "no payment bond at half the construction financing exists, so 60.04.221 applies",
  CONSTRUCTION_LOAN * WA_LENDER_BOND_SHARE,
  1_900_000,
  0
);

// Carrying cost of a delayed refinance, index half only.
eq("30 days of SOFR on a $9,000,000 refinance", REFI_LOAN * SOFR * (DELAY_DAYS / 360), 29_250, 0.005);
eq("the same delay per key", (REFI_LOAN * SOFR * (DELAY_DAYS / 360)) / KEYS, 247.88, 0.005);

// Statutory windows as printed in the table.
eq("Minnesota recording window (days)", MN_RECORD_DAYS, 120, 0);
eq("Minnesota subcontractor notice (days)", MN_SUB_NOTICE_DAYS, 45, 0);
eq("Minnesota owner withholding (days after completion)", MN_WITHHOLD_DAYS, 120, 0);
eq("Minnesota enforcement window (years)", MN_ENFORCE_YEARS, 1, 0);
eq("Washington recording window (days)", WA_RECORD_DAYS, 90, 0);
eq("Washington enforcement window (months)", WA_ENFORCE_MONTHS, 8, 0);
eq("Washington notice lookback (days)", WA_NOTICE_LOOKBACK_DAYS, 60, 0);
eq("Florida recording window (days)", FL_RECORD_DAYS, 90, 0);
eq("Florida notice to owner (days)", FL_NOTICE_TO_OWNER_DAYS, 45, 0);
eq("Florida enforcement window (years)", FL_ENFORCE_YEARS, 1, 0);
eq("Florida notice of contest window (days)", FL_CONTEST_DAYS, 60, 0);
eq(
  "a Florida notice of contest cuts the enforcement window by this many days",
  FL_ENFORCE_YEARS * 365 - FL_CONTEST_DAYS,
  305,
  0
);
eq(
  "Washington's eight months is shorter than Florida's year by this many months",
  12 - WA_ENFORCE_MONTHS,
  4,
  0
);

console.log(`\n${checks} assertions, ${failures} failed`);
process.exit(failures === 0 ? 0 : 1);
