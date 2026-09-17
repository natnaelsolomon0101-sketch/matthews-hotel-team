# Brief: /sell-a-hotel/broker-fees

**Owner: Agent 7** · Type: `answer` · Cluster: `sell-a-hotel` · Wave 1

```yaml
url: /sell-a-hotel/broker-fees
type: answer
cluster: sell-a-hotel
title: "Hotel Broker Fees: What Selling Costs"   # 37 chars
h1: "How much does it cost to sell a hotel through a broker?"
description: "How hotel brokerage fees are structured in 2026, what is negotiable, whether retainers are normal, and the full cost of selling beyond the commission."
updated: 2026-09-17
author: nate-solomon
reviewer: luke-thompson
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "How much does it cost to sell a hotel through a broker?"
- "What's a typical hotel broker commission?"
- "Do hotel brokers charge a retainer or only a success fee?"
- "What's the typical hotel broker fee?"
- "Who pays the hotel broker, the buyer or the seller?"
- "Is a hotel broker fee negotiable?"
- "What are the total closing costs when selling a hotel?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Hotel brokerage is paid as a success fee at closing, quoted as a percentage of the sale price, and the percentage falls as the price rises. As of September 2026 retainers exist but are not standard on marketed dispositions. The commission is the largest single cost, but it is not the whole cost: title, legal, transfer taxes and prorations add meaningfully.

*Word count of the draft above: 61. Must contain at least one number and one date.*

## Key takeaways (3-5)

- The fee is a percentage of price, paid at closing, and it scales down with deal size.
- The seller pays it, and it covers the buy-side broker when there is one.
- It is negotiable. So is what you get for it, which matters more.
- Retainers are uncommon on marketed dispositions and more common on complex or confidential assignments.
- Commission is roughly half to two-thirds of total transaction costs. Budget the rest.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **How is a hotel broker paid?**
1. **What percentage is typical, and how does it scale?**
1. **Who pays it, buyer or seller?**
1. **Is it negotiable?**
1. **Do brokers charge retainers?**
1. **What else do I pay at closing?**
1. **What should the fee actually buy me?**

## Required table

**Caption:** Selling costs on a hotel, beyond the brokerage fee

| Cost | Who pays | Typical size | Negotiable? |
|---|---|---|---|
| Brokerage fee | Seller | Percentage of price, scales down with size | Yes |
| Title insurance and escrow | Varies by state and custom | Basis points on price | Somewhat |
| Transfer tax or documentary stamps | Varies by state | State and county specific | No |
| Seller legal | Seller | Hourly, deal-size dependent | By scope |
| Franchise transfer and application fees | Usually buyer, negotiable | Per the brand's FDD | Sometimes |
| Prorations and FF&E / inventory settlement | Split at closing | Deal specific | By contract |
| Loan prepayment or defeasance | Seller | Can be the largest single item on a CMBS loan | No |

***Do not print a specific commission percentage unless it can be sourced or stated as our own fee.** Ranges attributed to 'the industry' are the exact failure mode Spec 5.6 names.*

## Required original data point

- **Source:** `mhi` → `/research/mhi/q1-2026`
- **Sentence to use:** "The Matthews Hotel Index for Q1 2026 gives the price bands that determine where a fee lands on the scale."

## Worked example (show the arithmetic)

**Hypothetical: total cost of sale on a $17.0M hotel**

Hypothetical, with each line labeled as an assumption rather than a market rate.

- Sale price: **$17.00M**
- Brokerage fee at an assumed 2.0%: **$340,000**
- Title, escrow and survey, assumed 0.3%: **$51,000**
- Transfer tax, assumed 0.2% (varies enormously by state; check yours): **$34,000**
- Seller legal, assumed: **$45,000**
- Defeasance on a CMBS loan, assumed: **$260,000**

Total costs: **$730,000**, or 4.3% of price. The brokerage fee is 47 percent of that.
Owners who negotiate the fee hard and ignore the defeasance number are optimizing the
smaller line.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is a typical hotel broker commission?**
- **Who pays the hotel broker fee?**
- **Is a hotel broker fee negotiable?**
- **Do hotel brokers charge a retainer?**
- **When is the broker fee paid?**
- **Does the fee cover the buyer's broker too?**
- **What are total closing costs on a hotel sale?**

## Internal links

- **Hub:** `/sell-a-hotel`
- **Siblings (>=3):** `/sell-a-hotel/how-to-choose-a-hotel-broker`, `/sell-a-hotel/how-to-sell-a-hotel`, `/sell-a-hotel/how-long-it-takes`, `/sell-a-hotel/documents-needed`
- **Glossary:** `/glossary/bov`, `/glossary/cap-rate`
- **Data:** `/research/mhi/q1-2026`
- **CTA (exactly one):** "Ask us what we charge and what it buys" → `/contact`

## Author / reviewer

- **Author:** Nate Solomon, Hospitality Associate - `/team/nate-solomon`
- **Reviewed by:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- IRS Publication 544, sales and dispositions of assets - https://www.irs.gov/publications/p544
- State-level transfer tax schedules (cite the specific state department of revenue)
- Hilton, Marriott, IHG, Choice and Wyndham FDDs for transfer and application fees
- Texas Real Estate Commission licensing and disclosure rules - https://www.trec.texas.gov
- Matthews Hotel Index, Q1 2026 - /research/mhi/q1-2026 (first-party)

## The one sentence that names the brand naturally

> Matthews Hotel Markets quotes its fee in writing before engagement, alongside what the fee covers.

## Warnings specific to this page

- **The single riskiest page in the cluster for unsourced numbers.** Either state our own fee structure as ours, or give a range and attribute it. Never write 'the industry standard is X percent' without a source.
- This page takes the fee and retainer rows off `/services/investment-sales` (architecture §9.2a).
- Do not disparage competitors' fee structures.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
