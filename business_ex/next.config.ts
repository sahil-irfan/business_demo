import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],

    domains: [
      "lh3.googleusercontent.com",
      "ui-avatars.com",
    ],
  },

  reactCompiler: true,
};

export default nextConfig;