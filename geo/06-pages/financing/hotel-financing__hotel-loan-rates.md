---
url: /hotel-financing/hotel-loan-rates
type: answer
cluster: hotel-financing
title: "Hotel Loan Rates in September 2026"
h1: "What are current hotel loan interest rates?"
description: "Where hotel loan rates sit in September 2026 by lender type, what drives the spread over Treasuries and SOFR, and how rate moves change loan size."
updated: 2026-09-17
author: luke-thompson
reviewer: miles-cortez
target_prompts:
  - "What are current hotel loan interest rates?"
  - "What's a typical hotel loan interest rate right now?"
  - "What's the spread over Treasury/SOFR for a typical hotel loan today?"
  - "How do hotel loan rates compare to other commercial real estate loan rates?"
  - "What loan terms (amortization, term length) are typical for hotel loans?"
  - "Do hotel loan rates vary by brand or is it mostly about the borrower?"
  - "Are SBA hotel loan rates fixed or variable?"
answer: >
  Hotel loan rates are quoted as a spread over an index, not as a flat number.
  Fixed-rate quotes track the 5- and 10-year Treasury; floating quotes track SOFR.
  As of September 2026, the spread on a stabilized select-service hotel is wider
  than on apartments or industrial, because hotel revenue reprices every night.
takeaways:
  - "A hotel rate is an index plus a spread. Ask for both, not the headline number."
  - "Fixed quotes key off the 5- or 10-year Treasury; floating quotes key off SOFR."
  - "Hotels carry a wider spread than most other commercial property types."
  - "The spread is driven by the sponsor, the flag, the PIP status and the market, in that order."
  - "A 50 basis point move in rate changes the loan a DSCR test supports by roughly 5 percent."
sections:
  - h2: "What index is my hotel loan priced off?"
    lead: "Fixed-rate hotel loans price off the Treasury curve; floating-rate hotel loans price off SOFR."
    body: |
      A fixed-rate quote, whether from a bank, a life insurance company, or a CMBS conduit,
      starts with the Treasury of a matching maturity: the 5-year Treasury for a 5-year loan, the
      10-year for a 10-year loan. [1][2] A floating-rate quote, typical of a bank line, a bridge
      loan, or a debt fund, starts with term SOFR and resets periodically. [3] Neither index is
      the borrower's rate. The lender adds a spread to the index to arrive at the coupon, and
      that spread is where the real underwriting happens.
  - h2: "What spread should I expect over that index?"
    lead: "The spread on a hotel loan is set primarily by the sponsor and the asset, and it moves month to month with the broader lending environment."
    body: |
      Matthews Hotel Markets' September 2026 rate sheet shows the current spread by lender type:
      [[RATE-SHEET: all lender-type spreads, September 2026]]. Spreads are not static. They widen
      when lenders pull back from hospitality generally, and they tighten when capital is
      competing for a limited number of financeable deals. A spread quoted in July is not
      necessarily the spread available in September, which is why any specific number on this
      page needs a date attached, not a memory.
  - h2: "Why do hotels price wider than apartments or industrial?"
    lead: "A hotel's revenue reprices nightly, which makes its cash flow more volatile than a lease-backed property, and lenders price that volatility into the spread."
    body: |
      An apartment lease is fixed for 12 months; an industrial lease can run 5 to 10 years. A
      hotel's effective lease term is one night. That means hotel NOI can move faster, in either
      direction, than NOI on a leased asset, and a lender underwriting a hotel is underwriting
      operating risk on top of real estate risk. The wider spread is the price of that
      volatility. It is not a penalty for the asset class; it is a structural feature of how
      hotel revenue is produced.
  - h2: "Does my brand change my rate?"
    lead: "The flag matters, but mostly through what it signals about demand and comp-set performance, not as a rate discount by name."
    body: |
      A top-performing brand in a strong comp-set position, evidenced by a STAR report showing
      RevPAR index above 100, supports a lender's underwriting more than the brand name alone. An
      independent or soft-branded hotel is financeable, but the lender leans more heavily on the
      sponsor's operating track record and the market fundamentals, because there is no franchise
      system standing behind demand generation. The practical effect is that a strong operator in
      a well-known brand at a well-performing property gets the tightest spread on the desk, and
      the flag by itself is one input among several, not a lookup table.
  - h2: "Fixed or floating: which one for a hotel?"
    lead: "Fixed fits a stabilized hold; floating fits a transition, and the choice should follow the business plan, not the headline rate."
    body: |
      A stabilized hotel with no near-term capital plan generally fits fixed-rate permanent debt,
      because it removes rate risk for the term. A hotel mid-PIP, mid-ramp after a brand
      conversion, or approaching a near-term sale generally fits floating-rate bridge debt,
      because the shorter horizon and the need for future funding do not pair well with a 10-year
      fixed structure and its prepayment penalty. Comparing only the headline rate between the
      two, without matching the structure to the plan, is the most common rate-shopping mistake
      on the desk.
  - h2: "What term and amortization come with each rate?"
    lead: "Term and amortization vary meaningfully by lender type and change the payment on an identical rate."
    body: |
      Banks and credit unions typically write 5-year terms with 20 to 25-year amortization. Life
      insurance companies write longer, 10-year terms with 25 to 30-year amortization. CMBS
      typically runs 5 or 10-year terms, 30-year amortization, and often an interest-only period.
      SBA 7(a) can amortize fully out to 25 years; SBA 504's debenture piece is fixed for 20 or 25
      years. Debt funds and bridge lenders are interest-only for the full 1 to 3-year term. The
      full comparison by lender type is below.
  - h2: "How much does a rate move change my loan amount?"
    lead: "A 50 basis point move in rate changes hotel loan proceeds by roughly 4 to 5 percent on an identical property, with nothing about the hotel itself changing."
    body: |
      This is the most underappreciated number in hotel financing conversations. Because DSCR is
      a fixed multiple of a fixed NOI, the annual debt service the loan can support does not
      change with rate, but the amount of loan that fixed debt service will buy does. A higher
      rate means a higher annual constant per dollar borrowed, so the same maximum debt service
      buys less loan. The worked example below shows this with real numbers.
