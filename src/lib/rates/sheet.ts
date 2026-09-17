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
      "9.75% maximum allowable",
      ["sba-7a-terms", "fred-dprime", "fomc-2026-09"],
      "Prime 6.75% (last published observation, September 15, 2026) plus the 3.00% cap. The FOMC raised the target range 25 basis points on September 16, so expect 10.00% once Prime prints again.",
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
      ["cfr-120-910"],
      "A hotel is a limited or special purpose property, so 13 CFR 120.910 requires a borrower contribution of at least 15%. If the operating business is also under two years old, the contribution rises to 20% and the ceiling falls to 80%.",
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
      "CDC-set. SBA publishes a $5.5 million maximum debenture, not a minimum.",
    ),
    notes:
      "The fixed-rate second lien is the reason to look at 504 instead of 7(a): it locks 40% of the capital stack for 25 years at a published rate.",
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

/* --------------------------------------------------------------- editions */

const SEPTEMBER_2026_MHDI: MhdiReading = {
  period: "2026-09",
  label: "September 2026",
  value: null,
  quoteCount: null,
  note: "First publication month. The series starts here. We do not have a quote log going back before this page existed, and we are not going to reconstruct one from memory, so there is no history to show yet.",
};

export const EDITIONS: RateEdition[] = [
  {
    slug: "2026-09",
    label: "September 2026",
    publishedAt: "2026-09-17",
    nextRefresh: "2026-10-05",
    directAnswer:
      "As of September 17, 2026, the 10-year Treasury is 4.94%, the 5-year is 4.78%, SOFR is 3.62%, and Prime is 6.75%. SBA caps a variable-rate 7(a) loan over $350,000 at Prime plus 3.00%, which is 9.75% today. The 25-year SBA 504 debenture priced at 6.54% on September 10. Rows that depend on what lenders are actually quoting are marked not yet published.",
    rows: SEPTEMBER_2026_ROWS,
    changelog: [
      "The FOMC raised the target range for the federal funds rate 25 basis points to 3-3/4 to 4 percent on September 16, 2026, on a 12 to 0 vote. The effective target range upper limit moved to 4.00% on September 17.",
      "Prime still reads 6.75% here because September 15 is the most recent published observation in the Federal Reserve's series. It has not printed since the meeting. Expect 7.00%, and expect the SBA 7(a) maximum allowable rate to follow it to 10.00%.",
      "The 5-year Treasury rose 29 basis points, from 4.49% on August 31 to 4.78% on September 17.",
      "The 10-year Treasury rose 19 basis points, from 4.75% on August 31 to 4.94% on September 17. The 5s10s curve flattened by 10 basis points over the same stretch.",
      "SOFR fell 6 basis points, from 3.68% on August 31 to 3.62% on September 16. Short-term floating debt got marginally cheaper while fixed-rate term debt got more expensive.",
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
  for (const b of BENCHMARKS) {
    if (b.key === "sba504") {
      ids.add("nadco-504-debenture");
      ids.add("cdcloans-504-debenture");
    }
  }
  ids.add("treasury-yield-curve");
  ids.add("nyfed-sofr");
  ids.add("fred-dprime");
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
