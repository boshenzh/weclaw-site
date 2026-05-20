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
