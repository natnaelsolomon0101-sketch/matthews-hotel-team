import * as React from "react";
import type { Metadata } from "next";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import { page as tool } from "@/lib/data/tools/dscr-calculator";
import DscrCalculatorIsland from "./DscrCalculatorIsland";

export const metadata: Metadata = answerMetadata(tool, "/tools/dscr-calculator");

export default function Page() {
  return (
    <AnswerPageView
      page={tool}
      island={
        <>
          <DscrCalculatorIsland tool={tool.tool} />
          {/* D8 — the formula, server-rendered, so the page explains itself
              with JavaScript disabled. */}
          <section aria-labelledby="formula" className="mt-8">
            <h2
              id="formula"
              className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]"
            >
              The formula, written out
            </h2>
            <pre className="mt-4 -mx-6 overflow-x-auto px-6 sm:mx-0 sm:rounded-[14px] sm:bg-[#f5f5f7] sm:px-5 sm:py-4">
              <code className="block whitespace-pre text-[13px] leading-[1.7] text-[#1d1d1f]">
                {tool.tool.formula}
              </code>
            </pre>
          </section>
        </>
      }
    />
  );
}
