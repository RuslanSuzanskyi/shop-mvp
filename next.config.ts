import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '**',
      },
    ],
    domains: ['fakestoreapi.in', 'storage.googleapis.com'],
  },
};

export default nextConfig;
