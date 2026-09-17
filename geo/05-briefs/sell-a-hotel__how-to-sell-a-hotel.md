# Brief: /sell-a-hotel/how-to-sell-a-hotel

**Owner: Agent 7** · Type: `answer` · Cluster: `sell-a-hotel` · Wave 1

```yaml
url: /sell-a-hotel/how-to-sell-a-hotel
type: answer
cluster: sell-a-hotel
title: "How to Sell a Hotel: Step by Step"   # 33 chars
h1: "What is the step-by-step process for selling a hotel?"
description: "The 24-week hotel disposition process in detail: every stage, who drives it, what can go wrong, and where deals actually die."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What's the step-by-step process for selling a hotel?"
- "How do I sell a hotel I own?"
- "Can I sell my hotel without a broker?"
- "What's the best time of year to list a hotel for sale?"
- "How does a hotel call for offers work?"
- "What happens between accepted offer and closing on a hotel?"
- "How many buyers actually see my hotel?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Eight stages over roughly 24 weeks, on a September 2026 timeline: value opinion, package, targeted marketing, call for offers, best and final, purchase agreement, due diligence, close. Franchise approval runs in parallel with due diligence and is the most common source of delay. Most deals that fail, fail in due diligence over financial discrepancies, not over price.

*Word count of the draft above: 57. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Twenty-four weeks is the plan. Franchise approval is the variable that stretches it.
- A call for offers on a fixed date creates competition. Rolling offers do not.
- Deals die in due diligence, over the T-12 not reconciling, far more often than over price.
- Seasonality matters less than readiness. A packaged asset beats a well-timed unpackaged one.
- Selling without a broker is possible and it narrows the buyer pool to people who found you.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What happens in each stage?**
1. **How does a call for offers actually work?**
1. **What happens after I accept an offer?**
1. **Where do hotel deals usually die?**
1. **How does franchise approval fit in?**
1. **Is there a best time of year to list?**
1. **Can I do this without a broker?**

## Required table

**Caption:** Where hotel deals fail, and the fix

| Failure point | What it looks like | When it shows up | How to prevent it |
|---|---|---|---|
| T-12 does not reconcile | Buyer's audit finds NOI overstated | Due diligence, week 16 | Reconcile to bank statements before you list |
| Undisclosed PIP | Scope letter arrives mid-diligence | Week 14 to 18 | Request the scope letter before marketing |
| Franchise approval stalls | Buyer's application sits with the brand | Week 16 to 24 | Start the application at PSA signing |
| Buyer financing falls out | Lender resizes after appraisal | Week 18 to 22 | Vet the buyer's lender, not just the buyer |
| Deferred maintenance | PCA finds more than expected | Week 15 | Get your own PCA first |

*This table is the most useful thing on the page. Lead the marketing of this page with it.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 shows the transaction counts and cap-rate bands the buyer list is built from."

## Worked example (show the arithmetic)

**Hypothetical: a 24-week calendar**

Hypothetical. Engagement signed **January 6**.

- Weeks 1 to 2, value opinion delivered: **January 20**
- Weeks 3 to 5, package complete: **February 10**
- Weeks 6 to 11, marketing and tours: **March 24**
- Week 12, call for offers: **March 31**
- Weeks 13 to 14, best and final, buyer selected: **April 14**
- Weeks 15 to 17, PSA signed, deposit hard-dated: **May 5**
- Weeks 18 to 23, due diligence and franchise approval in parallel: **June 16**
- Week 24, close: **June 23**

Add four weeks if the franchise application starts at the end of due diligence instead of
at PSA signing. That one sequencing choice is worth a month.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **How long does it take to sell a hotel?**
- **What is a call for offers?**
- **Can I sell a hotel without a broker?**
- **What is the best time of year to sell a hotel?**
- **What happens during hotel due diligence?**
- **Why do hotel deals fall apart?**
- **When does franchise approval start?**

## Internal links

- **Hub:** `/sell-a-hotel`
- **Siblings (>=3):** `/sell-a-hotel/how-long-it-takes`, `/sell-a-hotel/documents-needed`, `/sell-a-hotel/broker-fees`, `/sell-a-hotel/how-to-choose-a-hotel-broker`
- **Glossary:** `/glossary/bov`, `/glossary/iom`, `/glossary/pip`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Talk through your timeline" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Hilton, Marriott, IHG, Choice and Wyndham Franchise Disclosure Documents (cite brand and year)
- IRS Publication 544 - https://www.irs.gov/publications/p544
- ASTM E2018 Property Condition Assessment standard - https://www.astm.org
- ALTA/NSPS Land Title Survey standards - https://www.alta.org
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets publishes this timeline at `/process` and runs against it, which is why the franchise application starts at PSA signing on our deals.

## Warnings specific to this page

- **This page is the canonical evergreen answer.** The live `/insights/how-to-sell-a-hotel-2026` narrows to 2026 conditions and links here (architecture §3.2). Do not duplicate it.
- Link the live `/process` page. Do not rebuild the 24-week timeline as new content.
- Answer 'can I sell without a broker' honestly. Yes, and here is what changes.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
