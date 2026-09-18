import * as React from "react";
import { LAST_FY } from "@/lib/sba";
import { stateChartCaption, stateChartSeries, stateChartTitle, type StatePage } from "@/lib/sba/states";

/**
 * Server-rendered inline SVG, no chart library and no client JavaScript.
 * Grouped bars: number of SBA hotel loans in one state by fiscal year, 7(a)
 * and 504, on one y-axis. Same marks and colors as the national chart in
 * ../ApprovalsChart.tsx, but it plots loan counts, which are never withheld.
 */
const W = 960;
const H = 340;
const M = { top: 28, right: 16, bottom: 56, left: 44 };

function niceStep(max: number): number {
  for (const s of [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]) if (max / s <= 6) return s;
  return 1000;
}

export default function StateChart({ page }: { page: StatePage }) {
  const data = stateChartSeries(page);
  const max = Math.max(1, ...data.flatMap((d) => [d.a, d.c]));
  const step = niceStep(max);
  const top = Math.ceil(max / step) * step;
  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step);
  const iw = W - M.left - M.right;
  const ih = H - M.top - M.bottom;
  const band = iw / data.length;
  const bar = Math.min(18, (band - 10) / 2);
  const y = (v: number) => M.top + ih - (v / top) * ih;
  const peak = data.reduce((p, d) => (d.a > p.a ? d : p), data[0]);
  const labelled = new Set([peak.fy, LAST_FY]);
  const id = `sba-chart-${page.slug}`;

  return (
    <figure className="mt-8">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby={`${id}-title ${id}-desc`} className="w-full h-auto text-[color:var(--text-primary)]">
        <title id={`${id}-title`}>{stateChartTitle(page)}</title>
        <desc id={`${id}-desc`}>
          {`Grouped bar chart. ${data.map((d) => `FY${d.fy}${d.partial ? " (partial)" : ""}: 7(a) ${d.a}, 504 ${d.c}`).join(". ")}.`}
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
              {t}
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
                  {d.a}
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
          <text x={18} y={10.5} fontSize={12} fill="currentColor">7(a) loans</text>
          <rect className="sba-c" x={110} width={12} height={12} rx={2} />
          <text x={128} y={10.5} fontSize={12} fill="currentColor">504 loans</text>
        </g>
        <text x={W - M.right} y={H - 6} textAnchor="end" fontSize={11} fill="currentColor" fillOpacity={0.7}>
          SBA fiscal year of approval
        </text>
      </svg>
      <figcaption className="mt-3 max-w-[72ch] text-[13px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]">
        {stateChartCaption(page)}
      </figcaption>
    </figure>
  );
}
