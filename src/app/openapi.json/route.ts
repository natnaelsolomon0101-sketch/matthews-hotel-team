import { openApiDocument } from "@/lib/agent/openapi";

export const dynamic = "force-static";

/** OpenAPI 3.1 description of the public read-only endpoints. GET only. */
export async function GET() {
  return new Response(JSON.stringify(openApiDocument(), null, 2) + "\n", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
