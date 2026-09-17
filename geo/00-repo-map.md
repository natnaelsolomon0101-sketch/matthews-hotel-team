# geo/00-repo-map.md — orchestrator, Phase 0 (2026-09-17)

**Read this before anything else. The mission brief's §2 "verified facts" was written from
the live site and is materially incomplete. This file supersedes it where they disagree.**

## Repo identity
- Local clone: `/Users/nate/Projects/matthews-hotel-team` (cloned this session; no clone existed before).
- GitHub: `natnaelsolomon0101-sketch/matthews-hotel-team` (public), default branch `main`, HEAD `a759f67`.
- Working branch for this run: `geo/ai-visibility`.
- A second repo, `natnaelsolomon0101-sketch/matthewshotelmarket`, is a one-page stub. **Not the site. Ignore it.**
- Live/code check: PASS. `/llms.txt` is byte-identical live vs. repo; every route in the build output
  resolves live. The repo is the source of truth — no CLI-divergence problem here.

## Stack
- Next.js **15.5.15**, **App Router**, React 19.1.0, TypeScript, Tailwind v4, Turbopack build.
- `npm run build` is **green on main** (verified before branching). No test script exists; `npm run lint` = `eslint`.
- Deployed on Vercel. `vercel.json` already sets cache headers + 12 redirects (read it before adding any).
- `next.config.ts`: images allow `cms.matthews.com` remote pattern; `poweredByHeader: false`; no custom headers there
  (headers live in `vercel.json` — **Agent 2: append to `vercel.json`, not `next.config.ts`**).

## Rendering
Build output shows nearly everything is **static or SSG**. Dynamic (`ƒ`) routes are only OG-image
routes and `/api/*`. This is good news: the "client-only content is invisible to crawlers" risk is low.
Agent 1 must still verify per-route in raw HTML, but expect PASS.

## Routes that already exist (far more than §2 claimed)
```
/  /listings  /listings/[slug]  /closed  /closed/[slug]  /team  /team/[slug]
/insights  /insights/[slug]  /process  /contact
/glossary  /glossary/[term]          <- ALREADY EXISTS
/markets/[city]  (austin-tx, dallas-tx, houston-tx, +11)   <- ALREADY EXISTS, slug is city-ST
/hotels-for-sale/[brand]             <- ALREADY EXISTS
/services/[slug]  (investment-sales, capital-markets, acquisition-advisory)
/offices/[slug]   (austin, denver)   <- a Denver office page EXISTS; check it for a real address
/research  /research/mhi  /research/mhi/[quarter] (q1-2026)  <- an existing named research index
/robots.txt  /sitemap.xml  /opengraph-image  /api/contact  /api/revalidate
```
**Confirmed missing (real greenfield): `/about`, `/rates`, `/data/*`, `/tools/*`, `/press`,
and the entire `/hotel-financing/*` and `/sell-a-hotel/*` and `/hotel-valuation/*` clusters.**

## Data sources
Plain TypeScript modules under `src/lib/data/` — no CMS, no MDX.
`listings.ts` (42KB), `closed.ts`, `insights.ts` + `insights-articles/`, `markets.ts`, `brands.ts`,
`team.ts`, `services.ts`, `offices.ts`, `process.ts`, `mhi.ts`, `glossary/`.
New content should follow this pattern (typed TS modules), not introduce a CMS.

## Team (do not invent people) — CORRECTED 2026-09-17 after Agent 4 flagged it
`src/lib/data/team.ts` exports **22 real people**. Three have `hasBio: true` and therefore get
detail pages: **luke-thompson, miles-cortez, nate-solomon**. The other **19 are generated as lite
cards** (`hasBio: false`, see the `.map()` near line 233) and render on `/team` as photo + name +
title only, with no bio page. `generateStaticParams` filters on `hasBio !== false`, which is why the
build prerenders exactly 3 `/team/[slug]` routes.

**What this means in practice:**
- **Authors and reviewers on answer pages must be one of the three with bios.** The other 19 have no
  bio, no `knowsAbout` data, and no verified LinkedIn in the repo.
- **Person JSON-LD:** the 19 lite members ARE visible on `/team` with name and title, so minimal
  `Person` nodes for them mirror visible content and are legitimate. Do not invent `sameAs`,
  `knowsAbout`, or bios for them. If the repo has no LinkedIn URL for a person, omit `sameAs`.
- Do not write "a three-person team" anywhere. It is a 22-person team, three of whom are published
  in depth.
`vercel.json` 301s `/team/sarah-chen`, `/team/marcus-reyes`, `/team/elena-park` → `/team`.
Those three were fabricated personas that a previous pass removed. **Never re-create them.**

## Existing SEO/GEO infrastructure — extend, do not duplicate
- `src/app/robots.ts` — **single `User-agent: *` rule only. No per-bot Allow groups.** Agent 2's core job is real.
- `src/app/sitemap.ts` — generated from the data modules (good) but uses `lastModified: new Date()`
  on every entry (**the exact anti-pattern the brief calls out — P1, Agent 2**).
- `public/llms.txt` — exists, hand-written static file, **not generated from the data modules → will drift**.
  No `llms-full.txt`. No `feed.xml`. No IndexNow key.
- JSON-LD exists on 13 route files + `src/lib/seo/faq.ts`, but it is **inlined per page with no shared
  entity source and no `@graph`**. Agent 3 refactors to `lib/entity.ts` + `@graph`; it is a refactor, not a greenfield build.

## A PRIOR GEO SPRINT ALREADY RAN (2026-05-10) — this is the biggest deviation from the brief
The repo contains completed work that overlaps Agents 4, 9, and parts of 2/3:
- `reports/query-universe.md`, `priority-targets.md`, `citation-patterns.md`, `competitor-matrix.md`,
  `content-production-list.md`, `link-targets.md`, `schema-validation.json`, `sprint-log.md`, `article-fact-check.md`
- `scripts/llm-citation-check.ts`, `rank-check.ts`, `schema-validate.ts`, `internal-links-audit.ts`
- `.github/workflows/seo-tracking.yml`
- `content/outreach/` (15 ready-to-send pitch files), `content/pr/`, `content/linkedin-drafts/`,
  `content/wikidata/`, `content/wikipedia/`, `content/insights-drafts/`
- `HUMAN_QUEUE.md` — an existing Nate to-do list, including **unresolved factual disputes**
  (a $30B vs. $18.7B Trepp figure used 6 times; an unverified Scottsdale RevPAR number; an unverified AHLA figure).

**Binding instruction to every agent:** read the prior artifact in your lane *first*, then write a
delta. Agent 4 extends `reports/query-universe.md` rather than inventing a parallel one. Agent 9
extends `content/outreach/` rather than duplicating it. Agent 10 must reconcile `HUMAN_QUEUE.md`
into `geo/REPORT.md` instead of producing a competing to-do list — and must treat the open
fact-check disputes above as P0 (an unsourced number on a page we are pushing engines to cite is
the worst possible failure mode for this project).

## Known contradictions to hand Agent 1 (start here, then find more)
- `public/llms.txt` says platform cumulative **$84.3B**; the brief reports the homepage body says **$88.37B**.
- `llms.txt` claims "Founded as a dedicated hospitality vertical in 2024" and "670+ hotel transactions" — needs a source.
- Homepage track record reportedly still reads "As of Q4 2021".
- Listings block reportedly claims "Last refresh Q1 2026" in September 2026.
- Footer "Press" links to `/insights`; no `/press` route exists.
- `llms.txt` asserts "a Denver presence" and `/offices/denver` exists — Agent 3 must check whether a
  real street address backs it before emitting any Denver `LocalBusiness` node.
