import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: "public",
  disable: false,
  // Movemos o skipWaiting e o register para o lugar correto
  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
  },
});

const nextConfig: NextConfig = {
  basePath: "/aplicativo",
  images: {
    unoptimized: true,
  },
};

export default withPWA(nextConfig);