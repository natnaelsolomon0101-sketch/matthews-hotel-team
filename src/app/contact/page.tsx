import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { EMAIL, ID, SITE_URL, breadcrumb, webPage } from "@/lib/entity";

import { DEFAULT_OG_IMAGES, seoTitle } from "@/lib/seo-meta";
export const metadata: Metadata = {
  title: seoTitle("Contact a Hotel Broker | Talk to Matthews Hotel Markets"),
  description:
    "Talk to a hotel broker at Matthews Hotel Markets. Investment sales, capital markets and acquisitions. Austin HQ + Denver. We respond within one business day.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    type: "website",
    title: "Contact a Hotel Broker | Matthews Hotel Markets",
    description:
      "Investment sales, capital markets, acquisitions, market intelligence. Austin HQ + Denver.",
    url: `${SITE_URL}/contact`,
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: "summary",
    title: "Contact a Hotel Broker | Matthews Hotel Markets",
    description:
      "Investment sales, capital markets, acquisitions, market intelligence.",
  },
};

export default function ContactPage() {
  const url = `${SITE_URL}/contact`;
  const graph = [
    {
      ...webPage({
        url,
        name: "Contact a Hotel Broker",
        description: metadata.description as string,
      }),
      "@type": "ContactPage",
    },
    {
      "@type": "ContactPoint",
      "@id": `${url}#contactpoint`,
      contactType: "sales",
      email: EMAIL,
      areaServed: "US",
      availableLanguage: "English",
      // No organization-level switchboard number exists in this repo, so none
      // is claimed here. Broker direct lines live on /team/[slug].
      parentOrganization: { "@id": ID.org },
    },
    breadcrumb([{ name: "Contact", path: "/contact" }]),
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <JsonLd graph={graph} />
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
