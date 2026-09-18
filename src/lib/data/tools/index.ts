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
import { EDITION_LABEL, benchmarkOn } from "./rates-line";

export const tools: ToolPage[] = [
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
    "Four free hotel calculators: refinance vs sell, DSCR, debt yield and cap rate. Formulas and worked examples are on the page, no sign-up.",
  lastUpdated: tools
    .map((t) => t.lastUpdated)
    .sort()
    .slice(-1)[0],
  intro: `Matthews Hotel Markets publishes ${tools.length} hotel calculators. Each one shows its formula and a worked example in the page itself, and each asks for your own lender's test or your own cap rate instead of asserting one, because lenders do not publish their sizing tests. The one benchmark they show comes from our ${EDITION_LABEL} rate sheet: the 10-year Treasury at ${benchmarkOn("ust10")}.`,
};
