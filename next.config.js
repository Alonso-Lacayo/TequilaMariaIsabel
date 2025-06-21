/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tequila-maria-isabel.vercel.app'],
    unoptimized: true,
    formats: ['image/webp'],
  },
  output: 'standalone',
}

module.exports = nextConfig 