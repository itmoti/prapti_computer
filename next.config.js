/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/developed-by',
        destination: 'https://efadhemon.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
