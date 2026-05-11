# HUMAN_QUEUE — Items Needing Nate

Compiled from the 5-hour sprint + the fix-all sprint (2026-05-10). Each item is paste-ready or has the URL/contact you need. Grouped by urgency.

---

## P0 — Editorial pass on the 8 new articles (1–2 hours your time)

Fact-check agent flagged the following before any of these articles get amplified on LinkedIn or used in PR pitches. **One critical error already fixed**; the rest are tightenings.

- ✅ **Fixed:** `hotel-refinancing-wave-2026.ts` originally cited a "May 7, 2026 FOMC statement" — there was no FOMC meeting in May 2026. Replaced with the real April 29, 2026 statement and the correct fed funds target (3.50–3.75%, not 4.25–4.50%).
- ⚠️ **Needs your call:** The "$30 billion in U.S. hotel CMBS through year-end 2027" figure appears 6 times in `hotel-refinancing-wave-2026.ts`. Trepp's actual published number is **$18.7 billion in 2026 alone** (Trepp Feb 2025 release via TreppWire). Adding 2027 likely gets to $30B+ but unverified. Either re-anchor every occurrence to "approximately $18.7 billion in 2026 alone, with comparable carry-forward into 2027" OR keep the $30B framing and add the $18.7B-in-2026 specific anchor in the keyStats block.
- ⚠️ **Easy fix:** `hotel-adr-revpar-recovery-2026.ts` cites Scottsdale March 2026 RevPAR of $339 from "Bonvoyage AZ" — this is almost certainly **short-term rental (Airbnb) data, not hotel STR data**. Article already includes a "(verify with STR primary)" inline caveat, but the number should be removed from `keyStats` until verified or replaced with an STR-sourced number.
- ⚠️ **Verify:** AHLA "1.349B sold room nights" forecast in `sun-belt-hospitality-investment-2026.ts` — not in any public AHLA summary; may be in the paywalled full report. Confirm or remove before pitching.
- ✅ **Ship as-is:** `hotel-cmbs-distress-trepp-2026.ts` is the strongest of the set — every load-bearing number (Trepp 7.31% delinquency, 9.37% special servicing, Starwood $577M, Park Hotels $725M) verified to public sources.
- 📋 Full report: `reports/article-fact-check.md`

---

## P0 — Off-site outreach (drafts shipped, ready to send)

Pre-written pitch pack at `content/outreach/`. **15 ready-to-paste files**, indexed in `content/outreach/README.md` with channel + suggested send date.

Memberships (P0 — start the 60-90 day clock):
- `memberships/hbi-application-cover.md` → Hospitality Brokers Institute
- `memberships/ahla-premier-partner-application.md` → AHLA Premier Partner
- `memberships/uli-hotel-development-council.md` → ULI HDC (Luke nominated)
- `memberships/aahoa-membership.md` → AAHOA

Press (highest leverage first):
- `press/jeff-weinstein-hotel-investment-today.md` → Jeff Weinstein (Hotel Investment Today)
- `press/costar-news-hotels-desk.md` → Natalie Harms + Bryan Wroten (CoStar News)
- `press/lodging-magazine-stephanie-ricca.md` → Stephanie Ricca (LODGING)
- `press/bisnow-jon-banister-mark-bonner.md` → Bisnow Texas + national

Podcasts:
- `podcasts/no-vacancy-news-glenn-haussman.md` → Glenn Haussman
- `podcasts/hotel-investor-playbook.md`
- `podcasts/modern-hotelier.md`
- `podcasts/lodging-leaders.md`

Universities:
- `universities/cornell-chr-data-partnership.md` → Cornell CHR
- `universities/nyu-tisch-ihiic.md` → NYU Tisch / IHIIC

All voice rules applied: no em-dashes, no promotional language, no emojis, ≤60 char subject lines, lead with specific number.

---

## P0 — Wikipedia + Wikidata submission package (paste-ready)

