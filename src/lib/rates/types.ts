/**
 * Types for the Matthews Hotel Markets rate sheet.
 *
 * The one rule this file exists to enforce: every published cell carries its
 * basis. A cell is either a `published` number we can point at a primary
 * source for, or it is `pending` and renders as "Not yet published". There is
 * no third state, and there is no way to type a number into this structure
 * without also typing where it came from.
 */

/** A public benchmark, straight from its administrator. */
export type BenchmarkKey =
  | "prime"
  | "sofr"
  | "ust5"
  | "ust7"
  | "ust10"
  | "sba504";

export type Benchmark = {
  key: BenchmarkKey;
  label: string;
  /** Percent, e.g. 4.94 means 4.94%. */
  value: number;
  /** ISO date of the observation itself, not the day we fetched it. */
  asOf: string;
  seriesId?: string;
  sourceName: string;
  sourceUrl: string;
};

export type BenchmarksFile = {
  fetchedAt: string;
  benchmarks: Benchmark[];
};

/**
 * `published` = a public benchmark or a published program rule. It has a
 * source and an as-of date, and a reader can check it.
 *
 * `observed` = a number that only exists because the team saw it in live
 * quotes that month. It is labeled as an observation on the page.
 *
 * `pending` = we do not have it yet. It renders as "Not yet published" and
 * never as a number, a range, an estimate, or a dash that reads like zero.
 */
export type Cell =
  | {
      basis: "published";
      value: string;
      /** Ids into RATE_SOURCES. */
      sources: string[];
      note?: string;
    }
  | {
      basis: "observed";
      value: string;
      /** Number of quotes behind the observation. */
      quoteCount?: number;
      note?: string;
    }
  | {
      basis: "pending";
      /** What has to happen for this cell to get a number. */
      awaits: string;
    };

export type RateRow = {
  key: string;
  /** Lender type, as a borrower would name it. */
  lenderType: string;
  /** Plain-English one-liner. Shown under the lender type on mobile. */
  summary: string;
  /** Which public benchmark anchors this row's pricing. */
  index: BenchmarkKey[];
  indexLabel: string;
  spread: Cell;
  allIn: Cell;
  maxLtv: Cell;
  dscrFloor: Cell;
  termAmort: Cell;
  recourse: Cell;
  minLoan: Cell;
  notes: string;
};

export type RateSource = {
  id: string;
  name: string;
  publisher: string;
  url: string;
  /** The date the source itself carries. */
  asOf: string;
  /** The date a human on this team last opened the link and checked it. */
  verified: string;
};

/**
 * The Matthews Hotel Debt Index reading for a month. `value` is null until
 * the team publishes the first observation. A null reading renders as
 * "Not yet published"; it is never charted as zero.
 */
export type MhdiReading = {
  /** "2026-09" */
  period: string;
  label: string;
  /** All-in coupon in percent, or null when not yet published. */
  value: number | null;
  /** How many independent quotes the reading is built from. */
  quoteCount: number | null;
  note?: string;
};

export type RateEdition = {
  /** URL slug and temporalCoverage: "2026-09". */
  slug: string;
  /** "September 2026" */
  label: string;
  /** ISO date this edition was published. Drives dateModified. */
  publishedAt: string;
  /** ISO date the next edition is due. */
  nextRefresh: string;
  /** The 40 to 70 word answer block at the top of the page. */
  directAnswer: string;
  rows: RateRow[];
  /** "What moved since <prior month>". Empty on the first edition. */
  changelog: string[];
  mhdi: MhdiReading;
};
