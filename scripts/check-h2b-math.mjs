/**
 * Recomputes every arithmetic figure on /hotel-industry/h2b-seasonal-workers.
 *
 * Two groups of assertions:
 *   1. The worked example and the derived shares, recomputed from the inputs.
 *   2. The internal consistency of the counts taken from the DOL OFLC H-2B
 *      disclosure file for FY2025 Q4 (H-2B_Disclosure_Data_FY2025_Q4.xlsx,
 *      https://www.dol.gov/agencies/eta/foreign-labor/performance). The raw
 *      70 MB workbook is not committed; the per-occupation counts below are
 *      what the scan produced on 2026-11-02 and the checks here prove the
 *      published table sums and percentages match them.
 *
 *   node scripts/check-h2b-math.mjs
 */
let failures = 0;
let checks = 0;

function eq(label, actual, expected, tol = 0.005) {
  checks += 1;
  const ok = Math.abs(actual - expected) <= tol;
  if (!ok) {
    failures += 1;
    console.error(`FAIL ${label}: computed ${actual}, page says ${expected}`);
  } else {
    console.log(`ok   ${label}: ${expected}`);
  }
}

/* ---------------------------------------------- 1. the worked example */

const WORKERS = 10;
const HOURS_PER_WEEK = 35;      // modal job order week, 1,149 of 2,121 cases
const WEEKS = 36;               // 252 days, inside the 211-258 day middle half
const WAGE = 16.67;             // median certified hotel housekeeping wage
const SOFT_HOURS = 24;          // hypothetical useful hours in a soft season
const CAP_RATE = 0.085;         // stated assumption
const KEYS = 120;

const jobOrderHours = HOURS_PER_WEEK * WEEKS;
eq("job order hours per worker", jobOrderHours, 1260);
eq("job order payroll per worker", jobOrderHours * WAGE, 21004.2);
eq("job order payroll, ten workers", jobOrderHours * WAGE * WORKERS, 210042);

// 36 weeks is exactly three 12-week periods; 3/4 of the workdays in each.
const periods = WEEKS / 12;
eq("twelve-week periods in the season", periods, 3);
const guaranteePerPeriod = 0.75 * HOURS_PER_WEEK * 12;
eq("guaranteed hours per worker per period", guaranteePerPeriod, 315);
const guaranteeHours = guaranteePerPeriod * periods;
eq("guaranteed hours per worker, season", guaranteeHours, 945);
eq("guarantee payroll per worker", guaranteeHours * WAGE, 15753.15);
eq("guarantee payroll, ten workers", guaranteeHours * WAGE * WORKERS, 157531.5);

const softHours = SOFT_HOURS * WEEKS;
eq("hours actually needed per worker", softHours, 864);
const shortfallHours = guaranteeHours - softHours;
eq("shortfall hours per worker", shortfallHours, 81);
// cross-check the shortfall period by period
eq(
  "shortfall per period times three",
  (guaranteePerPeriod - SOFT_HOURS * 12) * periods,
  81
);
eq("shortfall cost per worker", shortfallHours * WAGE, 1350.27);
const shortfallCost = shortfallHours * WAGE * WORKERS;
eq("shortfall cost, ten workers", shortfallCost, 13502.7);
eq(
  "shortfall as share of guarantee payroll, percent",
  (100 * shortfallCost) / (guaranteeHours * WAGE * WORKERS),
  8.57,
  0.005
);
eq("value at an 8.5 percent cap rate", shortfallCost / CAP_RATE, 158855, 1);
eq("value per key", shortfallCost / CAP_RATE / KEYS, 1324, 1);

/* ------------------------------- 2. the occupation table and the counts */

// As scanned from the OFLC FY2025 Q4 file on 2026-11-02.
const OCC = [
  ["Maids and housekeeping cleaners", 741, 10556, 43.5, 16.67],
  ["Cooks, restaurant", 319, 3892, 16.0, 18.92],
  ["Waiters and waitresses", 148, 2191, 9.0, 18.71],
  ["Hotel, motel and resort desk clerks", 185, 1063, 4.4, 17.5],
  ["Dishwashers", 96, 1002, 4.1, 16.0],
  ["Dining room attendants and bartender helpers", 79, 931, 3.8, 15.0],
  ["Landscaping and groundskeeping workers", 70, 733, 3.0, 18.54],
  ["Janitors and cleaners, except maids", 61, 617, 2.5, 19.0]
];

const TOTAL_HOTEL_WORKERS = 24269;
const TOTAL_HOTEL_CASES = 2121;

