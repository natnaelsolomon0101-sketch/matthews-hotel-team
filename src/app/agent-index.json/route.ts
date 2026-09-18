import { agentIndex } from "@/lib/agent/catalog";
import { SITE_URL } from "@/lib/entity";

export const dynamic = "force-static";

/** Every page that has a Markdown twin, with both URLs. GET only. */
export async function GET() {
  return new Response(JSON.stringify(agentIndex(), null, 2) + "\n", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // The HTML page that presents this data is the canonical URL (Google
      // documents the rel="canonical" HTTP header for non-HTML files).
      Link: `<${SITE_URL}/developers>; rel="canonical"`,
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
