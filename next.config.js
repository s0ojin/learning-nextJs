/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
