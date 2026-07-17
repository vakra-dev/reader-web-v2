import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BrightDataComparisonContent } from "./content";

export const metadata: Metadata = {
  title: "Reader vs Bright Data | Web Context API vs Web Access Platform",
  description:
    "Compare Reader and Bright Data by product model, scraping, crawling, browser automation, unblocking, output formats, AI agent workflows, and operational fit.",
  alternates: { canonical: "https://reader.dev/compare/bright-data" },
  openGraph: {
    title: "Reader vs Bright Data | Web Context API vs Web Access Platform",
    description:
      "Compare Reader and Bright Data by product model, scraping, crawling, browser automation, unblocking, output formats, AI agent workflows, and operational fit.",
    url: "https://reader.dev/compare/bright-data",
    type: "article",
  },
};

export default function CompareBrightDataPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BrightDataComparisonContent />
      </main>
      <Footer />
    </>
  );
}
