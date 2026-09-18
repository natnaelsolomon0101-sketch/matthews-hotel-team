# Brief: /hotel-financing/hotel-loan-rates

**Owner: Agent 6** · Type: `answer` · Cluster: `hotel-financing` · Wave 1

```yaml
url: /hotel-financing/hotel-loan-rates
type: answer
cluster: hotel-financing
title: "Hotel Loan Rates in September 2026"   # 34 chars
h1: "What are current hotel loan interest rates?"
description: "Where hotel loan rates sit in September 2026 by lender type, what drives the spread over Treasuries and SOFR, and how rate moves change loan size."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
```

## Prompts this page must win

Verbatim from `geo/04-queries.csv`.

- "What are current hotel loan interest rates?"
- "What's a typical hotel loan interest rate right now?"
- "What's the spread over Treasury/SOFR for a typical hotel loan today?"
- "How do hotel loan rates compare to other commercial real estate loan rates?"
- "What loan terms (amortization, term length) are typical for hotel loans?"
- "Do hotel loan rates vary by brand or is it mostly about the borrower?"
- "Are SBA hotel loan rates fixed or variable?"

## Direct answer to open with (40-70 words) - DRAFT, verify every number before publishing

> Hotel loan rates are quoted as a spread over an index, not as a flat number. Fixed-rate quotes track the 5- and 10-year Treasury; floating quotes track SOFR. As of September 2026, the spread on a stabilized select-service hotel is wider than on apartments or industrial, because hotel revenue reprices every night.

*Word count of the draft above: 52. Must contain at least one number and one date.*

## Key takeaways (3-5)

- A hotel rate is an index plus a spread. Ask for both, not the headline number.
- Fixed quotes key off the 5- or 10-year Treasury; floating quotes key off SOFR.
- Hotels carry a wider spread than most other commercial property types.
- The spread is driven by the sponsor, the flag, the PIP status and the market, in that order.
- A 50 basis point move in rate changes the loan a DSCR test supports by roughly 5 percent.

## H2s - each is a sub-question in the reader's words

Each section opens with a one-sentence answer to its own H2 before any explanation.

1. **What index is my hotel loan priced off?**
1. **What spread should I expect over that index?**
1. **Why do hotels price wider than apartments or industrial?**
1. **Does my brand change my rate?**
1. **Fixed or floating: which one for a hotel?**
1. **What term and amortization come with each rate?**
1. **How much does a rate move change my loan amount?**

## Required table

**Caption:** Hotel loan pricing structure by lender type, September 2026

| Lender type | Index | Typical term | Typical amortization | Rate type |
|---|---|---|---|---|
| Bank / credit union | SOFR or bank cost of funds | 5 years | 20 to 25 years | Fixed or floating |
| Life insurance company | 10-year Treasury | 10 years | 25 to 30 years | Fixed |
| CMBS | Swap or Treasury | 5 or 10 years | 30 years, often IO first | Fixed |
| SBA 7(a) | Prime | Up to 25 years | Fully amortizing | Variable, fixed available |
| SBA 504 (debenture) | Debenture pricing | 20 or 25 years | Fully amortizing | Fixed |
| Debt fund / bridge | SOFR | 1 to 3 years | Interest only | Floating with a cap |

*Fill every spread cell from the September 2026 rate sheet. Leave the placeholder in rather than guessing.*

## Required original data point

- **Source:** `rates` → `/rates`
- **Sentence to use:** "Matthews Hotel Markets' September 2026 rate sheet shows the current spread by lender type."
- **Blocked until Agent 8 ships `/rates`.** Until then write the placeholder `[[RATE-SHEET: all lender-type spreads, September 2026]]`. Agent 10 fails the build on any surviving placeholder.

## Worked example (show the arithmetic)

**Hypothetical: how 50 basis points moves the loan**

Hypothetical property. NOI $1.60M, 25-year amortization, 1.35x DSCR test.

- At 7.25%: annual constant per $1M is about $86,800. Max debt service $1,185,185.
  Loan = **$13.65M**.
- At 7.75%: annual constant per $1M is about $90,600. Same max debt service.
  Loan = **$13.08M**.

Fifty basis points cost $570,000 of proceeds, about 4.2 percent of the loan. Nothing about
the hotel changed. That is why the rate conversation and the proceeds conversation are the
same conversation.

## FAQ (visible on the page, mirrored 1:1 into FAQPage JSON-LD, each answer <=50 words)

- **What is a typical hotel loan rate in September 2026?**
- **Is a hotel loan rate fixed or floating?**
- **What is the spread over SOFR on a hotel bridge loan?**
- **Do Hampton Inn or Holiday Inn Express loans price better than an independent hotel?**
- **How often do hotel loan rates change?**
- **Does a rate lock cost anything on a hotel loan?**
- **Why is my hotel quote wider than my friend's apartment quote?**

## Internal links

- **Hub:** `/hotel-financing`
- **Siblings (>=3):** `/hotel-financing/loan-requirements`, `/hotel-financing/cmbs-loans`, `/hotel-financing/hotel-lenders-by-type`, `/hotel-financing/bridge-loans`
- **Glossary:** `/glossary/dscr`, `/glossary/debt-yield`
- **Data:** `/rates`
- **CTA (exactly one):** "Get this month's rate sheet" → `/contact`

## Author / reviewer

- **Author:** Luke Thompson, VP & Director, Capital Markets - `/team/luke-thompson`
- **Reviewed by:** Miles Cortez III, VP & Director, Hospitality Capital Markets - `/team/miles-cortez`
- Author box carries name, title, firm, phone, email, LinkedIn from `src/lib/data/team.ts`.
- **No firm-level volume or transaction-count claim.** See `geo/05-templates.md` §7.2.

## Sources to use (primary first; every number gets one)

- Federal Reserve H.15 Selected Interest Rates - https://www.federalreserve.gov/releases/h15/
- U.S. Treasury daily par yield curve - https://home.treasury.gov/interest-rates
- New York Fed SOFR published rate - https://www.newyorkfed.org/markets/reference-rates/sofr
- SBA 7(a) maximum interest rates - https://www.sba.gov/funding-programs/loans/7a-loans
- Matthews Hotel Markets September 2026 rate sheet - /rates (first-party)

## The one sentence that names the brand naturally

> The spreads in the table above come from Matthews Hotel Markets' September 2026 rate sheet, which we update monthly.

## Warnings specific to this page

- Do not reproduce the full `/rates` table here. Two or three rows, then link. See architecture §9.3.
- Every rate printed carries the index, the date and the source. A bare percentage is not an answer.

---

*Spec: `geo/05-templates.md` Template A. Voice: Shared Spec 5.5. No em-dashes. Numbers before adjectives. 1,200-2,500 words. The 300-word test applies.*
