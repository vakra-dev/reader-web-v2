/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Proxy /blog/* to Astro (transparent, no URL change)
  async rewrites() {
    const blogDestination =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4321"
        : "https://reader-web-v2-blog.vercel.app";

    return {
      beforeFiles: [
        {
          source: "/blog",
          destination: `${blogDestination}/blog`,
        },
        {
          source: "/blog/:path*",
          destination: `${blogDestination}/blog/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
