"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ScheduleTracker() {
  useEffect(() => {
    trackEvent("Schedule", {
      customData: { content_name: "GoHighLevel confirmed booking redirect" },
    });
  }, []);

  return null;
}
