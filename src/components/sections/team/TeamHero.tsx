import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Team page header. Editorial pattern from New Waterloo: tracked-uppercase
 * section label with a horizontal rule extending right to the edge of the
 * container. Just introduces the team. No "pick the broker" framing, no
 * marketing-speak, no segment claims.
 *
 * The visible label is the page's single H1. It used to be backed by a
 * visually-hidden, keyword-rich H1; that was hidden text, so it is gone and
 * the visible label now carries the brand string itself.
 */
export function TeamHero() {
  return (
    <section className="bg-white pt-20 lg:pt-24 pb-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="flex items-center gap-6">
            <h1 className="text-[13px] font-medium uppercase tracking-[0.32em] text-[#1d1d1f]">
              Matthews Hotel Markets Team
            </h1>
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
