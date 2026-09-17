/**
 * Serializers for /rates.json and /rates.csv.
 *
 * The contract both formats keep: every value ships next to its `basis`. A
 * consumer that only reads the `value` field of a pending cell gets the
 * string "Not yet published", not an empty string, not null, and never a
 * number. There is no shape of this payload in which a gap can be silently
 * parsed as data.
 */

import { SITE_URL } from "@/lib/entity";
import { RATE_SOURCES } from "./sources";
import {
  BENCHMARKS,
  BENCHMARKS_FETCHED_AT,
  MHDI_ABBR,
  MHDI_DEFINITION,
  MHDI_NAME,
  MHDI_RULES,
  citationString,
  latestEdition,
} from "./sheet";
import { RATES_LICENSE } from "./jsonld";
import type { Cell, RateRow } from "./types";

const PENDING_TEXT = "Not yet published";

function flatten(cell: Cell): {
  basis: Cell["basis"];
  value: string;
  note: string;
  sources: string[];
  quoteCount: number | null;
} {
  if (cell.basis === "pending") {
    return {
      basis: "pending",
      value: PENDING_TEXT,
      note: cell.awaits,
      sources: [],
      quoteCount: null,
    };
  }
  if (cell.basis === "observed") {
    return {
      basis: "observed",
      value: cell.value,
      note: cell.note ?? "",
      sources: [],
      quoteCount: cell.quoteCount ?? null,
    };
  }
  return {
    basis: "published",
    value: cell.value,
    note: cell.note ?? "",
    sources: cell.sources,
    quoteCount: null,
  };
}

const FIELDS: { key: keyof RateRow; label: string }[] = [
  { key: "spread", label: "spread" },
  { key: "allIn", label: "all_in_coupon" },
  { key: "maxLtv", label: "max_ltv_ltc" },
  { key: "dscrFloor", label: "dscr_floor" },
  { key: "termAmort", label: "term_amortization" },
  { key: "recourse", label: "recourse" },
  { key: "minLoan", label: "minimum_loan" },
];

export function ratesJson() {
  const e = latestEdition();
  return {
    dataset: `${MHM_DATASET_NAME} ${e.label}`,
    publisher: "Matthews Hotel Markets",
    url: `${SITE_URL}/rates`,
    permalink: `${SITE_URL}/rates/${e.slug}`,
    edition: e.slug,
    published: e.publishedAt,
    nextRefresh: e.nextRefresh,
    license: RATES_LICENSE,
    citation: citationString(e, SITE_URL),
    readme:
      "Every cell carries a `basis`. basis=published means a public benchmark or a written program rule with a source id. basis=observed means a figure this desk saw in live quotes that month. basis=pending means there is no figure and `value` is the literal string 'Not yet published'. Do not coerce a pending value to a number.",
    benchmarksFetchedAt: BENCHMARKS_FETCHED_AT,
    benchmarks: BENCHMARKS.map((b) => ({
      key: b.key,
      label: b.label,
      percent: b.value,
      asOf: b.asOf,
      seriesId: b.seriesId ?? null,
      source: b.sourceName,
      sourceUrl: b.sourceUrl,
    })),
    index: {
      name: MHDI_NAME,
      abbreviation: MHDI_ABBR,
      definition: MHDI_DEFINITION,
      rules: MHDI_RULES,
      period: e.mhdi.period,
      percent: e.mhdi.value,
      quoteCount: e.mhdi.quoteCount,
      note: e.mhdi.note ?? "",
      backfilled: false,
    },
    rows: e.rows.map((row) => {
      const out: Record<string, unknown> = {
        key: row.key,
        lenderType: row.lenderType,
        summary: row.summary,
        indexLabel: row.indexLabel,
        indexKeys: row.index,
        notes: row.notes,
      };
      for (const f of FIELDS) out[f.label] = flatten(row[f.key] as Cell);
      return out;
    }),
    changelog: e.changelog,
    sources: RATE_SOURCES.map((s) => ({
      id: s.id,
      name: s.name,
      publisher: s.publisher,
      url: s.url,
      sourceDate: s.asOf,
      lastVerified: s.verified,
    })),
  };
}

const MHM_DATASET_NAME = "Matthews Hotel Markets Hotel Loan Rate Sheet";

function csvCell(v: string): string {
  return `"${v.replace(/"/g, '""')}"`;
}

export function ratesCsv(): string {
  const e = latestEdition();
  const lines: string[] = [];

  lines.push(
    [
      "lender_type",
      "field",
      "basis",
      "value",
      "note",
      "source_ids",
      "quote_count",
    ]
      .map(csvCell)
      .join(","),
  );

  for (const b of BENCHMARKS) {
    lines.push(
      [
        "Public benchmark",
        b.key,
        "published",
        `${b.value.toFixed(2)}%`,
        `${b.sourceName}, observation dated ${b.asOf}`,
        b.sourceUrl,
        "",
      ]
        .map(csvCell)
        .join(","),
    );
  }

  for (const row of e.rows) {
    lines.push(
      [row.lenderType, "index", "published", row.indexLabel, row.notes, "", ""]
        .map(csvCell)
        .join(","),
    );
    for (const f of FIELDS) {
      const c = flatten(row[f.key] as Cell);
      lines.push(
        [
          row.lenderType,
          f.label,
          c.basis,
          c.value,
          c.note,
          c.sources.join(" "),
          c.quoteCount === null ? "" : String(c.quoteCount),
        ]
          .map(csvCell)
          .join(","),
      );
    }
  }

  lines.push(
    [
      MHDI_ABBR,
      "index_reading",
      e.mhdi.value === null ? "pending" : "observed",
      e.mhdi.value === null ? PENDING_TEXT : `${e.mhdi.value.toFixed(2)}%`,
      e.mhdi.note ?? "",
      "",
      e.mhdi.quoteCount === null ? "" : String(e.mhdi.quoteCount),
    ]
      .map(csvCell)
      .join(","),
  );

  const header = [
    `# ${MHM_DATASET_NAME}, ${e.label}`,
    `# ${citationString(e, SITE_URL)}`,
    `# License: ${RATES_LICENSE}`,
    `# basis=published: public benchmark or written program rule, see source_ids`,
    `# basis=observed: figure observed by Matthews Hotel Markets in live quotes that month`,
    `# basis=pending: no figure exists; value is the literal text "${PENDING_TEXT}"`,
  ].join("\n");

  return `${header}\n${lines.join("\n")}\n`;
}
