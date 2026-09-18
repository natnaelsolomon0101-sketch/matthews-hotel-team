import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import JsonLd from "@/components/seo/JsonLd";
import { ID, BRAND, breadcrumb, webPage } from "@/lib/entity";
import { SBA_JSON_URL, SBA_CSV_URL, SBA_LICENSE, SBA_PATH, SBA_UPDATED, SBA_URL, SOURCES, T3, T5, fyRange, longDate, meta } from "@/lib/sba";
import type { SbaTable } from "@/lib/sba/tables";
import {
  COMPARE_INTRO,
  NATIONAL_LINK_LABEL,
  OTHER_STATES_INTRO,
  STATE_CITE_INTRO,
  STATE_CTA,
  STATE_LENDERS_NOTE,
  STATE_METHOD,
  STATE_PAGES_PUBLISHED,
  YEAR_INTRO,
  compareTable,
  otherStates,
  stateBucketsIntro,
  stateBucketsTable,
  stateCdcsTable,
  stateCiteAs,
  stateDescription,
  stateDirectAnswer,
  stateH1,
  stateLenders7aTable,
  stateLendersCount,
  stateObservations,
  statePageBySlug,
  statePages,
  stateRelated,
  stateScopeNote,
  stateTitle,
  stateYearTable,
} from "@/lib/sba/states";
import StateChart from "./StateChart";

type Params = { state: string };

export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return statePages.map((s) => ({ state: s.slug }));
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const { state } = await props.params;
  const p = statePageBySlug(state);
  if (!p) return { title: "SBA loans to hotels" };
  return {
    title: `${stateTitle(p)} | Matthews Hotel`,
    description: stateDescription(p),
    alternates: { canonical: p.url, types: { "text/markdown": `${p.url}.md` } },
    openGraph: { type: "article", title: stateTitle(p), description: stateDescription(p), url: p.url },
    twitter: { card: "summary_large_image", title: stateTitle(p) },
  };
}

const A = "text-[#1a3a6b] hover:underline underline-offset-[3px]";
const H2 = "text-[clamp(20px,2vw,26px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]";
const H3 = "mt-10 text-[17px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]";
const P = "mt-3 max-w-[72ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]";
const LABEL = "text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]";

