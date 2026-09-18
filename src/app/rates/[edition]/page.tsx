import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/entity";
import { EDITIONS, getEdition } from "@/lib/rates/sheet";
import { ratesDatasetGraph } from "@/lib/rates/jsonld";
import RateSheetView from "../_components/RateSheetView";

type Params = { edition: string };

/**
 * Archived editions keep a stable URL forever, which is the whole point of
 * citing one. /rates always shows the newest; /rates/2026-09 always shows
 * September 2026 exactly as it was published.
 */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return EDITIONS.map((e) => ({ edition: e.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { edition: slug } = await props.params;
  const e = getEdition(slug);
  if (!e) return { title: "Rate sheet archive" };
  const url = `${SITE_URL}/rates/${e.slug}`;
  const title = `Hotel Loan Rate Sheet, ${e.label} | Matthews`;
  return {
    title,
    description: `Archived ${e.label} hotel loan rate sheet from Matthews Hotel Markets, kept exactly as published so a citation to it stays true.`,
    alternates: { canonical: url },
    openGraph: { type: "article", title, url, publishedTime: e.publishedAt },
    twitter: { card: "summary_large_image", title },
  };
}

export default async function RatesArchivePage(props: {
  params: Promise<Params>;
}) {
  const { edition: slug } = await props.params;
  const e = getEdition(slug);
  if (!e) notFound();

  const graph = ratesDatasetGraph(e, { isArchive: true });

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />
        <RateSheetView edition={e} isArchive={true} />
      </main>
      <SiteFooter />
    </>
  );
}
