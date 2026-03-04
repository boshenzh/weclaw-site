'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const integrations = [
  { name: '飞书', logo: 'https://www.svgrepo.com/show/387897/lark.svg' },
  { name: '钉钉', logo: 'https://www.svgrepo.com/show/515907/dingtalk.svg' },
  { name: '企业微信', logo: 'https://www.svgrepo.com/show/303187/wechat-logo.svg' },
  { name: 'QQ', logo: 'https://www.svgrepo.com/show/342289/tencent-qq.svg' },
  { name: 'Telegram', logo: 'https://www.svgrepo.com/show/452115/telegram.svg' },
  { name: 'Slack', logo: 'https://www.svgrepo.com/show/474329/slack.svg' },
  { name: 'Notion', logo: 'https://www.svgrepo.com/show/361558/notion-logo.svg' },
  { name: 'Gmail', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' },
  { name: 'WhatsApp', logo: 'https://www.svgrepo.com/show/452133/whatsapp.svg' },
  { name: 'Discord', logo: 'https://www.svgrepo.com/show/353655/discord-icon.svg' },
  { name: 'GitHub', logo: 'https://www.svgrepo.com/show/512317/github-142.svg' },
  { name: 'Calendar', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg' },
];

const firstRow = integrations.slice(0, 6);
const secondRow = integrations.slice(6, 12);

export default function IntegrationLogos() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;

    let scrollPosition1 = 0;
    let scrollPosition2 = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition1 += scrollSpeed;
      scrollPosition2 += scrollSpeed;

      const maxScroll1 = scrollContainer1.scrollWidth / 2;
      const maxScroll2 = scrollContainer2.scrollWidth / 2;

      if (scrollPosition1 >= maxScroll1) {
        scrollPosition1 = 0;
      }
      if (scrollPosition2 >= maxScroll2) {
        scrollPosition2 = 0;
      }

      scrollContainer1.style.transform = `translateX(-${scrollPosition1}px)`;
      scrollContainer2.style.transform = `translateX(-${scrollPosition2}px)`;
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
        <div className="space-y-6">
          {/* First Row */}
          <div className="overflow-hidden">
            <div
              ref={scrollRef1}
              className="flex gap-8 whitespace-nowrap"
              style={{ width: 'fit-content' }}
            >
              {[...firstRow, ...firstRow, ...firstRow].map((integration, index) => (
                <div
                  key={`row1-${integration.name}-${index}`}
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

          {/* Second Row */}
          <div className="overflow-hidden">
            <div
              ref={scrollRef2}
              className="flex gap-8 whitespace-nowrap"
              style={{ width: 'fit-content' }}
            >
              {[...secondRow, ...secondRow, ...secondRow].map((integration, index) => (
                <div
                  key={`row2-${integration.name}-${index}`}
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
    </div>
  );
}
