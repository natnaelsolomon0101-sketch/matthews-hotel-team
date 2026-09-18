/**
 * Should I sell my hotel off-market or run a marketed process?
 * Answer page: /sell-a-hotel/off-market-vs-marketed
 *
 * Written 2026-09-18 from geo/content-queue.md section B. Absorbs the CSV rows
 * for the confidential sale process and the best time of year to list.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "off-market-vs-marketed",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Off-Market vs Marketed Hotel Sale: Which Is Better?",
  h1: "Should I sell my hotel off-market or list it publicly?",
  description: "Off-market, confidential and public hotel sales compared: buyer pool, price tension, staff risk and timeline, plus what the brand learns either way.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Should I sell my hotel confidentially or list it publicly?",
    "What's a confidential hotel sale process and how does it work?",
    "What's the best time of year to list a hotel for sale?",
    "How do I find off-market hotel deals?",
    "Should I worry my broker won't show me every available deal?",
    "A buyer called me directly about my hotel. Should I just sell to them or put it on the market?",
    "Can I sell my hotel without my staff finding out?"
  ],
  answer: "Most owners should run a confidential marketed process: a targeted buyer list under NDA, not a public listing and not a single-buyer deal. As of September 2026, our published playbook markets that way from week 3 to week 8 of a 24-week sale.[1] Off-market skips those weeks but removes competing bids. No method hides a sale from the brand, which gets 60 days' notice under Hilton's 2025 Hampton agreement.[2]",
  takeaways: [
    "There are three methods, not two: off-market to one to three buyers, confidential marketing to an NDA-bound list, and a public listing.",
    "Off-market saves the marketing weeks, 3 through 8 in our playbook.[1] It does not shorten due diligence or the brand's 60-day review.[2]",
    "Price tension comes from competing bids on a common date. One buyer means no tension.",
    "Confidentiality has a floor. The franchisor must be told, and federal WARN rules can require employee notice at larger employers.[3]",
    "If your broker brings an off-market buyer it also represents, that is dual agency. It requires full disclosure and your informed consent.[4]"
  ],
  sections: [
    {
      h2: "What is the difference between off-market, confidential and public?",
      lead: "Off-market means a few hand-picked buyers and no process. Confidential means a full process run quietly under NDA. Public means the hotel is advertised by name.",
      body: "Owners often use \"off-market\" and \"confidential\" as if they were the same thing. They are not. An off-market sale goes to one to three buyers, often someone who called you directly, with no offering memorandum and no bid deadline. A confidential marketed sale is a full process: a package, a buyer list, NDAs before any property-level detail, tours, and a call for offers. The only thing missing is public advertising. A public listing adds the hotel's name and photos to listing sites and email blasts.\n\nOur own playbook is the middle path. In week 3 we call and email the top prospects directly \"while stressing confidentiality\", and the employee roster in the financial package goes out with names removed.[1] The steps are laid out at [How do I sell a hotel, step by step?](/sell-a-hotel/how-to-sell-a-hotel)."
    },
    {
      h2: "Which method gets the best price?",
      lead: "The method that produces competing offers on the same date, which is a marketed process, confidential or public.",
      body: "A buyer who knows it is the only bidder prices the hotel to its own return target and no higher. A buyer who knows five other groups are underwriting the same package prices it to win. That is the whole case for marketing. In our playbook, initial offers come in during weeks 4 to 8, a call for offers goes out in weeks 8 to 9, and best-and-final offers land in week 10.[1] Each step exists to make buyers compete on price, deposit and diligence terms at the same moment.\n\nWe do not publish a percentage for how much more a marketed process brings, because no public dataset measures it and any number would be invented. What an owner can check is thinner: the Matthews Hotel Index for Q1 2026 shows how few hotel trades are observed in any one market in a quarter.[5] In a thin market, one off-market offer is one data point, not a price."
    },
    {
      h2: "When does an off-market sale make sense?",
      lead: "When speed or secrecy is worth more to you than the last increment of price, and the buyer is already known and credible.",
      body: "Off-market fits a narrow set of facts. A neighboring owner or an existing partner wants the hotel and already knows the numbers. An estate or a partnership dispute needs certainty more than price. A loan matures in months and there is no time for eight weeks of marketing. In those cases, skip the marketing weeks, but keep the discipline: get a broker opinion of value first so you know what you are giving up, ask for proof of funds, and put a short exclusivity period in writing so the buyer cannot stall.\n\nIf the off-market buyer comes through a broker who also represents that buyer, read the engagement letter closely. Under the REALTOR Code of Ethics, a broker may represent both sides only after full disclosure and with the informed consent of both parties, and a listing broker must keep submitting all offers to the seller until closing unless the seller waives that in writing.[4] See [How do I choose a hotel broker?](/sell-a-hotel/how-to-choose-a-hotel-broker)."
    },
    {
      h2: "Who finds out that my hotel is for sale?",
      lead: "In a confidential process: the buyers who sign an NDA, the brand, your lender at payoff, and your staff near the end. Not the public.",
      body: "Three groups learn about the sale under any method. First, the franchisor. Hilton's 2025 Hampton agreement requires 60 days' written notice of a change of ownership, gives the brand 60 days from a completed application to consent, and lets the brand talk to any third party it considers necessary to evaluate the transfer.[2] Second, employees. In our playbook, buyers are introduced to employees in weeks 22 to 24, at the end of the closing period.[1] Federal WARN rules cover employers with 100 or more employees and make the seller responsible for any required notice of a plant closing or mass layoff up to the date of sale.[3] An employer below that count is outside the federal rule, but state laws differ, so check with employment counsel. Third, vendors and the lender, who learn at payoff and contract assignment.\n\nGuests and competitors do not need to know, and in a confidential process they generally do not."
    },
    {
      h2: "Does going off-market make the sale faster?",
      lead: "It removes the marketing weeks. It does not move the back half, which is set by due diligence and the brand.",
      body: "Our playbook spends weeks 1 to 2 on the package, weeks 3 to 8 on marketing, weeks 8 to 12 on offers and contract, and weeks 12 to 24 on due diligence and closing.[1] An off-market sale can skip most of weeks 3 to 10. The buyer still needs to audit the financials, order a property condition report and a survey, arrange a loan, and get franchise approval, and the brand still has its 60 days.[2] The full stage-by-stage timing is at [How long does it take to sell a hotel?](/sell-a-hotel/how-long-it-takes)."
    },
    {
      h2: "Is there a best time of year to list a hotel?",
      lead: "Less than owners expect. Buyers underwrite a trailing twelve months, so the calendar month matters less than what the last twelve months show.",
      body: "A hotel is priced on its trailing twelve-month net operating income, which already contains every season. The better timing question is when your trailing twelve months will look strongest and cleanest: after a renovation has had a full year to show up in the numbers, after a one-time expense rolls off, or before a known PIP deadline rather than after it. Then count backward. With about 24 weeks from engagement to close in our playbook,[1] an owner who wants to close by year end should engage a broker by early summer."
    }
  ],
  table: {
    caption: "Three ways to sell a hotel, compared",
    columns: [
      "",
      "Off-market",
      "Confidential marketed",
      "Public listing"
    ],
    rows: [
      [
        "Buyer pool",
        "One to three known buyers",
        "Targeted list under NDA",
        "Anyone who sees the listing"
      ],
      [
        "Price tension",
        "None unless a second buyer appears",
        "Call for offers, then best and final[1]",
        "Call for offers, then best and final[1]"
      ],
      [
        "Staff and guest exposure",
        "Lowest",
        "Low: names withheld, staff told near closing[1]",
        "Highest: the hotel is advertised by name"
      ],
      [
        "Marketing time",
        "Skipped",
        "Weeks 3 to 8 in our playbook[1]",
        "Weeks 3 to 8 in our playbook[1]"
      ],
      [
        "Due diligence and brand approval",
        "Unchanged: brand has 60 days[2]",
        "Unchanged: brand has 60 days[2]",
        "Unchanged: brand has 60 days[2]"
      ],
      [
        "Best fit",
        "Known buyer, deadline, estate or dispute",
        "Most branded select-service hotels",
        "Assets where reach matters more than discretion"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 reports observed transaction counts and cap-rate bands by market, which is the context for judging whether a single off-market offer is a fair price.[5]"
  },
  workedExample: {
    label: "Hypothetical: what skipping the market has to be worth",
    body: "Hypothetical. A buyer calls the owner of an 88-key select-service hotel and offers $10.0 million, all cash, 45-day close, no broker. The owner's broker opinion of value says a marketed process should land between $10.4 million and $11.0 million. The marketed path costs time: about 24 weeks in our playbook instead of roughly 8, so 16 more weeks of ownership.[1] It also costs a fee. Assume, for this example only, a 2.5 percent fee. At the low end, $10.4 million less a $260,000 fee is $10.14 million, which is $140,000 better than the direct offer. At the high end, $11.0 million less $275,000 is $10.725 million, which is $725,000 better. So the question is whether 16 weeks of certainty is worth $140,000 to $725,000 to this owner. For an owner with a loan maturing in 90 days, it might be. For an owner with no deadline, it usually is not. The useful move is often a third one: tell the direct buyer a process is starting and invite them to bid in it."
  },
  faq: [
    {
      q: "Should I sell my hotel confidentially or list it publicly?",
      a: "Most owners do best with a confidential marketed process: a targeted buyer list under NDA and a call for offers. It keeps competitive bidding while keeping the hotel's name off public listing sites. Our playbook markets this way in weeks 3 to 8.[1]"
    },
    {
      q: "Someone called and wants to buy my hotel directly. Should I just sell to them?",
      a: "Get a broker opinion of value first so you know what the offer leaves on the table. Then either negotiate with proof of funds and a short exclusivity period, or invite that buyer to bid inside a marketed process."
    },
    {
      q: "Can I sell my hotel without my employees finding out?",
      a: "Until late in the process, usually yes. In our playbook buyers meet employees in weeks 22 to 24.[1] Federal WARN notice rules can apply to employers with 100 or more employees, so confirm notice duties with employment counsel.[3]"
    },
    {
      q: "Will Hilton, Marriott or IHG find out I am selling?",
      a: "Yes. A branded hotel cannot change hands without the franchisor. Hilton's 2025 Hampton agreement requires 60 days' written notice and gives the brand 60 days from a completed application to consent.[2] Your own agreement controls."
    },
    {
      q: "Do off-market hotel deals sell for less?",
      a: "No public dataset measures it, so we will not print a percentage. The mechanism is simple: one buyer has no one to outbid. A marketed process puts several offers side by side on one date."
    },
    {
      q: "Is an off-market hotel sale faster?",
      a: "It skips the marketing weeks, 3 through 8 in our playbook.[1] Due diligence, the buyer's loan and franchise approval take the same time either way."
    },
    {
      q: "What is the best month to list a hotel for sale?",
      a: "There is no reliable best month. Buyers price a trailing twelve months, which includes every season. List when your trailing numbers are strongest, and count back about 24 weeks from when you want to close.[1]"
    },
    {
      q: "My broker says they already have a buyer. Is that a problem?",
      a: "Not by itself, but ask who the broker represents. Under the REALTOR Code of Ethics, representing both seller and buyer requires full disclosure and informed consent from both.[4]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Item 17 and Franchise Agreement section 12.2.2 (change of ownership transfers)",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "20 CFR 639.3 (WARN Act employer definition) and 20 CFR 639.4(c) (sale of a business)",
      url: "https://www.law.cornell.edu/cfr/text/20/639.4",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "2026 Code of Ethics and Standards of Practice (Standards of Practice 1-5 and 1-7)",
      url: "https://www.nar.realtor/sites/default/files/2025-12/2026-COE-Standards-of-Practice-2026-01-01.pdf",
      publisher: "National Association of REALTORS",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/how-to-choose-a-hotel-broker",
      "/sell-a-hotel/broker-fees",
      "/sell-a-hotel/faq"
    ],
    glossary: [
      "/glossary/bov",
      "/glossary/iom",
      "/glossary/pip"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Talk through a confidential process",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets runs confidential marketed processes on its published 24-week playbook."
};

export default page;
