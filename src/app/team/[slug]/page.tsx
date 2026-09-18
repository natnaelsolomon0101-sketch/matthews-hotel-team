import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Mail, ExternalLink } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Pill } from "@/components/ui/Pill";
import TeamDetailHero from "@/components/sections/team-detail/TeamDetailHero";
import TeamStats from "@/components/sections/team-detail/TeamStats";
import TeamTopDeals from "@/components/sections/team-detail/TeamTopDeals";
import TeamCredentials from "@/components/sections/team-detail/TeamCredentials";
import { team, type TeamMember } from "@/lib/data/team";
import { closed } from "@/lib/data/closed";
import JsonLd from "@/components/seo/JsonLd";
import {
  BOILERPLATE,
  ID,
  SITE_URL,
  breadcrumb,
  itemList,
  personNode,
  webPage,
} from "@/lib/entity";

import { seoTitle } from "@/lib/seo-meta";
/**
 * Date the three broker profiles were last reviewed against team.ts and
 * closed.ts. Bump it when a bio, title, phone, email, or attribution changes,
 * not on every deploy.
 */
const LAST_REVIEWED = "2026-09-17";
const LAST_REVIEWED_LABEL = "September 17, 2026";

export const dynamicParams = false;

export function generateStaticParams() {
  return team.filter((m) => m.hasBio !== false).map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return { title: "Team Member Not Found" };

  const url = `${SITE_URL}/team/${member.slug}`;
  const description = `${member.title}, ${member.office}. Hotel investment sales and ${member.specialties.join(
    ", ",
  )} at Matthews Hotel Markets.`;

  return {
    title: seoTitle(`${member.name}, ${member.title}`),
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      title: `${member.name}, ${member.title}`,
      description,
      url,
    },
    twitter: {
      card: "summary",
      title: `${member.name}, ${member.title}`,
      description,
    },
  };
}

interface BrokerRailProps {
  broker: TeamMember;
}

const TONE_AVATAR: Record<
  TeamMember["cover"]["tone"],
  { bg: string; fg: string }
> = {
  ink: { bg: "#0a0a0a", fg: "#ffffff" },
  navy: { bg: "#0e1a34", fg: "#fafafa" },
  graphite: { bg: "#1d1d1f", fg: "#f5f5f7" },
  paper: { bg: "#fafafa", fg: "#0a0a0a" },
};

function BrokerContactRail({ broker }: BrokerRailProps) {
  const subject = encodeURIComponent(`Inquiry, ${broker.name}`);
  const mailtoHref = `mailto:${broker.email}?subject=${subject}`;
  const telHref = `tel:${broker.phone.replace(/[^0-9+]/g, "")}`;
  const avatar = TONE_AVATAR[broker.cover.tone];
  const brokerInitials = broker.name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <aside className="lg:sticky lg:top-24 rounded-[18px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)] p-6">
      <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
        Get in touch
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div
          className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full flex items-center justify-center"
          style={{ backgroundColor: avatar.bg }}
          aria-hidden="true"
        >
          <span
            className="font-[family-name:var(--font-fraunces)] text-[18px] leading-none"
            style={{
              color: avatar.fg,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            {brokerInitials}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold tracking-[-0.014em] text-[#1d1d1f] truncate">
            {broker.name}
          </p>
          <p className="text-[13px] tracking-[-0.014em] text-[#86868b] truncate">
            {broker.title}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        <a
          href={telHref}
          className="flex items-center gap-2 text-[15px] tracking-[-0.014em] text-[#1d1d1f] hover:text-[#1a3a6b] transition-colors duration-200"
        >
          <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span>{broker.phone}</span>
        </a>
        <a
          href={mailtoHref}
          className="flex items-center gap-2 text-[15px] tracking-[-0.014em] text-[#1d1d1f] hover:text-[#1a3a6b] transition-colors duration-200"
        >
          <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="truncate">{broker.email}</span>
        </a>
        {broker.linkedin && (
          <a
            href={broker.linkedin}
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[15px] tracking-[-0.014em] text-[#1d1d1f] hover:text-[#1a3a6b] transition-colors duration-200"
          >
            <ExternalLink
              className="h-4 w-4 shrink-0"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>LinkedIn</span>
          </a>
        )}
      </div>

      <div className="mt-6">
        <Pill variant="primary" size="default" href={mailtoHref} className="w-full">
          Send a message
        </Pill>
      </div>
    </aside>
  );
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const url = `${SITE_URL}/team/${member.slug}`;

  // Closed transactions on this site that name this broker. Real attribution
  // from src/lib/data/closed.ts, rendered visibly below and mirrored in the
  // graph. Brokers with no named closes get no section and no ItemList.
  const namedCloses = closed.filter((d) => d.brokerSlugs.includes(member.slug));

  // Person is built ONCE, in src/lib/entity.ts, so the node here is identical
  // to the one every other page emits for this broker. Author authority for
  // /insights/* citations depends on that consistency.
  const person = personNode(member);

  const graph = [
    {
      ...webPage({
        url,
        name: `${member.name}, ${member.title}`,
        description: member.bio || BOILERPLATE,
        mainEntity: ID.person(member.slug),
      }),
      "@type": "ProfilePage",
      dateModified: LAST_REVIEWED,
    },
    {
      ...person,
      ...(namedCloses.length > 0
        ? { subjectOf: { "@id": `${url}#transactions` } }
        : {}),
    },
    ...(namedCloses.length > 0
      ? [
          itemList(
            namedCloses.map((d) => ({
              name: `${d.name}, ${d.city}, ${d.state}`,
              path: `/closed/${d.slug}`,
            })),
            `${url}#transactions`,
          ),
        ]
      : []),
    breadcrumb([
      { name: "Team", path: "/team" },
      { name: member.name, path: `/team/${member.slug}` },
    ]),
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <JsonLd graph={graph} />
        <TeamDetailHero member={member} />
        <TeamStats member={member} />
        <div className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div>
              <TeamTopDeals member={member} />

              {namedCloses.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                    Transactions on this site
                  </h2>
                  <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.5] text-[color:var(--text-secondary)]">
                    {namedCloses.length} closed transactions published on this
                    site name {member.name}. Each links to its own page with
                    keys, market, deal size, and transaction type.
                  </p>
                  <ul className="mt-6 divide-y divide-[color:var(--divider)]">
                    {namedCloses.map((d) => (
                      <li key={d.slug}>
                        <Link
                          href={`/closed/${d.slug}`}
                          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 text-[15px] tracking-[-0.014em] text-[color:var(--text-primary)] hover:text-[#1a3a6b] transition-colors"
                        >
                          <span>{d.name}</span>
                          <span className="text-[13px] text-[color:var(--text-secondary)]">
                            {d.city}, {d.state} &middot; {d.year} &middot;{" "}
                            {d.transactionTypeLabel ?? d.transactionType}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <TeamCredentials member={member} />

              <p className="mt-12 text-[13px] text-[color:var(--text-secondary)]">
                Profile last reviewed {LAST_REVIEWED_LABEL}.
              </p>
            </div>
            <BrokerContactRail broker={member} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
