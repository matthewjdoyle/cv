/** @type {import('next').NextConfig} */

// Use basePath only in production (not during local development)
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/webcv' : '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: isProd ? '/webcv/' : '',
  trailingSlash: true,
  // Make basePath available to client-side code
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
