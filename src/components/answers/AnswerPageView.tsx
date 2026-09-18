import * as React from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Pill } from "@/components/ui/Pill";
import Prose, { Inline } from "@/components/answers/Prose";
import JsonLd from "@/components/seo/JsonLd";
import {
  BRAND,
  ID,
  SITE_URL,
  articleNode,
  breadcrumb,
  collectionPageNode,
  faqPageNode,
  webApplicationNode,
  webPage,
  type JsonLdNode,
} from "@/lib/entity";
import { answerPath, clusters, type AnswerPage } from "@/lib/data/answers";
import type { ToolPage } from "@/lib/data/answers/types";
import { glossary } from "@/lib/data/glossary";
import { team } from "@/lib/data/team";
import { KNOWN_PATH_LABELS } from "@/lib/data/answers/path-labels";
import { DEFAULT_OG_IMAGES, seoTitle, socialTitle } from "@/lib/seo-meta";

/**
 * Template A (answer + hub) and Template D (tool) from geo/05-templates.md.
 *
 * SLOT ORDER IS THE CONTRACT. It is the order an extractor reads, so it is not
 * a styling preference: breadcrumb, H1, visible last-updated, the 40-70 word
 * direct answer, key takeaways, the first-party data point, body sections,
 * comparison table, (hub only) spoke list, worked example, FAQ, author box,
 * sources, related links, one CTA.
 *
 * Everything here is server-rendered. The only client component that ever
 * appears on one of these pages is the calculator island passed in as
 * `island`, and the page's explanation text, worked example, table and FAQ are
 * all in the HTML whether or not that island ever hydrates.
 */

export const CLUSTER_LABEL: Record<string, string> = {
  "hotel-financing": "Hotel Financing",
  "sell-a-hotel": "Sell a Hotel",
  "hotel-valuation": "Hotel Valuation",
  "buy-a-hotel": "Buy a Hotel",
  "hotel-franchise-costs": "Hotel Franchise Costs",
  "hotel-industry": "Hotel Industry Basics",
  tools: "Tools",
};

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function labelForPath(path: string): string {
  for (const c of clusters) {
    if (path === `/${c.cluster}`) return c.hub.h1;
    const spoke = c.spokes.find((s) => `/${c.cluster}/${s.slug}` === path);
    if (spoke) return spoke.h1;
  }
  const term = glossary.find((g) => `/glossary/${g.slug}` === path);
  if (term) return term.term;
  return KNOWN_PATH_LABELS[path] ?? path;
}

type Props = {
  page: AnswerPage | ToolPage;
  /** Hub pages render every spoke in their cluster (rule R6). */
  spokes?: AnswerPage[];
  /** The calculator island on a tool page. The only client component allowed. */
  island?: React.ReactNode;
  /** Extra JSON-LD nodes from the caller (a tool's WebApplication node). */
  extraGraph?: JsonLdNode[];
};

const H2 =
  "mt-14 text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f] scroll-mt-24";
const EYEBROW =
  "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";
const LINK =
  "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";

