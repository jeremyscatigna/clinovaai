"use client";

import { useEffect, useMemo, useState } from "react";
import { getAttributionParams, trackEvent } from "@/lib/analytics";
import { ghlBookingUrl } from "@/lib/site";

export function BookingEmbed() {
  const [attribution, setAttribution] = useState("");

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setAttribution(getAttributionParams().toString());
    });
    trackEvent("ViewContent", {
      customData: { content_name: "GoHighLevel booking embed" },
      sendServer: false,
    });
  }, []);

  const src = useMemo(() => {
    if (!attribution) return ghlBookingUrl;
    const separator = ghlBookingUrl.includes("?") ? "&" : "?";
    return `${ghlBookingUrl}${separator}${attribution}`;
  }, [attribution]);

  return (
    <div className="reveal reveal-delay-1">
      <iframe
        className="booking-frame"
        src={src}
        title="Book your ClinovaAI demo"
        loading="lazy"
        onLoad={() =>
          trackEvent("Lead", {
            customData: { content_name: "GoHighLevel booking embed loaded" },
          })
        }
      />
      <p className="ghl-fallback">
        <a
          className="footer-link"
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          data-track-event="Lead"
          data-track-content="ghl_direct_fallback"
        >
          Open booking page in a new tab
        </a>
      </p>
    </div>
  );
}
