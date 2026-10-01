/**
 * THE RATE SHEET.
 *
 * Read this before you edit it.
 *
 * Two kinds of number live on /rates.
 *
 *   1. PUBLIC BENCHMARKS AND PUBLISHED PROGRAM RULES. Treasury yields, SOFR,
 *      Prime, the SBA 504 debenture rate, SBA's maximum allowable 7(a) spread,
 *      the 504 borrower contribution rule in 13 CFR 120.910. Anyone can check
 *      these against the linked source. They ship as `published`.
 *
 *   2. WHAT THE TEAM SEES IN LIVE QUOTES. Spreads, DSCR floors, working LTV
 *      ceilings, points, minimum loan sizes by lender type. Nobody publishes
 *      these. They exist only because the desk sees term sheets.
 *
 * Every cell in group 2 ships as `pending` until a person on this team types
 * in a number they actually observed that month. A rate sheet with two real
 * rows and five honest gaps is worth citing. One with seven invented rows is
 * a liability, and it is the fastest way to lose the credibility this whole
 * page exists to build.
 *
 * TO PUBLISH AN OBSERVED CELL:
 *   { basis: "observed", value: "T+225 to T+275", quoteCount: 6 }
 * The page renders it as "Matthews Hotel Markets observation, September 2026,
 * from 6 quotes". Never a lender name. Never a client or a property.
 *
 * Monthly refresh runbook: geo/08-data.md.
 */

import benchmarksJson from "../../../content/rates/benchmarks.json";
import type {
  Benchmark,
  BenchmarkKey,
  Cell,
  MhdiReading,
  RateEdition,
  RateRow,
} from "./types";

/* ------------------------------------------------------------- benchmarks */

const RAW = benchmarksJson as {
  fetchedAt: string;
  benchmarks: Benchmark[];
};

export const BENCHMARKS: Benchmark[] = RAW.benchmarks;
export const BENCHMARKS_FETCHED_AT = RAW.fetchedAt;

export function benchmark(key: BenchmarkKey): Benchmark | undefined {
  return BENCHMARKS.find((b) => b.key === key);
}

export function benchmarkValue(key: BenchmarkKey): string {
  const b = benchmark(key);
  return b ? `${b.value.toFixed(2)}%` : "Not yet published";
}

const TREASURY_SRC = {
  sourceName:
    "U.S. Department of the Treasury, Daily Treasury Par Yield Curve Rates",
  sourceUrl:
    "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
};

/**
 * What the September 2026 edition published, frozen. The live file in
 * content/rates/benchmarks.json always holds the current month, so an
 * archived edition has to carry its own copy or it silently rewrites itself
 * when the next edition ships. Never edit the numbers below.
 */
const SEPTEMBER_2026_BENCHMARKS: Benchmark[] = [
  {
    key: "prime",
    label: "Prime rate",
    value: 7.0,
    asOf: "2026-09-17",
    sourceName:
      "Prime rate announcements by BNY and PNC, effective September 17, 2026, since confirmed by the Federal Reserve H.15 release and FRED series DPRIME, which both print 7.00% for September 17, 2026",
    sourceUrl:
      "https://www.prnewswire.com/news-releases/bny-increases-prime-lending-rate-to-7-00-302881066.html",
  },
  {
    key: "sofr",
    label: "SOFR",
    value: 3.85,
    asOf: "2026-09-17",
    seriesId: "SOFR",
    sourceName:
      "Federal Reserve Bank of New York, Secured Overnight Financing Rate",
    sourceUrl: "https://www.newyorkfed.org/markets/reference-rates/sofr",
  },
  { key: "ust5", label: "5-year Treasury", value: 4.78, asOf: "2026-09-17", seriesId: "DGS5", ...TREASURY_SRC },
  { key: "ust7", label: "7-year Treasury", value: 4.86, asOf: "2026-09-17", seriesId: "DGS7", ...TREASURY_SRC },
  { key: "ust10", label: "10-year Treasury", value: 4.94, asOf: "2026-09-17", seriesId: "DGS10", ...TREASURY_SRC },
  {
    key: "sba504",
    label: "SBA 504 debenture, 25-year",
    value: 6.54,
    asOf: "2026-09-10",
    sourceName:
      "SBA 504 debenture pricing published by NADCO and republished by CDC lenders (SomerCor, CDC Small Business Finance)",
    sourceUrl: "https://somercor.com/september-2026-sba-504-interest-rates/",
  },
];

