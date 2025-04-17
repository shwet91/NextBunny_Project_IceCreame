/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
  env: {
    // This will be different on each build
    BUILD_VERSION: Date.now().toString(),
  },
};

export default nextConfig;
