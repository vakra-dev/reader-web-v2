import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarkdownHero } from "@/components/markdown/hero";
import { BeforeAfter } from "@/components/markdown/before-after";
import { WhyMarkdown } from "@/components/markdown/why-markdown";
import { MarkdownHowItWorks } from "@/components/markdown/how-it-works";
import { PoweredBy } from "@/components/markdown/powered-by";
import { UseCases } from "@/components/markdown/use-cases";

export const metadata: Metadata = {
  title: "Reader Markdown — Clean markdown from any URL",
  description:
    "Prefix any URL with md.reader.dev and get clean, LLM-optimized markdown back. No API key, no setup, no code.",
  alternates: { canonical: "https://reader.dev/markdown" },
};

export default function MarkdownPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MarkdownHero />
        <BeforeAfter />
        <WhyMarkdown />
        <MarkdownHowItWorks />
        <PoweredBy />
        <UseCases />
      </main>
      <Footer />
    </>
  );
}
