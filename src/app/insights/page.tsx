import * as React from "react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { InsightsHero } from "@/components/sections/insights/InsightsHero";
import { InsightsArchive } from "@/components/sections/insights/InsightsArchive";
import { insights } from "@/lib/data/insights";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, breadcrumb, itemList, webPage } from "@/lib/entity";

export const metadata: Metadata = {
  title: "Hotel Investment Insights | Quarterly Outlooks & White Papers",
  description:
    "Quarterly hotel investment outlooks, white papers, and market briefings from Matthews Hotel Markets. Cap rates, ADR recovery, and the year ahead in hospitality.",
  alternates: { canonical: `${SITE_URL}/insights` },
  openGraph: {
    type: "website",
    title: "Hotel Investment Insights | Matthews Hotel Markets",
    description:
      "Quarterly hotel investment outlooks, white papers, and market briefings.",
    url: `${SITE_URL}/insights`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Investment Insights | Matthews Hotel Markets",
    description:
      "Quarterly hotel investment outlooks, white papers, and market briefings.",
  },
};

export default function InsightsPage() {
  const featured = insights[0];
  const archive = insights.slice(1);

  const url = `${SITE_URL}/insights`;
  const graph = [
    webPage({
      url,
      name: "Hotel Investment Insights",
      description: metadata.description as string,
      mainEntity: `${url}#articles`,
    }),
    itemList(
      insights.map((i) => ({ name: i.title, path: `/insights/${i.slug}` })),
      `${url}#articles`,
    ),
    breadcrumb([{ name: "Insights", path: "/insights" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />
        <InsightsHero featured={featured} />
        <InsightsArchive items={archive} />
      </main>
      <SiteFooter />
    </>
  );
}
