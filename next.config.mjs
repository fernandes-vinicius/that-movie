/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
    // Disable image optimization on production for reduces cost from Vercel resources
    unoptimized: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
