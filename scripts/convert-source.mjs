import { mkdirSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, "..");
const sourceRoot = "/Users/jeremyscatigna/Downloads/Clinova AI";
const generatedRoot = join(projectRoot, "src", "generated");

const escapeTemplate = (value) =>
  value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const extract = (fileName) => {
  const html = readFileSync(join(sourceRoot, fileName), "utf8");
  const css = html.split("<style>", 2)[1].split("</style>", 1)[0];
  const rawBody = html.split("<body>", 2)[1].split("</body>", 1)[0];
  const body = rawBody.split("<script>", 1)[0].trim();
  return { css, body };
};

const withFontVars = (css) =>
  css
    .replace(/--serif:\s*'Playfair Display', Georgia, serif;/g, "--serif: var(--font-playfair), Georgia, serif;")
    .replace(/--sans:\s*'DM Sans', system-ui, sans-serif;/g, "--sans: var(--font-dm-sans), system-ui, sans-serif;");

const landingResponsiveCss = `

/* Responsive refinement layer */
@media (max-width: 1100px) {
  .nav { padding: 0 32px; }
  .nav-links { gap: 22px; }
  .container,
  .container-wide { padding: 0 32px; }
  .problem-grid,
  .case-grid,
  .guarantee-inner { gap: 52px; }
  .pricing-card,
  .service-card,
  .step-card { padding-left: 32px; padding-right: 32px; }
}

@media (max-width: 900px) {
  body { font-size: 15px; }
  .nav {
    height: 66px;
    padding: 0 24px;
    background: rgba(8,12,11,0.96);
  }
  .nav-logo svg { width: 128px; height: auto; }
  .nav-links { gap: 0; }
  .nav-link { display: none; }
  .nav-link[href="/about"] {
    display: inline-flex;
    margin-right: 14px;
  }
  .nav-cta {
    padding: 10px 16px;
    font-size: 10px;
    letter-spacing: 0.08em;
    white-space: nowrap;
  }
  .container,
  .container-wide { padding: 0 24px; }
  .hero {
    min-height: auto;
    padding: 116px 24px 76px;
  }
  .hero-glow-1 {
    top: -180px;
    right: -260px;
    width: 520px;
    height: 520px;
  }
  .hero-glow-2 {
    bottom: -220px;
    left: -240px;
    width: 420px;
    height: 420px;
  }
  .hero-title {
    font-size: clamp(40px, 11vw, 58px);
    line-height: 0.98;
    letter-spacing: -0.04em;
    margin-bottom: 24px;
  }
  .hero-sub {
    font-size: 16px;
    line-height: 1.72;
    margin-bottom: 34px;
    max-width: 100%;
  }
  .hero-proof {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 18px;
    margin-top: 46px;
    padding-top: 34px;
  }
  .hero-proof-num { font-size: 31px; }
  .hero-proof-label { font-size: 11px; line-height: 1.45; }
  .ticker-strip { padding: 12px 0; }
  .ticker-item { padding: 0 24px; font-size: 10px; }
  .problem,
  .solution,
  .how,
  .pricing,
  .case-study,
  .guarantee,
  .faq,
  .final-cta { padding: 86px 0; }
  .problem-grid,
  .case-grid,
  .guarantee-inner {
    grid-template-columns: 1fr;
    gap: 42px;
  }
  .problem-copy { order: -1; }
  .problem-copy h2,
  .solution-header h2,
  .how-header h2,
  .pricing-header h2,
  .guarantee-copy h2,
  .faq-header h2,
  .final-cta h2 {
    font-size: clamp(34px, 9vw, 46px);
    line-height: 1.05;
  }
  .problem-stat-card { padding: 26px 24px; }
  .problem-stat-number { font-size: 40px; }
  .solution-header,
  .how-header,
  .pricing-header,
  .faq-header { margin-bottom: 48px; }
  .services-grid,
  .steps-grid,
  .pricing-grid,
  .trust-grid,
  .footer-grid { grid-template-columns: 1fr; }
  .service-card,
  .step-card,
  .pricing-card,
  .trust-card { padding: 34px 26px; }
  .pricing-card.featured { transform: none; }
  .pricing-amount { font-size: 43px; }
  .case-study-inner { padding: 42px 28px; }
  .case-stats { grid-template-columns: 1fr; }
  .guarantee-badge { justify-self: start; }
  .guarantee-badge svg { width: 132px; height: 132px; }
  .faq-q { padding: 24px 22px; font-size: 16px; gap: 18px; }
  .faq-a-inner { padding: 0 22px 24px; }
  .final-cta::before {
    width: 520px;
    height: 520px;
  }
  .footer { padding: 56px 0 34px; }
  .footer-grid { gap: 34px; margin-bottom: 46px; }
  .footer-bottom { align-items: flex-start; }
}

@media (max-width: 560px) {
  .nav { padding: 0 18px; }
  .nav-logo svg { width: 116px; }
  .nav-cta { padding: 9px 12px; font-size: 9px; }
  .container,
  .container-wide { padding: 0 20px; }
  .hero { padding: 104px 20px 64px; }
  .eyebrow {
    font-size: 9px;
    letter-spacing: 0.18em;
    gap: 10px;
    margin-bottom: 18px;
  }
  .eyebrow::before { width: 22px; }
  .hero-title { font-size: clamp(38px, 11.5vw, 48px); }
  .btn-row { width: 100%; gap: 12px; }
  .btn-primary,
  .btn-outline,
  .pricing-cta {
    width: 100%;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  .hero-proof {
    grid-template-columns: 1fr 1fr;
    gap: 22px 14px;
  }
  .hero-proof-num { font-size: 28px; }
  .problem,
  .solution,
  .how,
  .pricing,
  .case-study,
  .guarantee,
  .faq,
  .final-cta { padding: 72px 0; }
  .problem-copy h2,
  .solution-header h2,
  .how-header h2,
  .pricing-header h2,
  .guarantee-copy h2,
  .faq-header h2,
  .final-cta h2 { font-size: clamp(32px, 10vw, 40px); }
  .service-card,
  .step-card,
  .pricing-card,
  .trust-card,
  .problem-stat-card { padding: 28px 22px; }
  .step-num { font-size: 64px; top: 18px; right: 20px; }
  .pricing-amount { font-size: 36px; }
  .case-study-inner { padding: 34px 22px; }
  .case-stat-num { font-size: 42px; }
  .guarantee-inner { text-align: left; }
  .final-cta p { margin-bottom: 34px; }
}
`;

