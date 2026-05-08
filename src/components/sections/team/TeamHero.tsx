import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Team page header. Editorial pattern from New Waterloo: tracked-uppercase
 * section label with a horizontal rule extending right to the edge of the
 * container. Just introduces the team. No "pick the broker" framing, no
 * marketing-speak, no segment claims.
 */
export function TeamHero() {
  return (
    <section className="bg-white pt-20 lg:pt-24 pb-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="flex items-center gap-6">
            <p className="text-[13px] font-medium uppercase tracking-[0.32em] text-[#1d1d1f] whitespace-nowrap">
              Matthews Hotel Team
            </p>
            <div
              aria-hidden="true"
              className="h-px flex-1 bg-[#1d1d1f]/15"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default TeamHero;
