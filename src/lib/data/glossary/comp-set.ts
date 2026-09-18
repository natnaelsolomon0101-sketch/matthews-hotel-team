/**
 * Competitive Set (Comp Set)
 * Glossary term: /glossary/comp-set
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "comp-set",
  term: "Competitive Set (Comp Set)",
  shortDef: "A competitive set is the group of nearby hotels a property is benchmarked against in its STR report. Hilton's 2025 Hampton disclosure document says each hotel generally must identify at least 3 competitors.",
  fullDef: "The hotel chooses its comp set, and STR reports the set's combined occupancy, ADR and RevPAR without showing any one competitor's numbers. Index scores compare the hotel with that aggregate. Hilton's 2025 Hampton document notes that a comp set does not represent every hotel in a geographic area.[1]",
  body: "STR, an independent research firm now owned by CoStar, receives data directly from hotel chains and individual properties.[1] Each participating hotel names a set of competitors, and its benchmarking reports show how the hotel performed against that set.\n\nThe choice of set decides what the scores mean. Hilton's 2025 Hampton Franchise Disclosure Document says its index figures are relative to a competitive set identified for STR by each hotel, that a set does not represent every hotel or lodging facility in an area, and that each hotel generally must identify at least 3 competitive hotels.[1] A set of weaker hotels flatters the index. A set of newer, better-located hotels does the opposite.\n\nBuyers and appraisers often rebuild the set. They ask which hotels a guest would actually book instead, by brand tier, location and rate, and they re-run the comparison. A seller should be ready to explain every hotel in the set. See [MPI, ARI and RGI](/glossary/mpi-ari-rgi).",
  example: "Hypothetical comp set of five hotels on one night. Rooms and occupancy: 100 at 70%, 120 at 75%, 80 at 65%, 90 at 72%, 110 at 68%. Rooms sold: 70 + 90 + 52 + 64.8 + 74.8 = 351.6. Rooms available: 500. Comp set occupancy = 351.6 / 500 = 70.3%. The simple average of the five percentages is 70.0%. The aggregate weights larger hotels more, which is why a comp set figure is not the average of its members.",
  misconceptions: [
    "A comp set is not the whole market. It is a short list the hotel picks, and it leaves out most lodging in the area.[1]",
    "You cannot see an individual competitor's numbers. The report shows only the aggregate.",
    "A comp set is not permanent. Hotels revise it as competitors open, close or change brands, and a change can move the index without any change in performance."
  ],
  faq: [
    {
      q: "What is a comp set on my STR report?",
      a: "The group of competing hotels you selected. STR combines their occupancy, ADR and RevPAR into one benchmark and compares your hotel with it."
    },
    {
      q: "How many hotels should be in my comp set?",
      a: "STR sets the minimums in its subscriber rules. Hilton's 2025 Hampton document says each of its hotels generally must identify at least 3 competitive hotels.[1]"
    },
    {
      q: "Who picks the comp set, me or the brand?",
      a: "The hotel identifies it, usually with input from the brand or management company.[1] A buyer may build its own version during diligence."
    },
    {
      q: "Why does a buyer question my comp set?",
      a: "Because the index is only as meaningful as the set. If the set leaves out your real competitors, a 115 RGI tells the buyer little. See /sell-a-hotel/documents-needed."
    },
    {
      q: "Can I change my comp set before I sell?",
      a: "You can, within STR's rules, but a recent change that raises your index will be noticed. Keep the history and the reason."
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
    "mpi-ari-rgi",
    "revpar",
    "adr"
  ],
  relatedAnswers: [
    "/sell-a-hotel/documents-needed",
    "/hotel-valuation/how-to-value-a-hotel",
    "/sell-a-hotel/how-to-sell-a-hotel"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