const top8Cases = OCC.reduce((n, r) => n + r[1], 0);
const top8Workers = OCC.reduce((n, r) => n + r[2], 0);
eq("top eight occupations, cases", top8Cases, 1699);
eq("top eight occupations, workers", top8Workers, 20985);
eq(
  "top eight share of hotel workers, percent",
  (100 * top8Workers) / TOTAL_HOTEL_WORKERS,
  86.5,
  0.05
);

for (const [name, , workers, share] of OCC) {
  eq(
    `share: ${name}`,
    (100 * workers) / TOTAL_HOTEL_WORKERS,
    share,
    0.05
  );
}

// Food and beverage roles: a third of the hotel total, below housekeeping.
const fnb = 3892 + 2191 + 1002 + 931;
eq("food and beverage workers", fnb, 8016);
eq("food and beverage share of hotel workers, percent", (100 * fnb) / TOTAL_HOTEL_WORKERS, 33.0, 0.05);
checks += 1;
if (!(fnb < 10556)) {
  failures += 1;
  console.error("FAIL food and beverage should be below housekeeping");
} else {
  console.log("ok   food and beverage (8,016) is below housekeeping (10,556)");
}

// NAICS entry variants recorded in the file sum to the 7211 row count.
const NAICS = { 721110: 1328, 72111: 867, 721199: 22, 721191: 21, 72112: 20, 72119: 18, 7211: 12, 721120: 11 };
eq(
  "NAICS variants sum to traveler accommodation rows",
  Object.values(NAICS).reduce((a, b) => a + b, 0),
  2299
);
eq("six-digit 721110 share of those rows, percent", (100 * 1328) / 2299, 57.76, 0.01);

// Case statuses sum to the application count.
const STATUS = {
  certification: 2075,
  withdrawn: 138,
  denied: 38,
  partial: 38,
  certReturned: 8,
  rejected: 2
};
eq("statuses sum to hotel applications", Object.values(STATUS).reduce((a, b) => a + b, 0), 2299);
eq(
  "certified plus partial plus returned",
  STATUS.certification + STATUS.partial + STATUS.certReturned,
  TOTAL_HOTEL_CASES
);

// Nature of temporary need sums to the certified case count.
eq("peakload plus seasonal plus one-time", 1449 + 671 + 1, TOTAL_HOTEL_CASES);

// The file's row accounting.
eq("non-empty rows in the workbook", 1048209 - 1030656, 17553);
eq("rows carrying a NAICS code", 1048209 - 1030656 - 1, 17552);
eq("hotel share of applications, percent", (100 * 2299) / 17552, 13.1, 0.05);
eq("hotel share of certified workers, percent", (100 * 24269) / 232326, 10.4, 0.05);

// The FY2026 supplemental allocations sum to the published total.
eq("FY2026 supplemental allocations", 18490 + 27736 + 18490, 64716);
// The statutory halves sum to the cap.
eq("statutory halves sum to the cap", 33000 * 2, 66000);
// Certifications against the cap.
eq("certified workers as a multiple of the cap", 232326 / 66000, 3.52, 0.005);

// The 75 to 90 day filing windows quoted on the page.
function window(startIso) {
  const d = new Date(startIso + "T00:00:00Z");
  const back = (n) => new Date(d.getTime() - n * 86400000).toISOString().slice(0, 10);
  return [back(90), back(75)];
}
const w1 = window("2027-04-01");
const w2 = window("2027-05-15");
checks += 1;
if (w1[0] !== "2027-01-01" || w1[1] !== "2027-01-16") {
  failures += 1;
  console.error(`FAIL April 1 2027 window: ${w1.join(" to ")}`);
} else {
  console.log("ok   April 1, 2027 start: file January 1 to January 16, 2027");
}
checks += 1;
if (w2[0] !== "2027-02-14" || w2[1] !== "2027-03-01") {
  failures += 1;
  console.error(`FAIL May 15 2027 window: ${w2.join(" to ")}`);
} else {
  console.log("ok   May 15, 2027 start: file February 14 to March 1, 2027");
}
checks += 1;
if (w1[1] === w1[0]) {
  failures += 1;
} else {
  const days = (new Date(w1[1]) - new Date(w1[0])) / 86400000;
  if (days !== 15) {
    failures += 1;
    console.error(`FAIL filing window width: ${days + 1} days`);
  } else {
    console.log("ok   filing window is 16 days wide");
  }
}

console.log(`\n${checks - failures}/${checks} checks passed`);
if (failures > 0) {
  console.error(`${failures} FAILED`);
  process.exit(1);
}
console.log("H-2B MATH OK");
