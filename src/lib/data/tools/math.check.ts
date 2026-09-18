/**
 * Unit check for the calculator math, and proof that every worked example on
 * a tool page matches what the live calculator returns at its defaults.
 *
 *   npx tsx src/lib/data/tools/math.check.ts
 *
 * Exits non-zero on any mismatch. No test framework, no dependencies.
 */
import { tools } from "./index";
import {
  computeCapRate,
  computeDebtYield,
  computeLoanSizing,
  computeRefiVsSell,
  computeSba504,
  computeValueEstimate,
  loanConstant,
  pct,
  resolveCapBand,
  usd,
  type BandPoint,
} from "./math";
import { benchmark } from "../../rates/sheet";
import {
  BAND_POINTS,
  DEFAULTS as VALUE,
  DEFAULT_SEGMENT,
  bandText,
} from "./hotel-value-estimator";
import { DEFAULTS as SIZING, TEST_LABEL } from "./hotel-loan-sizing-calculator";
import { DEFAULTS as REFI } from "./refinance-vs-sell";
import { DEFAULTS as DY } from "./debt-yield-calculator";
import { DEFAULTS as CAP } from "./cap-rate-calculator";

let failures = 0;
function check(name: string, ok: boolean, detail = "") {
  console.log(`${ok ? "ok  " : "FAIL"} ${name}${detail ? `  ${detail}` : ""}`);
  if (!ok) failures++;
}
const near = (a: number | null, b: number, tol = 0.5) =>
  a !== null && Math.abs(a - b) <= tol;

/* ---- 1. the math against independently derived values ------------------ */

// Loan constant, 7.25% / 25 years, from the closed-form annuity formula
// evaluated by hand: r = 0.0725/12, n = 300.
const r = 0.0725 / 12;
const byHand = (r / (1 - 1 / Math.pow(1 + r, 300))) * 12;
check("loanConstant(7.25, 25) = 0.086737", Math.abs(loanConstant(7.25, 25) - byHand) < 1e-12 && byHand.toFixed(6) === "0.086737", byHand.toFixed(6));
check("loanConstant(0, 25) is straight-line 0.04", Math.abs(loanConstant(0, 25) - 0.04) < 1e-12);

// Cross-check with the existing DSCR tool's published example:
// $1.6M NOI, 1.35x, 7.25%, 25y -> "roughly $13,664,000".
const dscrMax = 1600000 / 1.35 / loanConstant(7.25, 25);
check("DSCR page max loan ~ $13,664,000", Math.abs(dscrMax - 13664000) < 1000, usd(dscrMax));

const refi = computeRefiVsSell(REFI);
check("refi: max debt service $777,778", near(REFI.noi / REFI.testDscr, 777778));
check("refi: maxLoan $8,967,100", near(refi.maxLoan, 8967100), usd(refi.maxLoan));
check("refi: refiNet -$532,900", near(refi.refiNet, -532900), usd(refi.refiNet));
check("refi: value $12,727,273", near(refi.value, 12727273), usd(refi.value));
check("refi: salePrice $11,627,273", near(refi.salePrice, 11627273), usd(refi.salePrice));
check("refi: saleCosts $232,545", near(refi.saleCosts, 232545), usd(refi.saleCosts));
check("refi: netSale $2,994,727", near(refi.netSale, 2994727), usd(refi.netSale));
check("refi: gap $3,527,627", near(refi.gap, 3527627), usd(refi.gap));
check("refi: identity gap = netSale - refiNet", near(refi.gap, (refi.netSale as number) - (refi.refiNet as number), 1e-6));
check("refi: zero NOI returns n/a, not NaN", computeRefiVsSell({ ...REFI, noi: 0 }).gap === null);
check("refi: zero cap rate returns n/a", computeRefiVsSell({ ...REFI, capRate: 0 }).netSale === null);

