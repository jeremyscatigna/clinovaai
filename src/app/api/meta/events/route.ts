import { NextRequest, NextResponse } from "next/server";

type MetaEventPayload = {
  eventName?: string;
  eventId?: string;
  customData?: Record<string, unknown>;
  eventSourceUrl?: string;
};

const datasetId = process.env.META_DATASET_ID;
const accessToken = process.env.META_ACCESS_TOKEN;
const testEventCode = process.env.META_TEST_EVENT_CODE;

export async function POST(request: NextRequest) {
  if (!datasetId || !accessToken) {
    return NextResponse.json({ skipped: true, reason: "Meta CAPI is not configured" });
  }

  const payload = (await request.json()) as MetaEventPayload;
  if (!payload.eventName || !payload.eventId) {
    return NextResponse.json({ error: "eventName and eventId are required" }, { status: 400 });
  }

  const userAgent = request.headers.get("user-agent") ?? undefined;
  const ipAddress =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    undefined;

  const body = {
    data: [
      {
        event_name: payload.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: payload.eventId,
        action_source: "website",
        event_source_url: payload.eventSourceUrl,
        user_data: {
          client_ip_address: ipAddress,
          client_user_agent: userAgent,
        },
        custom_data: payload.customData ?? {},
      },
    ],
    ...(testEventCode ? { test_event_code: testEventCode } : {}),
  };

  const response = await fetch(`https://graph.facebook.com/v20.0/${datasetId}/events?access_token=${accessToken}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Meta CAPI request failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
