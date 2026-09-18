import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ListingsHero } from "@/components/sections/listings/ListingsHero";
import { ListingsBrowser } from "@/components/sections/listings/ListingsBrowser";
import PosterCTA from "@/components/sections/shared/PosterCTA";
import JsonLd from "@/components/seo/JsonLd";
import { listings, LISTINGS_UPDATED } from "@/lib/data/listings";
import { formatDate } from "@/lib/format-date";
import { SITE_URL, breadcrumb, itemList, webPage } from "@/lib/entity";

export const metadata: Metadata = {
  title: "Hotels for Sale | Active Listings",
  description:
    "Active hotel investment listings from Matthews Hotel Markets. Select-service, full-service, resort, lifestyle, and boutique hotels for sale across Texas, the Sun Belt, and the United States.",
  alternates: { canonical: `${SITE_URL}/listings` },
  openGraph: {
    title: "Hotels for Sale | Matthews Hotel Markets",
    description:
      "Active hotel investment listings. Select-service, full-service, resort, lifestyle, and boutique hotels for sale nationwide.",
    url: `${SITE_URL}/listings`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotels for Sale | Matthews Hotel Markets",
    description:
      "Active hotel investment listings, select-service through resort and boutique.",
  },
};

export default function ListingsPage() {
  const url = `${SITE_URL}/listings`;
  const graph = [
    webPage({
      url,
      name: "Hotels for Sale, Active Listings",
      description: metadata.description as string,
      mainEntity: `${url}#listings`,
      dateModified: LISTINGS_UPDATED,
    }),
    itemList(
      listings.map((l) => ({
        name: `${l.name}, ${l.city}, ${l.state}`,
        path: `/listings/${l.slug}`,
      })),
      `${url}#listings`,
    ),
    breadcrumb([{ name: "Listings", path: "/listings" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />
        <ListingsHero />
        <div className="bg-white">
          <p className="mx-auto -mt-10 max-w-[1024px] px-6 pb-6 text-[13px] tracking-[-0.014em] text-[color:var(--text-tertiary)]">
            Listings last updated{" "}
            <time dateTime={LISTINGS_UPDATED}>{formatDate(LISTINGS_UPDATED)}</time>
          </p>
        </div>
        <ListingsBrowser />
        <PosterCTA
          lead="Don't see your asset?"
          follow="Bring it to market."
        />
      </main>
      <SiteFooter />
    </>
  );
}
