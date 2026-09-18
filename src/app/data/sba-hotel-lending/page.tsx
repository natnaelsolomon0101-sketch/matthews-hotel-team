import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import JsonLd from "@/components/seo/JsonLd";
import { ID, BRAND, SITE_URL, breadcrumb, webPage } from "@/lib/entity";
import {
  BUCKETS_INTRO,
  BY_STATE_INTRO,
  BY_YEAR_INTRO,
  CHARGEOFF_INTRO,
  CITE_INTRO,
  CTA_HEADLINE,
  DIRECT_ANSWER,
  DOWNLOADS_TEXT,
  H1,
  LAST_FY,
  LENDERS_INTRO,
  METHODOLOGY,
  OTHER_NAICS_INTRO,
  RELATED,
  SBA_CSV_URL,
  SBA_JSON_URL,
  SBA_LICENSE,
  SBA_PATH,
  SBA_PUBLISHED,
  SBA_UPDATED,
  SBA_URL,
  SCOPE_NOTE,
  SOURCES,
  STATE_LENDERS_INTRO,
  T3,
  T5,
  TAKEAWAYS,
  TITLE,
  citeAs,
  fiscalYears,
  fyRange,
  longDate,
  meta,
} from "@/lib/sba";
import {
  bucketsTable,
  byStateTable,
  byYearTable,
  cdcsByCountTable,
  cdcsByDollarsTable,
  chargeOffTable,
  lenders7aByCountTable,
  lenders7aByDollarsTable,
  otherNaicsTable,
  stateLendersTable,
  type SbaTable,
} from "@/lib/sba/tables";
import ApprovalsChart from "./ApprovalsChart";

import { DEFAULT_OG_IMAGES, seoTitle } from "@/lib/seo-meta";
const DESCRIPTION = `SBA 7(a) and 504 loans to hotels (NAICS 721110) by fiscal year, state, lender and loan size, compiled from SBA loan-level data as of ${longDate(meta.asOf)}.`;

export const metadata: Metadata = {
  title: seoTitle(`${TITLE} | Matthews Hotel`),
  description: DESCRIPTION,
  alternates: { canonical: SBA_URL, types: { "text/markdown": `${SBA_URL}.md` } },
  openGraph: { type: "article", title: TITLE, description: DESCRIPTION, url: SBA_URL, images: DEFAULT_OG_IMAGES },
  twitter: { card: "summary_large_image", title: TITLE },
};

const A = "text-[#1a3a6b] hover:underline underline-offset-[3px]";
const H2 = "text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]";
const H3 = "mt-10 text-[17px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]";
const P = "mt-3 max-w-[72ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]";
const LABEL = "text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]";

