#!/usr/bin/env node
/**
 * Recomputes every number on
 * /hotel-industry/franchise-territory-and-encroachment and re-checks the
 * template's own limits (geo/05-templates.md §1.1).
 *
 *   node scripts/check-franchise-territory-math.mjs
 *
 * Nothing here is fetched. The document figures are the ones read on
 * 2026-11-03 out of the 2026 Hilton brand disclosure documents (issued
 * March 30, 2026), the Comfort disclosure document (issued April 1, 2026) and
 * its Exhibit L Incremental Impact Policy (updated April 2025), plus
 * 16 CFR 436.5(l) and Iowa Code sections 537A.10 and 523H.6. They are
 * hard-coded so a hand-edit to the page that moves a number fails this script
 * instead of shipping quietly. Exits non-zero on any mismatch.
 */
import { readFileSync } from "node:fs";

const src = readFileSync(
  new URL(
    "../src/lib/data/answers/hotel-industry/franchise-territory-and-encroachment.ts",
    import.meta.url,
  ),
  "utf8",
);

let fails = 0;
const eq = (label, got, want) => {
  const ok = got === want;
  if (!ok) fails++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
};
const has = (label, needle) => {
  const ok = src.includes(needle);
  if (!ok) fails++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}`);
};
const money = (n) => `$${Math.round(n).toLocaleString("en-US")}`;

/* ------------------------------------------- figures read from the sources */

// Hampton Inn and Hampton Inn & Suites, Item 20 Tables 1 and 5, as of
// December 31, 2025.
const HPT_INN_FRANCHISED = 1351;
const HPT_SUITES_FRANCHISED = 1039;
const HPT_INN_SIGNED_NOT_OPEN = 173;
const HPT_SUITES_SIGNED_NOT_OPEN = 140;
const HPT_INN_PROJECTED = 29;
const HPT_SUITES_PROJECTED = 17;

// Comfort Inn, Comfort Inn & Suites and Comfort Suites, Item 20 Tables 1
// and 5, as of December 31, 2025.
const COMFORT_FRANCHISED = 1643;
const COMFORT_NET_2025 = -20;
const COMFORT_SIGNED_NOT_OPEN = 101;
const COMFORT_PROJECTED = 33;

// Choice Incremental Impact Policy, Exhibit L, updated April 2025.
const AEP_SUBURBAN_SECONDARY = 5;
const NOTICE_SECONDARY = 10;
const IMPACT_TEST = 0.05;           // more than a 5% reduction
const IMPACT_TEST_NEW_BUILD = 0.03; // 3% where the agreement was signed within 18 months

// Iowa Code 537A.10(6), agreements entered on or after July 1, 2000.
const IOWA_SCREEN = 0.06;
const IOWA_YEARS_CAP = 3;

/* ----------------------------------------------------- derived aggregates */

const hptFranchised = HPT_INN_FRANCHISED + HPT_SUITES_FRANCHISED;
const hptPipeline = HPT_INN_SIGNED_NOT_OPEN + HPT_SUITES_SIGNED_NOT_OPEN;
const hptProjected = HPT_INN_PROJECTED + HPT_SUITES_PROJECTED;

eq("Hampton franchised U.S. hotels at 2025-12-31", hptFranchised, 2390);
eq("Hampton agreements signed but not opened", hptPipeline, 313);
eq("Hampton hotels projected next fiscal year", hptProjected, 46);

has("page prints the Hampton franchised total", "2,390 franchised");
has("page prints the Hampton pipeline", "313 franchise agreements signed but not opened");
has("page prints the Hampton projected openings", "46 more");
has(
  "page prints the Comfort franchised total",
  `${COMFORT_FRANCHISED.toLocaleString("en-US")} franchised outlets`,
);
has("page prints the Comfort net change", `down ${Math.abs(COMFORT_NET_2025)} over 2025`);
has(
  "page prints the Comfort pipeline",
  `${COMFORT_SIGNED_NOT_OPEN} agreements signed but not opened`,
);
has("page prints the Comfort projected openings", `${COMFORT_PROJECTED} projected`);

/* ----------------------------------------------------- the worked example */

// Every figure below is an assumption inside a labeled hypothetical, except
// the policy and statutory tests, which are read from the sources above.
const KEYS = 95;
const PRIOR_YEAR_ROOMS_REVENUE = 2_400_000;
const FOLLOWING_YEAR_ROOMS_REVENUE = 2_208_000;
const DISTANCE_MILES = 6.2;
const PROFIT_FLOW_THROUGH = 0.38;   // assumption: lost profit on compensable sales
const NOI_FLOW_THROUGH = 0.55;      // assumption: revenue decline to NOI
const CAP_RATE = 0.0825;            // top of the Q1 2026 MHI Austin select-service band

const decline = PRIOR_YEAR_ROOMS_REVENUE - FOLLOWING_YEAR_ROOMS_REVENUE;
const declinePct = (decline / PRIOR_YEAR_ROOMS_REVENUE) * 100;
eq("revenue decline", money(decline), "$192,000");
eq("revenue decline, percent", declinePct.toFixed(2), "8.00");

// The application sits outside the 5-mile Area of Enhanced Protection for a
// suburban hotel in a secondary market and inside the 10-mile notice radius.
eq("outside the Area of Enhanced Protection", DISTANCE_MILES > AEP_SUBURBAN_SECONDARY, true);
eq("inside the secondary notice radius", DISTANCE_MILES <= NOTICE_SECONDARY, true);

const choiceThreshold = PRIOR_YEAR_ROOMS_REVENUE * IMPACT_TEST;
const choiceThresholdNewBuild = PRIOR_YEAR_ROOMS_REVENUE * IMPACT_TEST_NEW_BUILD;
eq("Choice 5 percent test, dollars", money(choiceThreshold), "$120,000");
eq("Choice 3 percent test, dollars", money(choiceThresholdNewBuild), "$72,000");
eq("decline exceeds the 5 percent test", decline > choiceThreshold, true);
eq("decline exceeds the 3 percent test", decline > choiceThresholdNewBuild, true);

const iowaScreen = PRIOR_YEAR_ROOMS_REVENUE * IOWA_SCREEN;
eq("Iowa six percent screen, dollars", money(iowaScreen), "$144,000");
eq("decline clears the Iowa screen", declinePct > IOWA_SCREEN * 100, true);

const compensableSales =
  PRIOR_YEAR_ROOMS_REVENUE - iowaScreen - FOLLOWING_YEAR_ROOMS_REVENUE;
eq("compensable sales", money(compensableSales), "$48,000");

const lostProfitPerYear = compensableSales * PROFIT_FLOW_THROUGH;
const iowaDamagesCap = lostProfitPerYear * IOWA_YEARS_CAP;
eq("assumed lost profit per year on compensable sales", money(lostProfitPerYear), "$18,240");
eq("three-year statutory cap on that number", money(iowaDamagesCap), "$54,720");

const noiLoss = decline * NOI_FLOW_THROUGH;
const valueLoss = noiLoss / CAP_RATE;
const valueLossPerKey = valueLoss / KEYS;
eq("assumed NOI loss", money(noiLoss), "$105,600");
eq("capitalized value loss at 8.25 percent", money(valueLoss), "$1,280,000");
eq("value loss per key", money(valueLossPerKey), "$13,474");

const ratio = valueLoss / iowaDamagesCap;
eq("value loss over the statutory cap", ratio.toFixed(1), "23.4");

has("worked example prints the decline", "$192,000");
has("worked example prints the 5 percent test", "$120,000");
has("worked example prints the 3 percent test", "$72,000");
has("worked example prints the Iowa screen", "$144,000");
has("worked example prints compensable sales", "$48,000");
has("worked example prints the per-year lost profit", "$18,240");
has("worked example prints the three-year cap", "$54,720");
has("worked example prints the NOI loss", "$105,600");
has("worked example prints the value loss", "$1,280,000");
has("worked example prints the per-key value loss", "$13,474");
has("worked example prints the ratio", "23.4 times");
has("worked example is labeled a hypothetical", "Hypothetical.");

/* ------------------------------------------- source figures must be quoted */

has("Area of Enhanced Protection floor", "half a mile");
has("Area of Enhanced Protection ceiling", "7 radial miles");
has("notice radii", "7, 10 and 15 radial miles");
has("second study window", "365 and 400 days");
has("Iowa cutover date", "July 1, 2000");
has("older Iowa screen", "five percent");
has("Hilton issuance date", "March 30, 2026");
has("Choice issuance date", "April 1, 2026");
has("impact policy date", "April 2025");

/* ------------------------------------------------- template limits §1.1 */

const words = (s) => s.replace(/\[\d+\]/g, " ").split(/\s+/).filter(Boolean).length;

const answerMatch = src.match(/\n {2}answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
eq("direct answer found", Boolean(answerMatch), true);
const answerWords = answerMatch ? words(answerMatch[1]) : 0;
eq(`direct answer is 40 to 70 words (${answerWords})`, answerWords >= 40 && answerWords <= 70, true);

const takeawayBlock = src.slice(src.indexOf("\n  takeaways: ["), src.indexOf("\n  sections: ["));
const takeawayCount = (takeawayBlock.match(/\n {4}"/g) ?? []).length;
eq(`takeaways between 3 and 5 (${takeawayCount})`, takeawayCount >= 3 && takeawayCount <= 5, true);

const faqBlock = src.slice(src.indexOf("\n  faq: ["), src.indexOf("\n  sources: ["));
const faqCount = (faqBlock.match(/\n {6}q: /g) ?? []).length;
eq(`FAQ count between 5 and 8 (${faqCount})`, faqCount >= 5 && faqCount <= 8, true);
const longFaqs = [...faqBlock.matchAll(/\n {6}a:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)]
  .map((m) => words(m[1]))
  .filter((n) => n > 50);
eq("every FAQ answer is 50 words or fewer", longFaqs.length, 0);

eq("no em-dash anywhere in the module", src.includes("\u2014"), false);
eq(
  "author is on the allowed list",
  /authorSlug: "(luke-thompson|miles-cortez|nate-solomon)"/.test(src),
  true,
);
eq(
  "reviewer is on the allowed list",
  /reviewerSlug: "(luke-thompson|miles-cortez|nate-solomon)"/.test(src),
  true,
);
eq("single CTA to /contact", (src.match(/href: "\/contact"/g) ?? []).length, 1);

console.log(fails ? `\n${fails} check(s) failed` : "\nall checks passed");
process.exitCode = fails ? 1 : 0;
