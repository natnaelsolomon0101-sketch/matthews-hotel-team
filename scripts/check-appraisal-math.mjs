/**
 * Recomputes every figure in the worked example on
 * /hotel-financing/appraisal-requirements.
 *
 *   node scripts/check-appraisal-math.mjs
 *
 * The example is hypothetical. The rules it applies are sourced on the page:
 *   - SBA SOP 50 10 8.1 (effective October 1, 2026), Section C, Ch. 1,
 *     Para. E.2.b: a 504 real estate appraisal is required when the estimated
 *     value of the Project Property is greater than $500,000; the appraisal
 *     must be dated no more than 12 months before the application; and if the
 *     appraisal comes in at less than 90% of the estimated value, the
 *     debenture must be reduced or the CDC must secure additional collateral
 *     or additional borrower investment sufficient to address the gap.
 *   - Same SOP, Section C, Ch. 1, Para. E.1.c: a Limited or Special Purpose
 *     Property borrower contributes at least 15%, the debenture funds no more
 *     than 35%, and at least 50% comes from the third-party lender. Hotels,
 *     motels and other lodging facilities are on that list. The ordinary
 *     contribution is at least 10%.
 * Every assertion below is exact to the cent; nothing is rounded into a claim.
 */
let checks = 0;
const eq = (label, got, want, tol = 0.005) => {
  checks++;
  if (Math.abs(got - want) > tol) {
    console.error(`FAIL ${label}: got ${got}, expected ${want}`);
    process.exitCode = 1;
  }
};

/* ---------------------------------------------- the hypothetical project */
const KEYS = 78;
const PRICE = 6_500_000;          // contract price = estimated value of the project property
const APPRAISED = 5_700_000;      // as-is market value of the real property
const SPECIAL_CONTRIB = 0.15;     // Limited or Special Purpose Property
const DEBENTURE_SHARE = 0.35;
const BANK_SHARE = 0.50;
const ORDINARY_CONTRIB = 0.10;

/* 1. the appraisal is required at all */
eq("project value above the $500,000 SBA 504 trigger", PRICE > 500_000 ? 1 : 0, 1);

/* 2. sizing at the contract price */
const contribAtPrice = PRICE * SPECIAL_CONTRIB;
const debentureAtPrice = PRICE * DEBENTURE_SHARE;
const bankAtPrice = PRICE * BANK_SHARE;
eq("borrower contribution at price, 15%", contribAtPrice, 975_000);
eq("debenture at price, 35%", debentureAtPrice, 2_275_000);
eq("third-party loan at price, 50%", bankAtPrice, 3_250_000);
eq("the three legs sum to the price", contribAtPrice + debentureAtPrice + bankAtPrice, PRICE);

/* 3. the 90 percent test */
const ninetyLine = PRICE * 0.90;
const appraisedPct = (APPRAISED / PRICE) * 100;
eq("90% of estimated value", ninetyLine, 5_850_000);
eq("appraisal as a percent of estimated value", appraisedPct, 87.6923076923, 1e-9);
eq("appraisal is below the 90% line", APPRAISED < ninetyLine ? 1 : 0, 1);
eq("distance below the 90% line", ninetyLine - APPRAISED, 150_000);
eq("gap to the contract price", PRICE - APPRAISED, 800_000);

/* 4. per key, before and after */
eq("price per key at the contract price", PRICE / KEYS, 83_333.3333333, 1e-6);
eq("appraised value per key", APPRAISED / KEYS, 73_076.9230769, 1e-6);
eq("per-key difference", PRICE / KEYS - APPRAISED / KEYS, 10_256.4102564, 1e-6);

/* 5. re-sizing the project to the appraised value */
const contribAtAppraisal = APPRAISED * SPECIAL_CONTRIB;
const debentureAtAppraisal = APPRAISED * DEBENTURE_SHARE;
const bankAtAppraisal = APPRAISED * BANK_SHARE;
eq("borrower contribution at the appraised value", contribAtAppraisal, 855_000);
eq("debenture at the appraised value", debentureAtAppraisal, 1_995_000);
eq("third-party loan at the appraised value", bankAtAppraisal, 2_850_000);
eq("the three legs sum to the appraised value", contribAtAppraisal + debentureAtAppraisal + bankAtAppraisal, APPRAISED);
eq("debenture reduction", debentureAtPrice - debentureAtAppraisal, 280_000);

