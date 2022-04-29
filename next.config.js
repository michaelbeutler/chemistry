/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
