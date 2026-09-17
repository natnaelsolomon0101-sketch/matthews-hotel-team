import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { ClosedHero } from "@/components/sections/closed/ClosedHero";
import { ClosedBrowser } from "@/components/sections/closed/ClosedBrowser";
import PosterCTA from "@/components/sections/shared/PosterCTA";
import JsonLd from "@/components/seo/JsonLd";
import { closed } from "@/lib/data/closed";
import { SITE_URL, breadcrumb, itemList, webPage } from "@/lib/entity";

export const metadata: Metadata = {
  title: "Closed Hotel Transactions | Track Record",
  description:
    "Recent hotel closings by Matthews Hotel Markets. Investment sales, capital markets, and debt placements across select-service, full-service, resort, and boutique segments.",
  alternates: { canonical: `${SITE_URL}/closed` },
  openGraph: {
    title: "Closed Hotel Transactions | Matthews Hotel Markets",
    description:
      "Recent hotel closings: investment sales, capital markets, and debt placements across the United States.",
    url: `${SITE_URL}/closed`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Closed Hotel Transactions | Matthews Hotel Markets",
    description:
      "Recent hotel closings across select-service, full-service, resort, and boutique.",
  },
};

export default function ClosedPage() {
  const url = `${SITE_URL}/closed`;
  const graph = [
    webPage({
      url,
      name: "Closed Hotel Transactions",
      description: metadata.description as string,
      mainEntity: `${url}#closed`,
    }),
    itemList(
      closed.map((d) => ({
        name: `${d.name}, ${d.city}, ${d.state}`,
        path: `/closed/${d.slug}`,
      })),
      `${url}#closed`,
    ),
    breadcrumb([{ name: "Closed", path: "/closed" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />
        <ClosedHero />
        <ClosedBrowser />
        <PosterCTA
          lead="Ready for your closing."
          follow="Start the 24-week conversation."
        />
      </main>
      <SiteFooter />
    </>
  );
}