function DataTable({ table, caption, minWidth = 780, wrap = false }: { table: SbaTable; caption: string; minWidth?: number; wrap?: boolean }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table
        className="w-full text-[14px] tracking-[-0.014em] text-[color:var(--text-primary)]"
        style={{ minWidth }}
      >
        <caption className="caption-top pb-2 text-left text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)]">{caption}</caption>
        <thead className="border-b border-[color:var(--divider)] text-left text-[11px] uppercase tracking-[0.12em] text-[color:var(--text-secondary)]">
          <tr>
            {table.columns.map((c, i) => (
              <th key={c} scope="col" className={`py-3 pr-4 font-medium align-bottom ${i === 0 || wrap ? "" : "text-right"}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r) => (
            <tr key={r.slice(0, 2).join("|")} className="border-b border-[color:var(--divider)] align-top">
              {r.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="py-2.5 pr-4 text-left font-semibold whitespace-nowrap">
                    {cell}
                  </th>
                ) : (
                  <td key={i} className={`py-2.5 pr-4 leading-[1.5] ${wrap ? "" : "text-right tabular-nums whitespace-nowrap"}`}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ id, alt, children }: { id: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`${alt ? "bg-[color:var(--surface-elevated)]" : "bg-white"} py-16 lg:py-20 scroll-mt-20`}>
      <div className="mx-auto max-w-[1024px] px-6">{children}</div>
    </section>
  );
}

const NAV: [string, string][] = [
  ["by-year", "By fiscal year"],
  ["by-state", "By state"],
  ["lenders", "Top lenders"],
  ["state-lenders", "Lenders by state"],
  ["loan-size", "Loan size"],
  ["charge-offs", "Charge-offs"],
  ["methodology", "Methodology"],
  ["downloads", "Downloads"],
];

export default function SbaHotelLendingPage() {
  const graph = [
    webPage({
      url: SBA_URL,
      name: TITLE,
      description: DESCRIPTION,
      mainEntity: `${SBA_URL}#dataset`,
      datePublished: SBA_PUBLISHED,
      dateModified: SBA_UPDATED,
    }),
    {
      "@type": "Dataset",
      "@id": `${SBA_URL}#dataset`,
      name: "SBA loans to hotels: 7(a) and 504 approvals by fiscal year, state, lender and loan size",
      description: DIRECT_ANSWER,
      url: SBA_URL,
      identifier: "mhm-sba-hotel-lending",
      license: SBA_LICENSE,
      isAccessibleForFree: true,
      creator: { "@id": ID.org },
      publisher: { "@id": ID.org },
      datePublished: SBA_PUBLISHED,
      dateModified: SBA_UPDATED,
      temporalCoverage: `${fiscalYears[0] - 1}-10-01/${meta.asOf}`,
      spatialCoverage: { "@type": "Country", name: "United States" },
      keywords: ["SBA hotel loans", "SBA 7(a) hotel lenders", "SBA 504 hotel loans", "hotel loans by state", "NAICS 721110"].join(", "),
      variableMeasured: [
        { "@type": "PropertyValue", name: "Loan count", description: "SBA-approved loans to NAICS 721110, cancelled loans excluded" },
        { "@type": "PropertyValue", name: "Gross approval", unitText: "USD", description: "SBA gross approval amount; for 504 the SBA/CDC debenture only" },
        { "@type": "PropertyValue", name: "Average and median loan size", unitText: "USD" },
        { "@type": "PropertyValue", name: "Loans with SBA loan status CHGOFF (Charged Off)" },
      ],
      isBasedOn: SOURCES.map((s) => ({
        "@type": "CreativeWork",
        name: s.name,
        url: s.url,
        publisher: { "@type": "Organization", name: s.publisher },
      })),
      distribution: [
        { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: SBA_JSON_URL },
        { "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: SBA_CSV_URL },
      ],
    },
    breadcrumb([{ name: "SBA loans to hotels", path: SBA_PATH }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Eyebrow>Data</Eyebrow>
            <h1 className="mt-6 max-w-[22ch] text-[clamp(32px,4.4vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--text-primary)]">
              {H1}
            </h1>
            <p className="mt-6 text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Compiled by {BRAND} &middot; Last updated: {longDate(SBA_UPDATED)} &middot; SBA data as of {longDate(meta.asOf)}
            </p>

            <p className="mt-8 max-w-[68ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-primary)]">
              {DIRECT_ANSWER}
            </p>

            <h2 className={`mt-12 ${LABEL}`}>Key takeaways</h2>
            <ul className="mt-5 space-y-3 list-disc list-outside pl-5 marker:text-[color:var(--text-secondary)]">
              {TAKEAWAYS.map((t) => (
                <li key={t} className="max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[14px] border border-[color:var(--divider)] px-5 py-4">
              <p className="max-w-[72ch] text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                <strong className="text-[color:var(--text-primary)]">What is counted.</strong> {SCOPE_NOTE}
              </p>
            </div>

            <nav aria-label="Sections" className="mt-10">
              <p className={LABEL}>Sections</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {NAV.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className={`text-[14px] tracking-[-0.014em] ${A}`}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <Section id="by-year" alt>
          <h2 className={H2}>SBA hotel loan approvals by fiscal year</h2>
          <p className={P}>{BY_YEAR_INTRO}</p>
          <ApprovalsChart />
          <DataTable table={byYearTable()} caption="SBA hotel loan approvals by fiscal year and program" minWidth={900} />
        </Section>

        <Section id="by-state">
          <h2 className={H2}>SBA hotel loans by state</h2>
          <p className={P}>{BY_STATE_INTRO}</p>
          <DataTable table={byStateTable()} caption="SBA hotel loans by state" />
        </Section>

        <Section id="lenders" alt>
          <h2 className={H2}>Top SBA hotel lenders, {fyRange(T3)}</h2>
          <p className={P}>{LENDERS_INTRO}</p>
          <h3 className={H3}>Top 25 7(a) lenders by number of hotel loans</h3>
          <DataTable table={(lenders7aByCountTable())} caption="Top 25 7(a) hotel lenders by loan count" minWidth={620} />
          <h3 className={H3}>Top 25 7(a) lenders by hotel loan dollars</h3>
          <DataTable table={(lenders7aByDollarsTable())} caption="Top 25 7(a) hotel lenders by gross approval" minWidth={620} />
          <h3 className={H3}>Top 25 504 certified development companies by number of hotel loans</h3>
          <DataTable table={(cdcsByCountTable())} caption="Top 25 504 CDCs by hotel loan count" minWidth={620} />
          <h3 className={H3}>Top 25 504 certified development companies by hotel loan dollars</h3>
          <DataTable table={(cdcsByDollarsTable())} caption="Top 25 504 CDCs by hotel debenture dollars" minWidth={620} />
        </Section>

        <Section id="state-lenders">
          <h2 className={H2}>Most active SBA hotel lenders in each state</h2>
          <p className={P}>{STATE_LENDERS_INTRO}</p>
          <DataTable table={stateLendersTable()} caption="Top five SBA hotel lenders and CDCs by state" wrap />
        </Section>

        <Section id="loan-size" alt>
          <h2 className={H2}>How big are SBA hotel loans?</h2>
          <p className={P}>{BUCKETS_INTRO}</p>
          <DataTable table={bucketsTable()} caption={`SBA hotel loan size distribution, ${fyRange(T5)}`} />
        </Section>

        <Section id="charge-offs">
          <h2 className={H2}>Share of SBA hotel loans charged off, by approval year</h2>
          <p className={P}>{CHARGEOFF_INTRO}</p>
          <DataTable table={chargeOffTable()} caption="SBA hotel loans with loan status CHGOFF by approval fiscal year" />
        </Section>

        <Section id="other-naics" alt>
          <h2 className={H2}>Other accommodation codes, reported separately</h2>
          <p className={P}>{OTHER_NAICS_INTRO}</p>
          <DataTable table={otherNaicsTable()} caption={`SBA loans to adjacent accommodation NAICS codes, FY${LAST_FY}`} />
        </Section>

        <Section id="methodology">
          <h2 className={H2}>Methodology and caveats</h2>
          <ul className="mt-6 space-y-4">
            {METHODOLOGY.map((m) => (
              <li key={m.label} className="max-w-[72ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
                <strong>{m.label}</strong> {m.text}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="downloads" alt>
          <h2 className={H2}>Downloads</h2>
          <p className={P}>{DOWNLOADS_TEXT}</p>
          <ul className="mt-5 space-y-2 text-[15px] tracking-[-0.014em]">
            <li>
              <a href={`${SBA_PATH}.json`} className={A}>{`${SITE_URL}${SBA_PATH}.json`}</a>
            </li>
            <li>
              <a href={`${SBA_PATH}.csv`} className={A}>{`${SITE_URL}${SBA_PATH}.csv`}</a>
            </li>
          </ul>

          <h2 className={`mt-14 ${LABEL}`}>Cite as</h2>
          <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
            {CITE_INTRO} License:{" "}
            <a href={SBA_LICENSE} rel="noopener external" className={A}>
              CC BY 4.0
            </a>
          </p>
          <pre className="mt-6 overflow-x-auto rounded-[14px] bg-white p-5 text-[13px] leading-[1.6] text-[color:var(--text-primary)]">
            <code>{citeAs()}</code>
          </pre>

          <h2 className={`mt-14 ${LABEL}`}>Sources</h2>
          <ol className="mt-6 space-y-3 list-decimal list-outside pl-5">
            {SOURCES.map((s) => (
              <li key={s.url} className="max-w-[72ch] text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                <a href={s.url} rel="noopener external" className={A}>
                  {s.name}
                </a>
                {" · "}
                {s.publisher}
                {" · "}
                {s.note}
              </li>
            ))}
          </ol>
        </Section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <div className="rounded-[18px] bg-[color:var(--surface-elevated)] p-10 lg:p-14 text-center">
              <h2 className="max-w-[58ch] mx-auto text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.18] tracking-[-0.016em] text-[color:var(--text-primary)]">
                {CTA_HEADLINE}
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Pill variant="primary" href="/contact">Talk to the team</Pill>
              </div>
              <ul className="mt-8 space-y-2 text-[14px] tracking-[-0.014em]">
                {RELATED.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className={A}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
