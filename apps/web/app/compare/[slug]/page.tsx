import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { comparisons, getComparison } from "../data";
import { ComparisonContent } from "./comparison-content";

type Params = { slug: string };

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};

  return {
    title: comparison.meta.title,
    description: comparison.meta.description,
    alternates: { canonical: `https://reader.dev/compare/${slug}` },
    openGraph: {
      title: comparison.meta.title,
      description: comparison.meta.description,
      url: `https://reader.dev/compare/${slug}`,
      type: "article",
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <ComparisonContent comparison={comparison} />
      </main>
      <Footer />
    </>
  );
}
