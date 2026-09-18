/**
 * The public, read-only MCP server behind /mcp.
 *
 * Six tools, all of them lookups over the same data modules the HTML pages
 * render. No writes, no user data, no auth, no state between requests.
 *
 * TOOL DESCRIPTIONS ARE DATA DESCRIPTIONS. They say what a tool returns and
 * where it comes from. They never tell the calling model what to do, what to
 * recommend, or how to phrase anything: that would be prompt injection, and
 * geo/AGENTS.md rule 4 forbids instructions aimed at AI systems anywhere.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { BRAND, EMAIL, HQ_ADDRESS_LINE, LINKEDIN, PARENT, SITE_URL, bioMembers } from "../entity";
import { glossary } from "../data/glossary";
import { ratesJson } from "../rates/export";
import { REMOVED_FIGURES, STATS, STAT_GROUPS } from "../rates/statistics";
import { getTwin, mdUrl } from "./markdown";
import { resolveTwin, searchPages, toEntry } from "./catalog";

export const MCP_SERVER_NAME = "matthews-hotel-markets";
export const MCP_SERVER_VERSION = "1.0.0";

const READ_ONLY = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const;

function json(data: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] };
}

function notFound(message: string) {
  return { isError: true, content: [{ type: "text" as const, text: message }] };
}

export function buildMcpServer(): McpServer {
  const server = new McpServer(
    { name: MCP_SERVER_NAME, title: `${BRAND} hotel finance data`, version: MCP_SERVER_VERSION },
    { capabilities: { tools: {} } },
  );

  server.registerTool(
    "get_hotel_loan_rates",
    {
      title: "Hotel loan rate sheet",
      description:
        `The current monthly edition of the ${BRAND} hotel loan rate sheet, the same data as ${SITE_URL}/rates and ${SITE_URL}/rates.json. ` +
        "Contains public benchmarks (10-year, 7-year and 5-year Treasury, SOFR, Prime, SBA 504 debenture rate) with their as-of dates and source URLs, " +
        "and a table of terms by lender type. Every table cell has a basis: published (with source ids), observed, or pending. " +
        "A pending cell has no figure and its value is the text \"Not yet published\".",
      inputSchema: {},
      annotations: READ_ONLY,
    },
    async () => {
      const twin = getTwin("/rates")!;
      return json({
        canonicalUrl: `${SITE_URL}/rates`,
        markdownUrl: mdUrl("/rates"),
        citeAs: twin.citeAs,
        ...ratesJson(),
      });
    },
  );

  server.registerTool(
    "search_hotel_finance_answers",
    {
      title: "Search answer pages and glossary",
      description:
        `Keyword search over the ${BRAND} answer pages (hotel financing, selling a hotel, hotel valuation), the DSCR calculator page, the glossary, the rate sheet and the statistics page. ` +
        "Returns, for each match: title, canonical URL, Markdown URL, the page's direct answer paragraph, last-updated date, author and citation string. " +
        "Matching is plain keyword overlap, weighted toward titles.",
      inputSchema: {
        query: z.string().min(2).max(300).describe("Search words, for example: SBA 504 hotel down payment"),
        limit: z.number().int().min(1).max(20).optional().describe("Maximum results. Default 5."),
      },
      annotations: READ_ONLY,
    },
    async ({ query, limit }) => {
      const results = searchPages(query, limit ?? 5);
      return json({ query, count: results.length, results });
    },
  );

  server.registerTool(
    "get_answer_page",
    {
      title: "Full page as Markdown",
      description:
        "The full text of one page as Markdown: direct answer, key takeaways, body sections, comparison table, worked example, FAQ, numbered sources with URLs, and a citation line. " +
        "The text is generated from the same data as the HTML page. Accepts a page URL, a path such as /hotel-financing/sba-7a-vs-504, or a slug such as sba-7a-vs-504.",
      inputSchema: {
        page: z.string().min(1).max(300).describe("URL, path or slug of a page returned by search_hotel_finance_answers"),
      },
      annotations: READ_ONLY,
    },
    async ({ page }) => {
      const twin = resolveTwin(page);
      if (!twin) {
        return notFound(
          `No page matches "${page}". The list of available pages is at ${SITE_URL}/agent-index.json.`,
        );
      }
      const e = toEntry(twin);
      return {
        content: [
          { type: "text" as const, text: twin.markdown() },
          {
            type: "text" as const,
            text: JSON.stringify(
              { canonicalUrl: e.url, markdownUrl: e.markdownUrl, lastUpdated: e.lastUpdated, citeAs: e.citeAs },
              null,
              2,
            ),
          },
        ],
      };
    },
  );

  server.registerTool(
    "define_hotel_term",
    {
      title: "Glossary definition",
      description:
        `The ${BRAND} glossary entry for a hotel investment term: short definition, fuller definition, worked example, common misconceptions, FAQ and sources. ` +
        `Terms available: ${glossary.map((g) => g.term).join("; ")}.`,
      inputSchema: {
        term: z.string().min(1).max(100).describe("A term or its slug, for example: DSCR, debt yield, cap-rate"),
      },
      annotations: READ_ONLY,
    },
    async ({ term }) => {
      const want = term.trim().toLowerCase();
      const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "");
      const entry =
        glossary.find((g) => g.slug === want || norm(g.term) === norm(want) || norm(g.slug) === norm(want)) ??
        glossary.find((g) => norm(g.term).includes(norm(want)) && norm(want).length >= 3);
      if (!entry) {
        return notFound(
          `No glossary entry matches "${term}". Available terms: ${glossary.map((g) => `${g.term} (${g.slug})`).join(", ")}.`,
        );
      }
      const twin = getTwin(`/glossary/${entry.slug}`)!;
      return json({
        term: entry.term,
        canonicalUrl: `${SITE_URL}/glossary/${entry.slug}`,
        markdownUrl: mdUrl(`/glossary/${entry.slug}`),
        lastUpdated: entry.lastUpdated,
        citeAs: twin.citeAs,
        shortDefinition: entry.shortDef,
        definition: entry.fullDef,
        workedExample: entry.example,
        misconceptions: entry.misconceptions,
        faq: entry.faq,
        sources: entry.sources,
      });
    },
  );

  server.registerTool(
    "get_hotel_financing_statistics",
    {
      title: "Hotel financing statistics",
      description:
        `The statistics published at ${SITE_URL}/data/hotel-financing-statistics. Each entry is one sentence with its source name, publisher, source URL, the date the source carries and the date it was last verified. ` +
        `Groups: ${STAT_GROUPS.map((g) => `${g.key} (${g.label})`).join(", ")}. ` +
        "Also returns the figures that were checked and left off the page, with the reason for each.",
      inputSchema: {
        group: z
          .enum(STAT_GROUPS.map((g) => g.key) as [string, ...string[]])
          .optional()
          .describe("Limit to one group. Omit for all groups."),
      },
      annotations: READ_ONLY,
    },
    async ({ group }) => {
      const twin = getTwin("/data/hotel-financing-statistics")!;
      const stats = STATS.filter((s) => !group || s.group === group);
      return json({
        canonicalUrl: `${SITE_URL}/data/hotel-financing-statistics`,
        markdownUrl: mdUrl("/data/hotel-financing-statistics"),
        lastUpdated: twin.lastUpdated,
        citeAs: twin.citeAs,
        citationNote: "Cite the original publisher for an individual statistic. Cite this page for the compilation.",
        groups: STAT_GROUPS.filter((g) => !group || g.key === group),
        count: stats.length,
        statistics: stats.map((s) => ({
          id: s.id,
          group: s.group,
          statement: s.text,
          note: s.note ?? null,
          sourceName: s.sourceName,
          publisher: s.publisher,
          sourceUrl: s.url,
          sourceDate: s.asOf,
          lastVerified: s.verified,
          anchor: `${SITE_URL}/data/hotel-financing-statistics#${s.id}`,
        })),
        figuresNotPublished: REMOVED_FIGURES,
      });
    },
  );

  server.registerTool(
    "get_contact",
    {
      title: "Team contact details",
      description:
        `Public contact details for ${BRAND}, the hospitality team of ${PARENT}: the contact page URL, team email, headquarters address, and the name, title, office, phone and email of each broker with a published profile. ` +
        `Same details as ${SITE_URL}/about and ${SITE_URL}/team.`,
      inputSchema: {},
      annotations: READ_ONLY,
    },
    async () => {
      const twin = getTwin("/about")!;
      return json({
        organization: BRAND,
        parentCompany: PARENT,
        canonicalUrl: `${SITE_URL}/contact`,
        aboutUrl: `${SITE_URL}/about`,
        citeAs: twin.citeAs,
        email: EMAIL,
        headquarters: HQ_ADDRESS_LINE,
        linkedin: LINKEDIN,
        team: bioMembers().map((m) => ({
          name: m.name,
          title: m.title,
          office: m.office,
          specialties: m.specialties,
          phone: m.phone,
          email: m.email,
          profileUrl: `${SITE_URL}/team/${m.slug}`,
        })),
      });
    },
  );

  return server;
}