const dy = computeDebtYield(DY);
check("debt yield: 13.33%", pct(dy.debtYield) === "13.33%", pct(dy.debtYield));
check("debt yield: maxLoan $16,000,000", near(dy.maxLoan, 16000000), usd(dy.maxLoan));
check("debt yield: room $4,000,000", near(dy.room, 4000000), usd(dy.room));
check("debt yield: 12% test -> $13,333,333", near(computeDebtYield({ ...DY, testDebtYield: 12 }).maxLoan, 13333333));
check("debt yield: zero loan returns n/a", computeDebtYield({ ...DY, loanAmount: 0 }).debtYield === null);

const cap = computeCapRate(CAP);
check("cap rate: 8.75% at price", pct(cap.impliedCapRate) === "8.75%", pct(cap.impliedCapRate));
check("cap rate: $153,846 per key", near(cap.pricePerKey, 153846), usd(cap.pricePerKey));
check("cap rate: value $12,727,273", near(cap.value, 12727273), usd(cap.value));
check("cap rate: $163,170 value per key", near(cap.valuePerKey, 163170), usd(cap.valuePerKey));
check("cap rate: value - price = $727,273", near((cap.value as number) - CAP.price, 727273));
check("cap rate: 8% vs 9% = $1,458,333", near(1050000 / 0.08 - 1050000 / 0.09, 1458333));
check("cap rate: zero keys returns n/a", computeCapRate({ ...CAP, keys: 0 }).pricePerKey === null);


/* ---- 1b. hotel value estimator ----------------------------------------- */

// Synthetic bands, so the resolver is tested apart from the live index.
const PTS: BandPoint[] = [
  { marketSlug: "a", capRates: [{ segment: "select-service", low: 7.5, high: 8.25 }, { segment: "full-service", low: 7, high: 8 }] },
  { marketSlug: "b", capRates: [{ segment: "select-service", low: 8, high: 8.75 }] },
  { marketSlug: "c", capRates: [{ segment: "full-service", low: 6.5, high: 7.25 }] },
];
const own = resolveCapBand(PTS, "select-service", "a");
check("band: a market with the segment returns its own band", own?.low === 7.5 && own?.high === 8.25 && own?.scope === "market" && own?.fellBack === false);
const env = resolveCapBand(PTS, "select-service", null);
check("band: no market returns lowest low to highest high", env?.low === 7.5 && env?.high === 8.75 && env?.scope === "all-markets" && env?.fellBack === false && env?.marketsWithBand === 2);
const fb = resolveCapBand(PTS, "select-service", "c");
check("band: market missing the segment falls back and says so", fb?.low === 7.5 && fb?.high === 8.75 && fb?.scope === "all-markets" && fb?.fellBack === true);
check("band: unknown market falls back and says so", resolveCapBand(PTS, "full-service", "zzz")?.fellBack === true);
check("band: segment no market publishes returns null", resolveCapBand(PTS, "resort-lifestyle", "a") === null);
check("band: empty index returns null", resolveCapBand([], "select-service", null) === null);
check("band: a zero or inverted band is ignored", resolveCapBand([{ marketSlug: "x", capRates: [{ segment: "s", low: 0, high: 8 }] }, { marketSlug: "y", capRates: [{ segment: "s", low: 9, high: 8 }] }], "s", null) === null);

// The live index, against the bands /hotel-valuation/hotel-cap-rates prints.
const liveSel = resolveCapBand(BAND_POINTS, "select-service", null);
const liveFull = resolveCapBand(BAND_POINTS, "full-service", null);
const liveResort = resolveCapBand(BAND_POINTS, "resort-lifestyle", null);
check("MHI: 14 markets", BAND_POINTS.length === 14);
check("MHI: select-service 7.50% to 8.75%", liveSel !== null && bandText(liveSel) === "7.50% to 8.75%", liveSel ? bandText(liveSel) : "null");
check("MHI: full-service 6.50% to 8.25%", liveFull !== null && bandText(liveFull) === "6.50% to 8.25%", liveFull ? bandText(liveFull) : "null");
check("MHI: resort and lifestyle 6.00% to 7.75%", liveResort !== null && bandText(liveResort) === "6.00% to 7.75%", liveResort ? bandText(liveResort) : "null");
const austin = resolveCapBand(BAND_POINTS, "select-service", "austin-tx");
check("MHI: Austin select-service is its own 7.50% to 8.25%", austin?.scope === "market" && austin.low === 7.5 && austin.high === 8.25);
const chs = resolveCapBand(BAND_POINTS, "select-service", "charleston-sc");
check("MHI: Charleston has no select-service band, falls back", chs?.fellBack === true && chs.low === 7.5 && chs.high === 8.75);
check("MHI: every market label resolved to City, ST", BAND_POINTS.every((p) => /, [A-Z]{2}$/.test(p.label)));

