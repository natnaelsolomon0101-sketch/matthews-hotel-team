import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamBrowser from "@/components/sections/team/TeamBrowser";
import JsonLd from "@/components/seo/JsonLd";
import { team } from "@/lib/data/team";
import {
  BOILERPLATE,
  SITE_URL,
  bioMembers,
  breadcrumb,
  litePersonNode,
  liteMembers,
  webPage,
} from "@/lib/entity";

export const metadata: Metadata = {
  title: "Hotel Brokers & Capital Markets Team",
  description:
    "Meet the Matthews Hotel Markets team. Hotel brokers and capital markets advisors specializing in select-service, full-service, resort, and boutique investment sales nationwide.",
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    title: "Hotel Brokers & Capital Markets Team | Matthews Hotel Markets",
    description:
      "Hotel brokers and capital markets advisors. Select-service, full-service, resort, and boutique investment sales nationwide.",
    url: `${SITE_URL}/team`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Brokers & Capital Markets Team",
    description:
      "Hotel brokers and capital markets advisors at Matthews Hotel Markets.",
  },
};

export default function TeamPage() {
  const url = `${SITE_URL}/team`;
  const published = bioMembers();

  // The roster ItemList mirrors what this page renders: all 22 people, in
  // source order. The three with detail pages point at their own Person node
  // and their own URL; the 19 bench members point at the minimal Person node
  // emitted below, because they have no page to link to.
  const graph = [
    webPage({
      url,
      name: "Hotel Brokers and Capital Markets Team",
      description: BOILERPLATE,
      mainEntity: `${url}#roster`,
    }),
    {
      "@type": "ItemList",
      "@id": `${url}#roster`,
      numberOfItems: team.length,
      itemListElement: team.map((m, i) =>
        m.hasBio !== false
          ? {
              "@type": "ListItem",
              position: i + 1,
              name: m.name,
              url: `${SITE_URL}/team/${m.slug}`,
              item: { "@id": `${SITE_URL}/team/${m.slug}#person` },
            }
          : {
              "@type": "ListItem",
              position: i + 1,
              name: m.name,
              item: { "@id": `${url}#${m.slug}` },
            },
      ),
    },
    ...liteMembers().map(litePersonNode),
    breadcrumb([{ name: "Team", path: "/team" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />
        <TeamHero />

        {/*
          The boilerplate, visible. Same sentences as /about, the footer,
          Organization.description, and llms.txt. Source: src/lib/entity.ts.
        */}
        <section className="bg-white pt-4 pb-10">
          <div className="mx-auto max-w-[1024px] px-6">
            <p className="max-w-[62ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              {BOILERPLATE}
            </p>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.5] text-[color:var(--text-secondary)]">
              {team.length} people cover hospitality across the Matthews
              platform. {published.length} of them publish a full profile here:
              Luke Thompson and Nate Solomon in Austin, Miles Cortez III in
              Denver. The rest are listed below with their office, email, and
              direct line.{" "}
              <Link
                href="/about"
                className="text-[#1a3a6b] underline underline-offset-[3px]"
              >
                More about the team
              </Link>
              .
            </p>
          </div>
        </section>

        <TeamBrowser />
      </main>
      <SiteFooter />
    </>
  );
}
