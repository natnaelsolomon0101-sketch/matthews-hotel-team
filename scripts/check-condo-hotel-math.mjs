#!/usr/bin/env node
/**
 * Recomputes every figure published on /sell-a-hotel/condo-hotel-conversion.
 *
 * Run: node scripts/check-condo-hotel-math.mjs
 *
 * Sourced inputs (read 2026-11-12, cited on the page):
 *   - Matthews Hotel Index Q1 2026, Orlando resort-lifestyle cap-rate band
 *     6.50% to 7.50% (src/lib/data/mhi.ts, marketSlug "orlando-fl").
 *   - Fla. Stat. 718.117(3) (2026): optional termination needs 80 percent of
 *     total voting interests, and may not proceed if 5 percent or more reject;
 *     a rejected plan waits 24 months.
 *   - 26 U.S.C. 280A(d)(1): a dwelling unit is used as a residence when
 *     personal use exceeds the greater of 14 days or 10 percent of the days
 *     the unit is rented at a fair rental.
 *
 * Assumed inputs, labelled hypothetical on the page and nowhere presented as
 * market facts: the 200-key count, the $4,225,000 NOI, the 6 percent retail
 * selling cost, the 120-unit sponsor holdback, and the 180 rental / 20
 * personal day split.
 */

let pass = 0;
const failures = [];

function eq(label, actual, expected, tol = 0) {
  const ok =
    typeof expected === "number"
      ? Math.abs(actual - expected) <= tol
      : actual === expected;
  if (ok) pass += 1;
  else failures.push(`${label}: got ${actual}, expected ${expected}`);
}

/* ------------------------------------------- leg 1: the whole-asset number */

const KEYS = 200;
const NOI = 4_225_000;
const CAP_LOW = 0.065; // MHI Q1 2026 Orlando resort-lifestyle, low end
const CAP_HIGH = 0.075; // MHI Q1 2026 Orlando resort-lifestyle, high end

const valueAtLow = NOI / CAP_LOW;
eq("whole-asset value at the 6.50% low end", valueAtLow, 65_000_000, 0.01);
eq("per key at the 6.50% low end", valueAtLow / KEYS, 325_000, 0.01);

const valueAtHigh = NOI / CAP_HIGH;
eq("whole-asset value at the 7.50% high end", Math.round(valueAtHigh), 56_333_333);
eq("per key at the 7.50% high end", Math.round(valueAtHigh / KEYS), 281_667);
eq(
  "spread between the two ends of the band",
  Math.round(valueAtLow - valueAtHigh),
  8_666_667,
);
eq("the band is 100 basis points wide", (CAP_HIGH - CAP_LOW) * 10_000, 100, 1e-9);

/* ------------------------------- leg 2: what the retail route has to gross */

const RETAIL_COST = 0.06; // assumed, stated as an assumption on the page
const netTarget = 65_000_000;
const requiredGross = netTarget / (1 - RETAIL_COST);
eq("gross the 200 units must fetch", Math.round(requiredGross), 69_148_936);
eq(
  "required gross per unit",
  Math.round(requiredGross / KEYS),
  345_745,
);
eq(
  "the selling cost on that gross",
  Math.round(requiredGross * RETAIL_COST),
  4_148_936,
);
// The round trip: gross less the cost must return the net target.
eq(
  "gross less selling cost returns the net target",
  Math.round(requiredGross * (1 - RETAIL_COST)),
  netTarget,
);
eq(
  "the premium as a percentage of the whole-asset price",
  Number((((requiredGross - netTarget) / netTarget) * 100).toFixed(2)),
  6.38,
);

/* --------------------------- leg 3: putting the hotel back together again */

const APPROVE_SHARE = 0.8; // Fla. Stat. 718.117(3)
const REJECT_SHARE = 0.05; // Fla. Stat. 718.117(3)

const votesToApprove = KEYS * APPROVE_SHARE;
eq("units that must approve a plan of termination", votesToApprove, 160);