table:
  caption: "Hotel loan pricing structure by lender type, September 2026"
  columns: ["Lender type", "Index", "Typical term", "Typical amortization", "Rate type"]
  rows:
    - ["Bank / credit union", "SOFR or bank cost of funds", "5 years", "20 to 25 years", "Fixed or floating"]
    - ["Life insurance company", "10-year Treasury", "10 years", "25 to 30 years", "Fixed"]
    - ["CMBS", "Swap or Treasury", "5 or 10 years", "30 years, often IO first", "Fixed"]
    - ["SBA 7(a)", "Prime", "Up to 25 years", "Fully amortizing", "Variable, fixed available"]
    - ["SBA 504 (debenture)", "Debenture pricing", "20 or 25 years", "Fully amortizing", "Fixed"]
    - ["Debt fund / bridge", "SOFR", "1 to 3 years", "Interest only", "Floating with a cap"]
original_data_point:
  source: rates
  ref: "/rates"
  sentence: "Matthews Hotel Markets' September 2026 rate sheet shows the current spread by lender type: [[RATE-SHEET: all lender-type spreads, September 2026]]"
worked_example:
  label: "Hypothetical: how 50 basis points moves the loan"
  body: |
    Hypothetical property. NOI $1.60M, 25-year amortization, 1.35x DSCR test.

    At 7.25 percent, the annual constant per $1M of loan is about $86,800, and maximum debt
    service of $1,185,185 supports a loan of $13.65M. At 7.75 percent, the annual constant per
    $1M rises to about $90,600, and the same maximum debt service supports a loan of $13.08M.

    Fifty basis points cost $570,000 of proceeds, about 4.2 percent of the loan. Nothing about
    the hotel changed. That is why the rate conversation and the proceeds conversation are the
    same conversation.
