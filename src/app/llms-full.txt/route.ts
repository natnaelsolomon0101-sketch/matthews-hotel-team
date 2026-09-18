import { buildLlmsFullTxt } from "@/lib/llms-content";

// Content only depends on build-time data modules, same as sitemap.ts —
// prerender it once instead of invoking a function on every request.
export const dynamic = "force-static";

// Full Markdown text of the key answer-format content that exists today
// (glossary terms, MHI methodology). See src/lib/llms-content.ts for scope
// notes and geo/requests.md for what's pending from other agents (/about,
// /rates).
export async function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
