/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  env:{
    BACKEND_DOMAIN:"http://localhost:3009"
  }
};

module.exports = nextConfig;
