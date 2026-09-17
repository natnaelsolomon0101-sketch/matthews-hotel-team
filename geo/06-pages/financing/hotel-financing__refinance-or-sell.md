---
url: /hotel-financing/refinance-or-sell
type: answer
cluster: hotel-financing
title: "Refinance or Sell Your Hotel? How to Decide"
h1: "Should I refinance my hotel or sell it instead?"
description: "A numbers-first framework for deciding whether to refinance, extend or sell a hotel in 2026, with the arithmetic shown both ways."
updated: 2026-09-17
author: miles-cortez
reviewer: nate-solomon
target_prompts:
  - "Should I refinance my hotel or sell it instead?"
  - "I own a 78-key Hampton Inn in Georgia, loan matures next year - what are my options?"
  - "Should I sell my hotel now or wait until next year?"
  - "What are my options if my hotel's appraised value has dropped since I bought it?"
  - "Is there a broker who will tell me to hold my hotel instead of selling it?"
  - "How do I compare holding versus selling my hotel?"
  - "What happens if I can't refinance my hotel loan when it matures?"
answer: >
  Run both numbers before you decide. Refinancing works when today's NOI supports
  today's balance at today's rate and you still believe the hold thesis. Selling
  works when the proceeds gap is permanent, the PIP is larger than your appetite,
  or the equity is better deployed elsewhere. As of September 2026 the binding
  variable is usually NOI, not the rate.
takeaways:
  - "This is an arithmetic question first and a preference question second. Do the arithmetic first."
  - "Refinance proceeds are set by NOI, not by what you paid or what you owe."
  - "Net sale proceeds are price minus fee minus debt payoff minus tax. Compare that to the equity you would inject to refinance."
  - "A PIP due inside 24 months belongs in both columns, because it is cash you spend or a price reduction you take."
  - "A broker who never says hold is not giving you advice."
sections:
  - h2: "How do I compare the two paths in dollars?"
    lead: "Compare the cash you would inject to refinance against the net cash you would collect from a sale, using the same NOI and the same PIP assumption in both columns."
    body: |
      The comparison only works if both sides use consistent inputs. The refinance side starts
      with today's NOI, sizes a new loan against a current rate using the DSCR, debt yield, and
      LTV tests described on `/hotel-financing`, and nets against your current balance to find the
      equity gap. The sale side starts with the same NOI, applies a current cap rate to get value,
      then subtracts a brokerage fee, the debt payoff, and any tax due, to find net proceeds. Put
      both numbers side by side before you talk about preference.
  - h2: "What does refinancing require me to bring?"
    lead: "Refinancing requires equity to close any gap between the new loan and the existing balance, plus any cash the PIP requires that the new lender will not fund."
    body: |
      The full mechanics of sizing a refinance, and the five ways to close a proceeds gap, are
      covered on `/hotel-financing/refinance`. For this comparison, the number that matters is the
      total cash the refinance path requires: the equity gap plus PIP cash plus closing costs. That
      total is what you are choosing to keep spending on the asset, in exchange for keeping it.
  - h2: "What do I actually net from a sale?"
    lead: "Net sale proceeds equal price minus the brokerage fee minus the debt payoff minus any tax due, and a PIP typically reduces the price a buyer will pay before any of that math starts."
    body: |
      Buyers underwrite a known PIP into their offer, either as a direct price reduction or as a
      condition that the seller complete or escrow for it before closing. The Matthews Hotel Index
      for Q1 2026 gives the cap-rate band the sale side of this comparison should be run at,
      broken out by market and segment on `/research/mhi/q1-2026`. Tax treatment, capital gains and
      depreciation recapture, is a real cost on the sale side that a refinance does not carry at
      all, because debt proceeds are not taxable income.
  - h2: "Where does the PIP belong in the comparison?"
    lead: "A PIP due inside 24 months belongs on both sides of the comparison: as cash you spend or reserve if you refinance and keep the asset, or as a price reduction a buyer prices in if you sell."
    body: |
      Treating the PIP as a cost only on the sale side, or ignoring it entirely on the refinance
      side, is the most common error in this comparison. A funded, in-progress PIP is a sunk cost
      on both sides and should be excluded from the marginal comparison; an unfunded, upcoming PIP
      is a live cost that belongs in both columns, sized consistently.
  - h2: "How do taxes change the answer?"
    lead: "Selling triggers capital gains tax and depreciation recapture unless the proceeds go into a 1031 exchange; refinancing triggers no tax at all, because debt is not income."
    body: |
      This asymmetry is real and often decisive for owners who have held a hotel long enough to
      accumulate significant depreciation. A 1031 exchange, covered in full on
      `/hotel-financing/1031-exchange-hotels`, can defer the tax on a sale entirely if the proceeds
      go into a qualifying replacement property within the required windows. This page states the
      tax mechanics at a high level only; consult a CPA before finalizing any sale-versus-refinance
      decision, because the specific basis, depreciation schedule, and holding structure change the
      answer for every owner.
  - h2: "When is holding clearly right?"
    lead: "Holding is clearly right when the refinance equity requirement is modest relative to the asset's ongoing cash flow and the hold thesis, the market, the brand, the competitive position, still holds."
    body: |
      A hotel that clears its refinance with little or no injected equity, in a market with
      continuing demand growth, with a manageable or already-funded PIP, is a straightforward hold.
      The math confirms the decision most owners already lean toward in this case, which is why the
      arithmetic matters most in the harder cases below.
  - h2: "When is selling clearly right?"
    lead: "Selling is clearly right when the equity required to refinance is large relative to the asset's value, the PIP is bigger than the owner's appetite, or the capital is better used somewhere else entirely."
    body: |
      A large, unfunded PIP stacked on top of a meaningful refinance equity gap is the clearest
      case for selling: the owner is being asked to fund two large cash needs to keep an asset
      whose sale would instead return capital. The worked example below runs exactly this scenario
      with real numbers on both sides.
