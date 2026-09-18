import { ratesCsv } from "@/lib/rates/export";
import { SITE_URL } from "@/lib/entity";

export const dynamic = "force-static";

/**
 * The same rate sheet as a long-format CSV: one row per lender type per
 * field, with the basis in its own column. Long format on purpose, so a
 * pending cell is a row that says "pending" rather than a blank in a wide
 * grid that a spreadsheet will happily read as zero.
 */
export async function GET() {
  return new Response(ratesCsv(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      // The HTML page that presents this data is the canonical URL (Google
      // documents the rel="canonical" HTTP header for non-HTML files).
      Link: `<${SITE_URL}/rates>; rel="canonical"`,
      "Content-Disposition": 'inline; filename="matthews-hotel-rate-sheet.csv"',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-License": "CC-BY-4.0",
    },
  });
}
