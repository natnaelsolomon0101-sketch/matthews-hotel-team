import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import JsonLd from "@/components/seo/JsonLd";
import { ID, SITE_URL, BRAND, bioMembers, breadcrumb, webPage } from "@/lib/entity";
import {
  REMOVED_FIGURES,
  STATS,
  STAT_GROUPS,
  statsIn,
} from "@/lib/rates/statistics";
import { latestEdition } from "@/lib/rates/sheet";
import { RATES_LICENSE } from "@/lib/rates/jsonld";
import { UPDATED } from "./updated";

const url = `${SITE_URL}/data/hotel-financing-statistics`;

const edition = latestEdition();

export const metadata: Metadata = {
  // 56 characters.
  title: "Hotel Financing Statistics, 2026 | Matthews Hotel",
  description:
    `${STATS.length} hotel financing statistics, each with a source link, the date the source carries, and the date we last checked it. Rates, SBA, lending volume, maturities, transactions, fundamentals.`,
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title: "Hotel Financing Statistics, 2026",
    description: `${STATS.length} hotel finance numbers, each with a source and two dates.`,
    url,
  },
  twitter: { card: "summary_large_image", title: "Hotel Financing Statistics, 2026" },
};

const LONG_DATE = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

const TAKEAWAYS = [
  "The 10-year Treasury was 4.94% and SOFR was 3.62% on September 17, 2026. Fixed-rate term debt got more expensive over the month while floating got marginally cheaper.",
  "SBA is the only lender type whose maximum rates and leverage are published in writing. A variable-rate 7(a) hotel loan over $350,000 is capped at Prime plus 3.00%, and SBA rules cap a hotel 504 structure at 85% of cost.",
  "Trepp counts $18.7 billion of hotel CMBS maturing in 2026 and nearly 70% of it floats, so SOFR decides whether those loans extend.",
  "CBRE and CoStar are about 190 basis points apart on 2026 RevPAR growth. Both forecasts are below, because underwriting to one of them without knowing about the other is the mistake.",
  "Three numbers that circulate in hotel finance commentary are deliberately not on this page. They are listed at the bottom with the reason, so you can see what was checked and rejected rather than only what survived.",
];

