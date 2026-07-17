import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ZenRowsContent } from "./content";

export const metadata: Metadata = {
  title: "Reader vs ZenRows | Web Context API vs Scraping Infrastructure",
  description:
    "Compare Reader and ZenRows by product model, scraping, crawling, Markdown output, structured extraction, proxies, browser workflows, and AI agent fit.",
  alternates: { canonical: "https://reader.dev/compare/zenrows" },
  openGraph: {
    title: "Reader vs ZenRows | Web Context API vs Scraping Infrastructure",
    description:
      "Compare Reader and ZenRows by product model, scraping, crawling, Markdown output, structured extraction, proxies, browser workflows, and AI agent fit.",
    url: "https://reader.dev/compare/zenrows",
    type: "article",
  },
};

export default function ZenRowsComparePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ZenRowsContent />
      </main>
      <Footer />
    </>
  );
}