table:
  caption: "Refinance versus sell: the comparison that matters"
  columns: ["Line", "Refinance", "Sell"]
  rows:
    - ["Sets the number", "NOI, rate, DSCR test", "NOI, cap rate, buyer pool"]
    - ["Cash in or out today", "Equity injection if there is a gap", "Net proceeds after fee, payoff and tax"]
    - ["PIP treatment", "You fund it, or the lender reserves for it", "The buyer prices it into the bid"]
    - ["Tax", "None. It is debt, not income.", "Capital gain and depreciation recapture, unless 1031"]
    - ["What you keep", "The asset and the upside", "The capital and the optionality"]
    - ["Biggest risk", "NOI does not recover and you did it again in 5 years", "You sold the bottom"]
original_data_point:
  source: mhi
  ref: "/research/mhi/q1-2026"
  sentence: "The Matthews Hotel Index for Q1 2026 gives the cap-rate band the sale side of this comparison should be run at."
worked_example:
  label: "Hypothetical: 78-key select-service hotel, Georgia"
  body: |
    Hypothetical, matching the shape of the question people ask. 78 keys, NOI $1.05M, loan balance
    $8.40M maturing in 13 months, a $1.10M PIP due within 24 months.

    On the refinance path, at 7.25 percent, 25-year schedule, 1.35x test, maximum debt service is
    $777,778, supporting a loan of $8.96M. That clears the $8.40M balance. But the lender reserves
    for the PIP, so figure $1.10M of cash or reserve. Net cash out of pocket is about $1.10M, and
    you keep the asset.

    On the sale path, at an 8.25 percent cap on $1.05M of NOI, value is $12.73M, or $163,000 per
    key. A buyer prices the PIP in, call it a $900,000 reduction, for $11.83M. Less a brokerage fee
    at 2 percent, $237,000. Less the $8.40M payoff. Pre-tax net is $3.19M.

    So: spend $1.10M and keep an asset producing $1.05M, or collect $3.19M pre-tax and redeploy.
    Neither answer is obvious, which is the point. Run your own version with your own cap rate and
    your own tax basis before anyone gives you a recommendation.
