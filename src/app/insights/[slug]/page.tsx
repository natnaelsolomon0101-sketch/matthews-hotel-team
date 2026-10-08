import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { InsightLayout } from "@/components/sections/insight-detail/InsightLayout";
import { insights, getInsight } from "@/lib/data/insights";
import { team } from "@/lib/data/team";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/entity";
import { insightAnswerLinks, relatedInsightSlugs } from "@/lib/related-links";

import { seoTitle } from "@/lib/seo-meta";
// Unknown slugs get the server-rendered 404 page (src/app/not-found.tsx).
// Without this the 404 status was right but the body only rendered after
// JavaScript ran. Every valid slug is in generateStaticParams below.
export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const insight = getInsight(slug);
  if (!insight) {
    return { title: "Insight not found" };
  }

  const authorNames = insight.authorSlugs
    .map((s) => team.find((m) => m.slug === s)?.name)
    .filter((n): n is string => Boolean(n));
  const byline =
    authorNames.length > 0 ? authorNames.join(" and ") : "Matthews Hotel Markets";

  const url = `${SITE_URL}/insights/${insight.slug}`;
  const description = `${insight.subtitle} ${insight.excerpt.slice(0, 100)}…`.slice(
    0,
    160,
  );

  return {
    title: seoTitle(insight.title),
    description,
    alternates: { canonical: url },
    authors: [{ name: byline }],
    openGraph: {
      type: "article",
      title: insight.title,
      description,
      url,
      publishedTime: insight.date,
      authors: authorNames.length ? authorNames : undefined,
      tags: insight.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description,
    },
  };
}

export default async function InsightDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const authors = insight.authorSlugs
    .map((s) => team.find((m) => m.slug === s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const url = `${SITE_URL}/insights/${insight.slug}`;
  // Articles without their own relatedInsights get three by shared tag, so
  // the layout's existing Related module renders for them too. Answer-page
  // links come from an explicit per-article map (src/lib/related-links.ts).
  const withRelated = { ...insight, relatedInsights: relatedInsightSlugs(insight) };
  const relatedAnswers = insightAnswerLinks(insight);

  const articleNode: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: insight.title,
    description: insight.subtitle,
    datePublished: insight.date,
    dateModified: insight.lastUpdated ?? insight.date,
    inLanguage: "en-US",
    author:
      authors.length > 0
        ? authors.map((a) => ({
            "@type": "Person",
            "@id": `${SITE_URL}/team/${a.slug}#person`,
            name: a.name,
            url: `${SITE_URL}/team/${a.slug}`,
          }))
        : { "@id": `${SITE_URL}/#org` },
    publisher: { "@id": `${SITE_URL}/#org` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: insight.tags.join(", "),
    image: `${url}/opengraph-image`,
  };
  if (insight.sources && insight.sources.length > 0) {
    articleNode.citation = insight.sources.map((s) => ({
      "@type": "CreativeWork",
      name: s.label,
      url: s.url,
      ...(s.publisher ? { publisher: { "@type": "Organization", name: s.publisher } } : {}),
    }));
  }

  const graph: Array<Record<string, unknown>> = [
    articleNode,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights",
          item: `${SITE_URL}/insights`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: insight.title,
          item: url,
        },
      ],
    },
  ];
  if (insight.faq && insight.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: insight.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      <SiteHeader />
      <main>
        <JsonLd graph={graph} />
        <InsightLayout insight={withRelated} />
        {relatedAnswers.length > 0 && (
          <section className="bg-white pb-24" aria-labelledby="related-questions-heading">
            <div className="mx-auto max-w-[692px] px-6">
              <div className="pt-10 border-t border-[color:var(--divider)]">
                <h2
                  id="related-questions-heading"
                  className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]"
                >
                  Related questions
                </h2>
                <ul className="mt-6 space-y-3">
                  {relatedAnswers.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[15px] leading-[1.45] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
