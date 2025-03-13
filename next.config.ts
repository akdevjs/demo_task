import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/login', //Starting point of application
        permanent: true,
      },
      
    ]
  },
};

export default nextConfig;
