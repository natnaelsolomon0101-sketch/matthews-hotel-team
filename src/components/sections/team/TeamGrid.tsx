import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "./TeamCard";
import type { TeamMember } from "@/lib/data/team";

export interface TeamGridProps {
  filtered: TeamMember[];
}

/**
 * Team grid. Editorial spread, not Apple-card grid. Cards live directly on
 * the white surface (no elevated card wrapper) and breathe with generous
 * gutters. 3-up at desktop matches the 3-broker roster.
 */
export function TeamGrid({ filtered }: TeamGridProps) {
  return (
    <section className="bg-white pb-24 lg:pb-32 pt-2">
      <div className="mx-auto max-w-[1280px] px-6">
        {filtered.length === 0 ? (
          <div className="rounded-[18px] bg-[#f5f5f7] p-10 text-center">
            <p className="text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
              No team members match those filters.
            </p>
            <p className="mt-2 text-[15px] tracking-[-0.014em] text-[#86868b]">
              Try clearing a filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {filtered.map((member, i) => (
              <Reveal key={member.slug} delay={i * 0.05}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamGrid;
