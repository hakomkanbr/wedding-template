/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost", "cdn.getiryemek.com","magento2.magentech.com"],
  },
};

module.exports = nextConfig;
