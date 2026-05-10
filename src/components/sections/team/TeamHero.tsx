import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Team page header. Editorial pattern from New Waterloo: tracked-uppercase
 * section label with a horizontal rule extending right to the edge of the
 * container. Just introduces the team. No "pick the broker" framing, no
 * marketing-speak, no segment claims.
 *
 * The visible label doubles as the page H1 for SEO (Google needs a single
 * h1 per route). A visually-hidden secondary heading carries the
 * keyword-rich phrase the visible wordmark omits.
 */
export function TeamHero() {
  return (
    <section className="bg-white pt-20 lg:pt-24 pb-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <h1 className="sr-only">
          Matthews Hotel Markets — Hotel Brokers & Capital Markets Team
        </h1>
        <Reveal>
          <div className="flex items-center gap-6">
            <p
              aria-hidden="true"
              className="text-[13px] font-medium uppercase tracking-[0.32em] text-[#1d1d1f] whitespace-nowrap"
            >
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