Files at `content/wikipedia/` and `content/wikidata/`:
- `wikipedia/matthews-real-estate-investment-services.wiki` — paste-ready MediaWiki
- `wikipedia/matthews-hotel-markets.wiki` — paste-ready MediaWiki
- `wikidata/matthews-real-estate-investment-services.qs` — QuickStatements v1 batch
- `wikidata/matthews-hotel-markets.qs` — QuickStatements v1 batch (parent Q-id placeholder)
- `wikipedia/SUBMISSION_GUIDE.md` — step-by-step paste instructions, AfC timeline, decline recovery

**Notability gap (important):** Matthews Hotel Markets sub-brand currently fails WP:NCORP because there's no significant independent secondary coverage of just the sub-brand yet. Submit the **parent firm first** (clears notability bar with LA Business Journal / The Real Deal / Connect CRE / REJournals coverage of the Calabasas → Nashville HQ relocation). Then land 3+ press placements (use the pitch pack above) and resubmit Hotel Markets.

**Material correction baked into drafts:** Matthews HQ is **Nashville, TN**, not Calabasas, CA — Matthews relocated July 2022 (LA Business Journal, The Real Deal, Connect CRE all confirm). Existing site copy still references Austin HQ for Matthews Hotel Markets, which is correct (Hotel Markets is headquartered in Austin even though the parent moved to Nashville).

---

## P0 — Sprint 1 deployment items (still open)

### 1. Verify Google Search Console + submit sitemap
- Property: `https://matthewshotelmarkets.com`
- Verification: DNS TXT record (preferred) or HTML file upload
- Submit `https://matthewshotelmarkets.com/sitemap.xml`
- Why: Without this, Google indexing is best-effort. We can't confirm coverage or pull query data. Took 0% effort this sprint but blocks all GSC analytics.

### 2. Register Bing Webmaster Tools + IndexNow
- Verify: `https://www.bing.com/webmasters` — add `matthewshotelmarkets.com`
- Submit sitemap: `https://matthewshotelmarkets.com/sitemap.xml`
- Generate IndexNow key from Bing → save to `public/{key}.txt`
- Why: **ChatGPT search and Bing Copilot pull from the Bing index.** Without this they cannot cite us. Highest-leverage 10-minute task you have.

### 3. Set REVALIDATE_SECRET in Vercel env
- Add `REVALIDATE_SECRET` (any 32+ char random string) as a Production env var (type: Sensitive)
- Use to call `POST https://matthewshotelmarkets.com/api/revalidate` with header `x-revalidate-secret: <secret>` and body `{"tags": ["listing:foo"], "paths": ["/listings/foo"]}` to trigger instant cache refresh without redeploy
- Why: New webhook shipped this sprint. Secret-gated, useless until set.

### 4. Confirm Denver office address (offices.ts → Miles Cortez)
- File: `src/lib/data/offices.ts` line 45 currently reads `address: "Confirm address with Miles"`
- Replace with real street + ZIP. Drives LocalBusiness schema NAP signal.

### 5. Reset Apple Hospitality / Summit / Service Properties Trust per-key averages
- Article: `src/lib/data/insights-articles/brand-flag-cap-rate-guide-2026.ts`
- The "$156K Apple Hospitality avg, $142K Sun Belt Courtyard" numbers are reasoned estimates, not pulled from the 10-K supplements during the sprint. Verify against most recent supplementals (apple-hospitality.com IR) before this article goes into PR pitches.

### 6. Refresh Matthews Hotel Index every 90 days (next: 2026-07-15)
- Live at `/research/mhi/q1-2026` — Q1 2026 dataset across 14 markets
- Refresh data: `src/lib/data/mhi.ts` — add a `Q2_2026: MhiQuarter` object to `mhiQuarters[]` array, set `publishedAt: "2026-07-15"`, update each `MarketDataPoint.commentary`. Cap rate ranges from CBRE H1 2026 Cap Rate Survey (publishes ~July). RevPAR/ADR from STR Q2 press release.
- Also refresh `/research/mhi` redirect picks the latest automatically — no other code change needed.
- Why: This is the recurring data product. Quarterly publish cadence builds permanent citation surface. Skip a quarter and the citation pull decays.

---

## P1 — This month (link acquisition, association memberships)

