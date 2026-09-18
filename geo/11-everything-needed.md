# geo/11-everything-needed.md: everything needed to be found and cited

Written 2026-09-18, the day the AI-visibility pass reached production. Scope: what it takes for
matthewshotelmarkets.com to be found and cited by ChatGPT search, Claude, Gemini, Google AI Overviews
and AI Mode, Perplexity, Microsoft Copilot, Meta AI and Apple (Siri, Spotlight, Safari), and to rank in
Google and Bing, for hotel loans, refinancing, valuation, selling a hotel, cap rates, loan rates and
hotel brokers.

White-hat only. No hidden text, cloaking, prompt injection, fake reviews, bought links, sockpuppets or
mass thin pages. Google's own 2026 guide lists "inauthentic mentions" and "scaled content abuse" as
things that do not work, and the owner's name is on this site.

**How the live checks were done.** One request per URL to matthewshotelmarkets.com, spaced a few
seconds apart, browser user agent, no loops: `www` home, `/sitemap.xml`, `/robots.txt`, `/rates`,
`/hotel-financing/refinance`, the IndexNow key file. Everything else came from search engines, DNS,
GitHub Actions logs and third-party sites.

---

## Read this first: what I found on the live site today

1. **The new pages are live, but no search engine has been told.** The IndexNow workflow ran on the
   merge at 13:51 UTC and logged `no URLs with lastmod in the last 48h. Nothing to submit.` It read the
   sitemap before Vercel finished deploying, so it saw the old July dates. Zero of the 30 new pages
   were submitted. The 48-hour window for the 9/17 pages closes on 9/19.
2. **`/rates` is already wrong on its first day.** It says Prime is 6.75% and the SBA 7(a) cap is
   9.75% "today". The Fed raised rates on 9/16 and Prime went to 7.00% effective 9/17
   ([CNBC](https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html),
   [Fed implementation note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a1.htm)).
   SOFR printed 3.85% for 9/17; the page shows 3.62%. The page most likely to be quoted is the one
   that is stale.
3. **Google and Bing do not know the site exists yet.** No `google-site-verification` or `msvalidate`
   meta tag in the live HTML, and no TXT records at all on the domain's DNS (GoDaddy,
   `ns59/ns60.domaincontrol.com`). Search Console and Bing Webmaster Tools are almost certainly not
   verified.
4. **Only 2 URLs are indexed anywhere I could check.** `site:` shows `/` and `/team` only, in the
   WebSearch backend and in Brave Search. Brave matters because Claude's web search runs on it. The
   indexed home-page snippet still reads "$84.3B" and "one million direct relationships", the retired
   figures.
5. **The LinkedIn company page is a different entity.** At `linkedin.com/company/matthews-hotel-markets/`
   the page is named **"Matthews Hospitality"**, with 7 followers, no website field, and a tagline
   claiming "1.8M+ CRE relationships", an unsourced figure of the kind the site just removed. "Matthews
   Hospitality" is also the name of an Australian hotel group and of Matthews Development's hospitality
   arm (`matthewsdev.com/hospitality`), so the name is ambiguous for an engine.
6. **`www` still returns 200**, a full duplicate of the site. It is softened because its canonical tag
   points to the apex, but it is still the owner action from REPORT.md.
7. **`matthewsratesheet.info` is still live** (200 on both hosts) with its own, different numbers. Two
   Matthews rate sheets now disagree.
8. **The weekly tracking workflow has failed every run since July 1.** `SEO + LLM Citation Tracking`
   dies at `git push` with HTTP 403 (the workflow token has read-only contents). The repo has no
   Actions secrets, so the LLM check would skip every engine even if it ran.
9. **There is no analytics on the site.** No Vercel Web Analytics, GA, or HubSpot tracking code in
   `layout.tsx` or `package.json`. ChatGPT adds `utm_source=chatgpt.com` to referrals, but nothing is
   there to count them.
10. **HubSpot AEO tracking is blocked by permissions.** A read of AEO metrics from this account
    returned "You need access to additional permissions". The 20 prompts in `04-queries.md` have not
    been loaded.
11. **Nothing alarming on crawl access.** `robots.txt` is the new per-bot version. Pages return 200.
    `googlebot` meta keeps `max-snippet:-1`. No challenge page was served to any of my requests today.

Also stale, not new: listings dated 2026-05-16 (`LISTINGS_UPDATED`); the MHI has only Q1 2026, so Q2
is overdue and Q3 is close; `matthews.com/services/investment-sales/hospitality` still neither names
nor links the site (checked today).

---

## Do this week: the 10 highest-impact items, ranked

Owners: **Nate**, **Luke**, **corporate marketing** (Matthews marketing/web team), **agent** (a repo
agent working through a PR that Nate merges).

### 1. Tell Bing and Yandex about every new page today. Owner: agent, then Nate merges. 15 minutes.

Why: Bing feeds Copilot and is ChatGPT search's main web partner. Microsoft's own AI Performance
announcement recommends IndexNow so "AI systems reference the most current version of a page"
([Bing blog, Feb 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)).

