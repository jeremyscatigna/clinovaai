import { landingPage } from "@/generated/pages";

const extraCss = `

/* ClinovaAI managed growth system additions */
.nav-link[href="/calculator"] {
  color: var(--cream);
}
.calculator {
  position: relative;
  padding: 112px 0;
  background: linear-gradient(180deg, var(--dark) 0%, #0A100E 100%);
  overflow: hidden;
}
.calculator::before {
  content: "";
  position: absolute;
  inset: 14% auto auto 50%;
  width: 760px;
  height: 760px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(12,158,143,0.14) 0%, transparent 62%);
  pointer-events: none;
}
.calculator-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1fr);
  gap: 56px;
  align-items: center;
}
.calculator-copy h2,
.page-hero h1,
.legal-page h1 {
  font-family: var(--serif);
  font-size: clamp(42px, 6vw, 78px);
  line-height: 0.95;
  letter-spacing: -0.045em;
  color: var(--white);
  margin: 0 0 26px;
}
.calculator-copy p,
.page-hero p,
.legal-page p {
  color: var(--cream-dim);
  font-size: 17px;
  line-height: 1.8;
  margin: 0;
}
.calculator-card {
  position: relative;
  padding: 34px;
  background: rgba(22,32,25,0.82);
  border: 1px solid var(--rule);
  box-shadow: 0 34px 80px rgba(0,0,0,0.34);
}
.calculator-field {
  margin-bottom: 28px;
}
.calculator-label {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 14px;
  color: var(--cream);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.calculator-value {
  color: var(--teal);
  font-family: var(--serif);
  font-size: 21px;
  letter-spacing: 0;
  text-transform: none;
}
.calculator-range {
  width: 100%;
  accent-color: var(--teal);
}
.calculator-select {
  width: 100%;
  padding: 15px 16px;
  color: var(--white);
  background: rgba(8,12,11,0.78);
  border: 1px solid var(--rule);
  border-radius: 0;
  font: inherit;
}
.calculator-output {
  margin-top: 30px;
  padding: 26px;
  border: 1px solid rgba(12,158,143,0.28);
  background: rgba(12,158,143,0.08);
}
.calculator-kicker {
  margin-bottom: 8px;
  color: var(--cream-dim);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.calculator-number {
  font-family: var(--serif);
  color: var(--teal);
  font-size: clamp(44px, 7vw, 74px);
  line-height: 0.95;
  letter-spacing: -0.04em;
}
.calculator-annual {
  margin-top: 10px;
  color: var(--cream);
  font-size: 14px;
}
.calculator-note {
  margin: 18px 0 26px;
  color: var(--cream-dim);
  font-size: 13px;
  line-height: 1.65;
}
.leak-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 54px;
}
.leak-card,
.infrastructure-card,
.media-card,
.legal-card {
  padding: 28px;
  background: rgba(22,32,25,0.68);
  border: 1px solid var(--rule);
}
.leak-card h3,
.infrastructure-card h3,
.media-card h3,
.legal-card h2 {
  margin: 0 0 12px;
  color: var(--white);
  font-family: var(--serif);
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.02em;
}
.leak-card p,
.infrastructure-card p,
.media-card p,
.legal-card p,
.legal-card li {
  margin: 0;
  color: var(--cream-dim);
  font-size: 14px;
  line-height: 1.7;
}
.creative-gallery-shell {
  position: relative;
  overflow: hidden;
  padding: clamp(42px, 6vw, 78px);
}
.creative-gallery-shell::before {
  content: "";
  position: absolute;
  top: -20%;
  right: -12%;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(184,147,90,0.18), transparent 64%);
  pointer-events: none;
}
.creative-gallery-header {
  position: relative;
  max-width: 820px;
  margin: 0 auto 54px;
  text-align: center;
}
.creative-gallery-header h2 {
  margin: 0 0 20px;
  color: var(--white);
  font-family: var(--serif);
  font-size: clamp(42px, 6.5vw, 82px);
  font-weight: 500;
  line-height: 0.96;
  letter-spacing: -0.05em;
}
.creative-gallery-header p {
  margin: 0 auto;
  max-width: 720px;
  color: var(--cream-dim);
  font-size: 16px;
  line-height: 1.78;
}
.media-masonry {
  position: relative;
  column-count: 4;
  column-gap: 20px;
}
.media-card {
  display: inline-block;
  width: 100%;
  margin: 0 0 20px;
  padding: 8px;
  break-inside: avoid;
  overflow: hidden;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255,248,232,0.08), rgba(255,248,232,0.02)),
    rgba(8,12,11,0.88);
  border: 1px solid rgba(235,216,176,0.18);
  box-shadow: 0 18px 50px rgba(0,0,0,0.28);
  transform: translateY(var(--lift, 0));
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
}
.media-card:hover {
  border-color: rgba(235,216,176,0.36);
  background:
    linear-gradient(180deg, rgba(255,248,232,0.12), rgba(255,248,232,0.03)),
    rgba(8,12,11,0.9);
  box-shadow: 0 26px 80px rgba(0,0,0,0.38);
  transform: translateY(calc(var(--lift, 0) - 6px));
}
.media-card:nth-child(4n + 2) { --lift: 22px; }
.media-card:nth-child(5n + 3) { --lift: 8px; }
.media-card:nth-child(6n + 4) { --lift: 34px; }
.media-video-frame {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  aspect-ratio: 9 / 16;
  background:
    radial-gradient(circle at 50% 16%, rgba(184,147,90,0.22), transparent 34%),
    linear-gradient(145deg, rgba(12,158,143,0.18), rgba(8,12,11,0.96));
}
.media-video-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 44%, rgba(0,0,0,0.42) 100%);
  pointer-events: none;
}
.media-card:nth-child(6n + 2) .media-video-frame { aspect-ratio: 9 / 14; }
.media-card:nth-child(7n + 4) .media-video-frame { aspect-ratio: 4 / 5; }
.media-video-frame video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.001);
  transition: transform 320ms ease, filter 320ms ease;
}
.media-card:hover .media-video-frame video {
  transform: scale(1.045);
  filter: saturate(1.08) contrast(1.04);
}
.media-play-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 11px 8px 9px;
  border-radius: 999px;
  color: var(--dark);
  background: rgba(255,248,232,0.92);
  box-shadow: 0 14px 34px rgba(0,0,0,0.28);
  font-family: var(--sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  pointer-events: none;
  transition: transform 220ms ease, opacity 220ms ease;
}
.media-play-badge::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid var(--teal-dark);
}
.media-card:hover .media-play-badge {
  transform: translateY(-3px);
}
.media-card-caption {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 13px 8px 5px;
}
.media-card-caption h3 {
  margin: 0;
  color: var(--cream);
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
}
.media-card-caption span {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 24px;
  border-radius: 999px;
  color: var(--teal-dark);
  background: rgba(235,216,176,0.82);
  font-family: var(--serif);
  font-size: 15px;
  line-height: 1;
}
.creative-gallery-cta {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 42px;
}
.booking-frame {
  min-height: 760px;
  width: 100%;
  border: 1px solid var(--rule);
  background: rgba(255,255,255,0.96);
}
.page-hero {
  position: relative;
  padding: 150px 0 86px;
  background: radial-gradient(circle at 78% 14%, rgba(12,158,143,0.18), transparent 34%), var(--dark);
}
.page-section {
  padding: 96px 0;
  background: var(--dark);
}
.service-detail-grid,
.infrastructure-grid,
.legal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.service-detail-grid {
  margin-top: 42px;
}
.workflow-list {
  display: grid;
  gap: 12px;
  padding: 0;
  margin: 22px 0 0;
  list-style: none;
}
.workflow-list li {
  padding: 13px 14px;
  color: var(--cream);
  background: rgba(8,12,11,0.48);
  border: 1px solid var(--rule);
  font-size: 13px;
}
.legal-page {
  padding: 150px 0 96px;
  background: var(--dark);
}
.legal-grid {
  grid-template-columns: minmax(0, 1fr);
  margin-top: 42px;
}
.legal-card ul {
  margin: 16px 0 0;
  padding-left: 20px;
}
.ghl-fallback {
  margin-top: 16px;
  text-align: center;
}
@media (max-width: 900px) {
  .nav-link[href="/calculator"] {
    display: inline-flex;
    margin-right: 14px;
  }
  .calculator,
  .page-section { padding: 86px 0; }
  .calculator-grid,
  .leak-grid,
  .service-detail-grid,
  .infrastructure-grid {
    grid-template-columns: 1fr;
  }
  .calculator-card { padding: 28px 24px; }
  .page-hero { padding: 118px 0 72px; }
  .booking-frame { min-height: 690px; }
  .media-masonry { column-count: 3; }
}
@media (max-width: 560px) {
  .calculator,
  .page-section { padding: 72px 0; }
  .calculator-copy h2,
  .page-hero h1,
  .legal-page h1 { font-size: clamp(34px, 10vw, 44px); }
  .calculator-card,
  .leak-card,
  .infrastructure-card,
  .legal-card { padding: 24px 20px; }
  .creative-gallery-shell { padding: 34px 18px; }
  .creative-gallery-header { margin-bottom: 32px; }
  .media-masonry {
    column-count: 2;
    column-gap: 10px;
  }
  .media-card {
    margin-bottom: 10px;
    padding: 7px;
    border-radius: 18px;
    --lift: 0 !important;
  }
  .media-video-frame { border-radius: 13px; }
  .media-play-badge {
    top: 8px;
    right: 8px;
    padding: 7px 9px 7px 8px;
    font-size: 8px;
    letter-spacing: 0.1em;
  }
  .media-card-caption {
    padding: 10px 3px 1px;
  }
  .media-card-caption h3 {
    font-size: 10px;
    letter-spacing: -0.01em;
  }
  .media-card-caption span {
    min-width: 25px;
    height: 21px;
    font-size: 13px;
  }
}
`;

export function MarketingStyles() {
  return <style dangerouslySetInnerHTML={{ __html: `${landingPage.css}${extraCss}` }} />;
}
