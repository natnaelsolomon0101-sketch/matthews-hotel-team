/**
 * ANSWER PAGES — the typed content model for the answer clusters
 * (/hotel-financing, /sell-a-hotel, /hotel-valuation, /buy-a-hotel) and the
 * tool shelf.
 *
 * The shape mirrors `GlossaryEntry` (src/lib/data/glossary/types.ts) on
 * purpose: content on this site lives in typed TypeScript modules under
 * src/lib/data/, there is no CMS and no MDX, and the sitemap / llms.txt /
 * feed generators read these modules directly. Contract: geo/05-templates.md §6.
 *
 * Every module in this folder was converted from a Wave 1 draft in
 * geo/06-pages/ or geo/07-pages/. The draft front matter is canonical for
 * answer / takeaways / table / worked_example / faq / sources / related / cta;
 * the Markdown below a draft's front matter supplied per-section body prose
 * only.
 */

export type AnswerCluster =
  | "hotel-financing"
  | "sell-a-hotel"
  | "hotel-valuation"
  | "buy-a-hotel";

export type AnswerSection = {
  /** The sub-question, rendered as the section's <h2>. */
  h2: string;
  /** One sentence that answers the h2 before anything else. */
  lead: string;
  /** Body prose. Paragraph breaks via \n\n. */
  body: string;
};

export type AnswerTable = {
  caption: string;
  columns: string[];
  rows: string[][];
};

export type AnswerSource = {
  /** Reference number, in order of first reference in the body. */
  n: number;
  label: string;
  url: string;
  publisher: string;
  /** ISO date the source was opened by a person. */
  accessed: string;
};

export type AnswerFaq = { q: string; a: string };

export type AnswerRelated = {
  /** Cluster hub path, e.g. "/hotel-financing". */
  hub: string;
  /** ≥3 sibling paths in the same cluster. */
  siblings: string[];
  /** Glossary term paths. */
  glossary: string[];
  /** First-party data paths: /rates and/or /research/mhi/<quarter>. */
  data: string[];
};

export type AnswerPage = {
  slug: string;
  cluster: AnswerCluster;
  /** True for the cluster hubs, which also render a spoke list. */
  isHub: boolean;
  /** ≤60 chars. */
  title: string;
  h1: string;
  /** ≤155 chars, used for meta + OG. */
  description: string;
  /** ISO. Visible "Last updated" AND dateModified. */
  lastUpdated: string;
  /** Must be a slug in team.ts with hasBio !== false. */
  authorSlug: string;
  reviewerSlug?: string;
  /** Verbatim from geo/04-queries.csv. Not rendered; kept for tracking. */
  targetPrompts: string[];
  /** 40–70 words, ≥1 number, ≥1 date. The block that gets lifted. */
  answer: string;
  /** 3–5 bullets. The only bullet list above the first H2. */
  takeaways: string[];
  sections: AnswerSection[];
  table: AnswerTable;
  originalDataPoint: { source: "rates" | "mhi"; ref: string; sentence: string };
  workedExample: { label: string; body: string };
  /** 5–8 pairs, each answer ≤50 words, visible AND mirrored into FAQPage. */
  faq: AnswerFaq[];
  sources: AnswerSource[];
  related: AnswerRelated;
  cta: { label: string; href: "/contact" };
  /** The one natural brand mention. */
  brandSentence: string;
};

/* ------------------------------------------------------------------ tools */

export type ToolInput = {
  key: string;
  label: string;
  type: "currency" | "percent" | "integer" | "number";
  default: number;
  min?: number;
  max?: number;
  step?: number;
  /** Rendered under the field. Plain English, no jargon. */
  help?: string;
};

export type ToolOutput = {
  key: string;
  label: string;
  format: "currency" | "ratio" | "text";
};

/**
 * A tool page is an AnswerPage plus a calculator spec. The whole page is
 * server-rendered except the calculator island: the explanation text, the
 * pre-computed worked example, the table and the FAQ are all in the HTML
 * before any JavaScript runs (geo/05-templates.md §5).
 */
export type ToolPage = Omit<AnswerPage, "cluster" | "isHub"> & {
  cluster: "tools";
  tool: {
    inputs: ToolInput[];
    outputs: ToolOutput[];
    /** The formula, written out, rendered visibly under "How the math works". */
    formula: string;
    /** Required. Renders next to the outputs. */
    disclaimer: string;
  };
};