faq:
  - q: "Should I sell my hotel now or wait?"
    a: "Run the refinance-versus-sell arithmetic with your current NOI, current rate, and current cap-rate band from the Matthews Hotel Index. Waiting is a bet that NOI, rate, or cap rate improves; make sure you can name which one you are betting on."
  - q: "How do I know if my hotel can refinance?"
    a: "Run today's NOI against today's rate through the DSCR, debt yield, and LTV tests on the hub page. If the resulting loan covers your balance with acceptable equity, it can refinance."
  - q: "Does a PIP make selling better than refinancing?"
    a: "It shifts the comparison, because a buyer prices the PIP into the offer while a refinance requires you to fund or reserve for it directly. Run both totals; a large unfunded PIP often tips the answer toward selling."
  - q: "What do I net from a hotel sale after fees and debt?"
    a: "Price minus the brokerage fee minus the debt payoff minus any capital gains and depreciation recapture tax, unless the proceeds go into a 1031 exchange. Run the specific numbers for your basis with a CPA."
  - q: "Can I 1031 exchange out of a hotel sale?"
    a: "Yes, into another qualifying real property, under the 45-day identification and 180-day closing rules. Full detail is on the 1031 exchange page."
  - q: "What if my lender will not extend?"
    a: "Then your realistic options are a new refinance, a bridge loan to a later permanent takeout, or a sale. Waiting without a plan is what turns a performing loan into a maturity default."
  - q: "Will a broker tell me not to sell?"
    a: "A broker showing you the honest refinance arithmetic alongside the sale arithmetic, including cases where refinancing is cheaper, is doing the job correctly. One who only ever presents a sale is not giving you a full picture."
sources:
  - n: 1
    label: "Publication 544, Sales and Other Dispositions of Assets"
    url: "https://www.irs.gov/publications/p544"
    publisher: "Internal Revenue Service"
    accessed: 2026-09-17
  - n: 2
    label: "Like-Kind Exchanges Real Estate Tax Tips"
    url: "https://www.irs.gov/newsroom/like-kind-exchanges-real-estate-tax-tips"
    publisher: "Internal Revenue Service"
    accessed: 2026-09-17
  - n: 3
    label: "Selected Interest Rates (H.15)"
    url: "https://www.federalreserve.gov/releases/h15/"
    publisher: "Federal Reserve"
    accessed: 2026-09-17
  - n: 4
    label: "U.S. Cap Rate Survey"
    url: "https://www.cbre.com/insights"
    publisher: "CBRE"
    accessed: 2026-09-17
  - n: 5
    label: "Matthews Hotel Index, Q1 2026"
    url: "/research/mhi/q1-2026"
    publisher: "Matthews Hotel Markets"
    accessed: 2026-09-17
related:
  hub: /hotel-financing
  siblings:
    - /hotel-financing/refinance
    - /hotel-financing/loan-maturities-2026-2027
    - /hotel-financing/1031-exchange-hotels
    - /hotel-financing/pip-and-renovation-loans
  glossary:
    - /glossary/cap-rate
    - /glossary/noi
    - /glossary/pip
  data:
    - /research/mhi/q1-2026
    - /rates
cta:
  label: "Get both numbers run for your hotel"
  href: /contact
brand_sentence: "Matthews Hotel Markets runs both sides of this for owners, and a fair number of those conversations end with us saying hold."
---

Notes for Agent 10 / QA:

- No `[[RATE-SHEET: ...]]` marker on this page: the required original data point sources from the
  live `/research/mhi/q1-2026` route, not from the not-yet-shipped `/rates` route, per the brief.
- This page absorbs the CSV row "Should I sell my hotel now or wait until next year?" per
  architecture §9.1, folded into the "When is holding/selling clearly right?" sections and FAQ.
- Tax content stays at the mechanics level with an explicit "consult a CPA" instruction; no
  specific tax-rate figure is asserted.
