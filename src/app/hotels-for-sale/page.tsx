import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";
import { Pill } from "@/components/ui/Pill";
import { brands } from "@/lib/data/brands";
import { listings } from "@/lib/data/listings";
import {
  BRAND,
  SITE_URL,
  breadcrumb,
  collectionPageNode,
  itemList,
  webPage,
} from "@/lib/entity";

import { DEFAULT_OG_IMAGES, seoTitle } from "@/lib/seo-meta";
/**
 * /hotels-for-sale — the brand index.
 *
 * `/brands` was a 307 to /hotels-for-sale/hampton-inn: a temporary redirect to
 * one arbitrary child, with no index behind it. This page is that index, and
 * `/brands` becomes a 301 here in the same commit (geo/05-architecture.md
 * §8.3). A 301 is correct for /brands because the URL is being deliberately
 * renamed to the tree that already exists, and the old destination was never
 * a permanent redirect, so nothing indexed is disturbed.
 *
 * No new brand URLs. The nine flags below are the ones in brands.ts.
 */

const URL = `${SITE_URL}/hotels-for-sale`;
const LAST_UPDATED = "2026-09-17";
const LAST_UPDATED_LABEL = "September 17, 2026";

const DESCRIPTION = `${BRAND} sells hotels under ${brands.length} major flags. Underwriting notes, buyer pools and current inventory for each brand family.`;

export const metadata: Metadata = {
  title: seoTitle(`Hotels for Sale by Brand | ${BRAND}`),
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: `Hotels for sale by brand | ${BRAND}`,
    description: DESCRIPTION,
    url: URL,
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: `Hotels for sale by brand | ${BRAND}`,
    description: DESCRIPTION,
  },
};

const EYEBROW =
  "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";
const LINK =
  "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";

export default function HotelsForSaleIndexPage() {
  // Group by parent company, so the page reads the way the industry does.
  const parents = Array.from(new Set(brands.map((b) => b.parentCompany))).sort();
  const groups = parents.map((p) => ({
    parent: p,
    items: brands.filter((b) => b.parentCompany === p),
  }));

  const liveByBrand = new Map<string, number>();
  for (const b of brands) {
    const n = listings.filter((l) =>
      l.brand.toLowerCase().includes(b.name.toLowerCase()),
    ).length;
    liveByBrand.set(b.slug, n);
  }

  const graph = [
    webPage({
      url: URL,
      name: `Hotels for sale by brand | ${BRAND}`,
      description: DESCRIPTION,
      dateModified: LAST_UPDATED,
    }),
    collectionPageNode({
      url: URL,
      name: `Hotels for sale by brand | ${BRAND}`,
      description: DESCRIPTION,
      dateModified: LAST_UPDATED,
      hasPart: brands.map((b) => ({
        url: `${SITE_URL}/hotels-for-sale/${b.slug}`,
        name: `${b.name} hotels for sale`,
      })),
    }),
    itemList(
      brands.map((b) => ({
        name: b.name,
        path: `/hotels-for-sale/${b.slug}`,
      })),
      `${URL}#brands`,
    ),
    breadcrumb([{ name: "Hotels for sale", path: "/hotels-for-sale" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <article className="bg-white pt-16 pb-24">
          <div className="mx-auto max-w-[860px] px-6">
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
                    Hotels for sale
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 text-[clamp(32px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.014em] text-[#1d1d1f]">
              Which hotel brands does {BRAND} sell?
            </h1>

            <p className="mt-4 text-[13px] tracking-[-0.014em] text-[#86868b]">
              Last updated:{" "}
              <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
            </p>

            <p className="mt-7 text-[19px] leading-[1.45] tracking-[0.012em] text-[#1d1d1f]">
              {brands.length} flag families across {parents.length} parent
              companies, with {listings.length} listings live today. The flag
              changes the underwriting: franchise term, PIP cycle, loyalty
              contribution and buyer pool all move with it, and two identical
              buildings under different flags do not price the same.
            </p>

            <section aria-labelledby="brand-table" className="mt-12">
              <h2
                id="brand-table"
                className="text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]"
              >
                Flags we cover, by parent company
              </h2>
              <div className="mt-6 -mx-6 overflow-x-auto px-6">
                <table className="w-full min-w-[620px] border-collapse text-left">
                  <caption className="sr-only">
                    Hotel flags covered by Matthews Hotel Markets, with parent
                    company, segment and who buys them.
                  </caption>
                  <thead>
                    <tr className="border-b border-[#1d1d1f]/20">
                      {["Flag", "Parent", "Segment", "Live listings"].map((c) => (
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
                    {brands.map((b) => (
                      <tr
                        key={b.slug}
                        className="border-b border-[color:var(--divider)] last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="py-3 pr-4 align-top text-[14px] font-medium tracking-[-0.014em]"
                        >
                          <Link href={`/hotels-for-sale/${b.slug}`} className={LINK}>
                            {b.name}
                          </Link>
                        </th>
                        <td className="py-3 pr-4 align-top text-[14px] text-[#424245]">
                          {b.parentCompany}
                        </td>
                        <td className="py-3 pr-4 align-top text-[14px] text-[#424245]">
                          {b.segment}
                        </td>
                        <td className="py-3 pr-4 align-top text-[14px] tabular-nums text-[#424245]">
                          {liveByBrand.get(b.slug) || 0}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {groups.map((g) => (
              <section key={g.parent} aria-label={g.parent} className="mt-12">
                <h2 className="text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]">
                  {g.parent}
                </h2>
                <ul className="mt-6 divide-y divide-[color:var(--divider)]">
                  {g.items.map((b) => (
                    <li key={b.slug} className="py-4 first:pt-0">
                      <Link
                        href={`/hotels-for-sale/${b.slug}`}
                        className={`${LINK} text-[17px]`}
                      >
                        {b.name} hotels for sale
                      </Link>
                      <p className="mt-1 text-[14px] leading-[1.45] tracking-[-0.014em] text-[#86868b]">
                        {b.flagFamilies.join(", ")}. {b.buyerPool}
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
                  <Link href="/listings" className={LINK}>
                    Every active listing
                  </Link>
                </li>
                <li>
                  <Link href="/markets" className={LINK}>
                    The metros we cover
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hotel-financing/pip-and-renovation-loans"
                    className={LINK}
                  >
                    How do I finance a PIP or a hotel renovation?
                  </Link>
                </li>
                <li>
                  <Link href="/hotel-valuation/hotel-cap-rates" className={LINK}>
                    What is a good cap rate for a hotel in 2026?
                  </Link>
                </li>
                <li>
                  <Link href="/sell-a-hotel" className={LINK}>
                    What is involved in selling a hotel?
                  </Link>
                </li>
              </ul>
            </section>

            <div className="mt-14 border-t border-[color:var(--divider)] pt-10">
              <div className="mt-2">
                <Pill variant="primary" href="/contact">
                  Ask about a flag
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
