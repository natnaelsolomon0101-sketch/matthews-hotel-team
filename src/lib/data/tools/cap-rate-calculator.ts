/**
 * Hotel cap rate calculator: /tools/cap-rate-calculator
 *
 * Spec: geo/05-briefs/_wave2-stubs.md, section D. NOI and a price give the cap
 * rate and price per key; NOI and a cap rate give value and value per key.
 *
 * The page prints no cap rate benchmark. The cap rate is a user input and the
 * default is a labeled hypothetical. The only benchmark on the page is the
 * 10-year Treasury from the current /rates edition, read from the rate sheet
 * at build time, with its date. Default NOI, key count and cap rate match the
 * hypothetical 78-key hotel on /hotel-financing/refinance-or-sell and
 * /tools/refinance-vs-sell, so all three agree on value.
 */
import type { ToolPage } from "../answers/types";
import { computeCapRate, pct, usd, type CapRateInput } from "./math";
import { EDITION_LABEL, benchmarkOn } from "./rates-line";

export const DEFAULTS: CapRateInput = {
  noi: 1050000,
  price: 12000000,
  keys: 78,
  capRate: 8.25,
};

const CAP_STEPS = [7.5, 8, 8.25, 8.5, 9];
const tableRows = CAP_STEPS.map((capRate) => {
  const r = computeCapRate({ ...DEFAULTS, capRate });
  return [pct(capRate), usd(r.value), usd(r.valuePerKey)];
});

