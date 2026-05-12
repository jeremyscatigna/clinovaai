# ClinovaAI Meta Ads Setup

## Status

Vercel is configured for site tracking:

- `NEXT_PUBLIC_SITE_URL=https://clinovaai.co`
- `NEXT_PUBLIC_META_PIXEL_ID=1889417841726527`
- `GHL_BOOKING_URL=https://api.leadconnectorhq.com/widget/bookings/lost-revenue-audit-9656`

The local Meta Ads CLI environment is installed at:

```bash
.venv-meta-ads/bin/meta-ads
```

Important: the PyPI package `meta-ads-cli==0.1.0` is isolated in `.venv-meta-ads`, but it does **not** match the full official command tree shown in Meta's announcement (`meta ads campaign ...`). It should not be used to mutate a real ad account until credentials and command compatibility are confirmed.

## Required Meta Credentials

To complete live account setup, we still need:

- `META_ACCESS_TOKEN`
- `META_AD_ACCOUNT_ID`
- `META_PAGE_ID`
- Meta Business Manager access to the ClinovaAI ad account
- Meta Page connected to the ad account
- Pixel `1889417841726527` connected to the ad account and GoHighLevel calendar
- Payment method and spending limit configured in Meta Business Manager

Do not commit real token values.

## Local CLI Environment

Create a local, untracked `.env` only when credentials are available:

```bash
META_ACCESS_TOKEN=
META_AD_ACCOUNT_ID=
META_PAGE_ID=
META_API_VERSION=v21.0
```

Validate the paused launch config:

```bash
.venv-meta-ads/bin/meta-ads validate --config ads/meta/clinova-launch-paused.yaml
```

Dry-run the campaign creation:

```bash
.venv-meta-ads/bin/meta-ads create --config ads/meta/clinova-launch-paused.yaml --dry-run --yes
```

Live creation, only after final approval:

```bash
.venv-meta-ads/bin/meta-ads create --config ads/meta/clinova-launch-paused.yaml --yes
```

The config creates objects in `PAUSED` status. Activation should be done only after final creative, tracking, and budget approval.

## Launch Campaign Structure

Cold traffic:

- Revenue leakage creative -> `/calculator`
- Direct demo creative -> `/book-demo`

Core UTM template:

```text
utm_source=meta&utm_medium=paid_social&utm_campaign=clinic_growth_launch&utm_content={{ad.name}}
```

## GoHighLevel

In GoHighLevel calendar/widget settings:

- Add Meta Pixel ID `1889417841726527`
- Use `/thank-you` as the post-booking redirect if supported
- Confirm booking submissions are visible in Meta Events Manager

## Before Spending

- Verify Pixel events in Meta Events Manager
- Verify GoHighLevel iframe loads on `/book-demo`
- Verify `/thank-you` fires `Schedule`
- Confirm domain verification for `clinovaai.co`
- Confirm the ad account payment method
- Confirm final 9:16 videos are hosted on R2 or Cloudflare Stream
- Replace placeholder image ads with final video/Reels creative in Ads Manager or the official CLI once compatible

