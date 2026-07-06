import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/technology",
        destination: "/projects-skills",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
