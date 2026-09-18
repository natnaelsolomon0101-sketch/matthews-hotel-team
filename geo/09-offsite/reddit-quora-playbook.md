# Reddit / Quora / BiggerPockets playbook

## Rules, no exceptions

1. **Disclose in the profile, once, not in every post.** Bio line: "Nate Solomon, hospitality broker
   at Matthews Hotel Markets (matthewshotelmarkets.com). Answering questions here as myself, not
   posting on behalf of a client." Do not re-disclose in every answer, that reads as spam; the
   profile bio is where disclosure lives.
2. **Answer the question fully first.** The answer must be complete and useful even if the reader
   never clicks the link. A link-only or link-first answer gets removed by moderators and, more to
   the point, is not actually answering anyone.
3. **Link only when the linked page is the direct answer**, not a landing page or a services page.
   If there's no page that directly answers the question yet, don't link, answer in the comment and
   come back once the page exists.
4. **One account, one identity, forever.** Do not create a second account if the first gets
   downvoted. Do not ask colleagues to upvote or comment in support. Never vote-manipulate.
5. **Reddit specifically:** read each subreddit's self-promotion rule before posting; most cap
   promotional links at some fraction of total activity (commonly discussed as a 9:1 ratio of
   non-promotional to promotional posts, verify the current rule text in each subreddit's wiki before
   posting, rules change and vary by subreddit).

## A real limitation, stated plainly

