import { buildLlmsTxt } from "@/lib/llms-content";

// Content only depends on build-time data modules, same as sitemap.ts —
// prerender it once instead of invoking a function on every request.
export const dynamic = "force-static";

// Generated from the same typed data modules that feed sitemap.ts — see
// src/lib/llms-content.ts for why this replaced the old hand-written
// public/llms.txt (it had drifted: "$84.3B" vs. the homepage's "$88.37B",
// among other unsourced figures — full list in geo/02-crawl-index.md).
//
// Static generation is fine here: the underlying data modules only change
// on deploy, so there is no need for `export const dynamic`.
export async function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
