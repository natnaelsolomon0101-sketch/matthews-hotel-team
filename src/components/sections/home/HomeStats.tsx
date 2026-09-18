import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
// Computed from src/lib/data/closed.ts, which is what /closed renders. These
// were typed strings until 2026-09-17 ("$890M+", "8,600+", "30", "12"), which
// is how they came to sit under a bare "As of Q4 2021" line that read as stale
// in September 2026. See src/lib/track-record.ts.
import { HOSPITALITY, HOSPITALITY_BASIS } from "@/lib/track-record";

const supportingStats: { value: string; label: string }[] = [
  { value: `${HOSPITALITY.rooms.toLocaleString("en-US")}`, label: "Rooms" },
  { value: `${HOSPITALITY.cities}`, label: "Cities" },
  { value: `${HOSPITALITY.states}`, label: "States" },
];

export function HomeStats() {
  return (
    <section className="bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-[1024px] px-6">
        {/* One reveal wraps the entire block, Apple product-page restraint */}
        <Reveal>
          <div>
            <Eyebrow>
              Matthews Hospitality · {HOSPITALITY.firstYear}&ndash;
              {HOSPITALITY.lastYear}
            </Eyebrow>

            <TwoToneHeadline
              size="section"
              lead={`${HOSPITALITY.volume} closed in hospitality.`}
              follow="Texas, the Sun Belt, and beyond."
            />

            <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[color:var(--divider)] pt-12 sm:grid-cols-3 sm:gap-8">
              {supportingStats.map((stat) => (
                <div key={stat.label}>
                  <Counter
                    value={stat.value}
                    className="block text-[#1d1d1f] font-semibold tabular-nums text-[clamp(32px,4vw,56px)] leading-none tracking-[-0.03em]"
                  />
                  <p className="mt-3 text-[13px] tracking-[-0.014em] text-[#86868b]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Was "As of Q4 2021", which read as a stale page rather than a
                dated dataset. It is the basis of the figures, so say that. */}
            <p className="mt-16 text-[12px] leading-[1.5] text-[color:var(--text-tertiary)]">
              {HOSPITALITY_BASIS}{" "}
              <Link
                href="/closed"
                className="underline underline-offset-[3px] hover:text-[color:var(--text-secondary)]"
              >
                See every deal
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HomeStats;
