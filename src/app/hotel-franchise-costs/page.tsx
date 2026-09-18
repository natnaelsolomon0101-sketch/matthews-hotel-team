import type { Metadata } from "next";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import { getCluster } from "@/lib/data/answers";

const cluster = getCluster("hotel-franchise-costs")!;

export const metadata: Metadata = answerMetadata(cluster.hub, "/hotel-franchise-costs");

export default function Page() {
  return <AnswerPageView page={cluster.hub} spokes={cluster.spokes} />;
}
