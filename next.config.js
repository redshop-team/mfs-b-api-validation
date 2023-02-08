/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/dev/bkash-api",

  reactStrictMode: true,
  images: {
    domains: ["redshop.s3.ap-south-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
