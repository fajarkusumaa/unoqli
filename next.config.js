/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.uniqlo.com",
      },
    ],
  },
};

module.exports = nextConfig;