/* 6. what the buyer brings if the seller holds at the contract price */
const cashNeeded = contribAtAppraisal + (PRICE - APPRAISED);
eq("total cash at closing", cashNeeded, 1_655_000);
eq("cash as a percent of the contract price", (cashNeeded / PRICE) * 100, 25.4615384615, 1e-9);
eq("extra cash versus the original contribution", cashNeeded - contribAtPrice, 680_000);

/* 7. what the special purpose classification itself costs */
eq("ordinary 10% contribution at the price", PRICE * ORDINARY_CONTRIB, 650_000);
eq("special purpose premium at the price", contribAtPrice - PRICE * ORDINARY_CONTRIB, 325_000);

/* 8. the going concern allocation the engagement letter can ask for */
const LAND_AND_BUILDING = 5_700_000;
const EQUIPMENT = 450_000;
const BUSINESS_INTANGIBLE = 150_000;
const goingConcern = LAND_AND_BUILDING + EQUIPMENT + BUSINESS_INTANGIBLE;
eq("going concern value as the sum of its allocated parts", goingConcern, 6_300_000);
eq("real property share of going concern value", (LAND_AND_BUILDING / goingConcern) * 100, 90.4761904762, 1e-9);
eq("value above the real property number", goingConcern - LAND_AND_BUILDING, 600_000);
eq("the real property leg is the number the loan is sized on", LAND_AND_BUILDING, APPRAISED);

/* 9. the label figure: how far below contract the appraisal landed */
eq("appraisal as a percent below the contract price", 100 - appraisedPct, 12.3076923077, 1e-9);

/* 10. the credit union comparison in the table */
eq("a $900,000 hotel loan is below the NCUA $1,000,000 appraisal line", 900_000 < 1_000_000 ? 1 : 0, 1);
eq("the same loan is above the $500,000 bank line", 900_000 > 500_000 ? 1 : 0, 1);

/* -------------------------------------------- the template's own limits */
const mod = await import("../src/lib/data/answers/hotel-financing/appraisal-requirements.ts");
const page = mod.page;
const words = (s) => s.replace(/\[\d+\]/g, "").split(/\s+/).filter(Boolean).length;

const answerWords = words(page.answer);
checks++;
if (answerWords < 40 || answerWords > 70) {
  console.error(`FAIL answer length: ${answerWords} words, want 40 to 70`);
  process.exitCode = 1;
}
checks++;
if (page.takeaways.length < 3 || page.takeaways.length > 5) {
  console.error(`FAIL takeaways: ${page.takeaways.length}, want 3 to 5`);
  process.exitCode = 1;
}
checks++;
if (page.faq.length < 5 || page.faq.length > 8) {
  console.error(`FAIL faq count: ${page.faq.length}, want 5 to 8`);
  process.exitCode = 1;
}
for (const f of page.faq) {
  checks++;
  const n = words(f.a);
  if (n > 50) {
    console.error(`FAIL faq answer over 50 words (${n}): ${f.q}`);
    process.exitCode = 1;
  }
}
checks++;
if (page.title.length > 60) {
  console.error(`FAIL title ${page.title.length} chars`);
  process.exitCode = 1;
}
checks++;
if (page.description.length > 155) {
  console.error(`FAIL description ${page.description.length} chars`);
  process.exitCode = 1;
}
const body = [
  page.answer,
  ...page.takeaways,
  ...page.sections.flatMap((s) => [s.h2, s.lead, s.body]),
  page.workedExample.body,
  ...page.faq.flatMap((f) => [f.q, f.a]),
  page.originalDataPoint.sentence,
  page.brandSentence,
].join(" ");
const bodyWords = words(body);
checks++;
if (bodyWords < 1200 || bodyWords > 2500) {
  console.error(`FAIL body length: ${bodyWords} words, want 1200 to 2500`);
  process.exitCode = 1;
}
console.log(`answer ${answerWords} words, body ${bodyWords} words, title ${page.title.length} chars, description ${page.description.length} chars`);

console.log(
  process.exitCode
    ? "appraisal math FAILED"
    : `appraisal math OK: ${checks} assertions`,
);
