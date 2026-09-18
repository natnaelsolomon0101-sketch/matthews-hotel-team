import * as React from "react";
import type { Metadata } from "next";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import {
  BAND_POINTS,
  DEFAULT_SEGMENT,
  MHI_LABEL,
  MHI_PATH,
  SEGMENTS,
  page as tool,
} from "@/lib/data/tools/hotel-value-estimator";
import { page as bov } from "@/lib/data/answers/hotel-valuation/broker-opinion-of-value";
import { page as howToValue } from "@/lib/data/answers/hotel-valuation/how-to-value-a-hotel";
import { page as capRates } from "@/lib/data/answers/hotel-valuation/hotel-cap-rates";
import ValueEstimatorIsland from "./ValueEstimatorIsland";
import ToolExtras from "../ToolExtras";

export const metadata: Metadata = answerMetadata(tool, "/tools/hotel-value-estimator");

/**
 * Template D (geo/05-templates.md). Everything except the island is
 * server-rendered: the answer, what the estimate ignores, the band table, the
 * worked example, the FAQ and the sources are in the HTML without JavaScript.
 * The cap rate bands are read from the Matthews Hotel Index on the server and
 * handed to the island as props.
 */
export default function Page() {
  return (
    <AnswerPageView
      page={tool}
      island={
        <>
          <ValueEstimatorIsland
            tool={tool.tool}
            points={BAND_POINTS}
            segments={SEGMENTS}
            defaultSegment={DEFAULT_SEGMENT}
            mhiLabel={MHI_LABEL}
            mhiPath={MHI_PATH}
          />
          <ToolExtras
            page={tool}
            paired={[
              { href: "/hotel-valuation/broker-opinion-of-value", label: bov.h1 },
              { href: "/hotel-valuation/how-to-value-a-hotel", label: howToValue.h1 },
              { href: "/hotel-valuation/hotel-cap-rates", label: capRates.h1 },
            ]}
          />
        </>
      }
    />
  );
}
