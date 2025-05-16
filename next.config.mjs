/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["portfolio-container-bucket.s3.us-east-1.amazonaws.com"],
    formats: ["image/webp"], // Modern format priority
    minimumCacheTTL: 86400, // Cache for 1 day
  },
};

export default nextConfig;