Steps:
- Agent: add a one-time `--all` flag to `scripts/indexnow.ts` that submits every sitemap URL (158) in
  one POST, and change `.github/workflows/indexnow.yml` to wait for the deploy. The simplest safe fix
  is to trigger on `deployment_status` with `github.event.deployment_status.state == 'success'` and
  environment Production (Vercel's GitHub integration posts deployment statuses), instead of
  `push`.
- Nate: merge, then GitHub → Actions → "IndexNow submission" → Run workflow. Check the log for
  `HTTP 200` or `202`.
- One POST, one time. Do not re-run it in a loop.

### 2. Verify Google Search Console and submit the sitemap. Owner: Nate. 15 minutes plus DNS wait.

Why: every Google surface (AI Overviews, AI Mode, Gemini) and now Siri's web answers sit on Google's
index. Google says there are "no additional requirements" beyond being indexed with a snippet
([Google, AI features](https://developers.google.com/search/docs/appearance/ai-features)).

Click-path:
1. search.google.com/search-console → Add property → **Domain** → `matthewshotelmarkets.com` →
   copy the TXT value.
2. GoDaddy → My Products → `matthewshotelmarkets.com` → DNS → Add New Record → Type `TXT`, Name `@`,
   Value = the string → Save. (DNS is at GoDaddy, not Vercel.)
3. Back in Search Console → Verify (can take minutes to hours).
4. Sitemaps → enter `sitemap.xml` → Submit.
5. URL Inspection → paste each URL below → Request indexing (the daily quota is small, so these 10
   only): `/`, `/rates`, `/hotel-financing`, `/hotel-financing/refinance`,
   `/hotel-financing/hotel-loan-rates`, `/hotel-financing/sba-7a-vs-504`, `/sell-a-hotel`,
   `/hotel-valuation`, `/hotel-valuation/hotel-cap-rates`, `/about`.

### 3. Verify Bing Webmaster Tools by importing from Search Console, and submit to Brave. Owner: Nate. 15 minutes.

Why: Bing = Copilot, ChatGPT search's main partner, and Meta AI's search partner. Brave = Claude.
Bing supports import from Search Console with automatic verification
([Bing blog](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)).

Click-path:
1. bing.com/webmasters → sign in → **Import from Google Search Console** → Continue → pick
   `matthewshotelmarkets.com` → Import. (Do step 2 first.)
2. Sitemaps → confirm `https://matthewshotelmarkets.com/sitemap.xml` is there; add it if not.
3. Open **AI Performance** in the left menu and note the start date. It shows citations in Copilot and
   Bing AI summaries per URL, plus "grounding queries"
   ([Bing help](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c)).
4. IndexNow in Bing: confirm submissions from item 1 show up under IndexNow.
5. Brave has no console. Go to `search.brave.com/submit-url` by hand and submit the same 10 URLs as
   item 2, one at a time. Treat it as a re-fetch request, not a guarantee.

### 4. Correct `/rates` for the 9/16 Fed hike. Owner: agent drafts, Nate approves. 30 minutes.

Why: the rate sheet is the page an assistant is most likely to quote with the brand's name. A wrong
"today" number on day one is the failure mode `08-data.md` warns about.

Steps:
- Agent: run `npx tsx scripts/fetch-benchmarks.ts`. Confirm Prime 7.00% (FRED DPRIME), SOFR for the
  latest date (NY Fed), and today's Treasury par yields.
- Publish a dated correction, not a silent edit: add an edition `2026-09-b` (or a visible
  "Corrected 2026-09-18" line on the September edition) with a changelog: "Prime 6.75% → 7.00% after
  the 9/16 FOMC decision; SBA 7(a) variable cap over $350,000 9.75% → 10.00%; SOFR 3.62% → 3.85%."
- Recompute every sentence that derives from Prime or SOFR on the answer pages (grep `6.75`, `9.75`,
  `3.62`).
- Nate: read the diff, merge, then run item 1's IndexNow for the changed URLs.

### 5. Vercel dashboard: `www` redirect and bot settings. Owner: Nate (whoever owns the Vercel team scope). 10 minutes.

Click-path:
1. Project → Settings → Domains → `www.matthewshotelmarkets.com` → Edit → **Redirect to**
   `matthewshotelmarkets.com`, status **301** (or 308) → Save.
2. Project → Firewall → Bot Management / Bot Protection: set AI bots to **Allow** or **Log**, never
   Deny or Challenge. Attack Challenge Mode: **Off**.
3. Firewall → Custom Rules: none may match `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `Claude-SearchBot`,
   `PerplexityBot`, `Bingbot`, `Applebot`.
4. Settings → Deployment Protection → Production: no password or Vercel Authentication. (Production is
   publicly reachable today; confirm it stays that way.)

### 6. Ask corporate marketing for the matthews.com link. Owner: Nate sends. 10 minutes.

Why: matthews.com outranks this site on its own brand name, and it is the one authority link that
only needs an internal email. Checked today: the hospitality page lists Luke and five other brokers
and links to no hotel site; its only outbound link is the Matthews Mentality podcast.

Copy-paste:

> Subject: One link on the hospitality page
>
> Hi [name], the hotel team runs matthewshotelmarkets.com, which now carries our monthly hotel loan
> rate sheet (matthewshotelmarkets.com/rates) and owner guides on refinancing, valuation and selling.
> Could we add one line and one link to matthews.com/services/investment-sales/hospitality:
> "Matthews Hotel Markets, our hospitality investment sales and capital markets team:
> matthewshotelmarkets.com". If possible, the same link on the agent pages for Luke Thompson, Miles
> Cortez III and Nate Solomon, pointing to their bios at matthewshotelmarkets.com/team/[name]. Two
> related questions: who manages the Austin Google Business Profile at 515 Congress Ave., and are we
> cleared to update the LinkedIn page linkedin.com/company/matthews-hotel-markets? Thanks, Nate

### 7. Fix the LinkedIn company page name and strings. Owner: Nate or Luke (page admin). 20 minutes, after a naming decision.

Decision first: the site, schema and llms.txt say **Matthews Hotel Markets**; LinkedIn says **Matthews
Hospitality**. Engines merge profiles by exact name. Recommendation: use "Matthews Hotel Markets"
everywhere, because "Matthews Hospitality" collides with two unrelated companies. If corporate
requires "Matthews Hospitality", an agent adds it as `alternateName` in `src/lib/entity.ts` so the two
connect.

Click-path: LinkedIn → the page → Admin tools → Edit page → Page info:
- Name: `Matthews Hotel Markets`
- Tagline: `Hospitality investment sales and capital markets at Matthews Real Estate Investment Services`
- Website: `https://matthewshotelmarkets.com`
- Overview: paste the long boilerplate from `geo/03-entity.md` section 6.
- Remove "1.8M+ CRE relationships" unless corporate gives a source and date for it.

### 8. Load the observed spreads and the first MHDI reading. Owner: Luke, with Nate. 30 minutes.

Why: original, dated numbers are what make an assistant name a source. Google's 2026 guide asks for
"non-commodity content"
([Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
Today 40 of 49 cells say "Not yet published", which is honest but gives an engine nothing to quote
that the Fed or SBA did not already publish.

Steps: in `src/lib/rates/sheet.ts`, for bank, CMBS, life company, bridge and construction, enter
spread, coupon range, max LTV, DSCR floor, term/amortization and recourse, as
`{ basis: "observed", value: "...", quoteCount: n }`. Three independent quotes per cell minimum, no
lender or client names. Hand it to an agent to build, validate and PR if you prefer to type it into
an email.

### 9. 301 `matthewsratesheet.info` to `/rates`. Owner: Nate. 5 minutes.

Vercel → the `matthews-rate-sheet` project → Settings → Domains → for both `matthewsratesheet.info`
and `www.matthewsratesheet.info` → Redirect to `https://matthewshotelmarkets.com/rates`, 301. This
removes the second, disagreeing Matthews rate sheet.

### 10. Get measurement working. Owner: agent (code) plus Nate (dashboards). 30 minutes.

- Agent: add `permissions: contents: write` to `.github/workflows/seo-tracking.yml` (fixes the 403);
  change `geo/tracking/prompts.csv` `target_url` values to the live canonical slugs from
  `05-architecture.md` §9.1 (for example `/hotel-financing/sba-loans` →
  `/hotel-financing/sba-7a-vs-504`); make `scripts/internal-links-audit.ts` default to `--local`.
- Nate: Vercel → Project → Analytics → Enable Web Analytics (agent adds `@vercel/analytics` in the same
  PR). This is what counts `utm_source=chatgpt.com` visits.
- Nate: ask the HubSpot super admin for the AEO permission, then load the 20 prompts from
  `04-queries.md`.
- Nate: after item 2 verifies, open Search Console → Performance → **Generative AI** report (rolled
  out to all sites by 2026-08-31; shows AI Overviews and AI Mode impressions per page)
  ([Search Console help](https://support.google.com/webmasters/answer/16984139?hl=en)).

**Next week, first thing:** sign up for Qwoted and Source of Sources (item D1 in the table), post the
first LinkedIn series post, and send the week 2 press pitches from `09-offsite/90-day-calendar.md`.

---

## How each assistant picks sources, and the lever for each

| Assistant | Where its web results come from | What it rewards | Channel you control | Source |
|---|---|---|---|---|
| Google AI Overviews, AI Mode | Google Search index. "No additional requirements", no special markup, llms.txt ignored | Indexable, snippet-eligible, unique non-commodity content, images and video, accurate Business Profile | Search Console, incl. the Generative AI report | [AI features](https://developers.google.com/search/docs/appearance/ai-features), [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [GenAI report](https://support.google.com/webmasters/answer/16984139?hl=en) |
| Gemini app | Google Search grounding | Same as above | Search Console | same |
| ChatGPT search | OAI-SearchBot plus search partners, Bing chief among them. Independent studies find most citations match Bing's top results | Being crawlable by OAI-SearchBot, ranking in Bing | Robots/IP access; Bing Webmaster Tools; `utm_source=chatgpt.com` in analytics | [OpenAI bots](https://developers.openai.com/api/docs/bots), [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), [Seer study](https://www.seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results) (third party) |
| Microsoft Copilot | Bing index | Fresh, structured, clear headings/tables/FAQ; IndexNow | Bing Webmaster Tools, AI Performance report | [Bing AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), [June 2026 update](https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare) |
| Claude (web search) | Brave Search, listed on Anthropic's subprocessor page; TurboPuffer also listed since May 2026. Claude-SearchBot indexes for Claude's search | Ranking in Brave; Claude-SearchBot access | `search.brave.com/submit-url` (no console) | [Anthropic crawlers](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [TechCrunch](https://techcrunch.com/2025/03/21/anthropic-appears-to-be-using-brave-to-power-web-searches-for-its-claude-chatbot/), [subprocessor note](https://xponent21.com/insights/claude-web-search-brave-turbopuffer/) (third party) |
| Perplexity | Own index built by PerplexityBot, plus live fetches by Perplexity-User | Direct answers, visible dates, specific cited numbers | Robots and IP allow (`perplexitybot.json`). Publisher program (Comet Plus) targets publishers with 50+ articles; not a fit yet | [Perplexity bots](https://docs.perplexity.ai/guides/bots) |
| Meta AI | Bing and Google results (partnerships since 2023/2024); Meta is building its own crawler | Rank in Bing/Google | None direct; meta-externalfetcher allowed in robots | [SEJ](https://www.searchenginejournal.com/meta-integrates-google-bing-search-results-into-ai-assistant/514291/) (third party) |
| Apple (Siri, Spotlight, Safari) | Applebot crawl. Since WWDC 2026 Siri's web answers run on Gemini-based Apple models and may link sources | Applebot access; Google-quality signals | Apple Business Connect for place results | [Applebot](https://support.apple.com/en-us/119829), [9to5Google](https://9to5google.com/2026/06/08/siri-ai-gemini-comparison/) (third party) |

The pattern: **three indexes matter, Google, Bing and Brave.** Get into all three, rank on real
questions with answers nobody else has (your spreads, your deals), and be named by other sites.

---

## Full table

Status key: **Done**, **Partly**, **Not done**, **Broken**. Impact: 3 = high, 1 = low.

### A. Crawl and index

| # | Item | Why it matters (engines) | Status now (evidence) | Owner | Exact steps | Effort | Impact |
|---|---|---|---|---|---|---|---|
| A1 | Submit new URLs via IndexNow | Bing → Copilot, ChatGPT, Meta AI | **Broken.** Merge-run log: "no URLs with lastmod in the last 48h" (race with deploy) | agent, Nate | Top-10 item 1 | 15 min | 3 |
| A2 | Google Search Console verified, sitemap in | All Google surfaces, Siri | **Not done.** No meta token live; no TXT records in DNS | Nate | Top-10 item 2 | 15 min | 3 |
| A3 | Bing Webmaster Tools verified, sitemap in | Copilot, ChatGPT, Meta AI | **Not done.** Same evidence | Nate | Top-10 item 3 | 10 min | 3 |
| A4 | Brave re-fetch of key URLs | Claude | **Not done.** Brave `site:` shows 2 URLs | Nate | Top-10 item 3, step 5. Manual, 10 URLs, once | 10 min | 2 |
| A5 | `www` 301 to apex | All; duplicate content | **Not done.** `www` 200, canonical points to apex | Nate | Top-10 item 5 | 2 min | 2 |
| A6 | Vercel firewall lets AI bots through | All AI crawlers | **Unknown setting; no challenge seen today** | Nate | Top-10 item 5 | 5 min | 3 |
| A7 | Per-bot robots.txt, sitemap with real dates, llms.txt, feed | All (llms.txt: not used by Google) | **Done.** Live robots.txt has the 3 groups; sitemap 158 URLs, real dates | none | Keep | 0 | 2 |
| A8 | Rate-sheet domain consolidated | Removes a disagreeing duplicate | **Not done.** `matthewsratesheet.info` 200 | Nate | Top-10 item 9 | 5 min | 2 |
| A9 | Request indexing for 10 core URLs | Google | **Not done** (needs A2) | Nate | Top-10 item 2, step 5 | 10 min | 2 |
| A10 | Stop scripted traffic tripping Vercel's challenge | Everything; a challenge blocks every AI crawler | **Risk.** `bot-check.yml` runs 18 requests weekly; `internal-links-audit.ts` defaults to production (160 requests) | agent | Make the audit default `--local`; keep bot-check weekly at most, never in a loop | 15 min | 2 |
| A11 | Field speed data | Google page experience | **Unknown.** Lab only | Nate | Vercel → Speed Insights → Enable; after a month, check CrUX in Search Console | 5 min | 1 |

### B. Entity and knowledge graph

| # | Item | Why | Status now (evidence) | Owner | Exact steps | Effort | Impact |
|---|---|---|---|---|---|---|---|
| B1 | One name everywhere | Engines merge profiles by exact string | **Broken.** LinkedIn page is "Matthews Hospitality"; site is "Matthews Hotel Markets" | Nate decides; admin edits | Top-10 item 7 | 20 min | 3 |
| B2 | Parent site names and links the team | Strongest link; brand queries | **Not done.** Checked today: no name, no link | corporate marketing | Top-10 item 6 email | 10 min to ask | 3 |
| B3 | matthews.com agent pages link to bios | Person entity links | **Not done** | corporate marketing | Same email | 0 | 2 |
| B4 | Personal LinkedIn profiles carry the brand and bio link | Person entity; LinkedIn is heavily cited | **Unknown.** Luke's repo URL is `/in/hotelfinance101/`, but search shows `/in/luke-thompson-34878612/` for him | Luke, Miles, Nate | Headline: "[Title], Matthews Hotel Markets". About: open with the boilerplate. Website: `https://matthewshotelmarkets.com/team/[slug]`. Luke: confirm which profile URL is current so `team.ts` sameAs matches | 15 min each | 2 |
| B5 | Person `sameAs` includes matthews.com agent pages | Entity reconciliation | **Not done.** `entity.ts` Person sameAs = LinkedIn only | agent | After B3 URLs are confirmed, add them to `team.ts` and the Person node | 10 min | 1 |
| B6 | Google Business Profile | Local pack, Maps, AI Mode local answers; "hotel broker Austin" | **A corporate listing already exists** for Matthews at 515 Congress Ave. (2 Google reviews, 3.0, per [Birdeye](https://reviews.birdeye.com/matthews-real-estate-investment-services-169828554771252)) | corporate marketing | Do not create a duplicate. Google allows a separate profile only for a "publicly-facing department that operates as a distinct entity", or a practitioner profile named "[brand]: [name]" ([GBP guidelines](https://support.google.com/business/answer/3038177)). Ask corporate which, if any, they approve. No Denver listing | 15 min to ask | 1 |
| B7 | Bing Places, Apple Business Connect | Copilot/Maps; Siri place results | **Unknown** | corporate marketing | Mirror whatever B6 decides, exact NAP from `03-entity.md` | 20 min | 1 |
| B8 | Crunchbase parent profile | Minor entity signal | **Stale.** Describes the firm as El Segundo, retail/multifamily, no hospitality | corporate marketing | Claim/edit; add hospitality and the site link | 15 min | 1 |
| B9 | Hospitality Net org profile | Trade directory | **Unknown** (`hospitalitynet.org/organization/17024312`) | Nate | Request update per `directory-submissions.md` | 15 min | 1 |
| B10 | Wikidata / Wikipedia | Knowledge Graph | **Not eligible yet.** Wikidata search returns nothing for either name; Wikipedia 0 hits (checked today) | nobody yet | Revisit after 3+ independent articles about the team exist. See [Wikidata notability](https://www.wikidata.org/wiki/Wikidata:Notability) | 0 | 1 now |
| B11 | Open facts: founding year, org phone | Completes `/about` and schema | **Not done.** Both absent by design | Nate | Send the real year and a switchboard number if one exists; agent puts them in `entity.ts` only | 5 min | 1 |

### C. Content, original data and freshness

| # | Item | Why | Status now (evidence) | Owner | Exact steps | Effort | Impact |
|---|---|---|---|---|---|---|---|
| C1 | Correct `/rates` after the 9/16 hike | Most-quotable page | **Broken.** Live: Prime 6.75%, 7(a) cap 9.75%, SOFR 3.62% | agent, Nate | Top-10 item 4 | 30 min | 3 |
| C2 | Observed spreads and first MHDI reading | Only original number set on the site | **Not done.** 40 of 49 cells pending | Luke | Top-10 item 8 | 30 min | 3 |
| C3 | Monthly rate-sheet edition | Freshness; Bing and Perplexity reward current dates | **Scheduled.** Reminder issue on the 1st | agent drafts, Luke fills, Nate merges | `08-data.md` §4. Re-check SBA 504 when SOP 50 10 8.1 takes effect 10/1 | 20 min/month | 3 |
| C4 | MHI Q2 and Q3 2026 | Cap-rate prompts; brand-named data | **Overdue.** Only Q1 2026 exists | agent drafts from public sources, Nate reviews | New quarter in `src/lib/data/mhi.ts`, same method, each number linked | 2 hrs/quarter | 2 |
| C5 | Listings current | Trust; "hotel for sale in X" prompts | **Stale.** `LISTINGS_UPDATED = 2026-05-16` | Nate | Send the current active list; agent updates `listings.ts` and the date | 20 min | 2 |
| C6 | Wave 2 pages | Coverage of remaining questions | **Not done.** Stubs only | agent | Order: `/tools/refinance-vs-sell`, `/sell-a-hotel/off-market-vs-marketed`, glossary `ltv`, `ffe-reserve`, `going-concern-value`, `comfort-letter`, then `/hotel-financing/construction-loans`. Max 2 per week | 3 hrs/page | 2 |
| C7 | Buy-side underwriting answer | 15 prompts route to the `/services/acquisition-advisory` sales page ("How do you underwrite a hotel acquisition?", "What financials should I ask for?", "What's a T-12?") | **Gap** | agent | One answer page, for example `/hotel-valuation/how-to-underwrite-a-hotel`, per `05-templates.md`; link from the services page | 3 hrs | 2 |
| C8 | Market pages get a date, a direct answer and takeaways | 72 local prompts | **Not done** (`05-architecture` §5.2) | agent | Add `lastUpdated`, `directAnswer`, takeaways to `markets.ts`; only real MHI/deal data | 4 hrs | 2 |
| C9 | PIP questions | 10 prompts on `/glossary/pip` | **Partly** | agent | Extend the glossary entry; H2s on hub pages per §9.2(c) | 1 hr | 1 |
| C10 | Old insights point to the canonical answer pages | Avoid splitting signals | **Not done.** `how-to-sell-a-hotel-2026`, two refinancing-wave insights, two select-vs-full-service pieces and the cap-rate insights have no links to their Wave 1 equivalents | agent | Add a visible "Current version of this answer:" link at the top of each; Nate decides later whether any should 301 | 1 hr | 1 |
| C11 | Topics nobody planned | Real owner questions the rate sheet already touches | **Gap** | agent proposes, Nate approves | Check demand first (Search Console queries after a month), then consider: C-PACE for hotels, USDA B&I hotel loans, prepayment (defeasance, yield maintenance), loan assumption on a sale, mezzanine and preferred equity | varies | 1 |
| C12 | Author E-E-A-T | Who is answering; all engines weigh it | **Partly.** Bios exist; `yearsExperience` and career volume still "Confirm"; no designations | Luke, Miles, Nate | Each sends years in the business, licenses (state, number), and deals they can name publicly; agent adds to `team.ts` | 15 min each | 2 |

### D. Authority and off-site mentions

| # | Item | Why | Status now (evidence) | Owner | Exact steps | Effort | Impact |
|---|---|---|---|---|---|---|---|
| D1 | Journalist sourcing platforms | Quotes in real outlets = independent mentions | **Not done** | Nate, Luke | Sign up: Qwoted (strong in finance), Source of Sources (free), Featured/HARO (roundups). Answer only questions you are qualified for, with one real number. 3 per week | 30 min/week | 3 |
| D2 | Trade press pitches | Same | **Drafted, unsent since May** | Nate | Calendar week 2 | 1 hr | 3 |
| D3 | Podcasts, starting in-house | Transcripts get indexed and cited | **Not done.** Matthews already runs *The Matthews Mentality Podcast* and *The Matthews Podcast* | Luke or Nate | Ask the producers for a hotel-debt episode; then the 20 pitches in `podcast-pitches.md`. Put each transcript on a `/press` entry | 2 hrs per appearance | 2 |
| D4 | LinkedIn posts and a newsletter | LinkedIn posts and articles are indexed by Bing and Google and often cited | **Not started** | Luke, Nate | Post from `linkedin-series.md`; after 4 posts, start a monthly LinkedIn newsletter that summarizes each rate-sheet edition and links it | 20 min/post | 2 |
| D5 | YouTube explainers | Google names video as a positive; YouTube is a cited source | **Scripts ready** | Nate or Luke | Record 3 scripts in `youtube-scripts.md` (refinance, SBA 7(a) vs 504, cap rates); upload with a full transcript and a link; embed on the matching page | 1 hr each | 2 |
| D6 | Wire release for the rate sheet | Syndication | **Gated** on C2 | Nate | Send only after real spreads exist | 30 min | 2 |
| D7 | Associations | Directory links, member credibility | **Drafts with wrong titles** | Nate | Fix titles (Nate: Hospitality Associate; Luke: VP & Director, Capital Markets), then AAHOA, AHLA, THLA, HBI per calendar | 20 min each | 2 |
| D8 | Conference speaking | Recorded panels, program pages, press | **Not started** | Luke | Watch calls for speakers: ALIS, NYU Hospitality Investment Forum, Hunter Hotel Investment Conference, The Lodging Conference, AAHOACON, THLA events. Pitch a talk built on the rate sheet | 1 hr per submission | 2 |
| D9 | Real awards only | Third-party recognition | **Not started** | Nate | Apply only where criteria are public and based on real volume (for example broker rankings that use reported transactions). No pay-to-play "awards" | 1 hr | 1 |
| D10 | Community answers, disclosed | Reddit and Quora are heavily cited | **Playbook ready** | Nate | One named account, bio discloses Matthews, answer first, link only when it is the best source, per `reddit-quora-playbook.md` | 30 min/week | 1 |
| D11 | Guest posts | Independent coverage | **Drafted** | Nate | Calendar weeks 6 to 9 | 20 min/pitch | 2 |
| D12 | Open data | Reuse with attribution | **Partly.** `/rates.json`, `/rates.csv`, Dataset markup, CC BY 4.0 | agent | Once C2 is live, post the monthly CSV to a public data host (for example Kaggle or data.world) with a link to `/rates/methodology`; Google Dataset Search reads the existing markup | 30 min/month | 1 |
| D13 | Perplexity Pages, Comet Plus | Minor | **Skip for now** | none | Comet Plus targets publishers with a large article base. A self-authored Perplexity Page adds little and reads as promotion | 0 | 0 |
| D14 | Universities | Research citations | **Drafted** | Nate | Calendar week 12 | 30 min | 1 |

### E. Reviews

| # | Item | Why | Status now | Owner | Exact steps | Effort | Impact |
|---|---|---|---|---|---|---|---|
| E1 | Google reviews from real clients | Local results; trust | **Not started.** The corporate Austin listing shows 2 reviews | Nate, Luke, after B6 | Ask every closed client (buyer, seller, borrower) the same neutral way: "If you're willing, a Google review of how the process went would help us." No incentives, no asking only happy clients, no staff-written reviews, no quotas ([Google policy](https://support.google.com/contributionpolicy/answer/7400114)). Never add review markup to the site | 5 min per deal | 2 |

### F. Measurement

| # | Item | Why | Status now (evidence) | Owner | Exact steps | Effort | Impact |
|---|---|---|---|---|---|---|---|
| F1 | Search Console Generative AI report | AI Overviews and AI Mode impressions per page | **Not available** (needs A2) | Nate | Performance → Generative AI, monthly | 5 min | 3 |
| F2 | Bing AI Performance | Copilot citations and grounding queries | **Not available** (needs A3) | Nate | Weekly glance | 5 min | 3 |
| F3 | Web analytics | Referrals from chatgpt.com, perplexity.ai, copilot, gemini | **Not done.** None installed | agent, Nate | Top-10 item 10 | 15 min | 2 |
| F4 | AI-bot hit counts | Proves crawlers come | **Not done** | Nate or agent | Vercel Log Drain ([docs](https://vercel.com/docs/drains)), or an agent-added middleware that logs only known bot user agents | 30 min | 1 |
| F5 | Tracking workflow | Weekly rank and LLM checks | **Broken.** Every run since July 1 fails with 403; no secrets | agent, Nate | Top-10 item 10; Nate adds `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `PERPLEXITY_API_KEY` as Actions secrets if wanted | 15 min | 2 |
| F6 | `prompts.csv` target URLs | Correct scoring | **Broken.** Points at routes that do not exist | agent | Top-10 item 10 | 15 min | 1 |
| F7 | HubSpot AEO prompts | Automatic multi-engine tracking | **Blocked** by HubSpot permissions | Nate + HubSpot admin | Request the AEO permission; load the 20 prompts | 20 min | 2 |
| F8 | Manual weekly log | Covers Gemini, Copilot, AI Mode | **Not started** | Nate | `geo/tracking/RUNBOOK.md` | 45 min/week | 2 |

---

## What the repo agents can do automatically every week

Safe, code-only work, always as a pull request that Nate reads and merges. Nothing auto-publishes
numbers.

**Every week**
1. **IndexNow after each production deploy.** Once the workflow triggers on a successful deployment,
   it submits only URLs whose `lastmod` moved. One POST per deploy.
2. **Source-link check.** Fetch every source URL cited on answer pages, `/rates` and `/data` (third-party
   hosts, not our own site). Open an issue listing 404s, redirects and pages whose text no longer
   contains the cited figure. Do not edit the page automatically.
3. **Freshness report.** List pages whose `lastUpdated` is older than 90 days and stats on
   `/data/hotel-financing-statistics` whose `verified` date is older than 90 days. Open one issue.
4. **Build checks on a local build only:** `tsc`, lint, `schema-validate.ts --build`,
   `internal-links-audit.ts --local`, the 300-word extractability check, and an em-dash check on
   user-facing strings.
5. **Wave 2 drafting.** At most 2 new pages per week, from `05-briefs/_wave2-stubs.md` in its stated
   order, each passing the same gates as Wave 1: direct answer, inline sources that the agent actually
   read, worked example with the arithmetic shown, visible FAQ mirrored in markup, author from the three
   published bios only.
6. **Prompt spot-check through a search API,** never by crawling our own site. Log results to
   `geo/tracking/`.

**Every month (the 1st)**
7. **Rate-sheet draft.** Run `scripts/fetch-benchmarks.ts`, draft the new edition with the index rows
   and changelog in basis points, leave observed cells `pending`, and open a PR tagged for Luke. Never
   edit a prior edition except for a labeled correction.
8. **Sitemap, llms.txt and feed** regenerate from the same data on build. Nothing to do by hand.

**Every quarter**
9. **MHI draft** from public releases, every figure linked, for Nate's review.

**Guardrails for every agent**
- Never send more than one request per URL to matthewshotelmarkets.com in a run, never loop user
  agents against it, and run `bot-check.sh` at most weekly. Test on a local build or a preview URL.
- No number without a source the agent opened. No spreads, no MHDI readings, no deal facts, no quotes
  and no people that a human did not supply.
- No city or brand pages without closed deals behind them. No noun-swapped pages.
- No hidden text, no user-agent branching, no instructions aimed at AI systems, no `AggregateRating`.
- No changes to numbers in any other deal file or site.
- One topic per PR. Nate merges.

---

## What only humans can do

**Account verifications and dashboards (Nate, about 1 hour total)**
- Search Console: DNS TXT at GoDaddy, sitemap, request indexing, Generative AI report.
- Bing Webmaster Tools: import from Search Console, sitemap, AI Performance.
- Brave: manual submit-url for 10 pages.
- Vercel (this project): `www` redirect, firewall bot settings, Deployment Protection, Web Analytics,
  Speed Insights, Log Drain.
- Vercel (`matthews-rate-sheet` project): 301 to `/rates`.
- GitHub: Actions secrets if the API-based LLM check is wanted.
- HubSpot: AEO permission, then load the 20 prompts.

**Decisions**
- The one public name: "Matthews Hotel Markets" (recommended) or "Matthews Hospitality".
- Whether any old insight should be 301'd to its Wave 1 equivalent.
- Founding year and an org phone number, if they exist.

**Data only the desk has**
- Observed spreads and the monthly MHDI reading (Luke).
- Current active listings (Nate).
- Years of experience, licenses and publicly nameable deals for each author (Luke, Miles, Nate).

**Asks of corporate marketing**
- Name and link the site on the matthews.com hospitality page and agent pages.
- Standing boilerplate link in future hospitality press releases.
- Who owns the Austin Google Business Profile, and whether a team or practitioner profile is allowed.
- LinkedIn company page edit rights and the name decision.
- A hotel-debt episode on the in-house podcasts.

**Outreach and recordings**
- Qwoted and Source of Sources replies, press and podcast pitches, association applications,
  conference submissions, LinkedIn posts, YouTube recordings, community answers. Every quote needs a
  real team member's approval.

**Reviews**
- Ask real clients, the same way every time, with no incentive and no filtering.

---

## Honest timeline

- **This week.** Nothing is visible until Google and Bing are verified and IndexNow actually fires.
  After that, Bing usually crawls submitted URLs within days. Google indexing of 30 new pages on a
  domain registered 2026-04-30 can take one to four weeks, and some pages may wait longer.
- **Weeks 2 to 6.** First impressions in Search Console, first rows in the Generative AI report and
  Bing AI Performance, most likely on narrow informational questions (SBA 7(a) vs 504, DSCR, broker
  fees). Copilot and ChatGPT citations can start here because they lean on Bing. Claude will lag until
  Brave indexes more than 2 pages.
- **Months 2 to 4.** If the rate sheet carries real observed spreads and is refreshed on the 1st, it is
  the page most likely to be cited by name for "current hotel loan rates". Without C2 it is a copy of
  public Fed and SBA numbers, and engines have no reason to prefer it.
- **Months 6 to 18.** "Who is the best hotel broker" and "who should I use to sell my Hampton Inn"
  answers are drawn from third-party sites that already name HVS, Marcus & Millichap, CBRE and others
  (checked today: 0 of 10 tracked prompts cited this site). Those only move after independent
  mentions accumulate: press quotes, podcasts, association listings, the matthews.com link and client
  reviews. That is human time, about 2 hours a week, not agent time.
- **What would slow all of this:** a stale rate sheet, a firewall challenge on AI crawlers, and
  profiles that use a different name from the site.

---

## Sources used (operator documents first)

- Google: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features);
  [Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
  (May 2026, [announcement](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing));
  [Generative AI performance report](https://support.google.com/webmasters/answer/16984139?hl=en);
  [Business Profile guidelines](https://support.google.com/business/answer/3038177);
  [Review policy](https://support.google.com/contributionpolicy/answer/7400114);
  [Verify site ownership](https://support.google.com/webmasters/answer/9008080?hl=en).
- Microsoft: [AI Performance in Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview);
  [June 2026 AI visibility update](https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare);
  [AI Performance help](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c);
  [Import from Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools).
- OpenAI: [Crawlers](https://developers.openai.com/api/docs/bots);
  [Publishers and developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
  (403 to my fetch; content confirmed via search summary).
- Anthropic: [Crawlers and blocking](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler).
- Perplexity: [Bots](https://docs.perplexity.ai/guides/bots).
- Apple: [About Applebot](https://support.apple.com/en-us/119829).
- IndexNow: [Documentation](https://www.indexnow.org/documentation).
- Vercel: [Drains](https://vercel.com/docs/drains).
- Rates: [CNBC, FOMC 9/16/2026](https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html);
  [Fed implementation note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a1.htm).
- Third party, labeled as such where used: TechCrunch and Xponent21 on Claude and Brave; Seer
  Interactive on ChatGPT and Bing; Search Engine Journal on Meta AI; 9to5Google on Siri and Gemini;
  Birdeye for the existing Austin Google listing.
