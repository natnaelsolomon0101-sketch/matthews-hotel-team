import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";
import { Pill } from "@/components/ui/Pill";
import { bioMembers } from "@/lib/entity";
import {
  BOILERPLATE,
  BRAND,
  EMAIL,
  HQ_ADDRESS_LINE,
  LINKEDIN,
  PARENT,
  PARENT_URL,
  SITE_URL,
  breadcrumb,
  webPage,
} from "@/lib/entity";

import { DEFAULT_OG_IMAGES, seoTitle } from "@/lib/seo-meta";
/**
 * /press — the press kit.
 *
 * The footer's "Press" link pointed at /insights, which is dated commentary,
 * not a press kit: a reporter landing there found articles rather than a media
 * contact, a boilerplate or assets. Content is Agent 9's
 * (geo/09-offsite/press-page.md); this route is the build.
 *
 * FOUR THINGS THIS PAGE DELIBERATELY DOES NOT DO, all from that brief:
 *  1. No releases are listed. None have been issued as of 2026-09-17. An empty
 *     "no releases yet" state is honest; a listed release that was never sent
 *     is not. Add one only after it has actually gone out.
 *  2. No transaction-volume or founding-year claim. Neither is sourced for the
 *     hospitality team (src/lib/track-record.ts). A press page is not the
 *     place to reintroduce them.
 *  3. No phone number. No verified organization-level number exists anywhere
 *     in the repo, and a broker's direct line is not a media line.
 *  4. No awards, rankings or "as featured in" logos. Nothing has been placed
 *     yet. Add them with a link to the real coverage, not before.
 */

const URL = `${SITE_URL}/press`;
const LAST_UPDATED = "2026-09-17";
const LAST_UPDATED_LABEL = "September 17, 2026";

const DESCRIPTION = `Media contact, company boilerplate and press assets for ${BRAND}, the hospitality investment sales and capital markets team of ${PARENT}.`;

// <meta name=description> only: DESCRIPTION is 182 characters, over the
// 160 a search result shows. Same words, shorter; schema keeps DESCRIPTION.
const META_DESCRIPTION = `Media contact, company boilerplate and press assets for ${BRAND}, the hospitality team of ${PARENT}.`;

export const metadata: Metadata = {
  title: seoTitle(`Press | ${BRAND}`),
  description: META_DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: `Press | ${BRAND}`,
    description: DESCRIPTION,
    url: URL,
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: `Press | ${BRAND}`,
    description: DESCRIPTION,
  },
};

const EYEBROW =
  "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";
const H2 =
  "mt-12 text-[26px] font-semibold leading-[1.18] tracking-[-0.016em] text-[#1d1d1f]";
const LINK =
  "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";

