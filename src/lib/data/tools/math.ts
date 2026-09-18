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

/* ------------------------------------------------- hotel value estimator */

/** One market's published cap-rate bands, in the shape src/lib/data/mhi.ts uses. */
export type BandPoint = {
  marketSlug: string;
  capRates: { segment: string; low: number; high: number }[];
};

export type ResolvedBand = {
  /** Percent. */
  low: number;
  high: number;
  /** "market": that market publishes this segment. "all-markets": the envelope. */
  scope: "market" | "all-markets";
  /** True when a market was asked for and it publishes no band for the segment. */
  fellBack: boolean;
  /** How many markets publish a band for this segment. */
  marketsWithBand: number;
};

/**
 * The cap-rate band for a segment. With a market, that market's own band. With
 * no market, or a market that publishes no band for the segment, the envelope
 * across every market that does: lowest low to highest high. The envelope is a
 * range of ranges, not an average. Returns null when no market publishes the
 * segment at all.
 */
export function resolveCapBand(
  points: BandPoint[],
  segment: string,
  marketSlug: string | null,
): ResolvedBand | null {
  const bands: { slug: string; low: number; high: number }[] = [];
  for (const p of points) {
    const b = p.capRates.find((c) => c.segment === segment);
    if (
      b &&
      Number.isFinite(b.low) &&
      Number.isFinite(b.high) &&
      b.low > 0 &&
      b.high >= b.low
    ) {
      bands.push({ slug: p.marketSlug, low: b.low, high: b.high });
    }
  }
  if (bands.length === 0) return null;

  const own = marketSlug ? bands.find((x) => x.slug === marketSlug) : undefined;
  if (own) {
    return {
      low: own.low,
      high: own.high,
      scope: "market",
      fellBack: false,
      marketsWithBand: bands.length,
    };
  }
  return {
    low: Math.min(...bands.map((x) => x.low)),
    high: Math.max(...bands.map((x) => x.high)),
    scope: "all-markets",
    fellBack: Boolean(marketSlug),
    marketsWithBand: bands.length,
  };
}

export type ValueEstimateInput = {
  keys: number;
  /** Used when it is above zero. Otherwise NOI is revenue x margin. */
  noi: number;
  revenue: number;
  noiMarginPct: number;
  pip: number;
  /** Percent. The tight end of the band gives the high value. */
  bandLow: number;
  bandHigh: number;
};

export type ValueEstimateResult = {
  noiUsed: number | null;
  /** NOI / bandHigh and NOI / bandLow, before the PIP. */
  grossLow: number | null;
  grossHigh: number | null;
  /** After the PIP. Can be negative when the PIP is larger than the value. */
  valueLow: number | null;
  valueHigh: number | null;
  perKeyLow: number | null;
  perKeyHigh: number | null;
};

export function computeValueEstimate(v: ValueEstimateInput): ValueEstimateResult {
  const out: ValueEstimateResult = {
    noiUsed: null,
    grossLow: null,
    grossHigh: null,
    valueLow: null,
    valueHigh: null,
    perKeyLow: null,
    perKeyHigh: null,
  };
  const noi =
    v.noi > 0
      ? v.noi
      : v.revenue > 0 && v.noiMarginPct > 0
        ? v.revenue * (v.noiMarginPct / 100)
        : 0;
  if (!(noi > 0) || !Number.isFinite(noi)) return out;
  out.noiUsed = noi;
  if (!(v.bandLow > 0) || !(v.bandHigh >= v.bandLow)) return out;

  const pip = v.pip > 0 ? v.pip : 0;
  out.grossLow = noi / (v.bandHigh / 100);
  out.grossHigh = noi / (v.bandLow / 100);
  out.valueLow = out.grossLow - pip;
  out.valueHigh = out.grossHigh - pip;
  if (v.keys > 0) {
    out.perKeyLow = out.valueLow / v.keys;
    out.perKeyHigh = out.valueHigh / v.keys;
  }
  return out;
}

/* ------------------------------------------------------------ loan sizing */

export type LoanSizingInput = {
  noi: number;
  /** Appraised value, or purchase price / total cost for an LTC test. */
  value: number;
  /** Index plus spread, percent. */
  rate: number;
  amortYears: number;
  /** The user's own tests. Zero or less means the test is skipped. */
  testDscr: number;
  testDebtYield: number;
  testLtv: number;
};

