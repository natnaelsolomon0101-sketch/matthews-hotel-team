import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";
import { Pill } from "@/components/ui/Pill";
import { markets } from "@/lib/data/markets";
import { getLatestMhi, formatCapBand } from "@/lib/data/mhi";
import {
  BRAND,
  SITE_URL,
  breadcrumb,
  collectionPageNode,
  itemList,
  webPage,
} from "@/lib/entity";

/**
 * /markets — the market index.
 *
 * Before this route existed, `vercel.json` answered a request for /markets
 * with a 307 to /markets/austin-tx. There was no index behind it, so one of
 * the site's four content trees had no root and a crawler asking for "markets"
 * was handed Austin. That redirect is removed in the same commit as this file
 * (geo/05-architecture.md §8.3). It was a temporary redirect, so no indexed
 * 301 is disturbed.
 *
 * Every number on this page comes from mhi.ts, which is first-party and
 * already published at /research/mhi. Nothing here is typed by hand.
 */

const URL = `${SITE_URL}/markets`;
const mhi = getLatestMhi();
const LAST_UPDATED = mhi.publishedAt;
const LAST_UPDATED_LABEL = new Date(`${LAST_UPDATED}T12:00:00Z`).toLocaleDateString(
  "en-US",
  { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
);

const DESCRIPTION = `Hotel cap rates, ADR, RevPAR and occupancy across the ${markets.length} U.S. metros ${BRAND} covers, from the Matthews Hotel Index for ${mhi.label}.`;

export const metadata: Metadata = {
  title: `Hotel Markets We Cover | ${BRAND}`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: `Hotel markets covered by ${BRAND}`,
    description: DESCRIPTION,
    url: URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `Hotel markets covered by ${BRAND}`,
    description: DESCRIPTION,
  },
};

const REGION_ORDER = ["Texas", "Sun Belt", "Mountain West"] as const;

const EYEBROW =
  "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";
const LINK =
  "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";

