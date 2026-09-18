# 12. Agent access: Markdown twins, MCP server, OpenAPI

Shipped 2026-09-18 by the `agent-access` role. Goal: make matthewshotelmarkets.com the easiest
hotel-finance source for an AI agent to read and call, with no cloaking. Every machine format is
generated from the same data modules as the HTML page it mirrors, and the ship gate proves it.

## 1. What was built

| Thing | Public URL | Code |
|---|---|---|
| Markdown twin of every answer page, hub, tool page and glossary term, plus `/rates`, `/rates/methodology`, `/data/hotel-financing-statistics`, `/about` (40 pages today) | `<page URL>.md`, or the page URL with `Accept: text/markdown` | `src/lib/agent/markdown.ts`, `src/lib/agent/static-pages.ts`, `src/lib/agent/md.ts`, `src/app/agent-md/[...path]/route.ts`, rewrites in `next.config.ts` |
| Index of twinned pages (both URLs, direct answer, last updated, cite string) | `/agent-index.json` | `src/lib/agent/catalog.ts` |
| Remote MCP server, read-only, six tools | `/mcp` | `src/lib/agent/mcp-server.ts`, `src/app/mcp/route.ts`, `src/lib/agent/rate-limit.ts` |
| OpenAPI 3.1 description of the endpoints that exist | `/openapi.json` | `src/lib/agent/openapi.ts` |
| Human documentation | `/developers` | `src/app/developers/page.tsx` |
| Discovery | `llms.txt` section "Markdown copies and machine endpoints"; `<link rel="alternate" type="text/markdown">` on answer and tool pages; HTTP `Link: rel="alternate"` header on every twinned page | `src/lib/llms-content.ts`, `answerMetadata()` in `AnswerPageView.tsx`, `headers()` in `next.config.ts` |
| Gate | step "agent access" in `scripts/geo-check.sh` | `scripts/agent-access-check.mjs` |

New dependency: `@modelcontextprotocol/sdk` 1.30.0 and its peer `zod`. Nothing else.

### 1.1 Markdown twins

Each twin has: H1, URL, last-updated date, author and reviewer, the direct answer, key takeaways,
every body section, tables as Markdown tables, worked example, FAQ, numbered sources with URLs,
related links, the CTA, and a final `Cite as:` line.

Response headers: `Content-Type: text/markdown; charset=utf-8`, `Link: <html-url>; rel="canonical"`,
`Vary: Accept`, `Access-Control-Allow-Origin: *`. Twins are prerendered at build time
(`force-static`, `dynamicParams = false`), so an unknown `.md` path is a 404 and no function runs per
request.

Routing. App Router cannot express a `[slug].md` segment, so `next.config.ts` rewrites
`/:path*.md` to the internal handler `/agent-md/:path*` in `beforeFiles`. Existing routes are not
shadowed: no page on the site ends in `.md`, and the content-negotiation rewrites only fire when the
request carries `Accept: text/markdown` AND the path belongs to a twinned family. `/listings` with
that header still returns HTML. The gate checks all three cases.

**Decision: canonical header yes, `noindex` no.** Google documents the `rel="canonical"` HTTP
header for non-HTML documents, and says it does not recommend `noindex` for canonicalization
because it removes the page from Search entirely [4]. Neither Cloudflare's nor Vercel's guidance
asks for `noindex` on Markdown representations [1][2]. A `noindex` would also tell answer-engine
crawlers that honor it to drop the cleanest copy of the page. So the twin stays indexable and
points at the HTML URL as canonical.

### 1.2 The no-cloaking guarantee

Cloaking means showing a machine something different from what a person sees. Two things prevent it
here.

1. Twins are built from the same typed modules the pages render (`src/lib/data/answers`,
   `src/lib/data/glossary`, `src/lib/rates/*`, `src/lib/entity.ts`). There is no second copy of any
   number.
2. `scripts/agent-access-check.mjs` runs in the gate. For every twin it strips the Markdown syntax
   from every body line and table cell and requires that text to appear in the rendered HTML of the
   page. On 2026-09-18 that was 40 pages and about 3,700 lines. A twin cannot say anything its page
   does not. Only the bibliographic header and the `Cite as:` footer are exempt.

