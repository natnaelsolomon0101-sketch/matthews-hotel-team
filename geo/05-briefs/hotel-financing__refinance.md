# Brief: /hotel-financing/refinance

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/refinance
type: answer
cluster: hotel-financing
title: "How to Refinance a Hotel Loan in 2026"   # 37 chars
h1: "How do I refinance a hotel loan before it matures?"
description: "A step-by-step hotel refinance in 2026: when to start, how proceeds are sized, what to do when value dropped, and the options when the numbers do not work."
updated: 2026-09-17
author: miles-cortez
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How do I refinance a hotel loan before it matures?"
- "I financed my hotel at 3-4% in 2019-2021 and it's maturing into a 6-8% market - what do I do?"
- "My hotel loan matures next year - what are my refinance options?"
- "What should I be doing 12+ months before my hotel loan matures?"
- "How much equity do I need to refinance my hotel?"
- "What are my options if my hotel's appraised value has dropped since I bought it?"
- "How long does a hotel refinance take from application to close?"
- "Will a PIP deadline affect my ability to refinance my hotel?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Start twelve months before maturity. Order a fresh valuation, get the PIP status in writing, and size the new loan against today's rate, not the old one. If the new loan is smaller than the balance, the gap closes with equity, a lender extension, mezzanine, or a sale. Refinances take 60 to 90 days from application, so in September 2026 the clock is the risk.

*Word count of the draft above: 65. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Twelve months out is the right time to start. Ninety days out, your options narrow to whatever the incumbent lender offers.
- A loan written at 3.5 percent and refinanced at 7.25 percent supports a materially smaller balance on the same NOI.
- The gap between the old balance and the new proceeds has four honest solutions and one bad one, which is waiting.
- An unresolved PIP deadline is the most common reason a hotel refinance stalls.
- Budget 60 to 90 days from complete application to funding.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **When should I start a hotel refinance?**
1. **How do I size the new loan?**
1. **What happens if the new loan is smaller than my balance?**
1. **My hotel appraised lower than I paid. Now what?**
1. **Does a PIP deadline block the refinance?**
1. **How long does the process take, step by step?**
1. **When is refinancing the wrong answer?**

## Required table

**Caption:** Closing a proceeds gap at refinance

| Option | What it costs | When it fits | What it does not fix |
|---|---|---|---|
| Write a check | Cash out of pocket | You have liquidity and conviction on the hold | A structurally weak asset |
| Extension with the incumbent lender | Fee, often a rate bump, sometimes a paydown | Cash flow is fine and the issue is timing | A permanent value shortfall |
| Mezzanine or preferred equity | Highest cost in the stack, 11% and up | Bridging to a near-term value event | Thin coverage; it makes coverage worse |
| Bridge loan, then permanent | Floating rate plus a cap, 1 to 3 years | PIP or repositioning is in front of you | A market that is not coming back |
| Sell | Brokerage fee and a taxable event | The gap is permanent and the hold thesis is gone | Nothing. It is the clean answer when it is the answer. |

*Order the rows worst-fit last on the page. Do not present selling as the default; present it as one of five.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows the permanent-financing rate a refinance is sized against today."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: 10-year fixed permanent, stabilized select-service]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: a 2021 loan maturing in 2027**

Hypothetical. A 110-key hotel financed in 2021: $14.0M at 3.75%, 30-year amortization.
Current balance $12.6M. NOI is $1.75M, roughly flat since origination.

- Old annual debt service: about **$778,000**. DSCR = $1.75M / $778K = **2.25x**.
- New quote at 7.25%, 25-year amortization, 1.35x test.
  Max debt service = $1.75M / 1.35 = **$1,296,296**.
  Annual constant per $1M at 7.25% over 25 years is about $86,800.
  New loan = $1,296,296 / $86,800 per $1M = **$14.93M**.

In this case the refinance covers the balance with room to spare, because the DSCR was
2.25x. Now rerun it with NOI at $1.20M instead: max debt service $888,889, new loan
**$10.24M**, against a $12.6M balance. The gap is **$2.36M**. The difference between the
two outcomes is entirely NOI, not the rate. Diagnose which one you have before you shop.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **When should I start refinancing my hotel loan?**
- **How long does a hotel refinance take?**
- **Can I refinance if my hotel is worth less than I paid?**
- **Will my lender extend instead of refinancing?**
- **How much equity do I need for a hotel refinance?**
- **Does an open PIP stop a refinance?**
- **Can I refinance a hotel loan with a prepayment penalty outstanding?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/refinance-or-sell`, `/hotel-financing/loan-maturities-2026-2027`, `/hotel-financing/bridge-loans`, `/hotel-financing/loan-requirements`
- **Glossary:** `/glossary/dscr`, `/glossary/noi`, `/glossary/pip`
- **Data:** `/rates`
- **CTA (exactly one):** "Have us size your refinance" → `/contact`

## Author / reviewer

- **Author:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- U.S. Treasury daily par yield curve - https://home.treasury.gov/interest-rates
- Trepp public research releases on CMBS delinquency (public posts only) - https://www.trepp.com/trepptalk
- MBA Commercial Real Estate Finance loan maturity volumes press release
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets sizes these three ways before a client goes to market: refinance, extend, or sell, with the arithmetic shown for each.

## Warnings specific to this page

- Cross-link the live insight `/insights/hotel-owners-refinancing-wave-2026` as the dated companion (architecture §3.2). Do not restate it.
- No maturity-wall dollar figure on this page until the $30B vs. Trepp $18.7B dispute is resolved.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
