/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["unsplash.com", "images.unsplash.com", "plus.unsplash.com"],
    remotePatterns: [{ hostname: "lh3.googleusercontent.com" }],
  },
};

export default nextConfig;
