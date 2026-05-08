export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinovaai.co";

export const ghlBookingUrl =
  process.env.GHL_BOOKING_URL ?? "https://api.leadconnectorhq.com/widget/booking/E6M09aZ0GebxIuwLiYnP";

export const bookingPagePath = "/book-demo";

export const servicePages = [
  {
    slug: "ai-front-desk",
    navTitle: "AI Front Desk",
    eyebrow: "AI FRONT DESK",
    title: "AI front desk for clinics that cannot afford to miss enquiries.",
    description:
      "We answer, qualify, route, and book inbound enquiries across the channels that matter, without forcing your team to manage new software.",
    pain:
      "A ready-to-book patient calls while your team is busy. No answer. No voicemail. They call the next clinic.",
    outcome: "Every call, message, and enquiry gets a fast, professional next step.",
    cta: "Build My AI Front Desk",
    meta:
      "Done-for-you AI front desk systems for clinics. Capture calls, messages, and booking enquiries without hiring more front-desk staff.",
    workflows: ["Missed-call text-back", "Inbound call qualification", "Booking routing", "SMS and email follow-up"],
  },
  {
    slug: "ai-reputation-engine",
    navTitle: "AI Reputation Engine",
    eyebrow: "AI REPUTATION ENGINE",
    title: "Turn patient trust into a repeatable review system.",
    description:
      "More happy patients should become public proof. More unhappy patients should be caught privately before the damage is public.",
    pain: "Happy patients leave quietly. Unhappy patients leave publicly. Without a review system, reputation becomes random.",
    outcome: "Review requests, private feedback capture, and trust-building follow-up run automatically.",
    cta: "Build My Review Engine",
    meta:
      "Automated review and reputation systems for clinics. Generate more patient reviews and capture negative feedback privately.",
    workflows: ["Post-appointment review requests", "Private feedback capture", "Google review routing", "Reputation reporting"],
  },
  {
    slug: "ai-reactivation-system",
    navTitle: "AI Reactivation System",
    eyebrow: "AI REACTIVATION SYSTEM",
    title: "Your past clients are one of the fastest paths to new revenue.",
    description:
      "We identify dormant patients, segment them by treatment history, and launch comeback campaigns that bring qualified patients back into the calendar.",
    pain: "Your database is full of past clients who would return if someone followed up with the right message at the right time.",
    outcome: "Dormant relationships become active appointment opportunities again.",
    cta: "Reactivate My Client List",
    meta:
      "AI client reactivation campaigns for clinics. Recover dormant patients with done-for-you SMS and email workflows.",
    workflows: ["Dormant patient segmentation", "Comeback offer campaigns", "Treatment-history messaging", "Booking follow-up"],
  },
  {
    slug: "ai-social-media-engine",
    navTitle: "AI Social Media Engine",
    eyebrow: "AI SOCIAL MEDIA ENGINE",
    title: "Turn social attention into clinic bookings.",
    description:
      "We support the workflows that turn comments, DMs, and content traffic into qualified appointment conversations.",
    pain: "Instagram and Facebook enquiries sit unread while competitors respond faster and book the appointment.",
    outcome: "Social conversations are captured, routed, followed up, and converted into consultations.",
    cta: "Turn My Social Into Bookings",
    meta:
      "AI social media and DM booking workflows for clinics. Convert Instagram and Facebook attention into booked appointments.",
    workflows: ["Instagram DM response", "Facebook message routing", "Comment-to-DM flows", "Social booking follow-up"],
  },
  {
    slug: "ai-ad-management",
    navTitle: "AI Ad Management",
    eyebrow: "AI AD MANAGEMENT",
    title: "Make paid traffic easier to convert after the click.",
    description:
      "Ads do not fail only because of creative. They fail because leads are not followed up fast enough. ClinovaAI connects ad traffic to booking workflows that respond immediately.",
    pain: "You pay for the lead, then the follow-up happens too slowly. The opportunity goes cold before it becomes a booking.",
    outcome: "Paid traffic gets instant response, qualification, reminders, and booking conversion support.",
    cta: "Fix My Ad Follow-Up",
    meta:
      "AI ad follow-up and booking workflows for clinics running Meta and Google traffic. Convert more paid leads into appointments.",
    workflows: ["Ad lead routing", "Instant SMS follow-up", "Qualification flows", "Booking recovery sequences"],
  },
  {
    slug: "ai-client-retention",
    navTitle: "AI Client Retention",
    eyebrow: "AI CLIENT RETENTION",
    title: "Keep patients engaged after the first treatment.",
    description:
      "We build automated retention sequences around post-treatment care, reminders, rebooking windows, seasonal offers, and loyalty moments.",
    pain: "A patient books once, has a good experience, then disappears because no one keeps the relationship warm.",
    outcome: "One-time patients receive timely, relevant follow-up that brings them back.",
    cta: "Improve My Retention",
    meta:
      "AI retention systems for clinics. Automate post-treatment follow-up, reminders, rebooking campaigns, and loyalty sequences.",
    workflows: ["Post-treatment care", "Rebooking reminders", "Birthday and seasonal offers", "Loyalty sequences"],
  },
  {
    slug: "website-ai-chatbot",
    navTitle: "Website + AI Chatbot",
    eyebrow: "WEBSITE + AI CHATBOT",
    title: "A clinic website should book appointments, not just look expensive.",
    description:
      "We build or upgrade clinic websites with clearer service journeys, AI chat, conversion copy, and booking paths designed to turn visitors into consultations.",
    pain: "Website visitors browse your services, hesitate, and leave without speaking to anyone.",
    outcome: "Your website becomes a 24/7 conversion asset with AI chat and clear booking paths.",
    cta: "Upgrade My Website",
    meta:
      "Conversion-focused clinic websites with AI chatbot and booking flows. Turn website visitors into qualified consultations.",
    workflows: ["Conversion copy", "AI chat support", "Service journey cleanup", "Booking CTA optimisation"],
  },
] as const;

