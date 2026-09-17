import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { BOILERPLATE, BRAND, PARENT, SITE_URL } from "@/lib/entity";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // userScalable: true is the default; never block pinch-zoom (WCAG 2.1
  // success criterion 1.4.4).
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

// Search-console ownership tokens. Nate pastes the token value into Vercel
// env vars once he verifies the property; until then these are undefined and
// Next omits the corresponding <meta> tag entirely (no empty tags shipped).
// See geo/02-crawl-index.md for the exact GSC/Bing verification steps.
const verification: Metadata["verification"] = {
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : {}),
  ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
    ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } }
    : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Matthews Hotel Markets | National Hotel Investment Sales & Brokerage",
    template: "%s | Matthews Hotel Markets",
  },
  // Same sentence as Organization.description, /about, /team, and the footer.
  // Source of truth: src/lib/entity.ts.
  description: BOILERPLATE,
  applicationName: BRAND,
  keywords: [
    "hotel broker",
    "hotel investment sales",
    "sell my hotel",
    "hospitality brokerage",
    "hotel financing",
    "hotel for sale",
    "select service hotel",
    "boutique hotel for sale",
    "luxury resort for sale",
    "hospitality capital markets",
    "hotel cap rates",
    "Matthews Real Estate Investment Services",
  ],
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: PARENT,
  category: "Real Estate",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/matthews-logo.jpg",
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "Matthews Hotel Markets | Insights" },
      ],
    },
  },
  ...(Object.keys(verification).length ? { verification } : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: BRAND,
    title:
      "Matthews Hotel Markets | National Hotel Investment Sales & Brokerage",
    description:
      "Hotel investment sales, capital markets, and acquisition advisory. Active listings, closed transactions, and quarterly outlooks from a national hospitality brokerage team.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Matthews Hotel Markets | National Hotel Investment Sales & Brokerage",
    description:
      "Hotel investment sales, capital markets, and acquisition advisory. Active listings, closed transactions, and quarterly outlooks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      {/*
        JSON-LD is NOT emitted here. Every page renders exactly one <JsonLd />
        (src/components/seo/JsonLd.tsx), which merges the site-wide entity
        nodes from src/lib/entity.ts with that page's own nodes into a single
        @graph. One script tag, one graph, per route.
      */}
      <body className="min-h-screen bg-[color:var(--surface)] text-[color:var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
