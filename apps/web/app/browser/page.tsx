import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BrowserContent } from "./content";

export const metadata: Metadata = {
  title: "Cloud Browser API for AI Agents | Reader",
  description:
    "Launch cloud browser sessions for Playwright and Puppeteer workflows when your AI agent needs clicks, forms, navigation, screenshots, PDFs, or rendered page state.",
  alternates: { canonical: "https://reader.dev/browser" },
  openGraph: {
    title: "Cloud Browser API for AI Agents | Reader",
    description:
      "Launch cloud browser sessions for Playwright and Puppeteer workflows when your AI agent needs clicks, forms, navigation, screenshots, PDFs, or rendered page state.",
    url: "https://reader.dev/browser",
    type: "website",
  },
};

export default function BrowserPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BrowserContent />
      </main>
      <Footer />
    </>
  );
}