### 6. Hospitality Brokers Institute (HBI) membership
- Apply: `https://www.hospitalitybrokers.org`
- Why: Gates the **Certified Hotel Broker** designation + the Top Brokers ranking pipeline at Hotel Management magazine. Highest-leverage single membership per Agent 6 link-target scan.
- Cost/effort: Application + dues, ~$500-1500/yr range (verify on apply page).

### 7. AHLA Premier Partner
- Apply: `https://www.ahla.com/partners`
- Why: Peer to JLL Hotels at Premier tier. Unlocks AHLA research co-branding, conference visibility.

### 8. ULI Hotel Development Council
- Apply: `https://americas.uli.org/membership/product-councils/`
- Why: Senior hospitality investor seat. ULI HDC roster is a who's-who of the institutional buyer pool we need to be in front of.

### 9. AAHOA membership (if not already)
- Apply: `https://www.aahoa.com/membership`
- Why: Asian American Hotel Owners Assoc represents ~60% of US franchised hotels. Direct access to the seller side of select-service.

### 10. THLA + RECA + NAIOP Austin (state/local)
- Texas Hotel & Lodging Assoc, Real Estate Council of Austin, NAIOP Austin chapter
- Why: Local credibility + Austin-market signal density.

---

## P2 — This quarter (outreach + content amplification)

### 11. Trade-press relationship building (priority order)
**Highest leverage:**
- **Jeff Weinstein, Hotel Investment Today** — owns the deal-announcement / market-thesis territory we want to own. Email pitch: Q1 2026 outlook + recent close walk-through.
- **CoStar News Hotels desk: Natalie Harms, Bryan Wroten** — even though we drop CoStar as a data source, the news side carries weight in CRE search results.
- **Stephanie Ricca, LODGING magazine** — AHLA-owned magazine. Editorial-friendly to AHLA Premier Partners.
**Tier 2:**
- Sean McCracken (Hotel News Now), Terence Baker, Jena Tesse Fox (Hospitality Net), Robin McLaughlin, Erika Morphy (GlobeSt), Jon Banister + Mark Bonner (Bisnow)
- Full reporter list with beats + emails: `reports/link-targets.md` section 6

### 12. Podcast guest pitches (in priority order)
- **No Vacancy News (Glenn Haussman)** — biggest hotel-focused podcast.
- **Hotel Investor Playbook** — investment-focused listenership.
- **Modern Hotelier**, **Lodging Leaders**, **Hospitality Daily** (Josiah Mackenzie)
- Full list with hosts + booking paths: `reports/link-targets.md` section 5

### 13. University data partnerships
- **Cornell CHR** (Center for Hospitality Research) + **Rubacha** (Cornell RE program)
- **NYU Tisch hospitality** (IHIIC conference owner)
- **UH Hilton College** (Houston-local proximity matters here)
- Why: Free academic research distribution + .edu backlinks. Reach out to a named professor with a data-share offer (anonymized Matthews transaction file → their working paper).

### 14. Wikidata Q-items (parent + sub)
- Both Q-items still unclaimed per SEO_LLM_PLAN_v2.md verification
- Submit via `wikidata.org` — full property list at `content/wikidata/` (already drafted in Wave 3)
- Why: Wikidata is queried directly by Gemini and is in LLM training corpora. **Brands on Wikidata + Wikipedia + 4+ third-party platforms see 2.8× more AI citations** (Discovered Labs 2026).

### 15. Wikipedia article (parent first, then Matthews Hotel Markets)
- Drafts at `content/wikipedia/` (Wave 3)
- Submit via Articles for Creation (AfC). Acceptance probability ~60% on first submit.
- This is a multi-week back-and-forth process; start now.

### 16. PR consultant retention
- Three named candidates with retainer ranges in `SEO_LLM_PLAN_v2.md` Appendix B
- Engage in parallel with Matthews internal PR audit (Wave 3 deliverable)

### 17. Designated research analyst
- Job description in SEO_LLM_PLAN_v2.md Appendix C
- Source: St. Edward's University finance program OR UT McCombs RE program
- 20 hr/week contract or paid academic credit, ~$3-4.5K/month
- Drives Matthews Hotel Index (MHI) quarterly + Investor Outlook annual

