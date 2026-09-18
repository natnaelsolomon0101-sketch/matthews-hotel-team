# geo/02-crawl-index.md — Agent 2, crawl-index-engineer

Phase 1, CODE. Branch `geo/ai-visibility`. Written 2026-09-17.

No prior-sprint artifact existed in this lane (`scripts/bot-check.sh`, `scripts/indexnow.*`,
`.github/workflows/indexnow.yml`, `.github/workflows/bot-check.yml`, a generated `llms.txt` route
all new). `src/app/robots.ts` and `src/app/sitemap.ts` existed but needed the fixes below.

---

## URGENT — production is currently serving a "Vercel Security Checkpoint" to this session's IP

While repeatedly rerunning `scripts/bot-check.sh` during development today (several full runs in quick
succession, each ~18 rapid non-browser `curl` requests, on top of Agent 1's own concurrent curl-based
recon traffic against the same production host), production started returning **HTTP 403** with
`x-vercel-mitigated: challenge` and a "Vercel Security Checkpoint" HTML page (an Astro-based interstitial,
not the Next.js site) to every request from this session's IP, including a plain Chrome UA with no
special headers. Confirmed still happening as of the last single check this session (2026-09-17,
~22:31 UTC) — I did not retest further to avoid making it worse.

**What I know:** the response headers (`x-vercel-mitigated: challenge`, `server: Vercel`) point to a
Vercel platform-level bot/attack mitigation, not an application-level redirect or `next.config`
behavior (there is none — checked). This looks like automatic, traffic-pattern-based mitigation
(a burst of rapid, cookie-less, non-browser-TLS-fingerprint requests from one IP is exactly what such
a system is built to catch), separate from whatever the account's own dashboard-configurable Bot
Protection / Attack Challenge Mode is set to. I have no dashboard access to this project's Vercel scope
to confirm which system triggered it, its scope (per-IP vs. site-wide), or its cooldown window.

**What I do not know, and Nate needs to check immediately:**
1. Whether real visitors (not this session's IP) are currently affected. Check from a different
   network/device, or ask someone else to load the site.
2. Vercel dashboard → Firewall → whether Attack Challenge Mode shows as active, and its trigger log.
3. Whether this needs a manual reset or clears on its own after mitigated traffic stops.

**Implication for this whole lane's testing:** `bot-check.sh` is designed to run occasionally (its
GitHub Action runs it weekly), not repeatedly during development. I added a 1-second delay between
requests and a warning comment in the script (see the loop in `scripts/bot-check.sh`) so this is
harder to reproduce by accident, but the real fix is discipline: do not rerun it back-to-back against
production. **All of §3's bot-check results below were captured before this triggered** (I have the
full pass/fail output saved from those runs) — I could not do a final confirming rerun after this
incident without risking prolonging it, so treat the 18/18 pass results as "true as of the point
captured," not "true right now." Nate should rerun `./scripts/bot-check.sh` himself once he's confirmed
the checkpoint has cleared.

---

## 1. robots.ts — before / after

**Before:** single `User-agent: *` rule, `Disallow: /api/` and `Disallow: /_next/`.

**After:** `User-agent: *` kept permissive, plus three explicit per-token groups (search/answer index,
user-triggered fetchers, training crawlers). `Disallow: /_next/` **removed**.

**Why remove `/_next/`:** verified against Google's own guidance
(`https://developers.google.com/search/docs/crawling-indexing/googlebot` and the widely-cited 2015
Google Webmaster Central post on rendering, corroborated via WebSearch 2026-09-17): blocking the
JS/CSS a page needs "directly harms how well our algorithms render and index your content." Next.js
serves every page's hashed JS/CSS bundles under `/_next/static/`. There is nothing sensitive under
that path — it's static build output — so the old rule traded a real rendering risk for zero
confidentiality benefit. Removed.

