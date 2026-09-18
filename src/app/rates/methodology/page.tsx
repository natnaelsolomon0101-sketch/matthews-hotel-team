import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, BRAND, breadcrumb, webPage } from "@/lib/entity";
import {
  BENCHMARKS,
  MHDI_ABBR,
  MHDI_DEFINITION,
  MHDI_NAME,
  MHDI_RULES,
  latestEdition,
} from "@/lib/rates/sheet";
import { RATE_SOURCES } from "@/lib/rates/sources";

const edition = latestEdition();
const url = `${SITE_URL}/rates/methodology`;

export const metadata: Metadata = {
  // 52 characters.
  title: "Rate Sheet Methodology | Matthews Hotel Markets",
  description:
    "How the Matthews Hotel Markets rate sheet is built: which numbers come from public sources, which come from live quotes, and which are not published at all.",
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title: "Rate Sheet Methodology",
    description:
      "Which numbers are public, which are our observations, and which we do not publish.",
    url,
  },
  twitter: { card: "summary_large_image", title: "Rate Sheet Methodology" },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Where do the index rates come from?",
    a: "Treasury yields come from the U.S. Treasury's daily par yield curve. SOFR comes from the New York Fed, which administers it. Prime comes from the Federal Reserve's published series. When that series lags a rate change the banks have already announced, Prime comes from the banks' own dated announcements until the series catches up, and the sheet says which. No intermediaries.",
  },
  {
    q: "Why do some cells say not yet published?",
    a: "Because nobody publishes them. Spreads, coverage tests and working leverage ceilings exist only in live term sheets. We show that cell as empty rather than fill it with a guess.",
  },
  {
    q: "Are these rates a quote?",
    a: "No. The public benchmarks are facts. Everything else is indicative. A real quote depends on the asset, the brand, the market, the sponsor and the business plan, and only a lender can give you one.",
  },
  {
    q: "Do you name the lenders you quote?",
    a: "Never. No lender name, no client, no property, no transaction detail appears on this page or in the file behind it. The sheet reports the market, not a relationship.",
  },
  {
    q: "How often does the sheet update?",
    a: "Monthly. The public benchmarks refresh in the first few business days of the month from the same endpoints listed here. The archived edition for each month keeps its own URL and never changes.",
  },
  {
    q: "Will you backfill the debt index history?",
    a: "No. The Matthews Hotel Debt Index starts with its first published reading. Reconstructing a year of quotes from memory would produce a prettier chart and a worse number.",
  },
  {
    q: "Can I reuse the data?",
    a: "Yes, under CC BY 4.0, with attribution to Matthews Hotel Markets and a link. That includes reuse inside an AI assistant's answer. Machine-readable copies are at /rates.json and /rates.csv.",
  },
];

