/**
 * OpenAPI 3.1 description of the public, read-only HTTP endpoints that exist
 * on this site. It describes only what is actually served: /rates.json,
 * /rates.csv, /agent-index.json, the Markdown twins, the text indexes and the
 * feed. The MCP endpoint is JSON-RPC, not REST, so it is referenced in
 * `externalDocs` and on /developers rather than modelled as paths here.
 */
import { BRAND, EMAIL, SITE_URL } from "../entity";
import { RATES_LICENSE } from "../rates/jsonld";
import { twins } from "./markdown";

const cell = {
  type: "object",
  required: ["basis", "value", "note", "sources", "quoteCount"],
  properties: {
    basis: {
      type: "string",
      enum: ["published", "observed", "pending"],
      description:
        "published: public benchmark or written program rule with source ids. observed: seen in live quotes that month. pending: no figure exists.",
    },
    value: { type: "string", description: 'The figure as text. For basis=pending this is the literal "Not yet published".' },
    note: { type: "string" },
    sources: { type: "array", items: { type: "string" }, description: "Ids into the top-level sources array." },
    quoteCount: { type: ["integer", "null"] },
  },
} as const;

export function openApiDocument() {
  const twinPaths = twins().map((t) => t.path);
  return {
    openapi: "3.1.0",
    info: {
      title: `${BRAND} public data`,
      version: "1.0.0",
      summary: "Read-only hotel finance data: the monthly rate sheet, Markdown copies of pages, and indexes.",
      description:
        "All endpoints are GET, unauthenticated and CORS-enabled. Every machine format is generated from the same data as the HTML page it mirrors. " +
        "The HTML page is the canonical URL to cite.",
      contact: { name: BRAND, email: EMAIL, url: `${SITE_URL}/contact` },
      license: { name: "CC BY 4.0 (rate sheet and statistics datasets)", url: RATES_LICENSE },
    },
    servers: [{ url: SITE_URL }],
    externalDocs: { description: "Developer and agent documentation, including the MCP endpoint", url: `${SITE_URL}/developers` },
    paths: {
      "/rates.json": {
        get: {
          operationId: "getRatesJson",
          summary: "Current hotel loan rate sheet edition as JSON",
          responses: {
            "200": {
              description: "The current edition.",
              content: { "application/json": { schema: { $ref: "#/components/schemas/RateSheet" } } },
            },
          },
        },
      },
      "/rates.csv": {
        get: {
          operationId: "getRatesCsv",
          summary: "Current hotel loan rate sheet edition as CSV",
          description:
            "Comment lines starting with # carry the citation and license. Columns: lender_type, field, basis, value, note, source_ids, quote_count.",
          responses: { "200": { description: "CSV.", content: { "text/csv": { schema: { type: "string" } } } } },
        },
      },
      "/agent-index.json": {
        get: {
          operationId: "getAgentIndex",
          summary: "List of pages that have a Markdown copy",
          responses: {
            "200": {
              description: "Index.",
              content: { "application/json": { schema: { $ref: "#/components/schemas/AgentIndex" } } },
            },
          },
        },
      },
      "/{pagePath}.md": {
        get: {
          operationId: "getMarkdownTwin",
          summary: "Markdown copy of a page",
          description:
            "Append .md to the path of any page listed in /agent-index.json. The same document is returned when the HTML URL is requested with an Accept header containing text/markdown. " +
            'The response carries Link: <html-url>; rel="canonical".',
          parameters: [
            {
              name: "pagePath",
              in: "path",
              required: true,
              description: "Page path without the leading slash. May contain slashes.",
              schema: { type: "string", enum: twinPaths.map((p) => p.slice(1)) },
            },
          ],
          responses: {
            "200": { description: "Markdown.", content: { "text/markdown": { schema: { type: "string" } } } },
            "404": { description: "No Markdown copy exists for that path." },
          },
        },
      },
      "/llms.txt": {
        get: {
          operationId: "getLlmsTxt",
          summary: "Site index in the llms.txt format",
          responses: { "200": { description: "Text.", content: { "text/plain": { schema: { type: "string" } } } } },
        },
      },
      "/llms-full.txt": {
        get: {
          operationId: "getLlmsFullTxt",
          summary: "Full text of the answer pages, calculators and glossary in one file",
          responses: { "200": { description: "Text.", content: { "text/plain": { schema: { type: "string" } } } } },
        },
      },
      "/feed.xml": {
        get: {
          operationId: "getFeed",
          summary: "RSS 2.0 feed of new and updated pages",
          responses: { "200": { description: "RSS.", content: { "application/rss+xml": { schema: { type: "string" } } } } },
        },
      },
    },
    components: {
      schemas: {
        Cell: cell,
        RateSheet: {
          type: "object",
          required: ["dataset", "publisher", "url", "edition", "published", "modified", "citation", "benchmarks", "rows", "sources"],
          properties: {
            dataset: { type: "string" },
            publisher: { type: "string" },
            url: { type: "string", format: "uri" },
            permalink: { type: "string", format: "uri", description: "URL of the archived edition. It does not change." },
            edition: { type: "string", description: "YYYY-MM" },
            published: { type: "string", format: "date" },
            modified: { type: "string", format: "date" },
            corrections: { type: "array", items: { type: "object" } },
            nextRefresh: { type: "string", format: "date" },
            license: { type: "string", format: "uri" },
            citation: { type: "string" },
            readme: { type: "string" },
            benchmarksFetchedAt: { type: "string" },
            benchmarks: {
              type: "array",
              items: {
                type: "object",
                required: ["key", "label", "percent", "asOf", "source", "sourceUrl"],
                properties: {
                  key: { type: "string" },
                  label: { type: "string" },
                  percent: { type: "number" },
                  asOf: { type: "string", format: "date", description: "Date of the observation, not the fetch date." },
                  seriesId: { type: ["string", "null"] },
                  source: { type: "string" },
                  sourceUrl: { type: "string", format: "uri" },
                },
              },
            },
            index: { type: "object", description: "The Matthews Hotel Debt Index reading. percent is null until published." },
            rows: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: { type: "string" },
                  lenderType: { type: "string" },
                  summary: { type: "string" },
                  indexLabel: { type: "string" },
                  indexKeys: { type: "array", items: { type: "string" } },
                  notes: { type: "string" },
                  spread: { $ref: "#/components/schemas/Cell" },
                  all_in_coupon: { $ref: "#/components/schemas/Cell" },
                  max_ltv_ltc: { $ref: "#/components/schemas/Cell" },
                  dscr_floor: { $ref: "#/components/schemas/Cell" },
                  term_amortization: { $ref: "#/components/schemas/Cell" },
                  recourse: { $ref: "#/components/schemas/Cell" },
                  minimum_loan: { $ref: "#/components/schemas/Cell" },
                },
              },
            },
            changelog: { type: "array", items: { type: "string" } },
            sources: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  name: { type: "string" },
                  publisher: { type: "string" },
                  url: { type: "string", format: "uri" },
                  sourceDate: { type: "string" },
                  lastVerified: { type: "string" },
                },
              },
            },
          },
        },
        AgentIndex: {
          type: "object",
          properties: {
            publisher: { type: "string" },
            site: { type: "string", format: "uri" },
            description: { type: "string" },
            documentation: { type: "string", format: "uri" },
            pages: {
              type: "array",
              items: {
                type: "object",
                required: ["title", "kind", "url", "markdownUrl", "lastUpdated", "directAnswer", "citeAs"],
                properties: {
                  title: { type: "string" },
                  kind: { type: "string", enum: ["answer", "tool", "glossary", "data", "about"] },
                  url: { type: "string", format: "uri", description: "Canonical HTML URL." },
                  markdownUrl: { type: "string", format: "uri" },
                  lastUpdated: { type: "string", format: "date" },
                  directAnswer: { type: "string" },
                  author: { type: ["string", "null"] },
                  citeAs: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  };
}