export default function PressPage() {
  const people = bioMembers();

  const graph = [
    webPage({
      url: URL,
      name: `Press | ${BRAND}`,
      description: DESCRIPTION,
      dateModified: LAST_UPDATED,
    }),
    breadcrumb([{ name: "Press", path: "/press" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <article className="bg-white pt-16 pb-24">
          <div className="mx-auto max-w-[692px] px-6">
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
                    Press
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 text-[clamp(32px,3.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.014em] text-[#1d1d1f]">
              Press
            </h1>

            <p className="mt-4 text-[13px] tracking-[-0.014em] text-[#86868b]">
              Last updated:{" "}
              <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
            </p>

            <p className="mt-7 text-[19px] leading-[1.45] tracking-[0.012em] text-[#1d1d1f]">
              {BOILERPLATE} For interviews, data requests or deal coverage, email{" "}
              <a href={`mailto:${EMAIL}`} className={LINK}>
                {EMAIL}
              </a>
              . The boilerplate, the media contact and the first-party datasets
              reporters most often ask for are all on this page.
            </p>

            <h2 className={H2}>Media contact</h2>
            <p className="mt-4 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
              {BRAND}
              <br />
              <a href={`mailto:${EMAIL}`} className={LINK}>
                {EMAIL}
              </a>
              <br />
              {HQ_ADDRESS_LINE}
            </p>
            <p className="mt-3 text-[14px] leading-[1.5] text-[#86868b]">
              We do not publish a media phone line. Email reaches the whole desk
              and is the fastest route to the right person.
            </p>

            <h2 className={H2}>Releases</h2>
            <p className="mt-4 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
              None issued yet. {BRAND} has not put out a press release as of{" "}
              {LAST_UPDATED_LABEL}. When one goes out it will be listed here,
              newest first, with the date it was issued. We would rather show an
              empty list than pad one.
            </p>

            <h2 className={H2}>What we can talk about, with data</h2>
            <p className="mt-4 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
              Three first-party datasets are published on this site, free, with
              their methodology and their gaps stated:
            </p>
            <ul className="mt-5 space-y-3">
              <li className="relative pl-5 text-[16px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-[#1a3a6b]"
                />
                <Link href="/research/mhi" className={LINK}>
                  The Matthews Hotel Index
                </Link>
                : quarterly cap rate bands, ADR, RevPAR and occupancy across 14
                metros, built from public research.
              </li>
              <li className="relative pl-5 text-[16px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-[#1a3a6b]"
                />
                <Link href="/rates" className={LINK}>
                  The monthly hotel rate sheet
                </Link>
                : dated public benchmarks and published SBA program rules, with
                every cell we cannot source marked not yet published. Machine
                readable at{" "}
                <Link href="/rates.json" className={LINK}>
                  /rates.json
                </Link>{" "}
                and{" "}
                <Link href="/rates.csv" className={LINK}>
                  /rates.csv
                </Link>
                .
              </li>
              <li className="relative pl-5 text-[16px] leading-[1.5] tracking-[-0.014em] text-[#1d1d1f]">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-[#1a3a6b]"
                />
                <Link href="/data/hotel-financing-statistics" className={LINK}>
                  Hotel financing statistics
                </Link>
                : sourced and dated, including a visible list of the figures we
                rejected and why.
              </li>
            </ul>

            <h2 className={H2}>Boilerplate</h2>
            <p className="mt-4 text-[14px] leading-[1.5] text-[#86868b]">
              Paste this exactly. It is the same sentence used in our schema
              markup, on{" "}
              <Link href="/about" className={LINK}>
                /about
              </Link>
              , in the footer and in{" "}
              <Link href="/llms.txt" className={LINK}>
                llms.txt
              </Link>
              .
            </p>
            <blockquote className="mt-4 rounded-[18px] bg-[#f5f5f7] p-6 text-[16px] leading-[1.55] tracking-[-0.014em] text-[#1d1d1f]">
              {BOILERPLATE}
            </blockquote>

            <h2 className={H2}>People available for comment</h2>
            <ul className="mt-5 space-y-4">
              {people.map((m) => (
                <li key={m.slug}>
                  <p className="text-[17px] font-semibold tracking-[-0.014em] text-[#1d1d1f]">
                    <Link href={`/team/${m.slug}`} className={LINK}>
                      {m.name}
                    </Link>
                  </p>
                  <p className="mt-1 text-[14px] leading-[1.45] tracking-[-0.014em] text-[#424245]">
                    {m.title}, {m.office}. Speaks to:{" "}
                    {m.specialties.join(", ").toLowerCase()}.
                  </p>
                  <p className="mt-1 text-[14px] text-[#424245]">
                    <a href={`mailto:${m.email}`} className={LINK}>
                      {m.email}
                    </a>
                    {m.linkedin && (
                      <>
                        <span aria-hidden="true" className="mx-2 text-[#86868b]">
                          ·
                        </span>
                        <a href={m.linkedin} rel="noopener external" className={LINK}>
                          LinkedIn
                        </a>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-[1.5] text-[#86868b]">
              Headshots are on each profile page. If you need higher-resolution
              files or a logo package, email{" "}
              <a href={`mailto:${EMAIL}`} className={LINK}>
                {EMAIL}
              </a>{" "}
              and we will send them.
            </p>

            <h2 className={H2}>Parent company</h2>
            <p className="mt-4 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
              {BRAND} is part of {PARENT}. Firm-wide press enquiries go to{" "}
              <a href={PARENT_URL} rel="noopener external" className={LINK}>
                matthews.com
              </a>
              . Our company page is on{" "}
              <a href={LINKEDIN} rel="noopener external" className={LINK}>
                LinkedIn
              </a>
              .
            </p>

            <div className="mt-14 border-t border-[color:var(--divider)] pt-10">
              <p className="max-w-[56ch] text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                On deadline? Email us and say so in the subject line. We will
                give you what we can source and tell you plainly what we cannot.
              </p>
              <div className="mt-5">
                <Pill variant="primary" href="/contact">
                  Contact the desk
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
