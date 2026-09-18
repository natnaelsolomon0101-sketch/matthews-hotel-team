/**
 * How do hotel management agreements work, and what do they cost?
 * /hotel-industry/hotel-management-agreements
 *
 * Written 2026-09-18. Every fee range, term and termination provision below was
 * read that day in the fiscal 2025 Form 10-K of the REIT named next to it.
 * Percent-of-revenue figures are our arithmetic on reported dollars and the
 * page says so wherever one appears. Private management contracts are not
 * public, so the page publishes no "typical" range of its own.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "hotel-management-agreements",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Management Agreements: Fees, Terms, Termination",
  h1: "How do hotel management agreements work, and what do they cost?",
  description: "Base and incentive fees, contract length, termination on sale and owner approval rights, taken from the fiscal 2025 10-K filings of six hotel REITs.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "How do hotel management agreements work?",
    "What does a hotel management company charge?",
    "What is a typical base management fee and incentive fee for a hotel?",
    "Can I terminate my hotel management agreement if I sell the hotel?",
    "My management company wants a 10 year contract on my hotel, is that normal?",
    "What is an owner's priority return in a hotel management agreement?",
    "Does a hotel management agreement hurt my sale price?"
  ],
  answer: "A hotel management agreement hands daily operations to an operator that is paid a base fee on revenue and usually an incentive fee on profit. In its 10-K filed February 25, 2026, Host Hotels & Resorts says base fees are generally 2 to 3 percent of gross revenues and incentive fees generally 10 to 20 percent of operating profit after an owner's priority return.[1]",
  takeaways: [
    "Published base fee ranges for fiscal 2025: Host generally 2 to 3 percent of gross revenues, Pebblebrook 1 to 4 percent, RLJ 1.5 to 3.5 percent, and Apple Hospitality 2.5 to 3.5 percent under its variable-fee contracts.[1][3][4][2]",
    "The incentive fee is a share of profit above a hurdle. Host and Pebblebrook both describe 10 to 20 percent of profit after the owner's priority return. Chatham's is 10 percent above a threshold and capped at 1 percent of gross hotel revenues.[1][3][5]",
    "Brand-managed contracts are long. Host's run 10 to 50 years at the start. Third-party contracts are short: Apple Hospitality's variable-fee agreements average one to two years.[1][2]",
    "Termination on sale is negotiated, not automatic. Pebblebrook reports termination fees from zero up to three times annual base and incentive fees. Chatham can end its contracts on a sale with no fee and six months' notice.[3][5]",
    "What owners paid in 2025, by our arithmetic on reported dollars: between 2.2 and 4.4 percent of revenue across the six REITs on this page.[1][2][3][4][5][6]"
  ],
  sections: [
    {
      h2: "What does a hotel management agreement actually cover?",
      lead: "A hotel management agreement gives the operator control of daily operations, including staff, room rates, sales and the books, while the owner keeps the real estate, funds the hotel and takes the profit or loss.",
      body: "Host Hotels & Resorts describes the split in its fiscal 2025 10-K. The managers have sole responsibility and exclusive authority for day-to-day operation, including establishing room rates, securing reservations, procuring supplies and promoting the hotels, and the managers employ all managerial and other employees. Host, as owner, provides working capital, funds the cost of fixed asset supplies such as linen and china, and must provide funds when cash at the hotel is insufficient.[1]\n\nPebblebrook Hotel Trust is blunter about the limits of ownership. It tells investors it does not have the authority to require a hotel to be operated in a particular manner or to govern any particular aspect of daily operations, such as setting room rates, and that it can seek redress only if a manager violates the contract.[3]\n\nA management agreement is a different contract from a franchise agreement. The franchise licenses the brand. The management agreement runs the building. One hotel can have both, with two different companies. The roles are laid out at [What is the difference between a hotel owner, a franchisor and a management company?](/hotel-industry/owner-franchisor-management-company)."
    },
    {
      h2: "How much is the base management fee?",
      lead: "The base management fee is a percentage of the hotel's revenue, and the ranges public owners disclosed for fiscal 2025 sit between 1 and 4 percent.",
      body: "Host says its brand managers typically receive a base management fee that in most instances is a percentage, generally 2 to 3 percent, of annual gross revenues.[1] Pebblebrook says its agreements generally provide for base fees between 1 percent and 4 percent of the hotel's revenues, or a fixed amount.[3] RLJ Lodging Trust says each management company receives a base fee between 1.5 percent and 3.5 percent of hotel revenues. RLJ adds a second range that is easy to misread: agreements that include the benefits of a franchise agreement carry a base fee between 1.0 percent and 7.0 percent, because a brand that manages the hotel folds the franchise charge into the management fee.[4]\n\nThe base is not always total revenue. Chatham Lodging Trust says its base management fees are calculated as a percentage of the hotel's gross room revenue.[5] Summit Hotel Properties says its base fee is generally a percentage of total lodging property revenues, and that in some cases there are also monthly fees for accounting and shared services based on the number of guestrooms.[6] Apple Hospitality likewise says its management fees generally include accounting fees and other fees for centralized services.[2] When you compare two proposals, compare the base and the add-ons together.\n\nNo third-party management company publishes its fee schedule. These ranges are what six public owners chose to disclose, and a single-hotel owner should not assume the same terms are on offer."
    },
    {
      h2: "How does the incentive management fee work?",
      lead: "The incentive management fee pays the operator a share of the hotel's profit, but only after the owner has first received a stated return on its investment.",
      body: "Host describes the incentive fee as typically a percentage, generally 10 to 20 percent, of operating profit after the owner has received a priority return on its investment in the hotel.[1] Pebblebrook gives a similar figure: generally 10 to 20 percent of net operating income above a specified return on project costs, or above set income thresholds, and it notes that some of its incentive fees are subject to a limit.[3] Chatham's formula is 10 percent of the hotel's net operating income less fixed costs, base management fees and a specified return threshold, capped at 1 percent of gross hotel revenues.[5]\n\nThe owner's priority return is the number to negotiate. Host explains that when it puts more money into a hotel, many of its agreements treat that funding as an increase to its investment, which raises the owner's priority and reduces the profit available for incentive fees.[1] In plain terms, the hurdle should move up when the owner writes a check for a renovation.\n\nIn practice the incentive fee is often small. Chatham paid $9.9 million of management, revenue management and accounting fees in 2025, and only $0.1 million of that was incentive fees.[5] Host reported that base fees rose $6 million and incentive fees rose $2 million within total management fees of $262 million.[1]"
    },
    {
      h2: "Is there a fee structure other than base plus incentive?",
      lead: "Yes. Apple Hospitality REIT uses a single variable fee for most of its hotels, which moves within a band according to how the hotel performs.",
      body: "Apple Hospitality says that as of December 31, 2025, approximately 81 percent of its 217 hotels operated under a variable management fee agreement with an average initial term of approximately one to two years. Under that structure the fee earned for each hotel is generally within a range of 2.5 percent to 3.5 percent of gross revenues, and the performance measures are based on financial and quality metrics. The company says it believes this aligns the manager's incentives better than a base-plus-incentive structure, which it describes as more common throughout the industry.[2]\n\nThe short term matters as much as the fee. Apple Hospitality used 16 management companies at year-end and says it moved nine hotels to different managers during 2025.[2] An owner with a one-year contract can replace an operator without paying to do it."
    },
    {
      h2: "How long do hotel management agreements last?",
      lead: "Brand-managed agreements commonly run for decades, while agreements with independent third-party managers are far shorter, sometimes month to month.",
      body: "Host says the initial term of its management and operating agreements with brand owners ranges from 10 to 50 years, with renewal terms typically exercisable at the option of the manager, and that certain agreements condition renewal on meeting economic performance criteria. It says its agreements with independent managers typically have shorter initial terms, no renewal rights and more flexible termination rights.[1]\n\nThe select-service REITs show the short end. Apple Hospitality says its management agreements generally provide for initial terms of one to 30 years.[2] Summit says the remaining terms of its agreements range from month-to-month to eight years.[6] Chatham's agreements with its manager have an initial term of five years and renew automatically for two five-year periods unless the manager gives notice.[5] Pebblebrook says remaining terms are up to eight years without renewals and up to 27 years with them.[3]"
    },
    {
      h2: "Can I terminate the management agreement when I sell the hotel?",
      lead: "Only if the contract says so, because the right to terminate on a sale is negotiated when the agreement is signed.",
      body: "Host states the default for a brand-managed hotel: it is generally limited in its ability to sell unless the buyer assumes the management agreement and meets other conditions, including that the buyer is not a competitor of the manager. Host has negotiated special termination rights at certain hotels, and it explains why: brand affiliation may increase a hotel's value, but the ability to sell a property unencumbered by a management agreement can also increase the value for prospective purchasers.[1]\n\nThe other REITs disclose what leaving costs. Pebblebrook says the majority of its agreements are terminable at will, some require a termination fee, some are terminable on a sale, and termination fees range from zero to up to three times the annual base and incentive management fees.[3] RLJ says certain agreements let it terminate on a sale or for any reason on payment of a stipulated fee, and that if a manager terminates because of an owner default it may recover 2.5 times the prior fiscal year's base and incentive fees as liquidated damages.[4] Chatham can terminate on the sale of any hotel for no fee with six months' advance notice.[5] Summit recorded a termination fee of approximately $0.9 million in 2025 for moving hotels between managers.[6]\n\nMost agreements also have a performance test. Host says its rights typically arise when the manager fails both a threshold return on the owner's investment and a RevPAR test against competing hotels over two consecutive years, and that the manager can usually cure by paying the shortfall.[1] How an encumbered hotel changes the buyer pool is covered at [What do buyers look for when buying a hotel?](/sell-a-hotel/what-buyers-look-for)."
    },
    {
      h2: "What approval rights does the owner keep?",
      lead: "The owner typically keeps approval over the annual budget, capital spending and major contracts, and sometimes over the hiring of the hotel's senior staff.",
      body: "Host says it has certain approval rights over budgets, capital expenditures, significant leases and contractual commitments. Its managers prepare an annual budget for furniture, fixtures and equipment and routine repairs, subject to Host's review and approval, and a specified percentage of gross revenues, typically 4 to 5 percent, is deposited into a reserve account in the owner's name to pay for it.[1] Pebblebrook says it keeps approval rights over capital investments as part of the annual budget process, and that under certain agreements it approves the hiring of key executive management at the hotel.[3]\n\nA franchised hotel has a third party at the table. Hilton's 2026 Hampton franchise disclosure document says the hotel must be operated by the franchisee or by a management company Hilton has approved, and that Hilton may refuse a manager it considers inexperienced or unqualified.[7] A first-time owner usually satisfies the brand by hiring an approved manager, which is covered at [How do I buy my first hotel with no hotel experience?](/buy-a-hotel/first-hotel-no-experience). Read the agreement with a hospitality attorney before you sign it. This page explains public filings and is not legal advice."
    },
    {
      h2: "Why do lenders and buyers care about my management agreement?",
      lead: "Lenders and buyers care because the management fee comes off the top of the income they are valuing, and because the contract decides whether a new owner can bring its own operator.",
      body: "The Uniform System of Accounts for the Lodging Industry puts management fees on their own schedule, base and incentive, below gross operating profit and above non-operating expenses such as property taxes and insurance.[9] A buyer or lender who sees a statement with no management fee will add one back before capitalizing the income, which is why an owner-operated hotel's broker opinion of value usually shows a lower income figure than the owner's own statement. The method is at [Walk me through the math on valuing a select-service hotel](/hotel-valuation/how-to-value-a-hotel).\n\nPublic REITs cannot avoid the fee. The tax code lets a REIT lease a hotel to its taxable subsidiary only if an eligible independent contractor operates it, so every hotel REIT pays an outside manager.[8] A private owner has the choice, but the debt market does not give credit for it. As of September 17, 2026, the 10-year Treasury is 4.94 percent and SOFR is 3.85 percent, and lenders do not publish the spreads or coverage tests they apply on top.[10] Financing starts at [How does hotel financing work, and what does it cost right now?](/hotel-financing), and a sale starts at [What is involved in selling a hotel?](/sell-a-hotel)."
    }
  ],
  table: {
    caption: "Hotel management agreement terms as six public hotel owners disclosed them in fiscal 2025 Form 10-K filings (read September 18, 2026). Fees as a share of revenue are our arithmetic.",
    columns: [
      "Owner (hotels)",
      "Base fee as disclosed",
      "Incentive fee as disclosed",
      "Term as disclosed",
      "Termination as disclosed",
      "2025 management fees, and share of total revenue"
    ],
    rows: [
      [
        "Host Hotels & Resorts (76)",
        "Generally 2% to 3% of annual gross revenues[1]",
        "Generally 10% to 20% of operating profit after the owner's priority return[1]",
        "Initial 10 to 50 years with brand managers[1]",
        "Sale generally requires the buyer to assume the agreement. Negotiated special rights at certain hotels[1]",
        "$262 million, about 4.4% of hotel revenue[1]"
      ],
      [
        "Apple Hospitality REIT (217)",
        "Variable fee generally 2.5% to 3.5% of gross revenues at about 81% of hotels[2]",
        "At the remaining hotels, a percentage of operating profit above a priority return[2]",
        "Initial one to 30 years. Variable-fee contracts average one to two years[2]",
        "Performance failure, default, on sale of the property, or without cause[2]",
        "$47.1 million, 3.3%[2]"
      ],
      [
        "Pebblebrook Hotel Trust",
        "Generally 1% to 4% of hotel revenues, or a fixed amount[3]",
        "Generally 10% to 20% of net operating income above a return hurdle. Some are capped[3]",
        "Up to eight years remaining, up to 27 with renewals[3]",
        "Majority at will. Fees from zero to three times annual base and incentive fees[3]",
        "$39.8 million, 2.7%[3]"
      ],
      [
        "RLJ Lodging Trust (93)",
        "1.5% to 3.5% of hotel revenues. 1.0% to 7.0% where the fee includes franchise benefits[4]",
        "A percentage of net operating income after a priority return[4]",
        "Not stated as a single range",
        "Performance tests. Some on sale or for any reason for a stipulated fee[4]",
        "$39.0 million, 2.9%[4]"
      ],
      [
        "Chatham Lodging Trust (33)",
        "A percentage of gross room revenue. Percentage not stated[5]",
        "10% of net operating income above a threshold, capped at 1% of gross hotel revenues[5]",
        "Five years, then two automatic five-year renewals[5]",
        "On sale with no fee and six months' notice. For cause on performance[5]",
        "$9.9 million including revenue management and accounting fees, 3.4%[5]"
      ],
      [
        "Summit Hotel Properties",
        "Generally a percentage of total revenues. Percentage not stated[6]",
        "Hotel-level EBITDA above a required investment return[6]",
        "Month-to-month to eight years remaining[6]",
        "Recorded a $0.9 million termination fee in 2025 on manager transitions[6]",
        "$15.8 million, 2.2%[6]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet records the 10-year Treasury at 4.94% and SOFR at 3.85% on September 17, 2026, and records that no lender type publishes its coverage floor, so a management fee of 2 to 4 percent of revenue is one of the few fixed numbers a lender can underwrite ahead of debt service.[10]"
  },
  workedExample: {
    label: "Hypothetical: a base fee and an incentive fee on a 150-room hotel, using percentages inside the ranges Host disclosed",
    body: "Hypothetical. The hotel, its revenue and the owner's investment are invented. The percentages are chosen from inside the ranges Host Hotels & Resorts disclosed, and a real contract will define every term differently.\n\nThe hotel: $12,000,000 of total revenue and $3,600,000 of operating profit before management fees. The owner has $30,000,000 invested.\n\nBase fee: 3 percent of gross revenues, the top of Host's disclosed 2 to 3 percent range,[1] is $360,000. It is owed whether or not the hotel makes money.\n\nOwner's priority: suppose the contract sets the owner's priority return at 10 percent of its investment, which is $3,000,000. That 10 percent is our assumption for the example. No filing on this page states the priority percentage.\n\nProfit available for the incentive fee: $3,600,000 less the $360,000 base fee is $3,240,000. Less the $3,000,000 owner's priority, $240,000 remains.\n\nIncentive fee: 15 percent, the middle of Host's disclosed 10 to 20 percent range,[1] is $36,000.\n\nTotal: $396,000, or 3.3 percent of revenue. The incentive fee is a tenth of the base fee here, which is consistent with what Chatham reported for 2025: $0.1 million of incentive fees inside $9.9 million of total fees.[5]\n\nNow put $2,000,000 into a renovation. If the contract adds owner funding to the investment base, as Host says many of its agreements do,[1] the priority rises to $3,200,000 and the incentive fee falls to $6,000 until profit grows. If the contract does not say that, the operator shares in the lift from money it did not put up."
  },
  faq: [
    {
      q: "What is a typical hotel management fee?",
      a: "There is no published industry schedule. In fiscal 2025 10-K filings, Host disclosed base fees of generally 2 to 3 percent of gross revenues, Pebblebrook 1 to 4 percent, RLJ 1.5 to 3.5 percent and Apple Hospitality 2.5 to 3.5 percent under variable-fee contracts.[1][3][4][2]"
    },
    {
      q: "What is an incentive management fee?",
      a: "A share of hotel profit paid to the operator after the owner receives a priority return. Host and Pebblebrook both describe it as generally 10 to 20 percent of profit above that hurdle.[1][3] Chatham caps its version at 1 percent of gross hotel revenues.[5]"
    },
    {
      q: "What is an owner's priority return?",
      a: "The return on the owner's investment that must be met before any incentive fee is paid. Host says added owner funding often increases the investment base, which raises the priority and reduces the profit available for incentive fees.[1]"
    },
    {
      q: "Can I fire my hotel management company?",
      a: "It depends on the contract. Pebblebrook says most of its agreements are terminable at will, with fees from zero to three times annual fees.[3] Host's brand-managed agreements typically allow termination only on a two-year performance failure that the manager can cure by paying the shortfall.[1]"
    },
    {
      q: "Does a management agreement transfer to the buyer when I sell?",
      a: "Under many brand-managed contracts, yes: Host says a sale generally requires the buyer to assume the agreement.[1] Other contracts end on a sale. Chatham's terminate with no fee on six months' notice.[5] Check the sale clause before you list."
    },
    {
      q: "How long is a hotel management contract?",
      a: "Host's brand-managed agreements start at 10 to 50 years, with renewals at the manager's option.[1] Third-party contracts are shorter: Apple Hospitality's variable-fee agreements average one to two years, and Summit's remaining terms run from month-to-month to eight years.[2][6]"
    },
    {
      q: "Is the management fee charged on rooms revenue or total revenue?",
      a: "Either. Host, Pebblebrook, RLJ and Summit describe base fees on gross or total hotel revenues.[1][3][4][6] Chatham's base fee is a percentage of gross room revenue.[5] Franchise fees, by contrast, are usually charged on rooms revenue."
    },
    {
      q: "Do I have to hire a management company for a franchised hotel?",
      a: "No, but the brand must approve whoever operates it. Hilton's 2026 Hampton disclosure says the hotel must be operated by the franchisee or an approved management company, and Hilton may refuse an operator it considers unqualified.[7]"
    }
  ],
  sources: cite("hostK", "appleK", "pebK", "rljK", "chathamK", "summitK", "hampton26", "usc856", "usaliGuide", "rates"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/owner-franchisor-management-company",
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/how-hotel-reits-work",
      "/hotel-industry/how-hotels-make-money"
    ],
    glossary: [
      "/glossary/gop",
      "/glossary/noi",
      "/glossary/ffe-reserve",
      "/glossary/franchise-agreement"
    ],
    data: [
      "/rates",
      "/tools/hotel-value-estimator",
      "/data/hotel-financing-statistics"
    ]
  },
  cta: {
    label: "Ask how your management agreement affects a sale or a loan",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances hotels, and the management agreement is one of the first documents a buyer or lender reads."
};

export default page;
