/**
 * TRACK RECORD: the single source of truth for every "how much have you done"
 * number on this site, with an `asOf` date and a source on each one.
 *
 * WHY THIS FILE EXISTS. Before 2026-09-17 the site stated three different
 * firm-level totals in one page load. `public/llms.txt` said the platform had
 * closed $84.3B; `HomeWhy.tsx` said $88.37B; `HomeStats.tsx` said "$890M+" with
 * the footnote "As of Q4 2021". Git shows $88.37B was a deliberate correction
 * (commit 46a027d, 2026-05-12, "update firm-wide stat to $88.37B (matthews.com
 * current)") that never propagated to the other surfaces. Separately,
 * "670+ hotel transactions", "1M+ relationships" and "founded as a dedicated
 * hospitality vertical in 2024" were in circulation with no source at all.
 *
 * HOW THE CONFLICT WAS RESOLVED, with receipts:
 *   - $88.37B and "30+ offices" are the figures matthews.com publishes on its
 *     own homepage, read 2026-09-17. They are current and they are the parent
 *     firm's own claim about itself.
 *   - $84.32B and 33,511 transactions are the figures in Matthews' press
 *     release of 2026-02-02. They are real but STALE: the live counter has
 *     moved since. $84.3B is therefore superseded, not wrong, and it does not
 *     appear anywhere on the site any more.
 *   - "670+ hotel transactions" could not be sourced to anything. REMOVED.
 *     `closed.ts` publishes 38 hospitality transactions and that is the number
 *     this site can stand behind, so the hospitality figures below are
 *     computed from that file rather than typed.
 *   - "1M+ investor relationships" could not be sourced. REMOVED.
 *   - A founding year for the hospitality vertical could not be sourced.
 *     ABSENT. (Matthews REIS itself marked a 10-year anniversary in 2025 per
 *     the same press release, so the parent's founding year is 2015; the
 *     vertical's is a separate claim and we do not make it.)
 *
 * RULES FOR EDITING THIS FILE:
 *   1. Every figure carries `asOf` and `source`. No exceptions.
 *   2. Parent-platform figures are the parent's claim about itself, and the
 *      site labels them that way. They are never presented as hospitality
 *      figures.
 *   3. Hospitality figures are computed from `closed.ts`, never typed, so they
 *      cannot drift from what /closed actually shows.
 *   4. If a figure cannot be re-verified at its source, delete it. Do not
 *      carry a number forward because it used to be here.
 */

import { closed, totalKnownVolume } from "@/lib/data/closed";
import { PARENT, PARENT_URL } from "@/lib/entity";

export type SourcedFigure = {
  /** The figure as it should be rendered. */
  value: string;
  /** What it counts, in plain English. */
  label: string;
  /** ISO date the figure was last verified at its source. */
  asOf: string;
  /** Human-readable attribution, rendered next to the figure. */
  source: string;
  sourceUrl: string;
};

/* ------------------------------------------------- the parent platform -- */

/**
 * Matthews Real Estate Investment Services, firm-wide, across every asset
 * class. NOT hospitality. Any surface using these must say whose numbers they
 * are.
 */
export const PLATFORM = {
  volume: {
    value: "$88.37B",
    label: `${PARENT} transaction volume, all asset classes`,
    asOf: "2026-09-17",
    source: "matthews.com, firm-published figure",
    sourceUrl: PARENT_URL,
  } satisfies SourcedFigure,
  offices: {
    value: "30+",
    label: `${PARENT} offices nationwide`,
    asOf: "2026-09-17",
    source: "matthews.com, firm-published figure",
    sourceUrl: PARENT_URL,
  } satisfies SourcedFigure,
} as const;

/** The single sentence every surface uses when it cites a platform figure. */
export const PLATFORM_ATTRIBUTION = `${PLATFORM.volume.source}, read September 17, 2026.`;

/* ------------------------------------------ hospitality, first-party --- */

function formatUsd(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${Math.floor(n / 1_000_000)}M+`;
  return `$${n.toLocaleString("en-US")}`;
}

const years = closed.map((d) => d.year).filter((y) => Number.isFinite(y));
const rooms = closed.reduce((n, d) => n + (d.keys || 0), 0);
const cities = new Set(closed.map((d) => `${d.city}|${d.state}`.toLowerCase())).size;
const states = new Set(closed.map((d) => d.state.toLowerCase())).size;

/**
 * Everything here is derived from `src/lib/data/closed.ts`, which is what
 * /closed renders. Add a deal to that file and every number below moves.
 */
export const HOSPITALITY = {
  /** Inclusive year range covered by the published deal list. */
  firstYear: Math.min(...years),
  lastYear: Math.max(...years),
  dealCount: closed.length,
  volume: formatUsd(totalKnownVolume(closed)),
  rooms,
  cities,
  states,
} as const;

/**
 * The footnote that goes under any hospitality track-record block. It replaces
 * the bare "As of Q4 2021" line, which was accurate about the data and
 * misleading about the page: the number is not stale, the published deal list
 * simply covers those years.
 */
export const HOSPITALITY_BASIS = `Based on the ${HOSPITALITY.dealCount} transactions published at /closed, ${HOSPITALITY.firstYear} to ${HOSPITALITY.lastYear}.`;

export const HOSPITALITY_VOLUME_FIGURE: SourcedFigure = {
  value: HOSPITALITY.volume,
  label: "Hospitality transaction volume published on this site",
  asOf: "2026-09-17",
  source: "Matthews Hotel Markets, computed from the deal list at /closed",
  sourceUrl: "/closed",
};