/* --------------------------------------------------------- the named index */

export const MHDI_NAME = "Matthews Hotel Debt Index";
export const MHDI_ABBR = "MHDI";

/**
 * The definition. It is deliberately narrow: one loan, one structure, one
 * lender type. A composite that averages a bank quote against a bridge quote
 * measures nothing. Publish this exact loan every month, or publish nothing.
 */
export const MHDI_DEFINITION =
  "The indicative all-in fixed coupon, in percent, on a 10-year permanent first mortgage for a stabilized, branded select-service hotel in a top-50 U.S. market, at 65% loan to value, 1.35x debt service coverage, 25-year amortization, non-recourse, from a conventional bank or credit union lender, as quoted to Matthews Hotel Markets during the calendar month.";

export const MHDI_RULES = [
  "One structure only. If a quote does not match the definition, it does not go in the index.",
  "Median of the quotes received that month, not an average. One outlier quote should not move a monthly series.",
  "Minimum three independent quotes from three separate lenders, or the month publishes as no reading.",
  "No lender is named, on the page or in the underlying file. The index reports the market, not a relationship.",
  "No client, property, or transaction detail is published, ever.",
  "History is never backfilled. The series starts the month it starts, and the page says so.",
  "A revision is published as a revision, with the date and the reason, not edited in place.",
];

/* ---------------------------------------------------------------- helpers */

const pending = (awaits: string): Cell => ({ basis: "pending", awaits });

const published = (value: string, sources: string[], note?: string): Cell => ({
  basis: "published",
  value,
  sources,
  note,
});

/** Every priced cell on a lender-type row the team has not published yet. */
function pendingPricedRow(
  base: Pick<
    RateRow,
    "key" | "lenderType" | "summary" | "index" | "indexLabel" | "notes"
  >,
): RateRow {
  const who = base.lenderType.toLowerCase();
  return {
    ...base,
    spread: pending(`Spread over the index on ${who} quotes received this month.`),
    allIn: pending(`Resulting coupon range on ${who} quotes received this month.`),
    maxLtv: pending(`Highest leverage actually quoted by ${who} lenders this month.`),
    dscrFloor: pending(`Coverage test actually applied by ${who} lenders this month.`),
    termAmort: pending(`Term and amortization actually offered by ${who} lenders this month.`),
    recourse: pending(`Recourse actually required by ${who} lenders this month.`),
    minLoan: pending(`Smallest loan ${who} lenders quoted this month.`),
  };
}

/* ------------------------------------------------------------------- rows */

