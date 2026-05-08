"use client";

type TrackOptions = {
  eventId?: string;
  customData?: Record<string, unknown>;
  sendServer?: boolean;
  custom?: boolean;
};

declare global {
  interface Window {
    fbq?: (command: string, eventName: string, parameters?: Record<string, unknown>, options?: { eventID?: string }) => void;
  }
}

const createEventId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export function trackEvent(eventName: string, options: TrackOptions = {}) {
  if (typeof window === "undefined") return;

  const eventId = options.eventId ?? createEventId();
  const customData = options.customData ?? {};

  window.fbq?.(options.custom ? "trackCustom" : "track", eventName, customData, { eventID: eventId });

  if (options.sendServer === false) return;

  void fetch("/api/meta/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventId,
      customData,
      eventSourceUrl: window.location.href,
    }),
    keepalive: true,
  }).catch(() => undefined);
}

export function persistAttributionFromUrl() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];
  const stored: Record<string, string> = {};

  attributionKeys.forEach((key) => {
    const value = params.get(key);
    if (value) stored[key] = value;
  });

  if (Object.keys(stored).length > 0) {
    window.localStorage.setItem("clinova_attribution", JSON.stringify(stored));
  }
}

export function getAttributionParams() {
  if (typeof window === "undefined") return new URLSearchParams();

  const params = new URLSearchParams();
  const raw = window.localStorage.getItem("clinova_attribution");
  if (!raw) return params;

  try {
    const parsed = JSON.parse(raw) as Record<string, string>;
    Object.entries(parsed).forEach(([key, value]) => {
      params.set(key, value);
    });
  } catch {
    return params;
  }

  return params;
}
