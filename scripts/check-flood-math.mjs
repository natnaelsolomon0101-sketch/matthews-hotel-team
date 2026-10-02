#!/usr/bin/env node
/**
 * Recomputes every number in the worked example and the sizing arithmetic on
 * /hotel-financing/flood-insurance-requirements. Run before saving the page.
 *
 *   node scripts/check-flood-math.mjs
 *
 * The caps and the loss-settlement rule are statutory and regulatory, read in
 * the run that wrote the page: 42 U.S.C. 4013(b)(4) ($500,000 per
 * non-residential building and $500,000 for the owner's contents),
 * 12 CFR 22.3(a) and Q&A Amount 5 (the lesser-of test), 44 CFR 61 appendix
 * A(2) VII (least of coverage, actual cash value, repair cost) and III.D.2
 * (Increased Cost of Compliance inside the Act's maximum). The hotel is
 * hypothetical; its inputs are assumptions.
 */
const money = (n) => "$" + n.toLocaleString("en-US");
const pct = (n, d) => ((n / d) * 100).toFixed(1) + "%";
let fail = 0;
const eq = (label, got, want) => {
  const ok = got === want;
  if (!ok) fail++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
};

/* ----------------------------------------------------- statutory maximums */
const NFIP_BUILDING_CAP = 500_000;   // 42 U.S.C. 4013(b)(4)
const NFIP_CONTENTS_CAP = 500_000;   // 42 U.S.C. 4013(b)(4)
const ICC_LIMIT = 30_000;            // 44 CFR 61 app. A(2) III.D.2

/* ------------------------------------------- hypothetical hotel (inputs) */
const keys = 120;
const buildingRcv = 16_800_000;      // 100% replacement cost, Q&A Amount 2
const contentsValue = 2_100_000;     // FF&E the owner owns
const loanBalance = 9_400_000;
const acvShare = 0.70;               // assumed depreciation on an 18-year-old building
const deductible = 50_000;
const lossRepairCost = 2_000_000;
const closedNights = 60;
const occupancy = 0.70;
const adr = 155;

/* ------------------------------------------------- per-key sanity on RCV */
eq("replacement cost per key", money(buildingRcv / keys), money(140_000));

/* ------------------------- the three-way test, 12 CFR 22.3(a) / Amount 5 */
const nfipMaxBuilding = Math.min(NFIP_BUILDING_CAP, buildingRcv);
const requiredBuilding = Math.min(loanBalance, nfipMaxBuilding);
eq("NFIP maximum available on the building", money(nfipMaxBuilding), money(500_000));
eq("required building coverage", money(requiredBuilding), money(500_000));

const nfipMaxContents = Math.min(NFIP_CONTENTS_CAP, contentsValue);
const requiredContents = Math.min(loanBalance, nfipMaxContents);
eq("required contents coverage", money(requiredContents), money(500_000));

const floor = requiredBuilding + requiredContents;
eq("statutory floor, building plus contents", money(floor), money(1_000_000));

const insurableTotal = buildingRcv + contentsValue;
eq("combined insurable value", money(insurableTotal), money(18_900_000));
eq("floor as a share of insurable value", pct(floor, insurableTotal), "5.3%");

const buildingGap = buildingRcv - requiredBuilding;
eq("uninsured building value", money(buildingGap), money(16_300_000));

/* ------------------- Increased Cost of Compliance at the cap adds nothing */
const iccHeadroom = Math.max(0, NFIP_BUILDING_CAP - requiredBuilding);
eq("ICC headroom at the cap", money(Math.min(ICC_LIMIT, iccHeadroom)), money(0));

/* ------------------------------ loss settlement, 44 CFR 61 app. A(2) VII */
const acv = buildingRcv * acvShare;
eq("assumed actual cash value", money(acv), money(11_760_000));
const settlement = Math.min(requiredBuilding, acv, lossRepairCost);
eq("gross settlement before deductible", money(settlement), money(500_000));
const paid = settlement - deductible;
eq("paid after the deductible", money(paid), money(450_000));
eq("share of the repair cost paid", pct(paid, lossRepairCost), "22.5%");
const uninsuredRepair = lossRepairCost - paid;
eq("uninsured repair cost", money(uninsuredRepair), money(1_550_000));

/* ---------------------- excluded revenue, 44 CFR 61 app. A(2) V.A.1, V.A.4 */
const roomNights = keys * occupancy * closedNights;
eq("occupied room nights lost", roomNights.toLocaleString("en-US"), "5,040");
const revenueLost = roomNights * adr;
eq("rooms revenue lost", money(revenueLost), money(781_200));

const totalUninsured = uninsuredRepair + revenueLost;
eq("total uninsured on the event", money(totalUninsured), money(2_331_200));
eq("total uninsured against the loan balance", pct(totalUninsured, loanBalance), "24.8%");

/* --------------------------------- substantial improvement, 44 CFR 59.1 */
const marketValueBefore = 14_000_000;
const substantialThreshold = marketValueBefore * 0.5;
eq("50 percent substantial-improvement threshold", money(substantialThreshold), money(7_000_000));
const pipPerKey = 35_000;
const pipCost = keys * pipPerKey;
eq("hypothetical PIP cost", money(pipCost), money(4_200_000));
eq("PIP as a share of market value", pct(pipCost, marketValueBefore), "30.0%");

console.log(fail ? `\n${fail} check(s) failed` : "\nall flood-math checks passed");
process.exit(fail ? 1 : 0);
