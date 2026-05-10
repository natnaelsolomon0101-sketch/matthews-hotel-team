# Matthews Hotel Index — Public-Data Source Map

**Status**: Public-data only. No CoStar dependency.
**Output**: Quarterly cap rate, price-per-key, and RevPAR by metro across the top 25 U.S. hotel MSAs. Auto-generates per-metro pages at `/research/matthews-hotel-index/[metro]`.
**Owner**: Designated research analyst (see `analyst-jd.md`) + Luke Thompson (oversight).
**Effort estimate**: ~80 hours initial v1 build. ~20 hours/quarter to refresh.
**Refresh cadence**: ~3 weeks after each calendar quarter close.
**Methodology**: All data sources are publicly available. No proprietary or licensed data is republished. Where derivation is required, methodology is documented inline so any reader can reproduce.

---

## Performance data (RevPAR, ADR, occupancy)

### Smith Travel Research (STR) — public press releases
- **Source**: https://str.com/press-releases
- **What's free**: Monthly U.S. summary stats by top 25 markets. Year-over-year, monthly, weekly trend snapshots.
- **What's paid**: Full property-level dataset, daily / submarket cuts, custom comp sets.
- **Use for MHI**: Top-25 metro RevPAR + ADR + occupancy at monthly granularity. Cite as "Source: STR via public press releases, [date]".
- **Refresh**: Monthly press release; aggregate to quarterly.
- **Coverage**: All 25 MHI metros covered.

### AHLA State of the Industry Report
- **Source**: https://www.ahla.com — annual free report.
- **What's free**: U.S.-wide industry stats. State-level breakdowns. Employment data. Demand drivers commentary.
- **Use for MHI**: Macro context, supply-pipeline, employment by state.
- **Refresh**: Annual (typically January / February).

### CBRE Hotels Q1/Q2/Q3/Q4 Hotel Figures
- **Source**: https://www.cbre.com/insights/reports
- **What's free**: Quarterly executive summary with top-line ADR / RevPAR / occupancy by tier and segment.
- **Use for MHI**: Cross-validation against STR. Cite for trend commentary.
- **Refresh**: Quarterly.

### HVS U.S. Market Pulse
- **Source**: https://www.hvs.com/publications
- **What's free**: Monthly U.S. summary syndicated to Hospitality Net + Hotel Online.
- **Use for MHI**: Cross-validation. Cite as third-party benchmark.
- **Refresh**: Monthly.

### HVS Hotel Valuation Index (HVI)
- **Source**: https://hvi.hvs.com
- **What's free**: Quarterly city-level market index. Public data including projected RevPAR + values.
- **Use for MHI**: Direct comp for our index. Cite as the dominant existing index; differentiate MHI by Matthews's transaction-volume lens.
- **Refresh**: Quarterly.

---

## Cap rate data

### CBRE H1 / H2 U.S. Cap Rate Survey
- **Source**: https://www.cbre.com/insights/reports/us-cap-rate-survey
- **What's free**: Free executive summary with ~3,600 cap rate estimates per cycle. Includes hotel cap rates by tier (luxury / upscale / midscale / economy) and by market.
- **Use for MHI**: **THE** anchor cap rate dataset for our quarterly MHI release. Cite extensively. CBRE's data is the most-cited cap rate source in trade press and AI engines.
- **Refresh**: Twice yearly (H1 release ~March, H2 release ~September).

### Real Capital Analytics (RCA, now MSCI)
- **Source**: https://www.msci.com/research-and-insights/research/real-capital-analytics
- **What's free**: Free quarterly summaries on transaction volume by sector + region.
- **Use for MHI**: Transaction volume context. Cap rate trend cross-validation.
- **Refresh**: Quarterly.

### HVS U.S. Hotel Broker Survey
- **Source**: https://www.hvs.com (gated; some headline numbers free)
- **What's free**: Annual survey released around year-end. Headline cap rate expectations by segment surface in trade press for free.
- **Use for MHI**: Annual cap rate expectations cross-validation. Cite for forward-looking context.
- **Refresh**: Annual.

### JLL Global Hotel Investment Outlook
- **Source**: https://www.jll.com/en-us/newsroom — annual report.
- **What's free**: Free executive summary.
- **Use for MHI**: Annual cap rate by region context.
- **Refresh**: Annual (typically January / February).

---

## Public REIT comparable data — 10-Q / 10-K filings

This is the highest-value tier of public data. SEC filings are fully free, fully republishable, and provide segment-level detail no other free source matches.

