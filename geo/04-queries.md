# geo/04-queries.md — Agent 4: query-intel-and-tracking

265 prompts in `geo/04-queries.csv`, 12 clusters. Built 2026-09-17.

## What's carried forward vs. what's new

The 2026-05-10 sprint (`reports/query-universe.md`, `reports/priority-targets.md`) built 250 queries
focused almost entirely on **brokerage/investment-sales** intent: transactional core, brand-flag
("[brand] for sale"), per-market, valuation/process informational, long-tail, and 50 LLM-style
natural-language prompts. That work is carried forward here, not re-derived — every prompt in the
old Markets, Brand/PIP, Choosing-a-broker, Selling-a-hotel, and Valuation clusters below traces back
to it, with `target_url` corrected to routes that actually exist in this repo (the old universe used
a `matthewshotelmarkets.com` domain assumption that turned out to be correct — see `geo/00-repo-map.md`
— but pointed several queries at pages that don't exist, e.g. `/insights/hotel-cap-rates-2026`,
`/segments/select-service`, `/brands/hampton-inn`. Those are retargeted to real routes:
`/hotel-valuation/cap-rates` (proposed), `/hotels-for-sale/[brand]` (existing), etc.).

**New in this pass:** an entire **hotel-financing side** the prior sprint never built — Loan types
(SBA/CMBS/bridge/bank/life co), Refinance process, Distress & maturities, and Hotel loan rates &
terms clusters (58 prompts total). This matches the confirmed-missing `/hotel-financing/*` route
cluster in `geo/00-repo-map.md` and gives Agent 5 a real content mandate for it — not just an SEO
afterthought. Also new: Deal docs & underwriting and Buying a hotel / 1031, and a `Brand/PIP/conversion`
expansion using MPI/ARI/RGI and PIP-cadence prompts surfaced by research. One dropped item: the prior
sprint's `llm-citation-check.ts` and `query-universe.md` both reference **"Who closed the Walden
Retreats Hill Country deal?"** — Walden Retreats is a different Matthews Hotel Markets-unrelated
project (a glamping resort listing site), not a deal in `src/lib/data/closed.ts`. That prompt is a
fabrication from the prior sprint and has been dropped, not carried forward. Flagged in
`geo/requests.md` for Agent 10 to also strip it from `scripts/llm-citation-check.ts`.

**On the mission brief's 73-prompt seed list:** I did not have that literal list in this run's context
(only the section boundaries: brand/entity 1-10, category 11-22, financing 23-45, sales & valuation
46-60, local/market 61-68, transactional 69-73). I reconstructed equivalents from
`reports/query-universe.md`'s LLM-prompt section (#201-250) plus a WebSearch pass for real financing
questions, and built the CSV's `Brand (Matthews)` and transactional rows to match that section shape.
Say so here per the brief's instruction; nothing below is presented as the verbatim original seed list.

## Language check (read `geo/00-guidance.md` first)

Google's own AI-features documentation says there is no separate AI index and no special schema for
AI Overviews/AI Mode — they run on the normal Search index (`geo/00-guidance.md` §A). That means the
prompt list above is not a list of "AI SEO keywords" to sprinkle on a page; it's **the set of real
questions a page's H2s should answer.** For every hub Agent 5 builds:
- The H1 = the single highest-priority prompt for that URL (see Top 40 below).
- Each **H2 must be phrased as one of the cluster's other prompts**, in the user's words, not a
  restated marketing heading. An assistant fanning out a question into sub-questions is exactly what
  H2s should mirror.
- This is the one instruction Agent 5 needs from this file before touching IA: **treat `04-queries.csv`
  as the H1/H2 source, not just a target_url lookup table.**

## Clusters (12)

