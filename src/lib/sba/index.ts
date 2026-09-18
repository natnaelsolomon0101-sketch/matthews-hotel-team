/**
 * SBA hotel lending, for /data/sba-hotel-lending.
 *
 * Every number on the page, in the Markdown twin, in the JSON and in the CSV
 * is read from the three aggregate files that
 * `scripts/fetch-sba-hotel-loans.ts` writes to content/sba/. Nothing here is
 * typed by hand, so a quarterly refresh changes the page, the prose and the
 * downloads together. The prose lives in this module (not in the page JSX) so
 * the HTML page and its Markdown twin print the same sentences.
 *
 * No borrower-level data exists in those files. Do not add any.
 */
import summaryJson from "../../../content/sba/summary.json";
import byStateJson from "../../../content/sba/by-state.json";
import lendersJson from "../../../content/sba/lenders.json";
import stateDetailJson from "../../../content/sba/state-detail.json";
import { BRAND, SITE_URL } from "../entity";

export type Program = "7a" | "504";

export type YearRow = {
  fiscalYear: number;
  partialYear: boolean;
  program: Program;
  count: number;
  grossApproval: number;
  averageLoan: number;
  medianLoan: number;
  sbaGuaranteedApproval?: number;
  thirdPartyLenderDollars?: number;
  chargedOffCount: number;
  chargedOffGrossAmount: number;
  paidInFullCount: number;
};
export type RankRow = { rank: number; name: string; count: number; grossApproval: number | null };
export type StateWindow = { count7a: number; gross7a: number; count504: number; gross504: number; count: number; grossApproval: number };
export type StateRow = {
  state: string;
  lastFullFiscalYear: StateWindow;
  trailing5: StateWindow;
  top5Lenders7a: RankRow[];
  top5Cdcs504: RankRow[];
};

export const SBA_PATH = "/data/sba-hotel-lending";
export const SBA_URL = `${SITE_URL}${SBA_PATH}`;
export const SBA_JSON_URL = `${SBA_URL}.json`;
export const SBA_CSV_URL = `${SBA_URL}.csv`;
/** First publication of the page. */
export const SBA_PUBLISHED = "2026-09-18";
export const SBA_LICENSE = "https://creativecommons.org/licenses/by/4.0/";

export const meta = summaryJson.meta;
export const byFiscalYear = summaryJson.byFiscalYear as YearRow[];
export const sizeBuckets = summaryJson.sizeBuckets as { program: Program; bucket: string; label: string; count: number; grossApproval: number }[];
export const otherNaics = summaryJson.otherNaics;
export const reconciliation = summaryJson.reconciliation;
export const states = byStateJson.states as StateRow[];
export const nationalLenders = lendersJson.national as Record<
  "lenders7aByCount" | "lenders7aByDollars" | "cdcs504ByCount" | "cdcs504ByDollars",
  RankRow[]
>;

/** Last updated = the day the aggregates were built, read from the data. */
export const SBA_UPDATED = meta.fetchedAt.slice(0, 10);
export const LAST_FY = meta.lastFullFiscalYear;
export const PARTIAL_FY = meta.partialFiscalYear;
export const T5 = meta.trailing5;
export const T3 = meta.trailing3;

/* --------------------------------------------------------------- formatting */

export function longDate(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
export const int = (n: number) => n.toLocaleString("en-US");
/** "$1.91 billion", "$990.5 million", "$85,806". */
export function usd(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)} billion`;
  if (n >= 1e7) return `$${(n / 1e6).toFixed(1)} million`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)} million`;
  return `$${int(Math.round(n))}`;
}
/** Table form: "$1,909.2M". */
export const usdM = (n: number) => `$${(n / 1e6).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M`;
export const pct = (num: number, den: number) => (den ? `${((100 * num) / den).toFixed(1)}%` : "n/a");
export const fyRange = (fys: number[]) => `FY${fys[0]} to FY${fys[fys.length - 1]}`;
export const programLabel = (p: Program) => (p === "7a" ? "7(a)" : "504");

const STATE_NAMES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado", CT: "Connecticut",
  DE: "Delaware", DC: "District of Columbia", FL: "Florida", GA: "Georgia", GU: "Guam", HI: "Hawaii", ID: "Idaho",
  IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine",
  MD: "Maryland", MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico",
  NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon",
  PA: "Pennsylvania", PR: "Puerto Rico", RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota",
  TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia", VI: "U.S. Virgin Islands",
  WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
};
export const stateName = (code: string) => STATE_NAMES[code] ?? code;

