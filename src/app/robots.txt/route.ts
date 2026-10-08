import { CONTENT_SIGNAL, DISALLOW } from "@/lib/content-signals";
import { SITE_URL } from "@/lib/entity";

// A route handler, not Next's `robots.ts` metadata file, for one reason: the
// metadata type has no field for a directive it does not know, and the
// Content-Signal line below is one. The output is otherwise what robots.ts
// produced, group for group.
export const dynamic = "force-static";

// Per-token Allow groups, not just `User-agent: *`.
//
// Why this matters: per the Robots Exclusion Protocol (RFC 9309 §2.2.1), a
// crawler that finds a group naming its own token reads ONLY that group and
// ignores `User-agent: *` entirely. Today's site has a single `*` rule, which
// is adequate because nothing currently disallows anything these bots need —
// but it is fragile: the day someone adds a `Disallow` meant for a scraper,
// every named bot below would silently keep reading the (unrelated, and by
// then wrong) `*` block instead. Explicit groups make each bot's access an
// intentional decision instead of an accident of ordering.
//
// Token verification (doc URL + fetch date for every token is in
// geo/02-crawl-index.md — do not edit this list without updating that file):
//   Googlebot            developers.google.com/search/docs/crawling-indexing/google-common-crawlers
//   Google-Extended      developers.google.com/search/docs/crawling-indexing/google-common-crawlers
//   GoogleOther          developers.google.com/search/docs/crawling-indexing/google-common-crawlers
//   Bingbot              bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0
//   OAI-SearchBot        developers.openai.com/api/docs/bots (search index)
//   ChatGPT-User         developers.openai.com/api/docs/bots (user-triggered fetch)
//   GPTBot               developers.openai.com/api/docs/bots (training)
//   Claude-SearchBot     support.claude.com/en/articles/8896518 (search index)
//   Claude-User          support.claude.com/en/articles/8896518 (user-triggered fetch)
//   ClaudeBot            support.claude.com/en/articles/8896518 (training)
//   PerplexityBot        docs.perplexity.ai/guides/bots (search index)
//   Perplexity-User      docs.perplexity.ai/guides/bots (user-triggered fetch)
//   DuckAssistBot        duckduckgo.com/duckduckgo-help-pages/results/duckassistbot
//   Applebot             support.apple.com/en-us/119829 (search/Siri/Spotlight index)
//   Applebot-Extended    support.apple.com/en-us/119829 (training signal on Applebot's crawl)
//   MistralAI-User       docs.mistral.ai/robots (user-triggered fetch)
//   meta-externalfetcher developers.facebook.com (Meta AI user-triggered fetch) — unverified
//                        first-party doc URL; token spelling per Meta's public bot list, flagged
//                        "unverified" in geo/02-crawl-index.md
//   Meta-ExternalAgent   developers.facebook.com (training) — same caveat as above
//   CCBot                commoncrawl.org/ccbot (training corpus used by many labs)
//   Amazonbot            developer.amazon.com/amazonbot (training + Alexa/shopping)
const SEARCH_ANSWER_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "DuckAssistBot",
  "Applebot",
];

const USER_TRIGGERED_FETCHERS = [
  "ChatGPT-User",
  "Claude-User",
  "Perplexity-User",
  "MistralAI-User",
  "meta-externalfetcher",
];

const TRAINING_CRAWLERS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Meta-ExternalAgent",
];

// `/_next/` is deliberately NOT disallowed (DISALLOW lives in
// src/lib/content-signals.ts): Google's own guidance says blocking the
// JS/CSS/static assets a page needs "directly harms how well our algorithms
// render and index your content" (developers.google.com/search/docs/
// crawling-indexing/googlebot, "why Google might not index your page"; also
// the 2015 Google Webmaster Central post on rendering). Next.js serves hashed
// bundles under `/_next/static/` that every rendered page depends on, so
// disallowing it blocks nothing a scraper wants but can degrade rendering for
// any bot that does render. The old rule blocked it; this rewrite removed it.
//
// CONTENT_SIGNAL (the Content Signals line, contentsignals.org) is defined in
// the same file, so /ai.txt states the identical policy.

function group(userAgents: string[]): string {
  return [
    ...userAgents.map((ua) => `User-Agent: ${ua}`),
    CONTENT_SIGNAL,
    "Allow: /",
    ...DISALLOW.map((d) => `Disallow: ${d}`),
  ].join("\n");
}

export async function GET() {
  const body =
    [
      group(["*"]),
      group(SEARCH_ANSWER_BOTS),
      group(USER_TRIGGERED_FETCHERS),
      group(TRAINING_CRAWLERS),
      `Host: ${SITE_URL}\nSitemap: ${SITE_URL}/sitemap.xml`,
    ].join("\n\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
