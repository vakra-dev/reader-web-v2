import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PriceMonitoringContent } from "./content";

export const metadata: Metadata = {
  title: "Price Monitoring Web Scraping API for AI Agents | Reader",
  description:
    "Use Reader to scrape product pages, extract price and availability data, and power price monitoring workflows with clean Markdown and structured JSON.",
  alternates: { canonical: "https://reader.dev/solutions/price-monitoring" },
  openGraph: {
    title: "Price Monitoring Web Scraping API for AI Agents | Reader",
    description:
      "Use Reader to scrape product pages, extract price and availability data, and power price monitoring workflows with clean Markdown and structured JSON.",
    url: "https://reader.dev/solutions/price-monitoring",
    type: "website",
  },
};

export default function PriceMonitoringPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PriceMonitoringContent />
      </main>
      <Footer />
    </>
  );
}