/* ------------------------------------------------------------------ derived */

export const year = (fy: number, p: Program) => byFiscalYear.find((y) => y.fiscalYear === fy && y.program === p)!;
export const fiscalYears = [...new Set(byFiscalYear.map((y) => y.fiscalYear))].sort((a, b) => a - b);

export const statesByTrailing5 = [...states].sort(
  (a, b) => b.trailing5.count - a.trailing5.count || a.state.localeCompare(b.state),
);

function sum(rows: YearRow[], f: (y: YearRow) => number) {
  return rows.reduce((s, y) => s + f(y), 0);
}
/** Cohorts at least ten fiscal years old at the last full fiscal year. */
export const SEASONED = fiscalYears.filter((fy) => fy <= LAST_FY - 10);
export function seasoned(p: Program) {
  const rows = byFiscalYear.filter((y) => y.program === p && SEASONED.includes(y.fiscalYear));
  return { loans: sum(rows, (y) => y.count), chargedOff: sum(rows, (y) => y.chargedOffCount) };
}

export function lenderList(rows: RankRow[]): string {
  return rows.length ? rows.map((r) => `${r.name} (${r.count})`).join("; ") : "None";
}

/* -------------------------------------------------------------------- prose */

const a = year(LAST_FY, "7a");
const c = year(LAST_FY, "504");
const top7a = nationalLenders.lenders7aByCount[0];
const topCdc = nationalLenders.cdcs504ByCount[0];
const topState = statesByTrailing5[0];
const secondState = statesByTrailing5[1];
const asOfLong = longDate(meta.asOf);
const bucket7a = [...sizeBuckets.filter((b) => b.program === "7a")].sort((x, y) => y.count - x.count)[0];
const total7aT5 = sizeBuckets.filter((b) => b.program === "7a").reduce((s, b) => s + b.count, 0);
const s7 = seasoned("7a");
const s5 = seasoned("504");

export const H1 = "SBA loans to hotels: who lends, how much, and where";
export const TITLE = "SBA Loans to Hotels: Lenders, Volume, States";

export const DIRECT_ANSWER =
  `In fiscal year ${LAST_FY} (October 1, ${LAST_FY - 1} to September 30, ${LAST_FY}), SBA approved ${int(a.count)} 7(a) loans to hotels and motels for ${usd(a.grossApproval)} and ${int(c.count)} 504 loans for ${usd(c.grossApproval)}, per SBA loan-level data as of ${asOfLong}. ` +
  `The median 7(a) hotel loan was ${usd(a.medianLoan)}. ` +
  `${top7a.name} is the lender named on the most 7(a) hotel loans approved from ${fyRange(T3)}: ${int(top7a.count)}.`;

export const TAKEAWAYS: string[] = [
  `SBA approved ${int(a.count + c.count)} hotel loans in FY${LAST_FY} across both programs: ${int(a.count)} under 7(a) for ${usd(a.grossApproval)} and ${int(c.count)} under 504 for ${usd(c.grossApproval)}. The 504 figure is the SBA-backed debenture only, not the bank first mortgage that sits ahead of it.`,
  `The median 7(a) hotel loan in FY${LAST_FY} was ${usd(a.medianLoan)} and the average was ${usd(a.averageLoan)}. The median 504 debenture was ${usd(c.medianLoan)}.`,
  `${topState ? stateName(topState.state) : ""} had the most SBA hotel loans from ${fyRange(T5)} with ${int(topState.trailing5.count)}, followed by ${stateName(secondState.state)} with ${int(secondState.trailing5.count)}.`,
  `By loan count from ${fyRange(T3)}, the largest 7(a) hotel lender in SBA's data is ${top7a.name} with ${int(top7a.count)} loans and ${usd(top7a.grossApproval ?? 0)} approved. The largest 504 certified development company is ${topCdc.name} with ${int(topCdc.count)}.`,
  `${pct(bucket7a.count, total7aT5)} of 7(a) hotel loans from ${fyRange(T5)} were in the ${bucket7a.label} band, the most common size.`,
  `Of 7(a) hotel loans approved from ${fyRange(SEASONED)}, ${int(s7.chargedOff)} of ${int(s7.loans)} (${pct(s7.chargedOff, s7.loans)}) carry SBA's loan status CHGOFF, "Charged Off", as of ${asOfLong}. For 504 it is ${int(s5.chargedOff)} of ${int(s5.loans)} (${pct(s5.chargedOff, s5.loans)}).`,
  PARTIAL_FY
    ? `FY${PARTIAL_FY} is a partial year in this release. Through ${asOfLong}, SBA had approved ${int(year(PARTIAL_FY, "7a").count)} 7(a) hotel loans and ${int(year(PARTIAL_FY, "504").count)} 504 hotel loans.`
    : `FY${LAST_FY} is complete in this release.`,
];