const SEPTEMBER_2026_ROWS: RateRow[] = [
  {
    key: "sba-7a",
    lenderType: "SBA 7(a)",
    summary:
      "Government-guaranteed bank loan for an owner-operator. Prime-indexed, fully amortizing.",
    index: ["prime"],
    indexLabel: "Prime",
    spread: published(
      "Prime + 3.00% maximum",
      ["sba-7a-terms"],
      "SBA's maximum allowable spread on a variable-rate 7(a) loan over $350,000. It is a ceiling set by the agency, not a quote, and a good lender prices inside it.",
    ),
    allIn: published(
      "10.00% maximum allowable",
      ["sba-7a-terms", "bny-prime-2026-09", "pnc-prime-2026-09", "fred-dprime", "fed-h15", "fomc-2026-09"],
      "Prime 7.00%, effective September 17, 2026, as announced by BNY and PNC after the FOMC raised the target range 25 basis points on September 16, plus the 3.00% cap. The Federal Reserve's H.15 release and the FRED DPRIME series have since printed 7.00% for September 17, confirming the announcements; both were re-read on September 21, 2026. Corrected September 18, 2026: this cell first read 9.75%, on the 6.75% Prime.",
    ),
    maxLtv: pending(
      "SBA publishes no LTV cap for 7(a). The working ceiling is the lender's, and only live quotes show it.",
    ),
    dscrFloor: pending(
      "SBA publishes no 7(a) coverage floor. Lender-set, and only live quotes show it.",
    ),
    termAmort: published(
      "Up to 25 years, fully amortizing",
      ["sba-7a-terms"],
      "SBA's published maximum maturity for real estate, plus any additional period needed to complete construction.",
    ),
    recourse: published(
      "Recourse",
      ["sba-sop-50-10"],
      "SBA loans carry a personal guaranty from the principals of the borrowing entity. The ownership threshold and the guaranty form are set in SBA's SOP 50 10, linked in the sources below. We link the governing document rather than paraphrase the clause, because the SOP is on its 8.1 edition effective October 1, 2026 and the threshold is the kind of detail that moves between editions.",
    ),
    minLoan: pending(
      "Lender-set. SBA publishes a $5 million program maximum, not a minimum.",
    ),
    notes:
      "Best fit for an owner-operator buying a single hotel. The $5 million cap is the binding constraint on most hotel deals.",
  },
  {
    key: "sba-504",
    lenderType: "SBA 504",
    summary:
      "Bank first lien plus a fixed-rate CDC second lien funded by a monthly debenture sale.",
    index: ["sba504"],
    indexLabel: "SBA 504 debenture",
    spread: published(
      "Not spread-priced",
      ["nadco-504-debenture"],
      "The CDC second lien is priced by the monthly debenture sale, not as a spread over an index. The bank first lien prices separately and is not published anywhere.",
    ),
    allIn: published(
      "6.54% on the 25-year debenture",
      ["nadco-504-debenture", "cdcloans-504-debenture"],
      "Priced September 10, 2026. Includes the CDC, SBA and central servicing agent fees, so it is the all-in effective rate on the CDC portion for the life of the loan. The 20-year debenture priced at 6.53% and the 10-year at 6.60%. This is the only fully published all-in coupon on the sheet.",
    ),
    maxLtv: published(
      "85% of project cost",
      ["cfr-120-910", "sba-sop-50-10"],
      "SBA's SOP 50 10 8 lists hotels as Limited or Special Purpose Property, so 13 CFR 120.910 requires a borrower contribution of at least 15%. If the operating business is also under two years old, the contribution rises to 20% and the ceiling falls to 80%.",
    ),
    dscrFloor: pending(
      "Set by the CDC and the first-lien bank, not by regulation. Only live quotes show it.",
    ),
    termAmort: published(
      "10, 20 or 25 year debenture, fully amortizing",
      ["sba-504-program"],
      "The bank first lien runs on its own term, which is usually shorter.",
    ),
    recourse: published(
      "Recourse",
      ["sba-sop-50-10"],
      "Same guaranty requirement as 7(a). Section A of SOP 50 10 covers core requirements for both programs.",
    ),
    minLoan: pending(
      "CDC-set. SBA publishes a $25,000 minimum debenture and a $5 million maximum for a hotel, not a minimum total loan.",
    ),
    notes:
      "The fixed-rate second lien is the reason to look at 504 instead of 7(a): it locks up to 35% of a hotel's capital stack (40% on an ordinary property) for 25 years at a published rate.",
  },
  pendingPricedRow({
    key: "bank-conventional",
    lenderType: "Bank and credit union, conventional",
    summary:
      "Balance-sheet lender, usually local or regional, usually with a deposit relationship attached.",
    index: ["prime", "ust5"],
    indexLabel: "Prime or 5-year Treasury",
    notes:
      "The most common source of hotel debt under $15 million and the structure the Matthews Hotel Debt Index measures.",
  }),
  pendingPricedRow({
    key: "cmbs",
    lenderType: "CMBS",
    summary:
      "Fixed-rate, non-recourse, securitized. Priced as a spread over the matched-term Treasury.",
    index: ["ust5", "ust10"],
    indexLabel: "5- and 10-year Treasury",
    notes:
      "Defeasance or yield maintenance on prepayment. The 10-year Treasury on this sheet is the index a CMBS quote is struck against.",
  }),
  pendingPricedRow({
    key: "life-company",
    lenderType: "Life company",
    summary:
      "Insurance company balance sheet. Lowest coupons, lowest leverage, the most selective on asset quality.",
    index: ["ust5", "ust7", "ust10"],
    indexLabel: "5-, 7- and 10-year Treasury",
    notes:
      "Rarely competitive on select-service under $10 million. Worth a call on a full-service or resort asset in a market a life company already knows.",
  }),
  pendingPricedRow({
    key: "bridge",
    lenderType: "Bridge and debt fund",
    summary:
      "Floating-rate, short-term, for a hotel that is not stabilized: a PIP, a repositioning, a lease-up.",
    index: ["sofr"],
    indexLabel: "SOFR",
    notes:
      "Almost always requires a purchased rate cap. The cap strike and its cost are part of the real cost of the loan and belong in any honest comparison, so this row will carry them once the team publishes.",
  }),
  pendingPricedRow({
    key: "construction",
    lenderType: "Construction",
    summary:
      "Ground-up or substantial renovation, funded on draws, sized to cost rather than to value.",
    index: ["prime", "sofr"],
    indexLabel: "Prime or SOFR",
    notes:
      "Sized on loan to cost with a completion guaranty. Recourse burns off at stabilization on the better structures.",
  }),
];

