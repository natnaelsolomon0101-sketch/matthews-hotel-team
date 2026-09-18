"use client";

import * as React from "react";
import Image from "next/image";

/**
 * The home hero photograph: the page's LCP element.
 *
 * - `priority` makes Next emit <link rel="preload" as="image" imagesrcset>
 *   with fetchpriority=high, so the browser finds it from the HTML head
 *   instead of after layout. `sizes="100vw"` is correct: the photo is
 *   full-bleed at every width. next.config.ts serves AVIF, then WebP.
 * - quality 75 (was 88). The photo sits under a 55 to 78 percent black wash
 *   on mobile and a 10 to 85 percent wash on desktop, where the difference is
 *   not visible (before/after screenshots in geo/14-seo-tech/), and the AVIF
 *   is about 40 percent smaller: 35 KB to 21 KB at the 750w mobile candidate,
 *   277 KB to 170 KB at 1920w.
 * - The slow parallax zoom (scale 1.00 to 1.05 while the hero scrolls out,
 *   the same mapping framer-motion's useScroll/useTransform produced) is a
 *   passive scroll listener writing one transform inside requestAnimationFrame.
 *   It replaces the framer-motion dependency on the home page and never
 *   touches the image before the first scroll, so it cannot delay LCP.
 */
export function HeroPhoto() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = section.offsetHeight || 1;
      const progress = Math.min(1, Math.max(0, window.scrollY / h));
      el.style.transform = `scale(${1 + progress * 0.05})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{ transformOrigin: "center", willChange: "transform" }}
    >
      <Image
        src="/images/hero-landscape.jpg"
        alt=""
        fill
        quality={75}
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export default HeroPhoto;
