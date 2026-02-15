/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Proxy /blog/* to Astro in development (transparent, no URL change)
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/blog",
          destination: "http://localhost:4321/blog",
        },
        {
          source: "/blog/:path*",
          destination: "http://localhost:4321/blog/:path*",
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
