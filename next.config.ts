import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "hyresro.se" }],
        destination: "https://www.hyresro.se/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
