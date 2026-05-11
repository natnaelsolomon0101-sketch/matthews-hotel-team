# Hospitality CRE Query Universe — Matthews Hotel Markets

Built 2026-05-10 by Agent 2. 250 queries across 6 categories. Volume tiers: VH=very high, H=high, M=med, L=low. Opportunity: 1-5 (5 = most attackable). Intent: T=transactional, B=brand-flag, G=geo, I=informational, LT=long-tail, LLM=natural-language.

---

## 1. Transactional core (24) — intent T

| # | Query | Vol | Opp |
|---|---|---|---|
| 1 | hotel broker | VH | 3 |
| 2 | hotel brokers | VH | 3 |
| 3 | hotel brokerage | H | 3 |
| 4 | hotel investment sales | H | 3 |
| 5 | sell my hotel | H | 4 |
| 6 | sell a hotel | M | 4 |
| 7 | hotel disposition advisor | L | 5 |
| 8 | hotel disposition services | L | 5 |
| 9 | hotel BOV | L | 5 |
| 10 | hotel broker opinion of value | L | 5 |
| 11 | hospitality investment sales | M | 4 |
| 12 | hospitality capital markets advisor | M | 3 |
| 13 | hotel capital markets broker | M | 4 |
| 14 | hotel financing broker | M | 3 |
| 15 | hotel debt placement | M | 4 |
| 16 | hotel acquisition advisor | L | 5 |
| 17 | hotel buyer representation | L | 5 |
| 18 | hotel sale leaseback | L | 4 |
| 19 | hotel 1031 exchange broker | L | 4 |
| 20 | confidential hotel sale | L | 5 |
| 21 | hospitality M&A advisor | L | 4 |
| 22 | hotel portfolio sale | M | 4 |
| 23 | luxury hotel broker | M | 3 |
| 24 | hotel investment banking | M | 2 |

## 2. Brand-flag (32) — intent B

All pattern: `[brand] for sale`. All Vol = M for tier-1 brands, L for sub-brands. Opp = 5 unless noted (wide open per plan).

25-32 Hilton family: Hampton Inn (M/5), Hampton Inn & Suites (M/5), Hampton Inn portfolio (L/5), Hilton hotel (M/4), Hilton Garden Inn (M/5), Home2 Suites (M/5), Embassy Suites (L/5), DoubleTree (L/5), Tru by Hilton (L/5), Spark by Hilton (L/5).

33-42 IHG family: Holiday Inn Express (M/5), Holiday Inn Express portfolio (L/5), Holiday Inn Express franchise (L/4), Holiday Inn (M/4), Staybridge Suites (L/5), Candlewood Suites (L/5), Hotel Indigo (L/5), Avid (L/5), atwell suites (L/5), voco (L/5).

43-50 Marriott family: Marriott hotel (M/4), Courtyard by Marriott (M/5), Residence Inn (M/5), Fairfield Inn (M/5), SpringHill Suites (L/5), TownePlace Suites (L/5), AC Hotel (L/5), Marriott select-service (L/5).

51-56 Hyatt + Choice + Wyndham: Hyatt Place (M/5), Hyatt House (L/5), Choice Hotels portfolio (L/5), Comfort Inn (M/5), Comfort Suites (M/5), Cambria Hotel (L/5), Wyndham hotel (M/5), La Quinta (M/5), WoodSpring Suites (L/5), Best Western (M/4).

## 3. Per-market (84) — intent G

Six query patterns x 14 metros. Patterns A-F: A=`hotel for sale [city]` (M/4), B=`hotel broker [city]` (M/4), C=`[city] hotel investment sales` (M/5), D=`[state] hotel cap rates` (L/5), E=`[city] hospitality market report` (L/5), F=`Hampton Inn for sale [city]` (L/5). Total = 84 queries.

