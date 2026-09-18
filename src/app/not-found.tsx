import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Served with a real HTTP 404 for every unknown path and every notFound()
// call (Next adds <meta name="robots" content="noindex"> itself). Before this
// file existed the site fell back to Next's bare "404: This page could not be
// found." with no navigation. scripts/metadata-audit.mjs checks the status,
// the noindex, the single H1 and the hub links below.
export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Matthews Hotel Markets" },
  description:
    "That page does not exist on matthewshotelmarkets.com. Start from hotel financing, selling a hotel, hotel valuation, the rate sheet or current listings.",
};

const HUBS: { href: string; label: string; blurb: string }[] = [
  { href: "/hotel-financing", label: "Hotel financing", blurb: "Loan types, refinancing, SBA, CMBS and bridge debt." },
  { href: "/sell-a-hotel", label: "Sell a hotel", blurb: "Process, timeline, broker fees, documents and taxes." },
  { href: "/hotel-valuation", label: "Hotel valuation", blurb: "How hotels are valued, step by step." },
  { href: "/buy-a-hotel", label: "Buy a hotel", blurb: "Due diligence, how much money you need, branded or independent." },
  { href: "/hotel-franchise-costs", label: "Hotel franchise costs", blurb: "Fees by brand, read from the franchise disclosure documents." },
  { href: "/hotel-industry", label: "Hotel industry", blurb: "Size, outlook, who owns hotels and how they make money." },
  { href: "/rates", label: "Rate sheet", blurb: "Benchmark rates behind hotel loan pricing." },
  { href: "/tools", label: "Calculators", blurb: "Loan sizing, DSCR, debt yield, cap rate and value." },
  { href: "/glossary", label: "Glossary", blurb: "Hotel investment terms, each with a worked example." },
  { href: "/listings", label: "Hotels for sale", blurb: "Current listings." },
  { href: "/closed", label: "Closed transactions", blurb: "Hotels the team has sold or financed." },
  { href: "/contact", label: "Contact", blurb: "Reach the team directly." },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-[1024px] px-6">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="mt-4 font-semibold text-[clamp(32px,3vw,48px)] leading-[1.08] tracking-[-0.003em] text-[color:var(--text-primary)]">
            This page does not exist.
          </h1>
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.45] tracking-[0.012em] text-[color:var(--text-secondary)]">
            The address may be mistyped, or the page may have moved. Everything
            on the site is reachable from one of these sections, or from the{" "}
            <Link href="/" className="text-[#1a3a6b] underline underline-offset-[3px]">
              home page
            </Link>
            .
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-x-10 border-t border-[color:var(--divider)] sm:grid-cols-2 lg:grid-cols-3">
            {HUBS.map((hub) => (
              <li key={hub.href} className="border-b border-[color:var(--divider)] py-5">
                <Link
                  href={hub.href}
                  className="text-[17px] font-semibold tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
                >
                  {hub.label}
                </Link>
                <p className="mt-1 text-[14px] leading-[1.45] text-[color:var(--text-secondary)]">
                  {hub.blurb}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
