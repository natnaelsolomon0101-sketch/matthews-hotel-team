# 14. Technical SEO pass: speed, metadata, crawl hygiene

Run date: 2026-09-18. Role: `seo-tech`. Branch: `agent/seo-tech/2026-09-18c`.

Everything below was measured against a local production build
(`npm run build && npx next start`). No request was sent to
matthewshotelmarkets.com. The "before" build is `origin/main` at the start of
the run, built in a scratch directory and served side by side with the branch.

## 1. Speed

### What was actually slow

Lighthouse mobile reported an LCP of 3.5 to 4.1 s on every template, with FCP
at 0.9 s. The gap was not the LCP element itself. It was what shared the
connection with it:

1. **Three preloaded fonts, 198 KB.** `next/font` preloads every font by
   default. Inter (49 KB) is the body face. The other two were Fraunces roman
   (68 KB) and Fraunces italic (82 KB), which the site uses only for monograms,
   process step numerals, one pull quote and the "Q1 2026" numeral at the
   bottom of the home page. None of that is above the fold on any template,
   but all of it was fetched at High priority ahead of the LCP element.
2. **framer-motion on every page, about 43 KB of JavaScript.** `SiteHeader`
   imported it for one thing: the fade of the mobile drawer. Because the header
   is on every page, so was the library. First Load JS was 176 kB on `/rates`
   and 182 kB on `/`.
3. **The home hero was a client component that server-rendered its H1 and copy
   at `opacity: 0`.** The text stayed invisible until the JS bundle downloaded
   and hydrated, and a reader or crawler without JavaScript never saw it
   become visible.
4. **The hero photo** (the home LCP element) was served at quality 88 under a
   55 to 78 percent black wash, and its preload carried no `fetchpriority`.

The real LCP elements: home, the hero `<img>`; answer pages and franchise-cost
pages, the first paragraph under the H1; `/rates`, the sources paragraph;
`/listings`, the first listing card photo (which is `loading="lazy"`).

### What changed

| Change | File |
|---|---|
| Fraunces: `preload: false` (still `display: swap`; loads when a rule that uses it matches). Inter keeps its preload. | `src/app/layout.tsx` |
| Mobile drawer: framer-motion `AnimatePresence` replaced with CSS keyframes (`drawer-in/out`, `scrim-in/out`) plus one mounted flag. Same offsets, durations, easing, enter and exit. framer-motion is gone from every page that does not use `Counter` or the listing gallery. | `src/components/layout/SiteHeader.tsx`, `src/app/globals.css` |
| Home hero is now a server component. Entrance animation is the CSS `hero-rise` keyframes, copied from the `heroH1` / `heroBody` / `heroCta` presets, so it starts at first paint and the text is never parked at opacity 0. Scroll cue bounce is CSS. | `src/components/sections/home/HomeHero.tsx`, `globals.css` |
| Hero photo split into a 40-line client component: `priority`, `fetchPriority="high"`, `sizes="100vw"`, quality 88 to 75 (AVIF 35 KB to 21 KB at the 750w mobile candidate, 277 KB to 170 KB at 1920w). The 1.00 to 1.05 parallax is a passive scroll listener; at scrollY 400 both builds produce `scale(1.02513)`. | `src/components/sections/home/HeroPhoto.tsx` |
| Home stats: `Counter` (framer-motion) replaced on the home page only with `HomeStatValue`, same 8px/600ms fade-up on first view, but server-rendered visible, so the figures never depend on JavaScript to appear. The strings are rendered exactly as passed in. | `src/components/sections/home/HomeStatValue.tsx`, `HomeStats.tsx` |

First Load JS (from `next build`): `/` 182 kB to 134 kB, `/rates` 176 kB to
133 kB, `/tools/refinance-vs-sell` 178 kB to 136 kB.

### Lighthouse, mobile, before and after

Default Lighthouse settings (simulated slow 4G, 4x CPU). Median of 3 runs
before, 5 runs after. Times in ms. CLS and TBT were 0 on every page in both
builds.

