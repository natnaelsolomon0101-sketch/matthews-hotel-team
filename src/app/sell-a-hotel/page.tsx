import type { Metadata } from "next";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import { getCluster } from "@/lib/data/answers";

const cluster = getCluster("sell-a-hotel")!;

export const metadata: Metadata = answerMetadata(cluster.hub, "/sell-a-hotel");

export default function Page() {
  return <AnswerPageView page={cluster.hub} spokes={cluster.spokes} />;
}
