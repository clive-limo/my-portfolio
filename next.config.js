/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
});

const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  webpack: (config) => {
    return config;
  },
  generateBuildId: () => {
    return `${Date.now()}`;
  },
});
