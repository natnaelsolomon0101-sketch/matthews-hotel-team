"use client";

import * as React from "react";
import type { ToolInput, ToolPage } from "@/lib/data/answers/types";
import {
  SBA_504_HOTEL,
  computeLoanSizing,
  computeSba504,
  pct,
  usd,
  type SizingTest,
} from "@/lib/data/tools/math";

/**
 * The only client component on /tools/hotel-loan-sizing-calculator.
 *
 * Runs the user's own three tests with the same functions the server uses for
 * the worked example and the table (src/lib/data/tools/math.ts). Before
 * hydration it renders the default inputs and their outputs, so there is no
 * empty state. The spread field starts at zero on purpose: lenders do not
 * publish spreads and this component never suggests one.
 */

type Values = Record<string, number>;

const FIELD =
  "mt-2 h-11 w-full rounded-[10px] border border-[color:var(--divider)] bg-white px-3 text-[16px] tabular-nums text-[#1d1d1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#1a3a6b]";
const LABEL = "block text-[14px] font-medium tracking-[-0.014em] text-[#1d1d1f]";
const HELP = "mt-1.5 text-[12px] leading-[1.4] text-[#86868b]";
const EYEBROW = "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";

const TESTS: { key: SizingTest; output: string; name: string }[] = [
  { key: "dscr", output: "byDscr", name: "DSCR" },
  { key: "debtYield", output: "byDebtYield", name: "Debt yield" },
  { key: "ltv", output: "byLtv", name: "LTV / LTC" },
];

function Row({
  label,
  value,
  strong,
  note,
}: {
  label: string;
  value: string;
  strong?: boolean;
  note?: string;
}) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 rounded-[10px] px-3 py-2 ${
        strong ? "bg-[#f5f5f7]" : ""
      }`}
    >
      <dt className="text-[14px] tracking-[-0.014em] text-[#424245]">
        {label}
        {note && <span className="ml-2 text-[12px] font-medium text-[#1a3a6b]">{note}</span>}
      </dt>
      <dd className="text-[17px] font-semibold tabular-nums tracking-[-0.014em] text-[#1d1d1f] text-right">
        {value}
      </dd>
    </div>
  );
}

export default function LoanSizingIsland({ tool }: { tool: ToolPage["tool"] }) {
  const [values, setValues] = React.useState<Values>(() =>
    Object.fromEntries(tool.inputs.map((i: ToolInput) => [i.key, i.default])),
  );
  const [sbaMode, setSbaMode] = React.useState(false);
  const [newBusiness, setNewBusiness] = React.useState(false);

  const rate = values.indexRate + values.spread;
  const r = computeLoanSizing({
    noi: values.noi,
    value: values.value,
    rate,
    amortYears: values.amortYears,
    testDscr: values.testDscr,
    testDebtYield: values.testDebtYield,
    testLtv: values.testLtv,
  });
  const sba = computeSba504({ projectCost: values.value, newBusiness });
  const label = (key: string) => tool.outputs.find((o) => o.key === key)?.label ?? key;
  const bindingName = TESTS.find((t) => t.key === r.binding)?.name;

  return (
    <section
      aria-labelledby="calculator"
      className="mt-12 rounded-[22px] border border-[color:var(--divider)] bg-white p-7"
    >
      <h2 id="calculator" className={EYEBROW}>
        Loan sizing calculator
      </h2>
      <p className="mt-2 text-[13px] leading-[1.45] text-[#86868b]">
        The starting hotel and the three tests are hypothetical. Replace them with your own.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {tool.inputs.map((input) => {
          const id = `hls-${input.key}`;
          return (
            <div key={input.key}>
              <label htmlFor={id} className={LABEL}>
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
                className={FIELD}
              />
              {input.help && <p className={HELP}>{input.help}</p>}
            </div>
          );
        })}
      </div>

      <div aria-live="polite" className="mt-8 border-t border-[color:var(--divider)] pt-6">
        <p className="px-3 text-[13px] leading-[1.5] text-[#424245]">
          All-in rate used: {pct(rate)} ({pct(values.indexRate)} index plus {pct(values.spread)}{" "}
          spread).
          {values.spread === 0 &&
            " With a zero spread this is the index alone, so the DSCR loan below is a ceiling."}
        </p>
        <dl className="mt-3 grid grid-cols-1 gap-y-1">
          {TESTS.map((t) => (
            <Row
              key={t.key}
              label={label(t.output)}
              value={usd(r[t.output as "byDscr" | "byDebtYield" | "byLtv"])}
              strong={r.binding === t.key}
              note={r.binding === t.key ? "Binding" : undefined}
            />
          ))}
          <Row
            label={label("binding")}
            value={bindingName ?? "Enter NOI or a value, and at least one test."}
          />
          <Row label={label("maxLoan")} value={usd(r.maxLoan)} />
          <Row label={label("equity")} value={usd(r.equity)} />
          <Row
            label="At that loan: DSCR, debt yield, LTV"
            value={
              r.maxLoan === null
                ? "n/a"
                : `${r.impliedDscr === null ? "n/a" : `${r.impliedDscr.toFixed(2)}x`}, ${pct(r.impliedDebtYield)}, ${pct(r.impliedLtv)}`
            }
          />
        </dl>
      </div>

      <div className="mt-8 border-t border-[color:var(--divider)] pt-6">
        <label className="flex items-center gap-3 text-[14px] font-medium tracking-[-0.014em] text-[#1d1d1f]">
          <input
            type="checkbox"
            checked={sbaMode}
            onChange={(e) => setSbaMode(e.target.checked)}
            className="h-4 w-4"
          />
          Show the SBA 504 structure for this project (optional)
        </label>

        {sbaMode && (
          <div aria-live="polite" className="mt-4">
            <label className="flex items-center gap-3 text-[14px] tracking-[-0.014em] text-[#1d1d1f]">
              <input
                type="checkbox"
                checked={newBusiness}
                onChange={(e) => setNewBusiness(e.target.checked)}
                className="h-4 w-4"
              />
              The operating business is two years old or less
            </label>
            <p className={`${HELP} mt-3`}>
              Uses the value field above as total project cost. Hotel minimums and the debenture
              cap come from 13 CFR 120.910, 13 CFR 120.920 and SOP 50 10 8. They are regulatory
              minimums, not a lender&apos;s terms.
            </p>
            <dl className="mt-3 grid grid-cols-1 gap-y-1">
              <Row
                label={`Bank first lien, at least ${SBA_504_HOTEL.bankMinPct}%`}
                value={usd(sba.bankLoan)}
              />
              <Row
                label={`CDC debenture, capped at ${usd(SBA_504_HOTEL.debentureCap)}`}
                value={usd(sba.debenture)}
                note={sba.capBinds ? "Cap binds" : undefined}
              />
              <Row
                label={`Borrower contribution, at least ${
                  newBusiness ? SBA_504_HOTEL.borrowerMinPctNew : SBA_504_HOTEL.borrowerMinPct
                }%`}
                value={usd(sba.borrowerMin)}
              />
              {sba.capBinds && (
                <Row
                  label="Not covered: larger bank loan or more equity"
                  value={usd(sba.gap)}
                  strong
                />
              )}
            </dl>
          </div>
        )}
      </div>

      <p className="mt-6 text-[12px] leading-[1.5] text-[#86868b]">{tool.disclaimer}</p>
    </section>
  );
}
