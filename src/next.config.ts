import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    remotePatterns: [new URL("https://picsum.photos/300/400")],
    unoptimized: true
  }
};

export default nextConfig;
