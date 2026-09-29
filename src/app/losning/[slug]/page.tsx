import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionLanding } from "@/components/SolutionLanding";
import {
  getAllSolutionSlugs,
  getSolution,
} from "@/data/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
    alternates: { canonical: solution.href },
    openGraph: {
      title: solution.title,
      description: solution.description,
      url: solution.href,
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionLanding solution={solution} />;
}