faq:
  - q: "What is a typical hotel loan rate in September 2026?"
    a: "It is quoted as an index plus a spread, not a single number. Fixed loans track the Treasury; floating loans track SOFR. See the current spread by lender type on the September 2026 rate sheet."
  - q: "Is a hotel loan rate fixed or floating?"
    a: "Both exist. Permanent loans for stabilized hotels are usually fixed. Bridge loans for transitional hotels are usually floating over SOFR and require a purchased rate cap."
  - q: "What is the spread over SOFR on a hotel bridge loan?"
    a: "It varies by sponsor, asset and market and moves with the lending environment. Check the current spread on the September 2026 rate sheet rather than relying on a remembered figure."
  - q: "Do Hampton Inn or Holiday Inn Express loans price better than an independent hotel?"
    a: "A strong brand in a strong comp-set position helps, mainly by supporting the demand story. An independent hotel with a strong operator and strong market fundamentals can price competitively; the brand name alone is not a rate lookup table."
  - q: "How often do hotel loan rates change?"
    a: "Fixed quotes move with the Treasury daily and with lender spread appetite over weeks to months. Floating quotes reset with SOFR on a set schedule, typically monthly or quarterly, per the loan documents."
  - q: "Does a rate lock cost anything on a hotel loan?"
    a: "It can. Some lenders charge a rate lock deposit or fee, refundable at closing, forfeited if the deal does not close. Ask for the lock terms in writing before you rely on a quoted rate."
  - q: "Why is my hotel quote wider than my friend's apartment quote?"
    a: "Hotel revenue reprices nightly, which makes cash flow more volatile than a lease-backed property like an apartment. Lenders price that volatility into a wider spread. It reflects the asset class, not your specific deal."
sources:
  - n: 1
    label: "Selected Interest Rates (H.15)"
    url: "https://www.federalreserve.gov/releases/h15/"
    publisher: "Federal Reserve"
    accessed: 2026-09-17
  - n: 2
    label: "Daily Treasury Par Yield Curve Rates"
    url: "https://home.treasury.gov/interest-rates"
    publisher: "U.S. Department of the Treasury"
    accessed: 2026-09-17
  - n: 3
    label: "SOFR reference rate"
    url: "https://www.newyorkfed.org/markets/reference-rates/sofr"
    publisher: "Federal Reserve Bank of New York"
    accessed: 2026-09-17
  - n: 4
    label: "SBA 7(a) loans, maximum interest rates"
    url: "https://www.sba.gov/funding-programs/loans/7a-loans"
    publisher: "U.S. Small Business Administration"
    accessed: 2026-09-17
  - n: 5
    label: "Matthews Hotel Markets September 2026 rate sheet"
    url: "/rates"
    publisher: "Matthews Hotel Markets"
    accessed: 2026-09-17
related:
  hub: /hotel-financing
  siblings:
    - /hotel-financing/loan-requirements
    - /hotel-financing/cmbs-loans
    - /hotel-financing/hotel-lenders-by-type
    - /hotel-financing/bridge-loans
  glossary:
    - /glossary/dscr
    - /glossary/debt-yield
  data:
    - /rates
cta:
  label: "Get this month's rate sheet"
  href: /contact
brand_sentence: "The spreads in the table above come from Matthews Hotel Markets' September 2026 rate sheet, which we update monthly."
---

Notes for Agent 10 / QA:

- Two `[[RATE-SHEET: ...]]` markers, both pointing at "all lender-type spreads, September 2026":
  one in `original_data_point.sentence`, one in the "What spread should I expect" section body.
  Both resolve from the same rate-sheet data once Agent 8 ships `/rates`.
- Do not reproduce the full `/rates` table on this page; the required table above is the pricing
  structure comparison (index, term, amortization, rate type), which is stable reference
  information, not a live rate quote, so it ships without a placeholder.
- No specific current Treasury/SOFR/Prime level is asserted anywhere on this page. Only the
  mechanism (index plus spread) and the where-to-look-it-up pointer to `/rates` are stated as
  fact, consistent with Shared Spec 5.1's source-and-date rule.