const aboutResponsiveCss = `

/* Responsive refinement layer */
@media (max-width: 1100px) {
  .nav { padding: 0 32px; }
  .nav-links { gap: 22px; }
  .container { padding: 0 32px; }
  .about-hero-grid,
  .story-grid,
  .expertise-inner { gap: 56px; }
}

@media (max-width: 900px) {
  body { font-size: 15px; }
  .nav {
    height: 66px;
    padding: 0 24px;
    background: rgba(8,12,11,0.96);
  }
  .nav a svg { width: 128px; height: auto; }
  .nav-links { gap: 0; }
  .nav-link { display: none; }
  .nav-link.active {
    display: inline-flex;
    margin-right: 14px;
  }
  .nav-cta {
    padding: 10px 16px;
    font-size: 10px;
    letter-spacing: 0.08em;
    white-space: nowrap;
  }
  .container { padding: 0 24px; }
  .about-hero {
    padding: 116px 24px 76px;
  }
  .hero-glow {
    top: -190px;
    right: -260px;
    width: 520px;
    height: 520px;
  }
  .about-hero-grid,
  .story-grid,
  .expertise-inner {
    grid-template-columns: 1fr;
    gap: 44px;
  }
  .about-hero h1,
  .story-copy h2,
  .different-header h2,
  .expertise-copy h2,
  .about-cta h2 {
    font-size: clamp(36px, 9vw, 50px);
    line-height: 1.04;
  }
  .about-hero-sub {
    font-size: 16px;
    max-width: 100%;
    margin-bottom: 34px;
  }
  .founder-photo-wrap {
    max-width: 480px;
    width: 100%;
  }
  .cred-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .cred-item {
    padding: 30px 24px;
    border-right: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
  }
  .story,
  .different,
  .expertise,
  .promise,
  .about-cta { padding: 86px 0; }
  .different-header { margin-bottom: 48px; }
  .diff-grid,
  .expertise-logos {
    grid-template-columns: 1fr;
  }
  .diff-card,
  .expertise-logo-card { padding: 34px 26px; }
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 26px 0;
  }
  .promise-inner { padding: 0 24px; }
  .promise-quote { font-size: clamp(26px, 7vw, 36px); }
  .about-cta::before {
    width: 520px;
    height: 520px;
  }
  .footer { padding: 42px 24px; }
  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 560px) {
  .nav { padding: 0 18px; }
  .nav a svg { width: 116px; }
  .nav-cta { padding: 9px 12px; font-size: 9px; }
  .container { padding: 0 20px; }
  .about-hero { padding: 104px 20px 64px; }
  .eyebrow {
    font-size: 9px;
    letter-spacing: 0.18em;
    gap: 10px;
    margin-bottom: 18px;
  }
  .eyebrow::before { width: 22px; }
  .about-hero h1,
  .story-copy h2,
  .different-header h2,
  .expertise-copy h2,
  .about-cta h2 { font-size: clamp(32px, 10vw, 42px); }
  .btn-row { width: 100%; gap: 12px; }
  .btn-primary,
  .btn-outline {
    width: 100%;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  .founder-credentials { padding: 22px 20px; }
  .founder-name { font-size: 19px; }
  .founder-title { font-size: 9px; line-height: 1.5; }
  .cred-grid { grid-template-columns: 1fr; }
  .cred-item {
    border-right: none;
    padding: 28px 22px;
  }
  .story,
  .different,
  .expertise,
  .promise,
  .about-cta { padding: 72px 0; }
  .diff-card,
  .expertise-logo-card { padding: 28px 22px; }
  .promise-inner { padding: 0 20px; }
  .about-cta p { margin-bottom: 34px; }
}
`;

