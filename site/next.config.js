/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'S2S Solutions',
    description: 'The official registry for S2S Solutions workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https:/s2ssolutions.github.io/kasm-registry/',
    contactUrl: 'support@s2susa.com',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
