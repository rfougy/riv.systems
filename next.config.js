/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pinimg.com", "user-images.githubusercontent.com"],
  },
  // @see https://nextjs.org/docs/advanced-features/compiler#remove-console
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

module.exports = withBundleAnalyzer(withPWA(withPlaiceholder(config)));
