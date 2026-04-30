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
    .replace('<a class="footer-link" href="#">About</a>', '<a class="footer-link" href="/about">About</a>')
    .replace('<a class="footer-link" href="#">Results</a>', '<a class="footer-link" href="#results">Results</a>')
    .replace('<a class="footer-link" href="#">Pricing</a>', '<a class="footer-link" href="#pricing">Pricing</a>');

const patchAbout = (body) =>
  body
    .replaceAll('href="Landing Page.html#services"', 'href="/#services"')
    .replaceAll('href="Landing Page.html#pricing"', 'href="/#pricing"')
    .replaceAll('href="Landing Page.html#faq"', 'href="/#faq"')
    .replaceAll('href="Landing Page.html"', 'href="/"')
    .replaceAll('href="#"', 'href="/about"')
    .replaceAll('src="uploads/ProfilePic.jpg"', 'src="/uploads/ProfilePic.jpg"');

const patchBrandKit = (body) => body.replace('<div class="layout">', '<div class="layout design-system-layout">');

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