export default function RatesMethodologyPage() {
  const graph = [
    webPage({
      url,
      name: "Rate Sheet Methodology",
      description:
        "How the Matthews Hotel Markets hotel loan rate sheet is built, sourced and refreshed.",
      dateModified: edition.modifiedAt ?? edition.publishedAt,
    }),
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumb([
      { name: "Rate sheet", path: "/rates" },
      { name: "Methodology", path: "/rates/methodology" },
    ]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Eyebrow>Rate sheet</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead="How the rate sheet is built."
                follow="Sources, definitions, and what we refuse to publish."
              />
            </div>
            <p className="mt-6 text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Last updated: {edition.modifiedAt ?? edition.publishedAt}
            </p>

            <p className="mt-8 max-w-[68ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-primary)]">
              Every cell on{" "}
              <Link href="/rates" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                the rate sheet
              </Link>{" "}
              is one of three things: a public benchmark with a link, a
              published program rule with a link, or an observation from term
              sheets this desk actually received. Anything that is none of those
              reads &ldquo;not yet published&rdquo; and carries no number.
            </p>

            <h2 className="mt-14 text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
              1. The three bases, and how to tell them apart
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] text-[14px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                <thead className="border-b border-[color:var(--divider)] text-left text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  <tr>
                    <th scope="col" className="py-3 pr-4 font-medium">Basis</th>
                    <th scope="col" className="py-3 pr-4 font-medium">What it means</th>
                    <th scope="col" className="py-3 pr-4 font-medium">How it looks on the page</th>
                    <th scope="col" className="py-3 pr-4 font-medium">Can you check it?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[color:var(--divider)] align-top">
                    <th scope="row" className="py-4 pr-4 text-left font-semibold">Published</th>
                    <td className="py-4 pr-4">A public benchmark or a written program rule.</td>
                    <td className="py-4 pr-4">A number, plus a note naming the source and the date.</td>
                    <td className="py-4 pr-4">Yes. Click the source in the numbered list.</td>
                  </tr>
                  <tr className="border-b border-[color:var(--divider)] align-top">
                    <th scope="row" className="py-4 pr-4 text-left font-semibold">Observed</th>
                    <td className="py-4 pr-4">What lenders quoted this desk during the month.</td>
                    <td className="py-4 pr-4">A number, labeled &ldquo;{BRAND} observation&rdquo; with the quote count.</td>
                    <td className="py-4 pr-4">No. You can check the count and the definition, not the underlying term sheets.</td>
                  </tr>
                  <tr className="border-b border-[color:var(--divider)] align-top">
                    <th scope="row" className="py-4 pr-4 text-left font-semibold">Not yet published</th>
                    <td className="py-4 pr-4">We do not have it, or we have not released it.</td>
                    <td className="py-4 pr-4">The words &ldquo;not yet published&rdquo; and the reason. Never a dash, never a zero.</td>
                    <td className="py-4 pr-4">There is nothing to check, which is the point.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-14 text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
              2. The benchmark endpoints
            </h2>
            <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
              These are the exact publishers we read, in the order the sheet
              lists them. The as-of date on the sheet is the date of the
              observation, not the date we ran the script. A benchmark that has
              not printed since a policy move keeps its old date and the
              changelog says so. When the Federal Reserve&rsquo;s Prime series
              lags a move the banks have already announced, as it did after
              the September 16, 2026 FOMC decision, the sheet uses the
              banks&rsquo; own dated announcements and names them, which is
              why September&rsquo;s Prime reads{" "}
              {BENCHMARKS.find((b) => b.key === "prime")?.value.toFixed(2)}% as
              of September 17, 2026.
            </p>
            <ul className="mt-6 space-y-3 list-disc list-outside pl-5 marker:text-[color:var(--text-secondary)]">
              {BENCHMARKS.map((b) => (
                <li key={b.key} className="text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  <strong>{b.label}</strong>{" "}
                  <a href={b.sourceUrl} rel="noopener external" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                    {b.sourceName}
                  </a>
                  {b.seriesId ? ` (series ${b.seriesId})` : ""}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[68ch] text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Nothing licensed is used anywhere on this sheet. No STR, CoStar or
              Trepp subscriber data is stored, republished, or handed out
              through the JSON and CSV endpoints. If a number cannot be
              redistributed, it does not belong on a page whose entire purpose
              is redistribution.
            </p>

            <h2 className="mt-14 text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
              3. {MHDI_NAME} ({MHDI_ABBR})
            </h2>
            <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
              {MHDI_DEFINITION}
            </p>
            <ul className="mt-6 space-y-3 list-disc list-outside pl-5 marker:text-[color:var(--text-secondary)]">
              {MHDI_RULES.map((r) => (
                <li key={r} className="text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
              A skeptic&rsquo;s first question about any broker-published index
              is whether it is marketing. Three things are meant to answer that.
              The structure is fixed, so we cannot quietly swap in a lower-rate
              loan type on a month we want the number to fall. The minimum quote
              count is published, so a thin month shows as a gap instead of a
              reading built on one term sheet. And the history is never
              backfilled, so the series cannot start with a flattering shape.
            </p>

            <h2 className="mt-14 text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
              4. How it relates to the Matthews Hotel Index
            </h2>
            <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
              The{" "}
              <Link href="/research/mhi" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                Matthews Hotel Index
              </Link>{" "}
              is quarterly, covers 14 markets, and measures cap rates, ADR,
              RevPAR and occupancy from public research. The MHDI is monthly,
              national, measures one number, and comes from quotes. They share a
              publisher and a naming family and they cross-link, but they are
              two datasets and they are never averaged together. Mixing a
              quarterly public-data series with a monthly observation series
              would make both of them worse.
            </p>

            <h2 className="mt-14 text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
              5. Corrections
            </h2>
            <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
              If a published figure here is wrong, email{" "}
              <a href="mailto:hotelteam@matthews.com" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                hotelteam@matthews.com
              </a>{" "}
              and it gets fixed in the current edition with a dated line in the
              changelog. Archived editions are never edited in place, because
              someone may have cited them. A correction to an archived edition
              is published as a correction on the current one.
            </p>

            <h2 className="mt-14 text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
              Questions
            </h2>
            <dl className="mt-8 space-y-6">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <dt className="text-[16px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                    {f.q}
                  </dt>
                  <dd className="mt-2 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-14 text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Every source the sheet can cite
            </h2>
            <ol className="mt-6 space-y-3 list-decimal list-outside pl-5 marker:text-[color:var(--text-secondary)]">
              {RATE_SOURCES.map((s) => (
                <li key={s.id} className="text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  <a href={s.url} rel="noopener external" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                    {s.name}
                  </a>
                  <span className="text-[color:var(--text-secondary)]">
                    {" "}&middot; {s.publisher} &middot; source date {s.asOf} &middot; last verified {s.verified}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-14 flex flex-wrap gap-3">
              <Pill variant="primary" href="/rates">Back to the rate sheet</Pill>
              <Pill variant="secondary" href="/research/mhi">Matthews Hotel Index</Pill>
              <Pill variant="secondary" href="/contact">Ask for a quote</Pill>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
