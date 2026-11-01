/**
 * Recomputes every derived figure the /rates rate sheet and the pages that
 * quote it publish, from the published inputs only, and then greps the repo
 * to confirm the strings on the pages match the arithmetic.
 *
 *   node scripts/check-rates-math.mjs
 *
 * Published inputs, each read at its publisher on 2026-11-01:
 *   - U.S. Treasury, Daily Treasury Par Yield Curve Rates, 2026 CSV:
 *     October 30, 2026 and September 30, 2026 rows;
 *   - Federal Reserve Bank of New York, SOFR: October 29, 2026 and the
 *     September 30, 2026 reading the prior edition published;
 *   - Federal Reserve H.15, bank prime loan rate: 7.00% for October 23
 *     through 29, 2026, confirmed in FRED series DPRIME through October 27;
 *   - SBA 504 debenture, 25-year, priced October 8, 2026 (SomerCor and CDC
 *     Small Business Finance, republishing NADCO pricing), and the
 *     September 10, 2026 pricing the prior edition published;
 *   - SBA's maximum allowable 7(a) spread over $350,000, Prime plus 3.00%
 *     (SOP 50 10 8.1, Appendix 18, p. 397).
 *
 * The $8,000,000 bridge loan, the 3.50% assumed spread and the $4,000,000
 * prime-based balance are assumptions of the hypotheticals on the glossary
 * pages, not published figures.
 */
import { readFileSync } from "node:fs";

let failures = 0;
const check = (label, actual, expected, tol = 1e-9) => {
  const ok = Math.abs(actual - expected) <= tol;
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${actual} vs ${expected}`);
};
const has = (file, needle) => {
  const ok = readFileSync(file, "utf8").includes(needle);
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${file} contains: ${needle}`);
};

/* ---------------------------------------------- published inputs */
const OCT30 = { ust2: 4.56, ust3: 4.65, ust5: 4.71, ust7: 4.80, ust10: 4.94, ust20: 5.34, ust30: 5.31 };
const SEP30 = { ust2: 4.88, ust5: 5.09, ust7: 5.19, ust10: 5.29, ust20: 5.68, ust30: 5.64 };
const SEP17_UST10 = 4.94;
const SOFR_OCT29 = 3.94, SOFR_SEP30 = 3.90;
const PRIME = 7.00, SBA_7A_CAP_SPREAD = 3.00;
const DEB_OCT8 = 6.97, DEB_SEP10 = 6.54;

const bps = (a, b) => Math.round((a - b) * 100);

/* ---------------------------------------------- the benchmark file */
const bench = JSON.parse(readFileSync("content/rates/benchmarks.json", "utf8")).benchmarks;
const bv = (k) => bench.find((b) => b.key === k).value;
const ba = (k) => bench.find((b) => b.key === k).asOf;
check("benchmarks.json ust10", bv("ust10"), OCT30.ust10);
check("benchmarks.json ust7", bv("ust7"), OCT30.ust7);
check("benchmarks.json ust5", bv("ust5"), OCT30.ust5);
check("benchmarks.json sofr", bv("sofr"), SOFR_OCT29);
check("benchmarks.json prime", bv("prime"), PRIME);
check("benchmarks.json sba504", bv("sba504"), DEB_OCT8);
for (const [k, d] of [["ust10","2026-10-30"],["ust7","2026-10-30"],["ust5","2026-10-30"],["sofr","2026-10-29"],["prime","2026-10-29"],["sba504","2026-10-08"]]) {
  const ok = ba(k) === d;
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} benchmarks.json ${k} asOf: ${ba(k)} vs ${d}`);
}

/* ---------------------------------------------- month-over-month moves */
check("10-year Treasury change, Sep 30 to Oct 30, bp", bps(OCT30.ust10, SEP30.ust10), -35);
check("7-year Treasury change, bp", bps(OCT30.ust7, SEP30.ust7), -39);
check("5-year Treasury change, bp", bps(OCT30.ust5, SEP30.ust5), -38);
check("2-year Treasury change, bp", bps(OCT30.ust2, SEP30.ust2), -32);
check("SOFR change, Sep 30 to Oct 29, bp", bps(SOFR_OCT29, SOFR_SEP30), 4);
check("25-year 504 debenture change, Sep 10 to Oct 8, bp", bps(DEB_OCT8, DEB_SEP10), 43);

/* ---------------------------------------------- the curve */
check("5s10s on Oct 30, bp", bps(OCT30.ust10, OCT30.ust5), 23);
check("5s10s on Sep 30, bp", bps(SEP30.ust10, SEP30.ust5), 20);
check("5s10s steepening over the month, bp", bps(OCT30.ust10, OCT30.ust5) - bps(SEP30.ust10, SEP30.ust5), 3);

/* the 10-year round trip: Oct 30 is back where Sep 17 was */
check("10-year Treasury, Oct 30 less Sep 17, bp", bps(OCT30.ust10, SEP17_UST10), 0);

/* ---------------------------------------------- SBA */
check("SBA 7(a) maximum allowable rate, percent", PRIME + SBA_7A_CAP_SPREAD, 10.00);
check("504 debenture over the 10-year Treasury, Oct 30, bp", bps(DEB_OCT8, OCT30.ust10), 203);
check("504 debenture over the 10-year Treasury, prior edition, bp", bps(DEB_SEP10, SEP30.ust10), 125);

/* ---------------------------------------------- the SOFR worked example */
const LOAN = 8_000_000, ASSUMED_SPREAD = 3.50, BUMP = 0.25;
const rate = SOFR_OCT29 + ASSUMED_SPREAD;
const interest = (rate / 100) * LOAN;
check("bridge example all-in rate, percent", rate, 7.44);
check("bridge example annual interest, dollars", interest, 595_200);
check("bridge example interest on a 25 bp rise, dollars", (BUMP / 100) * LOAN, 20_000);
has("src/lib/data/glossary/sofr.ts", "3.94% + 3.50% = 7.44%");
has("src/lib/data/glossary/sofr.ts", "0.0744 x $8,000,000 = $595,200");

/* ---------------------------------------------- the prime worked example */
const PRIME_BAL = 4_000_000;
check("prime example interest on a 25 bp move, dollars", (0.25 / 100) * PRIME_BAL, 10_000);
has("src/lib/data/glossary/prime-rate.ts", "7.00% + 3.00% = 10.00%");

/* ---------------------------------------------- the 7(a) guaranty example */
check("7(a) guaranty on a $5,000,000 loan, dollars", 0.75 * 5_000_000, 3_750_000);
has("src/lib/data/glossary/sba-7a.ts", "7.00% + 3.00% = 10.00%");

console.log(failures ? `\n${failures} FAILED` : "\nall rate-sheet arithmetic checks passed");
process.exit(failures ? 1 : 0);
