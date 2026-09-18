import * as React from "react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/entity";
import { latestEdition } from "@/lib/rates/sheet";
import { ratesDatasetGraph } from "@/lib/rates/jsonld";
import RateSheetView from "./_components/RateSheetView";

import { seoTitle } from "@/lib/seo-meta";
const edition = latestEdition();

export const metadata: Metadata = {
  // 57 characters.
  title: seoTitle(`Hotel Loan Rate Sheet, ${edition.label} | Matthews`),
  description:
    `Current hotel loan benchmarks: 10-year Treasury, 5-year Treasury, SOFR, Prime, and the SBA 504 debenture, each with its source and as-of date. Updated monthly.`,
  alternates: { canonical: `${SITE_URL}/rates` },
  openGraph: {
    type: "website",
    title: `Hotel Loan Rate Sheet, ${edition.label}`,
    description:
      "Public benchmarks with sources and dates, plus what we have not published yet. Updated monthly by Matthews Hotel Markets.",
    url: `${SITE_URL}/rates`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Hotel Loan Rate Sheet, ${edition.label}`,
  },
};

export default function RatesPage() {
  const graph = ratesDatasetGraph(edition, { isArchive: false });

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />
        <RateSheetView edition={edition} isArchive={false} />
      </main>
      <SiteFooter />
    </>
  );
}