/**
 * October 2026. The SBA rows are re-cited to SOP 50 10 8.1, which took effect
 * October 1, 2026 and is the governing edition from today. All three facts the
 * 504 row rests on were re-read in 8.1 and none of them changed: a hotel is
 * still a Limited or Special Purpose Property, the contribution is still
 * 15% (20% if the business is also new), and the hotel debenture cap is still
 * $5 million. Page numbers below are SBA's own, from the table of contents of
 * the 8.1 document.
 */
const OCTOBER_2026_ROWS: RateRow[] = [
  {
    key: "sba-7a",
    lenderType: "SBA 7(a)",
    summary:
      "Government-guaranteed bank loan for an owner-operator. Prime-indexed, fully amortizing.",
    index: ["prime"],
    indexLabel: "Prime",
    spread: published(
      "Prime + 3.00% maximum",
      ["sba-7a-terms", "sba-sop-50-10"],
      "SBA's maximum allowable spread on a variable-rate 7(a) loan over $350,000. SOP 50 10 8.1, Appendix 18, page 397, sets the same four tiers as the prior edition: Prime plus 6.5% at $50,000 and under, plus 6.0% to $250,000, plus 4.5% to $350,000, and plus 3.0% above that. It is a ceiling set by the agency, not a quote, and a good lender prices inside it.",
    ),
    allIn: published(
      "10.00% maximum allowable",
      ["sba-7a-terms", "sba-sop-50-10", "fed-h15", "fred-dprime", "fomc-calendar-2026"],
      "Prime 7.00% plus the 3.00% cap. Prime has been 7.00% since September 17, 2026 and has not moved since: the Federal Reserve's H.15 release prints 7.00% for September 23 through 29, 2026 and FRED series DPRIME prints 7.00% for September 28. The FOMC has not met since September 16, 2026 and its next scheduled meeting is October 27 and 28, so nothing has happened that would move Prime between the two editions. SOP 50 10 8.1, Appendix 18, page 397, sets the base rate for a variable-rate loan as the one in effect on the first business day of the month in which SBA assigns the loan number, so 7.00% is the base rate for applications numbered in October 2026.",
    ),
    maxLtv: pending(
      "SBA publishes no LTV cap for 7(a). The working ceiling is the lender's, and only live quotes show it.",
    ),
    dscrFloor: pending(
      "SBA publishes no 7(a) coverage floor. Lender-set, and only live quotes show it.",
    ),
    termAmort: published(
      "Up to 25 years, fully amortizing",
      ["sba-7a-terms", "sba-sop-50-10"],
      "SOP 50 10 8.1, Appendix 17, page 392: a real estate loan must not exceed 25 years, plus any additional period reasonably necessary for construction or renovation. SBA does not allow balloon payments.",
    ),
    recourse: published(
      "Recourse",
      ["sba-sop-50-10", "cfr-120-160"],
      "SOP 50 10 8.1, Section A, Chapter 5, Paragraph A, page 93: every loan must be guaranteed by at least one individual or entity, and any owner of 20% or more, direct or indirect, must provide an unlimited full guaranty. A spouse owning less than 20% must guarantee in full when the couple's combined interest reaches 20%. The threshold is unchanged from the prior SOP edition.",
    ),
    minLoan: pending(
      "Lender-set. SOP 50 10 8.1, Section B, Chapter 1, page 117, sets a $5 million program maximum for a Standard 7(a) loan, not a minimum.",
    ),
    notes:
      "Best fit for an owner-operator buying a single hotel. The $5 million cap is the binding constraint on most hotel deals.",
  },
  {
    key: "sba-504",
    lenderType: "SBA 504",
    summary:
      "Bank first lien plus a fixed-rate CDC second lien funded by a monthly debenture sale.",
    index: ["sba504"],
    indexLabel: "SBA 504 debenture",
    spread: published(
      "Not spread-priced",
      ["nadco-504-debenture"],
      "The CDC second lien is priced by the monthly debenture sale, not as a spread over an index. The bank first lien prices separately and is not published anywhere.",
    ),
    allIn: published(
      "6.54% on the 25-year debenture",
      ["nadco-504-debenture", "cdcloans-504-debenture"],
      "Priced September 10, 2026, and still the latest published pricing: the October debenture prices on October 8, 2026, after this edition. Includes the CDC, SBA and central servicing agent fees, so it is the all-in effective rate on the CDC portion for the life of the loan. The 20-year debenture priced at 6.53% and the 10-year at 6.60%. This is the only fully published all-in coupon on the sheet. It sits 125 basis points above the 10-year Treasury this month, down from 160 basis points in September, because the Treasury rose 35 basis points and the debenture has not repriced since September 10.",
    ),
    maxLtv: published(
      "85% of project cost",
      ["cfr-120-910", "sba-sop-50-10"],
      "SOP 50 10 8.1, Section C, Chapter 1, Paragraph E.1.c, page 244, lists hotels, motels and other lodging facilities as a Limited or Special Purpose Property, so 13 CFR 120.910 requires a borrower contribution of at least 15% and the debenture funds no more than 35% of the project. If the operating business is also under two years old the contribution rises to 20%, the debenture funds no more than 30%, and the ceiling falls to 80%. Re-read in the 8.1 edition on October 1, 2026; unchanged.",
    ),
    dscrFloor: pending(
      "Set by the CDC and the first-lien bank, not by regulation. Only live quotes show it.",
    ),
    termAmort: published(
      "10, 20 or 25 year debenture, fully amortizing",
      ["sba-504-program", "sba-sop-50-10"],
      "SOP 50 10 8.1, Section C, Chapter 1, Paragraph D.2, page 243: 10, 20 or 25 years on the remaining useful life of the property, with 25 years the maximum for real estate. The bank first lien runs on its own term, which is usually shorter, and must be at least 10 years when the 504 loan runs 20 or 25.",
    ),
    recourse: published(
      "Recourse",
      ["sba-sop-50-10", "cfr-120-160"],
      "Same guaranty requirement as 7(a), from the same paragraph: Section A, Chapter 5, Paragraph A, page 93, covers core requirements for both programs.",
    ),
    minLoan: pending(
      "CDC-set. SOP 50 10 8.1, Section C, Chapter 1, Paragraph D.1, page 243, sets a $25,000 minimum debenture and a $5 million maximum gross debenture per small business concern and its affiliates. The $5.5 million figure applies only to eligible energy public policy projects and to small manufacturers in NAICS 31 to 33, and a hotel is neither.",
    ),
    notes:
      "The fixed-rate second lien is the reason to look at 504 instead of 7(a): it locks up to 35% of a hotel's capital stack (40% on an ordinary property) for 25 years at a published rate.",
  },
  pendingPricedRow({
    key: "bank-conventional",
    lenderType: "Bank and credit union, conventional",
    summary:
      "Balance-sheet lender, usually local or regional, usually with a deposit relationship attached.",
    index: ["prime", "ust5"],
    indexLabel: "Prime or 5-year Treasury",
    notes:
      "The most common source of hotel debt under $15 million and the structure the Matthews Hotel Debt Index measures.",
  }),
  pendingPricedRow({
    key: "cmbs",
    lenderType: "CMBS",
    summary:
      "Fixed-rate, non-recourse, securitized. Priced as a spread over the matched-term Treasury.",
    index: ["ust5", "ust10"],
    indexLabel: "5- and 10-year Treasury",
    notes:
      "Defeasance or yield maintenance on prepayment. The 10-year Treasury on this sheet is the index a CMBS quote is struck against, and it rose 35 basis points between the September and October editions.",
  }),
  pendingPricedRow({
    key: "life-company",
    lenderType: "Life company",
    summary:
      "Insurance company balance sheet. Lowest coupons, lowest leverage, the most selective on asset quality.",
    index: ["ust5", "ust7", "ust10"],
    indexLabel: "5-, 7- and 10-year Treasury",
    notes:
      "Rarely competitive on select-service under $10 million. Worth a call on a full-service or resort asset in a market a life company already knows.",
  }),
  pendingPricedRow({
    key: "bridge",
    lenderType: "Bridge and debt fund",
    summary:
      "Floating-rate, short-term, for a hotel that is not stabilized: a PIP, a repositioning, a lease-up.",
    index: ["sofr"],
    indexLabel: "SOFR",
    notes:
      "Almost always requires a purchased rate cap. The cap strike and its cost are part of the real cost of the loan and belong in any honest comparison, so this row will carry them once the team publishes.",
  }),
  pendingPricedRow({
    key: "construction",
    lenderType: "Construction",
    summary:
      "Ground-up or substantial renovation, funded on draws, sized to cost rather than to value.",
    index: ["prime", "sofr"],
    indexLabel: "Prime or SOFR",
    notes:
      "Sized on loan to cost with a completion guaranty. Recourse burns off at stabilization on the better structures.",
  }),
];

