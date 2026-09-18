---
url: /hotel-financing/cmbs-loans
type: answer
cluster: hotel-financing
title: "CMBS Loans for Hotels: How They Work (2026)"
h1: "What is a CMBS loan and how does it work for hotels?"
description: "How hotel CMBS loans are sized, priced and serviced in 2026, what non-recourse actually costs, and when a CMBS execution is the wrong choice."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
target_prompts:
  - "What is a CMBS loan and how does it work for hotels?"
  - "Can I use a CMBS loan to buy a limited-service hotel?"
  - "What rate can I get on a CMBS loan for a limited-service hotel right now?"
  - "What's the hotel CMBS delinquency rate right now?"
  - "Do hotel loans have prepayment penalties?"
  - "What's the difference between a bank loan and a CMBS loan for a hotel?"
  - "What happens after my hotel loan gets sent to special servicing?"
answer: >
  A CMBS loan is a fixed-rate hotel loan originated to be pooled and sold as
  bonds. As of September 2026 it is non-recourse with standard carve-outs,
  typically 5 or 10 years, often with interest-only periods, and sized to a debt
  yield floor. The trade is real: you get non-recourse and leverage, and you give
  up flexibility, because the servicer follows the documents, not a relationship.
takeaways:
  - "CMBS is non-recourse with carve-outs. It is not no-recourse."
  - "Debt yield, not LTV, is usually the binding constraint on a hotel CMBS loan."
  - "Prepayment is through defeasance or yield maintenance, both of which are expensive early."
  - "Once the loan closes, your counterparty is a servicer, not the originator."
  - "Limited-service hotels are financeable in CMBS, but small loans below roughly $5M rarely fit a pool."
sections:
  - h2: "What makes a loan a CMBS loan?"
    lead: "A CMBS loan is originated by a lender specifically to be pooled with other commercial mortgages and sold to bond investors, which shapes every term in the loan documents."
    body: |
      Because the loan is designed to be securitized, its terms are standardized to fit rating
      agency and bond-investor expectations: fixed rate, a defined term, a fixed amortization
      schedule (or interest-only), and tightly defined default and transfer provisions. The
      originating lender typically sells the loan into a pool shortly after closing, at which
      point a master servicer administers routine servicing and a special servicer takes over
      only if the loan defaults or approaches default. This structure is why a CMBS loan behaves
      differently after closing than a portfolio loan held by a bank.
  - h2: "How is a hotel CMBS loan sized?"
    lead: "Debt yield is usually the binding test on a hotel CMBS loan, more often than LTV or DSCR."
    body: |
      Debt yield divides NOI by the loan amount and ignores rate and amortization entirely, which
      makes it a conservative floor that CMBS conduits lean on heavily for hospitality, given how
      quickly hotel NOI can move relative to a leased asset. A typical debt yield floor for hotel
      CMBS runs meaningfully higher than for other property types. LTV and DSCR are still run, but
      debt yield frequently produces the smallest, and therefore binding, number. The worked
      example below shows how the binding test can shift with a single appraisal change.
  - h2: "What does non-recourse actually mean here?"
    lead: "Non-recourse in a CMBS loan means the lender's remedy in a standard default is limited to the property, except for a defined list of bad acts, the carve-outs, that trigger personal liability."
    body: |
      Standard carve-outs, often called bad-boy carve-outs, typically cover fraud, waste,
      environmental liability, unauthorized transfers, and bankruptcy filings made in bad faith.
      A sponsor who operates honestly and does not trigger a carve-out event has no personal
      exposure beyond the equity in the deal. A sponsor who commits fraud or improperly transfers
      the property loses that protection entirely. Non-recourse is real protection, but it is
      conditional protection, not a blank exemption from personal liability.
  - h2: "What does it cost to pay off a CMBS loan early?"
    lead: "Early prepayment on a CMBS loan runs through defeasance or yield maintenance, and both are structured to make the bondholders whole, not to be cheap."
    body: |
      Defeasance replaces the mortgaged property as collateral with a portfolio of government
      securities that replicates the loan's remaining cash flows, which the borrower purchases and
      pledges to the trust; the cost scales with how far current rates have moved from the loan's
      coupon and how much term remains. Yield maintenance instead charges a calculated penalty
      designed to compensate the lender for the lost interest. Both mechanisms are most expensive
      in the early years of the loan and become cheaper as the loan approaches its maturity or
      open period. Either way, a CMBS loan should be underwritten as a loan the borrower intends
      to hold through its term, not one meant to be refinanced early.
  - h2: "Who do I talk to after closing?"
    lead: "A master servicer handles routine administration for the life of a performing CMBS loan; a special servicer takes over only if the loan defaults or is at imminent risk of default."
    body: |
      The master servicer collects payments, manages escrows, and processes routine requests, but
      generally has limited authority to modify loan terms. If the loan defaults, or the borrower
      demonstrates imminent default, the file transfers to a special servicer, whose fiduciary
      duty runs to the bondholders as a pool, not to the individual borrower. This is the single
      biggest mental adjustment a first-time CMBS borrower needs to make: there is no relationship
      banker to call when something goes wrong. The full mechanics of that stage are on
      `/hotel-financing/loan-workouts`.
  - h2: "Can a limited-service hotel get CMBS financing?"
    lead: "Yes, limited-service and select-service hotels are common CMBS collateral, but the loan generally needs to clear roughly $5 million to fit efficiently into a pool."
    body: |
      Below that rough threshold, the fixed costs of CMBS origination, rating agency review, and
      pooling do not scale down well against the fee available on a small loan, which pushes
      smaller limited-service transactions toward banks, SBA, or debt funds instead. Above that
      threshold, a well-performing limited-service hotel with a strong comp-set position and an
      experienced sponsor is straightforward CMBS collateral.
  - h2: "When is CMBS the wrong choice for a hotel?"
    lead: "CMBS is the wrong choice when a near-term sale, a major renovation, or any need for loan flexibility is likely during the term, because the defeasance or yield-maintenance cost and the servicer relationship both work against flexibility."
    body: |
      A hotel with a PIP still in progress, an owner considering a sale inside the next few years,
      or a business plan that depends on renegotiating terms mid-loan is generally better matched
      to a bank loan or a bridge structure, both covered on `/hotel-financing/hotel-lenders-by-type`
      and `/hotel-financing/bridge-loans`. CMBS rewards certainty: a stabilized asset, a sponsor
      planning to hold through the term, and no need to touch the loan again until maturity.
