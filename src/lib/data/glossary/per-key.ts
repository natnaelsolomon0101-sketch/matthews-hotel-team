/**
 * Price Per Key
 * Glossary term: /glossary/per-key
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "per-key",
  term: "Price Per Key",
  shortDef: "Price per key is a hotel's price divided by its number of guest rooms. A 96-key hotel that sells for $11.5 million trades at about $119,800 per key.",
  fullDef: "Per-key value is the unit price of a hotel: total price divided by room count. It lets a buyer compare a 60-key hotel with a 140-key hotel and compare a purchase with the cost to build. Hilton's 2025 disclosure document puts an 89-room Hampton at $15.2 million to $22.2 million to develop, excluding land.[1]",
  body: "Per key is a comparison tool, not a valuation method. Value comes from income: NOI divided by a cap rate. Dividing that value by the room count gives a per-key figure that can be checked against recent sales and against replacement cost.\n\nReplacement cost is the most useful check because it is published. Hilton's 2025 Hampton Franchise Disclosure Document estimates the initial investment for an 89-room Hampton Inn at $15,218,226 to $22,193,244, which is about $171,000 to $249,000 per key, and states that the figures do not include real estate costs.[1] A hotel priced well below that range is cheaper to buy than to build, which limits new competition. A hotel priced above it invites new supply.\n\nAdjust before comparing. A per-key price says nothing about the capital a buyer must spend after closing. HVS found planned capital spending at sale averaged 12 to 15 percent of price in 2013.[2] Add the [PIP](/glossary/pip) to the price, then divide by keys.",
  example: "Hypothetical. 96 keys, NOI $949,000, assumed 8.25% cap rate. Value = $949,000 / 0.0825 = $11.50 million. Per key = $11,500,000 / 96 = $119,792. Add an assumed $1,440,000 PIP ($15,000 per key): all-in basis is $12,940,000, or $134,792 per key. Compare with Hilton's published development range for an 89-room Hampton Inn: $15,218,226 / 89 = $170,991 per key at the low end, before land.[1] The cap rate and PIP are assumptions for the arithmetic.",
  misconceptions: [
    "Per key is not how a hotel is valued. It is how a value is checked. Two hotels with the same key count can differ several times over in NOI.",
    "A low price per key is not automatically a bargain. It often signals a large PIP, a weak market, a short franchise term or a ground lease.",
    "Keys and rooms are usually the same count, but not always. A two-bay suite sold as one unit is one key."
  ],
  faq: [
    {
      q: "What does price per key mean?",
      a: "The hotel's price divided by its guest room count. At $11.5 million for 96 rooms, it is about $119,800 per key."
    },
    {
      q: "How much is my hotel worth per key?",
      a: "Work from income first: NOI divided by a market cap rate, then divide by keys. Then compare with recent sales of similar hotels and with the cost to build. See /hotel-valuation/how-to-value-a-hotel."
    },
    {
      q: "What does it cost per key to build a new select-service hotel?",
      a: "Brand disclosure documents publish estimates. Hilton's 2025 Hampton document shows $15.2 million to $22.2 million for an 89-room prototype, about $171,000 to $249,000 per key, excluding land.[1]"
    },
    {
      q: "Why did a hotel near mine sell for a much higher price per key?",
      a: "Usually a higher NOI per room, a newer building, a stronger brand or less capital needed after closing. Per key compresses all of that into one number, which is why it needs the income behind it."
    },
    {
      q: "Should I include the PIP in my price per key?",
      a: "Yes, when comparing deals. A buyer's real basis is price plus required capital. HVS found that capital averaged 12 to 15 percent of price on hotels it appraised at sale in 2013.[2]"
    }
  ],
  sources: [
    {
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    },
    {
      label: "Hotel Capitalization Rates and the Impact of Cap Ex, Suzanne R. Mellen, January 2014",
      url: "https://www.hvs.com/Jump/?f=3501.pdf&c=6766&rt=2",
      publisher: "HVS"
    }
  ],
  relatedTerms: [
    "cap-rate",
    "noi",
    "pip",
    "revpar"
  ],
  relatedAnswers: [
    "/hotel-valuation/how-to-value-a-hotel",
    "/hotel-valuation/select-service-vs-full-service",
    "/hotel-valuation/broker-opinion-of-value"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