export type ServicePage = (typeof servicePages)[number];

export const serviceBySlug: Map<string, ServicePage> = new Map(servicePages.map((service) => [service.slug, service]));

export const adCreatives = [
  "hf_20260507_070920_52ae316b-31d0-4299-a729-4c1dd92c6a6a.mp4",
  "hf_20260507_082310_ce870867-e66d-417e-b1a9-a8d1552090b9.mp4",
  "hf_20260507_085419_b5ae70af-e718-491b-9a17-47f938a05ab9.mp4",
  "hf_20260507_085434_a1dbfed9-4014-4be6-b11f-6c4fea1436f1.mp4",
  "hf_20260507_085500_061738bb-f6e2-43bd-8224-026697516bfe.mp4",
  "hf_20260507_090418_6ff65e42-a6b8-406a-8c88-4bf2df3c7c66.mp4",
] as const;

export const faqItems = [
  {
    question: "Is ClinovaAI software?",
    answer:
      "No. ClinovaAI is a done-for-you agency service powered by AI. We build, connect, monitor, and optimise the system for you. Your clinic does not need to learn another dashboard.",
  },
  {
    question: "What types of clinics is this for?",
    answer:
      "ClinovaAI is built for clinics with high-value appointments and inbound demand: aesthetic clinics, medical aesthetics, dental clinics, wellness clinics, private healthcare clinics, and multi-location clinic groups.",
  },
  {
    question: "Will my patients know they are talking to AI?",
    answer:
      "The system is configured around your tone and your preferred level of transparency. Some clinics want a seamless experience. Others prefer to disclose automation. We configure this during onboarding.",
  },
  {
    question: "How fast can this go live?",
    answer:
      "Most first systems can go live within days after onboarding, depending on the integrations required. More advanced systems with social, CRM, website, or multi-location workflows take longer, but we define the rollout clearly before work begins.",
  },
  {
    question: "Do I have to change my phone number, booking system, or CRM?",
    answer:
      "Usually no. We connect around your current tools wherever possible. If a tool is creating the bottleneck, we will tell you directly and recommend the simplest fix.",
  },
  {
    question: "What happens when the AI does not know the answer?",
    answer:
      "It does not guess. It captures the enquiry, asks for the right details, and escalates to your team with context. We also review real conversations and improve the system over time.",
  },
  {
    question: "What does the 30-day guarantee mean?",
    answer:
      "Before launch, we agree on measurable targets. If there is no measurable improvement within 30 days, we keep working at no charge until improvement is achieved.",
  },
  {
    question: "What about privacy and compliance?",
    answer:
      "Every implementation is built with auditability, access control, and claim safety in mind. We do not let automations make claims your clinic cannot support. For regulated workflows, we configure the system around your region, clinic policies, and legal requirements.",
  },
  {
    question: "Can this work for multiple locations?",
    answer:
      "Yes. The Clinic Dominance System supports multiple locations with location-specific workflows and unified reporting.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You can cancel with notice based on the agreement. Your clinic data, reporting, and relevant assets are handed over. We earn the relationship through performance, not lock-in.",
  },
] as const;
