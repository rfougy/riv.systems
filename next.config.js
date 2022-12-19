/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // unoptimized: true,
    domains: ["i.pinimg.com", "user-images.githubusercontent.com"],
  },
};

module.exports = withPWA(nextConfig);
