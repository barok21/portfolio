// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     // Disable Turbopack (use Webpack)
//     experimental: {
//       turbo: false,
//     },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack (use Webpack)
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
