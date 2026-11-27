#!/usr/bin/env node
/**
 * Recomputes every figure in the worked example and the body of
 * /hotel-financing/forgiven-debt-tax.
 *
 *   node scripts/check-forgiven-debt-math.mjs
 *
 * The hotel, the members and their balance sheets are hypothetical and
 * labeled as such on the page. Published inputs: the 2026 joint rate schedule
 * in Rev. Proc. 2025-32, Section 4, Table 1; the 39-year recovery period for
 * nonresidential real property in 26 U.S.C. 168(c); the two limits in
 * 26 U.S.C. 108(c)(2); the insolvency measure in 26 U.S.C. 108(d)(3); the
 * partner-level rule in 26 U.S.C. 108(d)(6); the consent thresholds in
 * 26 CFR 1.1017-1(g)(2)(ii)(C); and the 90 percent asset test in
 * Rev. Proc. 2014-20, section 3.03(4).
 */
import { readFileSync } from "node:fs";

let pass = 0;
const fails = [];
const eq = (label, got, want, tol = 0.005) => {
  if (Math.abs(got - want) <= tol) pass++;
  else fails.push(`${label}: got ${got}, want ${want}`);
};
const is = (label, got, want) => {
  if (got === want) pass++;
  else fails.push(`${label}: got ${String(got)}, want ${String(want)}`);
};
const r2 = (x) => Math.round(x * 100) / 100;

// ---- Published inputs -----------------------------------------------------
const NONRES_LIFE = 39;            // 26 U.S.C. 168(c)
const QRPBI_90_TEST = 0.90;        // Rev. Proc. 2014-20, s. 3.03(4)
const CONSENT_AGGREGATE = 0.80;    // 26 CFR 1.1017-1(g)(2)(ii)(C)
const CONSENT_FIVE_OR_FEWER = 0.50;

// 2026 joint rate schedule, Rev. Proc. 2025-32, Section 4, Table 1
const JOINT_2026 = [
  [24800, 0.10, 0],
  [100800, 0.12, 2480],
  [211400, 0.22, 11600],
  [403550, 0.24, 35932],
  [512450, 0.32, 82048],
  [768700, 0.35, 116896],
  [Infinity, 0.37, 206583.5],
];
const jointTax = (ti) => {
  let floor = 0;
  for (const [cap, rate, base] of JOINT_2026) {
    if (ti <= cap) return base + rate * (ti - floor);
    floor = cap;
  }
  return 0;
};
// schedule self-check at the printed break points
eq("joint tax at 24,800", jointTax(24800), 2480);
eq("joint tax at 100,800", jointTax(100800), 11600);
eq("joint tax at 211,400", jointTax(211400), 35932);
eq("joint tax at 403,550", jointTax(403550), 82048);
eq("joint tax at 512,450", jointTax(512450), 116896);
eq("joint tax at 768,700", jointTax(768700), 206583.5);

// ---- Hypothetical inputs --------------------------------------------------
const KEYS = 140;
const PRINCIPAL_BEFORE = 12000000;   // outstanding principal immediately before the discharge
const PRINCIPAL_AFTER = 9600000;     // principal after the write-down
const REAL_PROPERTY_FMV = 9000000;   // hotel real property, immediately before the discharge
const OTHER_ASSETS_FMV = 1000000;    // FF&E and everything else the property owner holds
const LAND_BASIS = 1350000;
const BUILDING_BASIS = 5850000;      // depreciable real property
const A_SHARE = 0.60;
const B_SHARE = 0.40;
const A_LIABILITIES = 4300000;       // member A's own liabilities, immediately before
const A_ASSETS_FMV = 3700000;        // member A's own assets at fair market value
const A_OUTSIDE_BASIS = 900000;      // member A's adjusted basis in the LLC interest
const B_OTHER_TAXABLE_INCOME = 400000; // member B, joint return, before the discharge

// ---- 1. The discharge -----------------------------------------------------
const cod = PRINCIPAL_BEFORE - PRINCIPAL_AFTER;
eq("cancelled principal", cod, 2400000);
eq("write-down as share of principal", cod / PRINCIPAL_BEFORE, 0.20, 1e-9);
eq("cancelled principal a key", r2(cod / KEYS), 17142.86);
eq("loan after write-down vs value", PRINCIPAL_AFTER / REAL_PROPERTY_FMV, 1.0667, 0.00005);

const codA = cod * A_SHARE;
const codB = cod * B_SHARE;
eq("member A allocated COD", codA, 1440000);
eq("member B allocated COD", codB, 960000);
eq("allocations sum to the discharge", codA + codB, cod);

// ---- 2. Member A: insolvency, 108(d)(3) and 108(a)(3) ---------------------
const aInsolvency = A_LIABILITIES - A_ASSETS_FMV;
eq("member A insolvency", aInsolvency, 600000);
const aExcludedInsolvency = Math.min(codA, aInsolvency);
eq("member A excluded as insolvent", aExcludedInsolvency, 600000);
const aRemaining = codA - aExcludedInsolvency;
eq("member A income left after insolvency", aRemaining, 840000);

// ---- 3. Member A: the two QRPBI limits, 108(c)(2) -------------------------
const cap1Total = PRINCIPAL_BEFORE - REAL_PROPERTY_FMV;
eq("108(c)(2)(A) debt over value", cap1Total, 3000000);
const cap1A = cap1Total * A_SHARE;
eq("member A share of the (c)(2)(A) limit", cap1A, 1800000);
const cap2A = BUILDING_BASIS * A_SHARE;   // 1017(b)(3)(C) proportionate share
eq("member A share of depreciable real property basis", cap2A, 3510000);
is("(c)(2)(A) does not bind member A", aRemaining <= cap1A, true);
is("(c)(2)(B) does not bind member A", aRemaining <= cap2A, true);
const aExcludedTotal = aExcludedInsolvency + aRemaining;
eq("member A total excluded", aExcludedTotal, 1440000);
eq("total basis in the hotel", LAND_BASIS + BUILDING_BASIS, 7200000);