const liveLogoCss = `

/* Live brand logo */
.brand-logo-mark {
  display: block;
  width: 58px;
  height: auto;
  filter: drop-shadow(0 0 18px rgba(184,147,90,0.12));
}
.footer .brand-logo-mark {
  width: 62px;
}
@media (max-width: 900px) {
  .brand-logo-mark { width: 46px; }
  .footer .brand-logo-mark { width: 54px; }
}
`;

const navLogo = '<img class="brand-logo-mark" src="/brand/clinova-logo-mark.png" alt="ClinovaAI" width="58" height="58">';
const footerLogo = '<img class="brand-logo-mark" src="/brand/clinova-logo-mark.png" alt="ClinovaAI" width="62" height="62">';
const bookingUrl = "https://calendly.com/clinova/lost-revenue-audit";

const removeLongDashes = (value) => value.replace(/[\u2013\u2014]/g, "-");

const replaceLiveLogos = (body) =>
  body
    .replace(/<svg viewBox="0 0 148 32" fill="none" width="148" height="32">[\s\S]*?<\/svg>/g, navLogo)
    .replace(/<svg viewBox="0 0 148 32" fill="none" width="130" height="30">[\s\S]*?<\/svg>/g, footerLogo)
    .replace(/<svg viewBox="0 0 148 32" fill="none" width="120" height="26">[\s\S]*?<\/svg>/g, footerLogo);

const linkBookingCtas = (body) =>
  body.replace(
    /<button([^>]*) data-scroll-target="(?:final-cta|about-cta)"([^>]*)>([\s\S]*?)<\/button>/g,
    `<a$1 href="${bookingUrl}" target="_blank" rel="noopener noreferrer"$2>$3</a>`,
  );

