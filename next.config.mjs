/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/harrypotter/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.wizardingworld.com',
        port: '',
        pathname: '/images/products/books/UK/**',
      }
    ],
  },
};

export default nextConfig;
