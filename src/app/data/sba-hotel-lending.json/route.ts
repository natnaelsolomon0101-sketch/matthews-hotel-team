import { sbaJson } from "@/lib/sba";

// Built from the committed aggregates in content/sba/, nothing else.
export const dynamic = "force-static";

/**
 * Machine-readable SBA hotel lending aggregates. Aggregates only: there is no
 * borrower-level row behind this endpoint. Permissive CORS on purpose, same as
 * /rates.json. The path is outside /api/ because robots.txt disallows /api/.
 */
export async function GET() {
  return new Response(JSON.stringify(sbaJson(), null, 2) + "\n", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-License": "CC-BY-4.0",
    },
  });
}
