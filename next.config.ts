import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "imgaz.staticbg.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "**" },
    ],
  },
  env: {
    NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN,
  },
};

export default nextConfig;
