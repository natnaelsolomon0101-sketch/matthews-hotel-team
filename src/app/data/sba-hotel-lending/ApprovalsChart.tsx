import * as React from "react";
import { CHART_TITLE, CHART_CAPTION, LAST_FY, usd } from "@/lib/sba";
import { chartMax, chartSeries } from "@/lib/sba/tables";

/**
 * Server-rendered inline SVG, no chart library and no client JavaScript.
 * Grouped bars: gross approval by fiscal year for 7(a) and 504, one y-axis.
 * Ink uses currentColor so it follows the page; the two series colors are the
 * validated blue/orange pair, with their own dark-surface steps.
 */
const W = 960;
const H = 380;
const M = { top: 28, right: 16, bottom: 56, left: 56 };

export default function ApprovalsChart() {
  const data = chartSeries();
  const max = chartMax();
  const step = 1e9;
  const top = Math.ceil(max / step) * step;
  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step);
  const iw = W - M.left - M.right;
  const ih = H - M.top - M.bottom;
  const band = iw / data.length;
  const bar = Math.min(18, (band - 10) / 2);
  const y = (v: number) => M.top + ih - (v / top) * ih;
  const peak = data.reduce((p, d) => (d.a > p.a ? d : p), data[0]);
  const labelled = new Set([peak.fy, LAST_FY]);

  return (
    <figure className="mt-8">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-labelledby="sba-chart-title sba-chart-desc"
        className="w-full h-auto text-[color:var(--text-primary)]"
      >
        <title id="sba-chart-title">{CHART_TITLE}</title>
        <desc id="sba-chart-desc">
          {`Grouped bar chart. ${data
            .map((d) => `FY${d.fy}${d.partial ? " (partial)" : ""}: 7(a) ${usd(d.a)}, 504 ${usd(d.c)}`)
            .join(". ")}.`}
        </desc>
        <style>{`
          .sba-a { fill: #2a78d6; } .sba-c { fill: #eb6834; }
          @media (prefers-color-scheme: dark) { .sba-a { fill: #3987e5; } .sba-c { fill: #d95926; } }
          @media (forced-colors: active) { .sba-a { fill: CanvasText; } .sba-c { fill: GrayText; } }
        `}</style>

        {ticks.map((t) => (
          <g key={t}>
            <line x1={M.left} x2={W - M.right} y1={y(t)} y2={y(t)} stroke="currentColor" strokeOpacity={t === 0 ? 0.45 : 0.12} strokeWidth={1} />
            <text x={M.left - 8} y={y(t) + 4} textAnchor="end" fontSize={12} fill="currentColor" fillOpacity={0.7}>
              {t === 0 ? "$0" : `$${t / 1e9}B`}
            </text>
          </g>
        ))}

        {data.map((d, i) => {
          const cx = M.left + band * i + band / 2;
          const op = d.partial ? 0.5 : 1;
          return (
            <g key={d.fy}>
              <rect className="sba-a" x={cx - bar - 1} y={y(d.a)} width={bar} height={y(0) - y(d.a)} rx={3} opacity={op} />
              <rect className="sba-c" x={cx + 1} y={y(d.c)} width={bar} height={y(0) - y(d.c)} rx={3} opacity={op} />
              {labelled.has(d.fy) ? (
                <text x={cx - bar / 2 - 1} y={y(d.a) - 6} textAnchor="middle" fontSize={11} fill="currentColor">
                  {`$${(d.a / 1e9).toFixed(2)}B`}
                </text>
              ) : null}
              <text x={cx} y={H - M.bottom + 18} textAnchor="middle" fontSize={11} fill="currentColor" fillOpacity={0.7}>
                {`'${String(d.fy).slice(2)}`}
              </text>
              {d.partial ? (
                <text x={cx} y={H - M.bottom + 32} textAnchor="middle" fontSize={10} fill="currentColor" fillOpacity={0.7}>
                  partial
                </text>
              ) : null}
            </g>
          );
        })}

        <g transform={`translate(${M.left}, 8)`}>
          <rect className="sba-a" width={12} height={12} rx={2} />
          <text x={18} y={10.5} fontSize={12} fill="currentColor">7(a) gross approval</text>
          <rect className="sba-c" x={160} width={12} height={12} rx={2} />
          <text x={178} y={10.5} fontSize={12} fill="currentColor">504 debenture gross approval</text>
        </g>
        <text x={W - M.right} y={H - 6} textAnchor="end" fontSize={11} fill="currentColor" fillOpacity={0.7}>
          SBA fiscal year of approval
        </text>
      </svg>
      <figcaption className="mt-3 max-w-[72ch] text-[13px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]">
        {CHART_CAPTION}
      </figcaption>
    </figure>
  );
}
