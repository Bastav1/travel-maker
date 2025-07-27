import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "df8dgo9afi.ufs.sh",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
