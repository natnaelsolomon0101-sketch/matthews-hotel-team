/**
 * Pure calculator math for the tool shelf. No React, no DOM, no dependencies,
 * so the server-rendered tables, the client island and the unit check
 * (math.check.ts) all run exactly the same functions.
 *
 * Every rate-like input is a percent (7.25 means 7.25%).
 */

/** Annual debt service per dollar of loan (the loan constant). */
export function loanConstant(ratePct: number, amortYears: number): number {
  const n = Math.max(1, Math.round(amortYears * 12));
  const r = ratePct / 100 / 12;
  // A 0% rate is a legitimate input and the annuity formula divides by zero
  // there. Straight-line instead.
  const perDollar = r === 0 ? 1 / n : r / (1 - Math.pow(1 + r, -n));
  return perDollar * 12;
}

/* ------------------------------------------------------ refinance vs sell */

export type RefiVsSellInput = {
  noi: number;
  loanBalance: number;
  rate: number;
  amortYears: number;
  testDscr: number;
  capRate: number;
  saleCostPct: number;
  pip: number;
};

export type RefiVsSellResult = {
  /** NOI / DSCR test / loan constant. */
  maxLoan: number | null;
  /** maxLoan - loanBalance - pip. Negative means cash you bring. */
  refiNet: number | null;
  /** NOI / cap rate, before the PIP. */
  value: number | null;
  /** value - pip: what a buyer who prices the PIP in would pay. */
  salePrice: number | null;
  saleCosts: number | null;
  /** salePrice - saleCosts - loanBalance, before tax. */
  netSale: number | null;
  /** netSale - refiNet. */
  gap: number | null;
};

export function computeRefiVsSell(v: RefiVsSellInput): RefiVsSellResult {
  const out: RefiVsSellResult = {
    maxLoan: null,
    refiNet: null,
    value: null,
    salePrice: null,
    saleCosts: null,
    netSale: null,
    gap: null,
  };
  if (!(v.noi > 0)) return out;

  if (v.testDscr > 0) {
    out.maxLoan = v.noi / v.testDscr / loanConstant(v.rate, v.amortYears);
    out.refiNet = out.maxLoan - v.loanBalance - v.pip;
  }
  if (v.capRate > 0) {
    out.value = v.noi / (v.capRate / 100);
    out.salePrice = out.value - v.pip;
    out.saleCosts = Math.max(0, out.salePrice) * (v.saleCostPct / 100);
    out.netSale = out.salePrice - out.saleCosts - v.loanBalance;
  }
  if (out.refiNet !== null && out.netSale !== null) {
    out.gap = out.netSale - out.refiNet;
  }
  return out;
}

/* ------------------------------------------------------------ debt yield */

export type DebtYieldInput = {
  noi: number;
  loanAmount: number;
  testDebtYield: number;
};

export type DebtYieldResult = {
  /** Percent. */
  debtYield: number | null;
  maxLoan: number | null;
  /** maxLoan - loanAmount. Negative means the loan is over the test. */
  room: number | null;
};

export function computeDebtYield(v: DebtYieldInput): DebtYieldResult {
  if (!(v.noi > 0)) return { debtYield: null, maxLoan: null, room: null };
  const debtYield = v.loanAmount > 0 ? (v.noi / v.loanAmount) * 100 : null;
  const maxLoan = v.testDebtYield > 0 ? v.noi / (v.testDebtYield / 100) : null;
  const room = maxLoan === null ? null : maxLoan - v.loanAmount;
  return { debtYield, maxLoan, room };
}

/* -------------------------------------------------------------- cap rate */

export type CapRateInput = {
  noi: number;
  price: number;
  keys: number;
  capRate: number;
};

export type CapRateResult = {
  /** Percent: NOI / price. */
  impliedCapRate: number | null;
  pricePerKey: number | null;
  /** NOI / the cap rate the user typed. */
  value: number | null;
  valuePerKey: number | null;
};

export function computeCapRate(v: CapRateInput): CapRateResult {
  const okNoi = v.noi > 0;
  const impliedCapRate = okNoi && v.price > 0 ? (v.noi / v.price) * 100 : null;
  const pricePerKey = v.price > 0 && v.keys > 0 ? v.price / v.keys : null;
  const value = okNoi && v.capRate > 0 ? v.noi / (v.capRate / 100) : null;
  const valuePerKey = value !== null && v.keys > 0 ? value / v.keys : null;
  return { impliedCapRate, pricePerKey, value, valuePerKey };
}

/* ------------------------------------------------------------ formatting */

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function usd(n: number | null): string {
  return n === null || !Number.isFinite(n) ? "n/a" : USD.format(Math.round(n));
}

export function pct(n: number | null, digits = 2): string {
  return n === null || !Number.isFinite(n) ? "n/a" : `${n.toFixed(digits)}%`;
}
