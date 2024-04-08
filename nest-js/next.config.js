/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.HOSTNAME,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