table:
  caption: "Hotel CMBS versus a bank loan"
  columns: ["Category", "CMBS", "Bank"]
  rows:
    - ["Recourse", "Non-recourse with bad-boy carve-outs", "Usually full or partial recourse"]
    - ["Rate", "Fixed for the term", "Fixed 5 years or floating"]
    - ["Term", "5 or 10 years", "5 years, sometimes 7"]
    - ["Amortization", "30 years, often IO for part of the term", "20 to 25 years"]
    - ["Sizing driver", "Debt yield floor", "DSCR and the relationship"]
    - ["Prepayment", "Defeasance or yield maintenance", "Declining step-down, sometimes open"]
    - ["After closing", "Master servicer, then special servicer if it defaults", "The banker who closed it"]
    - ["Best fit", "Stabilized, non-recourse needed, no near-term sale", "Flexibility needed, PIP or repositioning ahead"]
original_data_point:
  source: rates
  ref: "/rates"
  sentence: "Matthews Hotel Markets' September 2026 rate sheet shows the current CMBS spread on a stabilized select-service hotel: [[RATE-SHEET: CMBS fixed, 10-year, stabilized select-service]]"
worked_example:
  label: "Hypothetical: why the debt yield floor binds"
  body: |
    Hypothetical. 120-key limited-service hotel. NOI $2.10M. Appraised value $26.0M.

    The LTV test at 65 percent supports $16.90M. The debt yield floor at 10.5 percent divides
    $2.10M by 0.105, supporting $20.00M. The DSCR test at 1.40x, with 30-year amortization at 7.10
    percent (an annual constant of about $80,800 per $1M), gives a maximum debt service of $2.10M
    divided by 1.40, or $1.50M, which supports a loan of $18.56M.

    The LTV test binds at $16.90M. Now assume the appraisal comes in at $30.0M instead: the LTV
    test moves to $19.50M and the DSCR test at $18.56M becomes the constraint. Which test binds
    changes with a single appraisal. Ask the lender which one is binding before you negotiate
    anything else.
