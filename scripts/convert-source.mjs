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

const patchLanding = (body) =>
  body
    .replace('<a class="nav-logo" href="#">', '<a class="nav-logo" href="/">')
    .replace('<a class="nav-link" href="#pricing">Pricing</a>\n    <a class="nav-link" href="#faq">FAQ</a>', '<a class="nav-link" href="#pricing">Pricing</a>\n    <a class="nav-link" href="/about">About</a>\n    <a class="nav-link" href="#faq">FAQ</a>')
    .replace('Your clinic is losing<br><em>£21,000 every month.</em><br>We stop that.', 'Your clinic is losing<br><em>£10,000 to £30,000 every month.</em><br>We stop that.')
    .replace('<div class="problem-stat-number danger">£21,000</div>\n          <div class="problem-stat-label">Average monthly revenue lost by aesthetic clinics from missed calls alone</div>', '<div class="problem-stat-number danger">£10k–£30k</div>\n          <div class="problem-stat-label">Typical monthly revenue at risk when high-intent enquiries go unanswered</div>')
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
    .replaceAll('onclick="document.getElementById(\'how\').scrollIntoView()"', 'data-scroll-target="how"');

const patchAbout = (body) =>
  body
    .replaceAll('href="Landing Page.html#services"', 'href="/#services"')
    .replaceAll('href="Landing Page.html#pricing"', 'href="/#pricing"')
    .replaceAll('href="Landing Page.html#faq"', 'href="/#faq"')
    .replaceAll('href="Landing Page.html"', 'href="/"')
    .replace('<button class="btn-primary" style="font-size:13px; padding:18px 40px;">Book a Discovery Call ↗</button>', '<button class="btn-primary" onclick="document.getElementById(\'about-cta\').scrollIntoView()" style="font-size:13px; padding:18px 40px;">Book a Discovery Call ↗</button>')
    .replaceAll('href="#"', 'href="/about"')
    .replaceAll('src="uploads/ProfilePic.jpg"', 'src="/uploads/ProfilePic.jpg"')
    .replaceAll('onclick="document.getElementById(\'about-cta\').scrollIntoView()"', 'data-scroll-target="about-cta"');

const patchBrandKit = (body) =>
  body
    .replace('<div class="layout">', '<div class="layout design-system-layout">')
    .replace("The <em>clients you're losing</em> aren't going elsewhere. They're just going unanswered.", "The <em>clients you're losing</em> need treatment now. If you don't answer, your competitor will.");

mkdirSync(generatedRoot, { recursive: true });
mkdirSync(join(projectRoot, "public", "uploads"), { recursive: true });
copyFileSync(join(sourceRoot, "uploads", "ProfilePic.jpg"), join(projectRoot, "public", "uploads", "ProfilePic.jpg"));

const landing = extract("Landing Page.html");
const about = extract("About.html");
const brandKit = extract("Brand Kit.html");

const contents = `export const landingPage = {
  css: \`${escapeTemplate(withFontVars(landing.css))}\`,
  body: \`${escapeTemplate(patchLanding(landing.body))}\`,
} as const;

export const aboutPage = {
  css: \`${escapeTemplate(withFontVars(about.css))}\`,
  body: \`${escapeTemplate(patchAbout(about.body))}\`,
} as const;

export const brandKitPage = {
  css: \`${escapeTemplate(withFontVars(brandKit.css))}\`,
  body: \`${escapeTemplate(patchBrandKit(brandKit.body))}\`,
} as const;
`;

writeFileSync(join(generatedRoot, "pages.ts"), contents);