export const SCOPE_NOTE =
  `Hotels here means NAICS 721110, which SBA\u2019s file describes as Hotels (except Casino Hotels) and Motels. Casino hotels (721120), bed-and-breakfast inns (721191) and all other traveler accommodation (721199) are counted in their own table near the bottom and are excluded from every other table. Loans whose SBA status is CANCLD, "Cancelled", are excluded throughout. Coverage starts with fiscal year ${meta.sinceFiscalYear}.`;

export const CHART_TITLE = `SBA gross approvals to hotels by fiscal year, 7(a) and 504, FY${fiscalYears[0]} to FY${fiscalYears[fiscalYears.length - 1]}`;
export const CHART_CAPTION =
  `Gross approval dollars by SBA fiscal year, NAICS 721110, cancelled loans excluded.` +
  (PARTIAL_FY ? ` FY${PARTIAL_FY} covers October 1, ${PARTIAL_FY - 1} to ${asOfLong} only.` : "") +
  ` The same figures are in the table below.`;

export const BY_YEAR_INTRO =
  `Counts and dollars are approvals by SBA fiscal year, which ends September 30 and is named for the year it ends in. For 7(a), gross approval is the full loan amount, of which SBA guarantees a part. For 504, gross approval is the SBA/CDC debenture only. The third-party first mortgage that a bank makes alongside each 504 loan is reported by SBA in a separate column and is not included here.`;

export const BY_STATE_INTRO =
  `State is the project state SBA reports, which is where the hotel is, not where the lender is. Where SBA left the project state blank, the borrower state is used. States are ordered by loan count from ${fyRange(T5)}. Every state and territory with at least one loan since FY${meta.sinceFiscalYear} is listed.`;

export const LENDERS_INTRO =
  `Rankings cover ${fyRange(T3)}, the three most recent full fiscal years, and use lender and CDC names exactly as SBA reports them. SBA's data dictionary defines the 7(a) name as the bank the loan is currently assigned to, so a loan that changed hands after approval is counted under its current holder. A ranking here is a count of public records. It is not a recommendation, and ${BRAND} has no arrangement with any lender on it.`;

export const STATE_LENDERS_INTRO =
  `The five most active 7(a) lenders and 504 CDCs for hotels in each state, by loan count from ${fyRange(T3)}, with the count in brackets. "None" means SBA's data shows no hotel loan in that program and state in those years. Dollar amounts for these state lists are in the JSON download and are withheld where a lender has fewer than three loans in a state.`;

export const BUCKETS_INTRO =
  `Loan size by gross approval amount, ${fyRange(T5)}. SBA states that the maximum 7(a) loan amount is $5 million, so the top band for 7(a) is loans at that limit. For 504 the amount is the debenture, so the hotel project behind a $2 million 504 loan is much larger than $2 million.`;

export const CHARGEOFF_INTRO =
  `SBA's file carries a loan status for every loan. One value is CHGOFF, which SBA's data dictionary defines as "Charged Off". The table shows, for each approval-year cohort, how many loans carry that status as of ${asOfLong}. This is the share of loans charged off, by count. It is not a default rate, a loss rate or a delinquency rate: a charge-off is recorded late in a loan's life, so recent cohorts show few or none because they are young, not because they are safer. For 504 loans the status describes the SBA/CDC debenture, not the bank first mortgage.`;

export const OTHER_NAICS_INTRO =
  `These three accommodation codes are reported here and nowhere else on the page. Both programs are combined and cancelled loans are excluded.`;

