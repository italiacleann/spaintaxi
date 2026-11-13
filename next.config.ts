import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // proxy.ts adds the trailing slash itself, together with the /en-prefix
  // and retired-URL redirects, so every redirect is a single hop.
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
