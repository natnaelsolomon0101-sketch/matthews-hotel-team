import * as React from "react";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { GhostLink } from "@/components/ui/GhostLink";
import { HeroPhoto } from "./HeroPhoto";

/**
 * Server component since 2026-09-18 (geo/14-seo-tech.md). It used to be a
 * client component animated by framer-motion, which meant (a) the H1 and the
 * rest of the hero copy were server-rendered at opacity 0 and stayed
 * invisible until the JS bundle downloaded and hydrated, and (b) about 40 KB
 * of animation library sat on the home page's critical path. The entrance
 * animation is now the CSS `hero-rise` keyframes in globals.css (same
 * offsets, durations, delays and easing as the heroH1 / heroBody / heroCta
 * presets in src/lib/motion.ts), so it starts at first paint. The only
 * client code left is the 1.00 to 1.05 parallax in HeroPhoto.
 */
export function HomeHero() {
  return (
    <section className="dark-section relative overflow-hidden bg-[color:var(--surface-inverse)] text-[color:var(--text-on-dark)]">
      <HeroPhoto />

      {/* Layered washes for headline legibility.
          - Desktop: heavy on the left, the photo breathes on the right.
          - Mobile: a much heavier left-to-right wash so the body paragraph
            and the dl pair sit on a near-solid dark surface, not on the
            water reflection where they were near-illegible. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(95deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 30%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.20) 90%, rgba(0,0,0,0.10) 100%), linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      <div
        className="relative mx-auto flex min-h-[640px] max-w-[1024px] flex-col items-stretch justify-center px-6 py-20 md:min-h-screen md:py-32 lg:py-40"
        style={{ paddingBottom: "max(5rem, env(safe-area-inset-bottom) + 4rem)" }}
      >
        <div className="flex w-full flex-col">
          <p className="hero-rise hero-rise-body text-[12px] font-medium uppercase tracking-[0.22em] text-white/70">
            Matthews Hotel Markets
          </p>

          <div className="hero-rise hero-rise-h1 mt-6">
            <TwoToneHeadline
              as="h1"
              size="hero"
              tone="dark"
              lead="Hospitality finance and sales."
              follow="Nationwide."
            />
          </div>

          <p className="hero-rise hero-rise-body mt-6 max-w-[640px] text-[17px] leading-[1.45] tracking-[0.012em] text-white/85 md:text-[19px] md:leading-[1.42] md:text-[color:var(--text-on-dark-secondary)]">
            Whether you want to finance a hotel purchase, refinance a property
            you own, or sell a hotel, we are here to help.
          </p>

          <dl className="hero-rise hero-rise-body mt-10 grid max-w-[640px] grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Capital Markets
              </dt>
              <dd className="mt-2 text-[15px] leading-[1.45] tracking-[-0.014em] text-white/85 md:text-[color:var(--text-on-dark-secondary)]">
                Loans from $5M, experience up to $200M, every chain scale.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Sales
              </dt>
              <dd className="mt-2 text-[15px] leading-[1.45] tracking-[-0.014em] text-white/85 md:text-[color:var(--text-on-dark-secondary)]">
                Dispositions from $2M, nationwide.
              </dd>
            </div>
          </dl>

          <div className="hero-rise hero-rise-cta mt-10 flex flex-wrap items-center gap-5">
            <Pill variant="primary" href="/listings">
              View listings
            </Pill>
            <GhostLink href="/contact">Talk to us</GhostLink>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
              Response 24h
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue, thin vertical line, desktop only: too tight on mobile. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="hero-scroll-cue block h-6 w-px bg-white/30" />
      </div>
    </section>
  );
}

export default HomeHero;
