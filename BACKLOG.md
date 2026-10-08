# BACKLOG: the 77-item SEO + LLM blitz prompt, item by item

Audited 2026-10-08 against `main` at `bad9ed7` (live on production since 2026-10-07 14:36 UTC).
Most of this prompt already ran on 2026-05-10 (`reports/sprint-final.md`), and the 9/18 GEO passes
built on it. The binding rules are `geo/AGENTS.md`, `geo/05-architecture.md` and the
service list in `geo/content-queue.md` section N. Where the prompt and those rules disagree, the
rules win, and the item says so below.

Status key: **Live** = on production now. **This PR** = in the 2026-10-08 integration PR.
**Rule** = not built because a site rule forbids it. **Human** = see `HUMAN_QUEUE.md`.
**Backlog** = could be built; the reason it was not is given.

## A. On-site SEO and GEO

| # | Item | Status |
|---|---|---|
| 1 | Technical audit | Live as scripts in the gate: `schema-validate.ts`, `metadata-audit.mjs`, `sitemap-check.mjs`, `internal-links-audit.ts`. This file is the audit of the prompt itself. |
| 2 | opengraph-image per dynamic route | Live on 10 route families (home, listings, closed, insights, team, markets, hotels-for-sale, services, offices, rates). **This PR:** the 44 SBA state pages had no og:image (the metadata audit flagged 45); they now use the site default, like their hub. |
| 3 | JSON-LD `@graph` | Live: one writer, `src/components/seo/JsonLd.tsx`, facts from `src/lib/entity.ts`. |
| 4 | Listing schema | Live: `RealEstateListing` with `businessFunction`. |
| 5 | `additionalType: FinancialService` | Live. |
| 6 | llms.txt | Live, generated from the data modules (plus llms-full.txt, Markdown twins, `/mcp`, `/openapi.json`). |
| 7 | ai.txt, humans.txt | **This PR.** Generated from `src/lib/content-signals.ts` (shared with robots.txt) and `team.ts`. |
| 8 | Image sitemap | Live. |
| 9 | Speculation rules | Backlog, low value: about 42 components navigate with `next/link` (client-side), so a prerendered document is never used for those clicks. Revisit only if plain `<a>` navigation becomes common. |
| 10 | fetchpriority on LCP | Live on the hero. |
| 11 | Cache headers | Live in `vercel.json`. |
| 12 | Revalidate webhook | Live: `/api/revalidate`. |
| 13 | Schema validation log | Live: `reports/schema-validation.json`, run by the gate. |
| 14 | 404 redirect map | Human: redirects are owner-only (skill section 9). A real 404 page is live. |
| 15 | hreflang for Spanish | Rule: no Spanish pages exist, and hreflang pointing at missing pages is invalid markup. Build it with the first Spanish page. |
| 16 | Canonical chains | Live: the gate checks every sitemap URL is self-canonical with no redirect. The `www` duplicate is Human item 3. |

## B. Programmatic pages

| # | Item | Status |
|---|---|---|
| 17 | 20 metros | 14 live. Rule: fort-worth, raleigh, scottsdale, jacksonville, las-vegas and salt-lake-city have **zero** deals in `closed.ts` or `listings.ts`, and metros without transactions are the doorway pattern (`geo/05-architecture.md` 5.2). Backlog: `bozeman-mt`, `fort-collins-co` and `tulsa-ok` have closings but are blocked because the template requires a cap-rate block no public source publishes for them. Fix: make `capRateRange` and `adrCommentary` optional in `Market`, then write those three. |
| 18 | 10 brand pages | 9 live. Backlog: Radisson has 4 closings in `closed.ts`, so it qualifies; it needs an FDD-sourced write-up. Rule: G6 and Sonesta have no deals. |
| 19 | 6 segment pages | Rule: "Do not build a `/segments` tree" (`geo/05-architecture.md`). Select vs full service is answered at `/hotel-valuation/select-service-vs-full-service`. |
| 20 | 5 service pages | 3 live. BOV is `/hotel-valuation/broker-opinion-of-value` and refinancing is `/hotel-financing/refinance`; second pages on the same nouns are the noun-swapped pattern (rule 4). |
| 21 | Offices | Austin and Denver live. Denver has no confirmed street address (Human item 8). |
| 22 | Closed deal pages | Live: 38. |
| 23 | 8 resources pages | Live under the answer clusters: `/sell-a-hotel/how-to-sell-a-hotel`, `/hotel-valuation/how-to-value-a-hotel`, `/hotel-financing/refinance`, `/hotel-valuation/hotel-cap-rates`, `/buy-a-hotel/how-to-underwrite-a-hotel-deal`, `/hotel-financing/cmbs-loans` with `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/1031-exchange-hotels`, `/hotel-financing/pip-and-renovation-loans`. |