| REIT | Ticker | Strategy | Use for MHI |
| --- | :-: | --- | --- |
| Host Hotels & Resorts | HST | Largest public hotel REIT — full-service, urban + resort | Full-service RevPAR + ADR by segment, urban + resort cap rate proxies |
| RLJ Lodging Trust | RLJ | Premium-branded select-service + compact full-service | Premium select-service + compact FS RevPAR |
| Pebblebrook Hotel Trust | PEB | Lifestyle / boutique / urban resort | Lifestyle + boutique RevPAR |
| Sunstone Hotel Investors | SHO | Upper-upscale + luxury | Upper-upscale + luxury RevPAR |
| Park Hotels & Resorts | PK | Hilton spin-off — large full-service | Full-service Hilton-branded RevPAR |
| Apple Hospitality | APLE | Pure-play select-service | **Best select-service RevPAR signal** — Hampton Inn, Hilton Garden Inn, Courtyard concentration |
| Chatham Lodging Trust | CLDT | Premium select-service + extended-stay | Premium SS + extended-stay RevPAR |
| Summit Hotel Properties | INN | Premium select-service | Premium SS RevPAR |
| DiamondRock Hospitality | DRH | Premium full-service + lifestyle | Premium FS + lifestyle RevPAR |
| Service Properties Trust | SVC | Mixed: hotels + travel centers | Hotel segment broken out separately in filings |
| Braemar Hotels & Resorts | BHR | Luxury full-service | Luxury RevPAR |

### How to use REIT data for MHI

1. **SEC EDGAR full-text search**: https://efts.sec.gov/LATEST/search-index?q=&forms=10-Q
2. For each REIT each quarter: download the 10-Q, scrape the "RevPAR by Region" or "Same Store Comparable Hotel Statistics" tables.
3. Aggregate by metro using the REIT's own market disclosures.
4. Methodology footnote: "Aggregated from public 10-Q filings of the listed REITs, weighted by reported room count per market. Source disclosure on each metro page."
5. Hampton Inn / Holiday Inn Express / specific brand-flag economics: use Apple Hospitality's brand-mix disclosure (they break out brand concentration in their 10-K).

---

## Transaction volume data

### Trepp public hotel CMBS summaries
- **Source**: https://www.trepp.com/trepptalk
- **What's free**: Free monthly + quarterly summaries on hotel CMBS performance, originations, delinquency.
- **Use for MHI**: Debt market context. CMBS originations as a proxy for transaction velocity.
- **Refresh**: Monthly + quarterly.

### Real Capital Analytics public summaries
- **Source**: https://www.msci.com/research-and-insights/research/real-capital-analytics
- **What's free**: Free quarterly + annual recaps.
- **Use for MHI**: Transaction volume by region.

### JLL annual hotel investment volume report
- **Source**: https://www.jll.com/en-us/newsroom
- **What's free**: Full annual investment volume report.
- **Use for MHI**: Annual transaction volume context.

### CBRE annual hotel investment trends report
- **Source**: https://www.cbre.com/insights
- **What's free**: Annual trends report.
- **Use for MHI**: Annual trends cross-validation.

---

## County / state public data — assessment + comparable transactions

### TX — Texas Comptroller property tax data
- **Source**: https://comptroller.texas.gov/data-center/property-tax/
- **What's free**: All Texas property tax assessment data, fully searchable by parcel, fully free.
- **Use for MHI**: Hotel asset-level appraisal trends in Texas. Sales price comp from deed records.
- **Coverage**: Austin, Dallas-Fort Worth, Houston, San Antonio (4 of 14 MHI metros).

### Florida DOR property assessment data
- **Source**: https://floridarevenue.com/property/Pages/DataPortal.aspx
- **What's free**: All Florida property assessment data, fully searchable.
- **Coverage**: Miami, Tampa, Orlando, Jacksonville (4 metros).

### Georgia — Georgia DOR + county tax assessor sites
- **Source**: County-level (Fulton County, Chatham County for Savannah)
- **Coverage**: Atlanta, Savannah (2 metros).

### North Carolina — county tax assessor sites
- **Source**: County-level (Mecklenburg, Wake, Charleston)
- **Coverage**: Charlotte, Raleigh, Charleston (Charleston is South Carolina; Charleston County). 3 metros.

### Other states (Tennessee, Arizona, Colorado)
- Tennessee: Davidson County (Nashville) — https://www.padctn.org/
- Arizona: Maricopa County Assessor (Phoenix) — https://mcassessor.maricopa.gov/
- Colorado: county-level (Denver County) — https://www.denvergov.org/property
- Coverage: Nashville, Phoenix, Denver (3 metros).

**Note**: Property tax appraisals are a lagging proxy for market value, not a real-time cap rate signal. Use for trend context only, not point-in-time cap rate publication.

---

## Macro context

### Federal Reserve H.15 Selected Interest Rates
- **Source**: https://www.federalreserve.gov/releases/h15/
- **What's free**: All Treasury rates, daily.
- **Use for MHI**: Cap rate spread context (cap rate vs. 10-Year Treasury).
- **Refresh**: Daily; aggregate to quarterly average.

### Bureau of Labor Statistics (BLS) — Current Employment Statistics
- **Source**: https://www.bls.gov/ces/
- **What's free**: Hospitality employment by metro, monthly.
- **Use for MHI**: Demand-side labor signal. Employment trend by MSA.

### TSA airport throughput
- **Source**: https://www.tsa.gov/foia/readingroom?keys=throughput
- **What's free**: Daily nationwide; monthly by airport.
- **Use for MHI**: Resort + business-travel proxy. Useful for Orlando, Las Vegas, Miami, Phoenix metros.

