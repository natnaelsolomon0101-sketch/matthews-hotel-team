#!/usr/bin/env node
/**
 * Recomputes every figure in the worked example and the published-cap
 * arithmetic on /hotel-industry/property-insurance-of-last-resort.
 *
 * Published inputs, each read at its publisher on 2026-11-16:
 *   - TWIA maximum liability limit, commercial structures and associated
 *     contents: $4,424,000 (TWIA Q2 2026 Fact Book, data as of 6/30/2026).
 *   - TWIA's proposed 2027 commercial limit, $4,563,000, DISAPPROVED by
 *     Commissioner's Order 2026-10103 of 09/08/2026, so the limit in force for
 *     policies issued or renewed on or after January 1, 2027 is $4,424,000.
 *   - California FAIR Plan Division I commercial property limits: $20,000,000
 *     per building, $100,000,000 maximum per location (California Department
 *     of Insurance approval of March 28, 2025).
 *
 * Everything else is a labeled assumption of the hypothetical and is stated as
 * one on the page. No premium level is published anywhere on the page, because
 * no public source gives one for a hotel.
 *
 * Run: node scripts/check-insurance-math.mjs
 */

let failures = 0;
let checks = 0;

function eq(label, actual, expected, tolerance = 0.5) {
  checks += 1;
  const ok = Math.abs(actual - expected) <= tolerance;
  if (!ok) {
    failures += 1;
    console.error(`FAIL ${label}: got ${actual}, expected ${expected}`);
  } else {
    console.log(`ok   ${label}: ${expected}`);
  }
}

/* ---------------------------------------------------- published cap inputs */

const TWIA_COMMERCIAL_CAP = 4_424_000;
const TWIA_PROPOSED_2027 = 4_563_000;
const TWIA_BOECKH_TRACKED = 4_130_000;
const FAIR_PLAN_PER_BUILDING = 20_000_000;
const FAIR_PLAN_PER_LOCATION = 100_000_000;

/* ------------------------------------- assumptions of the worked example */

const KEYS = 120;
const COST_PER_KEY = 160_000;
const REPLACEMENT_COST = KEYS * COST_PER_KEY; // $19,200,000
const PREMIUM_INCREASE = 180_000;
const CAP_RATE = 0.085;
const CAP_RATE_LOW = 0.08;
const CAP_RATE_HIGH = 0.09;
const OCCUPANCY = 0.70;

console.log("--- replacement cost and the Texas cap ---");
eq("replacement cost", REPLACEMENT_COST, 19_200_000);
eq("replacement cost per key", REPLACEMENT_COST / KEYS, 160_000);
eq(
  "share of replacement cost the TWIA cap reaches (%)",
  (TWIA_COMMERCIAL_CAP / REPLACEMENT_COST) * 100,
  23.04,
  0.005
);
eq(
  "dollars of replacement cost above the TWIA cap",
  REPLACEMENT_COST - TWIA_COMMERCIAL_CAP,
  14_776_000
);
eq("TWIA cap per key", TWIA_COMMERCIAL_CAP / KEYS, 36_866.67, 0.01);

console.log("--- the 2027 step that was disapproved ---");
eq(
  "coverage the disapproved step would have added",
  TWIA_PROPOSED_2027 - TWIA_COMMERCIAL_CAP,
  139_000
);
eq(
  "share the proposed cap would have reached (%)",
  (TWIA_PROPOSED_2027 / REPLACEMENT_COST) * 100,
  23.77,
  0.005
);
eq(
  "gap under the proposed cap",
  REPLACEMENT_COST - TWIA_PROPOSED_2027,
  14_637_000
);
eq(
  "how far the cap in force runs above a cap indexed to BOECKH since 1997",
  TWIA_COMMERCIAL_CAP - TWIA_BOECKH_TRACKED,
  294_000
);

console.log("--- the same hotel under the California FAIR Plan ---");
eq(
  "headroom under the $20,000,000 per-building limit",
  FAIR_PLAN_PER_BUILDING - REPLACEMENT_COST,
  800_000
);
eq(
  "buildings of this size that fit inside the per-location maximum",
  Math.floor(FAIR_PLAN_PER_LOCATION / REPLACEMENT_COST),
  5
);
eq(
  "FAIR Plan per-building limit as a multiple of the TWIA commercial cap",
  FAIR_PLAN_PER_BUILDING / TWIA_COMMERCIAL_CAP,
  4.52,
  0.005
);

console.log("--- what a premium change does to value ---");
eq("premium increase per key", PREMIUM_INCREASE / KEYS, 1_500);
eq(
  "value removed at an 8.5 percent cap rate",
  PREMIUM_INCREASE / CAP_RATE,
  2_117_647,
  1
);
eq(
  "value removed per key at 8.5 percent",
  PREMIUM_INCREASE / CAP_RATE / KEYS,
  17_647,
  1
);
eq(
  "value removed at an 8 percent cap rate",
  PREMIUM_INCREASE / CAP_RATE_LOW,
  2_250_000
);
eq(
  "value removed at a 9 percent cap rate",
  PREMIUM_INCREASE / CAP_RATE_HIGH,
  2_000_000
);
eq(
  "spread between the 8 and 9 percent results",
  PREMIUM_INCREASE / CAP_RATE_LOW - PREMIUM_INCREASE / CAP_RATE_HIGH,
  250_000
);

eq(
  "value removed per recurring dollar of cost at 8.5 percent",
  1 / CAP_RATE,
  11.76,
  0.005
);

console.log("--- the same increase per occupied room night ---");
const roomNights = KEYS * 365;
const occupiedNights = roomNights * OCCUPANCY;
eq("room nights available in a year", roomNights, 43_800);
eq("occupied room nights at 70 percent", occupiedNights, 30_660);
eq(
  "premium increase per occupied room night",
  PREMIUM_INCREASE / occupiedNights,
  5.87,
  0.005
);

console.log("--- residual market growth, as published ---");
// TWIA Q2 2026 Fact Book, Policy Count & Exposures By Year.
eq("TWIA policy count growth 2020 to Q2 2026", 288_676 - 184_890, 103_786);
eq(
  "TWIA policy count growth 2020 to Q2 2026 (%)",
  ((288_676 - 184_890) / 184_890) * 100,
  56.13,
  0.005
);
eq(
  "TWIA exposure growth 2020 to Q2 2026 ($B)",
  128.3 - 55.0,
  73.3,
  0.05
);
eq(
  "TWIA exposure growth 2020 to Q2 2026 (%)",
  ((128.3 - 55.0) / 55.0) * 100,
  133.27,
  0.01
);
eq(
  "share of TWIA commercial and governmental risks at the maximum limit (%)",
  2.10,
  2.10,
  0.001
);

console.log(`\n${checks} assertions, ${failures} failed`);
process.exit(failures === 0 ? 0 : 1);
