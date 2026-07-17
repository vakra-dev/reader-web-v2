import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApifyComparisonContent } from "./content";

export const metadata: Metadata = {
  title: "Reader vs Apify | Web Context API vs Actor Platform",
  description:
    "Compare Reader and Apify by product model, scraping, crawling, browser automation, actor workflows, storage, scheduling, AI agent fit, and usage shape.",
  alternates: { canonical: "https://reader.dev/compare/apify" },
  openGraph: {
    title: "Reader vs Apify | Web Context API vs Actor Platform",
    description:
      "Compare Reader and Apify by product model, scraping, crawling, browser automation, actor workflows, storage, scheduling, AI agent fit, and usage shape.",
    url: "https://reader.dev/compare/apify",
    type: "article",
  },
};

export default function CompareApifyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ApifyComparisonContent />
      </main>
      <Footer />
    </>
  );
}
