"use client";

import * as React from "react";
import type { ToolInput, ToolPage } from "@/lib/data/answers/types";
import {
  computeCapRate,
  computeDebtYield,
  computeRefiVsSell,
  pct,
  usd,
} from "@/lib/data/tools/math";

/**
 * The one client component shared by /tools/refinance-vs-sell,
 * /tools/debt-yield-calculator and /tools/cap-rate-calculator.
 *
 * Everything that explains a calculator (the formula, the pre-computed worked
 * example, the table, the FAQ, the sources) is server-rendered around this
 * island. Before hydration the island itself renders the default inputs and
 * the outputs those defaults produce, computed with the same functions
 * (src/lib/data/tools/math.ts), so there is no empty state and no layout
 * shift. No dependencies beyond React.
 */

export type CalcKind =
  | "refinance-vs-sell"
  | "debt-yield-calculator"
  | "cap-rate-calculator";

type Values = Record<string, number>;

/** Output key -> display string, per calculator. */
export function runCalc(kind: CalcKind, v: Values): Record<string, string> {
  if (kind === "refinance-vs-sell") {
    const r = computeRefiVsSell({
      noi: v.noi,
      loanBalance: v.loanBalance,
      rate: v.rate,
      amortYears: v.amortYears,
      testDscr: v.testDscr,
      capRate: v.capRate,
      saleCostPct: v.saleCostPct,
      pip: v.pip,
    });
    return {
      maxLoan: usd(r.maxLoan),
      refiNet:
        r.refiNet === null
          ? "n/a"
          : r.refiNet < 0
            ? `You bring ${usd(-r.refiNet)}`
            : `${usd(r.refiNet)} cash out`,
      value: usd(r.value),
      netSale: usd(r.netSale),
      gap: usd(r.gap),
    };
  }

  if (kind === "debt-yield-calculator") {
    const r = computeDebtYield({
      noi: v.noi,
      loanAmount: v.loanAmount,
      testDebtYield: v.testDebtYield,
    });
    const test = pct(v.testDebtYield);
    return {
      debtYield: pct(r.debtYield),
      verdict:
        r.debtYield === null
          ? "Enter NOI and a loan amount."
          : r.debtYield >= v.testDebtYield
            ? `Clears the ${test} test`
            : `Below the ${test} test`,
      maxLoan: usd(r.maxLoan),
      room:
        r.room === null
          ? "n/a"
          : r.room < 0
            ? `Over by ${usd(-r.room)}`
            : usd(r.room),
    };
  }

  const r = computeCapRate({
    noi: v.noi,
    price: v.price,
    keys: v.keys,
    capRate: v.capRate,
  });
  return {
    impliedCapRate: pct(r.impliedCapRate),
    pricePerKey: usd(r.pricePerKey),
    value: usd(r.value),
    valuePerKey: usd(r.valuePerKey),
  };
}

function defaults(inputs: ToolInput[]): Values {
  return Object.fromEntries(inputs.map((i) => [i.key, i.default]));
}

export function ToolIsland({
  kind,
  tool,
}: {
  kind: CalcKind;
  tool: ToolPage["tool"];
}) {
  const [values, setValues] = React.useState<Values>(() => defaults(tool.inputs));
  const result = runCalc(kind, values);

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
      <p className="mt-2 text-[13px] leading-[1.45] text-[#86868b]">
        The starting values are hypothetical. Replace them with your own.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {tool.inputs.map((input) => {
          const id = `${kind}-${input.key}`;
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
              {result[o.key]}
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

export default ToolIsland;
