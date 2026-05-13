import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  outputFileTracingRoot: '/home/user/GITHUB-1-/site',
  /* Output standalone per Docker/Railway */
  output: 'standalone',
}

export default nextConfig