export default function MarketsIndexPage() {
  const byRegion = REGION_ORDER.map((region) => ({
    region,
    items: markets.filter((m) => m.region === region),
  })).filter((g) => g.items.length > 0);

  const rows = markets.map((m) => {
    const dp = mhi.data.find((d) => d.marketSlug === m.slug);
    return { market: m, dp };
  });

  const graph = [
    webPage({
      url: URL,
      name: `Hotel markets covered by ${BRAND}`,
      description: DESCRIPTION,
      dateModified: LAST_UPDATED,
    }),
    collectionPageNode({
      url: URL,
      name: `Hotel markets covered by ${BRAND}`,
      description: DESCRIPTION,
      dateModified: LAST_UPDATED,
      hasPart: markets.map((m) => ({
        url: `${SITE_URL}/markets/${m.slug}`,
        name: `Hotels for sale in ${m.city}, ${m.state}`,
      })),
    }),
    itemList(
      markets.map((m) => ({
        name: `${m.city}, ${m.state}`,
        path: `/markets/${m.slug}`,
      })),
      `${URL}#markets`,
    ),
    breadcrumb([{ name: "Markets", path: "/markets" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <article className="bg-white pt-16 pb-24">
          <div className="mx-auto max-w-[900px] px-6">
            <nav aria-label="Breadcrumb" className={EYEBROW}>
              <ol className="flex items-center gap-x-2">
                <li>
                  <Link href="/" className="hover:text-[#1d1d1f] transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <span aria-hidden="true" className="opacity-60">
                    /
                  </span>
                  <span aria-current="page" className="text-[#1d1d1f]">
                    Markets
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 text-[clamp(32px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.014em] text-[#1d1d1f]">
              Which hotel markets does {BRAND} cover?
            </h1>

            <p className="mt-4 text-[13px] tracking-[-0.014em] text-[#86868b]">
              Last updated:{" "}
              <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
            </p>

            <p className="mt-7 text-[19px] leading-[1.45] tracking-[0.012em] text-[#1d1d1f]">
              {markets.length} metros across Texas, the Sun Belt and the Mountain
              West, each with its own cap rate bands, ADR and RevPAR ranges from
              the Matthews Hotel Index for {mhi.label}, published{" "}
              {LAST_UPDATED_LABEL}. Select-service cap rates across the covered
              set run {capSpan(rows, "select-service")}. Pick a metro for its
              comps, demand drivers, live listings and the broker who covers it.
            </p>

            {/* The MHI summary table. First-party, visible, and the reason this
                index is worth having rather than a list of links. */}
            <section aria-labelledby="mhi-table" className="mt-12">
              <h2
                id="mhi-table"
                className="text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]"
              >
                Matthews Hotel Index, {mhi.label}, by metro
              </h2>
              <div className="mt-6 -mx-6 overflow-x-auto px-6">
                <table className="w-full min-w-[760px] border-collapse text-left">
                  <caption className="sr-only">
                    Matthews Hotel Index {mhi.label}: cap rate bands, ADR, RevPAR
                    and occupancy for each covered metro.
                  </caption>
                  <thead>
                    <tr className="border-b border-[#1d1d1f]/20">
                      {[
                        "Metro",
                        "Select-service cap rate",
                        "ADR range",
                        "RevPAR range",
                        "Occupancy",
                        "RevPAR YoY",
                      ].map((c) => (
                        <th
                          key={c}
                          scope="col"
                          className="py-3 pr-4 align-bottom text-[13px] font-semibold tracking-[-0.01em] text-[#1d1d1f]"
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(({ market: m, dp }) => {
                      const ss = dp?.capRates.find(
                        (c) => c.segment === "select-service",
                      );
                      return (
                        <tr
                          key={m.slug}
                          className="border-b border-[color:var(--divider)] last:border-b-0"
                        >
                          <th
                            scope="row"
                            className="py-3 pr-4 align-top text-[14px] font-medium tracking-[-0.014em]"
                          >
                            <Link href={`/markets/${m.slug}`} className={LINK}>
                              {m.city}, {m.state}
                            </Link>
                          </th>
                          <td className="py-3 pr-4 align-top text-[14px] tabular-nums text-[#424245]">
                            {ss ? formatCapBand(ss) : "Not published"}
                          </td>
                          <td className="py-3 pr-4 align-top text-[14px] tabular-nums text-[#424245]">
                            {dp ? `$${dp.adrLow} to $${dp.adrHigh}` : "Not published"}
                          </td>
                          <td className="py-3 pr-4 align-top text-[14px] tabular-nums text-[#424245]">
                            {dp
                              ? `$${dp.revparLow} to $${dp.revparHigh}`
                              : "Not published"}
                          </td>
                          <td className="py-3 pr-4 align-top text-[14px] tabular-nums text-[#424245]">
                            {dp ? `${dp.occupancy}%` : "Not published"}
                          </td>
                          <td className="py-3 pr-4 align-top text-[14px] tabular-nums text-[#424245]">
                            {dp
                              ? `${dp.yoyRevparChange > 0 ? "+" : ""}${dp.yoyRevparChange}%`
                              : "Not published"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[13px] leading-[1.5] text-[#86868b]">
                Source:{" "}
                <Link href={`/research/mhi/${mhi.slug}`} className={LINK}>
                  Matthews Hotel Index, {mhi.label}
                </Link>
                , published {LAST_UPDATED_LABEL}. Next refresh {mhi.nextRefresh}.
                Full methodology and outside sources are on that page.
              </p>
            </section>

            {byRegion.map((group) => (
              <section key={group.region} aria-label={group.region} className="mt-12">
                <h2 className="text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]">
                  {group.region}
                </h2>
                <ul className="mt-6 divide-y divide-[color:var(--divider)]">
                  {group.items.map((m) => (
                    <li key={m.slug} className="py-4 first:pt-0">
                      <Link
                        href={`/markets/${m.slug}`}
                        className={`${LINK} text-[17px]`}
                      >
                        Hotels for sale in {m.city}, {m.state}
                      </Link>
                      <p className="mt-1 text-[14px] leading-[1.45] tracking-[-0.014em] text-[#86868b]">
                        {m.msa}. {m.tagline}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section aria-labelledby="related" className="mt-14">
              <h2 id="related" className={EYEBROW}>
                Related
              </h2>
              <ul className="mt-4 space-y-2 text-[15px]">
                <li>
                  <Link href="/hotel-valuation/hotel-cap-rates" className={LINK}>
                    What is a good cap rate for a hotel in 2026?
                  </Link>
                </li>
                <li>
                  <Link href="/hotel-valuation" className={LINK}>
                    What is my hotel worth, and who decides?
                  </Link>
                </li>
                <li>
                  <Link href="/sell-a-hotel" className={LINK}>
                    What is involved in selling a hotel?
                  </Link>
                </li>
                <li>
                  <Link href="/hotels-for-sale" className={LINK}>
                    Hotels for sale by brand
                  </Link>
                </li>
                <li>
                  <Link href="/research/mhi" className={LINK}>
                    The Matthews Hotel Index
                  </Link>
                </li>
              </ul>
            </section>

            <div className="mt-14 border-t border-[color:var(--divider)] pt-10">
              <p className="max-w-[56ch] text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                If your metro is not on this list, we still cover it. These are
                the {markets.length} where we publish quarterly index data.
              </p>
              <div className="mt-5">
                <Pill variant="primary" href="/contact">
                  Ask about your market
                </Pill>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

/** Low-to-high select-service cap rate span across every covered metro. */
function capSpan(
  rows: { dp?: { capRates: { segment: string; low: number; high: number }[] } }[],
  segment: string,
): string {
  const bands = rows
    .map((r) => r.dp?.capRates.find((c) => c.segment === segment))
    .filter((b): b is { segment: string; low: number; high: number } => Boolean(b));
  if (bands.length === 0) return "a range we do not publish yet";
  const low = Math.min(...bands.map((b) => b.low));
  const high = Math.max(...bands.map((b) => b.high));
  return `${low.toFixed(2)}% to ${high.toFixed(2)}%`;
}
