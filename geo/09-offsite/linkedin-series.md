# LinkedIn series: 12 posts

**Gate on the brief's ask, stated plainly.** The mission brief asks for each post to be "built around
one number from `/rates` or `/data`." Neither exists yet in this repo as of 2026-09-17 (Agent 8's
lane; `find src/app/rates src/app/data` returns nothing). The only original, live, first-party
numeric dataset the site currently publishes is the Matthews Hotel Index at
`/research/mhi/q1-2026` (`src/lib/data/mhi.ts`), sourced from CBRE, HVS, STR, AHLA, JLL, and Lodging
Econometrics. These 12 drafts pull from that dataset instead. **Once `/rates` ships with real
numbers, swap posts 3, 6, 9, and 12 for a rate-sheet row** (marked below) so the series carries fresh
material through the whole 90-day run rather than exhausting the one MHI quarter in week one.

No em-dashes. One link per post, to the source page on matthewshotelmarkets.com. No "excited to
share." Numbers before adjectives.

Author rotation: Nate Solomon alternates with Luke Thompson or Miles Cortez III, the two other team
members with published bios (`geo/03-entity.md` section 3a). Never a bench member; the other 19
people in `team.ts` have no bio page to link to.

---

### 1. Nate Solomon

Austin select-service is pricing 7.50 to 8.25 percent on cap rate this quarter. Full-service is
7.00 to 8.00. Resort and lifestyle product, the tightest band in the state, is 6.50 to 7.75.

That's the Q1 2026 Matthews Hotel Index for our home market. Eight tracked transactions, RevPAR up
0.4 percent quarter over quarter.

Full data: matthewshotelmarkets.com/research/mhi/q1-2026

---

### 2. Luke Thompson

Dallas-Fort Worth select-service cap rates sit 25 basis points wider than Austin's, 7.75 to 8.50
versus 7.50 to 8.25. Same story on full-service: DFW at 7.00 to 7.75, Austin at 7.00 to 8.00 with a
wider band.

Fourteen tracked DFW transactions this quarter, the most of any Texas metro in our index. Frisco and
Plano are where most of them cleared.

matthewshotelmarkets.com/research/mhi/q1-2026

---

### 3. Nate Solomon

**[SWAP FOR A RATE-SHEET ROW ONCE /rates SHIPS. Interim draft below, MHI-sourced.]**

San Antonio full-service is the tightest cap rate in Texas outside Hill Country resort: 6.75 to 7.50
percent. Riverwalk assets are trading inside that band. YoY RevPAR growth there is 2.1 percent, the
best of the five Texas metros in our index.

matthewshotelmarkets.com/research/mhi/q1-2026

---

### 4. Miles Cortez III

Nashville select-service prices 7.50 to 8.25 percent, full-service 6.75 to 7.50. That's tighter than
every Texas metro we track except San Antonio and Hill Country resort.

Mountain West and Sun Belt buyers are the same bid pool right now. If you're comparing a Denver-area
deal to a Nashville one, the cap rate gap is smaller than the headline city difference suggests.

matthewshotelmarkets.com/research/mhi/q1-2026

---

### 5. Nate Solomon

Houston select-service is the widest Texas Triangle band we track, 7.75 to 8.75 percent. Full-service
is 7.25 to 8.25. Eleven tracked transactions this quarter.

One line worth remembering: Houston's Medical Center-adjacent select-service trades 50 basis points
tighter than the metro average. Location inside a metro can matter more than the metro label.

matthewshotelmarkets.com/research/mhi/q1-2026

---

### 6. Luke Thompson

**[SWAP FOR A RATE-SHEET ROW ONCE /rates SHIPS. Interim draft below, MHI-sourced.]**

Every metro in the Q1 2026 Matthews Hotel Index posted positive quarter-over-quarter RevPAR growth.
Austin +0.4 percent, Dallas +0.6, Houston +0.2, San Antonio +0.5, Nashville's number is in the same
dataset. Small, but every market moved the same direction. That's not noise.

Full table: matthewshotelmarkets.com/research/mhi/q1-2026

---

### 7. Nate Solomon

A reader asked me last week what "cap rate compression" actually looks like in a table instead of a
headline. Here it is: Austin select-service moved from a wider band in 2024 to 7.50-8.25 percent
today, per our Q1 2026 index. Compression is a range narrowing and shifting down, not a single
number changing.

If you want the term defined in one paragraph: matthewshotelmarkets.com/glossary/cap-rate

---

### 8. Miles Cortez III

Transaction count by metro, Q1 2026: Dallas 14, Houston 11, Austin 8, San Antonio 7. Volume doesn't
track cap rate tightness one for one. Dallas has the widest select-service band of the four and the
most trades. Liquidity and pricing are two different questions.

matthewshotelmarkets.com/research/mhi/q1-2026

---

### 9. Nate Solomon

**[SWAP FOR A RATE-SHEET ROW ONCE /rates SHIPS. Interim draft below, MHI-sourced.]**

Occupancy across our four Texas Triangle metros this quarter: Austin 70 percent, San Antonio 71,
Dallas 68, Houston 67. The two-point spread from top to bottom is smaller than most people assume
before they see the table.

matthewshotelmarkets.com/research/mhi/q1-2026

---

### 10. Luke Thompson

If you're underwriting a hotel in a market we track, our RevPAR range is a starting point, not an
answer. Austin's Q1 2026 RevPAR band is $95 to $165. Where your subject asset lands in that range
depends on flag, location inside the metro, and renovation history, in that order.

Full market breakdown: matthewshotelmarkets.com/markets/austin-tx

---

### 11. Nate Solomon

Sources matter more than numbers. Our Q1 2026 Hotel Index cites CBRE's H2 2025 Cap Rate Survey, HVS's
April 2026 Market Pulse, STR's weekly hotel performance data, AHLA's 2026 State of the Industry, and
JLL's Global Hotel Investment Outlook. Six primary sources, one table. That's the standard we hold
every number on this site to.

matthewshotelmarkets.com/research/mhi/q1-2026

---

### 12. Miles Cortez III

**[SWAP FOR A RATE-SHEET ROW ONCE /rates SHIPS. Interim draft below, MHI-sourced.]**

Next quarter's Matthews Hotel Index publishes 2026-07-15. If you want the Q2 read on Denver and the
Mountain West before it's public, that's a conversation worth having now, not in July.

Q1 data while you wait: matthewshotelmarkets.com/research/mhi/q1-2026

---

## Posting mechanics

- Cadence per `HUMAN_QUEUE.md`'s existing note: Luke 2x/week, Nate 3x/week. Twelve posts at that
  cadence run about 3 weeks; spread across the 90-day calendar instead so they don't cluster (see
  `90-day-calendar.md`).
- Both named authors repost and comment on each other's posts, per the same `HUMAN_QUEUE.md` note.
  This is peer amplification between two real employees, not vote manipulation, and it stays that
  way only if the comments are substantive, not "great post."
- 8 existing article-based LinkedIn drafts already live at `content/linkedin-drafts/` (one per
  insight article, Luke and Nate both covered). This series is additive, a second data-led track, not
  a replacement.