/* --------------------------------------------------------------- editions */

const SEPTEMBER_2026_MHDI: MhdiReading = {
  period: "2026-09",
  label: "September 2026",
  value: null,
  quoteCount: null,
  note: "First publication month. The series starts here. We do not have a quote log going back before this page existed, and we are not going to reconstruct one from memory, so there is no history to show yet.",
};

const OCTOBER_2026_MHDI: MhdiReading = {
  period: "2026-10",
  label: "October 2026",
  value: null,
  quoteCount: null,
  note: "No reading. The index publishes only from quotes this team typed in, and none have been supplied for October. A month without three independent quotes on the exact structure in the definition publishes as no reading rather than as a thinner number, and the series is never backfilled, so this month will stay blank even after the quote log starts.",
};

export const EDITIONS: RateEdition[] = [
  {
    slug: "2026-10",
    label: "October 2026",
    publishedAt: "2026-10-01",
    nextRefresh: "2026-11-02",
    directAnswer:
      "As of September 30, 2026, the 10-year Treasury is 5.29%, the 7-year is 5.19%, the 5-year is 5.09%, and SOFR is 3.90%. Prime is 7.00%, unchanged since September 17. SBA caps a variable-rate 7(a) loan over $350,000 at Prime plus 3.00%, which is 10.00% today. The 25-year SBA 504 debenture priced at 6.54% on September 10 and next prices October 8. Rows that depend on what lenders are actually quoting are marked not yet published.",
    benchmarks: BENCHMARKS,
    rows: OCTOBER_2026_ROWS,
    changelog: [
      "The 10-year Treasury rose 35 basis points, from 4.94% on September 17 to 5.29% on September 30, 2026. Over the full calendar month it rose 54 basis points, from 4.75% on August 31.",
      "The 7-year Treasury rose 33 basis points, from 4.86% to 5.19%, and the 5-year rose 31 basis points, from 4.78% to 5.09%, over the same September 17 to September 30 stretch.",
      "The 5s10s curve steepened 4 basis points since the September edition, from 16 to 20 basis points, so the cost of choosing a 10-year fixed term over a 5-year went up slightly. Measured against August 31 the curve is 6 basis points flatter.",
      "SOFR rose 5 basis points, from 3.85% for September 17 to 3.90% for September 30, 2026. Over the calendar month it rose 22 basis points from 3.68% on August 31.",
      "Prime did not move. It has been 7.00% since September 17, 2026, and the FOMC has not met since September 16; the next meeting is October 27 and 28. The SBA 7(a) maximum allowable rate on a variable-rate loan over $350,000 therefore stays at 10.00%. This edition cites the Federal Reserve's own H.15 release and FRED series DPRIME for the 7.00%, rather than the bank announcements the September edition had to use before the Fed had printed a post-decision value.",
      "The 25-year SBA 504 debenture is unchanged at 6.54%, because September 10 is still the latest pricing: the October debenture prices on October 8, 2026, a week after this edition. The gap between the debenture and the 10-year Treasury narrowed from 160 to 125 basis points, entirely because the Treasury moved.",
      "SBA's SOP 50 10 8.1 took effect October 1, 2026 and is now the governing edition. All three 504 facts this sheet depends on were re-read in it and none changed: hotels, motels and other lodging facilities are still listed as a Limited or Special Purpose Property (Section C, Chapter 1, Paragraph E.1.c, page 244), the borrower contribution is still at least 15% and 20% when the business is also new (same paragraph, applying 13 CFR 120.910), and the maximum gross debenture for a hotel is still $5 million, with $5.5 million reserved for energy projects and small manufacturers (Section C, Chapter 1, Paragraph D.1, page 243). The 7(a) rate tiers in Appendix 18, page 397, are also unchanged.",
      "No observed cell moved, because none has been published yet. The Matthews Hotel Debt Index has no October reading for the same reason: fewer than three independent quotes on the index structure.",
    ],
    mhdi: OCTOBER_2026_MHDI,
  },
  {
    slug: "2026-09",
    label: "September 2026",
    publishedAt: "2026-09-17",
    nextRefresh: "2026-10-05",
    directAnswer:
      "As of September 17, 2026, the 10-year Treasury is 4.94%, the 5-year is 4.78%, SOFR is 3.85%, and Prime is 7.00%. SBA caps a variable-rate 7(a) loan over $350,000 at Prime plus 3.00%, which is 10.00% today. The 25-year SBA 504 debenture priced at 6.54% on September 10. Rows that depend on what lenders are actually quoting are marked not yet published.",
    modifiedAt: "2026-09-21",
    corrections: [
      {
        date: "2026-09-18",
        text: "Corrected September 18, 2026: Prime moved to 7.00% on September 17 after the Fed's September 16 decision, so the SBA 7(a) maximum is 10.00%; SOFR printed 3.85% for September 17.",
        sources: [
          "fomc-2026-09",
          "bny-prime-2026-09",
          "pnc-prime-2026-09",
          "fred-dprime",
          "fred-dfedtaru",
          "sba-7a-terms",
          "nyfed-sofr",
        ],
      },
      {
        date: "2026-09-21",
        text: "Sourcing note, September 21, 2026: no value on this edition changed. The September 17 Prime of 7.00% was first published here on the BNY and PNC announcements, because the Federal Reserve had not yet printed a post-hike value. The H.15 release and the FRED DPRIME series have since printed 7.00% for September 17, and the notes below now say so.",
        sources: ["fed-h15", "fred-dprime"],
      },
    ],
    benchmarks: SEPTEMBER_2026_BENCHMARKS,
    rows: SEPTEMBER_2026_ROWS,
    changelog: [
      "The FOMC raised the target range for the federal funds rate 25 basis points to 3-3/4 to 4 percent on September 16, 2026, on a 12 to 0 vote. The effective target range upper limit moved to 4.00% on September 17.",
      "Prime moved from 6.75% to 7.00% effective September 17, as announced by BNY and PNC. That lifts the SBA 7(a) maximum allowable rate on a variable-rate loan over $350,000 from 9.75% to 10.00%. The Federal Reserve's H.15 release and the FRED DPRIME series have since printed 7.00% for September 17, so the announcements now carry a Federal Reserve source as well.",
      "The 5-year Treasury rose 29 basis points, from 4.49% on August 31 to 4.78% on September 17.",
      "The 10-year Treasury rose 19 basis points, from 4.75% on August 31 to 4.94% on September 17. The 5s10s curve flattened by 10 basis points over the same stretch.",
      "SOFR drifted from 3.68% on August 31 to 3.62% on September 16, then printed 3.85% for September 17, the first day under the new target range. That is 17 basis points above August 31, so floating-rate debt now costs more than it did at the start of the month, along with fixed-rate term debt.",
      "The 25-year SBA 504 debenture priced at 6.54% on September 10, which is inside the 10-year Treasury. For a qualifying owner-operator it is the cheapest fixed-rate money on this sheet.",
    ],
    mhdi: SEPTEMBER_2026_MHDI,
  },
];

