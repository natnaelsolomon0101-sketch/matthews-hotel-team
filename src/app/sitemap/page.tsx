import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";
import { BRAND, SITE_URL, breadcrumb, webPage } from "@/lib/entity";
import { SITE_MAP_PAGE_PATH, siteMapSections } from "@/lib/site-map";

/**
 * /sitemap: the HTML site map. Every indexable page, grouped by section,
 * built from the same inventory as /sitemap.xml (src/lib/site-map.ts). The
 * footer links here, so every page on the site is at most two clicks from any
 * other page. scripts/sitemap-check.mjs fails the gate if this page and
 * /sitemap.xml ever list different URLs.
 *
 * It is a navigation page: links and headings only, no claims and no numbers.
 */

const URL = `${SITE_URL}${SITE_MAP_PAGE_PATH}`;
const DESCRIPTION = `Every page on the ${BRAND} site, grouped by section: answer guides, calculators, the rate sheet, data, research, the glossary, listings, markets and closed deals.`;

export const metadata: Metadata = {
  title: `Site Map | ${BRAND}`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "website", title: `Site Map | ${BRAND}`, description: DESCRIPTION, url: URL },
  twitter: { card: "summary", title: `Site Map | ${BRAND}`, description: DESCRIPTION },
};

const EYEBROW = "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";
const LINK = "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";

function isoDay(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function longDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function SiteMapPage() {
  const sections = siteMapSections();
  const self = sections
    .flatMap((s) => s.entries)
    .find((e) => e.path === SITE_MAP_PAGE_PATH);
  const updated = self?.lastModified ?? new Date(0);

  const graph = [
    webPage({
      url: URL,
      name: `Site Map | ${BRAND}`,
      description: DESCRIPTION,
      dateModified: isoDay(updated),
    }),
    breadcrumb([{ name: "Site map", path: SITE_MAP_PAGE_PATH }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <article className="bg-white pt-16 pb-24">
          <div className="mx-auto max-w-[1024px] px-6">
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
                    Site map
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 text-[clamp(32px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.014em] text-[#1d1d1f]">
              Site map
            </h1>

            <p className="mt-4 text-[13px] tracking-[-0.014em] text-[#86868b]">
              Last updated: <time dateTime={isoDay(updated)}>{longDate(updated)}</time>
            </p>

            <p className="mt-7 max-w-[64ch] text-[19px] leading-[1.45] tracking-[0.012em] text-[#1d1d1f]">
              Every page on the {BRAND} site, grouped by section. The same list is
              published for crawlers at{" "}
              <a href="/sitemap.xml" className={LINK}>
                /sitemap.xml
              </a>
              .
            </p>

            <nav aria-label="Sections" className="mt-8">
              <ul className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-block rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[13px] tracking-[-0.014em] text-[#1d1d1f] transition-colors hover:bg-[#ececef]"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div id="site-map-list">
              {sections.map((s) => (
                <section key={s.id} aria-labelledby={s.id} className="mt-14">
                  <h2
                    id={s.id}
                    className="scroll-mt-24 text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]"
                  >
                    {s.heading}
                  </h2>
                  {s.hub && (
                    <p className="mt-4 text-[17px] font-medium tracking-[-0.014em]">
                      <Link href={s.hub.path} prefetch={false} className={LINK}>
                        {s.hub.label}
                      </Link>
                    </p>
                  )}
                  <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-2.5 md:grid-cols-2">
                    {s.entries.map((e) => (
                      <li key={e.path} className="text-[15px] leading-[1.4] tracking-[-0.014em]">
                        {e.path === SITE_MAP_PAGE_PATH ? (
                          <span aria-current="page" className="text-[#424245]">
                            {e.label}
                          </span>
                        ) : (
                          <Link href={e.path} prefetch={false} className={LINK}>
                            {e.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
