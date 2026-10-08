import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/freight-ai-assistant',
        destination: '/en/freight-forwarder-ai-assistant',
        permanent: true,
      },
      {
        source: '/solutions/freight-forwarder-ai-assistant',
        destination: '/en/freight-forwarder-ai-assistant',
        permanent: true,
      },
      {
        source: '/compare/weclawd-vs-chatgpt',
        destination: '/en/weclawd-vs-chatgpt',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/boshenzh',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/boshenzh',
        permanent: true,
      },
      {
        source: '/@boshenzh',
        destination: 'https://x.com/boshenzh',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Sole robots source is src/app/robots/route.ts. public/robots.txt would be
      // served first and hide this rewrite, including the video sitemap line.
      {
        source: '/robots.txt',
        destination: '/robots',
      },
      {
        source: '/video-sitemap.xml',
        destination: '/video-sitemap',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;
