import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { insights } from "@/lib/data/insights";
import { getLatestMhi } from "@/lib/data/mhi";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/entity";
import { latestEdition, MHDI_NAME, MHDI_ABBR } from "@/lib/rates/sheet";

export const metadata: Metadata = {
  title: "Hotel Investment Research | Matthews Hotel Markets",
  description:
    "The Matthews Hotel Index, long-form insights, and market commentary on hospitality investment sales and capital markets.",
  alternates: { canonical: `${SITE_URL}/research` },
  openGraph: {
    type: "website",
    title: "Hotel Investment Research | Matthews Hotel Markets",
    description: "Matthews Hotel Index quarterly cap-rate dataset, long-form insights, and market commentary.",
    url: `${SITE_URL}/research`,
  },
  twitter: { card: "summary_large_image", title: "Hotel Investment Research | Matthews Hotel Markets" },
};

export default function ResearchHubPage() {
  const latestMhi = getLatestMhi();
  const latestRates = latestEdition();
  const featuredInsights = insights.slice(0, 8);
  const url = `${SITE_URL}/research`;

  // CollectionPage @graph — the research hub is a "collection" of
  // datasets and articles. Surfaces topical depth to crawlers.
  const graph = [
      {
        "@type": "CollectionPage",
        "@id": url,
        url,
        name: "Hotel Investment Research",
        description: "Matthews Hotel Index quarterly cap-rate dataset, long-form insights, and market commentary from Matthews Hotel Markets.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#org` },
        hasPart: [
          {
            "@type": "Dataset",
            "@id": `${SITE_URL}/research/mhi/${latestMhi.slug}#dataset`,
            name: `Matthews Hotel Index, ${latestMhi.label}`,
            url: `${SITE_URL}/research/mhi/${latestMhi.slug}`,
          },
          ...featuredInsights.map((i) => ({
            "@type": "Article",
            "@id": `${SITE_URL}/insights/${i.slug}#article`,
            headline: i.title,
            url: `${SITE_URL}/insights/${i.slug}`,
          })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Research", item: url },
        ],
      },
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Eyebrow>Research</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead="Hotel investment research."
                follow="Quarterly data, long-form analysis, market commentary."
              />
            </div>
            <p className="mt-6 max-w-[64ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              The Matthews Hotel Index tracks cap rates, ADR, and RevPAR across fourteen U.S. hotel markets. Long-form insights cover capital markets, brand-flag economics, and disposition strategy.
            </p>
          </div>
        </section>

        {/* MHI feature card */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Link
              href={`/research/mhi/${latestMhi.slug}`}
              className="group block rounded-[24px] bg-gradient-to-br from-[#0a1226] via-[#1a3a6b] to-[#0066cc] text-white p-10 lg:p-14"
            >
              <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-white/70">Matthews Hotel Index</p>
              <h2 className="mt-6 text-[clamp(28px,3.5vw,48px)] font-semibold leading-[1.05] tracking-[-0.025em]">
                {latestMhi.label}: cap rates, ADR, RevPAR across 14 markets
              </h2>
              <p className="mt-4 max-w-[64ch] text-[17px] leading-[1.47] tracking-[-0.014em] text-white/85">
                {latestMhi.headline}
              </p>
              <p className="mt-6 inline-flex items-center gap-1 text-[15px] tracking-[-0.014em] text-white group-hover:underline underline-offset-[3px]">
                View the {latestMhi.label} dataset
                <ChevronRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </p>
            </Link>
          </div>
        </section>

        {/*
          The second half of the research franchise. Agent 8 shipped /rates and
          the Matthews Hotel Debt Index; the links only ran one way, so
          /research read as one dataset when there are two (geo/requests.md,
          Agent 8 item 5). The two are deliberately NOT averaged together:
          different cadence, different geography grain, and different evidence
          class (public research vs quotes this desk received).
        */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              The monthly rate sheet
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <Link
                href="/rates"
                className="group block rounded-[20px] bg-[color:var(--surface-elevated)] p-8 transition-colors hover:bg-[#ececef]"
              >
                <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.016em] text-[#1d1d1f]">
                  Hotel rate sheet, {latestRates.label}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                  Public benchmarks and published lender-program rules,
                  refreshed monthly. Every cell we cannot source reads
                  &ldquo;Not yet published&rdquo; with a one-line reason.
                  Machine readable at /rates.json and /rates.csv.
                </p>
                <p className="mt-5 inline-flex items-center gap-1 text-[15px] tracking-[-0.014em] text-[#1a3a6b] group-hover:underline underline-offset-[3px]">
                  Open the rate sheet
                  <ChevronRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </p>
              </Link>
              <Link
                href="/rates/methodology"
                className="group block rounded-[20px] bg-[color:var(--surface-elevated)] p-8 transition-colors hover:bg-[#ececef]"
              >
                <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.016em] text-[#1d1d1f]">
                  {MHDI_NAME} ({MHDI_ABBR})
                </h3>
                <p className="mt-3 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                  A monthly, national series on one defined loan, built from
                  quotes this desk receives. It is a separate dataset from the
                  Matthews Hotel Index, never averaged with it, and its history
                  is never backfilled. Methodology and rules in full.
                </p>
                <p className="mt-5 inline-flex items-center gap-1 text-[15px] tracking-[-0.014em] text-[#1a3a6b] group-hover:underline underline-offset-[3px]">
                  Read the methodology
                  <ChevronRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </p>
              </Link>
            </div>
            <p className="mt-6 text-[14px] leading-[1.5] text-[color:var(--text-secondary)]">
              Sourced and dated hotel financing statistics, including the
              figures we checked and rejected, are at{" "}
              <Link
                href="/data/hotel-financing-statistics"
                className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
              >
                /data/hotel-financing-statistics
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Long-form insights grid */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Long-form insights
              </h2>
              <Link
                href="/insights"
                className="text-[14px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
              >
                All insights
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredInsights.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/insights/${i.slug}`}
                    className="group block rounded-[18px] bg-[#f5f5f7] p-6 transition-colors hover:bg-[#ececef]"
                  >
                    <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                      {i.kind === "outlook" ? "Outlook" : i.kind === "white-paper" ? "White Paper" : "Briefing"} · {i.date}
                    </p>
                    <p className="mt-3 text-[18px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                      {i.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)] line-clamp-3">
                      {i.subtitle}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
