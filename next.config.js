/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rohamsteel.com",
        port: "",
        pathname: "/account123/**"
      }
    ]
  }
};

module.exports = nextConfig;
