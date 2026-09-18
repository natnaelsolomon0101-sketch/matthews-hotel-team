"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Home-page stand-in for src/components/ui/Counter.tsx, without
 * framer-motion, so the home page no longer downloads that library at all
 * (geo/14-seo-tech.md). Same effect: the figure fades up 8px over 600ms the
 * first time it scrolls into view.
 *
 * Unlike Counter, the figure is server-rendered VISIBLE. It is only hidden,
 * after hydration, when it is still below the viewport, so a crawler, a
 * screenshot tool, a no-JS reader or a failed IntersectionObserver always
 * sees the number. The string is rendered exactly as passed in.
 */
export function HomeStatValue({ value, className }: { value: string; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.style.transition = "opacity 600ms cubic-bezier(0.32,0.72,0,1), transform 600ms cubic-bezier(0.32,0.72,0,1)";
        el.style.opacity = "1";
        el.style.transform = "none";
        io.disconnect();
      },
      { rootMargin: "-30px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {value}
    </span>
  );
}

export default HomeStatValue;
