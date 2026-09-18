import * as React from "react";
import type { MhdiReading } from "@/lib/rates/types";

/**
 * The Matthews Hotel Debt Index history, as inline SVG rendered on the
 * server. No client JavaScript, so the numbers are in the HTML a crawler
 * receives.
 *
 * Readings with a null value are plotted as a gap, not as zero, and the
 * chart says in visible text how many months have a reading. With no
 * readings at all it renders an empty axis and says so. It never draws a
 * line through data that does not exist.
 */
export function MhdiChart({ readings }: { readings: MhdiReading[] }) {
  const withValues = readings.filter(
    (r): r is MhdiReading & { value: number } => r.value !== null,
  );

  const W = 720;
  const H = 260;
  const PAD = { top: 20, right: 20, bottom: 40, left: 52 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;

  const values = withValues.map((r) => r.value);
  const min = values.length ? Math.floor(Math.min(...values) - 0.5) : 5;
  const max = values.length ? Math.ceil(Math.max(...values) + 0.5) : 9;
  const span = max - min || 1;

  const x = (i: number) =>
    PAD.left + (readings.length > 1 ? (i / (readings.length - 1)) * plotW : plotW / 2);
  const y = (v: number) => PAD.top + plotH - ((v - min) / span) * plotH;

  const gridValues = [min, min + span / 2, max];

  const points = readings
    .map((r, i) => (r.value === null ? null : { x: x(i), y: y(r.value) }))
    .filter((p): p is { x: number; y: number } => p !== null);

  const path =
    points.length > 1
      ? points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")
      : "";

  return (
    <figure className="mt-8">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="auto"
        role="img"
        aria-label={
          withValues.length === 0
            ? "Matthews Hotel Debt Index chart with no readings published yet."
            : `Matthews Hotel Debt Index, ${withValues.length} monthly readings.`
        }
        className="block max-w-[720px]"
      >
        {gridValues.map((v) => (
          <g key={v}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(v)}
              y2={y(v)}
              stroke="#d2d2d7"
              strokeWidth="1"
            />
            <text
              x={PAD.left - 10}
              y={y(v) + 4}
              textAnchor="end"
              fontSize="11"
              fill="#6e6e73"
            >
              {v.toFixed(1)}%
            </text>
          </g>
        ))}

        {readings.map((r, i) => (
          <text
            key={r.period}
            x={x(i)}
            y={H - 14}
            textAnchor="middle"
            fontSize="11"
            fill="#6e6e73"
          >
            {r.label.replace(/ (\d{4})$/, " '$1").replace(/'20/, "'")}
          </text>
        ))}

        {path ? (
          <path d={path} fill="none" stroke="#1a3a6b" strokeWidth="2" />
        ) : null}

        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#1a3a6b" />
        ))}

        {withValues.length === 0 ? (
          <text
            x={PAD.left + plotW / 2}
            y={PAD.top + plotH / 2}
            textAnchor="middle"
            fontSize="14"
            fill="#6e6e73"
          >
            No readings published yet
          </text>
        ) : null}
      </svg>
      <figcaption className="mt-3 text-[13px] leading-[1.5] text-[color:var(--text-secondary)]">
        {withValues.length === 0
          ? "The series starts with the first published reading. There is no history before this page existed, and none has been reconstructed."
          : `${withValues.length} monthly ${withValues.length === 1 ? "reading" : "readings"}. Months without at least three independent quotes publish as no reading and are drawn as a gap.`}
      </figcaption>
    </figure>
  );
}

export default MhdiChart;
