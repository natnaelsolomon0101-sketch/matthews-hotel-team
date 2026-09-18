import { ratesJson } from "@/lib/rates/export";
import { SITE_URL } from "@/lib/entity";

// Built entirely from typed data modules, same as sitemap.ts and llms.txt.
export const dynamic = "force-static";

/**
 * Machine-readable rate sheet. Permissive CORS on purpose: the point of
 * publishing a dataset is that other people can read it from their own pages
 * and tools without proxying it.
 *
 * GET only. Nothing here is user input and nothing is written.
 */
export async function GET() {
  return new Response(JSON.stringify(ratesJson(), null, 2) + "\n", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // The HTML page that presents this data is the canonical URL (Google
      // documents the rel="canonical" HTTP header for non-HTML files).
      Link: `<${SITE_URL}/rates>; rel="canonical"`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-License": "CC-BY-4.0",
    },
  });
}