**Why explicit per-token groups, not just `*`:** RFC 9309 §2.2.1 (Robots Exclusion Protocol) — a
crawler that finds a group naming its own product token reads *only* that group, ignoring `*`
entirely. Today's single `*` rule was fine because nothing disallowed anything a real bot needs, but
it was one careless future edit away from silently blocking bots the site actually wants (or granting
access it didn't mean to). Explicit groups make each bot's access a decision, not an accident.

### Token verification — doc URL + fetch date for every token shipped

| Token | Group | Verified against | Fetched |
|---|---|---|---|
| Googlebot | search/answer | developers.google.com/search/docs/crawling-indexing/google-common-crawlers | 2026-09-17 |
| GoogleOther | training | same as above (exact runtime UA string not published; token itself confirmed) | 2026-09-17 |
| Google-Extended | training | same as above. **Note:** this token does not have its own fetching crawler — it controls whether content already crawled by Googlebot may be used for Gemini training/grounding. Verified via the same page's own description. Excluded from `bot-check.sh`'s HTTP test for that reason (nothing independently fetches under this UA to test). | 2026-09-17 |
| Bingbot | search/answer | bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0 (page fetched but returned only a title in this environment; token spelling and purpose corroborated via WebSearch of Microsoft's own docs) | 2026-09-17 |
| OAI-SearchBot | search/answer | developers.openai.com/api/docs/bots (redirected from platform.openai.com/docs/bots) | 2026-09-17 |
| ChatGPT-User | user-fetch | developers.openai.com/api/docs/bots | 2026-09-17 |
| GPTBot | training | developers.openai.com/api/docs/bots | 2026-09-17 |
| Claude-SearchBot | search/answer | support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler (redirected from support.anthropic.com) | 2026-09-17 |
| Claude-User | user-fetch | support.claude.com/en/articles/8896518 | 2026-09-17 |
| ClaudeBot | training | support.claude.com/en/articles/8896518 | 2026-09-17 |
| PerplexityBot | search/answer | docs.perplexity.ai/guides/bots — exact UA string confirmed | 2026-09-17 |
| Perplexity-User | user-fetch | docs.perplexity.ai/guides/bots — exact UA string confirmed | 2026-09-17 |
| DuckAssistBot | search/answer | duckduckgo.com/duckduckgo-help-pages/results/duckassistbot (via WebSearch; DuckDuckGo's own help page, not a third-party aggregator) | 2026-09-17 |
| Applebot | search/answer | support.apple.com/en-us/119829 — exact UA string confirmed | 2026-09-17 |
| Applebot-Extended | training | support.apple.com/en-us/119829. Apple's own doc: "Applebot-Extended does not crawl webpages" — it's a usage-control token layered on Applebot's crawl, same shape as Google-Extended. Excluded from `bot-check.sh`'s HTTP test for the same reason. | 2026-09-17 |
| MistralAI-User | user-fetch | docs.mistral.ai/robots — exact UA string confirmed via WebSearch summary of Mistral's own doc | 2026-09-17 |
| meta-externalfetcher | user-fetch | developers.facebook.com (Meta's webmaster crawler docs) — **token spelling and purpose corroborated via WebSearch only; I could not independently load Meta's first-party doc page in this session, and the exact runtime UA string is unverified.** Flagged as unverified in `scripts/bot-check.sh` comments. Included because every third-party summary agrees on the token name and it costs nothing to allow. | 2026-09-17 |
| Meta-ExternalAgent | training | same as above — same unverified-exact-string caveat | 2026-09-17 |
| CCBot | training | commoncrawl.org/ccbot, commoncrawl.org/faq — token and behavior confirmed first-party | 2026-09-17 |
| Amazonbot | training | developer.amazon.com/amazonbot — token confirmed first-party; note Amazon also documents `Amzn-SearchBot` (search-only, does not train) and `Amzn-User` (user-fetch), which were **not** in the brief's token list and are not added here. Flagging for Agent 10/1: if we want Amazon's search surface specifically, `Amzn-SearchBot` should be added in a follow-up. | 2026-09-17 |

**Not shipped, and why:** Bytespider (ByteDance/TikTok's crawler) and Cohere's crawler appear in some
third-party "AI bot" lists (I saw them in Agent 4's fallback list in `geo/requests.md`) but were not
in this task's token list and I did not independently verify either against a first-party doc in this
session. Left out rather than guessed. If Nate wants them, verify first, then add a group the same way.

---

## 2. Headers — production vs. preview

**Production** (`curl -I https://matthewshotelmarkets.com/`, 2026-09-17): no `X-Robots-Tag` header at
all. Clean. `robots.index: true`, `max-snippet:-1`, `max-image-preview:large` all still set in
`src/app/layout.tsx` metadata — untouched, as instructed.

**Preview:** I could not curl a live preview deployment for this specific project — the connected
Vercel CLI account (`natnaelsolomon0101-sketchs-projects`) does not have this project under it (its
`vercel ls` output has no `matthews-hotel-team` / `hotel-team-site` project; the live site is deployed
under a different Vercel scope this session has no CLI access to). Documented instead, from Vercel's
own docs (`https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines`,
corroborated via WebSearch 2026-09-17): Vercel automatically adds `X-Robots-Tag: noindex` to every
Preview Deployment, and to the previous production deployment when a new one is promoted — **except**
when a preview environment has a custom domain, in which case the header is not added by default.
**Action for Nate:** if any preview environment is mapped to a custom subdomain (not a
`*.vercel.app` URL), verify it separately; the automatic protection doesn't apply there.

**`next.config.ts` / middleware:** no `src/middleware.ts` exists in this repo, and `next.config.ts`
has no user-agent branching (checked directly — it only sets `images`, `turbopack.root`, and
`poweredByHeader: false`). Nothing to remove.

---

## 3. Vercel Firewall — checklist for Nate (dashboard-only, cannot be set from code)

Verified against `https://vercel.com/docs/vercel-firewall/attack-challenge-mode`,
`https://vercel.com/docs/bot-management`, and `https://vercel.com/kb/guide/how-to-protect-your-ai-app-from-bots`
(all fetched/searched 2026-09-17):

1. **Vercel dashboard → Project → Firewall → Bot Protection (managed ruleset).** If enabled, confirm
   its action is not set to block/challenge the search and user-fetch tokens above. Vercel's own
   guidance for AI crawlers specifically is a **deliberate choice per bot**: "deny" if you don't want
   an LLM training on your content, "log" (not block) if you're fine with it. Given this sprint's goal
   (be in training data, be citable), none of GPTBot / ClaudeBot / Google-Extended / Applebot-Extended
   / CCBot / Amazonbot / Meta-ExternalAgent should be set to deny.
2. **Firewall → Attack Challenge Mode.** Vercel documents that known legitimate bots (search engines,
   webhook providers) are automatically allowed through without a challenge, pulled from Vercel's own
   maintained bot directory — but confirm this is **off** in steady state, or if left on, spot-check
   after enabling that a search/answer bot UA still gets a clean 200 (rerun `bot-check.sh`).
3. **Any custom Firewall rule** that matches on User-Agent — search the rules list for `bot`, `crawl`,
   `GPT`, `Claude`, `AI` and confirm none of them challenge or block the tokens above.
4. **Deployment Protection → Production** must be **off** (no Vercel Authentication / password /
   trusted-IP gate on the production environment). This is a separate setting from
   `X-Robots-Tag`; the tag only asks engines not to index, Deployment Protection actually blocks the
   fetch. I could not check this project's current setting (no CLI access to its Vercel scope this
   session) — Nate, verify directly in the dashboard.

---

## 4. Sitemap — before / after

**Before:** every one of ~140 URLs used `lastModified: new Date()` — every entry says "changed right
now" on every single deploy.

**After:** per-item dates where the data module already has them (glossary `lastUpdated`, MHI
`publishedAt`, insights `lastUpdated` falling back to a parsed `date` string), and a per-data-file
constant everywhere else, captured via `git log -1 --format=%cI -- <path>` on 2026-09-17 (exact
command + output below). `/about` (new mid-sprint route) added with its own constant matching the
page's visible "Last updated" date.

```
$ git log -1 --format=%cI -- src/app/page.tsx            -> 2026-05-06T13:51:56-05:00
$ git log -1 --format=%cI -- src/lib/data/listings.ts     -> 2026-05-16T15:16:49-05:00
$ git log -1 --format=%cI -- src/lib/data/closed.ts       -> 2026-05-12T10:06:25-05:00
$ git log -1 --format=%cI -- src/lib/data/team.ts         -> 2026-07-18T14:27:57-05:00
$ git log -1 --format=%cI -- src/lib/data/insights.ts     -> 2026-05-10T19:37:00-05:00
$ git log -1 --format=%cI -- src/app/process/page.tsx     -> 2026-05-10T11:54:13-05:00
$ git log -1 --format=%cI -- src/app/contact/page.tsx     -> 2026-05-10T11:54:13-05:00
$ git log -1 --format=%cI -- src/app/research/page.tsx    -> 2026-05-11T08:37:54-05:00
$ git log -1 --format=%cI -- src/lib/data/markets.ts      -> 2026-05-10T14:17:58-05:00
$ git log -1 --format=%cI -- src/lib/data/brands.ts       -> 2026-05-10T13:24:52-05:00
$ git log -1 --format=%cI -- src/lib/data/services.ts     -> 2026-05-10T13:24:52-05:00
$ git log -1 --format=%cI -- src/lib/data/offices.ts      -> 2026-05-10T13:24:52-05:00
```

**Known limitation, stated plainly:** this is file-level granularity, not item-level. Every listing in
`listings.ts` shares one `lastModified` until that file (or type) gets a real per-item date field.
That's still categorically better than "now" (it stops lying that everything changed on every deploy),
but it's not the end state.

**Why I didn't shell out to `git log` at Vercel build time instead:** I could not verify Vercel's
build-container git checkout depth from Vercel's own docs (checked
`https://vercel.com/docs/deployments/troubleshoot-a-build` directly — it documents build resource
limits and caching, not checkout depth). Per this sprint's own rule ("verify, don't assume"), I did
not build logic on an unverified assumption. If checkout depth is later confirmed full-history, swap
the hardcoded `FILE_LAST_MODIFIED` map in `src/app/sitemap.ts` for a `git log` call wrapped in
try/catch, falling back to these same constants.

**Follow-up filed to `geo/requests.md`:** add a real `lastUpdated` field to `Listing`, `ClosedDeal`,
`TeamMember`, `Market`, `Brand`, `Service`, and `Office` types (the way `glossary`, `mhi`, and
`insights` already have one) so the sitemap gets item-level accuracy without hardcoded constants.
I did not do this myself: it's 40+ entries across data modules with no other listed owner this
sprint, and bulk-editing them risked colliding with other agents' concurrent edits to the same files.

**Hub/spoke/rates/tools routes:** `geo/05-architecture.md` did not exist when I started; it existed by
the time I finished (Agent 5 landed mid-session) but defines routes (`/hotel-financing/*`,
`/sell-a-hotel/*`, `/rates`, `/data/*`) that don't exist in the codebase yet. Left a
`// TODO(agent-10)` in `sitemap.ts` rather than guessing at slugs. Whoever lands those routes should
add sitemap entries with real dates, not `new Date()`.

---

## 5. IndexNow

- Endpoint and spec verified against `https://www.indexnow.org/documentation` (fetched 2026-09-17):
  single shared endpoint `https://api.indexnow.org/indexnow`, POST body `{host, key, keyLocation,
  urlList}`, key file hosted at the domain root, 200/202 = success.
- Key generated this session: `e87b0b0a3a5b017521267333e3c1e8ea` (32 hex chars). Hosted at
  `public/e87b0b0a3a5b017521267333e3c1e8ea.txt` → will serve at
  `https://matthewshotelmarkets.com/e87b0b0a3a5b017521267333e3c1e8ea.txt`.
- `scripts/indexnow.ts`: fetches `/sitemap.xml`, submits only URLs whose `lastmod` is within the last
  48 hours. **Refuses to run unless on `main`** (checked via `GITHUB_REF_NAME` in CI or `git
  rev-parse --abbrev-ref HEAD` locally) unless `--force` is passed. Tested locally on this branch:
  correctly refused. Tested with `--force --dry-run`: correctly reported "no URLs changed in the last
  48h" (every current `lastmod` predates the 48h window, which is expected and is the correct,
  non-spammy behavior for a first real run).
- `.github/workflows/indexnow.yml`: triggers on push to `main` + manual dispatch only.
- **IndexNow does not include Google.** Confirmed participants per the spec doc: Bing and Yandex.
  Other engines' participation varies and isn't guaranteed — don't oversell this to Nate.

**Nate must do, for this to have any effect:**
1. Bing Webmaster Tools (`https://www.bing.com/webmasters`) → add and verify
   `matthewshotelmarkets.com` (DNS TXT or HTML file). Submit `https://matthewshotelmarkets.com/sitemap.xml`.
   (This was already flagged in `HUMAN_QUEUE.md` from the prior sprint — still open.)
2. Bing Webmaster Tools also independently supports pasting/generating an IndexNow key. If Bing issues
   its own key and you'd rather use that one, replace the constant in `scripts/indexnow.ts` and the
   file in `public/` together — they must match.
3. No action needed for the key file itself; it deploys with the rest of the repo.

---

## 6. llms.txt / llms-full.txt

**Replaced** the hand-written `public/llms.txt` with a generated route
(`src/app/llms.txt/route.ts` + `src/app/llms-full.txt/route.ts`, sharing content logic in
`src/lib/llms-content.ts`), built from the same data modules that feed `sitemap.ts`, plus
`src/lib/entity.ts` (the entity-schema-engineer's single-source-of-truth module for brand/parent/
address/boilerplate — using it instead of hand-rolling my own strings was the single biggest
de-drift win here: the exact `BOILERPLATE` sentence is now identical across `Organization.description`,
`/about`, `/team`, the footer, and `llms.txt`).

**Claims removed from the old file, and why** (full list, so Agent 10 can reconcile rather than
re-add any of these silently):
1. `"$84.3B"` cumulative platform volume — conflicts with the homepage's `"$88.37B"`
   (`HomeWhy.tsx`). Neither number has a citable source in the repo. Omitted entirely rather than
   picking a side; Agent 10 owns reconciling it site-wide per `geo/00-repo-map.md`.
2. `"Founded as a dedicated hospitality vertical in 2024"` — no source anywhere in the repo.
3. `"670+ hotel transactions closed"` — `closed.ts` publishes 38 deals; no source for 670+.
4. `"33,500+ transactions"`, `"1M+ investor relationships"`, `"30+ offices"` — all unsourced platform
   totals, same treatment.
5. `"2024 production: $3.5B closed across 72 transactions, ~59,000 rooms"` — unsourced (matches
   `opengraph-image.tsx`'s "$3.5B closed · 670+ hotels" internally, but internal consistency isn't a
   source).
6. Denver described only as "a Denver presence" with no street address implied — kept, but now
   explicit: `offices.ts` has no confirmed Denver street address, so the generated file says so
   outright rather than staying silent about it (a silent omission reads as confirmed-but-unlisted;
   an explicit caveat doesn't).

**What replaced the removed claims:** service-line descriptions and dollar ranges (sourced to
`services.ts`, which is also what the visible `/services/*` pages show), the office/team roster
(`offices.ts`/`entity.ts`), and full canonical URL listings for every page/market/brand/glossary term/
insight/MHI quarter that exists today. Nothing about the removed claims is "fixed" — they're absent
until someone sources or corrects them at the origin (the homepage, `services.ts`, etc.), which is
outside this lane.

**llms-full.txt** currently covers glossary terms (full body + FAQ + sources) and MHI methodology —
the only two content types that are (a) genuinely answer-format and (b) backed by a plain-text data
module I can extract verbatim. `/about` shipped mid-sprint as hand-written JSX (not a data module), so
it's linked, not reproduced. `/rates` doesn't exist yet.

**Honest framing, per `geo/00-guidance.md`:** Google has stated plainly it does not use llms.txt for
Search or AI Overviews/AI Mode — there is no separate "AI index." Anthropic publishes llms.txt for its
own docs properties (`docs.anthropic.com/llms.txt`, `code.claude.com/llms.txt`,
`platform.claude.com/llms-full.txt` — real, checkable), which is evidence of the practice, not a
ranking or citation guarantee for third-party sites. Perplexity and some other agents read llms.txt in
observed cases, not guaranteed. Shipped because it's cheap (built from data already in the repo) and
because de-drifting the old file removes an active liability (an AI system that *does* read it was
reading contradictory numbers). Nobody should plan around this file driving citations by itself.

---

## 7. Feeds

`src/app/feed.xml/route.ts`: RSS 2.0 for `/insights`, full text via `<content:encoded>` (CDATA-wrapped,
paragraph-split from the same `body` string the insight page itself renders). `/rates` is not in scope
(doesn't exist yet — Agent 8). Added `<link rel="alternate" type="application/rss+xml">` to
`src/app/layout.tsx`'s metadata `alternates.types`.

**Note found, not fixed (outside this lane):** the RSS output contains 7 em-dash characters, all
inherited verbatim from existing `insights-articles/*.ts` body content (pre-existing site copy, not
authored by me). Flagged in `geo/requests.md` for whoever owns that content — my own generated text in
`llms.txt` / `llms-full.txt` / the feed's own title and structural strings is em-dash-clean (checked
with `grep "—"` against the built output; zero hits in `llms.txt.body` and `llms-full.txt.body`).

---

## 8. URL hygiene

- **Canonical host: FOUND A REAL BUG.** `curl -I https://www.matthewshotelmarkets.com/` returns
  **HTTP 200** with the same content and identical `etag` as the apex — `www` is not redirecting to
  the non-www canonical. This is a duplicate-content surface that's existed in production; it is not
  something `vercel.json`'s `headers`/`redirects` arrays fix on their own (Vercel's `www` handling is
  normally a Domains-tab setting, not a code-level redirect, and `redirects` is explicitly outside my
  ownership lane per the repo map — only `headers` is mine, append-only). **Filed to
  `geo/requests.md` and in the Nate checklist below.**
- `http://` → `https://` apex: confirmed 308 to `https://matthewshotelmarkets.com/`. Clean.
- Trailing slash: `/listings/` → 308 → `/listings` (no slash). Consistent, matches Next's default
  `trailingSlash: false`.
- Soft-404 check: `curl -s -o /dev/null -w "%{http_code}"` on both a nonexistent listing slug
  (`/listings/this-does-not-exist-xyz`) and a nonexistent top-level route
  (`/this-route-does-not-exist-xyz`) both returned real **404** status codes. No soft-404s.
- 404 page has nav links: not independently re-verified visually this session (out of scope for a
  curl-based check); flagged for Agent 1/10 if not already covered.

---

## 9. Markdown twins experiment

**Not shipped.** Time budget went to the P1 sitemap fix, the robots.ts rewrite, and getting llms.txt
onto real shared data instead of drifting further. This is explicitly P2/optional per the brief.
Logged as a deferred item, not a silent drop.

---

## bot-check.sh — result

Ran against production (`https://matthewshotelmarkets.com/`) 2026-09-17: **18/18 UAs passed** (every
token except the two non-fetching control tokens, Google-Extended and Applebot-Extended — see §1 for
why those are excluded from the HTTP test). Baseline Chrome fetch: HTTP 200, 79,079 bytes. Every bot
UA: HTTP 200, 0% body-size diff from baseline, no challenge-page fingerprint matched.

```
$ ./scripts/bot-check.sh
...
[bot-check] 18/18 UAs passed.
[bot-check] All bot UAs reached https://matthewshotelmarkets.com/ cleanly.
```

`geo/01-bot-uas.txt` did not exist when I started; Agent 1 (recon-auditor) landed it mid-session with
its own independently-verified UA strings (including a corrected Bingbot string sourced from Bing's
webmaster blog post, and a real Googlebot-Smartphone string, both better-sourced than my embedded
fallback). `scripts/bot-check.sh` now parses that file's actual format (comment-labeled blocks, one
UA string per block — not the simpler `TOKEN|UA` format I'd originally guessed at before the file
existed) and backfills the two tokens Agent 1's file doesn't cover (`MistralAI-User`,
`meta-externalfetcher`) from the embedded list, so every token in `robots.ts` still gets checked. The
18/18 result above is from the rerun against Agent 1's actual file, not the earlier guess-format
fallback. If `geo/01-bot-uas.txt`'s format changes again, the parser (`parse_bot_uas_file` in
`scripts/bot-check.sh`) may need a matching update.

---

## What I could not verify

1. Preview-deployment `X-Robots-Tag` for this specific project (no CLI access to its Vercel scope this
   session — documented Vercel's stated default behavior instead; see §2).
2. Vercel Firewall / Bot Protection / Attack Challenge Mode / Deployment Protection **current
   settings** for this project (dashboard-only, no CLI access; full checklist in §3).
3. Exact runtime User-Agent strings for `meta-externalfetcher` and `Meta-ExternalAgent` — token names
   and purposes corroborated via multiple independent secondary sources, but I could not load a
   first-party Meta developer doc page in this session to confirm the byte-exact string. Flagged
   inline in `robots.ts` and `bot-check.sh` comments.
4. Whether GoogleOther's crawler uses a distinct, publicly documented UA string beyond the bare token
   — Google's page names the token but I did not find a published exact request header.
5. Whether Vercel's build container performs a full or shallow git checkout — Vercel's own build-
   troubleshooting doc doesn't state a checkout depth. This is why `sitemap.ts` uses hardcoded
   constants instead of a build-time `git log` call (see §4).

---

## Nate must do — exact dashboard actions

**0. URGENT, do this first: check whether production is currently challenging real visitors.** See
the incident note at the top of this file. Load `https://matthewshotelmarkets.com/` yourself (a
network this session hasn't touched) and confirm you get the real site, not a "Vercel Security
Checkpoint" page. If you do get the checkpoint, check Vercel dashboard → Firewall for an active
Attack Challenge Mode or a mitigation log entry around 2026-09-17 ~22:00-22:31 UTC.

**Vercel:**
1. Firewall → Bot Protection (managed ruleset): confirm action is not "deny"/"challenge" for
   GPTBot, ClaudeBot, Google-Extended, GoogleOther, Applebot-Extended, CCBot, Amazonbot,
   Meta-ExternalAgent, or any of the search/user-fetch tokens in §1.
2. Firewall → Attack Challenge Mode: confirm current state; if on, rerun
   `./scripts/bot-check.sh` after to confirm bots still pass.
3. Firewall → Custom Rules: search for any rule matching on User-Agent; confirm none target the
   tokens above.
4. Project Settings → Deployment Protection: confirm **Production** is set to **Off** (no password /
   Vercel Authentication / trusted-IP gate).
5. **Domains: `www.matthewshotelmarkets.com` is currently serving HTTP 200 instead of redirecting to
   the apex.** Go to Project Settings → Domains, and either set `www` as a redirect to
   `matthewshotelmarkets.com`, or confirm which one should be canonical and fix the other. This is a
   real duplicate-content issue live in production today.
6. Confirm which Vercel team/scope actually owns the `matthewshotelmarkets.com` deployment (it is not
   under the `natnaelsolomon0101-sketch` personal account used elsewhere this session) so future
   sessions can `vercel ls` / pull preview URLs directly instead of working blind on Firewall/
   Deployment-Protection checks.

**Bing Webmaster Tools:**
7. Verify `matthewshotelmarkets.com` (DNS TXT or HTML file). Submit
   `https://matthewshotelmarkets.com/sitemap.xml`. (Also listed in `HUMAN_QUEUE.md` from the prior
   sprint — still open as of this session.)
8. If Bing issues its own IndexNow key on verification, decide whether to switch to it — if so, swap
   both `scripts/indexnow.ts`'s `INDEXNOW_KEY` constant and the `public/<key>.txt` file together.

**Google Search Console:**
9. Verify `matthewshotelmarkets.com` as a property. Submit the sitemap. Once verified, set the
   `NEXT_PUBLIC_GSC_VERIFICATION` env var in Vercel (Production) to the verification token GSC gives
   you — `src/app/layout.tsx` already reads it into `metadata.verification.google` and will emit the
   `<meta>` tag automatically on the next deploy. No code change needed.
10. Set `NEXT_PUBLIC_BING_VERIFICATION` the same way if Bing gives a meta-tag verification option
    instead of/in addition to DNS.

**GitHub Actions (repo secrets, none required for this lane's two new workflows):**
11. `bot-check.yml` and `indexnow.yml` need no new secrets — they hit public URLs only. Confirm
    Actions are enabled for this repo if they aren't already (the prior sprint's `seo-tracking.yml`
    implies they are).

---

## Files touched (this lane only)

- `src/app/robots.ts` — rewritten
- `src/app/sitemap.ts` — rewritten (real `lastModified`, added `/about`)
- `src/app/llms.txt/route.ts` — new
- `src/app/llms-full.txt/route.ts` — new
- `src/lib/llms-content.ts` — new (shared generator, imports `src/lib/entity.ts`)
- `public/llms.txt` — deleted (superseded by the generated route)
- `public/e87b0b0a3a5b017521267333e3c1e8ea.txt` — new (IndexNow key file)
- `scripts/indexnow.ts` — new
- `scripts/bot-check.sh` — new
- `.github/workflows/indexnow.yml` — new
- `.github/workflows/bot-check.yml` — new
- `src/app/feed.xml/route.ts` — new
- `vercel.json` — appended 2 entries to `headers` (llms-full.txt, feed.xml cache-control); did not
  touch `redirects`
- `src/app/layout.tsx` — additive only: `verification` field (env-gated, renders nothing until Nate
  sets the env vars) and `alternates.types` RSS link. This file is Agent 3's in-progress work; edited
  carefully, re-verified with `tsc --noEmit` and a full build immediately after.
