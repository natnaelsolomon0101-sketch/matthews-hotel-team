/**
 * The tables on /data/sba-hotel-lending as plain strings, so the HTML page and
 * the Markdown twin render the same cells (the gate compares them).
 */
import {
  LAST_FY,
  T5,
  byFiscalYear,
  fiscalYears,
  fyRange,
  int,
  lenderList,
  nationalLenders,
  otherNaics,
  pct,
  sizeBuckets,
  stateName,
  statesByTrailing5,
  usd,
  usdM,
  year,
  type RankRow,
} from "./index";

export type SbaTable = { columns: string[]; rows: string[][] };

const fyLabel = (fy: number) => (year(fy, "7a").partialYear ? `FY${fy} (partial)` : `FY${fy}`);

export function byYearTable(): SbaTable {
  return {
    columns: ["Fiscal year", "7(a) loans", "7(a) gross approval", "7(a) average", "7(a) median", "504 loans", "504 gross approval", "504 average", "504 median"],
    rows: [...fiscalYears].reverse().map((fy) => {
      const a = year(fy, "7a");
      const c = year(fy, "504");
      return [fyLabel(fy), int(a.count), usdM(a.grossApproval), usd(a.averageLoan), usd(a.medianLoan), int(c.count), usdM(c.grossApproval), usd(c.averageLoan), usd(c.medianLoan)];
    }),
  };
}

export function byStateTable(): SbaTable {
  return {
    columns: ["State", `FY${LAST_FY} loans`, `FY${LAST_FY} gross approval`, `${fyRange(T5)} loans`, `${fyRange(T5)} 7(a) loans`, `${fyRange(T5)} 504 loans`, `${fyRange(T5)} gross approval`],
    rows: statesByTrailing5.map((s) => [
      stateName(s.state),
      int(s.lastFullFiscalYear.count),
      usdM(s.lastFullFiscalYear.grossApproval),
      int(s.trailing5.count),
      int(s.trailing5.count7a),
      int(s.trailing5.count504),
      usdM(s.trailing5.grossApproval),
    ]),
  };
}

function rankTable(first: string, rows: RankRow[]): SbaTable {
  return {
    columns: ["Rank", first, "Hotel loans", "Gross approval"],
    rows: rows.map((r) => [String(r.rank), r.name, int(r.count), usdM(r.grossApproval ?? 0)]),
  };
}
export const lenders7aByCountTable = () => rankTable("7(a) lender, as SBA reports it", nationalLenders.lenders7aByCount);
export const lenders7aByDollarsTable = () => rankTable("7(a) lender, as SBA reports it", nationalLenders.lenders7aByDollars);
export const cdcsByCountTable = () => rankTable("504 CDC, as SBA reports it", nationalLenders.cdcs504ByCount);
export const cdcsByDollarsTable = () => rankTable("504 CDC, as SBA reports it", nationalLenders.cdcs504ByDollars);

export function stateLendersTable(): SbaTable {
  return {
    columns: ["State", "Top 7(a) hotel lenders (loans)", "Top 504 CDCs for hotels (loans)"],
    rows: [...statesByTrailing5]
      .sort((a, b) => stateName(a.state).localeCompare(stateName(b.state)))
      .map((s) => [stateName(s.state), lenderList(s.top5Lenders7a), lenderList(s.top5Cdcs504)]),
  };
}

export function bucketsTable(): SbaTable {
  const a = sizeBuckets.filter((b) => b.program === "7a");
  const c = sizeBuckets.filter((b) => b.program === "504");
  const ta = a.reduce((s, b) => s + b.count, 0);
  const tc = c.reduce((s, b) => s + b.count, 0);
  return {
    columns: ["Gross approval", "7(a) loans", "Share of 7(a) loans", "7(a) dollars", "504 loans", "Share of 504 loans", "504 dollars"],
    rows: a.map((b, i) => [b.label, int(b.count), pct(b.count, ta), usdM(b.grossApproval), int(c[i].count), pct(c[i].count, tc), usdM(c[i].grossApproval)]),
  };
}

export function chargeOffTable(): SbaTable {
  return {
    columns: ["Approval fiscal year", "7(a) loans", "7(a) with status CHGOFF", "7(a) share charged off", "504 loans", "504 with status CHGOFF", "504 share charged off"],
    rows: fiscalYears.map((fy) => {
      const a = year(fy, "7a");
      const c = year(fy, "504");
      return [fyLabel(fy), int(a.count), int(a.chargedOffCount), pct(a.chargedOffCount, a.count), int(c.count), int(c.chargedOffCount), pct(c.chargedOffCount, c.count)];
    }),
  };
}

export function otherNaicsTable(): SbaTable {
  return {
    columns: ["NAICS code", "SBA description", `FY${LAST_FY} loans`, `FY${LAST_FY} gross approval`, `${fyRange(T5)} loans`, `${fyRange(T5)} gross approval`],
    rows: otherNaics.map((o) => [o.naics, o.description, int(o.lastFullFiscalYear.count), usdM(o.lastFullFiscalYear.grossApproval), int(o.trailing5.count), usdM(o.trailing5.grossApproval)]),
  };
}

/** Chart series: gross approval by fiscal year, both programs. */
export function chartSeries() {
  return fiscalYears.map((fy) => ({
    fy,
    partial: year(fy, "7a").partialYear,
    a: year(fy, "7a").grossApproval,
    c: year(fy, "504").grossApproval,
  }));
}
export const chartMax = () => Math.max(...byFiscalYear.map((y) => y.grossApproval));