const patchLanding = (body) =>
  linkBookingCtas(
    replaceLiveLogos(body)
    .replace('<a class="nav-logo" href="#">', '<a class="nav-logo" href="/">')
    .replace('<a class="nav-link" href="#pricing">Pricing</a>\n    <a class="nav-link" href="#faq">FAQ</a>', '<a class="nav-link" href="#pricing">Pricing</a>\n    <a class="nav-link" href="/about">About</a>\n    <a class="nav-link" href="#faq">FAQ</a>')
    .replace('Your clinic is losing<br><em>£21,000 every month.</em><br>We stop that.', 'Your clinic is losing<br><em>£10,000 to £30,000 every month.</em><br>We stop that.')
    .replace('<div class="problem-stat-number danger">£21,000</div>\n          <div class="problem-stat-label">Average monthly revenue lost by aesthetic clinics from missed calls alone</div>', '<div class="problem-stat-number danger">£10k to £30k</div>\n          <div class="problem-stat-label">Typical monthly revenue at risk when high-intent enquiries go unanswered</div>')
    .replace("The clients you're losing aren't going elsewhere.<br><em>They're going unanswered.</em>", "These clients need treatment now.<br><em>If you don't answer, your competitor will.</em>")
    .replace("This happens <strong>eight times a day</strong> at the average aesthetic clinic. At £350 per treatment, that's <strong>over £21,000 every single month</strong> walking out the door. Not because your treatments aren't excellent. Not because your prices are wrong. Simply because no one was there to answer.", "This happens <strong>eight times a day</strong> at the average aesthetic clinic. At £350 per treatment, that can mean <strong>£10,000 to £30,000 every single month</strong> walking out the door. Not because your treatments aren't excellent. Not because your prices are wrong. Simply because no one was there to answer first.")
    .replace('Transparent pricing.<br><em>Measurable returns.</em>', 'Built around your clinic.<br><em>Scoped on a call.</em>')
    .replace("Every tier includes our 30-day results guarantee. If you don't see measurable improvement in captured bookings within 30 days, we keep working for free until you do.", "Pricing depends on your clinic, call volume, and the level of support you need. On a 30-minute call, we look at how your enquiries are currently handled, identify where you are losing patients, and map out what this would look like for your business.")
    .replace('<div class="pricing-tier">Tier 01</div>\n        <div class="pricing-name">Starter</div>\n        <div class="pricing-price">\n          <div class="pricing-amount">£200</div>\n          <div class="pricing-period">/ month</div>\n        </div>\n        <div class="pricing-setup">+ £500 one-time setup</div>', '<div class="pricing-tier">System 01</div>\n        <div class="pricing-name">Core Reception</div>\n        <div class="pricing-price">\n          <div class="pricing-amount">Custom</div>\n          <div class="pricing-period"> plan</div>\n        </div>\n        <div class="pricing-setup">Scoped after your discovery call</div>')
    .replace('<div class="pricing-tier">Tier 02</div>\n        <div class="pricing-name">Growth</div>\n        <div class="pricing-price">\n          <div class="pricing-amount">£400</div>\n          <div class="pricing-period">/ month</div>\n        </div>\n        <div class="pricing-setup">+ £1,000 one-time setup</div>', '<div class="pricing-tier">System 02</div>\n        <div class="pricing-name">Growth System</div>\n        <div class="pricing-price">\n          <div class="pricing-amount">Bespoke</div>\n          <div class="pricing-period"> scope</div>\n        </div>\n        <div class="pricing-setup">Matched to your call volume and support needs</div>')
    .replace('<div class="pricing-tier">Tier 03</div>\n        <div class="pricing-name">Full System</div>\n        <div class="pricing-price">\n          <div class="pricing-amount">£800</div>\n          <div class="pricing-period">/ month</div>\n        </div>\n        <div class="pricing-setup">+ £2,000 one-time setup</div>', '<div class="pricing-tier">System 03</div>\n        <div class="pricing-name">Full System</div>\n        <div class="pricing-price">\n          <div class="pricing-amount">Tailored</div>\n          <div class="pricing-period"> build</div>\n        </div>\n        <div class="pricing-setup">Quoted once we understand your clinic</div>')
    .replace('<p class="pricing-guarantee reveal">All prices exclude VAT · No long-term contracts · Cancel anytime · 30-day results guarantee on every tier</p>', '<p class="pricing-guarantee reveal">No public one-size-fits-all pricing · 30-minute discovery call · 30-day results guarantee on every system</p>')
    .replaceAll('<button class="pricing-cta">Get Started</button>', '<button class="pricing-cta" onclick="document.getElementById(\'final-cta\').scrollIntoView()">Get Started</button>')
    .replaceAll('<button class="pricing-cta featured-cta">Get Started</button>', '<button class="pricing-cta featured-cta" onclick="document.getElementById(\'final-cta\').scrollIntoView()">Get Started</button>')
    .replace('<button class="btn-primary" style="font-size:13px; padding:18px 40px;">Book a Discovery Call ↗</button>', '<button class="btn-primary" onclick="document.getElementById(\'final-cta\').scrollIntoView()" style="font-size:13px; padding:18px 40px;">Book a Discovery Call ↗</button>')
    .replace('<a class="footer-link" href="#">AI Receptionist</a>', '<a class="footer-link" href="#services">AI Receptionist</a>')
    .replace('<a class="footer-link" href="#">Google Review Automation</a>', '<a class="footer-link" href="#services">Google Review Automation</a>')
    .replace('<a class="footer-link" href="#">Client Re-engagement</a>', '<a class="footer-link" href="#services">Client Re-engagement</a>')
    .replace('<a class="footer-link" href="#">Website &amp; Chatbot</a>', '<a class="footer-link" href="#services">Website &amp; Chatbot</a>')
    .replace('<a class="footer-link" href="#">About</a>', '<a class="footer-link" href="/about">About</a>')
    .replace('<a class="footer-link" href="#">Results</a>', '<a class="footer-link" href="#results">Results</a>')
    .replace('<a class="footer-link" href="#">Pricing</a>', '<a class="footer-link" href="#pricing">Pricing</a>')
    .replace('<a class="footer-link" href="#">Contact</a>', '<a class="footer-link" href="#final-cta">Contact</a>')
    .replaceAll('onclick="document.getElementById(\'final-cta\').scrollIntoView()"', 'data-scroll-target="final-cta"')
    .replaceAll('onclick="document.getElementById(\'how\').scrollIntoView()"', 'data-scroll-target="how"'),
  );

