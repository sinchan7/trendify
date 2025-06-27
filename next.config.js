/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.formula1.com',
        port: '',
        pathname: '/**',
      }
    ],
    domains: [
      'images.unsplash.com',
      'media.formula1.com',
      'www.formula1.com'
    ],
  },
};

module.exports = nextConfig; 