export const METHODOLOGY: { label: string; text: string }[] = [
  {
    label: "Source.",
    text: `SBA's "7(a) & 504 FOIA" dataset on data.sba.gov, which SBA says it updates quarterly, about one month after the quarter ends. This edition uses the files SBA labels as of ${asOfLong}: ${meta.files.map((f) => f.file).join(", ")}. SBA's dataset record declares a U.S. public domain license.`,
  },
  {
    label: "What we do to it.",
    text: `A script streams each CSV, keeps rows with NAICS code ${meta.naics} and approval fiscal year ${meta.sinceFiscalYear} or later, drops loans SBA marks cancelled, and adds them up. We publish totals only. No borrower name, address or individual loan appears here or in the downloads.`,
  },
  {
    label: "Approvals are not disbursements.",
    text: `Gross approval is the amount SBA approved. Some approved loans are never fully drawn and some are later cancelled. Cancelled loans are removed, but a recent year can still shrink in a later release as more of its approvals are cancelled.`,
  },
  {
    label: "NAICS codes are self-reported.",
    text: `The NAICS code is entered on the loan application by the lender or borrower and SBA does not audit it. Some hotels are filed under other codes, and some businesses filed under ${meta.naics} are not what an investor would call a hotel.`,
  },
  {
    label: "Fiscal years.",
    text: `SBA's fiscal year runs October 1 to September 30. FY${LAST_FY} ended September 30, ${LAST_FY}.` + (PARTIAL_FY ? ` FY${PARTIAL_FY} is shown through ${asOfLong} and is marked partial wherever it appears.` : ""),
  },
  {
    label: "Lender names.",
    text: `Lender and CDC names are printed as SBA reports them. Name variants are not merged, and bank mergers are not back-cast.`,
  },
  {
    label: "Reconciliation.",
    text: `Each table is checked against a straight count of the filtered rows before anything is written: ${int(reconciliation.files.reduce((s, f) => s + f.hotelRowsCounted, 0))} hotel loans since FY${meta.sinceFiscalYear}, from ${int(reconciliation.files.reduce((s, f) => s + f.rowsRead, 0))} rows read. If any check fails the refresh stops.`,
  },
];

export type SbaSource = { n: number; name: string; url: string; publisher: string; note: string };
export const SOURCES: SbaSource[] = [
  {
    n: 1,
    name: "7(a) & 504 FOIA dataset",
    url: meta.landingPage,
    publisher: "U.S. Small Business Administration",
    note: `files as of ${asOfLong}; read ${longDate(SBA_UPDATED)}`,
  },
  ...(meta.dataDictionary
    ? [
        {
          n: 2,
          name: "7(a) and 504 FOIA Data Dictionary",
          url: meta.dataDictionary,
          publisher: "U.S. Small Business Administration",
          note: `defines GrossApproval, LoanStatus, BankName and the other fields used here; read ${longDate(SBA_UPDATED)}`,
        },
      ]
    : []),
  {
    n: 3,
    name: "Dataset record for SBA-OHA-2016-08-001 (license, update frequency, file list)",
    url: meta.metadataApi,
    publisher: "U.S. Small Business Administration",
    note: `read ${longDate(SBA_UPDATED)}`,
  },
  {
    n: 4,
    name: "7(a) loans (maximum loan amount)",
    url: "https://www.sba.gov/funding-programs/loans/7a-loans",
    publisher: "U.S. Small Business Administration",
    note: `read ${longDate(SBA_PUBLISHED)}`,
  },
];

export const CITE_INTRO =
  `SBA's underlying loan data is a U.S. government work in the public domain. This compilation is published under CC BY 4.0. Cite SBA for the raw data and this page for the hotel aggregates.`;
export const citeAs = () =>
  `${BRAND}. "SBA Loans to Hotels: Who Lends, How Much, and Where." ${SBA_URL}. SBA data as of ${meta.asOf}. Last updated ${SBA_UPDATED}.`;

export const DOWNLOADS_TEXT =
  `The JSON file has every table on this page plus gross approval dollars by lender, the per-state detail behind the state pages and the reconciliation counts. The CSV has the same tables in long form. Cross-origin requests are allowed.`;

export const RELATED: { href: string; label: string }[] = [
  { href: "/hotel-financing/sba-7a-vs-504", label: "What is the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?" },
  { href: "/hotel-financing/lenders-under-5-million", label: "Who lends on hotels under $5 million?" },
  { href: "/glossary/sba-7a", label: "SBA 7(a) Loan" },
  { href: "/glossary/sba-504", label: "SBA 504 Loan" },
  { href: "/rates", label: "Matthews Hotel Markets rate sheet" },
];
export const CTA_HEADLINE = "The data shows who has lent. A conversation shows who will lend on your hotel.";

/* ---------------------------------------------------------------- downloads */

export function sbaJson() {
  return {
    name: "SBA loans to hotels",
    url: SBA_URL,
    publisher: BRAND,
    license: SBA_LICENSE,
    citeAs: citeAs(),
    lastUpdated: SBA_UPDATED,
    source: meta,
    notes: [SCOPE_NOTE, BY_YEAR_INTRO, ...METHODOLOGY.map((m) => `${m.label} ${m.text}`)],
    byFiscalYear,
    byState: states,
    topLendersNational: { fiscalYears: T3, ...nationalLenders },
    sizeBuckets: { fiscalYears: T5, rows: sizeBuckets },
    // Per-state detail behind /data/sba-hotel-lending/<state>: loans by year and
    // program, trailing-five medians and averages, size bands and top ten lenders.
    stateDetail: stateDetailJson,
    otherNaics,
    reconciliation,
  };
}

function csvCell(v: string | number | null | undefined): string {
  if (v === null || v === undefined) return "";
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function sbaCsv(): string {
  const rows: (string | number | null)[][] = [
    ["table", "period", "key", "program", "loan_count", "gross_approval_usd", "average_loan_usd", "median_loan_usd", "charged_off_count", "sba_as_of"],
  ];
  for (const y of byFiscalYear) {
    rows.push(["by_fiscal_year", `FY${y.fiscalYear}${y.partialYear ? " (partial)" : ""}`, "United States", programLabel(y.program), y.count, y.grossApproval, y.averageLoan, y.medianLoan, y.chargedOffCount, meta.asOf]);
  }
  for (const s of states) {
    for (const [period, w] of [[`FY${LAST_FY}`, s.lastFullFiscalYear], [fyRange(T5), s.trailing5]] as [string, StateWindow][]) {
      rows.push(["by_state", period, s.state, "7(a)", w.count7a, w.gross7a, null, null, null, meta.asOf]);
      rows.push(["by_state", period, s.state, "504", w.count504, w.gross504, null, null, null, meta.asOf]);
    }
  }
  const nat: [string, string, RankRow[]][] = [
    ["top_lenders_by_count", "7(a)", nationalLenders.lenders7aByCount],
    ["top_lenders_by_dollars", "7(a)", nationalLenders.lenders7aByDollars],
    ["top_cdcs_by_count", "504", nationalLenders.cdcs504ByCount],
    ["top_cdcs_by_dollars", "504", nationalLenders.cdcs504ByDollars],
  ];
  for (const [table, program, list] of nat) {
    for (const r of list) rows.push([table, fyRange(T3), r.name, program, r.count, r.grossApproval, null, null, null, meta.asOf]);
  }
  for (const s of states) {
    for (const r of s.top5Lenders7a) rows.push(["state_top_lenders", fyRange(T3), `${s.state}: ${r.name}`, "7(a)", r.count, r.grossApproval, null, null, null, meta.asOf]);
    for (const r of s.top5Cdcs504) rows.push(["state_top_cdcs", fyRange(T3), `${s.state}: ${r.name}`, "504", r.count, r.grossApproval, null, null, null, meta.asOf]);
  }
  for (const s of stateDetailJson.states) {
    for (const y of s.byFiscalYear) {
      rows.push(["state_by_fiscal_year", `FY${y.fiscalYear}${y.partialYear ? " (partial)" : ""}`, s.state, programLabel(y.program as Program), y.count, y.grossApproval, null, null, null, meta.asOf]);
    }
    for (const p of ["7a", "504"] as Program[]) {
      const w = s.trailing5[p];
      rows.push(["state_loan_size", fyRange(T5), s.state, programLabel(p), w.count, w.grossApproval, w.averageLoan, w.medianLoan, null, meta.asOf]);
    }
  }
  for (const b of sizeBuckets) rows.push(["size_bucket", fyRange(T5), b.label, programLabel(b.program), b.count, b.grossApproval, null, null, null, meta.asOf]);
  for (const o of otherNaics) {
    rows.push(["other_naics", `FY${LAST_FY}`, `${o.naics} ${o.description}`, "7(a) and 504", o.lastFullFiscalYear.count, o.lastFullFiscalYear.grossApproval, null, null, null, meta.asOf]);
    rows.push(["other_naics", fyRange(T5), `${o.naics} ${o.description}`, "7(a) and 504", o.trailing5.count, o.trailing5.grossApproval, null, null, null, meta.asOf]);
  }
  return rows.map((r) => r.map(csvCell).join(",")).join("\n") + "\n";
}