| Page | Perf before | Perf after | LCP before | LCP after | FCP before | FCP after |
|---|---|---|---|---|---|---|
| `/` | 90 | 94 | 3,690 | 3,010 | 905 | 1,360 |
| `/hotel-financing/refinance` | 91 | 98 | 3,464 | 2,455 | 906 | 906 |
| `/rates` | 91 | 98 | 3,462 | 2,453 | 905 | 905 |
| `/listings` | 87 | 96 | 4,139 | 2,756 | 906 | 906 |
| `/hotel-franchise-costs/hampton-inn` | 91 | 98 | 3,461 | 2,455 | 905 | 905 |

SEO is 100 on all five pages before and after. Accessibility is unchanged (96
home, 93 answer pages, 83 `/listings`).

The same two builds with throttling applied for real in Chrome
(`--throttling-method=devtools`), median of 3, because the simulated numbers
are a model and the home page result needs a second opinion:

| Page | LCP before | LCP after | Speed Index before | Speed Index after |
|---|---|---|---|---|
| `/` | 2,116 | 1,596 | 2,368 | 1,638 |
| `/hotel-financing/refinance` | 1,556 | 1,532 | 1,585 | 1,557 |
| `/rates` | 1,581 | 1,552 | 1,602 | 1,568 |

Honest reading of the home page: text templates are now under the 2.5 s target
in the simulated run. The home page is not (3.0 s simulated), although it is
0.7 s faster and is 1.6 s with applied throttling. Its simulated FCP went up
from 0.9 to 1.4 s. The cause is the model, not the page: the home page still
uses Fraunces for the "Q1 2026" numeral at the bottom, the browser now
discovers that font from the stylesheet rather than from a preload, and
Lighthouse's simulator counts a font discovered that way against first paint.
With applied throttling FCP is unchanged (1,570 to 1,536 ms). Raw summaries are
in `geo/14-seo-tech/lighthouse-*.json`. Local numbers exclude Vercel's edge and
real network distance, so compare deltas, not absolutes, with the 2.7 s seen
in production.

Reproduce: `bash scripts/lighthouse-local.sh http://localhost:<port> <out-dir> [runs]`
(refuses any host that is not localhost).

### Same look

`geo/14-seo-tech/home-{mobile,desktop}-{before,after}-{fold,full}.jpg` and
`home-mobile-{before,after}-drawer.jpg` (390x844 at 2x and 1440x900, captured
with Puppeteer against both builds). The folds and the open drawer are
visually identical.

## 2. Metadata audit

`scripts/metadata-audit.mjs` crawls every URL in the local sitemap and reports
title (length, duplicates), description (length, duplicates, missing), H1
count, canonical, og:title / og:description / og:image, robots meta, html
lang, hreflang, images without alt, heading skips, BreadcrumbList, trailing
slashes, redirected internal links and the 404 page. `--verbose` lists the
warnings, `--json <file>` writes the per-URL table.

It is wired into `scripts/geo-check.sh` and **fails the gate** on: a sitemap
URL that is not 200 or is redirected, missing title, missing description,
duplicate title, not exactly one H1, canonical missing or not
self-referential, noindex on a sitemap URL, missing `<html lang>`, an `<img>`
with no alt attribute, an internal link to a `vercel.json` redirect source or
to a 404, and an unknown path that is not a real 404 with nav and hub links.
Length problems are warnings.

| 229 sitemap URLs | Before | After |
|---|---|---|
| Gate-level failures | 6 | 0 |
| Titles over 60 characters | 222 | 9 |
| Titles over 70 characters | 217 | 2 |
| Duplicate titles | 1 | 0 |
| Descriptions over 160 | 13 | 2 |
| Descriptions under 120 | 30 | 30 |
| Duplicate descriptions | 1 | 0 |
| Pages with no og:image | 125 | 0 |
| Pages with no BreadcrumbList (home excluded) | 0 | 0 |
| Canonical missing or wrong | 0 | 0 |
| hreflang | none | none |

