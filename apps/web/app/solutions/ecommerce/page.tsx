import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EcommerceContent } from "./content";

export const metadata: Metadata = {
  title: "Ecommerce Web Scraping API for AI Agents | Reader",
  description:
    "Scrape ecommerce pages into clean Markdown and extract structured product data for AI agents, catalog workflows, and monitoring.",
  alternates: { canonical: "https://reader.dev/solutions/ecommerce" },
  openGraph: {
    title: "Ecommerce Web Scraping API for AI Agents | Reader",
    description:
      "Scrape ecommerce pages into clean Markdown and extract structured product data for AI agents, catalog workflows, and monitoring.",
    url: "https://reader.dev/solutions/ecommerce",
    type: "website",
  },
};

export default function EcommercePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <EcommerceContent />
      </main>
      <Footer />
    </>
  );
}
