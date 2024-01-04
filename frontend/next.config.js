/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  env:{
    BACKEND_DOMAIN:"https://claims-backend-apis.onrender.com"
  }
};

module.exports = nextConfig;
