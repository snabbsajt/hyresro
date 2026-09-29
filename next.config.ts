import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "hyresro.se" }],
        destination: "https://www.hyresro.se/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
