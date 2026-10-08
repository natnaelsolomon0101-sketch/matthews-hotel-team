/**
 * Recomputes every figure in the worked example and the body of
 * /hotel-industry/energy-benchmarking-and-emissions-limits.
 *
 *   node scripts/check-bps-math.mjs
 *
 * Published inputs, each read at its publisher on 2026-10-08:
 *   - New York City emissions factors for the ENERGY STAR Portfolio Manager
 *     property type "Hotel": 0.00987 tCO2e/sf for 2024-2029, 0.003850668 for
 *     2030-2034, 0.002640017 for 2035-2039 and 0.001465772 for 2040-2049
 *     (1 RCNY 103-14(c)(3));
 *   - greenhouse gas coefficients: utility electricity 0.000288962 tCO2e/kWh
 *     for 2024-2029 (Admin. Code 28-320.3.1.1) and 0.000145 for 2030-2034
 *     (1 RCNY 103-14(d)(3)(ii)), natural gas 0.00005311 tCO2e/kBtu in both;
 *   - penalties: $268 per tCO2e over the limit and $0.50 per square foot a
 *     month for a late emissions report (Admin. Code 28-320.6, 28-320.6.2,
 *     1 RCNY 103-14(g) and (h));
 *   - EIA CBECS 2018 hotel intensities: 13.0 kWh and 34.4 cubic feet of
 *     natural gas per square foot a year (Tables C22 and C32);
 *   - EIA heat content of natural gas consumed in New York, 1,032 Btu per
 *     cubic foot, 2025.
 *
 * The 90,000 square feet, the 150 keys and the 8 percent cap rate are
 * assumptions of the hypothetical, not published figures.
 */
let failures = 0;
const check = (label, actual, expected, tol = 0.05) => {
  const ok = Math.abs(actual - expected) <= tol;
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${actual} vs ${expected}`);
};

/* published inputs */
const F_2429 = 0.00987, F_3034 = 0.003850668, F_3539 = 0.002640017, F_4049 = 0.001465772;
const C_ELEC_2429 = 0.000288962, C_ELEC_3034 = 0.000145, C_GAS = 0.00005311;
const OVER_RATE = 268, LATE_RATE = 0.5;
const KWH_PSF = 13.0, CF_PSF = 34.4, BTU_PER_CF = 1032;

/* assumptions of the hypothetical */
const GSF = 90000, KEYS = 150, CAP = 0.08;

/* energy */
const kwh = GSF * KWH_PSF;
const cf = GSF * CF_PSF;
const kbtu = (cf * BTU_PER_CF) / 1000;
check("annual kWh", kwh, 1_170_000, 0);
check("annual cubic feet of gas", cf, 3_096_000, 0);
check("annual gas kBtu", kbtu, 3_195_072, 0.5);

/* emissions */
const elec2429 = kwh * C_ELEC_2429;
const elec3034 = kwh * C_ELEC_3034;
const gas = kbtu * C_GAS;
check("electricity emissions 2024-2029, tCO2e", elec2429, 338.1);
check("electricity emissions 2030-2034, tCO2e", elec3034, 169.7);
check("natural gas emissions, tCO2e", gas, 169.7);
const t2429 = elec2429 + gas, t3034 = elec3034 + gas;
check("total emissions on 2024-2029 coefficients", t2429, 507.8);
check("total emissions on 2030-2034 coefficients", t3034, 339.3);

/* limits */
const lim2429 = GSF * F_2429, lim3034 = GSF * F_3034;
const lim3539 = GSF * F_3539, lim4049 = GSF * F_4049;
check("2024-2029 limit, tCO2e", lim2429, 888.3);
check("2030-2034 limit, tCO2e", lim3034, 346.6);
check("2035-2039 limit, tCO2e", lim3539, 237.6);
check("2040-2049 limit, tCO2e", lim4049, 131.9);
check("2024-2029 use as percent of limit", (100 * t2429) / lim2429, 57.2);
check("2024-2029 headroom, tCO2e", lim2429 - t2429, 380.5);
check("2030-2034 use as percent of limit", (100 * t3034) / lim3034, 97.9);
check("2030-2034 margin, tCO2e", lim3034 - t3034, 7.2);

/* how much gas fits under each limit, at the 2030-2034 electricity coefficient */
const gasRoom3034 = lim3034 - elec3034;
const cfRoom3034 = (gasRoom3034 / C_GAS) * 1000 / BTU_PER_CF;
check("gas allowed 2030-2034, cubic feet per square foot", cfRoom3034 / GSF, 35.9, 0.05);
const gasRoom3539 = lim3539 - elec3034;
const cfRoom3539 = (gasRoom3539 / C_GAS) * 1000 / BTU_PER_CF;
check("gas allowed 2035-2039, cubic feet per square foot", cfRoom3539 / GSF, 13.8, 0.05);
check("gas cut needed by 2035, percent", 100 * (1 - cfRoom3539 / GSF / CF_PSF), 59.9, 0.1);

/* penalties */
check("2024-2029 exceedance penalty, dollars", Math.max(0, t2429 - lim2429) * OVER_RATE, 0, 0);
check("2030-2034 exceedance penalty, dollars", Math.max(0, t3034 - lim3034) * OVER_RATE, 0, 0);
const over3539 = t3034 - lim3539;
check("2035-2039 exceedance, tCO2e", over3539, 101.7);
const pen3539 = over3539 * OVER_RATE;
check("2035-2039 exceedance penalty, dollars", pen3539, 27_266, 10);
check("that penalty capitalized at 8 percent", pen3539 / CAP, 340_825, 150);
check("that penalty capitalized, dollars per key", pen3539 / CAP / KEYS, 2_272, 1);

const lateMonth = GSF * LATE_RATE;
check("late emissions report, dollars a month", lateMonth, 45_000, 0);
check("late emissions report, 12 months", lateMonth * 12, 540_000, 0);
check("late emissions report, 12 months, per key", (lateMonth * 12) / KEYS, 3_600, 0);
check("late filing is this many times the 2035 exceedance penalty", (lateMonth * 12) / pen3539, 19.8, 0.1);

/* Washington, same square footage */
check("Washington continuing violation, dollars a year", GSF * 1, 90_000, 0);
check("Washington first penalty plus one year continuing", 5_000 + GSF * 1, 95_000, 0);
check("Washington tier 2 penalty on a 40,000 sf hotel", 40_000 * 0.3, 12_000, 0);

console.log(failures ? `\n${failures} check(s) failed` : "\nall checks passed");
process.exitCode = failures ? 1 : 0;
