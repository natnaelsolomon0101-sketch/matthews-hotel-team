/**
 * Recomputes every number in the worked example and the body of
 * /sell-a-hotel/asset-sale-vs-entity-sale.
 *
 *   node scripts/check-entity-sale-math.mjs
 *
 * Exits non-zero on the first assertion that does not hold. The point of the
 * page is that the two structures produce the SAME federal bill on the same
 * allocation, so these assertions are what stops a later edit from quietly
 * breaking the comparison.
 *
 * Statutory rates used: 20 percent long-term capital gain and a 25 percent
 * maximum on unrecaptured section 1250 gain (IRS Topic no. 409), and a
 * 37 percent top ordinary rate for the owner in the hypothetical.
 */
let failures = 0;
const money = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function eq(label, got, want, tol = 0.005) {
  const ok = Math.abs(got - want) <= tol;
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: got ${money(got)}, expected ${money(want)}`);
}

/* ---------------------------------------------------------------- the hotel */
const NOI = 1_440_000;
const CAP = 0.08;                  // MHI Q1 2026 Atlanta select-service low end
const PRICE = NOI / CAP;
eq("price = NOI / cap rate", PRICE, 18_000_000);

const alloc = { land: 2_700_000, building: 13_500_000, ffe: 1_500_000, goodwill: 300_000 };
eq("allocation sums to the price", alloc.land + alloc.building + alloc.ffe + alloc.goodwill, PRICE);

const cost = { land: 1_800_000, building: 9_000_000, ffe: 2_200_000, goodwill: 0 };
const depr = { building: 2_500_000, ffe: 2_200_000 };
const MORTGAGE = 9_600_000;

const LTCG = 0.20, SEC1250 = 0.25, ORDINARY = 0.37;

/* ------------------------------------------------------------- asset sale */
const basis = {
  land: cost.land,
  building: cost.building - depr.building,
  ffe: cost.ffe - depr.ffe,
  goodwill: cost.goodwill,
};
eq("building adjusted basis", basis.building, 6_500_000);
eq("FF&E adjusted basis", basis.ffe, 0);

const landGain = alloc.land - basis.land;
eq("land gain", landGain, 900_000);
const landTax = landGain * LTCG;
eq("land tax at 20%", landTax, 180_000);

const buildingGain = alloc.building - basis.building;
eq("building gain", buildingGain, 7_000_000);
const unrecaptured = Math.min(depr.building, buildingGain);
eq("unrecaptured section 1250 gain", unrecaptured, 2_500_000);
const unrecapturedTax = unrecaptured * SEC1250;
eq("unrecaptured 1250 tax at 25%", unrecapturedTax, 625_000);
const buildingResidual = buildingGain - unrecaptured;
eq("building gain above depreciation", buildingResidual, 4_500_000);
const buildingResidualTax = buildingResidual * LTCG;
eq("building residual tax at 20%", buildingResidualTax, 900_000);

const ffeGain = alloc.ffe - basis.ffe;
eq("FF&E gain", ffeGain, 1_500_000);
const ffeOrdinary = Math.min(depr.ffe, ffeGain);   // section 1245(a)(1)
eq("FF&E section 1245 ordinary income", ffeOrdinary, 1_500_000);
const ffeTax = ffeOrdinary * ORDINARY;
eq("FF&E tax at 37%", ffeTax, 555_000);

const goodwillGain = alloc.goodwill - basis.goodwill;
const goodwillTax = goodwillGain * LTCG;
eq("goodwill tax at 20%", goodwillTax, 60_000);

const assetSaleTax = landTax + unrecapturedTax + buildingResidualTax + ffeTax + goodwillTax;
eq("ASSET SALE total federal tax", assetSaleTax, 2_320_000);
const assetSaleGain = landGain + buildingGain + ffeGain + goodwillGain;
eq("asset sale total gain", assetSaleGain, 9_700_000);

/* ------------------------------------------------------------ entity sale */
const cashAtClosing = PRICE - MORTGAGE;
eq("cash to seller after the mortgage", cashAtClosing, 8_400_000);
// Section 752(d): the liability the buyer takes on is in the amount realized.
const amountRealized = cashAtClosing + MORTGAGE;
eq("amount realized on the interests", amountRealized, 18_000_000);
// Aggregate outside basis equals aggregate inside basis in this simple case.
const insideBasis = basis.land + basis.building + basis.ffe + basis.goodwill;
eq("aggregate inside basis = outside basis", insideBasis, 8_300_000);
const entityGain = amountRealized - insideBasis;
eq("entity sale total gain", entityGain, 9_700_000);
eq("same total gain either way", entityGain, assetSaleGain);

// Section 751(a) and 751(c): the 1245 recapture is an unrealized receivable.
const hotAssetOrdinary = ffeOrdinary;
const hotAssetTax = hotAssetOrdinary * ORDINARY;
eq("751(a) ordinary income tax at 37%", hotAssetTax, 555_000);
// 26 CFR 1.1(h)-1(b)(3): the partner's share of section 1250 capital gain.
const lookThrough1250Tax = unrecaptured * SEC1250;
eq("1.1(h)-1 section 1250 capital gain tax at 25%", lookThrough1250Tax, 625_000);
const residualLtcg = entityGain - hotAssetOrdinary - unrecaptured;
eq("residual long-term capital gain", residualLtcg, 5_700_000);
const residualTax = residualLtcg * LTCG;
eq("residual tax at 20%", residualTax, 1_140_000);

const entitySaleTax = hotAssetTax + lookThrough1250Tax + residualTax;
eq("ENTITY SALE total federal tax", entitySaleTax, 2_320_000);
eq("difference between the two structures", entitySaleTax - assetSaleTax, 0);

/* --------------------------------------------------- what the buyer loses */
const BUILDING_LIFE = 39;
const buyerDeprAsset = alloc.building / BUILDING_LIFE;
eq("buyer annual building depreciation, asset sale", buyerDeprAsset, 346_153.85, 0.01);
const buyerDeprEntityNo754 = basis.building / BUILDING_LIFE;
eq("buyer annual building depreciation, entity sale with no 754 election", buyerDeprEntityNo754, 166_666.67, 0.01);
const annualDeprLost = buyerDeprAsset - buyerDeprEntityNo754;
eq("annual building depreciation lost", annualDeprLost, 179_487.18, 0.01);
eq("tax value of that at 37%", annualDeprLost * ORDINARY, 66_410.26, 0.01);
const adjustment743b = amountRealized - insideBasis;
eq("section 743(b) adjustment a 754 election would create", adjustment743b, 9_700_000);

/* ------------------------------------- Washington real estate excise tax */
function reet(price, tiers) {
  let tax = 0, prior = 0;
  for (const [ceiling, rate] of tiers) {
    const slice = Math.max(0, Math.min(price, ceiling) - prior);
    tax += slice * rate;
    prior = ceiling;
  }
  return tax;
}
const TIERS_2023 = [[525_000, 0.011], [1_525_000, 0.0128], [3_025_000, 0.0275], [Infinity, 0.03]];
const TIERS_2027 = [[551_000, 0.011], [1_551_000, 0.0128], [3_051_000, 0.0275], [Infinity, 0.03]];
const reetNow = reet(PRICE, TIERS_2023);
eq("Washington state REET on $18.0m, thresholds in force through 2026", reetNow, 509_075);
const reet2027 = reet(PRICE, TIERS_2027);
eq("Washington state REET on $18.0m, thresholds effective January 1, 2027", reet2027, 508_581);
eq("what waiting until January 2027 saves", reetNow - reet2027, 494);

/* --------------------------------------- California base year value reset */
const assessedBefore = 7_200_000;
eq("new assessed value after a change in control", PRICE, 18_000_000);
eq("increase in assessed value", PRICE - assessedBefore, 10_800_000);

console.log(failures ? `\n${failures} assertion(s) FAILED` : "\nall assertions hold");
process.exitCode = failures ? 1 : 0;
