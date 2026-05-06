import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reader.dev"),
  title: "Reader | AI Web Infrastructure Platform",
  description:
    "The web infrastructure platform for AI. Scrape, crawl, and automate the web from a single API. Use the platform, the API, or self-host.",
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
    title: "Reader | AI Web Infrastructure Platform",
    description:
      "The web infrastructure platform for AI. Scrape, crawl, and automate the web from a single API.",
    url: "https://reader.dev",
    siteName: "Reader",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reader | AI Web Infrastructure Platform",
    description:
      "The web infrastructure platform for AI. Scrape, crawl, and automate the web from a single API.",
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
      <body className="min-h-screen flex flex-col antialiased bg-page">
        {children}
      </body>
    </html>
  );
}
