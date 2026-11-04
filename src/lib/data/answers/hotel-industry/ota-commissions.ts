/**
 * What do online travel agencies cost my hotel?
 * Answer page: /hotel-industry/ota-commissions
 *
 * Every figure on this page is recomputed by scripts/check-ota-math.mjs.
 * Sources read 2026-11-04: the full-year 2025 Form 10-K filings of Booking
 * Holdings, Expedia Group, Hilton Worldwide and Choice Hotels, all on EDGAR;
 * the 2026 US Hilton Garden Inn Franchise Disclosure Document (issuance date
 * March 30, 2026), Item 6; and the Matthews Hotel Index, Q1 2026.
 *
 * Deliberately absent: a commission rate for any one hotel. No platform, brand
 * or filing publishes one, which is the same reason this site never prints a
 * lender's DSCR floor. Do not hand-edit prose here without re-reading the
 * source and bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "ota-commissions",
  cluster: "hotel-industry",
  isHub: false,
  title: "What Do OTAs Cost a Hotel?",
  description:
    "What hotels pay online travel agencies, what the 2025 10-K filings do and do not disclose, and what a five-point channel shift does to value.",
  h1: "What do online travel agencies cost my hotel?",
  lastUpdated: "2026-11-04",
  authorSlug: "nate-solomon",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "How much commission do hotels pay Expedia and Booking.com?",
    "What percentage does an OTA take from a hotel?",
    "What do online travel agencies cost a hotel owner?",
    "Is it cheaper to book direct or through an OTA for a hotel?",
    "Do OTA bookings lower my hotel's ADR and RevPAR?",
    "What fees does my hotel brand charge on an OTA booking?",
    "How does channel mix affect what my hotel is worth?"
  ],
  answer:
    "No hotel's commission rate is published. What is published is the aggregate. Booking Holdings' revenues equalled 14.5 percent of its $186.1 billion of 2025 gross bookings, and Expedia Group's equalled 12.3 percent of $119.6 billion, both filed in February 2026.[1][2] Those blends include air and cars, so read them as a bound on lodging, not as a quote.",
  takeaways: [
    "The rate any one hotel pays is set in a contract between the platform and the hotel or its brand. None of the four 2025 filings read for this page states it.[1][2][3][4]",
    "Booking Holdings prints the ratio itself: revenues were 14.5 percent of total gross bookings in 2025, against 14.3 percent in 2024.[1] Expedia Group calls the same measure revenue margin and reported 12.3 percent for 2025, 2024 and 2023.[2]",
    "Those percentages are whole-business figures. Expedia's lodging revenue was $11,752 million of $14,733 million total, and the majority of its agency gross bookings are air, where the retained share is far smaller.[2]",
    "Under the merchant model the platform collects from the guest and remits a net amount, so channel cost can vanish from the income statement and reappear as a lower ADR.[1][2] Ask which model each contract uses.",
    "Hilton and Choice both state that their master agreements hold the transaction fee down for their hotels, and Choice warns franchisees about signing with platforms it has no preferred agreement with.[3][4]"
  ],
  sections: [
    {
      h2: "What does an online travel agency actually charge a hotel?",
      lead:
        "Nobody publishes that number: it is set in a contract between the platform and the hotel or its brand, and none of the public filings states it.",
      body:
        "There are two structures, and both companies describe them in their own filings.\n\nUnder the merchant model, the platform is the merchant of record. Expedia Group says it provides travelers access to book hotel rooms through its contracts with lodging suppliers, which give it rates and availability but no control over the rooms and no inventory risk, and that travelers pay Expedia for merchant hotel transactions when they book. The majority of its merchant transactions are lodging.[2] Booking Holdings defines its merchant revenues as including travel reservation commissions and transaction net revenues, which it defines as the amount charged to travelers less the amount owed to the travel service provider, and says the majority of its merchant revenue comes from Booking.com accommodation reservations.[1]\n\nUnder the agency model, the platform passes the reservation through and bills a commission. Expedia says it acts as the agent and receives commissions, and that the majority of its agency gross bookings are air.[2] Booking says its agency revenues consist almost entirely of travel reservation commissions from Booking.com accommodation reservations.[1]\n\nThe difference decides where the cost shows up for you. In an agency booking the hotel collects the full rate from the guest and is invoiced later, so the commission is a visible expense line. In a merchant booking the platform collects from the guest and sends the hotel a net amount, so there may be no commission line at all. The money has still gone; it left as a discount off the rate instead of as a cost.\n\nThis page prints no commission percentage for a hotel, for the same reason the site never prints a lender's DSCR floor: the number exists and no public source publishes it. Ask for the agreement and read its rate schedule."
    },
    {
      h2: "What do the 2025 filings actually show?",
      lead:
        "Both platforms publish revenues as a percentage of gross bookings, 14.5 percent at Booking Holdings and 12.3 percent at Expedia Group for full-year 2025.",
      body:
        "Booking Holdings reported total gross bookings of $186,107 million and total revenues of $26,917 million for 2025, and states the ratio directly: revenues were 14.5 percent of total gross bookings, against 14.3 percent in 2024. Merchant gross bookings were $130,025 million and agency gross bookings $56,082 million, and the merchant share of total gross bookings was 70 percent in 2025, up from 63 percent in 2024, which it attributes to an ongoing shift from agency to merchant bookings at Booking.com.[1]\n\nExpedia Group reported total gross bookings of $119,590 million and total revenue of $14,733 million, a total revenue margin of 12.3 percent, the same figure it reported for 2024 and 2023. Its business-to-consumer margin was 11.3 percent and its business-to-business margin 13.6 percent. It defines revenue margin as revenue as a percentage of gross bookings, and gross bookings as the total retail value of transactions booked, recorded at booking, including taxes, fees and other charges, reduced for cancellations and refunds.[2]\n\nLodging is most of what Expedia sells: lodging revenue was $11,752 million of the $14,733 million total, with air at $407 million.[2]\n\nScale, for context on who is across the table. At December 31, 2025 Booking.com listed approximately 500,000 hotels, motels and resorts beside approximately 3.9 million homes and apartments, and alternative accommodation took approximately 36 percent of its room nights in 2025, up from approximately 35 percent.[1]"
    },
    {
      h2: "Why is that percentage not my commission rate?",
      lead:
        "Because it blends products a hotel does not sell, and a denominator the hotel never keeps.",
      body:
        "Three things sit inside the published ratio that have nothing to do with a room.\n\nFirst, other products. Expedia's gross bookings cover air, car rental, insurance, activities and cruise, and the majority of its agency gross bookings are air, where the retained share is far smaller: air revenue was $407 million for the year against lodging's $11,752 million.[2] Booking's figure includes flights and rental cars, plus advertising and other revenues of $1,194 million earned by KAYAK and OpenTable, which no hotel pays a commission on.[1]\n\nSecond, revenue that is not a supplier's commission at all. Booking says its merchant revenues also include revenues from facilitating payments, such as credit card processing rebates and customer processing fees, and ancillary fees including travel-related insurance.[1] Some of that is charged to the traveler, not given up by the hotel.\n\nThird, the denominator. Expedia's gross bookings are the total retail value including taxes, fees and other charges.[2] A hotel never keeps the occupancy tax, so a ratio struck on a tax-inclusive base understates the share of the hotel's own revenue.\n\nWhat the figures are good for is magnitude and direction: roughly an eighth of the retail value of a booking stays with the platform across its whole book, stable for three years at Expedia and up slightly at Booking.[1][2] They do not say what your hotel pays."
    },
    {
      h2: "Does an OTA booking change my reported ADR and RevPAR?",
      lead:
        "It can, with no change in the cash, and that matters because the quickest valuation checks on a hotel all start from RevPAR.",
      body:
        "Under the merchant model the platform is the merchant of record and the traveler pays it at the time of booking.[2] The hotel receives a net amount afterwards. Whether the hotel's books record the gross rate the guest paid and a separate commission expense, or record only the net amount received, changes reported average daily rate, and therefore reported RevPAR, while the bank balance ends up identical.\n\nNo public source prescribes one treatment. It follows from the contract and from how the books are set up, which is why it is a diligence question and not an assumption. Two hotels with the same cash and the same guests can publish different RevPAR because one nets its merchant bookings and the other grosses them.\n\nSo a per-key figure or a RevPAR multiple is only as good as the channel disclosure behind it. Both are sanity checks rather than valuation methods anyway, the argument at [what is my hotel worth per key?](/hotel-valuation/revpar-multiples-and-per-key). The measures are defined at [what are RevPAR, ADR and occupancy?](/hotel-industry/revpar-adr-occupancy) and at [RevPAR](/glossary/revpar).\n\nWhen you are reading someone else's operating statement, ask for the channel mix and the merchant-versus-agency split alongside it. A hotel that nets its merchant business looks worse on rate and no different on profit."
    },
    {
      h2: "What does the brand charge me on top of the platform's cut?",
      lead:
        "A per-stay administration fee, and the franchise disclosure document is explicit that the commission is extra.",
      body:
        "The 2026 US Hilton Garden Inn Franchise Disclosure Document, issuance date March 30, 2026, lists Centralized Payment Programs in its Item 6 fee table. Third-Party Reservation Charges are currently up to $6.05 per stay. The document describes these as required programs that centralize and automate payments to third parties including online travel agencies, group and meeting planners and travel planners, and says the charges currently include the costs and fees incurred in connection with third-party reservation systems such as global distribution systems, business transient platforms, airline reservation services and internet and other service reservation providers for using their distribution systems. Certain third-party reservation services may not be subject to it.[5]\n\nTwo other lines in the same table are quoted as a charge plus a commission, which is the clearest statement that the administration fee and the commission are different things: the FastPay program at currently up to $1.40 per transaction plus commission, and the Travel Planner Centralized Payment Program at currently $0.19 per transaction processing charge plus up to a 10 percent commission.[5]\n\nThe loyalty and direct-channel lines are separate again. Hilton Honors is currently 3.3 percent of the total eligible guest folio, waived where the guest enrols on property, and the Hilton Advance Fee is currently 1.35 percent of eligible Digital Direct Revenue, capped at $30 per stay.[5]\n\nSo the franchisor publishes what it charges to move the money and does not publish the commission itself, because the commission is not the franchisor's to set. Full brand fee schedules are at [how much does a hotel franchise cost?](/hotel-franchise-costs), and this brand's at [how much does a Hilton Garden Inn franchise cost in 2026?](/hotel-franchise-costs/hilton-garden-inn)."
    },
    {
      h2: "Is the brand's agreement cheaper than contracting with a platform myself?",
      lead:
        "Hilton and Choice both say in their 2025 filings that their master agreements hold the transaction fee down, and Choice warns franchisees about signing outside them.",
      body:
        "Hilton states that a significant percentage of hotel rooms for individual guests are booked through internet travel intermediaries, to whom it commits to pay various commissions and transaction fees for sales of its rooms through their systems, and that its contracts with many hospitality intermediaries limit transaction fees for hotels, with no assurance it will be able to renegotiate those contracts on terms as favourable when they expire.[3]\n\nChoice says it selectively distributes franchisee inventory to key third-party travel intermediaries it has established agreements with, that those agreements typically offer its brands preferred placement on the booking sites at reduced transaction fees, and that it continues to educate individual franchisees about the risk of an unfavourable impact on their business from contracting with booking sites where Choice does not have a preferred agreement. It also says it has agreements with many, but not all, of the major online third-party booking sites.[4]\n\nBoth describe the same bargaining risk from the other direction. Choice says a significant, and increasing, percentage of hotel rooms are booked through internet travel intermediaries, and that intermediaries which keep growing their share of bookings may be able to obtain higher commissions, reduced room rates or other significant contractual and operational concessions from its franchisees or from Choice itself.[4] Hilton adds that intermediaries may reduce bookings at its hotels by de-ranking them in search results on their platforms.[3]\n\nThe question to put to your franchisor in writing, before signing anything, is which platforms its agreements cover and what the fee is under them. An independent has no such agreement behind it, one of the costs weighed at [should I buy a branded or independent hotel?](/buy-a-hotel/branded-vs-independent)."
    },
    {
      h2: "What is a point of channel shift worth?",
      lead:
        "On the hypothetical below, moving five points of room nights from a platform to direct channels is worth about $455,000 of value at an 8.0 percent cap rate.",
      body:
        "Channel cost is an operating cost, so it lands in net operating income, and net operating income divided by a cap rate is value. That chain is why distribution is a valuation question and not only a marketing one. The arithmetic is below.\n\nThree caveats travel with it, and the first is the big one. It holds average daily rate constant on a shifted night, which assumes the guest would have come anyway. Often they would not: the platform found them. Second, it assumes the saving falls to net operating income rather than to the marketing that produced the shift. Third, it uses a published whole-business ratio in place of a commission rate nobody publishes, so the answer scales with an input that is a bound, not a quote.\n\nDirect business is not free either. The same Hilton Garden Inn disclosure document charges 1.35 percent of eligible Digital Direct Revenue as the Hilton Advance Fee, capped at $30 per stay.[5] Any honest comparison nets that off.\n\nThe method behind the value step is at [what is my hotel worth, and who decides?](/hotel-valuation/how-to-value-a-hotel), with the inputs defined at [NOI](/glossary/noi) and [cap rate](/glossary/cap-rate). Where channel cost sits among a hotel's other expense lines is at [what does it cost to operate a hotel?](/hotel-industry/hotel-operating-costs)."
    }
  ],
  table: {
    caption: "What the two largest platforms disclosed for full-year 2025",
    columns: ["Measure", "Booking Holdings", "Expedia Group"],
    rows: [
      ["Total gross bookings", "$186,107 million[1]", "$119,590 million[2]"],
      ["Total revenues", "$26,917 million[1]", "$14,733 million[2]"],
      [
        "Revenues as a percent of gross bookings",
        "14.5%, the company's own figure[1]",
        "12.3%, which it calls revenue margin[2]"
      ],
      ["The same measure a year earlier", "14.3%[1]", "12.3%[2]"],
      [
        "Merchant share of gross bookings",
        "70%, up from 63% in 2024[1]",
        "Not disclosed on that basis; merchant revenue was $10,256 million of $14,733 million[2]"
      ],
      [
        "Lodging inside that revenue",
        "Majority of merchant revenue is Booking.com accommodation; agency revenue is almost entirely accommodation commission[1]",
        "Lodging revenue $11,752 million; air $407 million[2]"
      ],
      [
        "Commission rate for one hotel",
        "Not disclosed[1]",
        "Not disclosed[2]"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence:
      "Matthews Hotel Markets puts stabilized, PIP-current select-service cap rates at 7.5% to 8.25% in Austin for the first quarter of 2026, and the worked example below takes 8.0% from inside that band to turn a channel-cost saving into a value.[6]"
  },
  workedExample: {
    label: "Hypothetical: 120-key select-service hotel, five points of channel shift",
    body:
      "Hypothetical, and every input is stated rather than observed.\n\nThe hotel. 120 keys, 70 percent occupancy, $150 average daily rate. Room nights sold are 120 x 365 x 0.70 = 30,660. Room revenue is 30,660 x $150 = $4,599,000.\n\nThe channel. Say a quarter of those room nights arrive through a platform: 30,660 x 0.25 = 7,665 nights, carrying 7,665 x $150 = $1,149,750 of room revenue. At an average length of stay of 1.5 nights that is 7,665 / 1.5 = 5,110 stays.\n\nThe cost. This example uses 14.5 percent, which is Booking Holdings' 2025 revenues as a percentage of gross bookings, because it is published.[1] It is not a quote for any hotel. Commission is $1,149,750 x 0.145 = $166,713.75. The brand's Third-Party Reservation Charges at up to $6.05 per stay add 5,110 x $6.05 = $30,915.50.[5] Total channel cost is $197,629.25, which is 4.30 percent of room revenue.\n\nThe shift. Move five points of room nights to direct: 30,660 x 0.05 = 1,533 nights, 1,533 / 1.5 = 1,022 stays, carrying 1,533 x $150 = $229,950 of room revenue at the same rate. Commission saved is $229,950 x 0.145 = $33,342.75. Reservation charges saved are 1,022 x $6.05 = $6,183.10. Against that, the Hilton Advance Fee of 1.35 percent of eligible Digital Direct Revenue costs $229,950 x 0.0135 = $3,104.33, well under its $30-per-stay cap of 1,022 x $30 = $30,660.[5]\n\nNet saving to net operating income: $33,342.75 + $6,183.10 - $3,104.33 = $36,421.52.\n\nThe value. At the 8.0 percent cap rate taken from the Austin band above, $36,421.52 / 0.08 = $455,269, or $455,269 / 120 = $3,793.91 a key.[6]\n\nWhat would break it. If the shifted nights do not all sell direct and occupancy falls by even one point, 30,660 / 0.70 x 0.01 = 438 room nights at $150 is $65,700 of lost room revenue, which is more than the whole saving. The commission is the smaller risk; the empty room is the larger one."
  },
  faq: [
    {
      q: "How much commission does an OTA charge a hotel?",
      a: "No platform publishes a per-hotel rate, and none of the 2025 filings states one. The published aggregate is revenues as a percentage of gross bookings: 14.5 percent at Booking Holdings and 12.3 percent at Expedia Group for 2025.[1][2]"
    },
    {
      q: "Is the published take rate the same as my commission?",
      a: "No. It blends air, cars, insurance and advertising, and its denominator includes taxes the hotel never keeps.[1][2] Expedia's air revenue was $407 million against $11,752 million of lodging, so the mix matters.[2]"
    },
    {
      q: "What is the difference between the merchant and agency models?",
      a: "Under the merchant model the platform collects from the guest and remits a net amount. Under the agency model the hotel collects and is billed a commission later.[1][2] Only the second shows as an expense line."
    },
    {
      q: "Do OTA bookings reduce my ADR?",
      a: "They can reduce reported ADR without changing cash, if merchant bookings are recorded net rather than gross. No public source prescribes a treatment, so confirm it in diligence against the contract and the books."
    },
    {
      q: "Does my franchisor charge me extra on an OTA booking?",
      a: "Hilton Garden Inn's 2026 disclosure document sets Third-Party Reservation Charges at currently up to $6.05 per stay, described as centralizing payments to third parties including online travel agencies.[5] The commission is separate."
    },
    {
      q: "Is it cheaper to use my brand's OTA agreement or sign my own?",
      a: "Hilton says its contracts with many intermediaries limit transaction fees for its hotels, and Choice says its agreements bring preferred placement at reduced transaction fees and warns franchisees about signing outside them.[3][4] Ask your franchisor which platforms are covered."
    },
    {
      q: "How much is channel mix worth to my hotel's value?",
      a: "It flows through net operating income. On the hypothetical above, five points of shift on a 120-key hotel saves $36,421.52 a year, worth $455,269 at an 8.0 percent cap rate, or $3,793.91 a key.[6]"
    },
    {
      q: "Should I just cut the OTAs off?",
      a: "That trade is usually lost on occupancy, not won on commission. In the example above, losing one point of occupancy costs $65,700 of room revenue, more than the entire $36,421.52 saving."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "Booking Holdings Inc., Annual Report on Form 10-K for the year ended December 31, 2025: total gross bookings $186,107 million and merchant/agency split; total revenues $26,917 million with revenues at 14.5% of total gross bookings (14.3% in 2024); merchant share of gross bookings 70% against 63%; the merchant and agency revenue definitions; advertising and other revenues $1,194 million; approximately 500,000 hotels, motels and resorts and 3.9 million alternative accommodation properties, with alternative accommodation at approximately 36% of 2025 room nights",
      url: "https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm",
      publisher: "Booking Holdings Inc., via SEC EDGAR",
      accessed: "2026-11-04"
    },
    {
      n: 2,
      label:
        "Expedia Group, Inc., Annual Report on Form 10-K for the year ended December 31, 2025: total gross bookings $119,590 million; total revenue $14,733 million; total revenue margin 12.3% with B2C at 11.3% and B2B at 13.6%; the gross bookings and revenue margin definitions; revenue by service type, lodging $11,752 million and air $407 million; revenue by business model, merchant $10,256 million; the merchant and agency model descriptions",
      url: "https://www.sec.gov/Archives/edgar/data/1324424/000132442426000008/expe-20251231.htm",
      publisher: "Expedia Group, Inc., via SEC EDGAR",
      accessed: "2026-11-04"
    },
    {
      n: 3,
      label:
        "Hilton Worldwide Holdings Inc., Annual Report on Form 10-K for the year ended December 31, 2025, Item 1A Risk Factors: a significant percentage of rooms for individual guests are booked through internet travel intermediaries to whom Hilton commits to pay commissions and transaction fees; contracts with many hospitality intermediaries limit transaction fees for hotels, with no assurance of renegotiation on equally favourable terms; de-ranking in intermediary search results",
      url: "https://www.sec.gov/Archives/edgar/data/1585689/000158568926000007/hlt-20251231.htm",
      publisher: "Hilton Worldwide Holdings Inc., via SEC EDGAR",
      accessed: "2026-11-04"
    },
    {
      n: 4,
      label:
        "Choice Hotels International, Inc., Annual Report on Form 10-K for the year ended December 31, 2025: the central reservation system description naming online travel agents; selective distribution to key third-party travel intermediaries under agreements that typically offer preferred placement at reduced transaction fees; educating franchisees on the risk of contracting with booking sites where Choice has no preferred agreement; agreements with many but not all major online booking sites; and the risk factor that a significant, and increasing, percentage of hotel rooms are booked through intermediaries which may obtain higher commissions or reduced room rates",
      url: "https://www.sec.gov/Archives/edgar/data/1046311/000104631126000008/chh-20251231.htm",
      publisher: "Choice Hotels International, Inc., via SEC EDGAR",
      accessed: "2026-11-04"
    },
    {
      n: 5,
      label:
        "2026 US Hilton Garden Inn Franchise Disclosure Document, issuance date March 30, 2026, Item 6 fee table, Centralized Payment Programs (p. 26): Third-Party Reservation Charges currently up to $6.05 per stay, covering payments to third parties including online travel agencies and the costs of third-party reservation systems; FastPay currently up to $1.40 per transaction plus commission; Travel Planner Centralized Payment Program currently $0.19 per transaction plus up to a 10% commission; Hilton Honors currently 3.3% of the total eligible guest folio; Hilton Advance Fee currently 1.35% of eligible Digital Direct Revenue, not to exceed $30 per stay",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-HGI.pdf",
      publisher: "Hilton Worldwide Holdings Inc.",
      accessed: "2026-11-04"
    },
    {
      n: 6,
      label:
        "Matthews Hotel Index, Q1 2026: stabilized, PIP-current select-service cap rates of 7.5% to 8.25% in Austin",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-11-04"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/revpar-adr-occupancy",
      "/hotel-industry/resort-fees",
      "/hotel-industry/owner-franchisor-management-company",
      "/hotel-industry/hotel-management-agreements"
    ],
    glossary: ["/glossary/revpar", "/glossary/adr", "/glossary/noi", "/glossary/cap-rate"],
    data: ["/research/mhi/q1-2026", "/rates"]
  },
  cta: {
    label: "Talk to the hospitality team about a valuation or a sale",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets reads the channel mix in the operating statements before it prices a hotel, and gives a free broker opinion of value on hotels from $2 million. We do not run hotels, set rates or advise on distribution."
};

export default page;
