import type { NextConfig } from "next";

// Service pages from the previous version of the site, sent to their closest new page.
const legacyServiceRedirects: Record<string, string> = {
  "web-app-development": "software-development",
  "ai-data-engineering": "ai-solutions",
  "ai-automation": "ai-solutions",
  "brand-ui-design": "software-development",
  "ai-marketing-funnel": "ai-solutions",
  "smart-support-system": "ai-solutions",
  "ai-business-intelligence": "ai-solutions",
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      ...Object.entries(legacyServiceRedirects).map(([from, to]) => ({
        source: `/services/${from}`,
        destination: `/services/${to}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
