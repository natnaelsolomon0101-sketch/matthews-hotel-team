import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeStats from "@/components/sections/home/HomeStats";
import HomeFeatured from "@/components/sections/home/HomeFeatured";
import HomeWhy from "@/components/sections/home/HomeWhy";
import HomeClosedTeaser from "@/components/sections/home/HomeClosedTeaser";
import HomeInsightTeaser from "@/components/sections/home/HomeInsightTeaser";
import JsonLd from "@/components/seo/JsonLd";
import { BOILERPLATE, BRAND, SITE_URL, webPage } from "@/lib/entity";

export default function Home() {
  // Home carries the entity nodes only (added by <JsonLd />) plus its own
  // WebPage node. No BreadcrumbList: the home page is the breadcrumb root.
  const graph = [
    webPage({
      url: `${SITE_URL}/`,
      name: BRAND,
      description: BOILERPLATE,
      mainEntity: `${SITE_URL}/#org`,
    }),
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <JsonLd graph={graph} />
        <HomeHero />
        <HomeStats />
        <HomeFeatured />
        <HomeWhy />
        <HomeClosedTeaser />
        <HomeInsightTeaser />
      </main>
      <SiteFooter />
    </>
  );
}
