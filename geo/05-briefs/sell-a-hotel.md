# Brief: /sell-a-hotel

**Owner: Agent 7** · Type: `hub` · Cluster: `sell-a-hotel` · Wave 1

```yaml
url: /sell-a-hotel
type: hub
cluster: sell-a-hotel
title: "How to Sell a Hotel: The 2026 Owner's Guide"   # 43 chars
h1: "What is involved in selling a hotel?"
description: "What selling a hotel actually involves in 2026: the process, the timeline, the fee, the documents, and the questions owners ask before they start."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How do I sell a hotel I own?"
- "Should I sell my hotel confidentially or list it publicly?"
- "Does having an open PIP kill my deal if I'm trying to sell?"
- "How does a PIP affect the sale price of a hotel?"
- "What's the step-by-step process for selling a hotel?"
- "What do I need to prepare before listing my hotel for sale?"
- "Can I sell my hotel without a broker?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Selling a hotel is a marketed process that runs roughly 24 weeks from engagement to close. It starts with a value opinion, moves to a document package and a targeted buyer list, then a call for offers, then 45 to 60 days of due diligence and franchise approval. In September 2026 the two things that move price most are NOI quality and PIP status.

*Word count of the draft above: 64. Must contain at least one number and one date.*

## Key takeaways (3-5)

- Budget about 24 weeks from engagement to close. Due diligence and franchise approval own the back half.
- A broker opinion of value comes first. You cannot price a process you have not valued.
- An open PIP does not kill a sale. An undisclosed PIP does.
- Confidential and marketed are both real options, and they produce different buyer pools.
- The document package is the deal. Buyers price uncertainty, and missing documents are uncertainty.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What are the steps to sell a hotel?**
1. **How long does it take?**
1. **What does it cost?**
1. **What do I have to prepare?**
1. **Should I sell confidentially or market it openly?**
1. **Does an open PIP kill my deal?**
1. **Can I sell without a broker?**

## Required table

**Caption:** The hotel sale process, stage by stage

| Stage | What happens | Typical duration | Who drives it |
|---|---|---|---|
| Value opinion | Broker opinion of value on current financials | 1 to 2 weeks | Broker |
| Package | CIM, financial model, photos, data room | 2 to 3 weeks | Broker and owner |
| Marketing | Targeted outreach, NDAs, tours | 4 to 6 weeks | Broker |
| Call for offers | Offers due on a common date, then best and final | 2 to 3 weeks | Broker |
| PSA negotiation | Contract, deposit, access | 2 to 3 weeks | Attorneys |
| Due diligence | Buyer inspection, financial audit, PCA, survey | 30 to 60 days | Buyer |
| Franchise approval | Buyer application, PIP scope, comfort letter | 30 to 60 days, runs in parallel | Brand |
| Close | Funding, title, FF&E and inventory settlement | 1 week | Everyone |

*Durations run in parallel in the back half. Say that; do not add the column.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 gives the cap-rate band your value opinion will be built against."

## Worked example (show the arithmetic)

**Hypothetical: what an open PIP does to a bid**

Hypothetical. A 96-key select-service hotel with $1.42M of NOI. At an 8.25% cap the
unencumbered value is $1.42M / 0.0825 = **$17.21M**.

Now add a brand PIP scoped at $2.30M, due within 18 months.

- Buyer deducts the PIP cost: $17.21M - $2.30M = **$14.91M**
- Buyer deducts displacement during the renovation, say 60 rooms out for 90 days:
  roughly **$310,000**
- Buyer adds a risk premium for scope uncertainty, typically 10% to 20% of the PIP:
  call it **$300,000**

Indicative bid: **$14.30M**, versus $17.21M unencumbered. The PIP cost $2.30M and the price
fell $2.91M. The extra $610,000 is what uncertainty costs. Getting the scope letter in
writing before you go to market is how you get most of that back.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **How long does it take to sell a hotel?**
- **What does it cost to sell a hotel through a broker?**
- **What documents do I need to sell my hotel?**
- **Can I sell my hotel confidentially?**
- **Does an open PIP stop a hotel sale?**
- **Can I sell a hotel without a broker?**
- **Do I need a broker opinion of value first?**
- **What happens to my staff when the hotel sells?**

## Internal links

- **Hub:** `/sell-a-hotel`
- **Siblings (>=3):** `/sell-a-hotel/how-to-sell-a-hotel`, `/sell-a-hotel/how-long-it-takes`, `/sell-a-hotel/broker-fees`, `/sell-a-hotel/documents-needed`, `/sell-a-hotel/how-to-choose-a-hotel-broker`
- **Glossary:** `/glossary/bov`, `/glossary/pip`, `/glossary/iom`, `/glossary/cap-rate`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Request a confidential broker opinion of value" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- IRS Publication 544, sales and dispositions of assets - https://www.irs.gov/publications/p544
- Hilton, Marriott, IHG, Choice and Wyndham Franchise Disclosure Documents (cite brand and year)
- CBRE U.S. Cap Rate Survey (public report) - https://www.cbre.com/insights
- AHLA published research - https://www.ahla.com/research (cite report and date)
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets runs hotel dispositions on this timeline and publishes the value index the pricing work starts from.

## Warnings specific to this page

- This is the hub. Rule R6: link every spoke with that spoke's H1 question as the anchor text.
- Link the live `/process` page for the 24-week detail rather than restating it.
- Cross-link `/insights/how-to-sell-a-hotel-2026` as the 2026-conditions companion (architecture §3.2).

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