// $1,050,000 / 0.0875 = $12,000,000 and / 0.075 = $14,000,000, by hand.
const val = computeValueEstimate({ ...VALUE, bandLow: 7.5, bandHigh: 8.75 });
check("value: gross $12,000,000 to $14,000,000", near(val.grossLow, 12000000) && near(val.grossHigh, 14000000));
check("value: after $1.1M PIP $10,900,000 to $12,900,000", near(val.valueLow, 10900000) && near(val.valueHigh, 12900000), `${usd(val.valueLow)} to ${usd(val.valueHigh)}`);
check("value: per key $139,744 to $165,385", near(val.perKeyLow, 139744) && near(val.perKeyHigh, 165385), `${usd(val.perKeyLow)} to ${usd(val.perKeyHigh)}`);
const viaRev = computeValueEstimate({ ...VALUE, noi: 0, bandLow: 7.5, bandHigh: 8.75 });
check("value: revenue x margin path gives the same NOI", near(viaRev.noiUsed, 1050000, 1e-6) && near(viaRev.valueLow, 10900000));
check("value: typed NOI wins over revenue x margin", computeValueEstimate({ ...VALUE, noi: 900000, bandLow: 7.5, bandHigh: 8.75 }).noiUsed === 900000);
check("value: zero NOI and zero revenue returns n/a", computeValueEstimate({ ...VALUE, noi: 0, revenue: 0, bandLow: 7.5, bandHigh: 8.75 }).valueLow === null);
check("value: negative NOI returns n/a, not a negative value", computeValueEstimate({ ...VALUE, noi: -500000, revenue: 0, bandLow: 7.5, bandHigh: 8.75 }).valueHigh === null);
check("value: negative margin returns n/a", computeValueEstimate({ ...VALUE, noi: 0, noiMarginPct: -10, bandLow: 7.5, bandHigh: 8.75 }).noiUsed === null);
const noKeys = computeValueEstimate({ ...VALUE, keys: 0, bandLow: 7.5, bandHigh: 8.75 });
check("value: zero keys keeps the value, per key n/a", noKeys.perKeyLow === null && near(noKeys.valueLow, 10900000));
check("value: negative PIP is treated as zero", near(computeValueEstimate({ ...VALUE, pip: -1, bandLow: 7.5, bandHigh: 8.75 }).valueLow, 12000000));
const missing = computeValueEstimate({ ...VALUE, bandLow: 0, bandHigh: 0 });
check("value: missing band returns n/a, not Infinity", missing.valueLow === null && missing.valueHigh === null && missing.noiUsed === 1050000);
check("value: inverted band returns n/a", computeValueEstimate({ ...VALUE, bandLow: 9, bandHigh: 8 }).valueLow === null);
const bigPip = computeValueEstimate({ ...VALUE, pip: 13000000, bandLow: 7.5, bandHigh: 8.75 });
check("value: PIP above value goes negative, low stays below high", near(bigPip.valueLow, -1000000) && near(bigPip.valueHigh, 1000000));
check("value: usd() never prints NaN or Infinity", [usd(NaN), usd(Infinity), usd(null)].every((x) => x === "n/a"));

/* ---- 1c. loan sizing ---------------------------------------------------- */