export function AnswerPageView({ page, spokes, island, extraGraph = [] }: Props) {
  const isTool = page.cluster === "tools";
  const path = isTool
    ? `/tools/${page.slug}`
    : answerPath(page as AnswerPage);
  const url = `${SITE_URL}${path}`;
  const isHub = !isTool && (page as AnswerPage).isHub;

  const author = team.find((m) => m.slug === page.authorSlug);
  const reviewer = page.reviewerSlug
    ? team.find((m) => m.slug === page.reviewerSlug)
    : undefined;

  const hubPath = page.related.hub;
  // The hub's own H1, which is what the breadcrumb and the related block on
  // this page already show, so the CollectionPage stub mirrors visible text.
  const hubTitle =
    clusters.find((c) => `/${c.cluster}` === hubPath)?.hub.h1 ?? hubPath;
  const clusterLabel = CLUSTER_LABEL[page.cluster] ?? page.cluster;
  const crumbs = isHub
    ? [{ name: clusterLabel, path }]
    : [
        { name: CLUSTER_LABEL[hubPath.slice(1)] ?? clusterLabel, path: hubPath },
        { name: page.title, path },
      ];

  const wordCount =
    page.answer.split(/\s+/).length +
    page.takeaways.join(" ").split(/\s+/).length +
    page.sections.reduce(
      (n, s) => n + s.lead.split(/\s+/).length + s.body.split(/\s+/).length,
      0,
    ) +
    page.workedExample.body.split(/\s+/).length +
    page.faq.reduce((n, f) => n + f.q.split(/\s+/).length + f.a.split(/\s+/).length, 0);

  const graph: JsonLdNode[] = [
    webPage({
      url,
      name: page.h1,
      description: page.description,
      mainEntity: isTool ? `${url}#app` : `${url}#article`,
      datePublished: page.lastUpdated,
      dateModified: page.lastUpdated,
    }),
    // The cluster CollectionPage. The hub emits the full node with every
    // spoke; a spoke emits a minimal one so its own `isPartOf` reference
    // resolves inside its own @graph rather than dangling
    // (scripts/schema-validate.ts fails the build on a dangling @id).
    ...(isHub
      ? [
          collectionPageNode({
            url,
            name: page.h1,
            description: page.description,
            dateModified: page.lastUpdated,
            hasPart: (spokes ?? []).map((s) => ({
              url: `${SITE_URL}${answerPath(s)}`,
              name: s.h1,
            })),
          }),
        ]
      : [
          {
            "@type": "CollectionPage",
            "@id": `${SITE_URL}${hubPath}#collection`,
            url: `${SITE_URL}${hubPath}`,
            name: hubTitle,
            isPartOf: { "@id": ID.website },
          },
        ]),
    articleNode({
      url,
      headline: page.h1,
      description: page.description,
      dateModified: page.lastUpdated,
      authorSlug: page.authorSlug,
      reviewerSlug: page.reviewerSlug,
      isPartOf: isHub ? undefined : `${SITE_URL}${hubPath}#collection`,
      citation: page.sources.map((s) => ({
        label: s.label,
        url: s.url,
        publisher: s.publisher,
      })),
      wordCount,
    }),
    // One FAQPage node, mirroring the visible FAQ block one for one.
    faqPageNode(url, page.faq),
    breadcrumb(crumbs.map((c) => ({ name: c.name, path: c.path }))),
    ...(isTool
      ? [
          webApplicationNode({
            url,
            name: page.title,
            description: page.description,
            dateModified: page.lastUpdated,
            featureList: (page as ToolPage).tool.outputs.map((o) => o.label),
          }),
        ]
      : []),
    ...extraGraph,
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <article className="bg-white pt-16 pb-24">
          <div className="mx-auto max-w-[692px] px-6">
            {/* A1 — breadcrumb */}
            <nav aria-label="Breadcrumb" className={EYEBROW}>
              <ol className="flex flex-wrap items-center gap-x-2">
                <li>
                  <Link href="/" className="hover:text-[#1d1d1f] transition-colors">
                    Home
                  </Link>
                </li>
                {crumbs.map((c, i) => (
                  <li key={c.path} className="flex items-center gap-x-2">
                    <span aria-hidden="true" className="opacity-60">
                      /
                    </span>
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page" className="text-[#1d1d1f]">
                        {c.name}
                      </span>
                    ) : (
                      <Link
                        href={c.path}
                        className="hover:text-[#1d1d1f] transition-colors"
                      >
                        {c.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* A2 — the question, exactly one H1 */}
            <h1 className="mt-6 text-[clamp(32px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.014em] text-[#1d1d1f]">
              {page.h1}
            </h1>

            {/* A3 — visible last updated, same value as dateModified */}
            <p className="mt-4 text-[13px] tracking-[-0.014em] text-[#86868b]">
              Last updated:{" "}
              <time dateTime={page.lastUpdated}>{formatDate(page.lastUpdated)}</time>
              {author && (
                <>
                  <span aria-hidden="true" className="mx-2 opacity-60">
                    ·
                  </span>
                  By{" "}
                  <Link href={`/team/${author.slug}`} className={LINK}>
                    {author.name}
                  </Link>
                  , {BRAND}
                </>
              )}
            </p>

            {/* A4 — the direct answer. First text after the date. No wind-up. */}
            <p className="mt-7 text-[19px] leading-[1.45] tracking-[0.012em] text-[#1d1d1f]">
              <Inline text={page.answer} />
            </p>

            {/* A5 — key takeaways, the only bullet list above the first H2 */}
            <section aria-labelledby="key-takeaways" className="mt-10">
              <h2 id="key-takeaways" className={EYEBROW}>
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-3">
                {page.takeaways.map((t, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-[16px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-[#1a3a6b]"
                    />
                    <Inline text={t} />
                  </li>
                ))}
              </ul>
            </section>

            {/* First-party data point. Spec 5.1 requires one per page and it
                must be visible, because the schema mirrors the page. */}
            <aside className="mt-10 rounded-[20px] border border-[#1a3a6b]/15 bg-[#f5f7fb] p-7">
              <h2 className={EYEBROW}>
                {page.originalDataPoint.source === "rates"
                  ? "From our rate sheet"
                  : "From the Matthews Hotel Index"}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]">
                <Inline text={page.originalDataPoint.sentence} />
              </p>
              <p className="mt-4 text-[13px]">
                <Link href={page.originalDataPoint.ref} className={LINK}>
                  {labelForPath(page.originalDataPoint.ref)}
                </Link>
              </p>
            </aside>

            {/* D6 — the calculator island, on tool pages only */}
            {island}

            {/* A6 — body sections. Each opens with its own one-sentence answer. */}
            {page.sections.map((s, i) => (
              <section key={i} aria-labelledby={`s-${i}`}>
                <h2 id={`s-${i}`} className={H2}>
                  {s.h2}
                </h2>
                <p className="mt-4 text-[17px] leading-[1.47] font-medium tracking-[-0.014em] text-[#1d1d1f]">
                  <Inline text={s.lead} />
                </p>
                <Prose text={s.body} className="mt-5" />
              </section>
            ))}

            {/* A7 — a real table. Tables extract; prose comparisons do not. */}
            <section aria-labelledby="comparison-table">
              <h2 id="comparison-table" className={H2}>
                {page.table.caption}
              </h2>
              <div className="mt-6 -mx-6 overflow-x-auto px-6">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <caption className="sr-only">{page.table.caption}</caption>
                  <thead>
                    <tr className="border-b border-[#1d1d1f]/20">
                      {page.table.columns.map((c) => (
                        <th
                          key={c}
                          scope="col"
                          className="py-3 pr-4 text-[13px] font-semibold tracking-[-0.01em] text-[#1d1d1f] align-bottom"
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.table.rows.map((row, ri) => (
                      <tr
                        key={ri}
                        className="border-b border-[color:var(--divider)] last:border-b-0"
                      >
                        {row.map((cell, ci) =>
                          ci === 0 ? (
                            <th
                              key={ci}
                              scope="row"
                              className="py-3 pr-4 text-[14px] font-medium leading-[1.4] tracking-[-0.014em] text-[#1d1d1f] align-top"
                            >
                              <Inline text={cell} />
                            </th>
                          ) : (
                            <td
                              key={ci}
                              className="py-3 pr-4 text-[14px] leading-[1.4] tracking-[-0.014em] text-[#424245] align-top"
                            >
                              <Inline text={cell} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* A8 — hub only: every spoke, anchored on that spoke's own H1 (R6) */}
            {isHub && spokes && spokes.length > 0 && (
              <section aria-labelledby="spokes">
                <h2 id="spokes" className={H2}>
                  Every question in this guide
                </h2>
                <ul className="mt-6 divide-y divide-[color:var(--divider)]">
                  {spokes.map((s) => (
                    <li key={s.slug} className="py-4 first:pt-0">
                      <Link href={answerPath(s)} className={`${LINK} text-[17px]`}>
                        {s.h1}
                      </Link>
                      <p className="mt-1 text-[14px] leading-[1.45] tracking-[-0.014em] text-[#86868b]">
                        {s.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* A9 — worked example, arithmetic shown */}
            <section aria-labelledby="worked-example" className="mt-14">
              <div className="rounded-[22px] bg-[#0a1226] p-8 text-white">
                <h2 id="worked-example" className={`${EYEBROW} text-white/70`}>
                  Worked example
                </h2>
                <p className="mt-3 text-[17px] font-semibold tracking-[-0.014em] text-white">
                  {page.workedExample.label}
                </p>
                <Prose
                  text={page.workedExample.body}
                  className="mt-4"
                  paragraphClass="text-[15px] leading-[1.55] tracking-[-0.014em] text-white/90 mt-4 first:mt-0"
                />
              </div>
            </section>

            {/* A10 — FAQ, visible, mirrored 1:1 into FAQPage JSON-LD */}
            <section aria-labelledby="faq">
              <h2 id="faq" className={H2}>
                Frequently asked
              </h2>
              <dl className="mt-6 divide-y divide-[color:var(--divider)]">
                {page.faq.map((f, i) => (
                  <div key={i} className="py-6 first:pt-0 last:pb-0">
                    <dt className="text-[18px] font-semibold tracking-[-0.014em] text-[#1d1d1f]">
                      {f.q}
                    </dt>
                    <dd className="mt-3 text-[15px] leading-[1.55] tracking-[-0.014em] text-[#424245]">
                      <Inline text={f.a} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* A11 — author box. Only the three brokers with published bios. */}
            {author && (
              <section
                aria-labelledby="author"
                className="mt-14 rounded-[20px] bg-[#f5f5f7] p-7"
              >
                <h2 id="author" className={EYEBROW}>
                  Who wrote this
                </h2>
                <p className="mt-3 text-[17px] font-semibold tracking-[-0.014em] text-[#1d1d1f]">
                  <Link href={`/team/${author.slug}`} className={LINK}>
                    {author.name}
                  </Link>
                </p>
                <p className="mt-1 text-[14px] leading-[1.45] tracking-[-0.014em] text-[#424245]">
                  {author.title}, {BRAND}
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] tracking-[-0.014em] text-[#424245]">
                  <a href={`tel:${author.phone.replace(/[^0-9+]/g, "")}`} className={LINK}>
                    {author.phone}
                  </a>
                  <span aria-hidden="true" className="mx-2 text-[#86868b]">
                    ·
                  </span>
                  <a href={`mailto:${author.email}`} className={LINK}>
                    {author.email}
                  </a>
                  {author.linkedin && (
                    <>
                      <span aria-hidden="true" className="mx-2 text-[#86868b]">
                        ·
                      </span>
                      <a
                        href={author.linkedin}
                        rel="noopener external"
                        className={LINK}
                      >
                        LinkedIn
                      </a>
                    </>
                  )}
                </p>
                {reviewer && (
                  <p className="mt-4 text-[14px] leading-[1.45] tracking-[-0.014em] text-[#86868b]">
                    Reviewed by{" "}
                    <Link href={`/team/${reviewer.slug}`} className={LINK}>
                      {reviewer.name}
                    </Link>
                    , {reviewer.title}.
                  </p>
                )}
              </section>
            )}

            {/* A12 — numbered sources, the targets of the inline [n] references */}
            <section aria-labelledby="sources">
              <h2 id="sources" className={H2}>
                Sources
              </h2>
              <ol className="mt-6 list-decimal list-outside space-y-3 pl-5 marker:text-[#86868b]">
                {page.sources.map((s) => (
                  <li
                    key={s.n}
                    id={`source-${s.n}`}
                    className="scroll-mt-24 text-[14px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]"
                  >
                    {s.url.startsWith("/") ? (
                      <Link href={s.url} className={LINK}>
                        {s.label}
                      </Link>
                    ) : (
                      <a href={s.url} rel="noopener external" className={LINK}>
                        {s.label}
                      </a>
                    )}
                    <span className="text-[#86868b]">
                      {" "}
                      · {s.publisher} · accessed {formatDate(s.accessed)}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* A13 — related links: hub, ≥3 siblings, glossary, first-party data */}
            <section aria-labelledby="related">
              <h2 id="related" className={H2}>
                Related
              </h2>

              {!isHub && (
                <div className="mt-6">
                  <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">
                    Guide
                  </h3>
                  <p className="mt-2">
                    <Link href={hubPath} className={`${LINK} text-[15px]`}>
                      {labelForPath(hubPath)}
                    </Link>
                  </p>
                </div>
              )}

              {page.related.siblings.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">
                    {isHub ? "More in this guide" : "Other questions in this guide"}
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {page.related.siblings.map((s) => (
                      <li key={s}>
                        <Link href={s} className={`${LINK} text-[15px]`}>
                          {labelForPath(s)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {page.related.glossary.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">
                    Terms defined in the{" "}
                    <Link href="/glossary" className={LINK}>
                      glossary
                    </Link>
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {page.related.glossary.map((g) => (
                      <li key={g}>
                        <Link
                          href={g}
                          className="inline-block rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[13px] tracking-[-0.014em] text-[#1d1d1f] transition-colors hover:bg-[#ececef]"
                        >
                          {labelForPath(g)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {page.related.data.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-[13px] tracking-[-0.014em] text-[#86868b]">
                    Our own data
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {page.related.data.map((d) => (
                      <li key={d}>
                        <Link href={d} className={`${LINK} text-[15px]`}>
                          {labelForPath(d)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* A14 — exactly one CTA, to the existing contact path */}
            <div className="mt-14 border-t border-[color:var(--divider)] pt-10">
              <p className="max-w-[56ch] text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                {page.brandSentence}
              </p>
              <div className="mt-5">
                <Pill variant="primary" href={page.cta.href}>
                  {page.cta.label}
                </Pill>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export default AnswerPageView;

/** Shared metadata builder so every page in the clusters is consistent. */
export function answerMetadata(page: AnswerPage | ToolPage, path: string) {
  const url = `${SITE_URL}${path}`;
  // `title` was `${page.title} | ${BRAND}` handed to the root layout's
  // "%s | BRAND" template, so every answer page shipped the brand twice.
  // seoTitle() is absolute (no template) and drops the brand when the page's
  // own title already fills the 60 characters. Social cards keep the brand.
  const title = socialTitle(page.title);
  return {
    title: seoTitle(page.title),
    description: page.description,
    // The Markdown twin (src/lib/agent/markdown.ts), built from this same
    // page object. Renders <link rel="alternate" type="text/markdown">.
    alternates: { canonical: url, types: { "text/markdown": `${url}.md` } },
    openGraph: {
      type: "article" as const,
      title,
      description: page.description,
      url,
      publishedTime: page.lastUpdated,
      modifiedTime: page.lastUpdated,
      images: DEFAULT_OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: page.description,
    },
  };
}