function DataTable({ table, caption, minWidth = 720 }: { table: SbaTable; caption: string; minWidth?: number }) {
  // Lender and CDC names read left to right; every other cell is a figure.
  const isName = table.columns.map((c) => c.includes("as SBA reports it"));
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full text-[14px] tracking-[-0.014em] text-[color:var(--text-primary)]" style={{ minWidth }}>
        <caption className="caption-top pb-2 text-left text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)]">{caption}</caption>
        <thead className="border-b border-[color:var(--divider)] text-left text-[11px] uppercase tracking-[0.12em] text-[color:var(--text-secondary)]">
          <tr>
            {table.columns.map((c, i) => (
              <th key={c} scope="col" className={`py-3 pr-4 font-medium align-bottom ${i === 0 || isName[i] ? "" : "text-right"}`}>
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
                  <td key={i} className={`py-2.5 pr-4 leading-[1.5] ${isName[i] ? "text-left" : "text-right tabular-nums whitespace-nowrap"}`}>
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

export default async function SbaStatePage(props: { params: Promise<Params> }) {
  const { state } = await props.params;
  const p = statePageBySlug(state);
  if (!p) notFound();

  const graph = [
    webPage({
      url: p.url,
      name: stateTitle(p),
      description: stateDescription(p),
      mainEntity: `${p.url}#dataset`,
      datePublished: STATE_PAGES_PUBLISHED,
      dateModified: SBA_UPDATED,
    }),
    {
      "@type": "Dataset",
      "@id": `${p.url}#dataset`,
      name: `SBA loans to hotels in ${p.name}: 7(a) and 504 approvals by fiscal year, lender and loan size`,
      description: stateDirectAnswer(p),
      url: p.url,
      identifier: `mhm-sba-hotel-lending-${p.slug}`,
      license: SBA_LICENSE,
      isAccessibleForFree: true,
      isPartOf: { "@type": "Dataset", name: "SBA loans to hotels: 7(a) and 504 approvals by fiscal year, state, lender and loan size", url: SBA_URL },
      creator: { "@id": ID.org },
      publisher: { "@id": ID.org },
      datePublished: STATE_PAGES_PUBLISHED,
      dateModified: SBA_UPDATED,
      temporalCoverage: `${meta.sinceFiscalYear - 1}-10-01/${meta.asOf}`,
      spatialCoverage: {
        "@type": ["DC", "PR"].includes(p.code) ? "AdministrativeArea" : "State",
        name: p.name,
        containedInPlace: { "@type": "Country", name: "United States" },
      },
      keywords: [`SBA hotel loans ${p.name}`, `SBA 7(a) hotel lenders ${p.name}`, `SBA 504 hotel loans ${p.name}`, "NAICS 721110"].join(", "),
      variableMeasured: [
        { "@type": "PropertyValue", name: "Loan count", description: `SBA-approved loans to NAICS 721110 with project state ${p.name}, cancelled loans excluded` },
        { "@type": "PropertyValue", name: "Gross approval", unitText: "USD", description: "SBA gross approval amount; for 504 the SBA/CDC debenture only" },
        { "@type": "PropertyValue", name: "Average and median loan size", unitText: "USD" },
      ],
      isBasedOn: SOURCES.map((s) => ({ "@type": "CreativeWork", name: s.name, url: s.url, publisher: { "@type": "Organization", name: s.publisher } })),
      distribution: [
        { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: SBA_JSON_URL },
        { "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: SBA_CSV_URL },
      ],
    },
    breadcrumb([
      { name: "SBA loans to hotels", path: SBA_PATH },
      { name: p.name, path: p.path },
    ]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Eyebrow>Data</Eyebrow>
            <h1 className="mt-6 max-w-[24ch] text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--text-primary)]">
              {stateH1(p)}
            </h1>
            <p className="mt-6 text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Compiled by {BRAND} &middot; Last updated: {longDate(SBA_UPDATED)} &middot; SBA data as of {longDate(meta.asOf)}
            </p>

            <p className="mt-8 max-w-[68ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-primary)]">
              {stateDirectAnswer(p)}
            </p>

            <h2 className={`mt-12 ${LABEL}`}>What stands out in {p.name}</h2>
            <ul className="mt-5 space-y-3 list-disc list-outside pl-5 marker:text-[color:var(--text-secondary)]">
              {stateObservations(p).map((t) => (
                <li key={t} className="max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[14px] border border-[color:var(--divider)] px-5 py-4">
              <p className="max-w-[72ch] text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                <strong className="text-[color:var(--text-primary)]">What is counted.</strong> {stateScopeNote(p)}{" "}
                <Link href={SBA_PATH} className={A}>
                  {NATIONAL_LINK_LABEL}
                </Link>
              </p>
            </div>
          </div>
        </section>

        <Section id="vs-national" alt>
          <h2 className={H2}>{p.name} against the national figures</h2>
          <p className={P}>{COMPARE_INTRO}</p>
          <DataTable table={compareTable(p)} caption={`SBA hotel lending in ${p.name} and the United States, ${fyRange(T5)}`} minWidth={560} />
        </Section>

        <Section id="by-year">
          <h2 className={H2}>SBA hotel loans in {p.name} by fiscal year</h2>
          <p className={P}>{YEAR_INTRO(p)}</p>
          <StateChart page={p} />
          <DataTable table={stateYearTable(p)} caption={`SBA hotel loan approvals in ${p.name} by fiscal year and program`} />
        </Section>

        <Section id="lenders" alt>
          <h2 className={H2}>Top SBA hotel lenders in {p.name}, {fyRange(T3)}</h2>
          <p className={P}>{STATE_LENDERS_NOTE(p)}</p>
          <h3 className={H3}>7(a) lenders with the most hotel loans in {p.name}</h3>
          <p className={P}>{stateLendersCount(p, "7a")}</p>
          <DataTable table={stateLenders7aTable(p)} caption={`Top 7(a) hotel lenders in ${p.name} by loan count, ${fyRange(T3)}`} />
          <h3 className={H3}>504 certified development companies with the most hotel loans in {p.name}</h3>
          <p className={P}>{stateLendersCount(p, "504")}</p>
          <DataTable table={stateCdcsTable(p)} caption={`Top 504 CDCs for hotels in ${p.name} by loan count, ${fyRange(T3)}`} />
        </Section>

        <Section id="loan-size">
          <h2 className={H2}>How big are SBA hotel loans in {p.name}?</h2>
          <p className={P}>{stateBucketsIntro(p)}</p>
          <DataTable table={stateBucketsTable(p)} caption={`SBA hotel loan size distribution in ${p.name} and nationally, ${fyRange(T5)}`} minWidth={860} />
        </Section>

        <Section id="methodology" alt>
          <h2 className={H2}>Methodology</h2>
          <p className={P}>
            {STATE_METHOD(p)}{" "}
            <Link href={`${SBA_PATH}#methodology`} className={A}>
              {NATIONAL_LINK_LABEL}
            </Link>
          </p>

          <h2 className={`mt-14 ${LABEL}`}>Cite as</h2>
          <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
            {STATE_CITE_INTRO} License:{" "}
            <a href={SBA_LICENSE} rel="noopener external" className={A}>
              CC BY 4.0
            </a>
          </p>
          <pre className="mt-6 overflow-x-auto rounded-[14px] bg-white p-5 text-[13px] leading-[1.6] text-[color:var(--text-primary)]">
            <code>{stateCiteAs(p)}</code>
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
                {STATE_CTA(p)}
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Pill variant="primary" href="/contact">Talk to the team</Pill>
              </div>
              <ul className="mt-8 space-y-2 text-[14px] tracking-[-0.014em]">
                {stateRelated(p).map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className={A}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className={`mt-16 ${LABEL}`}>SBA hotel lending in other states</h2>
            <p className={P}>{OTHER_STATES_INTRO}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px] tracking-[-0.014em]">
              {otherStates(p).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={A}>
                    {s.label}
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
