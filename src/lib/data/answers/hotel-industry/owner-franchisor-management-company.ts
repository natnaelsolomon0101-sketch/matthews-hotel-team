/**
 * What is the difference between a hotel owner, a franchisor and a management company?
 * /hotel-industry/owner-franchisor-management-company
 *
 * Written 2026-09-18. Every fee and term on this page was read that day in a
 * franchise disclosure document or a Form 10-K. Nothing here is a "typical
 * range" from memory.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "owner-franchisor-management-company",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Owner vs Franchisor vs Management Company",
  h1: "What is the difference between a hotel owner, a franchisor and a management company?",
  description: "Who owns a hotel, who licenses the brand and who runs it, with franchise and management fees and terms from public FDDs and 10-K filings.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "What's the actual difference between a hotel brand and a hotel franchise?",
    "What is the difference between a hotel franchise agreement and a management agreement?",
    "Does Marriott own its hotels?",
    "How much are hotel franchise fees?",
    "How much does a hotel management company charge?",
    "Do I need a management company to own a franchised hotel?",
    "Who employs the staff at a franchised hotel?"
  ],
  answer: "The owner holds the real estate and takes the profit or loss. The franchisor licenses a brand and its reservation system for a fee on rooms revenue. The management company runs daily operations for a fee on total revenue. At December 31, 2025, Hilton owned or leased 46 of its 9,158 properties, managed 873 and franchised or licensed 8,239.[1]",
  takeaways: [
    "Brand companies are fee businesses. Marriott says it owns or leases less than one percent of its 9,805-property system.[2]",
    "A franchise fee is charged on rooms revenue. Hilton's 2025 Hampton disclosure lists a 6 percent royalty plus a 4 percent program fee. Marriott's 10-K says royalties typically range from four to seven percent of room revenues.[3][2]",
    "A management fee has two parts: a base fee that is a percentage of hotel revenue and an incentive fee based on hotel profit.[1][2]",
    "The contracts are long. Hampton's new-construction term is generally 22 years. Marriott's management agreements generally start at 20 to 30 years.[3][2]",
    "Most franchised hotels are not run by the brand. Of 1,960 comparable Hampton hotels, 1,945 were managed by the franchisee or a non-Hilton management company.[3]"
  ],
  sections: [
    {
      h2: "What does the hotel owner do?",
      lead: "The hotel owner holds the real estate, signs the loan, signs the franchise and management contracts, funds every renovation, and keeps whatever is left after everyone else is paid.",
      body: "The owner is the only party of the three whose return is not a fee. The franchisor is paid on rooms revenue and the manager is paid mostly on total revenue, so both are paid before the owner in a bad year. The owner also carries the capital obligations. When a brand issues a property improvement plan, the owner pays for it, and when the roof fails, the owner pays for that too.\n\nOwners range widely. Wyndham's 10-K says its franchisees run from sole proprietors to institutional investors such as public real estate investment trusts.[4] Who they are in aggregate is covered at [Who owns hotels in the United States?](/hotel-industry/who-owns-hotels)."
    },
    {
      h2: "What does a hotel franchisor do?",
      lead: "A hotel franchisor licenses its brand name, standards and reservation systems to the owner in exchange for fees, and it does not own or operate the hotel.",
      body: "Choice Hotels' fiscal 2025 10-K describes the arrangement in one sentence: franchisors license their brands to a hotel owner, giving the owner the right to use the brand name, logo, operating practices and reservations systems in exchange for a fee and an agreement to operate the hotel in accordance with the franchisor's brand standards.[5]\n\nThe big brand companies are built on this model. Hilton's 10-K counts 8,239 franchised or licensed properties out of 9,158 at December 31, 2025, which is 90 percent by our arithmetic.[1] Marriott reports 7,644 franchised, licensed and other properties out of 9,805 at year-end 2025.[2] AHLA says 57 percent of all U.S. hotels are franchised.[11] A guest sees one brand. Behind the sign are thousands of separate owners. The glossary entries are at [franchise agreement](/glossary/franchise-agreement) and [franchise disclosure document](/glossary/franchise-fdd)."
    },
    {
      h2: "How much are hotel franchise fees?",
      lead: "Hotel franchise fees are a percentage of rooms revenue, and the two published schedules we read that state both parts, the royalty and the marketing or program fee, add up to between 7 and 10 percent.",
      body: "Hilton's 2025 Hampton franchise disclosure document lists a monthly royalty fee of 6 percent of gross rooms revenue and a monthly program fee of 4 percent of gross rooms revenue. The same document says Hilton may change the program fee, but not by more than one percentage point over the term of the agreement.[3] Marriott's 10-K says its franchise royalties typically range from four to seven percent of room revenues, plus up to four percent of food and beverage revenues for certain brands, along with an application fee and reimbursement for centralized programs and services.[2] Wyndham's 10-K says its direct franchisees generally pay a royalty of approximately 5 percent of gross room revenue and a marketing and reservation fee of 2 to 4 percent.[4]\n\nThere are one-time fees too. The Hampton application fee is $100,000 for new development or conversion, plus $400 for each guest room over 150, and $200,000 for a change of ownership, with a $10,000 fee to prepare a property improvement plan.[3] The franchise disclosure document for any brand you are considering is the place to read its full schedule, because these fees differ by brand and by year."
    },
    {
      h2: "What does a hotel management company do, and how is it paid?",
      lead: "A hotel management company runs the hotel day to day on the owner's behalf, and it is paid a base fee on revenue and usually an incentive fee on profit.",
      body: "The manager hires and supervises the staff, sets rates, runs sales and keeps the books. The owner still owns the results. Hilton's 10-K says its management fees generally consist of a base fee based on a percentage of the hotel's monthly gross operating revenue and, when applicable, an incentive fee based on a percentage of the hotel's operating profits.[1] Marriott's 10-K describes the same two parts: a base management fee that is a percentage of hotel revenues and an incentive management fee based on hotel profits.[2]\n\nNeither filing states the percentages, and third-party management companies do not publish theirs. What is public is what owners paid. Apple Hospitality REIT reported management fees of $47.1 million on total revenue of $1,412.4 million for 2025, which is 3.3 percent by our arithmetic.[6] Host Hotels & Resorts reported management fees of $262 million on $6,015 million of hotel revenue, about 4.4 percent.[7] Those are blended figures across many contracts, base and incentive fees together, so treat them as evidence of scale and not as a quote."
    },
    {
      h2: "How long do hotel franchise and management agreements last?",
      lead: "Hotel franchise agreements commonly run 10 to 25 years and brand management agreements commonly start at 20 to 30 years, according to the brands' own filings.",
      body: "Hilton's Hampton disclosure sets the franchise term for new construction at generally 22 years from the effective date, and for a conversion at generally 10 to 20 years from opening. A buyer on a change of ownership generally gets the remaining term or another term Hilton approves.[3] Marriott says its franchise agreements are generally for 10 to 25 years and its management agreements are generally for initial periods of 20 to 30 years with renewal options of 10 or more years.[2] Hilton gives 20 to 30 years as the typical initial term of its management contracts.[1] Wyndham says 10 to 20 years for franchise agreements, and Choice says 10 to 30.[4][5]\n\nThese terms outlast most loans and most ownership periods, so they are part of what a buyer is buying. A short remaining term, or a brand-managed hotel that cannot be delivered free of its manager, changes the buyer pool. See [Should I sell my hotel before the franchise agreement expires?](/sell-a-hotel/franchise-agreement-expiration)."
    },
    {
      h2: "Can I manage my own franchised hotel?",
      lead: "Yes, if the brand approves you, because the franchisor decides who is qualified to operate a hotel under its flag.",
      body: "Hilton's Hampton disclosure says the hotel must be operated either by the franchisee or by a third-party management company Hilton has approved. To manage it yourself you need Hilton's prior written approval and must complete its training program, and if Hilton decides at any time that you are not qualified it may require you to retain an acceptable management company.[3] In practice most Hampton owners use their own company or a third party and not the brand: of the 1,960 comparable Hampton hotels in the 2025 disclosure, 15 were company-managed and 1,945 were franchisee-managed, a category that covers the franchisee itself or a non-Hilton management company.[3] First-time buyers usually meet this requirement by hiring an approved manager, which is covered at [How do I buy my first hotel with no hotel experience?](/buy-a-hotel/first-hotel-no-experience)."
    },
    {
      h2: "Why do hotel REITs always hire a separate manager?",
      lead: "Hotel REITs hire a separate manager because the tax code requires it: a REIT may lease a hotel to its own taxable subsidiary only if an eligible independent contractor operates the property.",
      body: "Section 856(d) of the Internal Revenue Code treats rent from a qualified lodging facility leased to a taxable REIT subsidiary as good REIT income if the property is operated on the subsidiary's behalf by an eligible independent contractor. That contractor must be actively engaged in the business of operating lodging facilities for parties unrelated to the REIT. A lodging facility is a hotel, motel or other establishment where more than half the dwelling units are used on a transient basis.[8] That is why a REIT's statement shows management fees as a line, as Apple Hospitality's and Host's do.[6][7]"
    },
    {
      h2: "What does this structure mean when I finance or sell a hotel?",
      lead: "When you finance or sell a hotel, the franchise and management agreements are underwritten alongside the real estate, because they decide who can run the hotel and what comes off the top.",
      body: "A lender reads the fees as fixed charges ahead of its debt service and wants to know the flag will stay if it has to take the property, which is what a [comfort letter](/glossary/comfort-letter) addresses. As of September 17, 2026, the 10-year Treasury is 4.94 percent and SOFR is 3.85 percent, and lenders do not publish the spreads or coverage tests they apply, so the agreements in your file are part of what earns a better quote.[10] USALI's 12th edition, effective January 1, 2026, added a schedule that gathers annual mandatory brand and operator costs in one place, which makes this easier for a lender or buyer to see.[9]\n\nA buyer does not inherit your franchise. It applies for its own and takes on the brand's improvement plan. Start at [How does hotel financing work, and what does it cost right now?](/hotel-financing), [What is involved in selling a hotel?](/sell-a-hotel) or [Should I buy a branded or independent hotel?](/buy-a-hotel/branded-vs-independent)."
    }
  ],
  table: {
    caption: "Hotel owner, franchisor and management company: what each does and what the public documents say about pay and term",
    columns: [
      "Question",
      "Owner",
      "Franchisor (the brand)",
      "Management company"
    ],
    rows: [
      [
        "What it holds",
        "The real estate, the loan and the risk",
        "The name, standards, loyalty program and reservation system[5]",
        "A contract to operate the hotel for the owner"
      ],
      [
        "How it is paid",
        "What is left after expenses, fees, reserves and debt service",
        "Hampton: 6% royalty plus 4% program fee on gross rooms revenue.[3] Marriott: royalties typically 4% to 7% of room revenues.[2] Wyndham: about 5% plus 2% to 4%[4]",
        "Base fee on hotel revenue plus an incentive fee on profit.[1][2] Percentages are not published"
      ],
      [
        "What owners reported paying in 2025",
        "n/a",
        "Apple Hospitality: $62.6 million of franchise fees, 4.9% of room revenue[6]",
        "Apple Hospitality: $47.1 million, 3.3% of revenue.[6] Host: $262 million, about 4.4% of hotel revenue[7]"
      ],
      [
        "Initial term",
        "As long as it holds the property",
        "Hampton: generally 22 years new-build, 10 to 20 on conversion.[3] Marriott: generally 10 to 25.[2] Wyndham: 10 to 20.[4] Choice: 10 to 30[5]",
        "Marriott: generally 20 to 30 years plus renewals.[2] Hilton: typically 20 to 30[1]"
      ],
      [
        "Share of the brand's system",
        "Hilton owned or leased 46 of 9,158 properties[1]",
        "Hilton franchised or licensed 8,239 of 9,158[1]",
        "Hilton managed 873 of 9,158[1]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet records that no lender type publishes its spread, coverage floor or loan-to-value ceiling, so the fees above are some of the few hard numbers in a hotel loan file: they come off revenue before debt service priced over a 10-year Treasury of 4.94% on September 17, 2026.[10]"
  },
  workedExample: {
    label: "Hypothetical: what the brand and the manager take from a 120-room franchised hotel",
    body: "Hypothetical. The hotel is invented. The fee rates are the published Hampton schedule and one REIT's reported average, and your contracts will differ.\n\nThe hotel: rooms revenue of $5,000,000 and total revenue of $5,400,000.\n\nRoyalty: 6 percent of gross rooms revenue is $300,000.[3]\n\nProgram fee: 4 percent of gross rooms revenue is $200,000.[3]\n\nManagement fee: we use 3.3 percent of total revenue, the share Apple Hospitality REIT's management fees came to in 2025,[6] which gives $178,200. A real contract would state a base percentage and an incentive formula.\n\nTotal: $678,200 a year, or 12.6 percent of total revenue, paid before property taxes, insurance, a replacement reserve or the mortgage.\n\nThe question for the owner is whether the flag and the operator earn that back. One public data point: Hilton reports that comparable Hampton hotels averaged a RevPAR index of 121.0 in 2024, meaning 21 percent more RevPAR than their competitive sets.[3] That is an average across the brand and says nothing certain about a single hotel."
  },
  faq: [
    {
      q: "Does Marriott or Hilton own its hotels?",
      a: "Rarely. Hilton owned or leased 46 of 9,158 properties at December 31, 2025.[1] Marriott says it owns or leases less than one percent of its system.[2] The rest are franchised, licensed or managed for other owners."
    },
    {
      q: "What is the difference between a franchise agreement and a management agreement?",
      a: "A franchise agreement licenses the brand and systems and is paid on rooms revenue. A management agreement hands over daily operations and is paid a base fee on revenue plus an incentive fee on profit.[1][2] A hotel can have both, with different companies."
    },
    {
      q: "How much does a hotel management company charge?",
      a: "Management companies do not publish their fees. Public owners report what they paid: Apple Hospitality REIT's 2025 management fees were 3.3 percent of its revenue and Host Hotels & Resorts' were about 4.4 percent, by our arithmetic on their reported figures.[6][7]"
    },
    {
      q: "Who employs the staff at a franchised hotel?",
      a: "Not the franchisor. Hilton's Hampton disclosure calls the franchisee an independent employer and says Hilton will not direct or supervise the personnel of the franchisee or its management company.[3]"
    },
    {
      q: "Can a brand also manage my hotel?",
      a: "Yes. Hilton managed 873 properties at December 31, 2025, and Marriott had 2,017 company-operated properties at year-end 2025.[1][2]"
    },
    {
      q: "Does the franchise transfer when I sell my hotel?",
      a: "No. Under the Hampton agreement the buyer applies for a change of ownership and pays a $200,000 application fee, and generally receives the remaining term or another term Hilton approves.[3]"
    },
    {
      q: "What is an independent hotel?",
      a: "A hotel with no franchise. The owner keeps the royalty and program fees and takes on its own marketing, distribution and standards. AHLA says 57 percent of U.S. hotels are franchised, which leaves 43 percent that are not.[11]"
    }
  ],
  sources: cite("hilton", "marriott", "hampton", "wyndham", "choice", "apple", "host", "usc856", "usali", "rates", "ahlaFranchising"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/who-owns-hotels",
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/revpar-adr-occupancy"
    ],
    glossary: [
      "/glossary/franchise-agreement",
      "/glossary/franchise-fdd",
      "/glossary/comfort-letter",
      "/glossary/pip",
      "/glossary/key-money"
    ],
    data: [
      "/rates",
      "/data/hotel-financing-statistics"
    ]
  },
  cta: {
    label: "Talk through your franchise and management terms",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances hotels, and the franchise and management agreements are part of every one of those files."
};

export default page;