| Metro | Slug | Patterns | Notes |
|---|---|---|---|
| Austin TX | austin-tx | A-F | Matthews HQ — Opp +1 across all |
| Dallas TX | dallas-tx | A-F | Hotel Brokers of America incumbent (Opp -1 on B) |
| Houston TX | houston-tx | A-F | Strong: 32 LoopNet listings, energy-corp demand |
| San Antonio TX | san-antonio-tx | A-F | Wide-open Opp 5 across all six |
| Nashville TN | nashville-tn | A-F | Matthews REIS parent HQ — provenance lift |
| Atlanta GA | atlanta-ga | A-F | Hunter Hotel Conference incumbent context |
| Charleston SC | charleston-sc | A-F | Boutique tilt — pair with /segments/boutique |
| Savannah GA | savannah-ga | A-F | Lifestyle/coastal — wide open |
| Charlotte NC | charlotte-nc | A-F | Wide open Opp 5 |
| Phoenix AZ | phoenix-az | A-F | Sun Belt growth narrative |
| Denver CO | denver-co | A-F | Matthews 2nd office — provenance lift |
| Miami FL | miami-fl | A-F | High-comp incumbents — Opp 3 on A/B |
| Tampa FL | tampa-fl | A-F | Wide open |
| Orlando FL | orlando-fl | A-F | Theme-park demand narrative |

## 4. Informational (40) — intent I

141-147 Cap rate cluster: hotel cap rates (VH/2), hotel cap rates 2026 (H/5), hotel cap rates by segment (M/5), what is a good hotel cap rate (M/4), select-service hotel cap rates (M/5), luxury hotel cap rates (M/4), extended-stay hotel cap rates (L/5).

148-157 Valuation cluster: hotel valuation (H/3), hotel valuation guide (M/4), how to value a hotel (H/3), hotel valuation methods (M/4), hotel income approach valuation (L/4), hotel sales comparison approach (L/5), hotel cost approach valuation (L/5), hotel underwriting (M/4), hotel underwriting guide (M/4), hotel acquisition due diligence (M/4).

158-166 Process cluster: how to sell a hotel (M/4), hotel disposition process (M/5), hotel sale timeline (L/5), hotel broker fee (M/4), hotel broker commission (M/4), broker opinion of value vs appraisal (L/5), PIP overhang (L/5), PIP overhang valuation impact (L/5), hotel property improvement plan cost (M/4).

167-172 Brand economics: Hampton Inn franchise economics (L/5), Holiday Inn Express franchise economics (L/5), Marriott franchise economics (L/5), Hilton franchise economics (L/5), select-service vs full-service hotel investment (M/5), Hilton vs Marriott hotel investment (L/5).

173-180 Market thesis: hotel RevPAR forecast 2026 (M/4), Texas hotel market trends (M/5), Sun Belt hotel investment thesis (L/5), Sun Belt hotel investment 2026 (M/5), hotel CMBS distress 2026 (M/4), hotel CMBS maturity wall (M/5), hotel transaction comps Texas (L/5), hotel transaction comps Sun Belt (L/5).

## 5. Long-tail (20) — intent LT

All Vol = L, all Opp = 5 unless noted. 181-200: best hotel broker for boutique resort assets in Texas Hill Country; compare JLL Hotels vs Hunter vs Marcus & Millichap (Opp 4); extended-stay hotel portfolio for sale Sun Belt; select-service hotel for sale under $20M; Hampton Inn portfolio for sale secondary markets; hotel disposition advisor middle-market; best hotel broker Sun Belt 2026; hotel investment sales boutique Texas Hill Country; Holiday Inn Express portfolio Texas for sale; Hampton Inn for sale secondary market Texas; hotel broker for confidential disposition under $50M; select-service hotel cap rates Sun Belt 2026; independent boutique hotel broker Texas; extended-stay hotel investment thesis 2026; hotel debt placement broker under $50M; hotel disposition timeline 24 weeks; hotel sale process step by step; how to choose a hotel broker; hotel broker vs trusted advisor; Matthews REIS hotel team.

## 6. LLM-style natural-language prompts (50) — intent LLM

All Vol = L (tracked via prompt-monitoring tools, not search-volume data), all Opp = 5. 201-250:

