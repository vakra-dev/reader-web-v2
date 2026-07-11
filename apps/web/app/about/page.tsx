import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About Reader — Open Source Web Infrastructure for AI",
  description:
    "Reader makes the web accessible for AI. Open source under Apache 2.0. Scrape, crawl, and browse from one API.",
  alternates: { canonical: "https://reader.dev/about" },
  openGraph: {
    title: "About Reader — Open Source Web Infrastructure for AI",
    description:
      "Reader makes the web accessible for AI. Open source under Apache 2.0. Scrape, crawl, and browse from one API.",
    url: "https://reader.dev/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
