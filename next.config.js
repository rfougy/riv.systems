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
    disableStaticImages: true,
  },
  // @see https://nextjs.org/docs/advanced-features/compiler#remove-console
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(withPWA(withPlaiceholder(config)));
