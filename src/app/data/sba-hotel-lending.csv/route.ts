import { sbaCsv } from "@/lib/sba";
import { SITE_URL } from "@/lib/entity";

export const dynamic = "force-static";

/** Long-form CSV of the same aggregates as /data/sba-hotel-lending.json. */
export async function GET() {
  return new Response(sbaCsv(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      // The HTML page that presents this data is the canonical URL (Google
      // documents the rel="canonical" HTTP header for non-HTML files).
      Link: `<${SITE_URL}/data/sba-hotel-lending>; rel="canonical"`,
      "Content-Disposition": 'inline; filename="sba-hotel-lending.csv"',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-License": "CC-BY-4.0",
    },
  });
}
