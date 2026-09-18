"use client";

import * as React from "react";
import type { ToolInput, ToolPage } from "@/lib/data/answers/types";

/**
 * The only client component on /tools/dscr-calculator.
 *
 * Everything that explains the calculator (the formula, the pre-computed
 * worked example, the table, the FAQ, the sources) is server-rendered above
 * and below this island, so the page answers its H1 in the raw HTML whether or
 * not this ever hydrates. A calculator whose page is empty until JS runs is
 * invisible to the extractor, which defeats the point of building it
 * (geo/05-templates.md §5).
 *
 * Before hydration the island renders the DEFAULT inputs and the outputs those
 * defaults produce, computed on the server with the same function. There is no
 * empty state and no layout shift.
 */

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export type DscrResult = {
  monthlyPayment: number;
  annualDebtService: number;
  dscr: number | null;
  verdict: string;
  maxLoan: number | null;
};

/** Standard mortgage amortization. Exported so the server renders the same numbers. */
export function computeDscr(v: {
  noi: number;
  loanAmount: number;
  rate: number;
  amortYears: number;
  testDscr: number;
}): DscrResult {
  const n = Math.max(1, Math.round(v.amortYears * 12));
  const monthlyRate = v.rate / 100 / 12;

  // rate = 0 is a legitimate input (a seller note at 0%), and the standard
  // payment formula divides by zero there. Straight-line instead.
  const perDollar =
    monthlyRate === 0
      ? 1 / n
      : monthlyRate / (1 - Math.pow(1 + monthlyRate, -n));

  const monthlyPayment = v.loanAmount * perDollar;
  const annualDebtService = monthlyPayment * 12;

  if (v.noi <= 0) {
    return {
      monthlyPayment,
      annualDebtService,
      dscr: null,
      verdict: "No coverage: NOI must be above zero.",
      maxLoan: null,
    };
  }
  if (annualDebtService <= 0) {
    return {
      monthlyPayment,
      annualDebtService,
      dscr: null,
      verdict: "Enter a loan amount to size the coverage test.",
      maxLoan: null,
    };
  }

  const dscr = v.noi / annualDebtService;
  const maxDebtService = v.noi / v.testDscr;
  const constantPerDollar = perDollar * 12;
  const maxLoan = maxDebtService / constantPerDollar;

  return {
    monthlyPayment,
    annualDebtService,
    dscr,
    verdict:
      dscr >= v.testDscr
        ? `Clears the ${v.testDscr.toFixed(2)}x test`
        : `Below the ${v.testDscr.toFixed(2)}x test`,
    maxLoan,
  };
}

export function formatOutput(
  key: string,
  r: DscrResult,
): string {
  switch (key) {
    case "monthlyPayment":
      return usd.format(r.monthlyPayment);
    case "annualDebtService":
      return usd.format(r.annualDebtService);
    case "dscr":
      return r.dscr === null ? "n/a" : `${r.dscr.toFixed(2)}x`;
    case "verdict":
      return r.verdict;
    case "maxLoan":
      return r.maxLoan === null ? "n/a" : usd.format(r.maxLoan);
    default:
      return "";
  }
}

function defaults(inputs: ToolInput[]): Record<string, number> {
  return Object.fromEntries(inputs.map((i) => [i.key, i.default]));
}

export function DscrCalculatorIsland({ tool }: { tool: ToolPage["tool"] }) {
  const [values, setValues] = React.useState<Record<string, number>>(() =>
    defaults(tool.inputs),
  );

  const result = computeDscr({
    noi: values.noi,
    loanAmount: values.loanAmount,
    rate: values.rate,
    amortYears: values.amortYears,
    testDscr: values.testDscr,
  });

  return (
    <section
      aria-labelledby="calculator"
      className="mt-12 rounded-[22px] border border-[color:var(--divider)] bg-white p-7"
    >
      <h2
        id="calculator"
        className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]"
      >
        Calculator
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {tool.inputs.map((input) => {
          const id = `dscr-${input.key}`;
          return (
            <div key={input.key}>
              <label
                htmlFor={id}
                className="block text-[14px] font-medium tracking-[-0.014em] text-[#1d1d1f]"
              >
                {input.label}
              </label>
              <input
                id={id}
                name={input.key}
                type="number"
                inputMode="decimal"
                value={values[input.key]}
                min={input.min}
                max={input.max}
                step={input.step ?? (input.type === "integer" ? 1 : "any")}
                onChange={(e) => {
                  const raw = e.target.valueAsNumber;
                  setValues((v) => ({
                    ...v,
                    [input.key]: Number.isFinite(raw) ? raw : 0,
                  }));
                }}
                className="mt-2 h-11 w-full rounded-[10px] border border-[color:var(--divider)] bg-white px-3 text-[16px] tabular-nums text-[#1d1d1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#1a3a6b]"
              />
              {input.help && (
                <p className="mt-1.5 text-[12px] leading-[1.4] text-[#86868b]">
                  {input.help}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <dl
        aria-live="polite"
        className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--divider)] pt-6 sm:grid-cols-2"
      >
        {tool.outputs.map((o) => (
          <div key={o.key} className="flex items-baseline justify-between gap-4">
            <dt className="text-[14px] tracking-[-0.014em] text-[#86868b]">
              {o.label}
            </dt>
            <dd className="text-[17px] font-semibold tabular-nums tracking-[-0.014em] text-[#1d1d1f] text-right">
              {formatOutput(o.key, result)}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-[12px] leading-[1.5] text-[#86868b]">
        {tool.disclaimer}
      </p>
    </section>
  );
}

export default DscrCalculatorIsland;
