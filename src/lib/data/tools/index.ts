/**
 * The tool registry. Every generator and gate script enumerates calculators
 * from here: src/app/sitemap.ts, src/lib/llms-content.ts, src/app/feed.xml,
 * and scripts/{internal-links-audit,schema-validate,check-extractability,
 * check-refs}.ts. Register a new tool by adding it to `tools`; it then appears
 * in the sitemap, llms.txt, the feed, the /tools hub and every check.
 *
 * Page modules must not import this file (the registry imports them), which
 * is why the DSCR content lives in dscr-calculator-page.ts and
 * dscr-calculator.ts is only a re-export shim.
 */
import type { ToolPage } from "../answers/types";
import { page as dscrCalculator } from "./dscr-calculator-page";
import { page as refinanceVsSell } from "./refinance-vs-sell";
import { page as debtYieldCalculator } from "./debt-yield-calculator";
import { page as capRateCalculator } from "./cap-rate-calculator";
import {
  MHI_LABEL,
  SELECT_INPUT_LABELS,
  page as hotelValueEstimator,
} from "./hotel-value-estimator";
import { page as hotelLoanSizing } from "./hotel-loan-sizing-calculator";
import { EDITION_LABEL, benchmarkOn } from "./rates-line";

export const tools: ToolPage[] = [
  hotelValueEstimator,
  hotelLoanSizing,
  refinanceVsSell,
  dscrCalculator,
  debtYieldCalculator,
  capRateCalculator,
];

export function getTool(slug: string): ToolPage | undefined {
  return tools.find((t) => t.slug === slug);
}

/** The /tools hub. Plain data so llms.txt and the page say the same thing. */
export const toolsHub = {
  path: "/tools",
  title: "Hotel Finance Calculators",
  h1: "Hotel finance calculators: loan sizing, value, and refinance vs sell",
  description:
    "Six free hotel calculators: value estimator, loan sizing, refinance vs sell, DSCR, debt yield and cap rate. Formulas and worked examples on the page, no sign-up.",
  lastUpdated: tools
    .map((t) => t.lastUpdated)
    .sort()
    .slice(-1)[0],
  intro: `Matthews Hotel Markets publishes ${tools.length} hotel calculators. Each one shows its formula and a worked example in the page itself. The loan tools ask for your own lender's tests instead of asserting them, because lenders do not publish their sizing tests. Two benchmarks appear: the 10-year Treasury at ${benchmarkOn("ust10")}, from our ${EDITION_LABEL} rate sheet, and the cap rate bands of the ${MHI_LABEL} Matthews Hotel Index, which only the value estimator uses.`,
};

/**
 * What a tool asks for, as the hub lists it. ToolInput holds numbers only, so
 * the value estimator's two dropdowns are added here.
 */
export function inputLabels(t: ToolPage): string[] {
  const labels = t.tool.inputs.map((i) => i.label);
  return t.slug === hotelValueEstimator.slug ? [...SELECT_INPUT_LABELS, ...labels] : labels;
}