### What was wrong and the fix

- **The brand was in almost every title twice.** The root layout's template is
  `%s | Matthews Hotel Markets`, and most routes also typed the brand into
  their own title, so pages shipped
  `How to Value a Hotel: The Math, Step by Step | Matthews Hotel Markets | Matthews Hotel Markets`
  (90 to 120 characters). New `src/lib/seo-meta.ts`: `seoTitle()` returns an
  absolute title, strips any brand the route typed, and fits 60 characters by
  preferring `<title> | Matthews Hotel Markets`, then `<title> | Matthews`,
  then the title alone. It never cuts or rewrites the page's own words. Applied
  in `answerMetadata()` (every answer and tool page) and 30 route files.
  og:title and twitter:title keep the full title with the brand once.
- **Duplicate title:** `/rates` and `/rates/2026-09`. The archive edition is
  now `September 2026 Hotel Loan Rate Sheet (Archive)`.
- **Duplicate description:** `/` and `/about` both used the 262-character
  boilerplate. Home now has a 152-character description made of the
  boilerplate's own facts; `/about` uses `BOILERPLATE_SHORT` from `entity.ts`.
  Schema and visible copy still use the full boilerplate.
- **Overlong descriptions** on `/closed`, `/contact`, `/listings`, `/team`,
  `/developers`, `/process`, `/press`, `/services` and the statistics page
  were shortened by deleting words only. Nothing was added and no figure
  changed. One deletion to flag: `/process` ended with "Refined across hundreds
  of completed transactions", which has no source in `closed.ts` (38 deals); it
  was the part that went.
- **Home title** 68 to 59 characters:
  `Matthews Hotel Markets | Hotel Investment Sales & Financing`.
- **125 pages had no og:image.** A route that sets its own `openGraph` object
  replaces the parent's and loses the file-based site image. Those routes now
  spread in `DEFAULT_OG_IMAGES`.
- **The generated OG images were broken.** Every `opengraph-image.tsx` except
  `/rates` returned an empty response locally: Satori rejects a `<div>` with
  more than one child unless it is `display: flex`, and JSX such as
  `{office.city}, {office.state}` is three children. Fixed in all nine files
  with template strings (and word-level flex items for the two-tone home
  headline). All return 200 PNGs now. This very likely affects production too;
  the owner check is in section 6.
- **Closed-deal and glossary titles** fall back to shorter phrasings
  (`seoTitleFrom`): drop the repeated city, then the state; "definition &
  example".

### Still over the line, deliberately

- 9 titles over 60 (2 over 70): long deal names in `closed.ts` and insight
  headlines in the insights data. Shortening them means rewriting content that
  is not this role's.
- 30 descriptions under 120 characters: listing, closed-deal and team
  descriptions built from data fields. Padding them would mean inventing copy.
- 2 descriptions over 160: `/tools` (161) and
  `/tools/hotel-loan-sizing-calculator` (172) come from the tools data and
  feed the Markdown twins.
- Year in titles: the time-sensitive pages already carry it (rate sheet month,
  "2026" on statistics, outlook, franchise-cost and maturity pages). None added.

## 3. Crawl hygiene

- **404 page.** There was no `not-found.tsx`; unknown URLs got Next's bare
  "404: This page could not be found." with no navigation. New
  `src/app/not-found.tsx`: header, footer, one H1, links to all answer hubs,
  rates, tools, glossary, listings, closed and contact. Returns HTTP 404 with
  `noindex`. No soft 404s found.
- **Eight dynamic routes rendered their 404 body only after JavaScript ran**
  (`glossary/[term]`, `closed`, `markets`, `offices`, `services`, `insights`,
  `hotels-for-sale`, `research/mhi/[quarter]`). Status was already 404. They now
  set `dynamicParams = false` like the answer clusters, so the server sends the
  full 404 page. Every valid slug comes from `generateStaticParams`; all 229
  sitemap URLs still return 200.
