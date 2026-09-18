/**
 * MPI, ARI and RGI (STR Index Scores)
 * Glossary term: /glossary/mpi-ari-rgi
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "mpi-ari-rgi",
  term: "MPI, ARI and RGI (STR Index Scores)",
  shortDef: "MPI, ARI and RGI are index scores that compare a hotel's occupancy, ADR and RevPAR with its competitive set. A score of 100 is fair share; above 100 means the hotel is taking more than its share.",
  fullDef: "MPI is the occupancy index, ARI is the ADR index and RGI is the RevPAR index. Each is the hotel's figure divided by the competitive set's figure, times 100. Hilton's 2025 Hampton disclosure document reports an average RevPAR Index of 121.0 for comparable Hampton hotels in 2024.[1]",
  body: "The three scores come from the STR benchmarking report a hotel receives. Hilton's 2025 Hampton Franchise Disclosure Document gives the formulas in plain terms: hotel occupancy divided by comp set occupancy, times 100, is the Occupancy Index, and hotel RevPAR divided by comp set RevPAR, times 100, is the RevPAR Index. An index of 100 is fair share of the group's performance.[1] The ADR index is built the same way from ADR.\n\nRead them together. A high MPI with a low ARI means the hotel is filling rooms by discounting. A low MPI with a high ARI means rate is holding but demand is going elsewhere. RGI is the net result. The spread is wide: the same document reports 2024 RevPAR Index scores for comparable Hampton hotels ranging from 39.5 to 334.4.[1]\n\nBuyers and lenders ask for these scores because they separate the hotel from its market. See [Competitive Set](/glossary/comp-set), [RevPAR](/glossary/revpar) and [ADR](/glossary/adr).",
  example: "Hypothetical month. Your hotel: 68% occupancy, $131 ADR, RevPAR 0.68 x $131 = $89.08. Comp set: 72% occupancy, $124 ADR, RevPAR 0.72 x $124 = $89.28. MPI = 68 / 72 x 100 = 94.4. ARI = 131 / 124 x 100 = 105.6. RGI = 89.08 / 89.28 x 100 = 99.8. The hotel charges more than its competitors, fills fewer rooms, and ends up almost exactly at fair share of revenue.",
  misconceptions: [
    "An RGI above 100 does not mean the hotel is profitable. It measures revenue share only. Expenses are not in it.",
    "A low score is not always the hotel's fault. The hotel picks its own comp set, and a set of newer or better-located hotels produces a low index for a well-run property.[1]",
    "MPI is not occupancy. A hotel at 60 percent occupancy can have an MPI of 110 in a weak market."
  ],
  faq: [
    {
      q: "What do MPI, ARI and RGI mean on my STR report?",
      a: "MPI is your occupancy against your comp set, ARI is your ADR against it, and RGI is your RevPAR against it. Each is your number divided by theirs, times 100. 100 is fair share.[1]"
    },
    {
      q: "What is a good RGI for a hotel?",
      a: "Above 100 means you take more than your fair share of RevPAR. For scale, Hilton reported an average RevPAR Index of 121.0 across comparable Hampton hotels in 2024, with a range of 39.5 to 334.4.[1]"
    },
    {
      q: "Why does a buyer want my STR index scores?",
      a: "They show whether revenue comes from the hotel or from the market. A hotel with a 90 RGI has upside a new operator can claim. A hotel at 125 is already outperforming and is priced on what it earns. See /sell-a-hotel/documents-needed."
    },
    {
      q: "My RGI dropped but my RevPAR went up. How?",
      a: "Your competitors' RevPAR rose faster than yours. The index is relative, so a rising market can hide a loss of share."
    },
    {
      q: "Can I share my STR report with a buyer?",
      a: "Check your STR or CoStar subscriber terms first. Sellers commonly provide the reports in a diligence room under a confidentiality agreement. We do not republish subscriber data."
    }
  ],
  sources: [
    {
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    }
  ],
  relatedTerms: [
    "comp-set",
    "revpar",
    "adr"
  ],
  relatedAnswers: [
    "/sell-a-hotel/documents-needed",
    "/hotel-valuation/how-to-value-a-hotel",
    "/hotel-valuation/broker-opinion-of-value"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
