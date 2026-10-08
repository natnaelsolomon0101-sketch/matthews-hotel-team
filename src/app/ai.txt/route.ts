import { CONTENT_SIGNAL, DISALLOW } from "@/lib/content-signals";
import { SITE_URL } from "@/lib/entity";

export const dynamic = "force-static";

// ai.txt (Spawning's proposal, spawning.ai/ai-txt): a robots.txt-style file
// that states whether content may be used by AI systems. Few crawlers read it
// today; it is here so the policy is stated wherever someone looks. It must
// say exactly what /robots.txt says, so both read src/lib/content-signals.ts.
// Permissions only: no prose aimed at a model (geo/AGENTS.md rule 4).
export async function GET() {
  const body =
    [
      `# ai.txt for ${SITE_URL}`,
      "# Same policy as /robots.txt.",
      "",
      "User-Agent: *",
      CONTENT_SIGNAL,
      "Allow: /",
      ...DISALLOW.map((d) => `Disallow: ${d}`),
      "",
      `Sitemap: ${SITE_URL}/sitemap.xml`,
    ].join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
