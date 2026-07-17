import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reader.dev"),
  title: "Reader | Web Context API for AI Agents",
  description:
    "Reader gives AI agents reliable web context by turning URLs into clean Markdown, structured JSON, crawl results, and browser sessions.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "web data",
    "web scraping",
    "markdown",
    "llm",
    "ai",
    "crawler",
    "api",
    "platform",
    "seo",
    "data extraction",
  ],
  authors: [{ name: "Vakra" }],
  openGraph: {
    title: "Reader | Web Context API for AI Agents",
    description:
      "Reader gives AI agents reliable web context by turning URLs into clean Markdown, structured JSON, crawl results, and browser sessions.",
    url: "https://reader.dev",
    siteName: "Reader",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reader | Web Context API for AI Agents",
    description:
      "Reader gives AI agents reliable web context by turning URLs into clean Markdown, structured JSON, crawl results, and browser sessions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="reader.dev" />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-page">
        {children}
      </body>
    </html>
  );
}