// At 7.25% / 25y the DSCR loan is the refinance tool's $8,967,100.
const FIX = { ...SIZING, rate: 7.25 };
const sz = computeLoanSizing(FIX);
check("sizing: DSCR loan $8,967,100 at 7.25%", near(sz.byDscr, 8967100), usd(sz.byDscr));
check("sizing: debt yield loan $10,500,000", near(sz.byDebtYield, 10500000));
check("sizing: LTV loan $7,800,000", near(sz.byLtv, 7800000));
check("sizing: LTV binds, loan $7,800,000, equity $4,200,000", sz.binding === "ltv" && near(sz.maxLoan, 7800000) && near(sz.equity, 4200000));
check("sizing: implied LTV 65.00% and debt yield 13.46%", pct(sz.impliedLtv) === "65.00%" && pct(sz.impliedDebtYield) === "13.46%", `${pct(sz.impliedLtv)} ${pct(sz.impliedDebtYield)}`);
const szBig = computeLoanSizing({ ...FIX, value: 16000000 });
check("sizing: at $16M value DSCR binds", szBig.binding === "dscr" && near(szBig.maxLoan, 8967100) && near(szBig.impliedDscr, 1.35, 1e-9));
const szDy = computeLoanSizing({ ...FIX, value: 20000000, testDebtYield: 12 });
check("sizing: a 12% debt yield test binds at $8,750,000", szDy.binding === "debtYield" && near(szDy.maxLoan, 8750000));
const szSkip = computeLoanSizing({ ...FIX, testDscr: 0, testLtv: 0 });
check("sizing: tests set to zero are skipped", szSkip.byDscr === null && szSkip.byLtv === null && szSkip.binding === "debtYield");
const szNone = computeLoanSizing({ ...FIX, testDscr: 0, testDebtYield: 0, testLtv: 0 });
check("sizing: no tests returns n/a", szNone.maxLoan === null && szNone.binding === null && szNone.equity === null);
const szNoNoi = computeLoanSizing({ ...FIX, noi: 0 });
check("sizing: zero NOI leaves only the LTV test", szNoNoi.byDscr === null && szNoNoi.byDebtYield === null && szNoNoi.binding === "ltv" && szNoNoi.impliedDscr === null);
check("sizing: negative NOI never sizes a negative loan", computeLoanSizing({ ...FIX, noi: -100000 }).byDscr === null);
const szNoVal = computeLoanSizing({ ...FIX, value: 0 });
check("sizing: zero value skips LTV, equity n/a", szNoVal.byLtv === null && szNoVal.equity === null && szNoVal.binding === "dscr");
check("sizing: negative tests are skipped", computeLoanSizing({ ...FIX, testDscr: -1, testDebtYield: -1, testLtv: -1 }).maxLoan === null);
const szNegRate = computeLoanSizing({ ...FIX, rate: -1 });
check("sizing: negative rate skips DSCR only", szNegRate.byDscr === null && szNegRate.binding === "ltv");
check("sizing: 0% rate is straight-line", near(computeLoanSizing({ ...FIX, rate: 0 }).byDscr, 1050000 / 1.35 / 0.04, 1e-6));
check("sizing: index default is the rate sheet's 10-year Treasury", SIZING.indexRate === benchmark("ust10")?.value && SIZING.spread === 0);

/* ---- 1d. SBA 504 hotel structure ---------------------------------------- */

const s504 = computeSba504({ projectCost: 12000000, newBusiness: false });
check("504: $12M = $6,000,000 / $4,200,000 / $1,800,000", near(s504.bankLoan, 6000000) && near(s504.debenture, 4200000) && near(s504.borrowerMin, 1800000) && s504.gap === 0 && !s504.capBinds);
const s504New = computeSba504({ projectCost: 12000000, newBusiness: true });
check("504: new business = 20% down, 30% debenture", near(s504New.borrowerMin, 2400000) && near(s504New.debenture, 3600000) && s504New.debenturePct === 30);
const s504Big = computeSba504({ projectCost: 16000000, newBusiness: false });
check("504: $16M hits the $5,000,000 cap, $600,000 uncovered", s504Big.capBinds && near(s504Big.debenture, 5000000) && near(s504Big.gap, 600000) && near(s504Big.bankLoan, 8000000) && near(s504Big.borrowerMin, 2400000));
check("504: pieces plus the gap always equal project cost", [s504, s504New, s504Big].every((x, i) => near((x.bankLoan as number) + (x.debenture as number) + (x.borrowerMin as number) + (x.gap as number), [12000000, 12000000, 16000000][i], 1e-6)));
check("504: $14M is under the cap", !computeSba504({ projectCost: 14000000, newBusiness: false }).capBinds);
check("504: zero, negative and NaN cost return n/a", [0, -1, NaN].every((c) => computeSba504({ projectCost: c, newBusiness: false }).debenture === null));