const votesToBlock = KEYS * REJECT_SHARE;
eq("units whose rejection stops the plan", votesToBlock, 10);

const SPONSOR_HOLDBACK = 120;
eq(
  "third-party units the sponsor still needs to reach 160",
  votesToApprove - SPONSOR_HOLDBACK,
  40,
);
eq(
  "third-party units left after the holdback",
  KEYS - SPONSOR_HOLDBACK,
  80,
);
// Selling more than 40 units leaves the sponsor short of 160 on its own.
const maxSoldAndStillAlone = KEYS - votesToApprove;
eq("units the sponsor can sell and still carry the vote alone", maxSoldAndStillAlone, 40);
eq(
  "sponsor's holding once 41 units are sold",
  KEYS - (maxSoldAndStillAlone + 1),
  159,
);
eq(
  "that holding is short of the 160 needed",
  KEYS - (maxSoldAndStillAlone + 1) < votesToApprove,
  true,
);
eq("months a rejected plan must wait", 24, 24);

/* ----------------------------------- leg 4: section 280A on the unit buyer */

const RENTAL_DAYS = 180;
const PERSONAL_DAYS = 20;

const tenPercentOfRentalDays = RENTAL_DAYS * 0.1;
eq("10 percent of the fair-rental days", tenPercentOfRentalDays, 18);

const residenceThreshold = Math.max(14, tenPercentOfRentalDays);
eq("the 280A(d)(1) threshold is the greater of the two", residenceThreshold, 18);
eq(
  "20 personal days exceeds the threshold, so the unit is a residence",
  PERSONAL_DAYS > residenceThreshold,
  true,
);
eq(
  "18 personal days would not exceed it",
  18 > residenceThreshold,
  false,
);
eq("days of headroom the owner has", residenceThreshold - 14, 4);

/* ----------------------------------------------------- template self-check */
/* Read the page module as text rather than keeping a second copy of its
   prose here, so this check cannot drift away from what ships. */

import { readFileSync } from "node:fs";

const src = readFileSync(
  new URL("../src/lib/data/answers/sell-a-hotel/condo-hotel-conversion.ts", import.meta.url),
  "utf8",
);

const words = (s) => s.trim().split(/\s+/).length;

const answer = /\n  answer:\n?\s*"((?:[^"\\]|\\.)*)",/.exec(src)?.[1];
eq("the answer block was found in the page module", typeof answer, "string");
if (answer) {
  const n = words(answer);
  eq(`answer block is 40 to 70 words (it is ${n})`, n >= 40 && n <= 70, true);
  eq("answer block carries a digit", /\d/.test(answer), true);
  eq("answer block carries a year", /\b(19|20)\d{2}\b/.test(answer), true);
}

const faqAnswers = [...src.matchAll(/\n      a: "((?:[^"\\]|\\.)*)",/g)].map((m) => m[1]);
eq("FAQ count is 5 to 8", faqAnswers.length >= 5 && faqAnswers.length <= 8, true);
eq(
  "every FAQ answer is 50 words or fewer",
  faqAnswers.every((a) => words(a) <= 50),
  true,
);

const title = /\n  title: "([^"]*)",/.exec(src)?.[1] ?? "";
eq(`title is 60 characters or fewer (it is ${title.length})`, title.length <= 60, true);

eq("no em-dash anywhere in the page module", src.includes("\u2014"), false);

/* Every [n] in the page has a source, and every source is cited. */
const refs = new Set([...src.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1])));
const declared = new Set([...src.matchAll(/\n      n: (\d+),/g)].map((m) => Number(m[1])));
eq("10 sources declared", declared.size, 10);
eq(
  "every [n] resolves to a declared source",
  [...refs].every((n) => declared.has(n)),
  true,
);
eq(
  "every declared source is cited at least once",
  [...declared].every((n) => refs.has(n)),
  true,
);

console.log(`\n${pass} assertions passed.`);
if (failures.length) {
  console.error(`\n${failures.length} FAILED:`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("All /sell-a-hotel/condo-hotel-conversion figures recomputed clean.\n");