// ---- 4. What the exclusion costs member A: 1017 and 168(c) ---------------
eq("depreciation member A gives up each year", r2(aExcludedTotal / NONRES_LIFE), 36923.08);

// ---- 5. Member A: 752(b) deemed distribution and 731(a)(1) gain ----------
const aDeemedDistribution = codA;
eq("member A deemed distribution", aDeemedDistribution, 1440000);
const aGain = Math.max(0, aDeemedDistribution - A_OUTSIDE_BASIS);
eq("member A 731(a)(1) gain", aGain, 540000);

// ---- 6. Member B: solvent, consent withheld, tax on no cash -------------
const bTaxWith = jointTax(B_OTHER_TAXABLE_INCOME + codB);
const bTaxWithout = jointTax(B_OTHER_TAXABLE_INCOME);
eq("member B tax including the discharge", bTaxWith, 425364.5);
eq("member B tax without the discharge", bTaxWithout, 81196);
const bIncremental = bTaxWith - bTaxWithout;
eq("member B tax caused by the discharge", bIncremental, 344168.5);
eq("member B effective rate on the discharge", bIncremental / codB, 0.3585, 0.00005);

// ---- 7. The consent thresholds, 1.1017-1(g)(2)(ii)(C) -------------------
is("member B alone cannot compel consent", B_SHARE > CONSENT_FIVE_OR_FEWER, false);
is("member B alone is under the 80 percent test", B_SHARE > CONSENT_AGGREGATE, false);
is("both members together compel consent", A_SHARE + B_SHARE > CONSENT_AGGREGATE, true);
is("member A alone compels consent as one of five or fewer", A_SHARE > CONSENT_FIVE_OR_FEWER, true);

// ---- 8. Rev. Proc. 2014-20 section 3.03(4), the 90 percent asset test ---
const realShare = REAL_PROPERTY_FMV / (REAL_PROPERTY_FMV + OTHER_ASSETS_FMV);
eq("real property share of total assets", realShare, 0.90, 1e-9);
is("the safe harbor asset test is met", realShare >= QRPBI_90_TEST, true);
const heavierFfe = REAL_PROPERTY_FMV / (REAL_PROPERTY_FMV + 1100000);
eq("real property share with 1.1M of other assets", r2(heavierFfe * 100), 89.11);
is("the safe harbor asset test fails on that load", heavierFfe >= QRPBI_90_TEST, false);

// ---- 9. If member B gets consent, nothing is taxed ----------------------
eq("both members excluding everything", aExcludedTotal + codB, cod);

/* ------------------------------------------------- the template's limits */
const src = readFileSync(
  new URL("../src/lib/data/answers/hotel-financing/forgiven-debt-tax.ts", import.meta.url),
  "utf8",
);
const { page } = await import(
  "../src/lib/data/answers/hotel-financing/forgiven-debt-tax.ts"
).catch(() => ({ page: null }));

console.log("-- template limits --");
if (!page) {
  console.log("note: run `npx tsx scripts/check-forgiven-debt-math.mjs` for the structural checks");
  is("no em-dash in the source file", src.includes("\u2014"), false);
} else {
  const words = (s) => s.replace(/\[\d+\]/g, "").split(/\s+/).filter(Boolean).length;
  const answerWords = words(page.answer);
  is("answer is 40 to 70 words", answerWords >= 40 && answerWords <= 70, true);
  is("takeaways 3 to 5", page.takeaways.length >= 3 && page.takeaways.length <= 5, true);
  is("faq 5 to 8", page.faq.length >= 5 && page.faq.length <= 8, true);
  const longFaq = page.faq.filter((f) => words(f.a) > 50).map((f) => f.q);
  is("every faq answer is 50 words or fewer", longFaq.length, 0);
  if (longFaq.length) console.log("   over:", longFaq.join(" | "));
  is("title is 60 characters or fewer", page.title.length <= 60, true);
  is("description is 155 characters or fewer", page.description.length <= 155, true);
  is("sources, at least 4", page.sources.length >= 4, true);
  is("siblings, at least 3", page.related.siblings.length >= 3, true);
  is("cta goes to /contact", page.cta.href, "/contact");
  is("no em-dash anywhere", JSON.stringify(page).includes("\u2014"), false);

  const bodyWords =
    answerWords +
    page.takeaways.reduce((n, t) => n + words(t), 0) +
    page.sections.reduce((n, s) => n + words(s.lead) + words(s.body), 0) +
    words(page.workedExample.body) +
    page.faq.reduce((n, f) => n + words(f.q) + words(f.a), 0);
  console.log(`   body words: ${bodyWords}`);
  is("body is 1,200 to 2,500 words", bodyWords >= 1200 && bodyWords <= 2500, true);

  const order = [...JSON.stringify({ ...page, sources: undefined }).matchAll(/\[(\d+)\]/g)]
    .map((m) => Number(m[1]));
  const firstSeen = [];
  for (const n of order) if (!firstSeen.includes(n)) firstSeen.push(n);
  is(
    "sources are numbered in order of first reference",
    firstSeen.every((n, i) => n === i + 1),
    true,
  );
}

// ---- report -------------------------------------------------------------
if (fails.length) {
  console.error(`FAIL ${fails.length} of ${pass + fails.length}`);
  for (const f of fails) console.error("  " + f);
  process.exit(1);
}
console.log(`forgiven-debt math OK: ${pass} assertions`);
