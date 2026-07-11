import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { solutions, getSolution } from "../data";
import { SolutionContent } from "./solution-content";

type Params = { slug: string };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  return {
    title: solution.meta.title,
    description: solution.meta.description,
    alternates: { canonical: `https://reader.dev/solutions/${slug}` },
    openGraph: {
      title: solution.meta.title,
      description: solution.meta.description,
      url: `https://reader.dev/solutions/${slug}`,
      type: "website",
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <SolutionContent solution={solution} />
      </main>
      <Footer />
    </>
  );
}