## C. Deep insights (items 24 to 35)

8 live in `/insights` (Texas cap rates Q2 2026, select vs full service, refinancing wave, Sun Belt,
brand-flag cap rates, how to sell, CMBS distress, ADR and RevPAR recovery). 1031 (32), choosing a
broker (33) and financing types (35) are live as answer pages. The Content Writer routine ships one
sourced page every weekday.

- **Rule:** "named quotes from Luke and Nate". Rule 3 forbids invented quotes; PR #40 removed two.
- **Backlog:** Texas cap rates **Q4 2026** cannot be written before the quarter closes and public
  surveys publish. **Boutique hotels (34):** 6 boutique closings and 4 listings in the data, and no
  answer page yet. This is a good Writer queue item.

## D. AEO and LLM citation

| # | Item | Status |
|---|---|---|
| 36 | TLDR at top | Live on the answer template (direct answer plus takeaways). |
| 37 | FAQ + FAQPage | Live. |
| 38 | "Why Matthews" sidebar | Backlog: only where `src/lib/track-record.ts` already has a sourced figure. |
| 39 | Author bylines + Person | Live; authors are limited to the three team slugs by rule 3. |
| 40 | Team Person schema, notable deals | Person schema live. Notable deals: `team.ts` marks named deals `TODO: confirm`, so they stay off until confirmed. |
| 41 | Entity consistency | Live: `src/lib/entity.ts` is the only definition. |
| 42 | /press, /mentions | /press live. /mentions needs real, linkable coverage (Human). |
| 43 | /matthews-vs competitor pages | Rule: "Never publish a page that ranks brokerages" (rule 3). |
| 44 | /trust (licenses, broker of record) | Human: the license numbers and the broker-of-record relationship need confirmation first. |
| 45 | Data pages | `/data/hotel-financing-statistics`, `/data/sba-hotel-lending` and `/research/mhi` are live. Transaction volume: Human (does the internal database exist?). Refi maturity wall: Backlog, from public Trepp releases only. |

## E. Internal link graph

| # | Item | Status |
|---|---|---|
| 46 | Cross-linking | **This PR:** market and brand pages link into the answer clusters and state SBA pages; listings and closed deals link to their market, brand, franchise-cost and state pages. |
| 47 | Breadcrumbs | Live. |
| 48 | Related content on insights | **This PR.** |
| 49 | Full category tree | Live as the HTML site map at `/sitemap`. |

## F. Distribution

| # | Item | Status |
|---|---|---|
| 50 | Press kit | Live inside `/press` (boilerplate, contact, assets). |
| 51 | sitemap-ai.xml | Rule: no engine reads it; llms.txt, `/agent-index.json` and `/mcp` already serve agents. |
| 52 | RSS | Live: `/feed.xml`. |
| 53 | LinkedIn drafts | 16 exist in `content/linkedin-drafts/`. |
| 54, 56 | Reddit and Quora answer templates | Rule: unattributed marketing posts are the "inauthentic mentions" pattern `geo/11-everything-needed.md` warns against. |
| 55 | Podcast pitches | Exist in `content/outreach/podcasts/`. |
| 57 | YouTube scripts | Backlog until there is a channel. |

## G. Measurement

| # | Item | Status |
|---|---|---|
| 66 | Rank check | Live weekly. **This PR** fixes a bug: a blocked or empty search page was logged as "not ranking". |
| 67 | LLM citation check | Live monthly. It has never run: no API keys (Human item 4). |
| 68, 70 | Traffic dashboard, /admin | Backlog: needs a Vercel Analytics or GA4 API token, and the site has no auth layer. Vercel Speed Insights and HubSpot tracking are live. |
| 69 | Scheduling | Live: `.github/workflows/seo-tracking.yml`. |

## H. Cross-surface wiring

| # | Item | Status |
|---|---|---|
| 71 | HubSpot inbound routing | Live in a different form: the website-lead routine turns each form lead into a HubSpot task for Nate. |
| 72 | HubSpot AEO prompts | Human: the API still answers "You need access to additional permissions" (checked 2026-10-08). |
| 73 | Mail filters + auto-drafts | Human: the connected Gmail is not the work mailbox, and work mail is Outlook. |
| 74 | 15-minute BOV booking link | Human: needs Nate's calendar, a booking tool choice and Zoom. |
| 75 | Airtable listings embed | Rule: listings already render from `listings.ts`; a second source would drift. |
| 76 | Zapier listing to LinkedIn queue | Human: needs the LinkedIn connection authorised in Zapier. |
| 77 | Public "Market Pulse" | Live as `/research/mhi`, but **stale**: Q2 2026 was due July 15 and Q3 is due October 15. Backlog: refresh from public sources. |
