import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import { getCluster } from "@/lib/data/answers";

const cluster = getCluster("hotel-valuation")!;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return cluster.spokes.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const page = cluster.spokes.find((p) => p.slug === slug);
  if (!page) return { title: "hotel-valuation" };
  return answerMetadata(page, `/hotel-valuation/${page.slug}`);
}

export default async function Page(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const page = cluster.spokes.find((p) => p.slug === slug);
  if (!page) notFound();
  return <AnswerPageView page={page} />;
}
