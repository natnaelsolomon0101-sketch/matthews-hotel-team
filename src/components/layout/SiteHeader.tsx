"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  /** External nav target (opens new tab). Detected from absolute URL. */
  external?: boolean;
}

/**
 * PRIMARY NAV, rebuilt 2026-09-17. Four requests landed on this file in one
 * sprint and nobody owned it; they are all resolved here, in one pass:
 *
 *  1. Agent 1 / Agent 8: "Rate Sheet" pointed OFF-DOMAIN to
 *     matthewsratesheet.info from every page. The site's flagship first-party
 *     asset now lives on-domain at /rates, so the link points there. (The 301
 *     of the .info domain itself is a Vercel Domains action on a separate
 *     project and is Nate's call: geo/08-data.md, Decision 1.)
 *  2. Agent 3: /about was in the footer only. It is now in the header.
 *  3. Agent 5 (R1): the three answer-cluster hubs were unreachable from the
 *     header. Added. Closed and Insights move to the footer, which keeps this
 *     list at eight items.
 *  4. Agent 5 (R2/R4): /glossary, /services/*, /research and /offices/* had
 *     ZERO inbound internal links anywhere on the site. They are all in the
 *     footer now; see SiteFooter.tsx.
 *
 * Adding a ninth item means dropping one. Do not let this list grow.
 */
const NAV_ITEMS: NavItem[] = [
  { href: "/listings", label: "Listings" },
  { href: "/hotel-financing", label: "Financing" },
  { href: "/sell-a-hotel", label: "Sell a Hotel" },
  { href: "/hotel-valuation", label: "Valuation" },
  { href: "/rates", label: "Rate Sheet" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  // Only the home route opens with a dark hero behind a transparent chrome.
  // Every other page lands on a light surface, so the chrome must default
  // to frosted or the white nav links sit invisibly on white.
  const transparentRoute = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  // The drawer stays mounted for its 300ms exit animation after `open` goes
  // false. This flag plus the drawer-in / drawer-out keyframes in globals.css
  // replaces framer-motion's AnimatePresence, which put about 40 KB of
  // animation library into the JS of every page on the site for one fade
  // (geo/14-seo-tech.md). Same offsets, durations and easing.
  const [drawerMounted, setDrawerMounted] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setDrawerMounted(true);
      return;
    }
    // Fallback in case animationend never fires (display:none at >= md).
    const t = window.setTimeout(() => setDrawerMounted(false), 350);
    return () => window.clearTimeout(t);
  }, [open]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on viewport resize to desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while the mobile drawer is open. Without this the page
  // beneath the drawer keeps responding to touch and the user can scroll the
  // hidden content underneath.
  React.useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const frosted = scrolled || open || !transparentRoute;
  const textColor = frosted ? "text-[color:var(--text-primary)]" : "text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        frosted
          ? "bg-white/72 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.08]"
          : "bg-transparent border-b border-transparent",
      )}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
      }}
    >
      <div className="mx-auto max-w-[1024px] px-6">
        <div
          className={cn(
            "flex items-center justify-between h-16 md:h-16",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Matthews, home"
            className="flex items-center gap-2.5"
          >
            <Image
              src="/images/matthews-logo.jpg"
              alt="Matthews"
              width={48}
              height={48}
              priority
              className="h-10 w-10 rounded-[8px]"
            />
            <span
              className={cn(
                "text-[17px] font-semibold tracking-[-0.014em] transition-colors duration-300",
                textColor,
              )}
            >
              Matthews
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6">
            {NAV_ITEMS.map((item) => {
              const linkClass = cn(
                "text-[12px] tracking-[-0.01em] transition-colors duration-300 hover:opacity-80",
                textColor,
              );
              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: mobile menu only — Contact lives in the nav */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className={cn(
                "md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full transition-colors duration-300",
                textColor,
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer + click-outside scrim. Scrim is rendered before the
          drawer so the drawer's static positioning naturally stacks above. */}
      {drawerMounted && (
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={cn(
            "md:hidden fixed left-0 right-0 bottom-0 top-16 cursor-default bg-black/30",
            open ? "scrim-in" : "scrim-out",
          )}
        />
      )}
      {drawerMounted && (
        <div
          onAnimationEnd={(e) => {
            if (!open && e.target === e.currentTarget) setDrawerMounted(false);
          }}
          className={cn(
            "relative md:hidden bg-white/95 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.08]",
            open ? "drawer-in" : "drawer-out",
          )}
        >
          <div className="mx-auto max-w-[1024px] px-6 py-4">
            <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const drawerLinkClass =
                    "py-3 text-[17px] text-[color:var(--text-primary)] border-b border-[color:var(--divider)] last:border-b-0";
                  return item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className={drawerLinkClass}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={drawerLinkClass}
                    >
                      {item.label}
                    </Link>
                  );
                })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
