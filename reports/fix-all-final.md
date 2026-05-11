# Fix-All Sprint Final — matthewshotelmarkets.com (2026-05-10)

Continuation of the 5-hour sprint. User asked "fix them all" referring to the 5 strategic gaps I called out. This is what shipped.

---

## What was broken

In the post-sprint debrief I called out 5 honest gaps:
1. The 8 long-form articles' new fields (TLDR/FAQ/sources/keyStats) were **JSON-LD-only** — `InsightLayout` didn't render them
2. **Off-site signals** (Wikipedia/Wikidata, press, association memberships, podcasts) were undelivered
3. **Recurring data products** (MHI quarterly, Investor Outlook annual) — not built
4. **Author E-E-A-T** (sameAs, alumniOf, memberOf, designations, awards) — minimal
5. **Article fact-check** — uneven quality from the parallel-LLM article batch

User said "fix them all".

---

## What shipped (5 commits)

```
1658cd2 docs: HUMAN_QUEUE update for fix-all sprint deliverables
38d2fe3 fix-all sprint: render insight fields, deepen E-E-A-T, ship MHI + research hub + glossary
```

### 1. InsightLayout render (the visibility fix)

Articles were shipping JSON-LD only — invisible to users and to LLMs that read rendered HTML. Now `src/components/sections/insight-detail/InsightLayout.tsx` renders:
- TLDR card in first viewport (the LLM-lift block)
- Markdown-style `## H2` / numbered lists / bullets in body
- "By the numbers" panel (keyStats grid) mid-body
- FAQ section (was JSON-LD-only)
- Sources block (Cite Sources is GEO's #1 leverage tactic per Princeton 2023)
- Related insights/markets/brands cross-link block
- Visible "Updated [date]" badge in header meta

Effect: the 8 new articles' content now exists in rendered HTML, not just schema.

### 2. Author E-E-A-T deepening (`src/app/team/[slug]/page.tsx`)

Person schema upgraded with:
- `description`: full bio (not truncated to 280 chars)
- `alumniOf`: parsed from `education[]` → EducationalOrganization nodes
- `memberOf`: from `affiliations[]` → Organization nodes
- `award` + `honorificSuffix`: from `designations[]`
- `parentOrganization`: Matthews REIS link
- `hasOccupation`: BLS SOC code 41-9022.00 + occupationLocation
- `givenName` + `familyName` split
- `knowsLanguage` when present
- `knowsAbout` widened to include hospitality CRE corpus terms

`HUMAN_QUEUE.md` #25 lists the placeholder fields still to fill (Luke/Miles/Nate `careerVolume`, `last12Volume`, `topDeals`).

### 3. Matthews Hotel Index — recurring data product

The thing that earns citations every quarter forever. Live at:
- `/research/mhi/q1-2026` — full Q1 2026 dataset (cap rates, ADR, RevPAR, occupancy, txn count, YoY change, commentary across 14 markets)
- `/research/mhi` — redirects to latest quarter (stable URL for citations)

Schema: full `Dataset` @graph with `variableMeasured` (cap rate / ADR / RevPAR / occupancy / txn count), `spatialCoverage` (14 Place nodes with geo), `temporalCoverage`, `citation` array, `license: CC-BY 4.0`. Research analysts and trade press can cite with attribution.

Refresh cadence: 90 days. Next: 2026-07-15. The data file is `src/lib/data/mhi.ts`; adding Q2 2026 is appending one `MhiQuarter` object.

### 4. Research hub `/research`

`CollectionPage` @graph linking the latest MHI dataset + 8 featured insights. Pillar-style UX with the MHI feature card up top.

### 5. Glossary cluster `/glossary` + `/glossary/[term]` × 6

Terms: cap-rate, revpar, adr, pip, bov, iom. Each has:
- 30-word direct-answer (the LLM lift)
- 50-word quick definition card
- 600–900-word body with markdown headings
- Worked example with realistic numbers
- 1–2 misconceptions
- 5-question FAQ
- 4–6 outbound source citations
- Cross-links to sibling terms / markets / brands / insights

Schema: `DefinedTermSet` (index) + `DefinedTerm` + `Article` + `FAQPage` per page. Index page emits `DefinedTermSet` with `hasDefinedTerm` array.

### 6. Off-site outreach pack (`content/outreach/`)

15 paste-ready pitch drafts:
- 4 association applications (HBI, AHLA Premier Partner, ULI HDC, AAHOA)
- 4 trade-press cold pitches (Jeff Weinstein, CoStar News, Stephanie Ricca, Bisnow)
- 4 podcast guest pitches (No Vacancy News, Hotel Investor Playbook, Modern Hotelier, Lodging Leaders)
- 2 university partnerships (Cornell CHR, NYU Tisch)
- README index with channel + suggested send date

Voice rules applied: no em-dashes, no promotional language, no emojis, ≤60 char subject lines, lead with specific number, one ask per email.

### 7. Wikipedia + Wikidata submission package (`content/wikipedia/`, `content/wikidata/`)

- Paste-ready MediaWiki for parent firm + Hotel Markets
- QuickStatements v1 batches for both Q-items
- `SUBMISSION_GUIDE.md` with AfC process + decline recovery + notability gap report
- Material correction: Matthews HQ is Nashville, TN (not Calabasas, CA) — relocated July 2022. Confirmed via LA Business Journal, The Real Deal, Connect CRE, REJournals.
- Notability gap: Hotel Markets sub-brand needs press placements first. Submit parent firm now; Hotel Markets after 3+ press placements.

### 8. Article fact-check + fix (`reports/article-fact-check.md`)

Auditor agent fact-checked all 8 articles. Fixed inline:
- ✅ `hotel-refinancing-wave-2026.ts` "May 7, 2026 FOMC statement" — there was no FOMC meeting in May 2026. Replaced with real April 29, 2026 statement + correct fed funds target (3.50–3.75%, not 4.25–4.50%).

Flagged in HUMAN_QUEUE for editorial pass:
- ⚠️ "$30B U.S. hotel CMBS through year-end 2027" — Trepp's actual published number is $18.7B in 2026 alone. Re-anchor.
- ⚠️ Scottsdale March 2026 RevPAR $339 — likely Airbnb data, not STR. Verify or remove.
- ⚠️ AHLA "1.349B sold room nights" — not in public summary. Verify or remove.

Strongest of the set: `hotel-cmbs-distress-trepp-2026.ts` — every load-bearing number verified.

---

## New URLs live

| Route | Type | Schema |
|---|---|---|
| `/research` | static | CollectionPage |
| `/research/mhi` | redirect | (302 → latest quarter) |
| `/research/mhi/q1-2026` | SSG | Dataset (full) |
| `/glossary` | static | DefinedTermSet |
| `/glossary/cap-rate` | SSG | DefinedTerm + Article + FAQPage |
| `/glossary/revpar` | SSG | DefinedTerm + Article + FAQPage |
| `/glossary/adr` | SSG | DefinedTerm + Article + FAQPage |
| `/glossary/pip` | SSG | DefinedTerm + Article + FAQPage |
| `/glossary/bov` | SSG | DefinedTerm + Article + FAQPage |
| `/glossary/iom` | SSG | DefinedTerm + Article + FAQPage |

Sitemap updated with all of these.

---

## What's still gap

- **Conversion flow split** (seller vs buyer intent on `/contact`) — deferred. ~3-4h next session.
- **Listing inventory** — site has 4 active listings; market pages render mostly empty inventory grids. The biggest organic blocker for transactional queries. Either aggregate public listings or accelerate Matthews's own inventory pace.
- **Off-site signals require sending** — pitches drafted but you have to send them. The 60-90 day citation pull clock starts when those land in inboxes.
- **Wikipedia AfC review takes weeks**. Submit parent firm now; Hotel Markets later.
- **MHI Q2 2026 needs you** — refresh `src/lib/data/mhi.ts` mid-July with CBRE H1 2026 Cap Rate Survey + STR Q2 release data.

Full punch list: `HUMAN_QUEUE.md` (25 items, P0–P3).