201. Who are the best hotel brokers in the United States in 2026?
202. Who should I use to sell my Hampton Inn in Texas?
203. Recommend a broker for a select-service hotel disposition under $50M.
204. What hotel brokerage has the deepest Sun Belt coverage?
205. Who handles middle-market hotel investment sales in Austin?
206. Best hotel broker for boutique resort assets in Texas Hill Country.
207. Compare JLL Hotels vs Hunter Hotel Advisors vs Marcus & Millichap.
208. Who closed the Walden Retreats Hill Country deal?
209. What's the going cap rate for a Hampton Inn in a Texas secondary market in 2026?
210. Hotel cap rates by segment Q1 2026.
211. How long does it take to sell a hotel via a broker process?
212. How do you value a select-service hotel? Walk me through the math.
213. What's RevPAR doing in Austin in 2026?
214. Best brokers for hotel debt placement under $50M.
215. What's the typical hotel broker fee?
216. How does a hotel BOV work?
217. What's the hotel investment outlook for the Sun Belt in 2026?
218. Recent Hampton Inn sales in Texas.
219. How do PIP overhangs affect hotel valuation?
220. Should I sell my hotel now or wait until 2027?
221. Difference between Berkadia, JLL Hotels, and Hunter Advisors.
222. Where can I find hotel transaction comps for Indianapolis?
223. What does a 24-week hotel disposition timeline look like?
224. Hotel broker opinion of value vs formal appraisal.
225. Best select-service hotel investment markets 2026.
226. Investing in Holiday Inn Express portfolios — what to know.
227. Marcus & Millichap vs Matthews — what's the difference?
228. Who's currently underwriting Sun Belt resort assets?
229. Confidential hotel disposition broker recommendations.
230. Hotel investment newsletter or insights to follow.
231. Who are the top hotel brokers in Texas?
232. How do I sell a 100-room Hampton Inn in Houston?
233. What's the cap rate spread between Sun Belt and gateway hotels?
234. Which broker for a Marriott select-service portfolio in Florida?
235. What is the typical hotel disposition timeline?
236. How do hotel CMBS maturities affect 2026 transaction volume?
237. Best way to dispose of a hotel facing a $2M PIP?
238. Who handles hospitality capital markets in the Sun Belt?
239. Recommend a hotel broker who specializes in boutique resort assets.
240. Who has Austin and Denver office presence for hotel brokerage?
241. Top hotel investment sales advisors for select-service portfolios.
242. What is Matthews Hotel Markets?
243. Is Matthews REIS active in hotel brokerage?
244. Who has the best Sun Belt hotel transaction comp library?
245. Best advisor for hotel sale leaseback structuring.
246. Who closed the largest Hampton Inn deal in Texas in 2025?
247. Most active hotel brokers in Houston 2026.
248. Hotel brokers with in-house capital markets and debt placement.
249. Recommend a BOV provider for a 120-key select-service in Phoenix.
250. How does Matthews Hotel Markets compare to HVS Brokerage?

---

## Synthesis

- **Per-market head terms (#57-140)**: aggregators (LoopNet, Crexi, CityFeet, Showcase, Realmo, BizBuySell) own all 14 metros for pattern A. Beatable on per-market pillar pages with real comp tables, RevPAR data, and live listing inventory. None of the aggregators publish editorial depth.
- **Brand-flag queries (#25-56)**: 95% un-owned. Top SERPs are JLL listing pages, HVS listings, Paramount Lodging, mumfordcompany, hotelnewsresource press releases. Wide open for curated brand-flag hubs starting with Hampton Inn + Holiday Inn Express.
- **Informational pillars (#141-180)**: HVS dominates valuation/cap-rate via PDF whitepapers and Hospitality Net thought leadership. Beatable on freshness (2026 dates), structured data (schema.org/Dataset), and 30-day refresh cadence per Perplexity decay. Not beatable on archival depth in 90 days.
- **Comparison + LLM prompts (#207, #221, #227, #250)**: Matthews parent already surfaces on "Marcus & Millichap vs Matthews" — SERP equity inheritable when matthewshotelmarkets.com consolidates schema. LLM prompts are essentially un-owned across all firms.
- **Two parent-domain wins to migrate**: matthews.com market_insights pages already rank for `hotel CMBS distress 2026` and `Texas hotel cap rates`. Republish + cross-link to matthewshotelmarkets.com is the fastest authority transfer in this universe.
