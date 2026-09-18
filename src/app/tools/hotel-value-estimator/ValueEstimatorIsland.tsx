"use client";

import * as React from "react";
import Link from "next/link";
import type { ToolInput, ToolPage } from "@/lib/data/answers/types";
import {
  computeValueEstimate,
  resolveCapBand,
  usd,
  type BandPoint,
} from "@/lib/data/tools/math";

/**
 * The only client component on /tools/hotel-value-estimator.
 *
 * The cap rate bands arrive as props from the server page, which reads them
 * from the Matthews Hotel Index data module, so this island carries no data of
 * its own and cannot drift from the published edition. Before hydration it
 * renders the default inputs and the range those defaults produce, computed
 * with the same functions as the server-rendered worked example.
 *
 * Nothing typed here leaves the browser: there is no fetch, no storage and no
 * form submission.
 */

type Values = Record<string, number>;

const FIELD =
  "mt-2 h-11 w-full rounded-[10px] border border-[color:var(--divider)] bg-white px-3 text-[16px] tabular-nums text-[#1d1d1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#1a3a6b]";
const LABEL = "block text-[14px] font-medium tracking-[-0.014em] text-[#1d1d1f]";
const HELP = "mt-1.5 text-[12px] leading-[1.4] text-[#86868b]";

const band = (b: { low: number; high: number }) =>
  `${b.low.toFixed(2)}% to ${b.high.toFixed(2)}%`;

export default function ValueEstimatorIsland({
  tool,
  points,
  segments,
  defaultSegment,
  mhiLabel,
  mhiPath,
}: {
  tool: ToolPage["tool"];
  points: (BandPoint & { label: string })[];
  segments: { value: string; label: string }[];
  defaultSegment: string;
  mhiLabel: string;
  mhiPath: string;
}) {
  const [values, setValues] = React.useState<Values>(() =>
    Object.fromEntries(tool.inputs.map((i: ToolInput) => [i.key, i.default])),
  );
  const [segment, setSegment] = React.useState(defaultSegment);
  const [market, setMarket] = React.useState("");

  const resolved = resolveCapBand(points, segment, market || null);
  const r = computeValueEstimate({
    keys: values.keys,
    noi: values.noi,
    revenue: values.revenue,
    noiMarginPct: values.noiMarginPct,
    pip: values.pip,
    bandLow: resolved?.low ?? 0,
    bandHigh: resolved?.high ?? 0,
  });

  const segmentLabel = segments.find((s) => s.value === segment)?.label ?? segment;
  const marketLabel = points.find((p) => p.marketSlug === market)?.label;
  const allMarkets = `all ${points.length} markets`;

  let bandNote: string;
  if (!resolved) {
    bandNote = `The ${mhiLabel} index publishes no ${segmentLabel.toLowerCase()} band, so there is no range to show.`;
  } else if (resolved.fellBack) {
    bandNote = `${marketLabel} has no ${segmentLabel.toLowerCase()} band in the ${mhiLabel} index, so this uses the band across ${allMarkets}.`;
  } else if (resolved.scope === "market") {
    bandNote = `${segmentLabel}, ${marketLabel}, ${mhiLabel}.`;
  } else {
    bandNote = `${segmentLabel}, lowest low to highest high across ${allMarkets}, ${mhiLabel}.`;
  }

  const range = (lo: number | null, hi: number | null) =>
    lo === null || hi === null ? "n/a" : `${usd(lo)} to ${usd(hi)}`;
  const underwater = r.valueLow !== null && r.valueLow < 0;

  const result: Record<string, string> = {
    band: resolved ? band(resolved) : "n/a",
    noiUsed: usd(r.noiUsed),
    range: range(r.valueLow, r.valueHigh),
    perKey: range(r.perKeyLow, r.perKeyHigh),
  };

  return (
    <section
      aria-labelledby="calculator"
      className="mt-12 rounded-[22px] border border-[color:var(--divider)] bg-white p-7"
    >
      <h2
        id="calculator"
        className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]"
      >
        Value estimator: a screening range
      </h2>
      <p className="mt-2 text-[13px] leading-[1.45] text-[#86868b]">
        The starting hotel is hypothetical. Replace the numbers with your own. Nothing you type
        leaves your browser.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="hve-segment" className={LABEL}>
            Segment
          </label>
          <select
            id="hve-segment"
            name="segment"
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
            className={FIELD}
          >
            {segments.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="hve-market" className={LABEL}>
            Market (optional)
          </label>
          <select
            id="hve-market"
            name="market"
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            className={FIELD}
          >
            <option value="">All {points.length} markets</option>
            {points.map((p) => (
              <option key={p.marketSlug} value={p.marketSlug}>
                {p.label}
              </option>
            ))}
          </select>
          <p className={HELP}>
            The index covers {points.length} markets and has no national figure.
          </p>
        </div>

        {tool.inputs.map((input) => {
          const id = `hve-${input.key}`;
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
        <dl className="grid grid-cols-1 gap-y-4">
          {tool.outputs.map((o) => (
            <div
              key={o.key}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <dt className="text-[14px] tracking-[-0.014em] text-[#86868b]">{o.label}</dt>
              <dd className="text-[17px] font-semibold tabular-nums tracking-[-0.014em] text-[#1d1d1f] sm:text-right">
                {result[o.key]}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[13px] leading-[1.5] text-[#424245]">
          Band: {bandNote}{" "}
          <Link
            href={mhiPath}
            className="text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40"
          >
            See the {mhiLabel} index
          </Link>
          .
        </p>
        {underwater && (
          <p className="mt-2 text-[13px] leading-[1.5] text-[#424245]">
            At the wide end of the band the PIP is larger than the capitalized value, so the low
            figure is below zero.
          </p>
        )}
      </div>

      <p className="mt-6 text-[12px] leading-[1.5] text-[#86868b]">{tool.disclaimer}</p>
    </section>
  );
}
