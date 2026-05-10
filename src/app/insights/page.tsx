import * as React from "react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { InsightsHero } from "@/components/sections/insights/InsightsHero";
import { InsightsArchive } from "@/components/sections/insights/InsightsArchive";
import { insights } from "@/lib/data/insights";

const SITE_URL = "https://matthewshotelmarkets.com";

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

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <InsightsHero featured={featured} />
        <InsightsArchive items={archive} />
      </main>
      <SiteFooter />
    </>
  );
}
