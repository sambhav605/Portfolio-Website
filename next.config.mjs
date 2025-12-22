/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Add this new section:
  turbopack: {
    root: '.', 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig