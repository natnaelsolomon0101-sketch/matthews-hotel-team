/**
 * Per-state SBA hotel lending pages: /data/sba-hotel-lending/<state-slug>.
 *
 * Every number, sentence and table cell on a state page is built here from
 * content/sba/state-detail.json and content/sba/by-state.json, which
 * `scripts/fetch-sba-hotel-loans.ts` writes. Nothing is typed by hand, so the
 * quarterly refresh regenerates every state page, and the HTML page and its
 * Markdown twin print the same strings.
 *
 * A state gets a page only when it has at least STATE_PAGE_FLOOR hotel loans
 * in the trailing five full fiscal years. Below that there is too little to
 * say, and small cells would start to describe single loans.
 *
 * Privacy: aggregates only. The script already nulls dollars, averages and
 * medians in any cell with one or two loans. Those print as "Withheld".
 */
import detailJson from "../../../content/sba/state-detail.json";
import { BRAND, SITE_URL } from "../entity";
import { markets } from "../data/markets";
import {
  LAST_FY,
  PARTIAL_FY,
  SBA_PATH,
  SBA_UPDATED,
  T3,
  T5,
  fyRange,
  int,
  longDate,
  meta,
  pct,
  stateName,
  states as stateRows,
  statesByTrailing5,
  usd,
  usdM,
  type Program,
  type RankRow,
  type StateRow,
} from "./index";
import type { SbaTable } from "./tables";

/** First publication of the state pages. */
export const STATE_PAGES_PUBLISHED = "2026-09-18";

/** Minimum hotel loans over the trailing five full fiscal years for a state page. */
export const STATE_PAGE_FLOOR = 25;

type WindowStats = { count: number; grossApproval: number | null; averageLoan: number | null; medianLoan: number | null };
type BucketCount = { bucket: string; label: string; count: number };
type StateYearCell = { fiscalYear: number; partialYear: boolean; program: Program; count: number; grossApproval: number | null };
export type StateDetail = {
  state: string;
  byFiscalYear: StateYearCell[];
  trailing5: Record<Program, WindowStats>;
  sizeBuckets: Record<Program, BucketCount[]>;
  lenders7a: RankRow[];
  cdcs504: RankRow[];
  distinctLenders7a: number;
  distinctCdcs504: number;
};

const details = detailJson.states as StateDetail[];
export const nationalDetail = detailJson.national as Pick<StateDetail, "trailing5" | "sizeBuckets">;

export const WITHHELD = "Withheld";
const money = (n: number | null) => (n === null ? WITHHELD : usd(n));
const moneyM = (n: number | null) => (n === null ? WITHHELD : n === 0 ? "$0" : usdM(n));

export function ordinal(n: number): string {
  const t = n % 100;
  if (t >= 11 && t <= 13) return `${n}th`;
  return `${n}${["th", "st", "nd", "rd"][n % 10] ?? "th"}`;
}

const slugOf = (code: string) =>
  stateName(code)
    .toLowerCase()
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "");

export type StatePage = {
  code: string;
  name: string;
  slug: string;
  path: string;
  url: string;
  row: StateRow;
  detail: StateDetail;
};

/** States with a page, ordered like the national by-state table. */
export const statePages: StatePage[] = statesByTrailing5
  .filter((s) => s.trailing5.count >= STATE_PAGE_FLOOR && details.some((d) => d.state === s.state))
  .map((row) => {
    const slug = slugOf(row.state);
    const path = `${SBA_PATH}/${slug}`;
    return { code: row.state, name: stateName(row.state), slug, path, url: `${SITE_URL}${path}`, row, detail: details.find((d) => d.state === row.state)! };
  });

export const statePageBySlug = (slug: string) => statePages.find((s) => s.slug === slug);
export const statePageByCode = (code: string) => statePages.find((s) => s.code === code);
export const NO_STATE_PAGE = "Too few loans for a state page";
export const stateLinkLabel = (p: StatePage) => `${p.name} lenders and loan sizes`;
export const STATE_PAGES_NOTE =
  `Each state with at least ${STATE_PAGE_FLOOR} SBA hotel loans from ${fyRange(T5)} has its own page with loans by year, its top ten lenders and CDCs, and loan sizes against the national figures. There are ${statePages.length} of them, linked in the last column. States below that count have too few loans to describe without pointing at single loans, so they have no page.`;

/* ---------------------------------------------------------------- national */

