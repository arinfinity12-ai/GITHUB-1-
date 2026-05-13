import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? '/GITHUB-1-' : '',
  assetPrefix: isProd ? '/GITHUB-1-/' : '',
}

export default nextConfig