export type SizingTest = "dscr" | "debtYield" | "ltv";

export type LoanSizingResult = {
  byDscr: number | null;
  byDebtYield: number | null;
  byLtv: number | null;
  /** The smallest of the tests that were entered. */
  maxLoan: number | null;
  binding: SizingTest | null;
  /** value - maxLoan. */
  equity: number | null;
  /** At maxLoan. */
  impliedDscr: number | null;
  impliedDebtYield: number | null;
  impliedLtv: number | null;
};

export function computeLoanSizing(v: LoanSizingInput): LoanSizingResult {
  const okNoi = v.noi > 0;
  const constant =
    v.rate >= 0 && v.amortYears > 0 ? loanConstant(v.rate, v.amortYears) : null;

  const byDscr =
    okNoi && constant !== null && v.testDscr > 0 ? v.noi / v.testDscr / constant : null;
  const byDebtYield = okNoi && v.testDebtYield > 0 ? v.noi / (v.testDebtYield / 100) : null;
  const byLtv = v.value > 0 && v.testLtv > 0 ? v.value * (v.testLtv / 100) : null;

  const entered: [SizingTest, number][] = [];
  if (byDscr !== null) entered.push(["dscr", byDscr]);
  if (byDebtYield !== null) entered.push(["debtYield", byDebtYield]);
  if (byLtv !== null) entered.push(["ltv", byLtv]);

  if (entered.length === 0) {
    return {
      byDscr,
      byDebtYield,
      byLtv,
      maxLoan: null,
      binding: null,
      equity: null,
      impliedDscr: null,
      impliedDebtYield: null,
      impliedLtv: null,
    };
  }
  const [binding, maxLoan] = entered.reduce((a, b) => (b[1] < a[1] ? b : a));
  return {
    byDscr,
    byDebtYield,
    byLtv,
    maxLoan,
    binding,
    equity: v.value > 0 ? v.value - maxLoan : null,
    impliedDscr: okNoi && constant !== null && maxLoan > 0 ? v.noi / (maxLoan * constant) : null,
    impliedDebtYield: okNoi && maxLoan > 0 ? (v.noi / maxLoan) * 100 : null,
    impliedLtv: v.value > 0 ? (maxLoan / v.value) * 100 : null,
  };
}

/* ------------------------------------------------- SBA 504 hotel structure */

/** 13 CFR 120.910 and 120.920, and SOP 50 10 8 pp. 350, 354-355. */
export const SBA_504_HOTEL = {
  /** Third Party Lender minimum for a limited or single purpose asset. */
  bankMinPct: 50,
  /** Borrower minimum for a limited or single purpose building. */
  borrowerMinPct: 15,
  /** Borrower minimum when the business has also operated two years or less. */
  borrowerMinPctNew: 20,
  debentureCap: 5_000_000,
} as const;

export type Sba504Input = {
  projectCost: number;
  /** The operating business is two years old or less. */
  newBusiness: boolean;
};

export type Sba504Result = {
  bankLoan: number | null;
  debenture: number | null;
  borrowerMin: number | null;
  /** Project cost the three minimum pieces do not cover once the cap binds. */
  gap: number | null;
  capBinds: boolean;
  /** Percent of project cost left for the debenture before the cap. */
  debenturePct: number | null;
};

export function computeSba504(v: Sba504Input): Sba504Result {
  if (!(v.projectCost > 0) || !Number.isFinite(v.projectCost)) {
    return {
      bankLoan: null,
      debenture: null,
      borrowerMin: null,
      gap: null,
      capBinds: false,
      debenturePct: null,
    };
  }
  const borrowerPct = v.newBusiness
    ? SBA_504_HOTEL.borrowerMinPctNew
    : SBA_504_HOTEL.borrowerMinPct;
  const debenturePct = 100 - SBA_504_HOTEL.bankMinPct - borrowerPct;
  const bankLoan = (v.projectCost * SBA_504_HOTEL.bankMinPct) / 100;
  const borrowerMin = (v.projectCost * borrowerPct) / 100;
  const uncapped = (v.projectCost * debenturePct) / 100;
  const debenture = Math.min(uncapped, SBA_504_HOTEL.debentureCap);
  return {
    bankLoan,
    debenture,
    borrowerMin,
    gap: uncapped - debenture,
    capBinds: uncapped > SBA_504_HOTEL.debentureCap,
    debenturePct,
  };
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
