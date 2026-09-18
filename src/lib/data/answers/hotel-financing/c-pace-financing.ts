/**
 * Can I use C-PACE financing on a hotel?
 * Answer page: /hotel-financing/c-pace-financing
 *
 * Written 2026-09-18. Every figure is tied to a source fetched and read that day.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "c-pace-financing",
  cluster: "hotel-financing",
  isHub: false,
  title: "C-PACE Financing for Hotels: How It Works",
  h1: "Can I use C-PACE financing on a hotel?",
  description: "C-PACE on a hotel: what it funds, why your lender must consent, where the assessment sits in the capital stack, and how retroactive C-PACE works.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I use C-PACE financing on a hotel?",
    "My hotel PIP includes new HVAC and windows. Can C-PACE pay for part of it?",
    "Does my mortgage lender have to approve a C-PACE assessment on my hotel?",
    "Where does C-PACE sit in the capital stack on a hotel deal?",
    "Can I get C-PACE money for hotel improvements I already finished?",
    "What happens to a C-PACE assessment when I sell the hotel?",
    "Is C-PACE cheaper than mezzanine debt for a hotel renovation?"
  ],
  answer: "Yes, where the state and the city or county have an active program. C-PACE is long-term, fixed-rate financing for energy, water and resiliency work, repaid through an assessment on the property.[1][2] The Texas program lists hospitality as eligible and generally keeps the assessment within 20 percent of property value.[2] An existing mortgage lender must consent in writing.[3] PACENation counts $13.5 billion of cumulative C-PACE investment through December 2025.[4]",
  takeaways: [
    "C-PACE is a property assessment, not a mortgage. It is repaid on the tax-bill framework, stays with the property when it sells, and in Texas ranks with other ad valorem tax liens.[1][6]",
    "It pays for building systems, not furniture: HVAC, chillers and boilers, water heating, lighting, building envelope, water conservation and on-site power, all permanently fixed to the property.[2][3]",
    "A hotel with a mortgage needs the lender's written consent first. Texas law requires 30 days of written notice to the mortgage holder and a written consent before the assessment contract is signed.[5]",
    "In Texas the assessment generally should be no more than 20 percent of the property's value, and the term must be shorter than the useful life of the improvements, often 10 to 25 years.[2]",
    "Some programs fund eligible work that is already finished. The look-back window is set locally: a PACENation article in April 2020 cited 3 years in Michigan and 1 year in Connecticut.[8]"
  ],
  sections: [
    {
      h2: "What is C-PACE, in plain terms?",
      lead: "C-PACE, short for commercial property assessed clean energy, is financing for building improvements that the owner repays through an assessment on the property instead of a conventional loan payment.",
      body: "The U.S. Department of Energy describes C-PACE as a structure in which a building owner borrows for energy reduction, on-site generation or similar projects and repays through an assessment on the property tax bill, with the arrangement staying with the property if it is sold.[1] It exists only where a state has passed enabling legislation and a local program is active.[1] DOE says the financing can cover 100 percent of project cost, with terms of typically 10 to 20 years that do not exceed the useful life of the equipment, and a typical close time of 3 to 9 months.[1]\n\nThe money usually comes from private capital providers, not from the government. In Texas the owner picks the lender and the contractor, and the program administrator reviews the project.[2] PACENation, the industry's trade association, reports $13.5 billion of cumulative commercial PACE investment across 3,837 projects from 2009 through December 2025.[4] That is an association's own count, so read it as a sign of scale, not as an audited market figure."
    },
    {
      h2: "Is a hotel eligible, and what can the money pay for?",
      lead: "Hotels are eligible commercial property in the programs we read, and the money pays for permanently fixed improvements that cut energy or water use.",
      body: "The Texas PACE Authority, the nonprofit that administers more than 100 local programs in Texas, lists hospitality among eligible property types.[2][7] Its list of eligible improvements reads like the mechanical half of a hotel renovation: HVAC systems and controls, chillers, boilers and furnaces, water heating, energy management systems, lighting, building enclosure and envelope work, water conservation, and on-site power generation such as solar or combined heat and power.[2]\n\nTexas sets three tests for a qualified improvement. It must be permanently fixed to the real property, it must have a demonstrated capacity to decrease energy or water consumption or demand, and its useful life must exceed the term of the financing.[3] That rules out the soft side of a PIP: case goods, soft goods, signage and televisions are not building systems. Undeveloped lots and government-owned property are ineligible in Texas, though a privately owned ground lease on government land may qualify, and the administrator points to a hotel as its example.[3]\n\nEvery state writes its own list. Some add resiliency or seismic work. Check the statute and the program guide for the county the hotel sits in. For what the brand's renovation scope usually contains, see [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans)"
    },
    {
      h2: "Does my mortgage lender have to approve it?",
      lead: "Yes. A C-PACE assessment on a mortgaged hotel needs the mortgage holder's consent, by statute in Texas and by the loan documents almost everywhere.",
      body: "Texas Local Government Code section 399.010 says that before a local government signs an assessment contract, the holder of any mortgage lien must receive written notice at least 30 days before the contract is executed, and a written consent from that holder must be obtained.[5] DOE gives the national version: for properties with a mortgage, lender consent is usually required, and it can be difficult and time-consuming to obtain.[1]\n\nThe reason is lien priority, covered in the next section. The loan documents point the same way. Commercial mortgages generally carry a due-on-encumbrance clause, which lets the lender accelerate the loan if the borrower encumbers the property without consent. A 2026 CMBS prospectus describes that clause as general across its loan pool.[9] Putting an assessment on the hotel without asking is a default risk, not a shortcut.\n\nThe Texas administrator's advice is to lead with a business plan that shows the property's value and net operating income improving, because a lender is weighing a small senior claim against better collateral.[2] Lenders do not publish their consent standards, so ask yours before you budget around the money."
    },
    {
      h2: "Where does C-PACE sit in the capital stack?",
      lead: "A C-PACE assessment sits ahead of the mortgage in lien priority, but only for the installments that are due, which is why it behaves differently from a second mortgage or mezzanine debt.",
      body: "In Texas a PACE assessment is a first and prior lien from the date the notice is recorded, with the same priority status as a lien for any other ad valorem tax. The lien runs with the land, and the part of the assessment that has not yet come due is not eliminated by a tax foreclosure.[6] DOE puts it generally: the lien is senior to most other debt on the property, which is what lets capital providers offer long terms.[1]\n\nTwo features soften that seniority for the mortgage lender. The assessment does not accelerate: in a default only the current installment is due, not the full balance.[7] And the financing is non-recourse to the borrower and carries no personal guarantee in the Texas program.[2][7] So the senior lender's real exposure is the unpaid installments, much like unpaid property tax.\n\nIn a hotel deal, owners use C-PACE for the slice of cost between the senior loan and their own equity, the slice that [mezzanine debt](/glossary/mezzanine-debt) or preferred equity would otherwise fill. The Texas administrator says owners most often use it to reduce equity requirements and fill gaps left by conservative loan sizing.[7] A senior lender will still underwrite the combined claim, because the annual assessment comes out of cash flow ahead of debt service. Model it as a fixed charge when you run [the DSCR calculator](/tools/dscr-calculator)."
    },
    {
      h2: "What is retroactive C-PACE?",
      lead: "Retroactive C-PACE is an assessment placed after eligible work is finished, which reimburses the owner for improvements already paid for.",
      body: "A PACENation article dated April 17, 2020 describes the practice: properties that recently completed qualifying work can use C-PACE to replenish reserves or reduce other lenders' exposure, and projects near completion can use it for cost overruns. At that date the author counted roughly two dozen states with active programs and said retroactivity was workable in roughly a dozen of those markets, with a 3-year look-back in Michigan and 1 year in Connecticut. Rules can differ between neighboring counties in the same state.[8]\n\nThose figures are six years old and program rules change, so treat them as examples of how much the window varies, not as current terms. The Texas pages we read for this article do not describe a look-back at all. Before you count on reimbursement for a finished PIP, get the look-back period, the eligible cost list and the lender consent requirement from the local program administrator in writing. For a recently renovated or newly built hotel carrying expensive short-term debt, that one call can be worth making before you price [a bridge loan](/hotel-financing/bridge-loans)."
    },
    {
      h2: "What happens to the assessment when I sell or refinance?",
      lead: "The assessment stays with the hotel: on a sale the unpaid balance passes to the buyer unless it is paid off, and on a refinance the new lender has to accept it.",
      body: "The Texas administrator states that the assessment is tied to the property instead of the owner and transfers automatically to the next owner, who keeps both the payments and the utility savings.[2] DOE says the same, with the option of paying it off in full before the sale.[1]\n\nIn practice a buyer prices the hotel with the assessment in view. The annual installment is a fixed charge that lowers the cash flow a buyer and its lender will underwrite, so expect it to be treated like any other obligation that runs with the land, such as [a ground lease](/glossary/ground-lease). A new lender at refinance has to accept a lien that ranks ahead of it. If you expect to sell or refinance within a few years, ask the capital provider for the prepayment terms before closing. They are set by contract and not by the statutes we read. See [Should I refinance my hotel or sell it instead?](/hotel-financing/refinance-or-sell) for how to compare the two exits."
    },
    {
      h2: "Does C-PACE cost less than the capital it replaces?",
      lead: "It depends on the rate you are quoted, and nobody publishes a hotel C-PACE rate sheet, so compare a written quote against your actual alternatives.",
      body: "The Texas PACE Authority says rates depend on a variety of factors and that project rates in its program have hovered around 6 percent. It does not date that statement, so take it as history and not as a quote.[2] For reference, the 10-year Treasury was 4.94 percent on September 17, 2026, and the 25-year SBA 504 debenture priced at 6.54 percent on September 10, 2026.[10]\n\nWhat C-PACE offers that short-term capital does not is a fixed rate, a long amortization and no balloon. What it costs you is a senior lien that a future buyer and lender must accept, a consent process with your current lender, and closing costs for the engineering review. In Texas an independent third-party reviewer has to confirm the projected savings, and the program expects savings to exceed the cost of the project over its life.[2] If the hotel also qualifies for SBA financing, price the fixed-rate 504 structure as well: [What is the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?](/hotel-financing/sba-7a-vs-504)."
    }
  ],
  table: {
    caption: "How a C-PACE assessment differs from a hotel's senior mortgage",
    columns: [
      "Feature",
      "C-PACE assessment",
      "Senior mortgage"
    ],
    rows: [
      [
        "What secures it",
        "An assessment lien on the property with tax-lien priority in Texas[6]",
        "A mortgage or deed of trust on the hotel"
      ],
      [
        "What it can fund",
        "Permanently fixed energy, water and resiliency improvements[2][3]",
        "Purchase, refinance and, if the lender agrees, renovation"
      ],
      [
        "How much",
        "In Texas, generally no more than 20% of property value; up to 100% of eligible project cost[1][2]",
        "Set by the lender's own tests, which lenders do not publish"
      ],
      [
        "Term",
        "Shorter than the useful life of the improvements; often 10 to 25 years in Texas, typically 10 to 20 nationally[1][2]",
        "Set by the lender; often shorter than the amortization, with a balloon"
      ],
      [
        "Recourse",
        "Non-recourse, no personal guarantee in the Texas program[2][7]",
        "Depends on the lender and the loan type"
      ],
      [
        "On default",
        "Only the current installment is due; the balance does not accelerate[7]",
        "The lender can accelerate the full balance"
      ],
      [
        "On a sale",
        "Transfers to the buyer with the property unless paid off[1][2]",
        "Paid off or formally assumed; see the assumption page"
      ],
      [
        "Consent needed",
        "Written consent of any existing mortgage holder, with 30 days' notice in Texas[5]",
        "Not applicable"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% as of September 17, 2026 and the 25-year SBA 504 debenture at 6.54% as of September 10, 2026. It carries no C-PACE row, because C-PACE capital providers do not publish rates.[10]"
  },
  workedExample: {
    label: "Hypothetical: $1.8M of C-PACE inside a 120-key hotel renovation",
    body: "Hypothetical. A 120-key hotel in a Texas county with an active program is valued at $15,000,000 and carries a $9,000,000 senior loan, which is 60 percent of value. The brand's PIP includes $1,800,000 of qualifying work: rooftop units, a chiller, water heaters, LED lighting and window replacement. The rate and term below are assumptions for the arithmetic, not quotes.\n\nSize check. The Texas guideline is an assessment of no more than 20 percent of value.[2] Twenty percent of $15,000,000 is $3,000,000. The $1,800,000 request is 12 percent of value, inside the guideline.\n\nCombined claim. $9,000,000 plus $1,800,000 equals $10,800,000, or 72 percent of value. The senior lender sees that number when it decides whether to consent.\n\nPayment. At an assumed 6.50 percent fixed rate over 20 years with level annual installments, the assessment is $163,362 a year. Over 20 years that totals $3,267,230.\n\nWhat it replaces. Without C-PACE the owner writes a check for $1,800,000 or borrows it short-term. With it, the owner keeps $1,800,000 of equity in exchange for a $163,362 annual charge that ranks ahead of the mortgage and passes to the next owner. The remaining PIP items, such as case goods and soft goods, are not eligible and still need cash, reserves or a renovation loan."
  },
  faq: [
    {
      q: "Can I use C-PACE to pay for my hotel's PIP?",
      a: "Only the part that is a permanently fixed energy or water improvement, such as HVAC, water heating, lighting, windows or roofing. Furniture, soft goods and signage do not qualify under the Texas tests, and other states use similar ones."
    },
    {
      q: "Does C-PACE require a personal guarantee?",
      a: "Not in the Texas program, which describes the financing as non-recourse with no personal guarantees. The security is the assessment lien on the property. Confirm the terms with the capital provider in your state."
    },
    {
      q: "Will my CMBS or bank lender consent to C-PACE?",
      a: "It is the lender's decision, and lenders do not publish consent standards. Texas requires written consent and 30 days' written notice. DOE warns that consent can be difficult and slow, so ask before you commit to a budget that depends on it."
    },
    {
      q: "What happens to C-PACE if I sell my hotel?",
      a: "The unpaid assessment stays with the property and becomes the buyer's obligation unless you pay it off at closing. Buyers and their lenders will underwrite the annual installment as a fixed charge."
    },
    {
      q: "Can I get C-PACE for work I already completed?",
      a: "In some programs, yes. Look-back windows are set locally. A PACENation article from April 2020 cited 3 years in Michigan and 1 year in Connecticut. Ask your local administrator for the current rule in writing."
    },
    {
      q: "Is C-PACE available for a new-build hotel?",
      a: "It depends on the program. Texas excludes undeveloped lots and lots undergoing development at the time of the assessment. PACENation's market data tracks new-construction projects, so other programs fund them. The program guide for the hotel's county controls."
    },
    {
      q: "How long does C-PACE take to close?",
      a: "The Department of Energy describes the typical close time as medium, 3 to 9 months. Lender consent and the engineering review of projected savings are the steps most likely to set the pace."
    },
    {
      q: "Is C-PACE available in every state?",
      a: "No. It requires state enabling legislation and an active local program. Check PACENation's program map or your state energy office, then confirm the city or county where the hotel sits has opted in."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Better Buildings Financing Navigator: Commercial Property Assessed Clean Energy (CPACE)",
      url: "https://betterbuildingssolutioncenter.energy.gov/financing-navigator/option/cpace",
      publisher: "U.S. Department of Energy",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Property Owner FAQ: eligible properties and improvements, 20 percent of value guideline, term, consent process, lien",
      url: "https://www.texaspaceauthority.org/home/resources/faqs/property-owner-faq/",
      publisher: "Texas PACE Authority",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Eligibility: qualified improvements, ineligible properties, owner underwriting factors",
      url: "https://www.texaspaceauthority.org/eligibility/",
      publisher: "Texas PACE Authority",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "PACE Market Data: cumulative C-PACE investment and project count, 2009 to December 2025",
      url: "https://www.pacenation.org/pace-market-data/",
      publisher: "PACENation",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Texas Local Government Code section 399.010, Notice to Mortgage Holder Required for Participation",
      url: "https://texas.public.law/statutes/tex._local_gov%27t_code_section_399.010",
      publisher: "Texas Legislature, via Texas.Public.Law",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Texas Local Government Code section 399.014, Lien",
      url: "https://texas.public.law/statutes/tex._local_gov%27t_code_section_399.014",
      publisher: "Texas Legislature, via Texas.Public.Law",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "What Senior Lenders Need to Know About TX-PACE (March 26, 2026)",
      url: "https://www.texaspaceauthority.org/what-senior-lenders-need-to-know-about-tx-pace/",
      publisher: "Texas PACE Authority",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Retroactivity: New Use for C-PACE During Challenging Times (April 17, 2020)",
      url: "https://www.pacenation.org/retroactivity-new-use-for-c-pace-during-challenging-times/",
      publisher: "PACENation",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "Benchmark 2026-B42 Mortgage Trust, prospectus (Form 424B2, filed February 25, 2026): due-on-sale and due-on-encumbrance provisions, p. 221",
      url: "https://www.sec.gov/Archives/edgar/data/1013454/000153949726000776/n5676_x16-424b2.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/historic-tax-credits",
      "/hotel-financing/loan-assumption",
      "/hotel-financing/construction-loans",
      "/hotel-financing/bridge-loans"
    ],
    glossary: [
      "/glossary/mezzanine-debt",
      "/glossary/pip",
      "/glossary/dscr",
      "/glossary/ltv"
    ],
    data: [
      "/rates",
      "/tools/dscr-calculator",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Ask how C-PACE fits your hotel's capital stack",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sizes the senior loan and any C-PACE assessment together, because the lender who has to consent will look at the combined claim."
};

export default page;