const natT5Count = stateRows.reduce((s, x) => s + x.trailing5.count, 0);
const natT5Gross = stateRows.reduce((s, x) => s + x.trailing5.grossApproval, 0);
const natT5Count504 = nationalDetail.trailing5["504"].count;
const statesWithLoans = stateRows.filter((x) => x.trailing5.count > 0).length;
const asOfLong = longDate(meta.asOf);

/* ------------------------------------------------------------- per-state */

function rankOf(p: StatePage): { rank: number; tied: boolean } {
  const c = p.row.trailing5.count;
  return {
    rank: 1 + stateRows.filter((x) => x.trailing5.count > c).length,
    tied: stateRows.filter((x) => x.trailing5.count === c).length > 1,
  };
}
const rankPhrase = (p: StatePage) => {
  const r = rankOf(p);
  return `${r.tied ? "tied for " : ""}${ordinal(r.rank)}`;
};

function listNames(names: string[]): string {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

/** "X is the lender named on the most ...: 22." with ties handled. */
function leaderSentence(rows: RankRow[], what: string, where: string): string {
  if (!rows.length) return `SBA's data shows no ${what} in ${where} from ${fyRange(T3)}.`;
  const top = rows.filter((r) => r.count === rows[0].count);
  // Many names level at the top (usually on one or two loans each) is not a ranking.
  if (top.length > 3) return `No single name is on more than ${int(top[0].count)} of the ${what} in ${where} from ${fyRange(T3)}.`;
  if (top.length === 1) return `${top[0].name} is named on the most ${what} in ${where} from ${fyRange(T3)}: ${int(top[0].count)}.`;
  return `${listNames(top.map((r) => r.name))} are tied for the most ${what} in ${where} from ${fyRange(T3)}, with ${int(top[0].count)} each.`;
}

const t3Count = (p: StatePage, program: Program) =>
  p.detail.byFiscalYear.filter((y) => y.program === program && T3.includes(y.fiscalYear)).reduce((s, y) => s + y.count, 0);

const yearCount = (p: StatePage, fy: number) =>
  p.detail.byFiscalYear.filter((y) => y.fiscalYear === fy).reduce((s, y) => s + y.count, 0);

export const stateH1 = (p: StatePage) => `SBA loans to hotels in ${p.name}: lenders, volume and loan sizes`;
export const stateTitle = (p: StatePage) => `SBA Hotel Loans in ${p.name}: Lenders and Volume`;
export const stateDescription = (p: StatePage) =>
  `${int(p.row.trailing5.count)} SBA 7(a) and 504 loans to hotels in ${p.name} from ${fyRange(T5)}: volume by year, top lenders and CDCs, and loan sizes against the national figures. SBA data as of ${asOfLong}.`;

export function stateDirectAnswer(p: StatePage): string {
  const w = p.row.trailing5;
  const l = p.row.lastFullFiscalYear;
  return (
    `From ${fyRange(T5)}, SBA approved ${int(w.count)} loans to hotels and motels in ${p.name} for ${usd(w.grossApproval)}: ${int(w.count7a)} under 7(a) and ${int(w.count504)} under 504, per SBA loan-level data as of ${asOfLong}. ` +
    `That is ${pct(w.count, natT5Count)} of the ${int(natT5Count)} SBA hotel loans approved nationally in those years, which ranks ${p.name} ${rankPhrase(p)} of ${statesWithLoans} states and territories by loan count. ` +
    `In FY${LAST_FY} alone, ${p.name} had ${int(l.count)} SBA hotel ${l.count === 1 ? "loan" : "loans"}. ` +
    leaderSentence(p.detail.lenders7a, "7(a) hotel loans", p.name)
  );
}

function versus(stateValue: number, national: number): string {
  if (stateValue === national) return "the same as";
  const diff = Math.abs(stateValue - national) / national;
  return `${(100 * diff).toFixed(1)}% ${stateValue > national ? "above" : "below"}`;
}

/** Plain-English observations. Each is computed, and each is true for this state only. */
export function stateObservations(p: StatePage): string[] {
  const out: string[] = [];
  const w = p.row.trailing5;
  const d = p.detail;

  out.push(
    `The 504 program makes up ${pct(w.count504, w.count)} of SBA hotel loans in ${p.name} from ${fyRange(T5)}, versus ${pct(natT5Count504, natT5Count)} nationally. ` +
      `The rest are 7(a) loans.`,
  );

  const m = d.trailing5["7a"].medianLoan;
  const nm = nationalDetail.trailing5["7a"].medianLoan;
  if (m !== null && nm !== null) {
    out.push(
      `The median 7(a) hotel loan in ${p.name} was ${usd(m)}, ${versus(m, nm)} the national median of ${usd(nm)} for the same years.` +
        (d.trailing5["504"].medianLoan !== null && nationalDetail.trailing5["504"].medianLoan !== null
          ? ` The median 504 debenture was ${usd(d.trailing5["504"].medianLoan)}, ${versus(d.trailing5["504"].medianLoan, nationalDetail.trailing5["504"].medianLoan)} the national ${usd(nationalDetail.trailing5["504"].medianLoan)}.`
          : ""),
    );
  }

  const c7 = t3Count(p, "7a");
  if (c7 > 0 && d.lenders7a.length) {
    const top5 = d.lenders7a.slice(0, 5).reduce((s, r) => s + r.count, 0);
    out.push(
      `${int(d.distinctLenders7a)} different ${d.distinctLenders7a === 1 ? "lender is" : "lenders are"} named on the ${int(c7)} 7(a) hotel loans in ${p.name} from ${fyRange(T3)}. ` +
        `The five with the most loans account for ${pct(top5, c7)} of them.`,
    );
  }

  const full = [...new Set(d.byFiscalYear.filter((y) => !y.partialYear).map((y) => y.fiscalYear))];
  const peak = full.reduce((best, fy) => (yearCount(p, fy) > yearCount(p, best) ? fy : best), full[0]);
  const last = yearCount(p, LAST_FY);
  out.push(
    peak === LAST_FY
      ? `FY${LAST_FY} was the busiest year for SBA hotel lending in ${p.name} since FY${meta.sinceFiscalYear}, with ${int(last)} loans.`
      : `SBA hotel lending in ${p.name} peaked in FY${peak} with ${int(yearCount(p, peak))} loans. FY${LAST_FY} had ${int(last)}.`,
  );

  if (PARTIAL_FY) {
    out.push(`FY${PARTIAL_FY} is a partial year in this release. Through ${asOfLong}, SBA had approved ${int(yearCount(p, PARTIAL_FY))} hotel loans in ${p.name}.`);
  }
  return out;
}

export const stateScopeNote = (p: StatePage) =>
  `A loan counts toward ${p.name} when SBA reports ${p.name} as the project state, which is where the hotel is, not where the lender or borrower is based. Where SBA left the project state blank, the borrower state is used. Hotels means NAICS ${meta.naics}, and cancelled loans are excluded. Dollar figures, averages and medians are withheld in any cell with fewer than three loans, because they would describe a single loan. The full method is on the national page.`;

/* ------------------------------------------------------------------ tables */

export const COMPARE_INTRO =
  `All figures cover ${fyRange(T5)}, the five most recent full SBA fiscal years. For 7(a), loan size is the full loan. For 504 it is the SBA/CDC debenture only, so the hotel project behind it is larger.`;

export function compareTable(p: StatePage): SbaTable {
  const w = p.row.trailing5;
  const d = p.detail.trailing5;
  const n = nationalDetail.trailing5;
  return {
    columns: ["Measure", p.name, "United States"],
    rows: [
      ["SBA hotel loans", int(w.count), int(natT5Count)],
      ["7(a) loans", int(w.count7a), int(n["7a"].count)],
      ["504 loans", int(w.count504), int(n["504"].count)],
      ["504 share of loans", pct(w.count504, w.count), pct(natT5Count504, natT5Count)],
      ["Gross approval, both programs", usd(w.grossApproval), usd(natT5Gross)],
      ["Median 7(a) loan", money(d["7a"].medianLoan), money(n["7a"].medianLoan)],
      ["Average 7(a) loan", money(d["7a"].averageLoan), money(n["7a"].averageLoan)],
      ["Median 504 debenture", money(d["504"].medianLoan), money(n["504"].medianLoan)],
      ["Average 504 debenture", money(d["504"].averageLoan), money(n["504"].averageLoan)],
      ["Share of national SBA hotel loans", pct(w.count, natT5Count), "100.0%"],
      ["Share of national gross approval", pct(w.grossApproval, natT5Gross), "100.0%"],
      ["Rank among states and territories, by loans", `${rankPhrase(p)} of ${statesWithLoans}`, "n/a"],
    ],
  };
}

export const YEAR_INTRO = (p: StatePage) =>
  `Approvals by SBA fiscal year, which ends September 30 and is named for the year it ends in. For 504, gross approval is the SBA/CDC debenture only. "${WITHHELD}" marks a year and program with one or two loans in ${p.name}.`;

export function stateYearTable(p: StatePage): SbaTable {
  const fys = [...new Set(p.detail.byFiscalYear.map((y) => y.fiscalYear))].sort((a, b) => b - a);
  const cellOf = (fy: number, program: Program) => p.detail.byFiscalYear.find((y) => y.fiscalYear === fy && y.program === program)!;
  return {
    columns: ["Fiscal year", "7(a) loans", "7(a) gross approval", "504 loans", "504 gross approval", "All SBA hotel loans"],
    rows: fys.map((fy) => {
      const a = cellOf(fy, "7a");
      const c = cellOf(fy, "504");
      return [a.partialYear ? `FY${fy} (partial)` : `FY${fy}`, int(a.count), moneyM(a.grossApproval), int(c.count), moneyM(c.grossApproval), int(a.count + c.count)];
    }),
  };
}

export const STATE_LENDERS_NOTE = (p: StatePage) =>
  `Lenders and certified development companies are ranked by the number of hotel loans in ${p.name} from ${fyRange(T3)}, the three most recent full fiscal years, using names exactly as SBA reports them. SBA defines the 7(a) name as the bank the loan is currently assigned to. Lenders with the same count are ordered by dollars. A ranking here is a count of public records. It is not a recommendation, and ${BRAND} has no arrangement with any lender on it.`;

function lenderTable(first: string, rows: RankRow[], total: number): SbaTable {
  return {
    columns: ["Rank", first, "Hotel loans", "Share of the state's loans in this program", "Gross approval"],
    rows: rows.map((r) => [String(r.rank), r.name, int(r.count), pct(r.count, total), moneyM(r.grossApproval)]),
  };
}
export const stateLenders7aTable = (p: StatePage) => lenderTable("7(a) lender, as SBA reports it", p.detail.lenders7a, t3Count(p, "7a"));
export const stateCdcsTable = (p: StatePage) => lenderTable("504 CDC, as SBA reports it", p.detail.cdcs504, t3Count(p, "504"));

export const stateLendersCount = (p: StatePage, program: Program) =>
  program === "7a"
    ? `${int(t3Count(p, "7a"))} 7(a) hotel loans in ${p.name} from ${fyRange(T3)}, from ${int(p.detail.distinctLenders7a)} different ${p.detail.distinctLenders7a === 1 ? "lender" : "lenders"}. ${leaderSentence(p.detail.lenders7a, "7(a) hotel loans", p.name)}`
    : `${int(t3Count(p, "504"))} 504 hotel loans in ${p.name} from ${fyRange(T3)}, through ${int(p.detail.distinctCdcs504)} different ${p.detail.distinctCdcs504 === 1 ? "CDC" : "CDCs"}. ${leaderSentence(p.detail.cdcs504, "504 hotel loans", p.name)}`;

export function stateBucketsIntro(p: StatePage): string {
  const mine = p.detail.sizeBuckets["7a"];
  const nat = nationalDetail.sizeBuckets["7a"];
  const total = mine.reduce((s, b) => s + b.count, 0);
  const natTotal = nat.reduce((s, b) => s + b.count, 0);
  if (!total) return `SBA's data shows no 7(a) hotel loans in ${p.name} from ${fyRange(T5)}.`;
  const top = mine.reduce((best, b) => (b.count > best.count ? b : best), mine[0]);
  const natSame = nat.find((b) => b.bucket === top.bucket)!;
  const cap = mine[mine.length - 1];
  const natCap = nat[nat.length - 1];
  return (
    `Loan size by gross approval, ${fyRange(T5)}. The most common 7(a) hotel loan size in ${p.name} is ${top.label.charAt(0).toLowerCase()}${top.label.slice(1)}, with ${pct(top.count, total)} of loans, against ${pct(natSame.count, natTotal)} nationally in the same band. ` +
    `${pct(cap.count, total)} of ${p.name}'s 7(a) hotel loans are in the top band, at the $5 million 7(a) limit, against ${pct(natCap.count, natTotal)} nationally. ` +
    `Bands show loan counts only.`
  );
}

export function stateBucketsTable(p: StatePage): SbaTable {
  const a = p.detail.sizeBuckets["7a"];
  const c = p.detail.sizeBuckets["504"];
  const na = nationalDetail.sizeBuckets["7a"];
  const nc = nationalDetail.sizeBuckets["504"];
  const tot = (xs: BucketCount[]) => xs.reduce((s, b) => s + b.count, 0);
  return {
    columns: ["Gross approval", `7(a) loans in ${p.name}`, `Share in ${p.name}`, "Share nationally, 7(a)", `504 loans in ${p.name}`, `Share in ${p.name}, 504`, "Share nationally, 504"],
    rows: a.map((b, i) => [b.label, int(b.count), pct(b.count, tot(a)), pct(na[i].count, tot(na)), int(c[i].count), pct(c[i].count, tot(c)), pct(nc[i].count, tot(nc))]),
  };
}

/* ------------------------------------------------------------------- chart */

export const stateChartTitle = (p: StatePage) => {
  const fys = p.detail.byFiscalYear.map((y) => y.fiscalYear);
  return `SBA hotel loans approved in ${p.name} by fiscal year, 7(a) and 504, FY${Math.min(...fys)} to FY${Math.max(...fys)}`;
};
export const stateChartCaption = (p: StatePage) =>
  `Number of SBA loans to hotels in ${p.name} by fiscal year of approval, NAICS ${meta.naics}, cancelled loans excluded.` +
  (PARTIAL_FY ? ` FY${PARTIAL_FY} covers October 1, ${PARTIAL_FY - 1} to ${asOfLong} only.` : "") +
  ` The same counts are in the table below.`;
export function stateChartSeries(p: StatePage) {
  const fys = [...new Set(p.detail.byFiscalYear.map((y) => y.fiscalYear))].sort((a, b) => a - b);
  const get = (fy: number, program: Program) => p.detail.byFiscalYear.find((y) => y.fiscalYear === fy && y.program === program)!;
  return fys.map((fy) => ({ fy, partial: get(fy, "7a").partialYear, a: get(fy, "7a").count, c: get(fy, "504").count }));
}

/* ------------------------------------------------------- method, cite, links */

export const STATE_METHOD = (p: StatePage) =>
  `These figures are the ${p.name} slice of our national compilation of SBA's "7(a) & 504 FOIA" loan-level files, as of ${asOfLong}. The source files, the definitions, the caveats (approvals are not disbursements, NAICS codes are self-reported, lender names are not merged) and the reconciliation are on the national page, along with JSON and CSV downloads that include every state.`;
export const NATIONAL_LINK_LABEL = "SBA loans to hotels, national figures and methodology";

export const STATE_CITE_INTRO =
  `SBA's underlying loan data is a U.S. government work in the public domain. This compilation is published under CC BY 4.0. Cite SBA for the raw data and this page for the state aggregates.`;
export const stateCiteAs = (p: StatePage) =>
  `${BRAND}. "${stateH1(p)}." ${p.url}. SBA data as of ${meta.asOf}. Last updated ${SBA_UPDATED}.`;

export const STATE_CTA = (p: StatePage) => `The data shows who has lent on hotels in ${p.name}. A conversation shows who will lend on yours.`;

export function stateRelated(p: StatePage): { href: string; label: string }[] {
  return [
    { href: SBA_PATH, label: NATIONAL_LINK_LABEL },
    { href: "/hotel-financing/sba-7a-vs-504", label: "What is the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?" },
    { href: "/hotel-financing/lenders-under-5-million", label: "Who lends on hotels under $5 million?" },
    { href: "/tools/hotel-loan-sizing-calculator", label: "Hotel loan sizing calculator" },
    ...markets.filter((m) => m.state === p.code).map((m) => ({ href: `/markets/${m.slug}`, label: `Hotels for sale in ${m.city}, ${m.state}` })),
    { href: "/contact", label: `Contact ${BRAND}` },
  ];
}

export const OTHER_STATES_INTRO =
  `Every state with at least ${STATE_PAGE_FLOOR} SBA hotel loans from ${fyRange(T5)} has a page. The number in brackets is that state's loan count for those years.`;
export const otherStates = (p: StatePage) =>
  [...statePages]
    .filter((s) => s.code !== p.code)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((s) => ({ href: s.path, label: `${s.name} (${int(s.row.trailing5.count)})` }));
