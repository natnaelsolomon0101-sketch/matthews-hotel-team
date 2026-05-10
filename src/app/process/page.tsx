import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessTimeline from "@/components/sections/process/ProcessTimeline";
import PosterCTA from "@/components/sections/shared/PosterCTA";

const SITE_URL = "https://matthewshotelmarkets.com";

export const metadata: Metadata = {
  title: "How to Sell a Hotel | 24-Week Transaction Process",
  description:
    "How to sell a hotel: a four-phase, 24-week marketing playbook from Matthews Hotel Markets. From engagement and underwriting to closing. Refined across hundreds of completed transactions.",
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
  return (
    <>
      <SiteHeader />
      <main>
        <ProcessHero />
        <ProcessTimeline />
        <PosterCTA />
      </main>
      <SiteFooter />
    </>
  );
}
