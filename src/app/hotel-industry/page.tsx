import type { Metadata } from "next";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import { getCluster } from "@/lib/data/answers";

const cluster = getCluster("hotel-industry")!;

export const metadata: Metadata = answerMetadata(cluster.hub, "/hotel-industry");

export default function Page() {
  return <AnswerPageView page={cluster.hub} spokes={cluster.spokes} />;
}
