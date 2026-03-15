const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false, // This hides the activity indicator (lightning bolt/globe)
    buildActivityPosition: 'bottom-right', // Or you can just move it!
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
