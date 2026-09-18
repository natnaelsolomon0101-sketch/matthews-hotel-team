import * as React from "react";
import type { Metadata } from "next";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import { page as tool } from "@/lib/data/tools/dscr-calculator-page";
import { page as paired } from "@/lib/data/answers/hotel-financing/loan-requirements";
import DscrCalculatorIsland from "./DscrCalculatorIsland";
import ToolExtras from "../ToolExtras";

export const metadata: Metadata = answerMetadata(tool, "/tools/dscr-calculator");

export default function Page() {
  return (
    <AnswerPageView
      page={tool}
      island={
        <>
          <DscrCalculatorIsland tool={tool.tool} />
          {/* D8: the formula, server-rendered, so the page explains itself
              with JavaScript disabled, then the other calculators. */}
          <ToolExtras
            page={tool}
            paired={{ href: "/hotel-financing/loan-requirements", label: paired.h1 }}
          />
        </>
      }
    />
  );
}
