"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { persistAttributionFromUrl, trackEvent } from "@/lib/analytics";

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1889417841726527";

function MetaPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    persistAttributionFromUrl();
    window.fbq?.("track", "PageView");

    const contentRoutes = ["/", "/calculator", "/book-demo", "/founding-cohort"];
    if (contentRoutes.includes(pathname) || pathname.startsWith("/services/")) {
      trackEvent("ViewContent", {
        customData: { content_name: pathname === "/" ? "home" : pathname },
        sendServer: false,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function MetaPixel() {
  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
        `}
      </Script>
      <Suspense fallback={null}>
        <MetaPixelEvents />
      </Suspense>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
