import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import CtaTracker from "@/components/CtaTracker";
import SiteFooter from "@/components/SiteFooter";
import StickyContactBar from "@/components/StickyContactBar";

export default function RootHtml({
  lang,
  children,
}: {
  lang: "zh-CN" | "en";
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
      <body>
        {children}
        <SiteFooter />
        <div className="h-14 md:hidden" aria-hidden="true" />
        <StickyContactBar />
        <CtaTracker />
        <Analytics />
        <Script
          defer
          data-website-id="dfid_77Jlkrd1vIbFnBuTpU2a3"
          data-domain="weclawd.com"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        <Script id="baidu-push" strategy="afterInteractive">
          {`(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js';}else{bp.src='http://push.zhanzhang.baidu.com/push.js';}var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(bp,s);})();`}
        </Script>
      </body>
    </html>
  );
}
