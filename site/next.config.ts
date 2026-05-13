import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* Ignora ESLint del progetto padre durante la build */
  eslint: { ignoreDuringBuilds: true },
  /* Radice corretta per monorepo con doppio lockfile */
  outputFileTracingRoot: '/home/user/GITHUB-1-/site',
}

export default nextConfig