### 18. CoStar legal request — drop or pursue
- Legal request email drafted in SEO_LLM_PLAN_v2.md Appendix C
- Decision: **public-data-only fallback already specified**, so this is a "pursue if zero downside" — not blocking. Public-data MHI ships Q4 2026 either way.

---

## P3 — Ongoing (don't forget)

### 19. Author byline cleanup (still in old data)
- Three placeholder broker names that the data may still reference:
  - `sarah-chen` — already redirect-killed in vercel.json (good)
  - `marcus-reyes` — same
  - `elena-park` — same
- If you ever spot one of those names in a public-facing surface, it shouldn't be there. Filed in vercel.json as 301s.

### 20. /listings/walden-retreats-hill-country redirects to OM site
- Note from internal audit: Walden listing server-redirects to its OM. We lose indexable surface on that route.
- Decision: keep the OM-first redirect (drives qualified leads), OR render a public detail page with OM behind NDA gate (drives indexation + organic). User call.

### 21. LinkedIn amplification on Wave 5 articles
- 16 LinkedIn drafts at `content/linkedin-drafts/` (8 articles × Luke + Nate)
- Cadence: Luke 2x/week, Nate 3x/week
- Both repost + comment on each other's content (per SEO_LLM_PLAN_v2.md Pillar 5)

### 22. Quarterly refresh cadence on pillar pages
- 30-day refresh on Hotel Cap Rates, Hotel Valuation Guide, How to Sell a Hotel pages
- Update the visible "Last updated" date even on small refreshes — Perplexity citation rate drops ~40% past 30 days, ~65% past 90 days (ZipTie 2025)
- Use the new revalidate webhook to push without full deploys

### 23. Content production list (next 30-60 days)
- 41 prioritized content briefs in `reports/content-production-list.md`
- 9 P0 (next 7 days), 19 P1 (next 30 days), 13 P2 (next 60 days)
- Top wedges: parent-domain migration trio, BOV cluster (4 nodes), select-service segment page, "who" trio for LLM canonical broker question

### 24. Conversion flow split — DEFERRED, ship next
- Right now `/contact` is a generic form. Sell-side and buy-side intent need different conversion flows:
  - Sell-side: "Free BOV in 7 days" with the 24-week timeline, broker callback, asset details intake
  - Buy-side: "Buyer profile" form, get notified of new listings matching criteria
- Tracking: form submissions, BOV requests, OM downloads — no event capture today
- Effort: ~3-4 hours. Want me to ship this in the next session?

### 25. Author E-E-A-T enrichment — placeholders to fill
Person schema is now richer but several broker fields still read as placeholders:
- `team.ts` Luke Thompson `careerVolume` and `last12Volume` both say "Confirm". Fill with real numbers.
- `team.ts` Miles Cortez `yearsExperience: 0` and `last12Volume: "Confirm"`. Fill.
- `team.ts` Nate Solomon `careerVolume`, `last12Volume`, `yearsExperience: 0`, `topDeals: []`. Fill — topDeals especially powers the schema.org `award` and `knowsAbout` signals.
- Each broker should have 3-5 `designations` (e.g., "Texas Real Estate Commission License No. 593889" is on Luke's affiliations but not designations) — add CCIM / SIOR if applicable.
- Real headshot for Nate (current path is `.jpg`, others are `.avif` — check that the actual file is high-res).

---

## Source reports for everything in this file

| Report | What it covers |
|---|---|
| `reports/competitor-matrix.md` | 10 competitors, 50 highest-impact templates, top schema + linking patterns |
| `reports/query-universe.md` + `reports/priority-targets.md` | 250 queries + 30 priority targets with SERP snapshots |
| `reports/citation-patterns.md` | LLM citation winners' page structure (the 14-section template) |
| `reports/site-audit.md` (in Agent 4 transcript) | Pre-sprint URL inventory + fix list |
| `reports/link-targets.md` | 60+ link acquisition targets with contacts + priority |
| `reports/content-production-list.md` | 41 content briefs ranked by impact × effort |
| `SEO_LLM_PLAN_v2.md` (existing) | Full strategy doc with three appendices |
