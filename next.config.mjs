/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

// module.exports = nextConfig;
export default nextConfig;
