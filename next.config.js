/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pinimg.com"],
  },
};

module.exports = withPWA(nextConfig);