export const page: ToolPage = {
  slug: "cap-rate-calculator",
  cluster: "tools",
  title: "Hotel Cap Rate Calculator",
  h1: "Hotel cap rate calculator: cap rate, value and price per key",
  description:
    "Turn hotel NOI and a price into a cap rate and price per key, or turn NOI and a cap rate into value. Formula and worked example shown.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I calculate the cap rate on a hotel?",
    "What is my hotel worth?",
    "How do I value a hotel from its NOI?",
    "What is price per key and how is it calculated?",
    "Someone offered me a price for my hotel. What cap rate is that?",
  ],
  answer: `Cap rate is net operating income divided by price. Value is NOI divided by a cap rate. Price per key is price divided by room count. A hotel with $1,050,000 of NOI offered at $12,000,000 is an 8.75% cap rate, and at 78 keys that is $153,846 per key. Matthews Hotel Markets' ${EDITION_LABEL} rate sheet shows the 10-year Treasury at ${benchmarkOn("ust10")}.[1][2]`,
  takeaways: [
    "Cap rate = NOI / price. Value = NOI / cap rate. Price per key = price / keys.",
    "A lower cap rate means a higher price for the same NOI. Half a point is a large move.",
    "The cap rate is set by what buyers pay, not by what an owner types. The default in the field below is hypothetical.",
    "Use NOI after a management fee and an FF&E reserve, because that is the NOI a buyer will underwrite.",
    "Price per key is a cross-check on the cap rate result, not a second valuation.",
  ],
  sections: [
    {
      h2: "How the math works",
      lead: "One division in each direction: NOI over price gives the cap rate, and NOI over a cap rate gives the value.",
      body: "Net operating income (`/glossary/noi`) is the hotel's income after operating expenses and before debt service. Divide it by a price and you have the capitalization rate, the unlevered yield a buyer earns at that price in year one. The full definition is on `/glossary/cap-rate`.\n\nRun it the other way to get value. Divide NOI by the cap rate buyers are paying for comparable hotels, as a decimal, and the result is what that income is worth at that yield. Then divide the price or the value by the number of keys to get the per-key figure, which lets you compare hotels of different sizes.\n\nThe two directions answer two different questions. If you have an offer in hand, the first tells you what yield the buyer is asking for. If you have no offer, the second tells you what a given yield implies for price.",
    },
    {
      h2: "Which cap rate should I enter?",
      lead: "One drawn from recent sales of comparable hotels in your market, because a cap rate is an output of what buyers paid and not a number an owner gets to pick.",
      body: "This page does not print a cap rate for your hotel, and the default in the calculator is a hypothetical placeholder. The right rate depends on segment, brand, market, the age of the asset and what PIP is coming. How those move the number, and the bands our own index reports, are covered on `/hotel-valuation/hotel-cap-rates`. A broker opinion of value, covered on `/hotel-valuation/broker-opinion-of-value`, is how an owner gets a rate tied to real comparable sales.\n\nA cap rate is a yield, so buyers weigh it against other yields, starting with Treasuries and the cost of their debt. " +
        `The 10-year Treasury was ${benchmarkOn("ust10")}.[2]` +
        " We do not publish a spread between that index and hotel cap rates, because the spread differs by asset and we will not print a number we cannot source.",
    },
    {
      h2: "What goes wrong with cap rate math on hotels?",
      lead: "The usual error is the NOI, not the division.",
      body: "A hotel is an operating business, so its NOI depends on what was counted as an expense. Buyers underwrite a management fee and an FF&E reserve whether or not the current owner pays either. An owner-operator's statement that leaves both out shows a higher NOI than any buyer will use, and the value that comes out of this calculator will be too high by the same proportion.\n\nTiming is the second error. A trailing twelve-month NOI and a forward budget are different numbers, and the cap rate quoted on a sale usually refers to one of them specifically. Match the NOI period to the cap rate you are comparing against.\n\nThe third is a PIP. A brand-required renovation is cash the buyer has to spend after closing, so buyers take it off the price. The cap rate on the contract price then looks higher than the cap rate the buyer is really paying all in. The longer treatment is on `/hotel-valuation/how-to-value-a-hotel`.",
    },
  ],
  table: {
    caption:
      "Hypothetical 78-key hotel with $1,050,000 of NOI: value and value per key at five hypothetical cap rates",
    columns: [
      "Cap rate you enter (hypothetical)",
      "Value (NOI / cap rate)",
      "Value per key (78 keys)",
    ],
    rows: tableRows,
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: `Matthews Hotel Markets' ${EDITION_LABEL} rate sheet publishes the yield buyers measure a cap rate against first: the 10-year Treasury at ${benchmarkOn("ust10")}.[2] The sheet prints public benchmarks and marks what it cannot source not yet published, and it prints no hotel cap rate.[1]`,
  },
  workedExample: {
    label:
      "Pre-computed worked example (server-rendered): hypothetical 78-key select-service hotel",
    body: "Hypothetical, using the calculator's own default inputs so the example and the live tool agree. The $12,000,000 price and the 8.25 percent cap rate are this hypothetical's assumptions, not market figures.\n\nInputs: NOI $1,050,000. Offered price $12,000,000. 78 keys. Cap rate to test: 8.25 percent.\n\nFrom the price. Cap rate = $1,050,000 / $12,000,000 = 8.75%. Price per key = $12,000,000 / 78 = $153,846.\n\nFrom the cap rate. Value = $1,050,000 / 0.0825 = $12,727,273. Value per key = $12,727,273 / 78 = $163,170.\n\nRead together: if comparable hotels really are trading at 8.25 percent, the $12,000,000 offer is $727,273 under that value, about $9,324 per key. If they are trading at 8.75 percent, the offer is at the market. The arithmetic cannot tell you which is true. Comparable sales can.",
  },
  faq: [
    {
      q: "How do I calculate the cap rate on a hotel?",
      a: "Divide annual net operating income by the price. $1,050,000 of NOI at a $12,000,000 price is 8.75%. Use NOI after a management fee and an FF&E reserve.",
    },
    {
      q: "How do I value a hotel from its NOI?",
      a: "Divide NOI by a cap rate drawn from comparable sales. At a hypothetical 8.25% cap rate, $1,050,000 of NOI is worth $12,727,273. The cap rate is the input that needs evidence.",
    },
    {
      q: "What is price per key?",
      a: "Price divided by the number of guest rooms. $12,000,000 for 78 keys is $153,846 per key. It lets you compare hotels of different sizes and check a cap rate result against recent sales.",
    },
    {
      q: "What is a good cap rate for a hotel?",
      a: "There is no single answer. It depends on segment, market, brand and PIP status, and it is set by what buyers pay. This page does not print one. See our hotel cap rates page for the bands our index reports.",
    },
    {
      q: "Does a higher cap rate mean a better deal?",
      a: "For a buyer it means more income per dollar of price, usually in exchange for more risk. For a seller it means a lower price. On $1,050,000 of NOI, moving from 8.00% to 9.00% lowers value by $1,458,333.",
    },
    {
      q: "Should I use trailing or projected NOI?",
      a: "Match the cap rate you are comparing against. Most quoted sale cap rates refer to trailing twelve-month NOI. A projected NOI divided by a trailing cap rate overstates value.",
    },
  ],
  sources: [
    {
      n: 1,
      label: `Matthews Hotel Markets ${EDITION_LABEL} rate sheet`,
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18",
    },
    {
      n: 2,
      label: "Daily Treasury Par Yield Curve Rates, September 2026",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202609",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18",
    },
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation/select-service-vs-full-service",
    ],
    glossary: ["/glossary/cap-rate", "/glossary/noi", "/glossary/revpar"],
    data: ["/rates"],
  },
  cta: { label: "Get a broker opinion of value", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets sells hotels, and a broker opinion of value from our team ties the cap rate in this calculator to comparable sales.",
  tool: {
    inputs: [
      {
        key: "noi",
        label: "Annual NOI",
        type: "currency",
        default: DEFAULTS.noi,
        min: 0,
        help: "After a management fee and an FF&E reserve, before debt service.",
      },
      {
        key: "price",
        label: "Price or offer",
        type: "currency",
        default: DEFAULTS.price,
        min: 0,
        help: "Used for the cap rate and the price per key. The default is hypothetical.",
      },
      {
        key: "keys",
        label: "Keys (guest rooms)",
        type: "integer",
        default: DEFAULTS.keys,
        min: 1,
      },
      {
        key: "capRate",
        label: "Cap rate to solve for value (%)",
        type: "percent",
        default: DEFAULTS.capRate,
        min: 1,
        max: 20,
        step: 0.05,
        help: "From comparable sales or a broker opinion of value. The default is hypothetical.",
      },
    ],
    outputs: [
      { key: "impliedCapRate", label: "Cap rate at that price", format: "text" },
      { key: "pricePerKey", label: "Price per key", format: "currency" },
      { key: "value", label: "Value at your cap rate", format: "currency" },
      { key: "valuePerKey", label: "Value per key", format: "currency" },
    ],
    formula:
      "capRateAtPrice = noi / price x 100\npricePerKey    = price / keys\n\nvalue          = noi / (capRate / 100)\nvaluePerKey    = value / keys",
    disclaimer:
      "Indicative only. Every default is hypothetical. Not an appraisal, a broker opinion of value, or an offer to buy or sell.",
  },
};

export default page;
