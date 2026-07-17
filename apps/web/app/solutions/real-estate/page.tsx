import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RealEstateContent } from "./content";

export const metadata: Metadata = {
  title: "Real Estate Web Scraping API for AI Agents | Reader",
  description:
    "Scrape public real estate listings, extract structured property data, and give AI agents clean listing context for research and analysis.",
  alternates: { canonical: "https://reader.dev/solutions/real-estate" },
  openGraph: {
    title: "Real Estate Web Scraping API for AI Agents | Reader",
    description:
      "Scrape public real estate listings, extract structured property data, and give AI agents clean listing context for research and analysis.",
    url: "https://reader.dev/solutions/real-estate",
    type: "website",
  },
};

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <RealEstateContent />
      </main>
      <Footer />
    </>
  );
}
