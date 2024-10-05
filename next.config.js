/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
      },
      output: "export", // Enables static exports
    reactStrictMode: true,
};

module.exports = nextConfig;