- **Sitemap.** `/research/mhi` was listed but is a 307 to the newest quarter.
  Removed from `sitemap.ts` (the quarter pages are listed). All 229 remaining
  URLs return 200 with no redirect.
- **Trailing slashes.** No sitemap URL or internal link has one; `/rates/`
  redirects to `/rates` (308).
- **Links to redirected URLs.** No internal link points at a `vercel.json`
  redirect source. Two in-app redirects are linked on purpose and left alone:
  `/research/mhi` (stable alias, in the footer and six pages) and
  `/listings/walden-retreats-hill-country` (307 to the external offering site).
- **Alt text.** Every `<img>` has an alt attribute. One is empty: the home hero
  photo, which is decorative and inside `aria-hidden`.
- **Heading levels.** Answer, tool, glossary-term, rates and franchise-cost
  templates do not skip. 15 pages go h1 to h3, for two reasons, both outside
  this role's files and reported rather than changed: the footer column titles
  are `<h3>` (`SiteFooter.tsx`, owned by another agent this push), and the card
  grids on `/closed`, `/listings` and `/team` use `<h3>` directly under the H1.

## 4. Structured data extras

- **WebSite SearchAction:** not added. The site has no on-site search, and
  schema for a feature that does not exist is forbidden by `geo/AGENTS.md`.
- **BreadcrumbList:** present on all 228 non-home sitemap URLs (checked by the
  audit on every run; a missing one is a warning).
- **speakable:** not added. Google's documentation, read 2026-09-18
  (https://developers.google.com/search/docs/appearance/structured-data/speakable),
  says the feature "is in beta and subject to change" and "works for users in
  the U.S. that have Google Home devices set to English". No assistant this
  project targets documents using it.

## 5. Deliberately not changed

- `experimental.inlineCss` was tried and reverted. It removed the one
  render-blocking stylesheet, but Next writes the CSS into the HTML and again
  into the RSC payload: gzip HTML went from about 26 KB to 66 KB, the home page
  gained 0.3 s and the text templates lost 0.15 s. `next.config.ts` is
  unchanged.
- `/listings` LCP is a `loading="lazy"` card photo. Giving the first card
  `priority` is a one-line win in the listings grid, which is not in this
  role's files. Same for `/listings` accessibility (83): contrast on 109 nodes,
  list and ARIA role structure in the filter bar.
- `src/components/ui/Counter.tsx` still uses framer-motion on `/closed` and
  team pages.
- Fraunces still loads on pages that use it, including the bottom of the home
  page. Removing it there is a design decision.
- No number, rate, SBA figure, answer content, footer or `entity.ts` edit.

## 6. Only the owner can do these

1. **Google Search Console:** verify the domain property, set
   `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel, submit `/sitemap.xml`, then watch
   Pages > "Duplicate without user-selected canonical" and Core Web Vitals
   (field LCP is the number that matters; this report is lab data).
2. **Bing Webmaster Tools:** import from GSC, set
   `NEXT_PUBLIC_BING_VERIFICATION`, submit the sitemap. Bing's index feeds
   Copilot and ChatGPT search.
3. **Brave Search:** no webmaster console exists; check `site:matthewshotelmarkets.com`
   on search.brave.com after the deploy and use their feedback form if the
   site is missing.
4. **www to apex 301:** in Vercel > Domains, make sure
   `www.matthewshotelmarkets.com` is attached and set to redirect (308/301) to
   the apex, so there is one canonical host.
5. **After this merges, open one OG image in a browser**, for example
   `https://matthewshotelmarkets.com/opengraph-image`, and paste one page URL
   into the LinkedIn Post Inspector. If production was returning empty images,
   LinkedIn and iMessage previews have been blank and will need a re-scrape.
6. `matthewsratesheet.info` 301 to `/rates` (already open in `geo/08-data.md`).