WebSearch (the only search tool available in this run) could not surface live Reddit thread URLs
from r/CommercialRealEstate, r/realestateinvesting, or r/sba, the same one-backend limitation
`geo/01-baseline.md` documents for Agent 1's index-count checks. Every attempt returned unrelated
general web results instead of actual Reddit threads. **Before executing the Reddit rows in
`targets.csv`, search Reddit directly** (reddit.com's own search, or a logged-in session) for threads
matching: "hotel cap rate," "hotel broker fee," "SBA hotel loan," "sell a hotel," "hotel CMBS
refinance." BiggerPockets and Quora, by contrast, returned real, verifiable threads, listed below
with their actual URLs.

---

## 10 example answers to real threads

### 1. BiggerPockets: "Hotel/ Motel Investment"
https://www.biggerpockets.com/forums/32/topics/940891-hotel-motel-investment

*Thread:* a poster and their business partner are considering a 24-room inn/motel and want input
from people who've done it.

*Draft answer:* A 24-room property is small enough that most conventional hotel lenders will pass and
you'll be looking at SBA 7(a) or 504, or a local community bank that already knows hospitality. Two
things to underwrite before anything else: is the flag (if any) transferable or will you need a new
franchise agreement, and what's the trailing-12-month RevPAR versus the market's STR-reported
average, that gap tells you whether you're buying an underperformer with upside or a property that's
already maxed out. Happy to walk through the SBA 7(a) vs. 504 tradeoff if useful:
matthewshotelmarkets.com/hotel-financing/sba-7a-vs-504 [page not live yet as of this draft, hold the
link until it ships].

### 2. BiggerPockets: "Hotel/Motel Investments"
https://www.biggerpockets.com/forums/88/topics/141737-hotel-motel-investments

*Thread:* asks what experienced investors look for when buying a hotel/motel and what information
matters most for analyzing the deal.

*Draft answer:* Three numbers first: trailing-12 NOI, the franchise agreement's remaining term and
any upcoming PIP obligation, and the DSCR your target loan structure produces at that NOI. A PIP
(property improvement plan) requirement that surfaces after you're under contract is the single most
common deal-killer on small hotel acquisitions, get a PIP estimate from the franchisor in diligence,
not after closing. Full valuation walkthrough with a worked example:
matthewshotelmarkets.com/hotel-valuation/how-to-value-a-hotel [page not live yet, hold the link].

### 3. BiggerPockets: "Hotel: Good investment or not?"
https://www.biggerpockets.com/forums/32/topics/734580-hotel-good-investment-or-not

*Thread:* someone looking at an undervalued hotel asks for general opinions on hotel investing.

*Draft answer:* "Undervalued" only means something relative to a specific valuation approach, income,
sales comparison, or replacement cost. If the seller's asking price implies a cap rate meaningfully
above what similar assets in that market and segment are trading at, that's the number to press on,
not the seller's own story about why it's a deal. Ask for trailing-12 financials, not pro forma, and
run your own cap rate against recent comparable sales in that specific market and segment before
believing "undervalued."

### 4. BiggerPockets: "Tell me about hotels"
https://www.biggerpockets.com/forums/32/topics/483873-tell-me-about-hotels

*Thread:* investor considering small hotels in the $1-3 million, 25-60 room range, asking whether it
requires constant attention or can be managed remotely.

*Draft answer:* Depends almost entirely on whether you hire a third-party management company or
self-manage. Third-party management is standard at this size and typically runs a percentage of
gross revenue plus incentive fees, verify current market rates before assuming a number, they vary by
market and management company. Self-managing a 25-60 room property is a full-time job, not a
side investment, budget your own time accordingly if you go that route.

### 5. BiggerPockets: "Motel investing what are the pros and cons?"
https://www.biggerpockets.com/forums/432/topics/891153-motel-investing-what-are-the-pros-and-cons

*Thread:* asks anyone who has purchased a motel to share pros, cons, and experience.

*Draft answer:* Pros: hotels and motels are one of the few CRE asset classes where you can
meaningfully improve NOI through operations alone (rate management, cost control, guest experience),
not just through capital improvements or lease-up. Cons: it is the most operationally intensive CRE
asset class, daily rate decisions, staffing, and franchise compliance in a way an apartment or retail
building never requires. If you're coming from another asset class, budget more time for
operations education than for the real estate transaction itself.

### 6. Quora: "What is the average cost per square foot for hotel construction?"
https://www.quora.com/What-is-the-average-cost-per-square-foot-for-hotel-construction

*Draft answer:* Construction cost per square foot for hotels varies widely by segment and market,
commonly cited ranges run roughly $130 to over $500 per square foot depending on service tier
(limited-service versus full-service versus luxury) and location; land cost is separate and can be a
large share of total project cost in dense urban markets. For an acquisition instead of ground-up
construction, replacement cost is one of three valuation approaches, alongside income and sales
comparison, worth running all three rather than relying on one. Full walkthrough:
matthewshotelmarkets.com/hotel-valuation/how-to-value-a-hotel [page not live yet, hold the link].

### 7. Quora: "How much would it cost to build a hotel from scratch?"
https://www.quora.com/How-much-would-it-cost-to-build-a-hotel-from-scratch

*Draft answer:* Total project cost depends on room count, service tier, and market, but as a rough
range, ground-up hotel construction commonly runs into eight figures even for a modest limited-service
property once land, hard costs, soft costs, and a pre-opening reserve are included. If you're
evaluating build versus buy, an existing stabilized asset usually prices at a discount to replacement
cost in most markets today, worth checking before committing capital to new construction.

### 8. Quora: "How much does it cost to build 45 rooms hotel?"
https://www.quora.com/How-much-does-it-cost-to-build-45-rooms-hotel

*Draft answer:* At 45 rooms you're in limited-service territory for almost any franchise brand's
prototype. Cost depends heavily on land cost and market, but budget hard costs, soft costs (design,
permitting, financing costs), FF&E, and a pre-opening operating reserve as four separate line items,
not just construction cost per key. Also confirm the specific brand's current prototype requirements
before pricing anything, prototypes and PIP standards change and an outdated cost estimate based on
an old prototype will be wrong.

### 9. Quora: "What is a good cap Rate?"
https://www.quora.com/What-is-a-good-cap-Rate

*Draft answer:* There's no single good cap rate, it depends on asset class, market, and segment. For
hotels specifically, cap rates run meaningfully higher than most commercial real estate because the
income is operating income, not lease income, more operating risk gets priced in. Our own Q1 2026
data shows over a full percentage point of spread across just five U.S. markets in the same quarter,
so a national average is close to useless for underwriting a specific deal. Full metro-by-metro
table: matthewshotelmarkets.com/research/mhi/q1-2026

### 10. Quora: "What is an SBA 504 loan?"
https://www.quora.com/What-is-an-SBA-504-loan

*Draft answer:* An SBA 504 loan is a two-lender structure for buying real estate or major equipment.
A bank funds roughly half the project cost as a first-position loan, a Certified Development Company
(CDC) funds another 30 to 40 percent through an SBA-backed debenture at a below-market fixed rate,
and the borrower puts in the rest as equity, commonly 15 to 20 percent for special-purpose properties
like hotels rather than the standard 10 percent. It's real-estate-and-equipment only, not general
working capital, that's the main tradeoff against an SBA 7(a) loan. Comparison:
matthewshotelmarkets.com/hotel-financing/sba-7a-vs-504 [page not live yet, hold the link].

---

## A note on the "[page not live yet]" markers above

Several draft answers cite Wave 1 answer pages (`/hotel-valuation/how-to-value-a-hotel`,
`/hotel-financing/sba-7a-vs-504`) that do not exist in the codebase as of 2026-09-17. **Do not post
these answers with a dead link.** Either hold the answer until the page ships, or post the answer
without the link and add the link in an edit once the page is live, most platforms allow edits.