---

## Conference + association published stats

### ALIS (Americas Lodging Investment Summit)
- **Source**: https://www.alisconference.com — some free post-conference data releases.
- **Use for MHI**: Annual cap rate / outlook context from conference releases.

### NYU International Hospitality Industry Investment Conference
- **Source**: https://www.nyuhospitalityconference.com
- **Use for MHI**: Annual deal flow stats from post-conference summary.

### HIC (Hospitality Investment Conference)
- **Use for MHI**: Limited free data; cite for cross-validation.

### AAHOA + AHLA membership data
- **Use for MHI**: Industry context. Owner-operator demographic for buyer-pool commentary.

---

## Coverage matrix — 25 metros for MHI v1

| Metro | STR | REIT | Tax/Assessment | Status |
| --- | :-: | :-: | :-: | :-: |
| Austin, TX | ✓ | ✓ | ✓ TX | full |
| Dallas-Fort Worth, TX | ✓ | ✓ | ✓ TX | full |
| Houston, TX | ✓ | ✓ | ✓ TX | full |
| San Antonio, TX | ✓ | ✓ | ✓ TX | full |
| Nashville, TN | ✓ | ✓ | ✓ Davidson Co. | full |
| Atlanta, GA | ✓ | ✓ | ✓ Fulton Co. | full |
| Charleston, SC | ✓ | ✓ | ✓ Charleston Co. | full |
| Savannah, GA | ✓ | partial | ✓ Chatham Co. | medium |
| Charlotte, NC | ✓ | ✓ | ✓ Mecklenburg | full |
| Raleigh, NC | ✓ | ✓ | ✓ Wake | full |
| Phoenix-Scottsdale, AZ | ✓ | ✓ | ✓ Maricopa | full |
| Denver, CO | ✓ | ✓ | ✓ Denver Co. | full |
| Salt Lake City, UT | ✓ | partial | ✓ | medium |
| Miami, FL | ✓ | ✓ | ✓ FL DOR | full |
| Tampa, FL | ✓ | ✓ | ✓ FL DOR | full |
| Orlando, FL | ✓ | ✓ | ✓ FL DOR | full |
| Jacksonville, FL | ✓ | partial | ✓ FL DOR | medium |
| New Orleans, LA | ✓ | partial | ✓ Orleans Parish | medium |
| Las Vegas, NV | ✓ | partial | ✓ Clark Co. | full |
| Los Angeles, CA | ✓ | ✓ | ✓ LA Co. | full |
| San Diego, CA | ✓ | ✓ | ✓ SD Co. | full |
| New York, NY | ✓ | ✓ | ✓ NYC | full |
| Chicago, IL | ✓ | ✓ | ✓ Cook Co. | full |
| Boston, MA | ✓ | partial | ✓ Suffolk Co. | medium |
| Washington, DC | ✓ | ✓ | ✓ DC | full |

**v1 launch coverage**: 14 metros for first quarterly release (matching the /markets/[city] coverage). Expand to 25 by year-end.

---

## Methodology page (publish on the site)

The MHI methodology page should explain:

1. **Data sources** — full transparency (everything in this doc, in narrative form).
2. **Calculation methodology** — for each metric, how it's derived.
3. **Limitations** — public-data only, lags real-time, REIT data weighted by their own market disclosures.
4. **Comparison to other indices** — HVI, CBRE Cap Rate Survey, JLL — explicit cross-reference, not competitive framing.
5. **Refresh schedule** — quarterly, ~3 weeks after quarter close.
6. **Citation policy** — anyone can cite MHI data with attribution; full attribution language template provided.

---

## Output format per metro page

### URL
`/research/matthews-hotel-index/[metro-slug]`

Example: `/research/matthews-hotel-index/austin-tx`

### Page sections

1. Headline metric: median Q[X] 2026 cap rate range for select-service in [metro]
2. Quarterly trend chart: cap rate, ADR, RevPAR (4-quarter trailing)
3. REIT-segment breakdown: how does this metro perform across HST / RLJ / APLE / etc. holdings
4. Demand drivers commentary (mirrors /markets/[city] page, light shared content)
5. Recent transactions: Matthews + market closes (cite our /closed/[slug] + public RCA / Trepp summaries)
6. Refresh date + methodology link
7. CTA to /contact and /markets/[metro]

### Schema

`@type: Dataset` for the data block. `@type: Article` for the commentary. Linked via `@graph`.

---

## First-release v1 plan

**Target launch**: Week 7 (~2026-06-23). Q2 2026 data.

**Coverage**: 14 metros (matching /markets/[city]).

**Delivery**:
- Per-metro pages on the site (auto-generated from data).
- Aggregate "Q2 2026 Matthews Hotel Index" landing page with top-line findings.
- Free PDF download.
- Trade-press preview (Pitch 3 in PR calendar) — Hotel Investment Today exclusive on the headline finding.
- LinkedIn long-form by Luke summarizing top 5 findings.
- Email blast to Matthews investor list with link to landing page.
