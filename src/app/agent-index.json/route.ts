import { agentIndex } from "@/lib/agent/catalog";

export const dynamic = "force-static";

/** Every page that has a Markdown twin, with both URLs. GET only. */
export async function GET() {
  return new Response(JSON.stringify(agentIndex(), null, 2) + "\n", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
