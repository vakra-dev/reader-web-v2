import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ZyteComparisonContent } from "./content";

export const metadata: Metadata = {
  title:
    "Reader vs Zyte | Web Context API vs Scraping and Extraction Platform",
  description:
    "Compare Reader and Zyte by product model, scraping, crawling, browser automation, automatic extraction, AI agent workflows, output formats, and usage fit.",
  alternates: { canonical: "https://reader.dev/compare/zyte" },
  openGraph: {
    title:
      "Reader vs Zyte | Web Context API vs Scraping and Extraction Platform",
    description:
      "Compare Reader and Zyte by product model, scraping, crawling, browser automation, automatic extraction, AI agent workflows, output formats, and usage fit.",
    url: "https://reader.dev/compare/zyte",
    type: "article",
  },
};

export default function CompareZytePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ZyteComparisonContent />
      </main>
      <Footer />
    </>
  );
}
