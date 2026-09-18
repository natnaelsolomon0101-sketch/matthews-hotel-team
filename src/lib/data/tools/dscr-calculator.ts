/**
 * Re-export shim. The DSCR page content moved to ./dscr-calculator-page.ts and
 * the registry moved to ./index.ts (four tools now, not one). Anything that
 * still imports `page`, `tools` or `getTool` from this path keeps working.
 * New code should import the registry from "@/lib/data/tools".
 */
export { page, default } from "./dscr-calculator-page";
export { tools, getTool } from "./index";
