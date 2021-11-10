// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  // https://zenn.dev/cti1650/articles/81016618ec5a87#next.config.js-%E8%BF%BD%E8%A8%98
  assetPrefix: './',
  future: { strictPostcssConfiguration: true },
  pageExtensions: ['page.tsx', 'page.ts'],
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
