const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withMDX = createMDX({
  // Add MDX options here, if needed
});

module.exports = withMDX(nextConfig);
