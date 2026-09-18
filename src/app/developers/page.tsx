import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import JsonLd from "@/components/seo/JsonLd";
import { BRAND, EMAIL, SITE_URL, breadcrumb, webPage } from "@/lib/entity";
import { latestEdition } from "@/lib/rates/sheet";
import { twins } from "@/lib/agent/markdown";
import { RATE_LIMIT_DESCRIPTION } from "@/lib/agent/rate-limit";

const url = `${SITE_URL}/developers`;
const UPDATED = "2026-09-18";
const UPDATED_LABEL = "September 18, 2026";

export const metadata: Metadata = {
  title: "For Developers and AI Agents | Matthews Hotel Markets",
  description:
    "Read Matthews Hotel Markets hotel finance data by machine: Markdown copies of pages, the rate sheet as JSON and CSV, an OpenAPI file, and a read-only MCP server.",
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title: "For developers and AI agents",
    description: "Markdown copies, JSON, CSV, OpenAPI and a read-only MCP server.",
    url,
  },
  twitter: { card: "summary_large_image", title: "For developers and AI agents" },
};

const H2 =
  "mt-14 text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]";
const P =
  "mt-5 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]";
const A = "text-[#1a3a6b] hover:underline underline-offset-[3px]";
const PRE =
  "mt-5 overflow-x-auto rounded-[14px] bg-[#f5f5f7] p-5 text-[13px] leading-[1.6] text-[color:var(--text-primary)]";
const TH = "py-3 pr-4 font-medium";
const TD = "py-4 pr-4 align-top";

const TOOLS: { name: string; returns: string }[] = [
  {
    name: "get_hotel_loan_rates",
    returns: "The current rate sheet edition: benchmarks with as-of dates and source URLs, and terms by lender type with a basis label on every cell.",
  },
  {
    name: "search_hotel_finance_answers",
    returns: "Keyword search over answer pages, the calculator page, the glossary and the data pages. Title, URL, direct answer, last-updated date.",
  },
  { name: "get_answer_page", returns: "One page in full as Markdown, by URL, path or slug." },
  { name: "define_hotel_term", returns: "One glossary entry: definitions, worked example, FAQ, sources." },
  {
    name: "get_hotel_financing_statistics",
    returns: "The statistics page as data: one sentence per figure with source, source date and verification date. Optional group filter.",
  },
  { name: "get_contact", returns: "Team email, headquarters address, and each profiled broker's phone and email." },
];