export function latestEdition(): RateEdition {
  return EDITIONS[0];
}

export function getEdition(slug: string): RateEdition | undefined {
  return EDITIONS.find((e) => e.slug === slug);
}

/** Every MHDI reading, oldest first, for the history chart. */
export function mhdiHistory(): MhdiReading[] {
  return [...EDITIONS].reverse().map((e) => e.mhdi);
}

/** Counts used in the page's own honesty disclosure. */
export function cellCounts(edition: RateEdition) {
  let publishedCount = 0;
  let observedCount = 0;
  let pendingCount = 0;
  const fields: (keyof RateRow)[] = [
    "spread",
    "allIn",
    "maxLtv",
    "dscrFloor",
    "termAmort",
    "recourse",
    "minLoan",
  ];
  for (const row of edition.rows) {
    for (const f of fields) {
      const cell = row[f] as Cell;
      if (cell.basis === "published") publishedCount++;
      else if (cell.basis === "observed") observedCount++;
      else pendingCount++;
    }
  }
  return {
    published: publishedCount,
    observed: observedCount,
    pending: pendingCount,
    total: publishedCount + observedCount + pendingCount,
  };
}

/** Source ids actually cited by an edition, so the page lists only real ones. */
export function citedSourceIds(edition: RateEdition): string[] {
  const ids = new Set<string>();
  for (const b of edition.benchmarks) {
    if (b.key === "sba504") {
      ids.add("nadco-504-debenture");
      ids.add("cdcloans-504-debenture");
    }
  }
  ids.add("treasury-yield-curve");
  ids.add("nyfed-sofr");
  ids.add("fred-dprime");
  for (const c of edition.corrections ?? []) c.sources.forEach((s) => ids.add(s));
  const fields: (keyof RateRow)[] = [
    "spread",
    "allIn",
    "maxLtv",
    "dscrFloor",
    "termAmort",
    "recourse",
    "minLoan",
  ];
  for (const row of edition.rows) {
    for (const f of fields) {
      const cell = row[f] as Cell;
      if (cell.basis === "published") cell.sources.forEach((s) => ids.add(s));
    }
  }
  return [...ids];
}

/** The suggested citation string, rendered in the "Cite this" block. */
export function citationString(edition: RateEdition, siteUrl: string): string {
  return `Matthews Hotel Markets. "Hotel Loan Rate Sheet, ${edition.label}." ${siteUrl}/rates. Published ${edition.publishedAt}.`;
}
