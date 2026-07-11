import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OpenSourceContent } from "./content";

export const metadata: Metadata = {
  title: "Open Source Web Scraping Platform | Reader",
  description:
    "Reader is open source under Apache 2.0. Self host the entire platform on your infrastructure. No feature gaps, no licensing restrictions.",
  alternates: { canonical: "https://reader.dev/open-source" },
  openGraph: {
    title: "Open Source Web Scraping Platform | Reader",
    description:
      "Reader is open source under Apache 2.0. Self host the entire platform on your infrastructure. No feature gaps.",
    url: "https://reader.dev/open-source",
    type: "website",
  },
};

export default function OpenSourcePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <OpenSourceContent />
      </main>
      <Footer />
    </>
  );
}