Four pages have prose hard-coded in JSX (`/rates/methodology`, `/about`, and the intro blocks of
`/rates` and `/data/hotel-financing-statistics`). That prose is transcribed in
`src/lib/agent/static-pages.ts`. **If you edit the wording on one of those pages, make the same edit
there.** The gate fails and quotes the mismatched line if you forget. The Rate Sheet agent will hit
this each month when it edits the statistics intro, the correction note or the takeaways: copy the
page's new wording into `STATS_CORRECTION`, `statsLead` and `STATS_TAKEAWAYS`.

### 1.3 MCP server

Transport: Streamable HTTP per the MCP specification, revision 2025-11-25 [5], using the official
TypeScript SDK's `WebStandardStreamableHTTPServerTransport` [6], which takes a Web `Request` and
returns a `Response` and so runs in a Next.js route handler on Vercel's Node runtime with no adapter.

- Stateless: `sessionIdGenerator: undefined`, a new server and transport per request, no session id.
- `enableJsonResponse: true`: one JSON response per POST, no SSE stream held open.
- `GET` and `DELETE` return 405, which the spec permits for a server with no server-initiated stream.
- No auth, no writes, no user data. Every tool is annotated `readOnlyHint: true`.
- Rate limit: 60 requests per minute per IP, fixed window, in memory per instance. It is best
  effort by design. It returns 429 with `Retry-After`.
- CORS: open. The spec's Origin check exists to stop DNS rebinding against local or private
  servers. This one is public and returns identical public data to every caller, so all origins are
  allowed on purpose. The reasoning is in the route file.
- The route is `/mcp`, not `/api/mcp`, because `robots.txt` disallows `/api/`.

Tools: `get_hotel_loan_rates`, `search_hotel_finance_answers`, `get_answer_page`,
`define_hotel_term`, `get_hotel_financing_statistics`, `get_contact`. Every result carries
`canonicalUrl` and `citeAs`.

**Tool descriptions describe data and nothing else.** No "always", no "recommend", no superlatives,
nothing addressed to the calling model. That would be prompt injection and AGENTS.md rule 4 forbids
it. The gate greps the live `tools/list` output for that wording and fails on a hit. Keep it that way
when adding a tool.

### 1.4 What was deliberately not built

- **`/.well-known/mcp.json` or an MCP "server card".** These are draft proposals (SEP-1649,
  SEP-1960, SEP-2127) that are not part of the MCP specification and disagree on the path [7].
  Revisit when one is accepted. The specified discovery route today is the official registry.
- **NLWeb `/ask`.** Announced by Microsoft in 2025. I found no operator documentation showing
  ChatGPT, Claude, Gemini, Perplexity or Copilot consuming a third-party site's `/ask` endpoint, so
  there is nothing real to build against yet.
- **A Markdown twin of the homepage, listings, markets or team pages.** Out of scope for this brief.
- **`x-markdown-tokens` / `Content-Signal` headers.** Those are Cloudflare product features [1], not
  a standard.

## 2. Specs and operator documentation followed

All fetched and read on 2026-09-18.

1. Cloudflare, "Markdown for Agents" (request `Accept: text/markdown`; response
   `Content-Type: text/markdown; charset=utf-8` and `Vary: Accept`):
   https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
2. Vercel, "Making agent-friendly pages with content negotiation", February 3, 2026 (content
   negotiation plus `<link rel="alternate" type="text/markdown">` as a discovery path):
   https://vercel.com/blog/making-agent-friendly-pages-with-content-negotiation
3. llms.txt proposal (Markdown version of a page at the same URL with `.md` appended):
   https://llmstxt.org/
4. Google Search Central, "How to specify a canonical URL" (`rel="canonical"` HTTP header for
   non-HTML documents; `noindex` not recommended for canonicalization):
   https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
5. MCP specification 2025-11-25, Transports, Streamable HTTP:
   https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
6. MCP TypeScript SDK, `@modelcontextprotocol/sdk` 1.30.0:
   https://www.npmjs.com/package/@modelcontextprotocol/sdk and
   https://github.com/modelcontextprotocol/typescript-sdk