const patchAbout = (body) =>
  linkBookingCtas(
    replaceLiveLogos(body)
    .replaceAll('href="Landing Page.html#services"', 'href="/#services"')
    .replaceAll('href="Landing Page.html#pricing"', 'href="/#pricing"')
    .replaceAll('href="Landing Page.html#faq"', 'href="/#faq"')
    .replaceAll('href="Landing Page.html"', 'href="/"')
    .replace('<button class="btn-primary" style="font-size:13px; padding:18px 40px;">Book a Discovery Call ↗</button>', '<button class="btn-primary" onclick="document.getElementById(\'about-cta\').scrollIntoView()" style="font-size:13px; padding:18px 40px;">Book a Discovery Call ↗</button>')
    .replaceAll('href="#"', 'href="/about"')
    .replaceAll('src="uploads/ProfilePic.jpg"', 'src="/uploads/ProfilePic.jpg"')
    .replaceAll('onclick="document.getElementById(\'about-cta\').scrollIntoView()"', 'data-scroll-target="about-cta"'),
  );

const patchBrandKit = (body) =>
  body
    .replace('<div class="layout">', '<div class="layout design-system-layout">')
    .replace("The <em>clients you're losing</em> aren't going elsewhere. They're just going unanswered.", "The <em>clients you're losing</em> need treatment now. If you don't answer, your competitor will.")
    .replace(/<button([^>]*)>(Book a (?:Call|Discovery Call)(?: ↗)?|Get Started)<\/button>/g, `<a$1 href="${bookingUrl}" target="_blank" rel="noopener noreferrer">$2</a>`);

mkdirSync(generatedRoot, { recursive: true });
mkdirSync(join(projectRoot, "public", "uploads"), { recursive: true });
copyFileSync(join(sourceRoot, "uploads", "ProfilePic.jpg"), join(projectRoot, "public", "uploads", "ProfilePic.jpg"));

const landing = extract("Landing Page.html");
const about = extract("About.html");
const brandKit = extract("Brand Kit.html");

const contents = `export const landingPage = {
  css: \`${escapeTemplate(removeLongDashes(`${withFontVars(landing.css)}${landingResponsiveCss}${liveLogoCss}`))}\`,
  body: \`${escapeTemplate(removeLongDashes(patchLanding(landing.body)))}\`,
} as const;

export const aboutPage = {
  css: \`${escapeTemplate(removeLongDashes(`${withFontVars(about.css)}${aboutResponsiveCss}${liveLogoCss}`))}\`,
  body: \`${escapeTemplate(removeLongDashes(patchAbout(about.body)))}\`,
} as const;

export const brandKitPage = {
  css: \`${escapeTemplate(removeLongDashes(withFontVars(brandKit.css)))}\`,
  body: \`${escapeTemplate(removeLongDashes(patchBrandKit(brandKit.body)))}\`,
} as const;
`;

writeFileSync(join(generatedRoot, "pages.ts"), contents);