### Hotel loan rates & terms (7 prompts)
- Hub: `/rates` (existing, Agent 8's route — the rate sheet is also the "original data point" every
  other cluster's answer pages need to cite per Spec 5.1)
- Spokes: `/hotel-financing`, `/hotel-financing/sba-loans`
- Top 5: What are current hotel loan interest rates? / What loan terms (amortization, term length) are
  typical? / Are SBA hotel loan rates fixed or variable? / How do hotel loan rates compare to other CRE
  loan rates? / What's the spread over Treasury/SOFR for a typical hotel loan today?

### Refinance process (16 prompts)
- Hub: `/hotel-financing/refinance-process` (proposed)
- Spokes: `/hotel-financing/loan-requirements`, `/hotel-financing/loan-workouts`, `/hotel-financing/refinance-vs-sell`
- Top 5: My hotel loan matures next year, what are my options? / How do I refinance before it matures?
  / Should I refinance or sell instead? / I financed at 3-4% in 2019-2021, now maturing into 6-8%, what
  do I do? / What should I be doing 12+ months before maturity?

### Loan types — SBA/CMBS/bridge/bank/life co (22 prompts)
- Hub: `/hotel-financing` (proposed)
- Spokes: `/hotel-financing/sba-loans`, `/hotel-financing/cmbs-loans`, `/hotel-financing/bridge-loans`,
  `/hotel-financing/life-company-loans`, `/rates`
- Top 5: Can I get an SBA loan to buy a hotel? / SBA 7(a) vs 504 for a hotel? / What is a CMBS loan and
  how does it work for hotels? / What's a typical hotel loan rate right now? / Minimum down payment for
  an SBA hotel loan?
- **Caution for Agent 5/10:** several numbers surfaced in research here (SBA down payment %, CMBS
  rate ranges, LTV deltas) came from secondary lender-marketing sites, not SBA.gov/primary sources.
  Flagged per-row in the CSV `notes` column. Verify before publishing any specific number.

### Distress & maturities (13 prompts)
- Hub: existing `/insights/hotel-owners-refinancing-wave-2026` + proposed `/hotel-financing/loan-workouts`
- Top 5: How much hotel CMBS debt is maturing in 2026? / What % of hotel loans are in special servicing?
  / What happens when a loan goes into special servicing? / Which markets/brands show the most distress?
  / What's a loan workout?
- **Direct HUMAN_QUEUE collision:** the "$30B vs. Trepp's $18.7B" dispute in `HUMAN_QUEUE.md` lives
  exactly in this cluster's target content. Do not answer "how much hotel CMBS debt is maturing" with
  either number until Agent 10 reconciles it. Also: the only special-servicing rate found in this
  pass's research (11.09%) is an **all-CMBS blended figure, not hotel-specific** — do not reuse it as
  a hotel stat.

### Selling a hotel (19 prompts)
- Hub: `/sell-a-hotel` (proposed — confirmed-missing cluster per `geo/00-repo-map.md`)
- Spokes: `/sell-a-hotel/process`, `/sell-a-hotel/timeline`, `/sell-a-hotel/broker-fees`,
  `/sell-a-hotel/documents-needed`, `/sell-a-hotel/confidential-sale-process`, `/sell-a-hotel/1031-timing`,
  `/glossary/bov`
- Top 5: How do I sell a hotel? / What's the step-by-step process? / How long does it take? / I own a
  78-key Hampton Inn in Georgia, loan matures next year, what are my options? / What's a BOV vs. a
  lender appraisal?

### Valuation & cap rates (21 prompts)
- Hub: `/hotel-valuation` (proposed — confirmed-missing cluster)
- Spokes: `/hotel-valuation/cap-rates`, `/hotel-valuation/how-to-value-a-hotel`,
  `/hotel-valuation/income-approach`, `/hotel-valuation/sales-comparison-approach`, `/glossary/bov`,
  `/glossary/pip`, `/glossary/revpar`
- Top 5: How do you value a hotel? / What's a good cap rate in 2026? / ADR vs. RevPAR vs. occupancy? /
  How does a PIP affect value? / Walk me through the math on valuing a select-service hotel.

### Choosing a broker (18 prompts)
- Hub: `/services/investment-sales` (existing)
- Top 5: Who should I use to sell my Hampton Inn in Texas? / Recommend a broker for a sub-$50M
  disposition. / How do I choose a hotel broker? / Who handles middle-market sales in Austin? / Deepest
  Sun Belt coverage?

### Markets (72 prompts)
- Hub pattern: `/markets/[city]` (existing, 14 cities: austin-tx, dallas-tx, houston-tx, san-antonio-tx,
  nashville-tn, atlanta-ga, charleston-sc, savannah-ga, charlotte-nc, phoenix-az, denver-co, miami-fl,
  tampa-fl, orlando-fl)
- Top 5 (Austin/Dallas shown as pattern): Where's a hotel for sale in Austin? / Best hotel broker in
  Austin? / Cap rates in Austin right now? / Hotel for sale in Dallas? / Best hotel broker in Dallas?

### Deal docs & underwriting (13 prompts)
- Hub: `/services/acquisition-advisory` (existing)
- Spokes: `/glossary/iom`, `/sell-a-hotel/documents-needed`
- Top 5: How do you underwrite a hotel acquisition? / What financials should I ask for? / What's in a
  CIM? / What's a T-12? / What due diligence items should I check?

### Brand/PIP/conversion (22 prompts)
- Hub: `/hotels-for-sale` (existing index)
- Spokes: `/hotels-for-sale/[brand]` x10 (hampton-inn, holiday-inn-express, marriott, hilton, hyatt,
  ihg, wyndham, choice, best-western, voco — all existing routes), `/glossary/pip`
- Top 5: What is a PIP and who pays for it? / How does a PIP affect sale price? / Hampton Inn for sale?
  / Holiday Inn Express for sale? / Marriott for sale?

### Buying a hotel / 1031 (14 prompts)
- Hub: `/buying-a-hotel` (proposed — new cluster, not in the brief's three named-missing clusters but
  a natural pairing with existing `/services/acquisition-advisory`)
- Spokes: `/buying-a-hotel/1031-exchange`, `/buying-a-hotel/financing-a-purchase`
- Top 5: How do I buy my first hotel? / Can I use a 1031 exchange? / Can I 1031 out of an apartment
  into a hotel? / What property types qualify? / What's the 45-day/180-day timeline?

### Brand (Matthews) (28 prompts)
- Hub: `/`
- Spokes: `/team`, `/closed`, `/contact`, `/hotels-for-sale`, `/offices/austin`, `/offices/denver`,
  `/rates`, `/research/mhi`
- Top 5: What is Matthews Hotel Markets? / Is it part of Matthews REIS? / What deals has it closed? /
  What services does it offer? / Does it do investment sales?

## Top 40 — win these first

Ranked by (how often asked to assistants) x (can we be the single best answer) x (does the answer
lead to a call). One line each.

1. **What is Matthews Hotel Markets?** — direct entity query; homepage answers in 40-70 words per Spec 5.1, cheapest win in the set.
2. **How do I sell a hotel I own?** — highest-volume how-to in the sales cluster; un-owned per prior SERP audit.
3. **What's the step-by-step process for selling a hotel?** — same volume tier, fans out to the whole `/sell-a-hotel` hub's H2s.
4. **How long does it take to sell a hotel through a broker?** — concrete-number question; a real cited timeline beats every vague competitor answer.
5. **My hotel loan matures next year, what are my refinance options?** — the single highest lead-value prompt in the whole set; direct owner distress scenario.
6. **I own a 78-key Hampton Inn in Georgia, loan matures next year, what are my options?** — composite prompt that bridges Selling and Refinance; exactly the kind of scenario an assistant fans out to us if we answer both halves on one page.
7. **How do you value a hotel?** — anchor informational pillar; currently owned by HVS/EHL, beatable on freshness + a real worked example.
8. **What's a good cap rate for a hotel in 2026?** — needs our own `/rates` data point; this is the sentence that gets a brand named in an answer.
9. **Can I get an SBA loan to buy a hotel?** — highest-frequency owner-operator financing question; zero existing content on the site today.
10. **What's the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?** — comparison-table native; directly serves cluster 3's top prompt.
11. **What is a CMBS loan and how does it work for hotels?** — definitional gateway into the entire Distress & maturities cluster.
12. **What are current hotel loan interest rates?** — the one page (`/rates`) that becomes the fact every other financing page cites; build it first.
13. **How much hotel CMBS debt is maturing in 2026?** — highest search+assistant interest in Distress cluster; blocked on Agent 10 reconciling the $30B/$18.7B dispute before publishing a number.
14. **Who should I use to sell my Hampton Inn in Texas?** — brand+geo+transactional combo, wide open per prior sprint's SERP audit.
15. **How do I choose a hotel broker?** — classic decision-criteria prompt with no strong incumbent answer.
16. **Where can I find a Hampton Inn hotel for sale?** — top brand-flag query; existing `/hotels-for-sale/hampton-inn` route just needs content depth.
17. **Where can I find a Holiday Inn Express hotel for sale?** — second-highest brand-flag query, same route pattern.
18. **What is a PIP (property improvement plan) and who pays for it?** — existing `/glossary/pip` page already anchors this; cheap to extend into a full answer page.
19. **How does a PIP affect the sale price of a hotel?** — ties valuation and PIP clusters; real lead-generating question from sellers.
20. **Where can I find a hotel for sale in Austin, TX?** — Matthews HQ market; existing `/markets/austin-tx` page, provenance lift from local presence.
21. **Who is the best hotel broker in Austin, TX?** — pairs with #20 on the same page; HQ-market credibility.
22. **What's a hotel broker opinion of value (BOV) and how is it different from a lender appraisal?** — existing `/glossary/bov` page; direct answer available with zero new content.
23. **How do you underwrite a hotel acquisition?** — anchor page for the buy-side; existing `/services/acquisition-advisory` just needs the content buildout.
24. **What financials should I ask for before underwriting a hotel deal?** — concrete checklist sub-question, high citation-likelihood once documented.
25. **How do I buy my first hotel?** — buyer-onboarding informational gateway into the whole Buying cluster.
26. **Can I use a 1031 exchange to buy a hotel?** — high-intent tax-driven buyer question, essentially unanswered by any hospitality-specific source found in research.
27. **Can I 1031 exchange out of an apartment building into a hotel?** — the exact like-kind-rules question buyers search for; verifiable against IRS/qualified-intermediary sources.
28. **Should I refinance my hotel or sell it instead?** — decision-framing prompt that bridges two of our highest-value clusters; nobody else answers both sides on one page.
29. **What percentage of hotel loans are in special servicing right now?** — high interest, but blocked until we find a hotel-specific (not blended CMBS) number to cite honestly.
30. **What's the minimum down payment for an SBA loan on a hotel?** — concrete number owner-operators search for directly; needs SBA.gov verification before publishing.
31. **What's the difference between a hotel's ADR, RevPAR, and occupancy?** — existing glossary terms (`/glossary/adr`, `/glossary/revpar`) already answer this; just needs a comparison page linking both.
32. **Is Matthews Hotel Markets part of Matthews Real Estate Investment Services?** — disambiguation query that every "what is X" prompt eventually needs; easy authoritative answer.
33. **What hotel deals has Matthews Hotel Markets closed?** — existing `/closed` page with real named deals; strong trust signal for every other page's author box.
34. **What services does Matthews Hotel Markets offer?** — gateway query into all three `/services/*` pages.
35. **Who handles middle-market hotel investment sales in Austin?** — geo+category compound query at Matthews' home market.
36. **What's the step-by-step process for selling a hotel confidentially?** — niche but high-opportunity per prior sprint; differentiates from generic "how to sell" content.
37. **Walk me through the math on valuing a select-service hotel.** — direct match to Spec 5.1's required worked-example block; strong citation bait for an assistant asked to "show the math."
38. **What's in a hotel CIM (confidential information memorandum)?** — deal-docs definitional query that most competitor content treats superficially.
39. **How do rising interest rates affect my hotel refinance options?** — macro-tie-in prompt; needs FRED/Treasury sourcing but is a natural bridge from `/rates` to the refinance cluster.
40. **Where can I find a hotel for sale in Dallas, TX?** — second Texas market; Hotel Brokers of America has incumbent presence on the generic term, but AIO-style natural-language phrasing is still open.

## HubSpot AEO prompt list (20 prompts for Nate to load)

Nate's HubSpot account has AEO prompt tracking (`mcp__claude_ai_HubSpot__manage_aeo_prompts` /
`get_aeo_metrics`) — this agent did not call those tools (out of `geo/**` lane and not requested), but
here are the 20 prompts to load so it runs automatically alongside the manual weekly log in
`geo/tracking/`. These are the highest brand + highest-lead-value prompts from the Top 40 above,
picked to avoid overlap with the 60-prompt manual tracking list so Nate gets two independent read on
different (but complementary) prompt sets:

1. What is Matthews Hotel Markets?
2. Is Matthews Hotel Markets part of Matthews Real Estate Investment Services?
3. What hotel deals has Matthews Hotel Markets closed?
4. Who should I use to sell my Hampton Inn in Texas?
5. Who handles middle-market hotel investment sales in Austin?
6. Where can I find a Hampton Inn hotel for sale?
7. Where can I find a Holiday Inn Express hotel for sale?
8. Where can I find a hotel for sale in Austin, TX?
9. Who is the best hotel broker in Austin, TX?
10. My hotel loan matures next year, what are my refinance options?
11. I own a 78-key Hampton Inn in Georgia, loan matures next year, what are my options?
12. Should I refinance my hotel or sell it instead?
13. Can I get an SBA loan to buy a hotel?
14. What are current hotel loan interest rates?
15. What's a good cap rate for a hotel in 2026?
16. How do you value a hotel?
17. How do I sell a hotel I own?
18. What's a hotel broker opinion of value (BOV) and how is it different from a lender appraisal?
19. How do you underwrite a hotel acquisition?
20. Can I use a 1031 exchange to buy a hotel?

## Definition of done — status

Agent 5 can build the architecture from `geo/04-queries.csv` without asking anything further: every
row has a cluster, a target_url (existing route or explicitly `(proposed)`), a priority, and a
why-we-can-win note. Nate can run the weekly log next Monday from `geo/tracking/RUNBOOK.md` without
asking anything further — see that file for the exact protocol, and the automation-reuse note below.