export default function HotelFinancingStatisticsPage() {
  const graph = [
    webPage({
      url,
      name: "Hotel Financing Statistics, 2026",
      description: `${STATS.length} sourced hotel financing statistics, each with the date the source carries and the date it was last verified.`,
      mainEntity: `${url}#dataset`,
      datePublished: UPDATED,
      dateModified: UPDATED,
    }),
    {
      "@type": "Dataset",
      "@id": `${url}#dataset`,
      name: "Hotel Financing Statistics, 2026",
      description: `A maintained list of ${STATS.length} hotel finance statistics compiled by ${BRAND}. Each entry carries a one-sentence statement, a link to the publisher, the date the source carries, and the date it was last verified by a person on the team.`,
      url,
      identifier: "mhm-hotel-financing-statistics",
      license: RATES_LICENSE,
      isAccessibleForFree: true,
      creator: { "@id": ID.org },
      publisher: { "@id": ID.org },
      datePublished: UPDATED,
      dateModified: UPDATED,
      temporalCoverage: "2025/2027",
      spatialCoverage: { "@type": "Country", name: "United States" },
      keywords: [
        "hotel financing statistics",
        "hotel loan rates",
        "hotel CMBS maturities",
        "SBA hotel loans",
        "hotel transaction volume",
        "hotel RevPAR forecast",
      ].join(", "),
      variableMeasured: STAT_GROUPS.map((g) => ({
        "@type": "PropertyValue",
        name: g.label,
        description: g.blurb,
      })),
      citation: Array.from(
        new Map(
          STATS.map((s) => [
            s.url,
            {
              "@type": "CreativeWork",
              name: s.sourceName,
              url: s.url,
              datePublished: s.asOf,
              publisher: { "@type": "Organization", name: s.publisher },
            },
          ]),
        ).values(),
      ),
    },
    // One crumb only. There is no /data index route, and a breadcrumb that
    // points at a 404 is worse than a shallow breadcrumb.
    breadcrumb([
      {
        name: "Hotel financing statistics",
        path: "/data/hotel-financing-statistics",
      },
    ]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        {/* ------------------------------------------------------- header */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Eyebrow>Data</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead="Hotel financing statistics."
                follow="Every number with a source, a source date, and the date we last checked it."
              />
            </div>
            <p className="mt-6 text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Compiled by {BRAND} &middot; Last updated: {LONG_DATE(UPDATED)}
            </p>

            <p className="mt-8 max-w-[68ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-primary)]">
              {STATS.length} statistics on hotel debt and hotel investment, as
              of September 17, 2026. The 10-year Treasury is 4.94%, SOFR is
              3.62%, and SBA caps a variable-rate 7(a) hotel loan over $350,000
              at Prime plus 3.00%, which is 9.75% today. Each entry below links
              its publisher and carries two dates: the date on the source, and
              the date a person here last opened it.
            </p>

            <h2 className="mt-12 text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Key takeaways
            </h2>
            <ul className="mt-5 space-y-3 list-disc list-outside pl-5 marker:text-[color:var(--text-secondary)]">
              {TAKEAWAYS.map((t) => (
                <li
                  key={t}
                  className="max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[14px] border border-[color:var(--divider)] px-5 py-4">
              <p className="max-w-[72ch] text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                <strong className="text-[color:var(--text-primary)]">
                  How to read the sourcing.
                </strong>{" "}
                Where we read a number straight from the institution that
                publishes it, the publisher line names that institution. Where
                we read it from a trade publication quoting a research house, the
                publisher line says so, in the form &ldquo;Hotel Dive, citing
                Trepp&rdquo;. That distinction matters and hiding it would be the
                easy thing to do. No licensed subscriber data from STR, CoStar or
                Trepp is republished here: what appears is what those firms put
                in a free release or what a publication quoted from them.
              </p>
            </div>

            {/* Contents */}
            <nav aria-label="Sections" className="mt-10">
              <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Sections
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {STAT_GROUPS.map((g) => (
                  <li key={g.key}>
                    <a
                      href={`#${g.key}`}
                      className="text-[14px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
                    >
                      {g.label} ({statsIn(g.key).length})
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#removed"
                    className="text-[14px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
                  >
                    Numbers we removed ({REMOVED_FIGURES.length})
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        {/* ------------------------------------------------------ sections */}
        {STAT_GROUPS.map((g, gi) => (
          <section
            key={g.key}
            id={g.key}
            className={
              gi % 2 === 0
                ? "bg-[color:var(--surface-elevated)] py-16 lg:py-20 scroll-mt-20"
                : "bg-white py-16 lg:py-20 scroll-mt-20"
            }
          >
            <div className="mx-auto max-w-[1024px] px-6">
              <h2 className="text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
                {g.label}
              </h2>
              <p className="mt-3 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                {g.blurb}
              </p>

              <ol className="mt-8 space-y-7">
                {statsIn(g.key).map((s) => (
                  <li key={s.id} id={s.id} className="scroll-mt-20">
                    <p className="max-w-[72ch] text-[16px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                      {s.text}
                    </p>
                    {s.note ? (
                      <p className="mt-2 max-w-[72ch] text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                        {s.note}
                      </p>
                    ) : null}
                    <p className="mt-2 text-[13px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-tertiary)]">
                      <a
                        href={s.url}
                        rel="noopener external"
                        className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                      >
                        {s.sourceName}
                      </a>
                      {" · "}
                      {s.publisher}
                      {" · "}
                      source date {s.asOf}
                      {" · "}
                      last verified {s.verified}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}

        {/* ----------------------------------------------- removed figures */}
        <section id="removed" className="bg-[color:var(--surface-elevated)] py-16 lg:py-20 scroll-mt-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
              Numbers we removed, and why
            </h2>
            <p className="mt-3 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              These three figures circulate in hotel finance commentary and two
              of them appeared on this site before. We could not source them, so
              they are not on the page. Showing the rejects is the only way to
              make the accepted list mean anything.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[780px] text-[14px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                <thead className="border-b border-[color:var(--divider)] text-left text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  <tr>
                    <th scope="col" className="py-3 pr-5 font-medium min-w-[230px]">
                      The claim
                    </th>
                    <th scope="col" className="py-3 pr-5 font-medium">
                      Why it is not here
                    </th>
                    <th scope="col" className="py-3 pr-5 font-medium min-w-[200px]">
                      What we publish instead
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {REMOVED_FIGURES.map((r) => (
                    <tr
                      key={r.claim}
                      className="border-b border-[color:var(--divider)] align-top"
                    >
                      <th scope="row" className="py-5 pr-5 text-left font-semibold">
                        {r.claim}
                      </th>
                      <td className="py-5 pr-5 leading-[1.5]">{r.why}</td>
                      <td className="py-5 pr-5 leading-[1.5] text-[color:var(--text-secondary)]">
                        {r.instead}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ cite this */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Cite this
            </h2>
            <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
              Published under{" "}
              <a
                href={RATES_LICENSE}
                rel="noopener external"
                className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
              >
                CC BY 4.0
              </a>
              . Cite the original publisher for any individual statistic. Cite
              this page for the compilation.
            </p>
            <pre className="mt-6 overflow-x-auto rounded-[14px] bg-[color:var(--surface-elevated)] p-5 text-[13px] leading-[1.6] text-[color:var(--text-primary)]">
              <code>{`${BRAND}. "Hotel Financing Statistics, 2026." ${url}. Last updated ${UPDATED}.`}</code>
            </pre>
          </div>
        </section>

        {/* ------------------------------------------------------- authors */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Who maintains this
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bioMembers()
                .filter((m) => ["nate-solomon", "luke-thompson"].includes(m.slug))
                .map((m) => (
                  <div key={m.slug} className="rounded-[18px] bg-white p-6">
                    <p className="text-[16px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                      <Link
                        href={`/team/${m.slug}`}
                        className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                      >
                        {m.name}
                      </Link>
                    </p>
                    <p className="mt-1 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                      {m.title}, {BRAND}
                    </p>
                    <p className="mt-3 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                      <a
                        href={`tel:${m.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                      >
                        {m.phone}
                      </a>
                      {" · "}
                      <a
                        href={`mailto:${m.email}`}
                        className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                      >
                        {m.email}
                      </a>
                    </p>
                  </div>
                ))}
            </div>
            <p className="mt-6 max-w-[68ch] text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Found a number here that is wrong or out of date? Email{" "}
              <a
                href="mailto:hotelteam@matthews.com"
                className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
              >
                hotelteam@matthews.com
              </a>{" "}
              and it gets fixed with a new verification date, or removed.
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------------- CTA */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <div className="rounded-[18px] bg-[color:var(--surface-elevated)] p-10 lg:p-14 text-center">
              <h2 className="max-w-[58ch] mx-auto text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.18] tracking-[-0.016em] text-[color:var(--text-primary)]">
                Statistics tell you the market. A quote tells you your deal.
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Pill variant="primary" href="/contact">Talk to the team</Pill>
                <Pill variant="secondary" href="/rates">{edition.label} rate sheet</Pill>
                <Pill variant="secondary" href="/research/mhi">Matthews Hotel Index</Pill>
              </div>
              <p className="mt-8 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                Related:{" "}
                <Link href="/rates/methodology" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                  Rate sheet methodology
                </Link>
                {" · "}
                <Link href="/glossary" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                  Glossary
                </Link>
                {" · "}
                <Link href="/services/capital-markets" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                  Capital markets
                </Link>
                {" · "}
                <Link href="/research" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                  Research
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
