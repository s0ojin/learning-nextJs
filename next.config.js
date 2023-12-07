/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["localhost", "s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