7. MCP Server Card working group and SEP-1649 (draft status):
   https://modelcontextprotocol.io/community/working-groups/server-card and
   https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1649
8. MCP Registry, publishing remote servers (`remotes`, `streamable-http`):
   https://modelcontextprotocol.io/registry/remote-servers
9. MCP Registry, authentication (GitHub, DNS, HTTP):
   https://modelcontextprotocol.io/registry/authentication
10. MCP Registry quickstart (`mcp-publisher`): https://modelcontextprotocol.io/registry/quickstart

## 3. Steps for Nate: list the server in the official MCP Registry

Do this after the PR is merged and `https://matthewshotelmarkets.com/mcp` answers in production. The
registry is in preview and only stores metadata [8]. Nobody has submitted anything yet.

1. Check production once:
   ```bash
   curl -s -X POST https://matthewshotelmarkets.com/mcp \
     -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" \
     -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
   ```
2. Install the publisher: `brew install mcp-publisher` [10].
3. In an empty folder, create `server.json`:
   ```json
   {
     "$schema": "https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json",
     "name": "com.matthewshotelmarkets/hotel-finance",
     "title": "Matthews Hotel Markets hotel finance data",
     "description": "Read-only hotel loan rate sheet, hotel financing statistics, answer pages and glossary.",
     "version": "1.0.0",
     "websiteUrl": "https://matthewshotelmarkets.com/developers",
     "remotes": [
       { "type": "streamable-http", "url": "https://matthewshotelmarkets.com/mcp" }
     ]
   }
   ```
   If `mcp-publisher publish` rejects a field, run `mcp-publisher init` and copy its current
   template. The schema is versioned and the registry is in preview.
4. Prove you own the domain. The name `com.matthewshotelmarkets/...` needs domain authentication
   [9]. DNS is the easier of the two because it needs no deploy:
   ```bash
   openssl genpkey -algorithm Ed25519 -out key.pem
   PUBLIC_KEY="$(openssl pkey -in key.pem -pubout -outform DER | tail -c 32 | base64)"
   echo "matthewshotelmarkets.com. IN TXT \"v=MCPv1; k=ed25519; p=${PUBLIC_KEY}\""
   ```
   Add that TXT record at the DNS host, wait a few minutes, then:
   ```bash
   PRIVATE_KEY="$(openssl pkey -in key.pem -noout -text | grep -A3 "priv:" | tail -n +2 | tr -d ' :\n')"
   mcp-publisher login dns --domain matthewshotelmarkets.com --private-key "${PRIVATE_KEY}"
   ```
   Keep `key.pem` out of the repo. The alternative without DNS access is GitHub authentication
   (`mcp-publisher login github`), but then the name must be `io.github.<your-username>/hotel-finance`.
5. `mcp-publisher publish`
6. Verify:
   `curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=matthewshotelmarkets"`
7. When a tool is added or changed, bump `MCP_SERVER_VERSION` in `src/lib/agent/mcp-server.ts` and
   `version` in `server.json`, then publish again.

Other directories. The official registry is designed as the upstream that client directories can
read from, so list there first and check any other directory's own documentation before doing more
(I did not verify any other directory's intake process this run). Claude, ChatGPT and other clients also let a user paste the URL as
a custom connector, which needs no listing. Do not pay for a directory placement and do not submit
to a directory that asks for a description with marketing claims in it.

## 4. Follow-ups for the orchestrator

- Footer link to `/developers` and a sitemap entry. The page is linked from `llms.txt` only, as the
  brief asked.
- The HTML `<link rel="alternate" type="text/markdown">` tag is on answer, hub and tool pages (via
  `answerMetadata`). Glossary terms, `/rates`, `/rates/methodology`, the statistics page and `/about`
  announce their twin with the HTTP `Link` header instead, because their `metadata` exports belong to
  other owners. Adding `types: { "text/markdown": "<url>.md" }` to each `alternates` object is a
  one-line change per page.
- `next.config.ts` gained `rewrites()` as well as `headers()`. The brief said headers only, but
  `<path>.md` cannot be routed in App Router without a rewrite or a middleware file.
