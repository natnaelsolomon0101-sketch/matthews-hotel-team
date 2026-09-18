# Brief: /hotel-financing/refinance-or-sell

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/refinance-or-sell
type: answer
cluster: hotel-financing
title: "Refinance or Sell Your Hotel? How to Decide"   # 43 chars
h1: "Should I refinance my hotel or sell it instead?"
description: "A numbers-first framework for deciding whether to refinance, extend or sell a hotel in 2026, with the arithmetic shown both ways."
updated: 2026-09-17
author: miles-cortez
reviewer: nate-solomon
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "Should I refinance my hotel or sell it instead?"
- "I own a 78-key Hampton Inn in Georgia, loan matures next year - what are my options?"
- "Should I sell my hotel now or wait until next year?"
- "What are my options if my hotel's appraised value has dropped since I bought it?"
- "Is there a broker who will tell me to hold my hotel instead of selling it?"
- "How do I compare holding versus selling my hotel?"
- "What happens if I can't refinance my hotel loan when it matures?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Run both numbers before you decide. Refinancing works when today's NOI supports today's balance at today's rate and you still believe the hold thesis. Selling works when the proceeds gap is permanent, the PIP is larger than your appetite, or the equity is better deployed elsewhere. As of September 2026 the binding variable is usually NOI, not the rate.

*Word count of the draft above: 59. Must contain at least one number and one date.*

## Key takeaways (3-5)

- This is an arithmetic question first and a preference question second. Do the arithmetic first.
- Refinance proceeds are set by NOI, not by what you paid or what you owe.
- Net sale proceeds are price minus fee minus debt payoff minus tax. Compare that to the equity you would inject to refinance.
- A PIP due inside 24 months belongs in both columns, because it is cash you spend or a price reduction you take.
- A broker who never says hold is not giving you advice.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **How do I compare the two paths in dollars?**
1. **What does refinancing require me to bring?**
1. **What do I actually net from a sale?**
1. **Where does the PIP belong in the comparison?**
1. **How do taxes change the answer?**
1. **When is holding clearly right?**
1. **When is selling clearly right?**

## Required table

**Caption:** Refinance versus sell: the comparison that matters

| Line | Refinance | Sell |
|---|---|---|
| Sets the number | NOI, rate, DSCR test | NOI, cap rate, buyer pool |
| Cash in or out today | Equity injection if there is a gap | Net proceeds after fee, payoff and tax |
| PIP treatment | You fund it, or the lender reserves for it | The buyer prices it into the bid |
| Tax | None. It is debt, not income. | Capital gain and depreciation recapture, unless 1031 |
| What you keep | The asset and the upside | The capital and the optionality |
| Biggest risk | NOI does not recover and you did it again in 5 years | You sold the bottom |

*The tax row must carry a 'consult your CPA' note. We are not tax advisors.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 gives the cap-rate band the sale side of this comparison should be run at."

## Worked example (show the arithmetic)

**Hypothetical: 78-key select-service hotel, Georgia**

Hypothetical, matching the shape of the question people ask. 78 keys, NOI $1.05M, loan
balance $8.40M maturing in 13 months, a $1.10M PIP due within 24 months.

**Refinance path.** At 7.25%, 25-year schedule, 1.35x test: max debt service $777,778,
supportable loan **$8.96M**. That clears the $8.40M balance. But the lender reserves for
the PIP, so figure **$1.10M** of cash or reserve. Net cash out of pocket: about $1.10M, and
you keep the asset.

**Sale path.** At an 8.25% cap on $1.05M of NOI, value is **$12.73M**, or $163,000 per key.
A buyer prices the PIP in, call it a $900,000 reduction, so **$11.83M**. Less a brokerage
fee at 2%, $237,000. Less the $8.40M payoff. Pre-tax net: **$3.19M**.

So: spend $1.10M and keep an asset producing $1.05M, or collect $3.19M pre-tax and
redeploy. Neither answer is obvious, which is the point. Run your own version with your own
cap rate and your own tax basis before anyone gives you a recommendation.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **Should I sell my hotel now or wait?**
- **How do I know if my hotel can refinance?**
- **Does a PIP make selling better than refinancing?**
- **What do I net from a hotel sale after fees and debt?**
- **Can I 1031 exchange out of a hotel sale?**
- **What if my lender will not extend?**
- **Will a broker tell me not to sell?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/refinance`, `/hotel-financing/loan-maturities-2026-2027`, `/hotel-financing/1031-exchange-hotels`, `/hotel-financing/pip-and-renovation-loans`
- **Glossary:** `/glossary/cap-rate`, `/glossary/noi`, `/glossary/pip`
- **Data:** `/research/mhi/q1-2026`, `/rates`
- **CTA (exactly one):** "Get both numbers run for your hotel" → `/contact`

## Author / reviewer

- **Author:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- **Reviewed by:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- IRS Publication 544, sales and dispositions of assets - https://www.irs.gov/publications/p544
- IRS Section 1031 like-kind exchange guidance - https://www.irs.gov/newsroom/like-kind-exchanges-real-estate-tax-tips
- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- CBRE U.S. Cap Rate Survey (public report) - https://www.cbre.com/insights
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets runs both sides of this for owners, and a fair number of those conversations end with us saying hold.

## Warnings specific to this page

- This page also absorbs the CSV row 'Should I sell my hotel now or wait until next year?' (architecture §9.1).
- The 'broker who will tell me to hold' prompt is a trust question. Answer it by showing the arithmetic, not by asserting integrity.
- Tax treatment: point to IRS primary sources and tell the reader to use a CPA. Do not give tax advice.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