faq:
  - q: "Is a CMBS hotel loan non-recourse?"
    a: "Yes, subject to standard carve-outs for fraud, waste, environmental liability, unauthorized transfers, and bad-faith bankruptcy filings. A sponsor who avoids those triggers has no personal liability beyond the property."
  - q: "What is the minimum loan size for hotel CMBS?"
    a: "Roughly $5 million as a practical floor. Below that, the fixed costs of pooling and rating agency review do not scale efficiently against the loan's fee."
  - q: "What is defeasance and what does it cost?"
    a: "Defeasance replaces the property with government securities that replicate the loan's remaining payments. Cost depends on how far rates have moved from the loan's coupon and how much term is left; it is most expensive early in the loan."
  - q: "Can I get interest-only on a hotel CMBS loan?"
    a: "Often, for part of the term, particularly on well-leveraged stabilized deals. Availability and length vary by lender and by the current lending environment; confirm on the current rate sheet."
  - q: "What is debt yield and why does CMBS use it?"
    a: "Debt yield divides NOI by loan amount and ignores rate and amortization. CMBS conduits favor it for hotels because it is a conservative floor that does not get distorted by a low rate or a long amortization schedule."
  - q: "What's the hotel CMBS delinquency rate right now?"
    a: "The most recent public figure we can source is Trepp's lodging CMBS delinquency rate of 7.31 percent for March 2026, reported via MBA NewsLink. Trepp updates this monthly; check TreppTalk for the current print before relying on this figure."
  - q: "What happens if my CMBS hotel loan goes to special servicing?"
    a: "The file transfers from the master servicer to a special servicer, whose duty runs to bondholders, not to you. Full detail on what a special servicer can and cannot do is on the loan workouts page."
  - q: "Can I sell the hotel with the CMBS loan in place?"
    a: "Only through an assumption, if the buyer qualifies and the loan documents permit it, or by paying the loan off through defeasance or yield maintenance at sale. Either path adds cost and time to a transaction; plan for it before you go to market."
sources:
  - n: 1
    label: "TreppTalk, public commercial real estate research"
    url: "https://www.trepp.com/trepptalk"
    publisher: "Trepp"
    accessed: 2026-09-17
  - n: 2
    label: "EDGAR full-text search, CMBS prospectus filings"
    url: "https://www.sec.gov/edgar/search/"
    publisher: "U.S. Securities and Exchange Commission"
    accessed: 2026-09-17
  - n: 3
    label: "Selected Interest Rates (H.15)"
    url: "https://www.federalreserve.gov/releases/h15/"
    publisher: "Federal Reserve"
    accessed: 2026-09-17
  - n: 4
    label: "CRE Finance Council, Investor Reporting Package documentation"
    url: "https://www.crefc.org"
    publisher: "CRE Finance Council"
    accessed: 2026-09-17
  - n: 5
    label: "Matthews Hotel Markets September 2026 rate sheet"
    url: "/rates"
    publisher: "Matthews Hotel Markets"
    accessed: 2026-09-17
  - n: 6
    label: "Commercial/multifamily delinquency data, lodging CMBS 7.31% March 2026"
    url: "https://www.mba.org/news-and-research"
    publisher: "Mortgage Bankers Association (MBA NewsLink, reporting Trepp data)"
    accessed: 2026-09-17
related:
  hub: /hotel-financing
  siblings:
    - /hotel-financing/hotel-lenders-by-type
    - /hotel-financing/loan-workouts
    - /hotel-financing/loan-maturities-2026-2027
    - /hotel-financing/hotel-loan-rates
  glossary:
    - /glossary/debt-yield
    - /glossary/dscr
    - /glossary/noi
  data:
    - /rates
cta:
  label: "Compare a CMBS quote against a bank quote"
  href: /contact
brand_sentence: "Matthews Hotel Markets runs CMBS and balance-sheet quotes side by side, because the cheaper coupon and the better loan are frequently not the same quote."
---

Notes for Agent 10 / QA:

- One `[[RATE-SHEET: CMBS fixed, 10-year, stabilized select-service]]` marker in
  `original_data_point.sentence`.
- The delinquency figure used (7.31% lodging CMBS, March 2026) is the most recent dated figure
  documented in this repo's own prior fact-check pass (`reports/article-fact-check.md`, verified
  against MBA NewsLink/Trepp) and is a different statistic entirely from the disputed multi-year
  CMBS maturity figure blocking `/hotel-financing/loan-maturities-2026-2027`. A live WebSearch on
  2026-09-17 could not confirm a more recent print (results returned inconsistent 2025-vintage
  figures), so the page states the March 2026 figure explicitly as a point-in-time number, not as
  "right now," and tells the reader to check TreppTalk for the current print.
- No Trepp subscriber table is reproduced anywhere on this page; only public TreppTalk posts are
  cited, per the brief's explicit warning.