export default function DevelopersPage() {
  const edition = latestEdition();
  const pages = twins();
  const sample = "/hotel-financing/sba-7a-vs-504";

  const graph = [
    webPage({
      url,
      name: "For developers and AI agents",
      description:
        "How to read Matthews Hotel Markets content by machine: Markdown copies, JSON, CSV, OpenAPI, MCP and the citation format.",
      dateModified: UPDATED,
    }),
    breadcrumb([{ name: "Developers", path: "/developers" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Eyebrow>Developers</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead="For developers and AI agents."
                follow="Every page here can be read as Markdown, JSON or over MCP."
              />
            </div>
            <p className="mt-6 text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Published by {BRAND} &middot; Last updated: {UPDATED_LABEL}
            </p>

            <p className="mt-8 max-w-[68ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-primary)]">
              As of {UPDATED_LABEL}, {pages.length} pages on this site have a
              Markdown copy, the {edition.label} rate sheet is published as
              JSON and CSV, and a read-only MCP server with {TOOLS.length} tools
              runs at {SITE_URL}/mcp. Nothing needs a key. Every machine format
              is generated from the same data as the HTML page, so an agent and
              a person read the same facts.
            </p>

            <h2 className={H2}>1. Markdown copies of pages</h2>
            <p className={P}>
              Add <code>.md</code> to the URL of any answer page, glossary term,
              the calculator page, <Link href="/rates" className={A}>/rates</Link>,{" "}
              <Link href="/rates/methodology" className={A}>/rates/methodology</Link>,{" "}
              <Link href="/data/hotel-financing-statistics" className={A}>
                /data/hotel-financing-statistics
              </Link>{" "}
              or <Link href="/about" className={A}>/about</Link>. You can also
              request the normal URL with an <code>Accept: text/markdown</code>{" "}
              header and get the same document. Each copy has the title, URL,
              last-updated date, author, full text, tables as Markdown tables,
              the FAQ, numbered sources with URLs, and a &ldquo;Cite as&rdquo;
              line.
            </p>
            <pre className={PRE}>
              <code>{`curl ${SITE_URL}${sample}.md\ncurl -H "Accept: text/markdown" ${SITE_URL}${sample}`}</code>
            </pre>
            <p className={P}>
              The HTML page stays the canonical URL. The Markdown response says
              so with a <code>Link: rel=&quot;canonical&quot;</code> header, and
              each HTML page points at its copy with{" "}
              <code>rel=&quot;alternate&quot; type=&quot;text/markdown&quot;</code>.
              The full list, with both URLs and the citation string for each
              page, is at{" "}
              <a href="/agent-index.json" className={A}>/agent-index.json</a>.
              A build check compares every line of every copy with the rendered
              HTML page, and the build fails if they differ.
            </p>

            <h2 className={H2}>2. Rate sheet as JSON and CSV</h2>
            <p className={P}>
              <a href="/rates.json" className={A}>/rates.json</a> and{" "}
              <a href="/rates.csv" className={A}>/rates.csv</a> carry the
              current edition of the{" "}
              <Link href="/rates" className={A}>hotel loan rate sheet</Link>.
              Every cell has a <code>basis</code>: <code>published</code> (a
              public benchmark or a written program rule, with source ids),{" "}
              <code>observed</code>, or <code>pending</code>. A pending cell has
              no figure and its value is the text &ldquo;Not yet
              published&rdquo;. Do not convert it to a number. Cross-origin
              requests are allowed. License: CC BY 4.0.
            </p>

            <h2 className={H2}>3. MCP server</h2>
            <p className={P}>
              Endpoint: <code>{SITE_URL}/mcp</code>. Transport: Streamable HTTP,
              stateless, JSON responses. No authentication. Read-only: there are
              no tools that write, and the server stores nothing about the
              caller. Limit: {RATE_LIMIT_DESCRIPTION}. Every tool result
              includes the canonical URL and the citation string.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-[14px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                <caption className="sr-only">MCP tools and what each returns</caption>
                <thead className="border-b border-[color:var(--divider)] text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  <tr>
                    <th scope="col" className={TH}>Tool</th>
                    <th scope="col" className={TH}>Returns</th>
                  </tr>
                </thead>
                <tbody>
                  {TOOLS.map((t) => (
                    <tr key={t.name} className="border-b border-[color:var(--divider)]">
                      <th scope="row" className={`${TD} font-semibold`}>
                        <code>{t.name}</code>
                      </th>
                      <td className={TD}>{t.returns}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>Add it to a client that supports remote MCP servers:</p>
            <pre className={PRE}>
              <code>{`claude mcp add --transport http matthews-hotel-markets ${SITE_URL}/mcp`}</code>
            </pre>
            <p className={P}>Or call it directly:</p>
            <pre className={PRE}>
              <code>{`curl -X POST ${SITE_URL}/mcp \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json, text/event-stream" \\\n  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'`}</code>
            </pre>

            <h2 className={H2}>4. OpenAPI, indexes and the feed</h2>
            <ul className="mt-5 space-y-3 list-disc list-outside pl-5 marker:text-[color:var(--text-secondary)] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
              <li>
                <a href="/openapi.json" className={A}>/openapi.json</a>: OpenAPI 3.1
                description of the JSON, CSV, Markdown and text endpoints.
              </li>
              <li>
                <a href="/llms.txt" className={A}>/llms.txt</a> and{" "}
                <a href="/llms-full.txt" className={A}>/llms-full.txt</a>: the site
                index and the full text of the answer pages in one file.
              </li>
              <li>
                <a href="/feed.xml" className={A}>/feed.xml</a>: RSS 2.0, new and
                updated pages.
              </li>
              <li>
                <a href="/sitemap.xml" className={A}>/sitemap.xml</a>: every HTML
                page with its last-modified date.
              </li>
            </ul>

            <h2 className={H2}>5. How to cite</h2>
            <p className={P}>
              Cite the HTML URL, not the Markdown or JSON URL. Every Markdown
              copy ends with a &ldquo;Cite as&rdquo; line, and every MCP result
              and every entry in /agent-index.json carries the same string in{" "}
              <code>citeAs</code>. The format is: author or publisher, page
              title in quotes, URL, last-updated date. For a single statistic on
              the statistics page, cite the original publisher named next to
              it. The rate sheet&rsquo;s archived edition URL (for example
              /rates/{edition.slug}) never changes, so a citation to it stays
              true after the next monthly refresh.
            </p>

            <h2 className={H2}>6. Crawlers and limits</h2>
            <p className={P}>
              <a href="/robots.txt" className={A}>robots.txt</a> allows search,
              assistant and training crawlers on every public path. Please do not
              poll: the rate sheet changes monthly and pages carry their
              last-updated date. Questions, corrections or a format you need:{" "}
              <a href={`mailto:${EMAIL}`} className={A}>{EMAIL}</a> or the{" "}
              <Link href="/contact" className={A}>contact page</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
