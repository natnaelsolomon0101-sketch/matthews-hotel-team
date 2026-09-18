import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import JsonLd from "@/components/seo/JsonLd";
import { services } from "@/lib/data/services";
import { offices } from "@/lib/data/offices";
import { team } from "@/lib/data/team";
import {
  BOILERPLATE,
  BOILERPLATE_SHORT,
  BRAND,
  EMAIL,
  HQ_ADDRESS_LINE,
  ID,
  LINKEDIN,
  PARENT,
  PARENT_URL,
  SITE_URL,
  bioMembers,
  breadcrumb,
  webPage,
} from "@/lib/entity";

import { DEFAULT_OG_IMAGES, seoTitle } from "@/lib/seo-meta";
const URL = `${SITE_URL}/about`;
const LAST_UPDATED = "2026-09-17";
const LAST_UPDATED_LABEL = "September 17, 2026";

// <meta name=description> only. BOILERPLATE is 262 characters and was also
// the home page's description (a duplicate). BOILERPLATE_SHORT is its first
// sentence minus the street address. Schema and the visible page keep
// BOILERPLATE unchanged.
const META_DESCRIPTION = BOILERPLATE_SHORT;

export const metadata: Metadata = {
  title: seoTitle("About Matthews Hotel Markets"),
  description: META_DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: `About ${BRAND}`,
    description: BOILERPLATE,
    url: URL,
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${BRAND}`,
    description: BOILERPLATE,
  },
};

const sectionHeading =
  "text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]";
const body =
  "mt-4 max-w-[62ch] text-[17px] leading-[1.5] tracking-[0.004em] text-[color:var(--text-secondary)]";

export default function AboutPage() {
  const members = bioMembers();
  const austin = offices.find((o) => o.slug === "austin");
  const denver = offices.find((o) => o.slug === "denver");

  const graph = [
    {
      ...webPage({
        url: URL,
        name: `About ${BRAND}`,
        description: BOILERPLATE,
        mainEntity: ID.org,
        dateModified: LAST_UPDATED,
      }),
      "@type": "AboutPage",
    },
    breadcrumb([{ name: "About", path: "/about" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Eyebrow>About</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead="Who Matthews Hotel Markets is."
                follow="What we do, where, and who to call."
              />
            </div>

            <p className="mt-4 text-[13px] text-[color:var(--text-secondary)]">
              Last updated: {LAST_UPDATED_LABEL}
            </p>

            {/*
              THE BOILERPLATE. Identical wording in Organization.description,
              /team, the site footer, and llms.txt. One string, one source:
              src/lib/entity.ts. Do not reword it here.
            */}
            <p className="mt-8 max-w-[62ch] text-[21px] leading-[1.38] tracking-[0.007em] text-[color:var(--text-primary)]">
              {BOILERPLATE}
            </p>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
              <div>
                <section>
                  <h2 className={sectionHeading}>What the team does</h2>
                  <p className={body}>
                    Three service lines, all hospitality, all in the United
                    States. Ranges below are the same ranges published on each
                    service page.
                  </p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full border-collapse text-left text-[15px] tracking-[-0.01em]">
                      <caption className="sr-only">
                        Matthews Hotel Markets service lines and deal size
                        ranges
                      </caption>
                      <thead>
                        <tr className="border-b border-[color:var(--divider)]">
                          <th scope="col" className="py-3 pr-4 font-semibold">
                            Service
                          </th>
                          <th scope="col" className="py-3 pr-4 font-semibold">
                            Range
                          </th>
                          <th scope="col" className="py-3 font-semibold">
                            Who it is for
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((s) => (
                          <tr
                            key={s.slug}
                            className="border-b border-[color:var(--divider)] align-top"
                          >
                            <th scope="row" className="py-4 pr-4 font-normal">
                              <Link
                                href={`/services/${s.slug}`}
                                className="text-[#1a3a6b] underline underline-offset-[3px]"
                              >
                                {s.name}
                              </Link>
                            </th>
                            <td className="py-4 pr-4 text-[color:var(--text-secondary)]">
                              {s.rangeValue}
                            </td>
                            <td className="py-4 text-[color:var(--text-secondary)]">
                              {s.audience}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mt-12">
                  <h2 className={sectionHeading}>Where we work from</h2>
                  <p className={body}>
                    The headquarters is {HQ_ADDRESS_LINE}. Luke Thompson and
                    Nate Solomon sit there. Miles Cortez III works out of
                    Denver and covers the Mountain West; we do not publish a
                    Denver street address, because there is not a confirmed one
                    to publish. The wider Matthews hospitality bench sits in
                    Phoenix, Orange County, Fort Lauderdale, Nashville, Dallas,
                    Tampa, Cleveland, Kansas City, and Encino. Mandates run
                    nationwide, with the most coverage in Texas and the Sun
                    Belt.
                  </p>
                  <ul className="mt-5 space-y-1 text-[15px] text-[color:var(--text-secondary)]">
                    {austin && (
                      <li>
                        <Link
                          href="/offices/austin"
                          className="text-[#1a3a6b] underline underline-offset-[3px]"
                        >
                          Austin headquarters
                        </Link>
                        : {austin.streetAddress}, {austin.city}, {austin.state}{" "}
                        {austin.zip}
                      </li>
                    )}
                    {denver && (
                      <li>
                        <Link
                          href="/offices/denver"
                          className="text-[#1a3a6b] underline underline-offset-[3px]"
                        >
                          Denver
                        </Link>
                        : {denver.city}, {denver.state}. Mountain West coverage.
                      </li>
                    )}
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className={sectionHeading}>Since when</h2>
                  <p className={body}>
                    We do not publish a founding year for the hospitality team,
                    because we have not been able to source one we can stand
                    behind. What is verifiable is on this site: the active
                    mandates on{" "}
                    <Link
                      href="/listings"
                      className="text-[#1a3a6b] underline underline-offset-[3px]"
                    >
                      listings
                    </Link>
                    , the transaction record on{" "}
                    <Link
                      href="/closed"
                      className="text-[#1a3a6b] underline underline-offset-[3px]"
                    >
                      closed
                    </Link>
                    , and the individual track records on each{" "}
                    <Link
                      href="/team"
                      className="text-[#1a3a6b] underline underline-offset-[3px]"
                    >
                      broker profile
                    </Link>
                    . When the date is confirmed, it goes here first.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className={sectionHeading}>
                    How this works with the parent platform
                  </h2>
                  <p className={body}>
                    {BRAND} is a team inside {PARENT}, not a separate company.
                    The hospitality mandates, the underwriting, and the client
                    relationships are ours. Compliance, back office, and the
                    firm-wide investor database sit with the parent. Deals are
                    signed under the {PARENT} entity, and the firm&apos;s
                    corporate site is{" "}
                    <a
                      href={PARENT_URL}
                      rel="noopener noreferrer"
                      className="text-[#1a3a6b] underline underline-offset-[3px]"
                    >
                      matthews.com
                    </a>
                    .
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className={sectionHeading}>Who you talk to</h2>
                  <p className={body}>
                    {team.length} people cover hospitality across the Matthews
                    platform. {members.length} of them publish a full profile on
                    this site and carry the mandates behind the listings and
                    closings here. The rest of the hospitality bench is listed
                    on the{" "}
                    <Link
                      href="/team"
                      className="text-[#1a3a6b] underline underline-offset-[3px]"
                    >
                      team page
                    </Link>{" "}
                    with office, email, and direct line. There is no call center
                    and no junior handoff: the person named on the listing is
                    the person who picks up.
                  </p>
                  <ul className="mt-6 divide-y divide-[color:var(--divider)]">
                    {members.map((m) => (
                      <li
                        key={m.slug}
                        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
                      >
                        <span className="text-[16px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                          <Link
                            href={`/team/${m.slug}`}
                            className="text-[#1a3a6b] underline underline-offset-[3px]"
                          >
                            {m.name}
                          </Link>
                          , {m.title}
                        </span>
                        <span className="text-[14px] text-[color:var(--text-secondary)]">
                          {m.office} &middot;{" "}
                          <a
                            href={`tel:${m.phone.replace(/[^0-9+]/g, "")}`}
                            className="hover:text-[#1a3a6b]"
                          >
                            {m.phone}
                          </a>{" "}
                          &middot;{" "}
                          <a
                            href={`mailto:${m.email}`}
                            className="hover:text-[#1a3a6b]"
                          >
                            {m.email}
                          </a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="rounded-[18px] bg-[#f5f5f7] p-6 lg:sticky lg:top-24 lg:self-start">
                <h2 className={sectionHeading}>Reach the team</h2>
                <div className="mt-4 space-y-3 text-[15px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  <p>{HQ_ADDRESS_LINE}</p>
                  <p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="hover:text-[#1a3a6b]"
                    >
                      {EMAIL}
                    </a>
                  </p>
                  <p>
                    <a
                      href={LINKEDIN}
                      rel="noopener noreferrer"
                      className="hover:text-[#1a3a6b]"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
                <div className="mt-6">
                  <Pill variant="primary" href="/contact" className="w-full">
                    Talk to the team
                  </Pill>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
