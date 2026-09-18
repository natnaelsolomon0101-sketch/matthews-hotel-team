import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";
import { Pill } from "@/components/ui/Pill";
import { services } from "@/lib/data/services";
import { offices } from "@/lib/data/offices";
import {
  BOILERPLATE,
  BRAND,
  SITE_URL,
  breadcrumb,
  collectionPageNode,
  itemList,
  webPage,
} from "@/lib/entity";

/**
 * /services — the service index.
 *
 * `vercel.json` used to answer /services with a 307 to
 * /services/investment-sales, which also made every /services/[slug]
 * breadcrumb point at a temporary redirect (Agent 3, request 4; Agent 5,
 * §8.3). The redirect is removed in the same commit as this file.
 *
 * These three pages are COMMERCIAL pages ("here is what we do, hire us").
 * They deliberately do not try to answer "how long does it take" or "what is a
 * typical fee": those are the answer clusters, and each service links up to
 * its own cluster here (architecture §3.3).
 */

const URL = `${SITE_URL}/services`;

/** The service copy itself has not changed; this is when the index shipped. */
const LAST_UPDATED = "2026-09-17";
const LAST_UPDATED_LABEL = "September 17, 2026";

const DESCRIPTION = `The three things ${BRAND} does: hotel investment sales from $2 million, hotel debt and equity placement from $5 million, and buy-side acquisition advisory.`;

export const metadata: Metadata = {
  title: `What We Do | ${BRAND}`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: `Services | ${BRAND}`,
    description: DESCRIPTION,
    url: URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${BRAND}`,
    description: DESCRIPTION,
  },
};

/** The informational cluster each commercial page points at (architecture §3.3). */
const ANSWER_FOR: Record<string, { href: string; label: string }> = {
  "investment-sales": {
    href: "/sell-a-hotel",
    label: "What is involved in selling a hotel?",
  },
  "capital-markets": {
    href: "/hotel-financing",
    label: "How does hotel financing work, and what does it cost right now?",
  },
  "acquisition-advisory": {
    href: "/hotel-valuation/how-to-value-a-hotel",
    label: "How do you value a hotel?",
  },
};

const EYEBROW =
  "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";
const LINK =
  "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";

export default function ServicesIndexPage() {
  const graph = [
    webPage({
      url: URL,
      name: `Services | ${BRAND}`,
      description: DESCRIPTION,
      dateModified: LAST_UPDATED,
    }),
    collectionPageNode({
      url: URL,
      name: `Services | ${BRAND}`,
      description: DESCRIPTION,
      dateModified: LAST_UPDATED,
      hasPart: services.map((s) => ({
        url: `${SITE_URL}/services/${s.slug}`,
        name: s.name,
      })),
    }),
    itemList(
      services.map((s) => ({ name: s.name, path: `/services/${s.slug}` })),
      `${URL}#services`,
    ),
    breadcrumb([{ name: "Services", path: "/services" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <article className="bg-white pt-16 pb-24">
          <div className="mx-auto max-w-[760px] px-6">
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
                    Services
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 text-[clamp(32px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.014em] text-[#1d1d1f]">
              What does {BRAND} do?
            </h1>

            <p className="mt-4 text-[13px] tracking-[-0.014em] text-[#86868b]">
              Last updated:{" "}
              <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
            </p>

            <p className="mt-7 text-[19px] leading-[1.45] tracking-[0.012em] text-[#1d1d1f]">
              {BOILERPLATE} Three service lines do that work: investment sales,
              capital markets, and acquisition advisory.
            </p>

            <section aria-labelledby="lines-table" className="mt-12">
              <h2
                id="lines-table"
                className="text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]"
              >
                The three service lines
              </h2>
              <div className="mt-6 -mx-6 overflow-x-auto px-6">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <caption className="sr-only">
                    Matthews Hotel Markets service lines, who each one is for,
                    and the deal size each one covers.
                  </caption>
                  <thead>
                    <tr className="border-b border-[#1d1d1f]/20">
                      {["Service", "Who it is for", "Size range"].map((c) => (
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
                    {services.map((s) => (
                      <tr
                        key={s.slug}
                        className="border-b border-[color:var(--divider)] last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="py-3 pr-4 align-top text-[14px] font-medium tracking-[-0.014em]"
                        >
                          <Link href={`/services/${s.slug}`} className={LINK}>
                            {s.name}
                          </Link>
                        </th>
                        <td className="py-3 pr-4 align-top text-[14px] leading-[1.4] text-[#424245]">
                          {s.audience}
                        </td>
                        <td className="py-3 pr-4 align-top text-[14px] tabular-nums text-[#424245]">
                          {s.rangeValue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {services.map((s) => {
              const answer = ANSWER_FOR[s.slug];
              return (
                <section key={s.slug} aria-labelledby={s.slug} className="mt-12">
                  <h2
                    id={s.slug}
                    className="text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]"
                  >
                    <Link href={`/services/${s.slug}`} className={LINK}>
                      {s.name}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[17px] leading-[1.47] font-medium tracking-[-0.014em] text-[#1d1d1f]">
                    {s.tagline}
                  </p>
                  <p className="mt-4 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
                    {s.description}
                  </p>
                  <p className="mt-4 text-[14px] tracking-[-0.014em] text-[#86868b]">
                    {s.rangeLabel}: {s.rangeValue}
                  </p>
                  {answer && (
                    <p className="mt-4 text-[15px] tracking-[-0.014em] text-[#424245]">
                      Not ready to hire anyone yet? Start with{" "}
                      <Link href={answer.href} className={LINK}>
                        {answer.label}
                      </Link>
                    </p>
                  )}
                </section>
              );
            })}

            <section aria-labelledby="where" className="mt-14">
              <h2 id="where" className={EYEBROW}>
                Where we work from
              </h2>
              <ul className="mt-4 space-y-2 text-[15px]">
                {offices.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/offices/${o.slug}`} className={LINK}>
                      {o.city}, {o.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-14 border-t border-[color:var(--divider)] pt-10">
              <div className="mt-2">
                <Pill variant="primary" href="/contact">
                  Talk to the team
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
