/**
 * The Dataset node for /rates, built to the shape Agent 3 specified in
 * geo/requests.md and modeled on the working Dataset on /research/mhi/[quarter].
 *
 * Two rules this file exists to keep:
 *   1. Every property here mirrors something visible on the page. The license,
 *      the citations, the variables, the temporal coverage and the download
 *      URLs are all printed in the page body.
 *   2. Nothing licensed goes in `distribution` or `variableMeasured`. This
 *      dataset redistributes public benchmarks and this team's own
 *      observations. No STR, CoStar or Trepp subscriber data, ever.
 */

import { ID, SITE_URL, breadcrumb, webPage } from "@/lib/entity";
import { RATE_SOURCES } from "./sources";
import {
  BENCHMARKS,
  MHDI_ABBR,
  MHDI_DEFINITION,
  MHDI_NAME,
  citedSourceIds,
} from "./sheet";
import type { JsonLdNode } from "@/lib/entity";
import type { RateEdition } from "./types";

export const RATES_LICENSE = "https://creativecommons.org/licenses/by/4.0/";

export function ratesDatasetGraph(
  edition: RateEdition,
  opts: { isArchive: boolean },
): JsonLdNode[] {
  const url = opts.isArchive
    ? `${SITE_URL}/rates/${edition.slug}`
    : `${SITE_URL}/rates`;

  const name = `Matthews Hotel Markets Hotel Loan Rate Sheet, ${edition.label}`;
  const description = edition.directAnswer;

  const cited = citedSourceIds(edition);
  const sources = RATE_SOURCES.filter((s) => cited.includes(s.id));

  const dataset: JsonLdNode = {
    "@type": "Dataset",
    "@id": `${url}#dataset`,
    name,
    alternateName: `Hotel Loan Rate Sheet ${edition.label}`,
    description,
    url,
    identifier: `mhm-rate-sheet-${edition.slug}`,
    license: RATES_LICENSE,
    isAccessibleForFree: true,
    creator: { "@id": ID.org },
    publisher: { "@id": ID.org },
    datePublished: edition.publishedAt,
    dateModified: edition.modifiedAt ?? edition.publishedAt,
    temporalCoverage: edition.slug,
    spatialCoverage: { "@type": "Country", name: "United States" },
    keywords: [
      "hotel loan rates",
      "hotel financing",
      "SBA 7(a)",
      "SBA 504",
      "CMBS",
      "bridge loan",
      "hotel debt",
      edition.label,
    ].join(", "),
    variableMeasured: [
      ...BENCHMARKS.map((b) => ({
        "@type": "PropertyValue",
        name: b.label,
        value: b.value,
        unitText: "percent",
        measurementTechnique: `Published by ${b.sourceName}, observation dated ${b.asOf}`,
      })),
      {
        "@type": "PropertyValue",
        name: "Maximum allowable SBA 7(a) interest rate",
        unitText: "percent",
        description:
          "Prime plus SBA's published maximum spread of 3.00% for a variable-rate 7(a) loan over $350,000.",
      },
      {
        "@type": "PropertyValue",
        name: "Maximum SBA 504 loan to cost for a hotel",
        value: 85,
        unitText: "percent",
        description:
          "13 CFR 120.910 requires a borrower contribution of at least 15% on a limited or special purpose property.",
      },
      {
        "@type": "PropertyValue",
        name: `${MHDI_NAME} (${MHDI_ABBR})`,
        unitText: "percent",
        description: MHDI_DEFINITION,
        ...(edition.mhdi.value === null
          ? {
              measurementTechnique:
                "No reading published for this period. The series is not backfilled.",
            }
          : { value: edition.mhdi.value }),
      },
    ],
    distribution: [
      {
        "@type": "DataDownload",
        name: "Rate sheet, JSON",
        encodingFormat: "application/json",
        contentUrl: `${SITE_URL}/rates.json`,
      },
      {
        "@type": "DataDownload",
        name: "Rate sheet, CSV",
        encodingFormat: "text/csv",
        contentUrl: `${SITE_URL}/rates.csv`,
      },
    ],
    citation: sources.map((s) => ({
      "@type": "CreativeWork",
      name: s.name,
      url: s.url,
      datePublished: s.asOf,
      publisher: { "@type": "Organization", name: s.publisher },
    })),
  };

  return [
    webPage({
      url,
      name,
      description,
      mainEntity: `${url}#dataset`,
      datePublished: edition.publishedAt,
      dateModified: edition.modifiedAt ?? edition.publishedAt,
    }),
    dataset,
    breadcrumb(
      opts.isArchive
        ? [
            { name: "Rate sheet", path: "/rates" },
            { name: edition.label, path: `/rates/${edition.slug}` },
          ]
        : [{ name: "Rate sheet", path: "/rates" }],
    ),
  ];
}
