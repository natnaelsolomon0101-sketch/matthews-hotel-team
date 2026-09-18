/**
 * What is a hotel capital stack, and how do I build one?
 * Answer page: /hotel-financing/capital-stack
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "capital-stack",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Capital Stack: Layers, Order and Example (2026)",
  h1: "What is a hotel capital stack, and how do I build one?",
  description: "The layers that pay for a hotel, in order: senior debt, C-PACE, mezzanine, preferred equity, key money and common equity, with a worked $20M example.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What is a hotel capital stack, and how do I build one?",
    "I'm buying a $20 million hotel and my lender will only do 55 percent. How do I fill the rest of the capital stack?",
    "What goes between the senior loan and my equity on a hotel deal?",
    "Can I use C-PACE and mezzanine debt on the same hotel?",
    "Does key money count as equity in a hotel capital stack?",
    "How is an SBA 504 hotel loan structured between the bank, the CDC and me?",
    "How much equity do I need to refinance my hotel?",
    "What is the cheapest way to fill a gap in my hotel financing?"
  ],
  answer: "A hotel capital stack is every source of money that pays for the hotel, ranked by who is repaid first: senior debt, then C-PACE or mezzanine debt, then preferred equity, then your common equity. One stack is fixed by rule. Under the SBA procedures effective June 1, 2025, a 504 hotel project is 50 percent bank loan, 35 percent debenture and 15 percent owner cash.[1]",
  takeaways: [
    "Order matters more than labels. Each layer is repaid after the one above it, so each layer costs more than the one above it.",
    "The senior lender decides what else is allowed. C-PACE needs the mortgage holder's written consent, and mezzanine debt needs an intercreditor agreement.[2][3]",
    "Federal bank guidelines set a supervisory loan-to-value limit of 85 percent for improved property and 80 percent for commercial construction. Banks set their own internal limits and do not publish them.[4]",
    "Key money from a brand is a source of funds, but it is a contingent liability that burns off over the franchise term, not free equity.[5]",
    "Every layer added between the first mortgage and your equity shrinks the fall in NOI the deal can survive. Build the stack around the downside, not the closing."
  ],
  sections: [
    {
      h2: "What are the layers of a hotel capital stack?",
      lead: "A hotel capital stack has up to six layers: senior debt, C-PACE, mezzanine debt, preferred equity, key money and common equity.",
      body: "Senior debt is the first mortgage, from a bank, a CMBS lender, a life company, a debt fund or an SBA lender. It is the largest and cheapest layer because it is repaid first and holds a lien on the hotel. `/hotel-financing/hotel-lenders-by-type` compares the lenders.\n\nC-PACE is long-term financing for energy, water and resiliency work, repaid through an assessment on the property. In Texas the lien has the same priority as a property tax lien, which is why an existing mortgage holder must consent in writing.[2] `/hotel-financing/c-pace-financing` covers it.\n\nMezzanine debt is a loan secured by the ownership interests in the borrower, and preferred equity is an ownership stake with a priority return. A CMBS prospectus filed in February 2026 notes that a mezzanine lender has no security interest in the property, and that preferred equity in some respects functions like mezzanine debt.[3] `/hotel-financing/mezzanine-debt-and-preferred-equity` compares the two.\n\nKey money is a payment from the brand, covered below. Common equity is your cash and your partners' cash. It is paid last and keeps whatever is left."
    },
    {
      h2: "How much of the stack can senior debt cover?",
      lead: "Senior debt covers whatever the smallest of the lender's sizing tests allows, and no conventional lender publishes those tests.",
      body: "A hotel lender runs DSCR, debt yield and loan-to-value tests against the same NOI and lends the smallest result. `/hotel-financing/loan-requirements` walks through the tests and `/tools/hotel-loan-sizing-calculator` runs them on your numbers. Our rate sheet prints the public indexes and marks conventional thresholds as not yet published, because lenders do not publish them.[6]\n\nOne public boundary does exist for banks. The interagency real estate lending guidelines say a bank's internal loan-to-value limits should not exceed supervisory limits of 85 percent for improved property and 80 percent for commercial construction.[4] Those are ceilings for the bank's whole policy, not an offer. The guidelines also say institutions should establish their own internal limits, so ask the bank for its hotel limit in writing.\n\nGovernment programs publish their structures. SBA's 504 program treats hotels, motels and other lodging facilities as limited or special purpose property. The borrower must contribute at least 15 percent, the debenture finances no more than 35 percent, and at least 50 percent comes from a bank or other third party lender. A new business in a special purpose property contributes 20 percent and the debenture drops to 30 percent. The debenture is limited to $5,000,000 for most projects.[1] `/hotel-financing/sba-7a-vs-504` has the detail."
    },
    {
      h2: "What can fill the gap between the senior loan and my equity?",
      lead: "C-PACE, mezzanine debt, preferred equity and seller financing can each fill part of the gap, and each needs the senior lender's permission.",
      body: "C-PACE only funds eligible improvements, so it fits a renovation, a PIP with energy and water scope, or new construction. The Texas program's guidance is that the assessment should generally be no more than 20 percent of the property's value, and the mortgage holder must receive thirty days' notice and give written consent.[2] Some securitized loans address it in advance: one 2026 CMBS loan on a retail property permits the borrowers to obtain a PACE loan of up to $10,000,000 without the lender's approval.[7] Where the loan documents do not address PACE, the Texas program still requires the mortgage holder's written consent.[2]\n\nMezzanine debt and preferred equity fund anything, including purchase price, and cost more. A 2026 public example shows the scale a small mezzanine layer can take: a $39.0 million first mortgage, a $3.8 million mezzanine loan and $351,439 of sponsor equity funded a refinance of a student housing property, with the mezzanine loan at 11.00 percent against 7.43333 percent on the first mortgage.[7] That is one non-hotel loan, not a market rate.\n\nSeller financing, covered on `/buy-a-hotel/seller-financing`, is a note held by the seller, and it needs the senior lender's consent like any other subordinate debt. Under SBA's 504 procedures, a borrower's required contribution may come from borrowed funds only if that debt is subordinate to the third party loan and the debenture.[1]"
    },
    {
      h2: "Does key money count as equity?",
      lead: "Key money counts as a source of funds, but it arrives after opening and must be repaid on a declining scale if the franchise ends early.",
      body: "Hilton's 2025 Hampton franchise disclosure document describes the mechanics. The brand may offer a development incentive at its sole discretion. The owner and its principals sign a development incentive note when they sign the franchise agreement. The incentive is disbursed within 30 days after the hotel opens, as long as any required PIP is complete and the application fee is paid. The document states that an incentive is not a loan, it is a contingent liability: if the franchise terminates before the end of the term, the owner must pay the then-current repayable amount, which falls by 1/20th a year on a 20-year term.[5]\n\nTwo consequences follow. First, key money cannot fund the closing, because it is paid after opening or after the PIP. It reimburses equity or pays down debt later. Second, a lender will treat the repayment obligation as a liability when it underwrites a sale or an early exit. Brands do not publish key money amounts. `/glossary/key-money` has a worked burn-off example."
    },
    {
      h2: "How do I decide how many layers to use?",
      lead: "Use the fewest layers that close the deal, and test the stack against a fall in NOI before you test it against the purchase price.",
      body: "Each added layer has three costs. The first is the rate or return, which rises as the layer moves further from the lien. The second is time, because every layer adds a negotiation with the senior lender: a consent for C-PACE, an intercreditor agreement for mezzanine debt, a review of the operating agreement for preferred equity.[2][3] The third is control, because a mezzanine lender can take the ownership entity and a preferred investor can take over decisions if it is not paid.[3]\n\nHotels make the downside test necessary. Revenue reprices nightly, so NOI can move faster than on a leased property. The worked example below shows the same $20.0 million project with two layers and with six. Both close. One survives a 61 percent fall in NOI before the owner's cash flow reaches zero, and the other survives 33 percent."
    },
    {
      h2: "In what order should I assemble a hotel capital stack?",
      lead: "Start with the senior loan, because its documents decide what every other layer is allowed to be.",
      body: "Size the first mortgage on trailing NOI and find out which test binds. Then ask the senior lender, in the term sheet, what subordinate capital it will permit and on what conditions. Securitized loans write this down: a 2026 hotel loan in a CMBS pool lists future mezzanine debt as not permitted, while another loan in the same pool permits it subject to combined loan-to-value, DSCR and debt yield tests.[7]\n\nOnly then price the gap capital, and price all of it on the same basis: total dollars paid over your expected hold, including fees, reserves and exit costs. Closing costs and lender-required reserves are uses of funds too, and they are routinely left out of early stacks. `/hotel-financing/closing-costs` and `/hotel-financing/covenants-and-cash-management` cover both. `/hotel-financing/how-debt-placement-works` explains the sequence from quote to closing."
    }
  ],
  table: {
    caption: "Layers of a hotel capital stack, in order of repayment, September 2026",
    columns: [
      "Layer",
      "Secured by",
      "Senior lender's say",
      "Public rule or evidence"
    ],
    rows: [
      [
        "Senior debt",
        "First mortgage on the hotel",
        "Sets the terms for every layer below",
        "Bank supervisory LTV limits: 85% improved property, 80% commercial construction[4]"
      ],
      [
        "SBA 504 debenture",
        "Lien on the project property behind the bank loan",
        "Built into the program",
        "Hotel project: 50% bank, 35% debenture, 15% owner; $5,000,000 debenture limit[1]"
      ],
      [
        "C-PACE",
        "Assessment lien with property tax priority (Texas)",
        "Written consent of the mortgage holder",
        "Generally no more than 20% of property value (Texas guidance)[2]"
      ],
      [
        "Mezzanine debt",
        "Pledge of ownership interests in the borrower",
        "Intercreditor agreement",
        "One 2026 public example at 11.00% behind a 7.43% first mortgage[7]"
      ],
      [
        "Preferred equity",
        "Nothing; rights under the operating agreement",
        "Often requires consent under the loan documents",
        "Described in CMBS prospectus risk factors; pricing not published[3]"
      ],
      [
        "Key money",
        "Development incentive note to the brand",
        "Reviewed as a contingent liability",
        "Paid within 30 days after opening; burns off 1/20th a year on a 20-year term[5]"
      ],
      [
        "Common equity",
        "Nothing; paid last",
        "Minimum cash equity is a lender condition",
        "SBA 504 minimum for a hotel: 15%, or 20% for a new business[1]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94%, SOFR at 3.85% and the 25-year SBA 504 debenture at 6.54% as of September 17, 2026. It prints no mezzanine, preferred equity or C-PACE pricing, because none is published.[6]"
  },
  workedExample: {
    label: "Hypothetical: a $20.0M hotel acquisition and PIP, built two ways",
    body: "Hypothetical. Total cost is $20,000,000: a $16,000,000 purchase, a $3,000,000 PIP and $1,000,000 of closing costs and reserves. Stabilized NOI is $2,000,000. Every rate and percentage below is an assumption for the arithmetic, not a quote or a lender rule. Few deals use every layer; the six-layer version is here to show the order.\n\nTwo layers. Senior loan $11,000,000 (55 percent of cost) at 7.00 percent interest-only: $770,000 a year. Common equity $9,000,000 (45 percent). Cash flow to the owners is $2,000,000 minus $770,000, or $1,230,000. NOI can fall 61.5 percent before that reaches zero.\n\nSix layers. Senior loan $11,000,000 (55 percent). C-PACE $2,000,000 (10 percent) at 7.50 percent over 25 years: $14,780 a month, or $177,358 a year. Mezzanine debt $2,000,000 (10 percent) at 11.00 percent: $220,000. Preferred equity $1,500,000 (7.5 percent) at a 12.00 percent return: $180,000. Key money $500,000 (2.5 percent), which arrives after the PIP and must be bridged with cash until then. Common equity $3,000,000 (15 percent). The layers total $20,000,000.\n\nCumulative position. The senior loan ends at 55 percent of cost, C-PACE at 65 percent, mezzanine debt at 75 percent and preferred equity at 82.5 percent.\n\nCash flow. Fixed payments are $770,000 plus $177,358 plus $220,000 plus $180,000, or $1,347,358. Cash flow to the common owners is $652,642. The owners put in $6,000,000 less cash, and NOI can now fall only 32.6 percent before their cash flow reaches zero.\n\nSBA 504 comparison. An $8,000,000 owner-operated hotel project under the published structure is a $4,000,000 bank loan, a $2,800,000 debenture and $1,200,000 of owner cash."
  },
  faq: [
    {
      q: "I'm buying a $20 million hotel and my lender will only do 55 percent. How do I fill the rest?",
      a: "With some mix of C-PACE for eligible renovation scope, mezzanine debt or preferred equity, and your own equity. Ask the senior lender first which of those its documents allow. Each added layer raises fixed payments and shrinks the NOI decline the deal can absorb."
    },
    {
      q: "Can I use C-PACE and mezzanine debt on the same hotel?",
      a: "Only if the senior lender agrees to both. C-PACE needs the mortgage holder's written consent because its lien has property tax priority in states like Texas. Mezzanine debt needs an intercreditor agreement. Expect the senior lender to test combined debt against its own limits."
    },
    {
      q: "Does key money count as equity in a hotel capital stack?",
      a: "It is a source of funds, not equity at closing. Hilton's Hampton disclosure document says the incentive is paid within 30 days after opening and is a contingent liability that must be repaid on a declining scale if the franchise ends early."
    },
    {
      q: "How is an SBA 504 hotel loan structured?",
      a: "Hotels are special purpose property under SBA's procedures. A bank or other third party lends at least 50 percent, the SBA debenture covers up to 35 percent, and the owner contributes at least 15 percent, or 20 percent for a new business. The debenture limit is $5,000,000."
    },
    {
      q: "How much equity do I need to refinance my hotel?",
      a: "It depends on which sizing test binds. If the new loan is smaller than the payoff plus closing costs and reserves, the difference is cash you bring. No conventional lender publishes a minimum equity figure. SBA's 504 refinance program caps the loan at 90 percent of value."
    },
    {
      q: "What is the cheapest way to fill a gap in my hotel financing?",
      a: "Usually the layer closest to the lien. A larger senior loan costs less than C-PACE or mezzanine debt, and those cost less than preferred equity. But the cheapest rate is not always available, so compare total dollars over your hold period, fees included."
    },
    {
      q: "What is the maximum loan-to-value a bank can lend on a hotel?",
      a: "Federal guidelines set supervisory loan-to-value limits of 85 percent for improved property and 80 percent for commercial construction, and tell banks to set their own internal limits at or below those. Banks do not publish their hotel limits, so ask for it in writing."
    }
  ],
  sources: [
    {
      n: 1,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: debenture limits (Para. D.1, p. 351); borrower's contribution and the Limited or Special Purpose Property list (Para. E.1.c, pp. 354-355); 504 refinance loan-to-value limit (Para. C.10, p. 342)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Property Owner FAQ: 20 percent of value guideline, mortgage holder consent process, lien priority",
      url: "https://www.texaspaceauthority.org/home/resources/faqs/property-owner-faq/",
      publisher: "Texas PACE Authority",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Benchmark 2026-B42 Mortgage Trust, prospectus (Form 424B2, filed February 25, 2026): mezzanine financing and preferred equity (pp. 115, 231-232)",
      url: "https://www.sec.gov/Archives/edgar/data/2110410/000153949726000776/n5676_x16-424b2.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "12 CFR Part 34, Subpart D, Appendix A: Interagency Guidelines for Real Estate Lending Policies (supervisory loan-to-value limits)",
      url: "https://www.law.cornell.edu/cfr/text/12/appendix-A_to_subpart_D_of_part_34",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025, Item 10 (development incentive)",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "BMO 2026-5C16 Mortgage Trust, free writing prospectus: structural and collateral term sheet dated August 4, 2026 (Loan No. 3 permitted PACE loan; Loan No. 7 sources and uses and mezzanine loan; Loan Nos. 8 and 10 permitted future mezzanine debt)",
      url: "https://www.sec.gov/Archives/edgar/data/2136643/000153949726002077/n6057_x4-ts.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/mezzanine-debt-and-preferred-equity",
      "/hotel-financing/c-pace-financing",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/closing-costs"
    ],
    glossary: [
      "/glossary/mezzanine-debt",
      "/glossary/key-money",
      "/glossary/ltv",
      "/glossary/sba-504"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk through your hotel's capital stack",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges hotel financing from $5 million across the stack: senior debt, C-PACE, mezzanine debt and preferred equity."
};

export default page;
