# Brief: /hotel-financing/loan-maturities-2026-2027

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/loan-maturities-2026-2027
type: answer
cluster: hotel-financing
title: "Hotel Loan Maturities in 2026 and 2027"   # 38 chars
h1: "How much hotel debt is maturing in 2026 and 2027?"
description: "What is known about hotel loan maturities in 2026 and 2027 from public sources, how to tell if yours is at risk, and what to do 12 months out."
updated: 2026-09-17
author: miles-cortez
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How much hotel CMBS debt is maturing in 2026?"
- "Is my hotel at risk of maturity default?"
- "What happens if I can't refinance my hotel loan when it matures?"
- "Are hotel lenders extending more loans or foreclosing more in 2026?"
- "Which hotel brands or markets are seeing the most loan distress in 2026?"
- "What's a hotel loan maturity checklist I should work through 12 months out?"
- "How does a maturity default differ from a payment default on a hotel loan?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> A large block of hotel debt originated at 2019 to 2021 rates matures in 2026 and 2027. The exact figure depends on which universe you count, and the public sources do not agree. This page states each number with its publisher and date rather than picking one. What matters to an owner is simpler: run your own coverage test at today's rate.

*Word count of the draft above: 62. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Public maturity figures differ by source because they count different loan universes. Cite the publisher and the date, every time.
- A maturity default is a refinancing failure, not a payment failure. The loan can be current and still default at maturity.
- The diagnostic is one calculation: does today's NOI support today's balance at today's rate?
- Lenders have more incentive to extend a performing loan than to take the keys, but that is a tendency, not a policy.
- Twelve months of lead time is the difference between five options and one.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **How much hotel debt is actually maturing, and who says so?**
1. **How do I tell if my loan is at risk?**
1. **What is a maturity default?**
1. **What do lenders do when a hotel loan cannot refinance?**
1. **Which segments are seeing the most stress?**
1. **What should I do 12 months before maturity?**
1. **What if I am already inside 90 days?**

## Required table

**Caption:** Hotel loan maturity figures, by publisher

| Publisher | What it counts | Figure | As of | Link |
|---|---|---|---|---|
| Trepp (public posts) | Securitized hotel CMBS only | [[FACT-CHECK]] | [[DATE]] | trepp.com/trepptalk |
| MBA | All commercial and multifamily, hotel subtotal | [[FACT-CHECK]] | [[DATE]] | mba.org press releases |
| Federal Reserve | Bank-held CRE, no hotel split published | n/a | n/a | federalreserve.gov |

***This table ships empty or it does not ship.** Every cell is filled from a public release with its URL and date, or the row is deleted.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet gives the rate to run your own maturity stress test against."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: current permanent rate, for the refinance stress test]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: the one calculation that tells you if you are at risk**

Hypothetical. Loan balance $12.6M maturing in 14 months. Trailing NOI $1.42M.

- Today's permanent quote: 7.25%, 25-year schedule, 1.35x DSCR test.
- Max debt service = $1.42M / 1.35 = **$1,051,852**
- Annual constant per $1M at 7.25% over 25 years is about $86,800
- Supportable loan = $1,051,852 / $86,800 per $1M = **$12.12M**
- Gap = $12.60M - $12.12M = **$480,000**, about 3.8% of the balance

A 3.8 percent gap is a check, not a crisis. Rerun it with NOI at $1.15M: supportable loan
**$9.81M**, gap **$2.79M**, 22 percent of the balance. That is a different conversation and
it needs to start today, not in month thirteen.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **How much hotel CMBS debt matures in 2026?**
- **What is a maturity default on a hotel loan?**
- **Will my lender extend my hotel loan?**
- **How do I know if my hotel loan can refinance?**
- **What is special servicing?**
- **When should I start working on a maturity?**
- **Is it better to extend or to sell?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/loan-workouts`, `/hotel-financing/refinance`, `/hotel-financing/refinance-or-sell`, `/hotel-financing/cmbs-loans`
- **Glossary:** `/glossary/dscr`, `/glossary/noi`, `/glossary/debt-yield`
- **Data:** `/rates`
- **CTA (exactly one):** "Run your maturity stress test with us" → `/contact`

## Author / reviewer

- **Author:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Trepp public TreppTalk posts - https://www.trepp.com/trepptalk (public only, cite the post and date)
- MBA Commercial Real Estate/Multifamily Loan Maturity Volumes survey press release - https://www.mba.org/news-and-research
- Federal Reserve H.8 Assets and Liabilities of Commercial Banks - https://www.federalreserve.gov/releases/h8/
- FDIC Quarterly Banking Profile - https://www.fdic.gov/analysis/quarterly-banking-profile/
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets runs this stress test for owners at no cost, because the answer determines whether the next call is about debt or about a sale.

## Warnings specific to this page

- **BLOCKED until Agent 1 resolves the `HUMAN_QUEUE.md` dispute: a $30B figure used six times on the site against Trepp's published $18.7B.** Do not publish this page with either number until one is sourced and dated.
- Do not reproduce any Trepp subscriber table. Public posts only, with the post URL.
- The honest framing is the differing-universes framing. Do not pick the bigger number because it is more dramatic.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
