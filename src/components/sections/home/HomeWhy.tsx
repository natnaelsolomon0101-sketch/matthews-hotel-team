import * as React from "react";
import Link from "next/link";
import { TrendingUp, Users, Network, Award } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { PARENT } from "@/lib/entity";
// One source of truth for every firm-level figure, each with an asOf date and
// a source. Do not re-type a number here. See src/lib/track-record.ts.
import { PLATFORM, PLATFORM_ATTRIBUTION } from "@/lib/track-record";
import { markets } from "@/lib/data/markets";

type Benefit = {
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    "aria-hidden"?: boolean;
  }>;
  titleLead: string;
  titleFollow: string;
  body: string;
};

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    titleLead: "Market intelligence.",
    titleFollow: "Sharp.",
    body: `The Matthews Hotel Index tracks cap rates, ADR and RevPAR across ${markets.length} metros, republished every quarter. Sellers price with confidence. Buyers underwrite with conviction.`,
  },
  {
    icon: Users,
    titleLead: "Investor reach.",
    titleFollow: "Deep.",
    // "Over one million direct relationships" was removed on 2026-09-17: no
    // source exists for it anywhere in the repo or on matthews.com. See
    // src/lib/track-record.ts.
    body: "Family offices, REITs, private equity, and institutional capital. We build the buyer list per asset rather than blasting one database.",
  },
  {
    icon: Network,
    titleLead: "National platform.",
    titleFollow: "Local listening.",
    body: `${PLATFORM.offices.value} ${PARENT} offices coast to coast. Off-market deals surface first when every sub-market has someone on the ground.`,
  },
  {
    icon: Award,
    titleLead: `${PLATFORM.volume.value} closed.`,
    titleFollow: "Across every class.",
    body: `${PARENT} has executed across every CRE asset class. Hospitality clients tap a platform proven at every scale.`,
  },
];

export function HomeWhy() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Why Matthews</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            size="section"
            lead="Information, not just listings."
            follow="A platform built for hospitality."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.titleLead} delay={i * 0.05}>
                <article className="rounded-[22px] bg-[#f5f5f7] p-8 h-full">
                  <Icon
                    className="mb-5 h-10 w-10 text-[#1a3a6b]"
                    strokeWidth={1.75}
                    aria-hidden={true}
                  />
                  <h3 className="text-[28px] font-semibold tracking-[0.007em] leading-[1.15]">
                    <span className="text-[#1d1d1f]">{benefit.titleLead}</span>{" "}
                    <span className="text-[#86868b]">{benefit.titleFollow}</span>
                  </h3>
                  <p className="mt-3 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#424245]">
                    {benefit.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/*
          Every firm-level figure above is the PARENT firm's own published
          number, and the page says so with a date. Before 2026-09-17 this
          block carried $88.37B with no attribution while llms.txt carried
          $84.3B; one sourced number in one place is the fix.
        */}
        <p className="mt-8 text-[12px] leading-[1.5] text-[color:var(--text-tertiary)]">
          Firm-wide figures are {PARENT} totals across every asset class, not
          hospitality totals.{" "}
          <a
            href={PLATFORM.volume.sourceUrl}
            rel="noopener noreferrer"
            className="underline underline-offset-[3px] hover:text-[color:var(--text-secondary)]"
          >
            Source: {PLATFORM_ATTRIBUTION}
          </a>{" "}
          Our own hospitality transactions are published at{" "}
          <Link
            href="/closed"
            className="underline underline-offset-[3px] hover:text-[color:var(--text-secondary)]"
          >
            /closed
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export default HomeWhy;
