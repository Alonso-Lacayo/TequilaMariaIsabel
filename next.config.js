/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [],
  },
  output: 'standalone',
}

module.exports = nextConfig 