import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Reader - Open-source web scraping for LLMs",
  description:
    "Production-grade web scraping engine. Two primitives. Clean markdown. Ready for your agents.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "web scraping",
    "markdown",
    "llm",
    "ai",
    "crawler",
    "headless browser",
    "nodejs",
  ],
  authors: [{ name: "Vakra Dev" }],
  openGraph: {
    title: "Reader - Open-source web scraping for LLMs",
    description:
      "Production-grade web scraping engine. Two primitives. Clean markdown. Ready for your agents.",
    url: "https://reader.dev",
    siteName: "Reader",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reader - Open-source web scraping for LLMs",
    description:
      "Production-grade web scraping engine. Two primitives. Clean markdown. Ready for your agents.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
