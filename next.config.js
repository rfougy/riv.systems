/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pinimg.com", "user-images.githubusercontent.com"],
  },
  // @see https://nextjs.org/docs/advanced-features/compiler#remove-console
  compiler: {
    removeConsole: false,
  },
};

module.exports = withPWA(nextConfig);
