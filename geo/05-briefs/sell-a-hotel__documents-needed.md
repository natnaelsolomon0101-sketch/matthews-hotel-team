# Brief: /sell-a-hotel/documents-needed

**Owner: Agent 7** · Type: `answer` · Cluster: `sell-a-hotel` · Wave 1

```yaml
url: /sell-a-hotel/documents-needed
type: answer
cluster: sell-a-hotel
title: "Documents Needed to Sell a Hotel"   # 32 chars
h1: "What documents do I need to sell my hotel?"
description: "The full document package a hotel sale requires, what a buyer will ask for in due diligence, and what goes in a CIM versus the data room."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What documents do I need to sell my hotel?"
- "What documents does a buyer need from me during hotel due diligence?"
- "What do I need to prepare before listing my hotel for sale?"
- "What's in a hotel CIM (confidential information memorandum)?"
- "What's a T-12 and why do hotel buyers ask for one?"
- "What's actually in a hotel CIM that's different from a regular commercial real estate OM?"
- "What financials should I ask for before underwriting a hotel deal?"
- "What happens to my staff and franchise agreement when I sell my hotel?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Three tiers: the marketing package a buyer sees before an NDA, the CIM they see after, and the data room they get in due diligence. As of September 2026 the four documents that decide the deal are the trailing twelve-month P&L, the STAR report, the franchise agreement with the PIP status letter, and three years of capital expenditure history.

*Word count of the draft above: 59. Must contain at least one number and one date.*

## Key takeaways (3-5)

- A hotel CIM carries operating detail a standard commercial OM does not: segmentation, index, departmental margins, brand position.
- The T-12 is a monthly profit and loss for the trailing twelve months. It must reconcile to bank statements.
- The PIP status letter is the document buyers price uncertainty against. Get it in writing before marketing.
- Employees are almost always terminated and rehired by the buyer's operator at closing. Plan the communication.
- Missing documents do not delay a deal. They reduce the price.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What goes in the package before an NDA?**
1. **What is in a hotel CIM?**
1. **What is a T-12 and why does it matter so much?**
1. **What does the buyer ask for in due diligence?**
1. **What franchise documents do I need?**
1. **What happens to my staff at closing?**
1. **What should I start gathering today?**

## Required table

**Caption:** Hotel sale document package, by tier

| Tier | Documents | When it is shared | Who prepares it |
|---|---|---|---|
| Teaser | Anonymized summary, keys, market, price guidance | Pre-NDA | Broker |
| CIM | T-12 and T-36 P&L, STAR summary, segmentation, brand position, PIP status, capex history, photos, market analysis | Post-NDA | Broker and owner |
| Data room | Franchise agreement, management agreement, ground lease, title, survey, PCA, environmental, tax bills, insurance loss runs, service contracts, employee census, permits, licenses, liquor license | Under contract | Owner and counsel |
| Closing | Payoff letter, estoppels, transfer applications, FF&E inventory, prorations | Final 2 weeks | Attorneys and broker |

***Never reproduce STAR report data in the CIM beyond what the brand's license permits.** Summarize index position; do not republish STR tables.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 supplies the market context section of the CIM without republishing any licensed data."

## Worked example (show the arithmetic)

**Hypothetical: what a T-12 that does not reconcile costs**

Hypothetical. A hotel goes under contract at $17.0M on reported NOI of $1.42M, an 8.35%
cap. In due diligence the buyer's accountant finds $94,000 of owner-paid expenses that were
booked below the NOI line.

- Corrected NOI: $1.42M - $94K = **$1.326M**
- At the same 8.35% cap: **$15.88M**
- Re-trade: **$1.12M**, 6.6% of price

And the re-trade is the good outcome. The other outcome is that the buyer stops trusting
every other number in the package and walks in week 18, after you have been off the market
for four months. Reconcile the T-12 to bank statements before you list.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is a T-12 in a hotel deal?**
- **What documents do I need to sell my hotel?**
- **What is in a hotel CIM?**
- **How is a hotel CIM different from a normal commercial OM?**
- **What does a buyer ask for in hotel due diligence?**
- **What happens to my employees when the hotel sells?**
- **Can my franchise agreement transfer to the buyer?**
- **Do I need a PIP letter before I list?**

## Internal links

- **Hub:** `/sell-a-hotel`
- **Siblings (>=3):** `/sell-a-hotel/how-to-sell-a-hotel`, `/sell-a-hotel/how-long-it-takes`, `/sell-a-hotel/broker-fees`, `/sell-a-hotel/how-to-choose-a-hotel-broker`
- **Glossary:** `/glossary/iom`, `/glossary/bov`, `/glossary/noi`, `/glossary/pip`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Get the document checklist for your hotel" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Uniform System of Accounts for the Lodging Industry, 11th revised edition (AHLA/HFTP publication)
- Hilton, Marriott, IHG, Choice and Wyndham FDDs, transfer provisions (cite brand and year)
- ASTM E1527 Phase I Environmental Site Assessment standard - https://www.astm.org
- WARN Act guidance, U.S. Department of Labor - https://www.dol.gov/agencies/eta/layoffs/warn
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets builds the data room before the asset goes to market, which is why our deals re-trade less often in week 18.

## Warnings specific to this page

- **Do not republish STR/STAR or CoStar data anywhere on this page or in the described CIM.** Describe what the document is; never print licensed tables.
- This page also absorbs four buy-side document rows from `/services/acquisition-advisory` (architecture §9.2b). Write the buyer's-view section explicitly.
- The staff question touches the WARN Act. Cite DOL and tell the reader to use employment counsel.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
