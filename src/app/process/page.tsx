import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessTimeline from "@/components/sections/process/ProcessTimeline";
import PosterCTA from "@/components/sections/shared/PosterCTA";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, breadcrumb, webPage } from "@/lib/entity";

export const metadata: Metadata = {
  title: "How to Sell a Hotel | 24-Week Transaction Process",
  description:
    "How to sell a hotel: a four-phase, 24-week marketing playbook from Matthews Hotel Markets. From engagement and underwriting to closing.",
  alternates: { canonical: `${SITE_URL}/process` },
  openGraph: {
    type: "article",
    title: "How to Sell a Hotel | Matthews Hotel Markets",
    description:
      "Four-phase, 24-week hotel disposition playbook. From engagement to close.",
    url: `${SITE_URL}/process`,
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell a Hotel | 24-Week Transaction Process",
    description:
      "Four-phase, 24-week hotel disposition playbook from Matthews Hotel Markets.",
  },
};

export default function ProcessPage() {
  const url = `${SITE_URL}/process`;
  const graph = [
    webPage({
      url,
      name: "How to Sell a Hotel, the 24-Week Transaction Process",
      description: metadata.description as string,
    }),
    breadcrumb([{ name: "Process", path: "/process" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <JsonLd graph={graph} />
        <ProcessHero />
        <ProcessTimeline />
        <PosterCTA />
      </main>
      <SiteFooter />
    </>
  );
}
