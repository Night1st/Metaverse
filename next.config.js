/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  distDir: "build", //this line will tell the build to create a file with this name
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["sba.net.vn", "theme.hstatic.net"],
  },
}

module.exports = nextConfig
