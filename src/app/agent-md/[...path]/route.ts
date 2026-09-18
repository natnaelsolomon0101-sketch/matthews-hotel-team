import { SITE_URL } from "@/lib/entity";
import { getTwin, twins } from "@/lib/agent/markdown";

/**
 * Markdown twins. Public URL: `<page path>.md`, for example
 * /hotel-financing/sba-7a-vs-504.md. next.config.ts rewrites that (and any
 * request for a twinned page that sends `Accept: text/markdown`) to this
 * handler. Only the paths returned by twins() exist; everything else is a 404.
 *
 * Prerendered from the same data modules as the HTML page. GET only.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams(): { path: string[] }[] {
  return twins().map((t) => ({ path: t.path.slice(1).split("/") }));
}

export async function GET(_req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  const twin = getTwin(`/${path.join("/")}`);
  if (!twin) return new Response("Not found\n", { status: 404 });

  return new Response(twin.markdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // The HTML page stays the canonical URL. Google documents the
      // rel="canonical" HTTP header for non-HTML documents, and advises
      // against noindex for canonicalization. See geo/12-agent-access.md.
      Link: `<${SITE_URL}${twin.path}>; rel="canonical"`,
      Vary: "Accept",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
