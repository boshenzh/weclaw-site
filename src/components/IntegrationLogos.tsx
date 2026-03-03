'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const integrations = [
  { name: '飞书', logo: '/logos/feishu.svg' },
  { name: '钉钉', logo: '/logos/dingding.svg' },
  { name: '企业微信', logo: '/logos/wecom.svg' },
  { name: 'QQ', logo: '/logos/qq.svg' },
  { name: 'Telegram', logo: '/logos/telegram.svg' },
  { name: 'Slack', logo: '/logos/slack.svg' },
  { name: 'Notion', logo: '/logos/notion.svg' },
  { name: 'Gmail', logo: 'https://cdn.simpleicons.org/gmail/EA4335' },
  { name: 'WhatsApp', logo: 'https://cdn.simpleicons.org/whatsapp/25D366' },
  { name: 'Discord', logo: 'https://cdn.simpleicons.org/discord/5865F2' },
  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Calendar', logo: 'https://cdn.simpleicons.org/googlecalendar/4285F4' },
];

export default function IntegrationLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;
      const maxScroll = scrollContainer.scrollWidth / 2;

      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          支持的集成平台
        </h2>
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 whitespace-nowrap"
            style={{ width: 'fit-content' }}
          >
            {/* 重复三次以实现无缝滚动 */}
            {[...integrations, ...integrations, ...integrations].map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="inline-flex flex-col items-center justify-center min-w-[140px] p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
