import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BOILERPLATE_SHORT,
  HQ_ADDRESS_LINE,
  LINKEDIN,
  PARENT,
  PARENT_URL,
} from "@/lib/entity";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

/**
 * FOOTER, rebuilt 2026-09-17.
 *
 * Agent 5 verified by grep across src/ that `/glossary`, `/services/*`,
 * `/research` and `/offices/*` had NO inbound internal link from anywhere
 * outside their own route folder: four live hubs, including the Matthews Hotel
 * Index, reachable only from sitemap.xml. The footer is the cheapest place to
 * fix that, because it renders on every page. Rules R2, R3 and R4 in
 * geo/05-architecture.md §6.1.
 *
 * Two other things changed here:
 *  - "Press" pointed at /insights and no /press route existed. /press is now
 *    a real route (src/app/press/page.tsx) and the link points at it.
 *  - The old "Listings" column was four anchor links into /listings#region.
 *    It is replaced by the Answers and Services columns, which is what
 *    actually removes the orphans.
 */
const COLUMNS: FooterColumn[] = [
  {
    heading: "Answers",
    links: [
      { href: "/hotel-financing", label: "Hotel Financing" },
      { href: "/sell-a-hotel", label: "Sell a Hotel" },
      { href: "/hotel-valuation", label: "Hotel Valuation" },
      { href: "/buy-a-hotel", label: "Buy a Hotel" },
      { href: "/hotel-franchise-costs", label: "Hotel Franchise Costs" },
      { href: "/hotel-industry", label: "Hotel Industry Basics" },
      { href: "/glossary", label: "Glossary" },
      { href: "/tools", label: "Calculators" },
    ],
  },
  {
    heading: "Data & Research",
    links: [
      { href: "/rates", label: "Rate Sheet" },
      { href: "/rates/methodology", label: "Rate Sheet Methodology" },
      { href: "/data/hotel-financing-statistics", label: "Hotel Financing Statistics" },
      { href: "/data/sba-hotel-lending", label: "SBA Loans to Hotels" },
      { href: "/research/mhi", label: "Matthews Hotel Index" },
      { href: "/research", label: "All Research" },
    ],
  },
  {
    heading: "Brokerage",
    links: [
      { href: "/listings", label: "Active Listings" },
      { href: "/hotels-for-sale", label: "Hotels for Sale by Brand" },
      { href: "/markets", label: "Markets" },
      { href: "/closed", label: "Closed Deals" },
      { href: "/process", label: "Transaction Process" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services", label: "All Services" },
      { href: "/services/investment-sales", label: "Investment Sales" },
      { href: "/services/capital-markets", label: "Capital Markets" },
      { href: "/services/acquisition-advisory", label: "Acquisition Advisory" },
      { href: "/offices/austin", label: "Austin Office" },
      { href: "/offices/denver", label: "Denver" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/team", label: "Team" },
      { href: "/insights", label: "Insights" },
      { href: "/press", label: "Press" },
      { href: "/developers", label: "For Developers and AI Agents" },
      { href: "/contact", label: "Contact" },
      { href: PARENT_URL, label: "Matthews.com", external: true },
      { href: LINKEDIN, label: "LinkedIn", external: true },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("bg-[color:var(--surface-elevated)]")}>
      <div className="mx-auto max-w-[1024px] px-6 py-12 md:py-16">
        {/* Top: wordmark + tagline */}
        <div className="flex flex-col gap-2">
          <span className="text-[17px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
            Matthews
          </span>
          <p className="text-[14px] text-[color:var(--text-secondary)]">
            National hospitality investment sales.
          </p>
        </div>

        <div className="mt-8 hairline" />

        {/* Columns */}
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-[color:var(--text-primary)] mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-1 md:space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.label}-${link.href}`}>
                    {link.external ? (
                      <a
                        href={link.href}
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center text-[14px] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:underline underline-offset-[3px] transition-colors duration-200 md:min-h-0 md:text-[13px]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-flex min-h-[44px] items-center text-[14px] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:underline underline-offset-[3px] transition-colors duration-200 md:min-h-0 md:text-[13px]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 hairline" />

        {/* Footprint, tracked uppercase city line, hospitality-brokerage
            convention (cf. Hunter Hotel Advisors). Anchors the brand to its
            real geography while signaling national reach. */}
        <p className="mt-6 text-[11px] uppercase tracking-[0.22em] font-medium text-[color:var(--text-secondary)]">
          Austin
          <span aria-hidden="true" className="mx-2 text-[color:var(--text-tertiary)]">
            ·
          </span>
          Denver
          <span aria-hidden="true" className="mx-2 text-[color:var(--text-tertiary)]">
            ·
          </span>
          National investor reach
        </p>

        {/*
          Boilerplate. Same sentence as Organization.description, /about,
          /team, and llms.txt. Source of truth: src/lib/entity.ts. Reword it
          there, never here.
        */}
        <p className="mt-6 max-w-[70ch] text-[12px] leading-[1.5] text-[color:var(--text-secondary)]">
          {BOILERPLATE_SHORT}
        </p>

        {/* Legal */}
        <div className="mt-4 space-y-1.5">
          <p className="text-[11px] tracking-[-0.005em] text-[color:var(--text-tertiary)]">
            {PARENT}, {HQ_ADDRESS_LINE}.
          </p>
          <p className="text-[11px] tracking-[-0.005em] text-[color:var(--text-tertiary)]">
            Copyright &copy; {year} {PARENT}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