// The two new pages at their real defaults (the loan default follows /rates).
const valBand = resolveCapBand(BAND_POINTS, DEFAULT_SEGMENT, null);
const valDef = computeValueEstimate({ ...VALUE, bandLow: valBand?.low ?? 0, bandHigh: valBand?.high ?? 0 });
const szDef = computeLoanSizing({ ...SIZING, rate: SIZING.indexRate + SIZING.spread });

/* ---- 2. every worked example prints the numbers the calculator returns -- */

const expected: Record<string, string[]> = {
  "refinance-vs-sell": [
    usd(REFI.noi / REFI.testDscr),
    loanConstant(REFI.rate, REFI.amortYears).toFixed(6),
    usd(refi.maxLoan),
    usd(-(refi.refiNet as number)),
    usd(refi.value),
    usd(refi.salePrice),
    usd(refi.saleCosts),
    usd(refi.netSale),
    usd(refi.gap),
  ],
  "debt-yield-calculator": [pct(dy.debtYield), usd(dy.maxLoan), usd(dy.room)],
  "hotel-value-estimator": [
    valBand ? bandText(valBand) : "missing band",
    usd(valDef.grossLow),
    usd(valDef.grossHigh),
    usd(valDef.valueLow),
    usd(valDef.valueHigh),
    usd(valDef.perKeyLow),
    usd(valDef.perKeyHigh),
  ],
  "hotel-loan-sizing-calculator": [
    pct(SIZING.indexRate),
    loanConstant(SIZING.indexRate + SIZING.spread, SIZING.amortYears).toFixed(6),
    usd(szDef.byDscr),
    usd(szDef.byDebtYield),
    usd(szDef.byLtv),
    `The binding constraint is ${szDef.binding ? TEST_LABEL[szDef.binding] : "n/a"}`,
    usd(szDef.maxLoan),
    usd(szDef.equity),
    usd(s504.bankLoan),
    usd(s504.debenture),
    usd(s504.borrowerMin),
    usd(s504Big.gap),
  ],
  "cap-rate-calculator": [
    pct(cap.impliedCapRate),
    usd(cap.pricePerKey),
    usd(cap.value),
    usd(cap.valuePerKey),
  ],
};

for (const [slug, strings] of Object.entries(expected)) {
  const page = tools.find((t) => t.slug === slug);
  if (!page) {
    check(`${slug} is registered`, false);
    continue;
  }
  for (const s of strings) {
    check(`${slug} worked example contains ${s}`, page.workedExample.body.includes(s));
  }
  // The island's defaults are the worked example's inputs.
  const d = {
    "refinance-vs-sell": REFI,
    "debt-yield-calculator": DY,
    "cap-rate-calculator": CAP,
    "hotel-value-estimator": VALUE,
    "hotel-loan-sizing-calculator": SIZING,
  }[slug] as Record<string, number>;
  for (const input of page.tool.inputs) {
    check(`${slug} input "${input.key}" default matches`, d[input.key] === input.default);
  }
  const words = page.answer.replace(/\[\d+\]/g, "").split(/\s+/).length;
  check(`${slug} direct answer is 40-70 words`, words >= 40 && words <= 70, `${words} words`);
  for (const f of page.faq) {
    const n = f.a.replace(/\[\d+\]/g, "").split(/\s+/).length;
    if (n > 50) check(`${slug} FAQ "${f.q}" is <= 50 words`, false, `${n} words`);
  }
}

console.log(failures ? `\n${failures} check(s) failed` : "\ntool math: all checks pass");
if (failures) process.exitCode = 1;
