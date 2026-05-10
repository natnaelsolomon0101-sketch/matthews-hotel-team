import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";

const SITE_URL = "https://matthewshotelmarkets.com";

export const metadata: Metadata = {
  title: "Contact a Hotel Broker | Talk to Matthews Hotel Markets",
  description:
    "Talk to a hotel broker at Matthews Hotel Markets. Investment sales, capital markets, acquisitions, and market intelligence. Austin HQ + Denver. We respond within one business day.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    type: "website",
    title: "Contact a Hotel Broker | Matthews Hotel Markets",
    description:
      "Investment sales, capital markets, acquisitions, market intelligence. Austin HQ + Denver.",
    url: `${SITE_URL}/contact`,
  },
  twitter: {
    card: "summary",
    title: "Contact a Hotel Broker | Matthews Hotel Markets",
    description:
      "Investment sales, capital markets, acquisitions, market intelligence.",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <ContactHero />
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
