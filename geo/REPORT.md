# Matthews Hotel Markets: AI visibility pass, report for Nate

Branch `geo/ai-visibility`, 2026-09-18. Detail lives in `geo/10-qa.md` (every check and change) and the
`geo/0*` files (each agent's work).

**None of this is live until you merge and deploy.** Production has not been redeployed since
2026-07-18, so the live site is still the July build.

---

## What only you can do, in order

1. **Merge the PR and deploy.** Then run `scripts/bot-check.sh` against production, but only once,
   not in a loop: repeated runs tripped Vercel's bot challenge on 9/17. You should see 18/18 pass.
2. **Vercel dashboard.**
   - Firewall: Bot Protection, Attack Challenge Mode and any managed AI-bot ruleset must not
     challenge the bots in `geo/01-bot-uas.txt`.
   - Deployment Protection: off for production.
   - Domains: make `www.matthewshotelmarkets.com` a 301 to the apex. Today it serves a duplicate
     copy with a 200.
3. **Google Search Console and Bing Webmaster Tools.**
   - Verify the domain in both. You can paste each token into the `NEXT_PUBLIC_GSC_VERIFICATION` /
     `NEXT_PUBLIC_BING_VERIFICATION` env vars, or use DNS.
   - Submit `/sitemap.xml` in both.
   - Confirm IndexNow submissions appear in Bing. Bing feeds ChatGPT search and Copilot, which
     makes this the highest-value 10 minutes on the list.
4. **Decide the rate-sheet canonical. Recommendation: yes, 301 matthewsratesheet.info to `/rates`.**
   Two Matthews-branded rate sheets currently disagree: that site shows the 10-year at 5.01%, `/rates`
   shows 4.94%. The header nav already points at `/rates`. The redirect is a Domains action on the
   separate `matthews-rate-sheet` Vercel project.
5. **Update the rate sheet monthly, starting October 1.** The runbook is in `geo/08-data.md`; a GitHub
   issue opens on the 1st.
   - The first refresh has two known moves: Prime goes to 7.00% and the 7(a) cap to 10.00% (the Fed
     raised the target range on 9/16), and SOFR printed 3.85% for 9/17.
   - Re-check the SBA 504 figures when SOP 50 10 8.1 takes effect on October 1.
   - An unmaintained rate sheet is worse than none.
6. **Supply observed spreads.** You and Luke need to provide them for the bank, CMBS, life company,
   bridge and construction rows, plus the first reading of the Matthews Hotel Debt Index.
   - The floor is three independent quotes per cell before it publishes.
   - Until then 40 of 49 cells say "not yet published", honestly.
   - Those same numbers are what the answer pages now leave out. The typical DSCR, LTV and spread
     ranges came off 20+ pages because no public source publishes them.
7. **One internal ask:** get the matthews.com hospitality page to link to matthewshotelmarkets.com.
   It is the strongest link available.
8. **Profiles.**
   - Update the LinkedIn company page and each team profile with the exact strings in
     `geo/03-entity.md`.
   - Google Business Profile, Bing Places and Apple Business Connect for the Austin office need
     corporate marketing sign-off first.
9. **Off-site.** Run `geo/09-offsite/90-day-calendar.md`: at most 2 hours a week, week 1 is ready
   to execute. It covers the wire release, the LinkedIn series, pitches, YouTube scripts and
   community answers. Every quote in the drafts is a placeholder for a real team member to approve.
10. **Measure weekly.**
    - Run the 45-minute prompt log in `geo/tracking/RUNBOOK.md` and load the 20 listed prompts into
      HubSpot AEO tracking.
    - Counting AI-bot hits needs a Vercel Log Drain. User agent is not searchable in Vercel's log UI.
11. **After each schema-touching deploy,** paste 5 URLs into Google's Rich Results Test and the
    Schema.org validator. The list is in `geo/03-entity.md`.

## Before and after

| | Before (live, 9/17) | After (this branch, local production build) |
|---|---|---|
| AI bot access | Clean: 15 bots got identical 200s | Unchanged. Explicit per-bot allow groups in robots.txt; 18/18 user agents pass `bot-check.sh` |
| Index status | `site:` query showed 2 of 120 URLs. matthews.com outranks the site on its own brand name. | Unknown until GSC/BWT are verified (item 3) |
| Generic "who/how" prompts where the site appears (20 seed prompts) | 0 of 12 generic prompts; only the 8 that contained "Matthews" | Re-measure 2 to 4 weeks after indexing |
| Pages that answer a question in the first 300 words (number + date + brand) | 0 purpose-built answer pages | **34**: 30 Wave 1 pages plus `/rates`, `/data`, `/about`, `/press` |
| Structured data | A connected graph hand-written in `layout.tsx`; 6 name variants for one entity | One `@graph` per page from `src/lib/entity.ts`; 157/157 blocks valid |
| Original data | None on-domain (the rate sheet lived on a `.info` domain) | `/rates` (Dataset JSON-LD, JSON and CSV endpoints, archive, methodology), the Matthews Hotel Debt Index (defined; first reading pending), 54 sourced statistics on `/data/hotel-financing-statistics` |
| Contradictions | $84.3B vs $88.37B vs "$890M+ as of Q4 2021"; "Last refresh Q1 2026" in September; unsourced 670+, 1M+ and "founded 2024" | One sourced figure set with as-of dates in `src/lib/track-record.ts`. The unsourced figures are gone; the listings date comes from data. |
| Sourcing on answer pages | n/a | Every number is cited inline to a source that was read, or it was removed. An independent 25-citation check found 0 unsupported claims, 7 partial; the 4 material partials were fixed. |
| Internal links | `/glossary`, `/research`, `/services/*` and `/offices/*` orphaned | 0 orphans, 0 missing expected links across 158 pages |
| Sitemap `lastmod` | Build timestamp on 113 of 120 URLs | Real authored dates on 159 URLs |
| llms.txt / feed / IndexNow | Static llms.txt with unsourced claims; no feed; no IndexNow | All generated from the same data as the sitemap |
| Lighthouse mobile | Home 2.7s LCP (production) | New pages 3.4 to 3.5s locally, where home reads 4.1s, so roughly 2.1s in production (an estimate). CLS 0. Less initial JS than the home page. |

## What shipped

- **30 Wave 1 pages.** Hubs `/hotel-financing` (14 spokes), `/sell-a-hotel` (5), `/hotel-valuation`
  (4), `/tools/dscr-calculator`, and glossary terms DSCR, debt yield and NOI. Each one has:
  - a direct answer and takeaways;
  - question-form H2s;
  - a table and a worked example with the arithmetic shown (three arithmetic errors were caught and
    fixed);
  - a visible FAQ mirrored in `FAQPage` markup;
  - an author box (Luke, Miles or you only);
  - numbered sources;
  - one CTA to `/contact`.
- **`/rates`, `/rates/methodology`, `/rates/2026-09`, `/rates.json`, `/rates.csv`,
  `/data/hotel-financing-statistics`.** Public benchmarks only, each with its source and date.
- **New pages:** `/about`, `/team/[slug]` for the three bios, `/press`, and index pages for
  `/markets`, `/services` and `/hotels-for-sale`, which replace temporary redirects to one arbitrary
  child page.
- **Plumbing:** per-bot robots.txt, sitemap, llms.txt and llms-full.txt, RSS feed, IndexNow key and
  script, `bot-check.sh`, and the monthly rate reminder workflow.
- **Cleanup:**
  - 89 em-dashes removed from site copy.
  - A hidden keyword H1 on `/team` replaced by a visible one; it predated this work and broke the
    no-hidden-text rule.
  - The Walden listing dropped from the sitemap, because it redirects to its OM site.
  - The three `HUMAN_QUEUE.md` fact disputes closed: $30B CMBS, Scottsdale RevPAR, AHLA room nights.
- **Off-site kit** in `geo/09-offsite/`: 100+ targets, press release, LinkedIn series, guest-post and
  podcast pitches, YouTube scripts, directory strings, Reddit/Quora playbook, 90-day calendar.
- **Tracking:** 265-prompt universe (`geo/04-queries.csv`), 60 tracked prompts, log template, runbook.

## Known gaps (not blocking the merge)

- **Per-item dates.** Market pages still show no "last updated" date. Listings, closed deals and team
  data share one per-file date instead of per-item dates.
- **Wave 2 is briefed but not written:** the remaining financing spokes, market pages, 60+ glossary
  terms and three more calculators. Stubs are in `geo/05-briefs/_wave2-stubs.md`.
- **No real-user speed data yet.** Lab LCP needs confirming with field data (Speed Insights or the
  CrUX report in GSC) after deploy.
- **Denver** has no confirmed street address, so it appears only as `areaServed`, not as an office
  entity.

## 30 / 60 / 90

- **Days 1 to 30.**
  - Deploy; do items 2 to 4 and 7.
  - First monthly rate refresh on October 1, with at least the benchmark rows.
  - Send the wire release.
  - First four weekly prompt logs, to set the baseline.
- **Days 31 to 60.**
  - First observed-spread cells and the first MHDI reading.
  - Start Wave 2: the next 10 pages by the priority in `geo/04-queries.md`.
  - Guest-post and podcast pitches go out.
  - Check GSC for AI Overview impressions and Bing for crawl of the new URLs.
- **Days 61 to 90.**
  - Market pages, only for markets with real deal data.
  - Remaining calculators.
  - Compare the brand-mention and citation rates from weeks 1 to 4 against weeks 9 to 12.

## How to judge it, and when

- **Two weekly KPIs, per engine** (ChatGPT, Claude, Gemini, Perplexity, Copilot, Google AI Mode):
  - **Brand-mention rate:** the share of the 60 prompts whose answer names Matthews Hotel Markets.
  - **Citation rate:** the share that links the site.
- **Search-grounded citations can move within weeks of indexing.** That clock starts at deploy plus
  GSC and Bing verification, not at merge.
- **Model recall of the brand without search takes two to six quarters** of independent mentions: wire
  pickups, trade press, podcasts, LinkedIn, Reddit. The off-site calendar is the only lever for that,
  and it runs on your time, not the agents'.
- **The rate sheet is the engine only if it is updated every month.** It is the page most likely to
  make an assistant say the brand's name, and the fastest way to lose that is a stale September
  number in December.
