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
  computeRefiVsSell,
  loanConstant,
  pct,
  usd,
} from "./math";
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
  const d = { "refinance-vs-sell": REFI, "debt-yield-calculator": DY, "cap-rate-calculator": CAP }[slug] as Record<string, number>;
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
