import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Pill } from "@/components/ui/Pill";
import JsonLd from "@/components/seo/JsonLd";
import { formatDate } from "@/components/answers/AnswerPageView";
import {
  BRAND,
  SITE_URL,
  breadcrumb,
  collectionPageNode,
  itemList,
  webPage,
} from "@/lib/entity";
import { clusters } from "@/lib/data/answers";
import { inputLabels, tools, toolsHub } from "@/lib/data/tools";
import { MHI_LABEL, MHI_PATH } from "@/lib/data/tools/hotel-value-estimator";

import { DEFAULT_OG_IMAGES, seoTitle } from "@/lib/seo-meta";
const url = `${SITE_URL}${toolsHub.path}`;
const title = `${toolsHub.title} | ${BRAND}`;

export const metadata: Metadata = {
  title: seoTitle(title),
  description: toolsHub.description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    title,
    description: toolsHub.description,
    url,
    images: DEFAULT_OG_IMAGES,
  },
  twitter: { card: "summary_large_image", title, description: toolsHub.description },
};

const LINK =
  "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";
const EYEBROW =
  "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";
const H2 =
  "mt-14 text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]";

/**
 * The tool hub. Built only once four calculators existed
 * (geo/05-briefs/_wave2-stubs.md, section D: a hub over two children is thin);
 * it now lists six, straight from the registry.
 * Fully server-rendered. Every tool is linked with its own H1 as anchor text.
 */
export default function ToolsHubPage() {
  const guides = clusters
    .filter((c) => ["hotel-financing", "hotel-valuation"].includes(c.cluster))
    .map((c) => ({ href: `/${c.cluster}`, label: c.hub.h1 }));

  const graph = [
    webPage({
      url,
      name: toolsHub.h1,
      description: toolsHub.description,
      mainEntity: `${url}#collection`,
      dateModified: toolsHub.lastUpdated,
    }),
    collectionPageNode({
      url,
      name: toolsHub.h1,
      description: toolsHub.description,
      dateModified: toolsHub.lastUpdated,
      hasPart: tools.map((t) => ({
        url: `${SITE_URL}/tools/${t.slug}`,
        name: t.h1,
      })),
    }),
    // The visible list of calculators, one for one.
    itemList(
      tools.map((t) => ({ name: t.h1, path: `/tools/${t.slug}` })),
      `${url}#tools`,
    ),
    breadcrumb([{ name: "Tools", path: toolsHub.path }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <article className="bg-white pt-16 pb-24">
          <div className="mx-auto max-w-[692px] px-6">
            <nav aria-label="Breadcrumb" className={EYEBROW}>
              <ol className="flex flex-wrap items-center gap-x-2">
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
                    Tools
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 text-[clamp(32px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.014em] text-[#1d1d1f]">
              {toolsHub.h1}
            </h1>

            <p className="mt-4 text-[13px] tracking-[-0.014em] text-[#86868b]">
              Last updated:{" "}
              <time dateTime={toolsHub.lastUpdated}>
                {formatDate(toolsHub.lastUpdated)}
              </time>
            </p>

            <p className="mt-7 text-[19px] leading-[1.45] tracking-[0.012em] text-[#1d1d1f]">
              {toolsHub.intro}{" "}
              <Link href="/rates" className={LINK}>
                See the rate sheet
              </Link>
              .
            </p>

            <section aria-labelledby="calculators">
              <h2 id="calculators" className={H2}>
                The calculators
              </h2>
              <ul className="mt-6 divide-y divide-[color:var(--divider)]">
                {tools.map((t) => (
                  <li key={t.slug} className="py-5 first:pt-0">
                    <Link href={`/tools/${t.slug}`} className={`${LINK} text-[17px]`}>
                      {t.h1}
                    </Link>
                    <p className="mt-1.5 text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                      {t.description}
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.5] tracking-[-0.014em] text-[#86868b]">
                      You enter: {inputLabels(t).join(", ")}.
                      <br />
                      You get: {t.tool.outputs.map((o) => o.label).join(", ")}.
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="order">
              <h2 id="order" className={H2}>
                Which one do I start with?
              </h2>
              <div className="mt-5 space-y-5 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
                <p>
                  If the question is what the hotel is worth, start with the
                  value estimator. It gives a screening range from the cap rate
                  bands in the {MHI_LABEL} Matthews Hotel Index, less your PIP.
                  It is not a valuation. A broker opinion of value is.
                </p>
                <p>
                  If the question is how much you can borrow, start with the
                  loan sizing calculator. It runs your lender&apos;s DSCR, debt
                  yield and LTV tests together, names the one that binds, and
                  shows the equity that leaves. It has an SBA 504 mode.
                </p>
                <p>
                  If a loan is maturing and you are deciding what to do with the
                  hotel, start with refinance vs sell. It runs the loan your NOI
                  supports and the cash a sale would leave, side by side, from
                  one set of inputs.
                </p>
                <p>
                  To look at one sizing test at a time, with its own sensitivity
                  table, use the DSCR and debt yield calculators. A lender
                  applies both, plus a loan-to-value test, and lends the
                  smallest result. DSCR moves with the interest rate. Debt yield
                  does not.
                </p>
                <p>
                  If you have an offer, or want to know what a given yield
                  implies for price, use the cap rate calculator. It also
                  converts price into price per key so you can compare hotels of
                  different sizes.
                </p>
                <p>
                  Every starting hotel, lender test and typed cap rate in these
                  tools is hypothetical. None of them is a quote, a lender
                  requirement or a market cap rate. The only cap rates we
                  publish are the index bands the value estimator uses, shown
                  with their quarter.
                </p>
              </div>
            </section>

            <section aria-labelledby="guides">
              <h2 id="guides" className={H2}>
                The guides behind the math
              </h2>
              <ul className="mt-5 space-y-2">
                {guides.map((g) => (
                  <li key={g.href}>
                    <Link href={g.href} className={`${LINK} text-[15px]`}>
                      {g.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={MHI_PATH} className={`${LINK} text-[15px]`}>
                    Matthews Hotel Index, {MHI_LABEL}
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className={`${LINK} text-[15px]`}>
                    Hotel investment glossary
                  </Link>
                </li>
              </ul>
            </section>

            <div className="mt-14 border-t border-[color:var(--divider)] pt-10">
              <p className="max-w-[56ch] text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                {BRAND} places hotel debt and sells hotels. Send us your
                trailing twelve-month statement and we will run these numbers on
                your hotel.
              </p>
              <div className="mt-5">
                <Pill variant="primary" href="/contact">
                  Have us run your numbers
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
