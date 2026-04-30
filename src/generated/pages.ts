export const landingPage = {
  css: `
/* ── TOKENS ── */
:root {
  --teal:        #0C9E8F;
  --teal-light:  #13BBA9;
  --teal-dim:    #0A7A6E;
  --teal-glow:   rgba(12,158,143,0.2);
  --teal-subtle: rgba(12,158,143,0.07);
  --teal-border: rgba(12,158,143,0.18);
  --gold:        #B8935A;
  --gold-light:  #D4AE78;
  --dark:        #080C0B;
  --dark-2:      #0E1512;
  --dark-3:      #162019;
  --dark-4:      #1D2B27;
  --cream:       #F0E8DC;
  --cream-dim:   #C8BEB3;
  --white:       #F6F3F0;
  --rule:        rgba(240,232,220,0.07);
  --serif: var(--font-playfair), Georgia, serif;
  --sans: var(--font-dm-sans), system-ui, sans-serif;
  --red-soft:    #C47A7A;
}

/* ── RESET ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--dark);
  color: var(--cream);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }

/* ── SCROLL REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }
.reveal-delay-5 { transition-delay: 0.5s; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 200;
  height: 72px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 64px;
  background: rgba(8,12,11,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--rule);
  transition: background 0.3s;
}
.nav-logo svg { display: block; }
.nav-links { display: flex; gap: 36px; align-items: center; }
.nav-link {
  font-size: 13px; font-weight: 400;
  color: var(--cream-dim);
  letter-spacing: 0.02em;
  transition: color 0.2s;
}
.nav-link:hover { color: var(--cream); }
.nav-cta {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--teal); color: var(--dark);
  font-family: var(--sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 11px 24px; border-radius: 2px; border: none;
  cursor: pointer; transition: all 0.2s;
  box-shadow: 0 0 24px rgba(12,158,143,0.3);
}
.nav-cta:hover { background: var(--teal-light); box-shadow: 0 0 36px rgba(12,158,143,0.45); }

/* ── SECTIONS ── */
section { width: 100%; }
.container { max-width: 1160px; margin: 0 auto; padding: 0 64px; }
.container-wide { max-width: 1280px; margin: 0 auto; padding: 0 64px; }

/* ── EYEBROW ── */
.eyebrow {
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--teal); margin-bottom: 20px;
  display: flex; align-items: center; gap: 12px;
}
.eyebrow::before {
  content: '';
  display: block; width: 28px; height: 1px;
  background: var(--teal); opacity: 0.6;
}

/* ── BUTTONS ── */
.btn-primary {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--teal); color: var(--dark);
  font-family: var(--sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 16px 32px; border: none; border-radius: 2px;
  cursor: pointer; transition: all 0.22s;
  box-shadow: 0 0 32px rgba(12,158,143,0.28);
}
.btn-primary:hover { background: var(--teal-light); box-shadow: 0 0 48px rgba(12,158,143,0.45); transform: translateY(-1px); }
.btn-outline {
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; color: var(--cream);
  font-family: var(--sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 15px 32px; border: 1px solid rgba(240,232,220,0.2); border-radius: 2px;
  cursor: pointer; transition: all 0.22s;
}
.btn-outline:hover { border-color: var(--teal); color: var(--teal); }
.btn-row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }

/* ══════════════════════════════════════════ */
/* ── HERO ── */
/* ══════════════════════════════════════════ */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column; justify-content: center;
  padding: 140px 64px 100px;
  position: relative; overflow: hidden;
}
.hero-glow-1 {
  position: absolute; top: -20%; right: -10%;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(12,158,143,0.1) 0%, transparent 65%);
  pointer-events: none;
}
.hero-glow-2 {
  position: absolute; bottom: -30%; left: -10%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(184,147,90,0.06) 0%, transparent 65%);
  pointer-events: none;
}
.hero-inner { max-width: 900px; position: relative; z-index: 2; }
.hero-title {
  font-family: var(--serif);
  font-size: clamp(52px, 6.5vw, 88px);
  font-weight: 500;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--white);
  margin-bottom: 28px;
}
.hero-title em { font-style: italic; color: var(--teal-light); }
.hero-sub {
  font-size: clamp(16px, 1.5vw, 19px);
  color: var(--cream-dim);
  max-width: 580px;
  line-height: 1.75;
  margin-bottom: 48px;
  font-weight: 300;
}
.hero-proof {
  display: flex; gap: 48px; margin-top: 64px;
  padding-top: 48px; border-top: 1px solid var(--rule);
  flex-wrap: wrap;
}
.hero-proof-item { display: flex; flex-direction: column; gap: 4px; }
.hero-proof-num {
  font-family: var(--serif); font-size: 36px; font-weight: 500;
  color: var(--white); letter-spacing: -0.03em; line-height: 1;
}
.hero-proof-num span { color: var(--teal-light); }
.hero-proof-label { font-size: 12px; color: var(--cream-dim); opacity: 0.6; letter-spacing: 0.04em; }

/* Ticker / marquee strip */
.ticker-strip {
  background: var(--dark-3);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  overflow: hidden; padding: 14px 0;
  white-space: nowrap;
}
.ticker-inner {
  display: inline-flex; gap: 0;
  animation: ticker 28s linear infinite;
}
.ticker-item {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 0 40px;
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--cream-dim);
}
.ticker-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--teal); }
@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ══════════════════════════════════════════ */
/* ── PROBLEM ── */
/* ══════════════════════════════════════════ */
.problem {
  padding: 140px 0;
  background: var(--dark);
}
.problem-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.problem-stats { display: flex; flex-direction: column; gap: 2px; }
.problem-stat-card {
  padding: 32px 36px;
  background: var(--dark-2);
  border: 1px solid var(--rule);
  position: relative; overflow: hidden;
  transition: border-color 0.3s;
}
.problem-stat-card:hover { border-color: var(--teal-border); }
.problem-stat-card::before {
  content: '';
  position: absolute; top: 0; left: 0; width: 3px; height: 100%;
  background: var(--teal); opacity: 0;
  transition: opacity 0.3s;
}
.problem-stat-card:hover::before { opacity: 1; }
.problem-stat-number {
  font-family: var(--serif); font-size: 48px; font-weight: 500;
  color: var(--white); letter-spacing: -0.04em; line-height: 1;
  margin-bottom: 8px;
}
.problem-stat-number.danger { color: var(--red-soft); }
.problem-stat-label { font-size: 13px; color: var(--cream-dim); line-height: 1.5; }
.problem-copy h2 {
  font-family: var(--serif);
  font-size: clamp(36px, 3.5vw, 50px);
  font-weight: 500; line-height: 1.1;
  letter-spacing: -0.025em; color: var(--white);
  margin-bottom: 24px;
}
.problem-copy h2 em { font-style: italic; color: var(--teal-light); }
.problem-copy p {
  font-size: 15px; color: var(--cream-dim);
  line-height: 1.8; margin-bottom: 20px;
}
.problem-copy p strong { color: var(--cream); font-weight: 500; }

/* ══════════════════════════════════════════ */
/* ── SOLUTION ── */
/* ══════════════════════════════════════════ */
.solution {
  padding: 140px 0;
  background: var(--dark-2);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.solution-header { text-align: center; margin-bottom: 80px; }
.solution-header h2 {
  font-family: var(--serif);
  font-size: clamp(40px, 4vw, 60px);
  font-weight: 500; line-height: 1.05;
  letter-spacing: -0.03em; color: var(--white);
  margin-bottom: 20px;
}
.solution-header h2 em { font-style: italic; color: var(--teal-light); }
.solution-header p {
  font-size: 16px; color: var(--cream-dim);
  max-width: 540px; margin: 0 auto; line-height: 1.75;
}
.services-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}
.service-card {
  background: var(--dark-3); padding: 48px 44px;
  border: 1px solid var(--rule);
  position: relative; overflow: hidden;
  transition: border-color 0.3s, background 0.3s;
}
.service-card:hover { border-color: var(--teal-border); background: #1A2820; }
.service-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, var(--teal), transparent 70%);
  opacity: 0; transition: opacity 0.3s;
}
.service-card:hover::after { opacity: 1; }
.service-icon {
  width: 48px; height: 48px; margin-bottom: 28px;
  display: flex; align-items: center; justify-content: center;
}
.service-number {
  font-family: var(--serif); font-size: 11px;
  color: var(--teal); letter-spacing: 0.2em;
  margin-bottom: 16px; opacity: 0.8;
}
.service-card h3 {
  font-family: var(--serif); font-size: 24px; font-weight: 500;
  letter-spacing: -0.015em; color: var(--white);
  margin-bottom: 16px; line-height: 1.2;
}
.service-card p { font-size: 14px; color: var(--cream-dim); line-height: 1.75; }

/* ══════════════════════════════════════════ */
/* ── HOW IT WORKS ── */
/* ══════════════════════════════════════════ */
.how {
  padding: 140px 0;
  background: var(--dark);
}
.how-header { text-align: center; margin-bottom: 100px; }
.how-header h2 {
  font-family: var(--serif);
  font-size: clamp(40px, 4vw, 56px);
  font-weight: 500; letter-spacing: -0.025em;
  color: var(--white); margin-bottom: 20px; line-height: 1.1;
}
.how-header p { font-size: 15px; color: var(--cream-dim); max-width: 480px; margin: 0 auto; line-height: 1.75; }
.steps-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 2px; position: relative;
}
.step-card {
  padding: 56px 44px 48px;
  background: var(--dark-2);
  border: 1px solid var(--rule);
  position: relative;
}
.step-num {
  font-family: var(--serif); font-size: 80px; font-weight: 700;
  color: var(--teal); opacity: 0.08;
  position: absolute; top: 24px; right: 28px;
  line-height: 1; letter-spacing: -0.04em;
  pointer-events: none;
}
.step-icon { margin-bottom: 28px; }
.step-label {
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--teal); margin-bottom: 16px;
}
.step-card h3 {
  font-family: var(--serif); font-size: 26px; font-weight: 500;
  letter-spacing: -0.015em; color: var(--white);
  margin-bottom: 16px; line-height: 1.2;
}
.step-card p { font-size: 14px; color: var(--cream-dim); line-height: 1.75; }
.step-connector {
  display: none;
}

/* ══════════════════════════════════════════ */
/* ── PRICING ── */
/* ══════════════════════════════════════════ */
.pricing {
  padding: 140px 0;
  background: var(--dark-2);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.pricing-header { text-align: center; margin-bottom: 80px; }
.pricing-header h2 {
  font-family: var(--serif);
  font-size: clamp(40px, 4vw, 56px);
  font-weight: 500; letter-spacing: -0.025em;
  color: var(--white); margin-bottom: 20px; line-height: 1.1;
}
.pricing-header h2 em { font-style: italic; color: var(--teal-light); }
.pricing-header p { font-size: 15px; color: var(--cream-dim); max-width: 500px; margin: 0 auto; line-height: 1.75; }
.pricing-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 2px; align-items: start;
}
.pricing-card {
  background: var(--dark-3);
  border: 1px solid var(--rule);
  padding: 48px 40px;
  position: relative; overflow: hidden;
  transition: border-color 0.3s;
  display: flex; flex-direction: column;
}
.pricing-card.featured {
  background: var(--dark-4);
  border-color: var(--teal-border);
}
.pricing-card.featured::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--teal), var(--gold), transparent);
}
.pricing-badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 12px; border-radius: 100px;
  background: rgba(12,158,143,0.12); color: var(--teal-light);
  border: 1px solid rgba(12,158,143,0.2);
  font-size: 10px; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; margin-bottom: 24px;
  width: fit-content;
}
.pricing-tier {
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--cream-dim); opacity: 0.5; margin-bottom: 16px;
}
.pricing-name {
  font-family: var(--serif); font-size: 28px; font-weight: 500;
  color: var(--white); margin-bottom: 24px;
}
.pricing-price {
  display: flex; align-items: baseline; gap: 6px;
  margin-bottom: 6px;
}
.pricing-amount {
  font-family: var(--serif); font-size: 52px; font-weight: 500;
  color: var(--white); letter-spacing: -0.04em; line-height: 1;
}
.pricing-period {
  font-size: 13px; color: var(--cream-dim); opacity: 0.6;
}
.pricing-setup {
  font-size: 12px; color: var(--cream-dim); opacity: 0.5;
  margin-bottom: 36px;
}
.pricing-divider {
  border: none; border-top: 1px solid var(--rule);
  margin: 0 0 32px;
}
.pricing-features {
  list-style: none; display: flex; flex-direction: column;
  gap: 14px; margin-bottom: 40px; flex: 1;
}
.pricing-features li {
  font-size: 13px; color: var(--cream-dim);
  display: flex; gap: 12px; align-items: flex-start;
  line-height: 1.5;
}
.pricing-features li::before {
  content: '-';
  color: var(--teal); flex-shrink: 0; margin-top: 1px;
}
.pricing-cta {
  display: flex; align-items: center; justify-content: center;
  width: 100%; padding: 14px 28px;
  font-family: var(--sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  border-radius: 2px; cursor: pointer; transition: all 0.2s;
  border: 1px solid rgba(240,232,220,0.15); color: var(--cream);
  background: transparent;
}
.pricing-cta:hover { border-color: var(--teal); color: var(--teal); }
.pricing-cta.featured-cta {
  background: var(--teal); color: var(--dark); border-color: var(--teal);
  box-shadow: 0 0 28px rgba(12,158,143,0.25);
}
.pricing-cta.featured-cta:hover { background: var(--teal-light); box-shadow: 0 0 40px rgba(12,158,143,0.4); }
.pricing-guarantee {
  text-align: center; margin-top: 40px;
  font-size: 12px; color: var(--cream-dim); opacity: 0.5;
  letter-spacing: 0.03em;
}

/* ══════════════════════════════════════════ */
/* ── CASE STUDY ── */
/* ══════════════════════════════════════════ */
.case-study {
  padding: 140px 0;
  background: var(--dark);
}
.case-study-inner {
  background: var(--dark-3);
  border: 1px solid var(--rule);
  padding: 80px;
  position: relative; overflow: hidden;
}
.case-study-inner::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--teal), var(--gold), transparent 80%);
}
.case-study-inner::after {
  content: '';
  position: absolute; top: -100px; right: -100px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(12,158,143,0.08) 0%, transparent 65%);
}
.case-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; position: relative; z-index: 2; }
.case-eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--teal); margin-bottom: 24px; }
.case-study h2 {
  font-family: var(--serif); font-size: clamp(32px, 3vw, 46px);
  font-weight: 500; line-height: 1.1; letter-spacing: -0.025em;
  color: var(--white); margin-bottom: 24px;
}
.case-study h2 em { font-style: italic; color: var(--teal-light); }
.case-study p { font-size: 15px; color: var(--cream-dim); line-height: 1.8; margin-bottom: 16px; }
.case-client {
  margin-top: 36px;
  padding-top: 28px; border-top: 1px solid var(--rule);
  font-size: 12px; color: var(--cream-dim); opacity: 0.5;
  letter-spacing: 0.05em;
}
.case-stats {
  display: flex; flex-direction: column; gap: 2px;
}
.case-stat {
  background: var(--dark-2); border: 1px solid var(--rule);
  padding: 36px 40px;
  position: relative; overflow: hidden;
}
.case-stat::before {
  content: '';
  position: absolute; top: 0; left: 0; width: 3px; height: 100%;
  background: var(--teal);
}
.case-stat-num {
  font-family: var(--serif); font-size: 56px; font-weight: 500;
  color: var(--teal-light); letter-spacing: -0.04em; line-height: 1;
  margin-bottom: 10px;
}
.case-stat-label { font-size: 13px; color: var(--cream-dim); }

/* ══════════════════════════════════════════ */
/* ── GUARANTEE ── */
/* ══════════════════════════════════════════ */
.guarantee {
  padding: 140px 0;
  background: var(--dark-2);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.guarantee-inner {
  display: grid; grid-template-columns: auto 1fr;
  gap: 80px; align-items: center;
}
.guarantee-badge {
  width: 180px; height: 180px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.guarantee-copy h2 {
  font-family: var(--serif); font-size: clamp(34px, 3.5vw, 48px);
  font-weight: 500; line-height: 1.1; letter-spacing: -0.025em;
  color: var(--white); margin-bottom: 20px;
}
.guarantee-copy h2 em { font-style: italic; color: var(--teal-light); }
.guarantee-copy p { font-size: 15px; color: var(--cream-dim); line-height: 1.8; max-width: 560px; margin-bottom: 16px; }
.guarantee-copy p strong { color: var(--cream); }

/* ══════════════════════════════════════════ */
/* ── TRUST STRIP ── */
/* ══════════════════════════════════════════ */
.trust-strip {
  padding: 64px 0;
  background: var(--dark);
  border-bottom: 1px solid var(--rule);
}
.trust-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}
.trust-card {
  padding: 36px 28px; text-align: center;
  background: var(--dark-2); border: 1px solid var(--rule);
}
.trust-icon { margin: 0 auto 16px; }
.trust-value {
  font-family: var(--serif); font-size: 36px; font-weight: 500;
  color: var(--white); letter-spacing: -0.03em; line-height: 1;
  margin-bottom: 8px;
}
.trust-value span { color: var(--teal-light); }
.trust-label { font-size: 12px; color: var(--cream-dim); opacity: 0.6; }

/* ══════════════════════════════════════════ */
/* ── FAQ ── */
/* ══════════════════════════════════════════ */
.faq {
  padding: 140px 0;
  background: var(--dark);
}
.faq-header { text-align: center; margin-bottom: 80px; }
.faq-header h2 {
  font-family: var(--serif); font-size: clamp(36px, 3.5vw, 52px);
  font-weight: 500; letter-spacing: -0.025em;
  color: var(--white); margin-bottom: 16px; line-height: 1.1;
}
.faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 2px; }
.faq-item {
  background: var(--dark-2); border: 1px solid var(--rule);
  overflow: hidden; transition: border-color 0.2s;
}
.faq-item.open { border-color: var(--teal-border); }
.faq-q {
  padding: 28px 36px;
  display: flex; justify-content: space-between; align-items: center;
  cursor: pointer; gap: 24px;
  font-family: var(--serif); font-size: 18px; font-weight: 500;
  color: var(--white); line-height: 1.3; letter-spacing: -0.01em;
  user-select: none;
}
.faq-q:hover { color: var(--cream); }
.faq-icon {
  width: 28px; height: 28px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--rule); border-radius: 50%;
  color: var(--teal); font-size: 18px; line-height: 1;
  transition: transform 0.3s, border-color 0.2s;
}
.faq-item.open .faq-icon { transform: rotate(45deg); border-color: var(--teal); }
.faq-a {
  max-height: 0; overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
  font-size: 14px; color: var(--cream-dim); line-height: 1.8;
}
.faq-item.open .faq-a {
  max-height: 400px;
}
.faq-a-inner { padding: 0 36px 28px; }

/* ══════════════════════════════════════════ */
/* ── FINAL CTA ── */
/* ══════════════════════════════════════════ */
.final-cta {
  padding: 160px 0;
  background: var(--dark-2);
  border-top: 1px solid var(--rule);
  text-align: center;
  position: relative; overflow: hidden;
}
.final-cta::before {
  content: '';
  position: absolute; top: -50%; left: 50%; transform: translateX(-50%);
  width: 800px; height: 800px;
  background: radial-gradient(circle, rgba(12,158,143,0.1) 0%, transparent 60%);
  pointer-events: none;
}
.final-cta h2 {
  font-family: var(--serif);
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 500; letter-spacing: -0.035em;
  line-height: 1.0; color: var(--white);
  margin-bottom: 24px; position: relative; z-index: 2;
}
.final-cta h2 em { font-style: italic; color: var(--teal-light); }
.final-cta p {
  font-size: 17px; color: var(--cream-dim); max-width: 480px;
  margin: 0 auto 48px; line-height: 1.7; position: relative; z-index: 2;
}
.final-cta .btn-row { justify-content: center; position: relative; z-index: 2; }
.final-cta-note {
  margin-top: 28px; font-size: 12px;
  color: var(--cream-dim); opacity: 0.4;
  letter-spacing: 0.04em; position: relative; z-index: 2;
}

/* ══════════════════════════════════════════ */
/* ── FOOTER ── */
/* ══════════════════════════════════════════ */
.footer {
  background: var(--dark);
  border-top: 1px solid var(--rule);
  padding: 72px 0 40px;
}
.footer-grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px; margin-bottom: 72px;
}
.footer-brand p { font-size: 13px; color: var(--cream-dim); opacity: 0.55; line-height: 1.75; margin-top: 20px; max-width: 280px; }
.footer-col-title {
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--teal); margin-bottom: 20px;
}
.footer-links { display: flex; flex-direction: column; gap: 12px; }
.footer-link { font-size: 13px; color: var(--cream-dim); opacity: 0.6; transition: opacity 0.2s; }
.footer-link:hover { opacity: 1; }
.footer-bottom {
  padding-top: 32px; border-top: 1px solid var(--rule);
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 16px;
}
.footer-copy { font-size: 11px; color: var(--cream-dim); opacity: 0.3; letter-spacing: 0.04em; }
.footer-tagline { font-family: var(--serif); font-size: 12px; font-style: italic; color: var(--cream-dim); opacity: 0.3; }

/* ── MOBILE NAV TOGGLE (basic) ── */
.nav-menu-btn { display: none; }

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--dark-2); }
::-webkit-scrollbar-thumb { background: var(--teal-dim); border-radius: 2px; }


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


/* Guarantee badge image */
.guarantee-badge {
  width: clamp(220px, 24vw, 320px);
  height: auto;
}
.guarantee-badge img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 50%;
  filter: drop-shadow(0 22px 46px rgba(0,0,0,0.35));
}
@media (max-width: 900px) {
  .guarantee-badge {
    justify-self: center;
    margin: 0 auto;
    width: min(76vw, 300px);
  }
}


/* Pricing tier details */
.pricing-feature-note {
  display: block;
  margin-top: 5px;
  color: var(--cream-dim);
  opacity: 0.62;
  font-size: 12px;
  line-height: 1.55;
}
.pricing-card-note {
  margin: -14px 0 28px;
  color: var(--cream);
  font-size: 13px;
  line-height: 1.65;
  opacity: 0.76;
}
.pricing-tailored {
  max-width: 860px;
  margin: 52px auto 0;
  padding: 34px 38px;
  text-align: left;
  background: rgba(22,32,25,0.72);
  border: 1px solid var(--rule);
  font-size: 14px;
  line-height: 1.75;
}
.pricing-tailored strong {
  display: block;
  margin-bottom: 12px;
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 500;
  color: var(--white);
  letter-spacing: -0.015em;
}
.pricing-tailored span {
  display: block;
  margin-top: 12px;
}
@media (max-width: 560px) {
  .pricing-tailored {
    padding: 28px 22px;
    margin-top: 36px;
  }
  .pricing-tailored strong {
    font-size: 21px;
  }
}
`,
  body: `<!-- ══ NAV ══ -->
<nav class="nav" id="nav">
  <a class="nav-logo" href="/">
    <img class="brand-logo-mark" src="/brand/clinova-logo-mark.png" alt="ClinovaAI" width="58" height="58">
  </a>
  <div class="nav-links">
    <a class="nav-link" href="#how">How It Works</a>
    <a class="nav-link" href="#services">Services</a>
    <a class="nav-link" href="#pricing">Pricing</a>
    <a class="nav-link" href="/about">About</a>
    <a class="nav-link" href="#faq">FAQ</a>
    <a class="nav-cta" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Book a Call ↗</a>
  </div>
</nav>

<!-- ══ HERO ══ -->
<section class="hero" id="hero">
  <div class="hero-glow-1"></div>
  <div class="hero-glow-2"></div>
  <div class="hero-inner">
    <div class="eyebrow reveal">AI Receptionist for Aesthetic Clinics</div>
    <h1 class="hero-title reveal reveal-delay-1">
      Your clinic is losing<br><em>£10,000 to £30,000 every month.</em><br>We stop that.
    </h1>
    <p class="hero-sub reveal reveal-delay-2">
      ClinovaAI installs a done-for-you AI receptionist into your clinic - answering every missed call, booking every appointment, 24 hours a day, 7 days a week. You do nothing differently. Except watch your calendar fill.
    </p>
    <div class="btn-row reveal reveal-delay-3">
      <a class="btn-primary" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Book a Discovery Call ↗</a>
      <button class="btn-outline" data-scroll-target="how">See How It Works</button>
    </div>
    <div class="hero-proof reveal reveal-delay-4">
      <div class="hero-proof-item">
        <div class="hero-proof-num"><span>85%</span></div>
        <div class="hero-proof-label">of missed callers never<br>call back</div>
      </div>
      <div class="hero-proof-item">
        <div class="hero-proof-num"><span>8×</span></div>
        <div class="hero-proof-label">more bookings when<br>responding within 5 mins</div>
      </div>
      <div class="hero-proof-item">
        <div class="hero-proof-num"><span>£350</span></div>
        <div class="hero-proof-label">average treatment value<br>lost per missed call</div>
      </div>
      <div class="hero-proof-item">
        <div class="hero-proof-num">30<span>days</span></div>
        <div class="hero-proof-label">results guarantee -<br>or we work for free</div>
      </div>
    </div>
  </div>
</section>

<!-- Ticker -->
<div class="ticker-strip">
  <div class="ticker-inner">
    <span class="ticker-item"><span class="ticker-dot"></span>AI Receptionist · 24/7 Call Answering</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Automated Booking · Zero Staff Required</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Google Review Automation</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Client Re-engagement Sequences</span>
    <span class="ticker-item"><span class="ticker-dot"></span>30-Day Results Guarantee</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Done For You · We Build, Install, Manage</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Trusted by Aesthetic Clinics Across the UK</span>
    <!-- Duplicate for seamless loop -->
    <span class="ticker-item"><span class="ticker-dot"></span>AI Receptionist · 24/7 Call Answering</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Automated Booking · Zero Staff Required</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Google Review Automation</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Client Re-engagement Sequences</span>
    <span class="ticker-item"><span class="ticker-dot"></span>30-Day Results Guarantee</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Done For You · We Build, Install, Manage</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Trusted by Aesthetic Clinics Across the UK</span>
  </div>
</div>

<!-- ══ PROBLEM ══ -->
<section class="problem" id="problem">
  <div class="container">
    <div class="problem-grid">
      <div class="problem-stats">
        <div class="problem-stat-card reveal">
          <div class="problem-stat-number danger">£10k to £30k</div>
          <div class="problem-stat-label">Typical monthly revenue at risk when high-intent enquiries go unanswered</div>
        </div>
        <div class="problem-stat-card reveal reveal-delay-1">
          <div class="problem-stat-number danger">8+</div>
          <div class="problem-stat-label">Missed calls per day at the average UK aesthetic clinic</div>
        </div>
        <div class="problem-stat-card reveal reveal-delay-2">
          <div class="problem-stat-number danger">85%</div>
          <div class="problem-stat-label">Of those callers who will never call back, ever</div>
        </div>
      </div>
      <div class="problem-copy">
        <div class="eyebrow reveal">The Problem</div>
        <h2 class="reveal reveal-delay-1">These clients need treatment now.<br><em>If you don't answer, your competitor will.</em></h2>
        <p class="reveal reveal-delay-2">You're mid-treatment. Your team is with a client. The phone rings, no one answers, and that caller - who was ready to book a £350 treatment - simply moves on. They don't leave a voicemail. They don't wait. They book the clinic down the road.</p>
        <p class="reveal reveal-delay-3">This happens <strong>eight times a day</strong> at the average aesthetic clinic. At £350 per treatment, that can mean <strong>£10,000 to £30,000 every single month</strong> walking out the door. Not because your treatments aren't excellent. Not because your prices are wrong. Simply because no one was there to answer first.</p>
        <p class="reveal reveal-delay-4">Studies confirm that clinics responding within five minutes convert <strong>eight times more bookings</strong> than those responding within an hour. Your reputation is built in the treatment room. Your revenue is decided before clients ever walk through the door.</p>
      </div>
    </div>
  </div>
</section>

<!-- ══ SOLUTION / SERVICES ══ -->
<section class="solution" id="services">
  <div class="container">
    <div class="solution-header">
      <div class="eyebrow reveal" style="justify-content:center;">The Solution</div>
      <h2 class="reveal reveal-delay-1">Everything your clinic needs.<br><em>Nothing you have to manage.</em></h2>
      <p class="reveal reveal-delay-2">We build, install, and run the entire system. You do nothing differently - except watch your appointment book fill.</p>
    </div>
    <div class="services-grid">

      <div class="service-card reveal">
        <div class="service-number">01 - Core Service</div>
        <h3>AI Receptionist</h3>
        <p>Every missed call is answered within seconds by your AI receptionist. It has a natural, intelligent conversation with the potential client, answers their questions, and books the appointment directly into your calendar - 24 hours a day, 7 days a week. No human involvement required. No missed opportunities.</p>
      </div>

      <div class="service-card reveal reveal-delay-1">
        <div class="service-number">02 - Reputation</div>
        <h3>Google Review Automation</h3>
        <p>After every appointment, your system automatically requests a review at exactly the right moment. Four and five-star reviews are posted publicly to Google, building your visibility and social proof. One to three-star feedback is captured privately, so it never damages your reputation. Your Google rating grows on autopilot.</p>
      </div>

      <div class="service-card reveal reveal-delay-2">
        <div class="service-number">03 - Retention</div>
        <h3>Client Re-engagement</h3>
        <p>Automated follow-up sequences work in the background at all times. Appointment reminders eliminate no-shows. Targeted promotions bring lapsed clients back. Personalised messages maximise client lifetime value - all without a single manual task from you or your team. Your existing client base becomes a reliable, recurring revenue stream.</p>
      </div>

      <div class="service-card reveal reveal-delay-3">
        <div class="service-number">04 - Digital Presence</div>
        <h3>Website with AI Chatbot</h3>
        <p>A fully designed, conversion-optimised website built specifically for your clinic, with an embedded AI chatbot that handles enquiries and converts website visitors into booked appointments around the clock. Premium design. Clear messaging. Built to turn browsers into bookings from the moment they land on your page.</p>
      </div>

    </div>
  </div>
</section>

<!-- ══ HOW IT WORKS ══ -->
<section class="how" id="how">
  <div class="container">
    <div class="how-header">
      <div class="eyebrow reveal" style="justify-content:center;">Three Steps</div>
      <h2 class="reveal reveal-delay-1">Simple for you.<br>Sophisticated behind the scenes.</h2>
      <p class="reveal reveal-delay-2">We handle everything. You stay focused on delivering exceptional treatments.</p>
    </div>
    <div class="steps-grid">

      <div class="step-card reveal">
        <div class="step-num">01</div>
        <div class="step-label">Step One</div>
        <h3>We build your system.</h3>
        <p>We begin with a 30-minute onboarding call to understand your clinic, your services, your pricing, and how you like to communicate with clients. From there, we build and configure your entire AI receptionist system - tailored specifically to your clinic. No generic templates. No off-the-shelf software.</p>
      </div>

      <div class="step-card reveal reveal-delay-1">
        <div class="step-num">02</div>
        <div class="step-label">Step Two</div>
        <h3>We install and go live.</h3>
        <p>We connect your AI receptionist to your existing phone number and booking system within 48 hours. From this moment, every missed call is answered, every lead is followed up, and every appointment opportunity is captured. Your team doesn't change a thing. Your clients notice nothing unusual - except that you're suddenly always available.</p>
      </div>

      <div class="step-card reveal reveal-delay-2">
        <div class="step-num">03</div>
        <div class="step-label">Step Three</div>
        <h3>You watch your bookings grow.</h3>
        <p>Within the first 30 days, you'll see measurable improvement in captured bookings. We monitor, optimise, and manage the entire system on an ongoing basis - refining conversations, adjusting follow-up sequences, and reporting results to you monthly. We are accountable to outcomes, not effort.</p>
      </div>

    </div>
  </div>
</section>

<!-- ══ TRUST STRIP ══ -->
<div class="trust-strip">
  <div class="container">
    <div class="trust-grid">
      <div class="trust-card reveal">
        <div class="trust-value"><span>24/7</span></div>
        <div class="trust-label">Always on - no holidays, no sick days</div>
      </div>
      <div class="trust-card reveal reveal-delay-1">
        <div class="trust-value">60<span>s</span></div>
        <div class="trust-label">Average response time to every missed call</div>
      </div>
      <div class="trust-card reveal reveal-delay-2">
        <div class="trust-value"><span>3.2</span>×</div>
        <div class="trust-label">Average booking conversion uplift</div>
      </div>
      <div class="trust-card reveal reveal-delay-3">
        <div class="trust-value">30<span>days</span></div>
        <div class="trust-label">Results guaranteed or we work for free</div>
      </div>
    </div>
  </div>
</div>

<!-- ══ PRICING ══ -->
<section class="pricing" id="pricing">
  <div class="container">
    <div class="pricing-header">
      <div class="eyebrow reveal" style="justify-content:center;">Pricing</div>
      <h2 class="reveal reveal-delay-1">Everything in one place.<br><em>Clear systems. Clear ROI.</em></h2>
      <p class="reveal reveal-delay-2">Choose the level of support your clinic needs today. Each tier is built to recover missed revenue, increase booked appointments, and reduce manual follow-up.</p>
    </div>
    <div class="pricing-grid">

      <div class="pricing-card reveal">
        <div class="pricing-tier">Tier 1 - Entry / ROI Focused</div>
        <div class="pricing-name">Growth System</div>
        <div class="pricing-price">
          <div class="pricing-amount">Discussed</div>
          <div class="pricing-period"> on call</div>
        </div>
        <div class="pricing-setup">Entry-level implementation scoped after your audit</div>
        <hr class="pricing-divider">
        <ul class="pricing-features">
          <li>Missed call text-back automation</li>
          <li>Automatically sends testimonials to build trust</li>
          <li>Basic AI response system</li>
          <li>Simple consistent SMS follow-up to reduce no-shows and handle reschedules</li>
          <li>Basic reporting</li>
        </ul>
        <p class="pricing-card-note">This stops you losing easy revenue from missed calls.</p>
        <a class="pricing-cta" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Get Started</a>
      </div>

      <div class="pricing-card featured reveal reveal-delay-1">
        <div class="pricing-badge">Core Revenue Driver</div>
        <div class="pricing-tier">Tier 2 - Core Revenue Driver</div>
        <div class="pricing-name">Revenue Accelerator</div>
        <div class="pricing-price">
          <div class="pricing-amount">Scoped</div>
          <div class="pricing-period"> to fit</div>
        </div>
        <div class="pricing-setup">Quoted based on call volume, calendar setup, and integrations</div>
        <hr class="pricing-divider">
        <ul class="pricing-features">
          <li>Everything in Growth System</li>
          <li>AI call handling and appointment booking<span class="pricing-feature-note">Automatically answers inbound calls, qualifies enquiries, and books directly into your calendar.</span></li>
          <li>Multi-step follow-up system<span class="pricing-feature-note">SMS and email sequences that convert missed and inbound leads into booked appointments.</span></li>
          <li>Lead capture and qualification<span class="pricing-feature-note">Ensures every enquiry is captured, filtered, and directed correctly.</span></li>
          <li>CRM integration<span class="pricing-feature-note">Connects with your systems via GoHighLevel or similar.</span></li>
          <li>Booking optimisation<span class="pricing-feature-note">Reduces drop-offs and increases the percentage of enquiries that turn into appointments.</span></li>
        </ul>
        <p class="pricing-card-note">This is where your system shifts from recovering missed opportunities to consistently generating new bookings on autopilot.</p>
        <a class="pricing-cta featured-cta" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Get Started</a>
      </div>

      <div class="pricing-card reveal reveal-delay-2">
        <div class="pricing-tier">Tier 3 - Premium / Authority Play</div>
        <div class="pricing-name">Clinic Dominance System</div>
        <div class="pricing-price">
          <div class="pricing-amount">Custom</div>
          <div class="pricing-period"> quote</div>
        </div>
        <div class="pricing-setup">Built around your clinic, locations, workflows, and support needs</div>
        <hr class="pricing-divider">
        <ul class="pricing-features">
          <li>Everything in Growth System and Revenue Accelerator</li>
          <li>Advanced AI automations tailored to your clinic<span class="pricing-feature-note">Custom workflows for enquiries, follow-ups, and reactivation campaigns.</span></li>
          <li>Automated review and reputation system<span class="pricing-feature-note">Consistently generates 5★ reviews, strengthens local trust, and helps you rank higher on Google.</span></li>
          <li>Website conversion system<span class="pricing-feature-note">Turns your website into a 24/7 booking machine with AI chat and a seamless booking flow.</span></li>
          <li>AI receptionist and appointment setting system<span class="pricing-feature-note">Captures, qualifies, and books inbound enquiries automatically.</span></li>
          <li>Multi-location support<span class="pricing-feature-note">Centralised management of enquiries, bookings, and follow-ups across clinics in different locations.</span></li>
          <li>Custom integrations<span class="pricing-feature-note">Connects with your existing tools, calendars, and systems.</span></li>
          <li>Priority support and ongoing optimisation<span class="pricing-feature-note">Faster response times and continuous improvements to increase performance.</span></li>
        </ul>
        <p class="pricing-card-note">This is how you dominate your local market and automate your entire front-end, so no lead is missed and bookings run consistently without extra manual effort.</p>
        <a class="pricing-cta" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Get Started</a>
      </div>

    </div>
    <div class="pricing-guarantee reveal pricing-tailored">
      <strong>Tailored Implementation</strong>
      While we work within clear system tiers, we understand that every clinic operates differently in practice.
      <span>Because of that, we can make controlled adjustments to your setup to match your clinic's specific workflow, patient volume, and existing systems, without changing the core structure of the system itself.</span>
      <span>This ensures you get a solution that is both structured and practical in real-world conditions, rather than a rigid one-size-fits-all setup.</span>
    </div>
  </div>
</section>

<!-- ══ CASE STUDY ══ -->
<section class="case-study" id="results">
  <div class="container-wide">
    <div class="case-study-inner">
      <div class="case-grid">
        <div>
          <div class="case-eyebrow reveal">Client Results</div>
          <h2 class="reveal reveal-delay-1"><em>18% revenue increase.</em><br>First month.</h2>
          <p class="reveal reveal-delay-2">Le Petit Parisien saw an 18% increase in revenue in their very first month after implementing the ClinovaAI system. No new marketing spend. No new staff. No changes to how they operated.</p>
          <p class="reveal reveal-delay-3">The system simply ensured that every enquiry that previously went unanswered was captured, followed up, and converted. Revenue that was already there - waiting to be collected.</p>
          <p class="reveal reveal-delay-4">This is the consistent pattern we see. Not because ClinovaAI is magic. Because the opportunity was already there. We just stopped it from disappearing.</p>
          <div class="case-client reveal reveal-delay-5">Le Petit Parisien · Deerfield Beach · First 30 days</div>
        </div>
        <div class="case-stats reveal reveal-delay-1">
          <div class="case-stat">
            <div class="case-stat-num">18%</div>
            <div class="case-stat-label">Revenue increase - month one</div>
          </div>
          <div class="case-stat">
            <div class="case-stat-num">30</div>
            <div class="case-stat-label">Days to measurable results</div>
          </div>
          <div class="case-stat">
            <div class="case-stat-num">£0</div>
            <div class="case-stat-label">Additional marketing spend required</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ GUARANTEE ══ -->
<section class="guarantee" id="guarantee">
  <div class="container">
    <div class="guarantee-inner">
      <div class="guarantee-badge reveal"><img src="/brand/30dayguarantee.png" alt="30-day results guarantee" width="320" height="320"></div>
      <div class="guarantee-copy">
        <div class="eyebrow reveal">Our Guarantee</div>
        <h2 class="reveal reveal-delay-1">Results within 30 days.<br><em>Or we work for free.</em></h2>
        <p class="reveal reveal-delay-2">Every ClinovaAI system comes with a 30-day results guarantee. If you don't see <strong>measurable improvement in captured bookings</strong> within your first 30 days, we keep working at no additional charge until you do.</p>
        <p class="reveal reveal-delay-3">No small print. No vague definitions of "improvement". We agree specific, measurable targets before we begin, and we're held accountable to them. This is how we operate. Not because we have to. Because we're confident enough in what we build to back it completely.</p>
      </div>
    </div>
  </div>
</section>

<!-- ══ FAQ ══ -->
<section class="faq" id="faq">
  <div class="container">
    <div class="faq-header">
      <div class="eyebrow reveal" style="justify-content:center;">FAQ</div>
      <h2 class="reveal reveal-delay-1">Questions we're asked every week.</h2>
    </div>
    <div class="faq-list">

      <div class="faq-item reveal" data-faq>
        <div class="faq-q">
          Will my clients know they're speaking to an AI?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">Your AI receptionist is trained to communicate in a warm, professional, and natural way - consistent with your clinic's brand and tone. Most clients simply experience a prompt, helpful response and don't question it further. If you prefer, the system can be transparent about being automated. We configure this entirely to your preference during onboarding.</div>
        </div>
      </div>

      <div class="faq-item reveal reveal-delay-1" data-faq>
        <div class="faq-q">
          How long does it take to get started?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">We're typically live within 48 hours of your onboarding call. The onboarding itself takes 30 minutes. After that, we handle everything - configuration, integration with your booking system, testing, and going live. You don't need to do anything except confirm you're happy with how it sounds before we switch it on.</div>
        </div>
      </div>

      <div class="faq-item reveal reveal-delay-2" data-faq>
        <div class="faq-q">
          Do I need to change my phone number or booking system?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">No. We connect to your existing phone number and integrate with your current booking system. There's no disruption to how your clinic operates. Your team doesn't change their workflow. Your clients call the same number they always have. We simply ensure every call that previously went unanswered is now handled professionally and converted into a booking.</div>
        </div>
      </div>

      <div class="faq-item reveal reveal-delay-3" data-faq>
        <div class="faq-q">
          What happens if the AI doesn't know how to answer a question?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">We train your AI receptionist thoroughly on your clinic's services, pricing, policies, and FAQs during onboarding. For any question outside its knowledge, it politely takes a message and notifies you immediately so you can follow up personally. It never guesses, never fabricates, and never leaves a caller without a clear next step. We also refine and update the system continuously based on real conversations.</div>
        </div>
      </div>

      <div class="faq-item reveal reveal-delay-4" data-faq>
        <div class="faq-q">
          What does the 30-day guarantee actually mean?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">Before we begin, we agree specific, measurable targets with you - typically based on the number of previously missed enquiries that are now captured and converted within your first 30 days. If we don't hit those targets, we continue working at no additional charge until we do. There's no awkward conversation, no small print, no conditions. We're accountable to outcomes. If the results aren't there, neither is our invoice.</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ FINAL CTA ══ -->
<section class="final-cta" id="final-cta">
  <div class="container">
    <div class="eyebrow reveal" style="justify-content:center;">Get Started</div>
    <h2 class="reveal reveal-delay-1">Your clinic never<br><em>has to close again.</em></h2>
    <p class="reveal reveal-delay-2">Book a 30-minute discovery call. We'll review your current missed call volume, show you exactly what we'd build for your clinic, and give you a clear picture of what you can expect within 30 days.</p>
    <div class="btn-row reveal reveal-delay-3">
      <a class="btn-primary" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer" style="font-size:13px; padding:18px 40px;">Book a Discovery Call ↗</a>
    </div>
    <p class="final-cta-note reveal reveal-delay-4">No commitment required · 30-minute call · Results within 30 days guaranteed</p>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img class="brand-logo-mark" src="/brand/clinova-logo-mark.png" alt="ClinovaAI" width="62" height="62">
        <p>The AI receptionist built for aesthetic clinics, med spas, and cosmetic practices across the UK. Never miss a booking again.</p>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <div class="footer-links">
          <a class="footer-link" href="#services">AI Receptionist</a>
          <a class="footer-link" href="#services">Google Review Automation</a>
          <a class="footer-link" href="#services">Client Re-engagement</a>
          <a class="footer-link" href="#services">Website &amp; Chatbot</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <div class="footer-links">
          <a class="footer-link" href="/about">About</a>
          <a class="footer-link" href="#results">Results</a>
          <a class="footer-link" href="#pricing">Pricing</a>
          <a class="footer-link" href="#final-cta">Contact</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Legal</div>
        <div class="footer-links">
          <a class="footer-link" href="#">Privacy Policy</a>
          <a class="footer-link" href="#">Terms of Service</a>
          <a class="footer-link" href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 ClinovaAI Ltd · clinovaai.co · All rights reserved</div>
      <div class="footer-tagline">"Never Miss a Booking Again"</div>
    </div>
  </div>
</footer>`,
} as const;

export const aboutPage = {
  css: `
/* ── TOKENS ── */
:root {
  --teal:        #0C9E8F;
  --teal-light:  #13BBA9;
  --teal-dim:    #0A7A6E;
  --teal-glow:   rgba(12,158,143,0.18);
  --teal-subtle: rgba(12,158,143,0.07);
  --teal-border: rgba(12,158,143,0.18);
  --gold:        #B8935A;
  --gold-light:  #D4AE78;
  --dark:        #080C0B;
  --dark-2:      #0E1512;
  --dark-3:      #162019;
  --dark-4:      #1D2B27;
  --cream:       #F0E8DC;
  --cream-dim:   #C8BEB3;
  --white:       #F6F3F0;
  --rule:        rgba(240,232,220,0.07);
  --serif: var(--font-playfair), Georgia, serif;
  --sans: var(--font-dm-sans), system-ui, sans-serif;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--dark);
  color: var(--cream);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }

/* ── REVEAL ── */
.reveal {
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  height: 72px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 64px;
  background: rgba(8,12,11,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--rule);
}
.nav-links { display: flex; gap: 36px; align-items: center; }
.nav-link { font-size: 13px; color: var(--cream-dim); letter-spacing: 0.02em; transition: color 0.2s; }
.nav-link:hover { color: var(--cream); }
.nav-link.active { color: var(--cream); }
.nav-cta {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--teal); color: var(--dark);
  font-family: var(--sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 11px 24px; border-radius: 2px; border: none;
  cursor: pointer; transition: all 0.2s;
  box-shadow: 0 0 24px rgba(12,158,143,0.3);
}
.nav-cta:hover { background: var(--teal-light); box-shadow: 0 0 36px rgba(12,158,143,0.45); }

/* ── LAYOUT ── */
.container { max-width: 1140px; margin: 0 auto; padding: 0 64px; }

/* ── EYEBROW ── */
.eyebrow {
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--teal); margin-bottom: 20px;
  display: flex; align-items: center; gap: 12px;
}
.eyebrow::before {
  content: ''; display: block;
  width: 28px; height: 1px;
  background: var(--teal); opacity: 0.6;
}

/* ── BUTTONS ── */
.btn-primary {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--teal); color: var(--dark);
  font-family: var(--sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 16px 32px; border: none; border-radius: 2px;
  cursor: pointer; transition: all 0.22s;
  box-shadow: 0 0 32px rgba(12,158,143,0.28);
}
.btn-primary:hover { background: var(--teal-light); box-shadow: 0 0 48px rgba(12,158,143,0.45); }
.btn-outline {
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; color: var(--cream);
  font-family: var(--sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 15px 32px; border: 1px solid rgba(240,232,220,0.2); border-radius: 2px;
  cursor: pointer; transition: all 0.22s;
}
.btn-outline:hover { border-color: var(--teal); color: var(--teal); }
.btn-row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }

/* ══════════════════════════════════ */
/* HERO */
/* ══════════════════════════════════ */
.about-hero {
  padding: 160px 64px 120px;
  position: relative; overflow: hidden;
  border-bottom: 1px solid var(--rule);
}
.hero-glow {
  position: absolute; top: -100px; right: -100px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(12,158,143,0.09) 0%, transparent 65%);
  pointer-events: none;
}
.about-hero-grid {
  display: grid; grid-template-columns: 1fr 480px;
  gap: 80px; align-items: center;
  max-width: 1140px; margin: 0 auto;
  position: relative; z-index: 2;
}
.about-hero h1 {
  font-family: var(--serif);
  font-size: clamp(44px, 5vw, 72px);
  font-weight: 500; line-height: 1.0;
  letter-spacing: -0.03em; color: var(--white);
  margin-bottom: 28px;
}
.about-hero h1 em { font-style: italic; color: var(--teal-light); }
.about-hero-sub {
  font-size: 17px; color: var(--cream-dim);
  line-height: 1.8; max-width: 500px;
  margin-bottom: 40px; font-weight: 300;
}
.founder-photo-wrap {
  position: relative;
}
.founder-photo {
  width: 100%; aspect-ratio: 1;
  object-fit: cover; object-position: center top;
  display: block;
  filter: grayscale(15%) contrast(1.05);
}
.founder-photo-frame {
  position: relative; overflow: hidden;
}
.founder-photo-frame::before {
  content: '';
  position: absolute; inset: 0; z-index: 2;
  background: linear-gradient(to bottom, transparent 60%, rgba(8,12,11,0.4) 100%);
}
.founder-photo-frame::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--teal), var(--gold), transparent);
  z-index: 3;
}
.founder-credentials {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 28px 32px;
  background: linear-gradient(to top, rgba(8,12,11,0.96) 0%, transparent 100%);
  z-index: 4;
}
.founder-name {
  font-family: var(--serif); font-size: 22px; font-weight: 500;
  color: var(--white); letter-spacing: -0.015em; margin-bottom: 4px;
}
.founder-title { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal); }

/* ══════════════════════════════════ */
/* CREDENTIALS STRIP */
/* ══════════════════════════════════ */
.cred-strip {
  background: var(--dark-2);
  border-bottom: 1px solid var(--rule);
  padding: 0;
}
.cred-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
.cred-item {
  padding: 40px 36px;
  border-right: 1px solid var(--rule);
  position: relative;
  transition: background 0.3s;
}
.cred-item:last-child { border-right: none; }
.cred-item:hover { background: var(--dark-3); }
.cred-item::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--teal), transparent);
  opacity: 0; transition: opacity 0.3s;
}
.cred-item:hover::before { opacity: 1; }
.cred-value {
  font-family: var(--serif); font-size: 40px; font-weight: 500;
  color: var(--white); letter-spacing: -0.035em; line-height: 1;
  margin-bottom: 8px;
}
.cred-value span { color: var(--teal-light); }
.cred-label { font-size: 13px; color: var(--cream-dim); opacity: 0.7; line-height: 1.4; }

/* ══════════════════════════════════ */
/* STORY */
/* ══════════════════════════════════ */
.story {
  padding: 140px 0;
  background: var(--dark);
}
.story-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 100px; align-items: start;
}
.story-copy h2 {
  font-family: var(--serif);
  font-size: clamp(34px, 3.5vw, 48px);
  font-weight: 500; line-height: 1.1;
  letter-spacing: -0.025em; color: var(--white);
  margin-bottom: 28px;
}
.story-copy h2 em { font-style: italic; color: var(--teal-light); }
.story-copy p {
  font-size: 15px; color: var(--cream-dim);
  line-height: 1.85; margin-bottom: 20px;
}
.story-copy p strong { color: var(--cream); font-weight: 500; }
.story-copy p:last-child { margin-bottom: 0; }

/* Timeline */
.timeline { display: flex; flex-direction: column; gap: 0; }
.timeline-item {
  display: grid; grid-template-columns: 80px 1fr;
  gap: 28px; padding: 32px 0;
  border-bottom: 1px solid var(--rule);
  align-items: start;
}
.timeline-item:last-child { border-bottom: none; }
.timeline-year {
  font-family: var(--serif); font-size: 15px; font-weight: 500;
  color: var(--teal); letter-spacing: -0.01em;
  padding-top: 2px;
}
.timeline-content h4 {
  font-family: var(--serif); font-size: 18px; font-weight: 500;
  color: var(--white); margin-bottom: 8px; line-height: 1.3;
}
.timeline-content p {
  font-size: 13px; color: var(--cream-dim); line-height: 1.7;
}

/* ══════════════════════════════════ */
/* DIFFERENT */
/* ══════════════════════════════════ */
.different {
  padding: 140px 0;
  background: var(--dark-2);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.different-header { margin-bottom: 80px; }
.different-header h2 {
  font-family: var(--serif);
  font-size: clamp(38px, 4vw, 56px);
  font-weight: 500; letter-spacing: -0.03em;
  color: var(--white); line-height: 1.05;
  max-width: 700px;
}
.different-header h2 em { font-style: italic; color: var(--teal-light); }
.different-header p {
  font-size: 15px; color: var(--cream-dim);
  line-height: 1.8; max-width: 520px; margin-top: 20px;
}
.diff-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
.diff-card {
  padding: 48px 40px;
  background: var(--dark-3);
  border: 1px solid var(--rule);
  position: relative; overflow: hidden;
  transition: border-color 0.3s;
}
.diff-card:hover { border-color: var(--teal-border); }
.diff-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, var(--teal), transparent 70%);
  opacity: 0; transition: opacity 0.3s;
}
.diff-card:hover::after { opacity: 1; }
.diff-num {
  font-family: var(--serif); font-size: 64px; font-weight: 700;
  color: var(--teal); opacity: 0.06; line-height: 1;
  position: absolute; top: 16px; right: 24px;
}
.diff-card h3 {
  font-family: var(--serif); font-size: 22px; font-weight: 500;
  color: var(--white); margin-bottom: 16px; line-height: 1.2;
  letter-spacing: -0.01em;
}
.diff-card p { font-size: 13px; color: var(--cream-dim); line-height: 1.8; }
.diff-card p strong { color: var(--cream); }

/* ══════════════════════════════════ */
/* EXPERTISE DEEP DIVE */
/* ══════════════════════════════════ */
.expertise {
  padding: 140px 0;
  background: var(--dark);
}
.expertise-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 100px; align-items: center;
}
.expertise-copy h2 {
  font-family: var(--serif);
  font-size: clamp(34px, 3.5vw, 48px);
  font-weight: 500; line-height: 1.1;
  letter-spacing: -0.025em; color: var(--white);
  margin-bottom: 28px;
}
.expertise-copy h2 em { font-style: italic; color: var(--teal-light); }
.expertise-copy p {
  font-size: 15px; color: var(--cream-dim);
  line-height: 1.85; margin-bottom: 20px;
}
.expertise-copy p strong { color: var(--cream); font-weight: 500; }
.expertise-logos {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}
.expertise-logo-card {
  padding: 32px 28px;
  background: var(--dark-2);
  border: 1px solid var(--rule);
  display: flex; flex-direction: column;
  gap: 12px;
  transition: border-color 0.3s;
}
.expertise-logo-card:hover { border-color: var(--teal-border); }
.exp-logo-name {
  font-family: var(--serif); font-size: 20px; font-weight: 500;
  color: var(--white); letter-spacing: -0.01em;
}
.exp-logo-role { font-size: 11px; color: var(--teal); letter-spacing: 0.1em; text-transform: uppercase; }
.exp-logo-desc { font-size: 12px; color: var(--cream-dim); opacity: 0.6; line-height: 1.6; }
.expertise-logo-card.stanford { border-color: var(--teal-border); }
.expertise-logo-card.stanford .exp-logo-name { color: var(--teal-light); }

/* ══════════════════════════════════ */
/* PROMISE */
/* ══════════════════════════════════ */
.promise {
  padding: 120px 0;
  background: var(--dark-2);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.promise-inner {
  max-width: 800px; margin: 0 auto; text-align: center;
}
.promise-quote {
  font-family: var(--serif);
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 400; font-style: italic;
  line-height: 1.35; letter-spacing: -0.02em;
  color: var(--white); margin-bottom: 40px;
}
.promise-quote em { color: var(--teal-light); font-style: normal; }
.promise-attr {
  font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--cream-dim); opacity: 0.45;
}

/* ══════════════════════════════════ */
/* FINAL CTA */
/* ══════════════════════════════════ */
.about-cta {
  padding: 160px 0;
  background: var(--dark);
  text-align: center;
  position: relative; overflow: hidden;
}
.about-cta::before {
  content: '';
  position: absolute; top: -50%; left: 50%; transform: translateX(-50%);
  width: 800px; height: 800px;
  background: radial-gradient(circle, rgba(12,158,143,0.09) 0%, transparent 60%);
}
.about-cta h2 {
  font-family: var(--serif);
  font-size: clamp(38px, 4.5vw, 64px);
  font-weight: 500; letter-spacing: -0.03em;
  line-height: 1.0; color: var(--white);
  margin-bottom: 20px; position: relative; z-index: 2;
}
.about-cta h2 em { font-style: italic; color: var(--teal-light); }
.about-cta p {
  font-size: 16px; color: var(--cream-dim);
  max-width: 460px; margin: 0 auto 44px;
  line-height: 1.75; position: relative; z-index: 2;
}
.about-cta .btn-row { justify-content: center; position: relative; z-index: 2; }

/* ══════════════════════════════════ */
/* FOOTER */
/* ══════════════════════════════════ */
.footer {
  background: var(--dark-2);
  border-top: 1px solid var(--rule);
  padding: 48px 64px;
}
.footer-inner {
  max-width: 1140px; margin: 0 auto;
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;
}
.footer-copy { font-size: 11px; color: var(--cream-dim); opacity: 0.3; letter-spacing: 0.04em; }
.footer-tagline { font-family: var(--serif); font-size: 12px; font-style: italic; color: var(--cream-dim); opacity: 0.3; }

/* scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--dark-2); }
::-webkit-scrollbar-thumb { background: var(--teal-dim); border-radius: 2px; }


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
`,
  body: `<!-- ══ NAV ══ -->
<nav class="nav">
  <a href="/">
    <img class="brand-logo-mark" src="/brand/clinova-logo-mark.png" alt="ClinovaAI" width="58" height="58">
  </a>
  <div class="nav-links">
    <a class="nav-link" href="/#services">Services</a>
    <a class="nav-link" href="/#pricing">Pricing</a>
    <a class="nav-link active" href="/about">About</a>
    <a class="nav-link" href="/#faq">FAQ</a>
    <a class="nav-cta" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Book a Call ↗</a>
  </div>
</nav>

<!-- ══ HERO ══ -->
<section class="about-hero">
  <div class="hero-glow"></div>
  <div class="about-hero-grid">
    <div>
      <div class="eyebrow reveal">About ClinovaAI</div>
      <h1 class="reveal reveal-delay-1">Built by an AI engineer.<br><em>Not a marketer.</em></h1>
      <p class="about-hero-sub reveal reveal-delay-2">Most AI tools for clinics are built by people who discovered AI last year. ClinovaAI was built by someone who's been building AI systems since 2015 - a decade before it became a trend - and has deployed them at some of the world's most demanding technology companies.</p>
      <div class="btn-row reveal reveal-delay-3">
        <a class="btn-primary" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Book a Discovery Call ↗</a>
        <a class="btn-outline" href="/">See Our Services</a>
      </div>
    </div>
    <div class="founder-photo-wrap reveal reveal-delay-2">
      <div class="founder-photo-frame">
        <img src="/uploads/ProfilePic.jpg" alt="Founder of ClinovaAI" class="founder-photo">
        <div class="founder-credentials">
          <div class="founder-name" id="founder-name">Founder &amp; CEO, ClinovaAI</div>
          <div class="founder-title">Stanford AI · 12 Years Engineering · Silicon Valley Veteran</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ CREDENTIALS STRIP ══ -->
<div class="cred-strip">
  <div class="cred-grid">
    <div class="cred-item reveal">
      <div class="cred-value">12<span>yrs</span></div>
      <div class="cred-label">Software engineering experience across enterprise and startup</div>
    </div>
    <div class="cred-item reveal reveal-delay-1">
      <div class="cred-value"><span>2015</span></div>
      <div class="cred-label">Working in AI since 2015 - a decade before it became a buzzword</div>
    </div>
    <div class="cred-item reveal reveal-delay-2">
      <div class="cred-value" style="font-size:28px; padding-top:6px;">Stanford</div>
      <div class="cred-label">AI studied at Stanford University - one of the world's leading programmes</div>
    </div>
    <div class="cred-item reveal reveal-delay-3">
      <div class="cred-value" style="font-size:28px; padding-top:6px;">Zendesk</div>
      <div class="cred-label">Deployed AI systems at Zendesk and other top Silicon Valley companies</div>
    </div>
  </div>
</div>

<!-- ══ STORY ══ -->
<section class="story">
  <div class="container">
    <div class="story-grid">
      <div class="story-copy">
        <div class="eyebrow reveal">Our Story</div>
        <h2 class="reveal reveal-delay-1">Why we built this - and why it matters that we did.</h2>
        <p class="reveal reveal-delay-2">I didn't build ClinovaAI because AI became popular. I built it because I'd spent over a decade watching what AI could genuinely do inside businesses - and I noticed that the industries that needed it most were the ones being ignored entirely.</p>
        <p class="reveal reveal-delay-3">Aesthetic clinics are run by extraordinary practitioners. Women who've invested years developing clinical skills, built loyal client relationships, and created businesses they're genuinely proud of. But <strong>the systems behind those businesses are broken.</strong> Phones going unanswered. Leads disappearing. Revenue evaporating - not because the clinic isn't excellent, but because no one built the infrastructure to capture it.</p>
        <p class="reveal reveal-delay-4">The AI tools that exist either require a full-time technician to manage, or they're basic chatbots dressed up as something more. I knew there was a better way - because I'd built the better way, for companies like Zendesk, at enterprise scale.</p>
        <p class="reveal reveal-delay-5">ClinovaAI is what happens when genuine AI engineering meets a real, painful, specific problem. A system that actually works. That we build, install, and manage entirely. That pays for itself within the first month.</p>
      </div>

      <!-- Timeline -->
      <div>
        <div class="eyebrow reveal">Career Timeline</div>
        <div class="timeline reveal reveal-delay-1">
          <div class="timeline-item">
            <div class="timeline-year">2015</div>
            <div class="timeline-content">
              <h4>Started building AI systems</h4>
              <p>Working on natural language processing and machine learning models years before the technology entered mainstream conversation. This isn't a pivot. It's a decade of compounding expertise.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">Stanford</div>
            <div class="timeline-content">
              <h4>AI studies at Stanford University</h4>
              <p>Trained in artificial intelligence at one of the world's foremost programmes - the same institution that shaped the engineers behind the tools the world now uses every day.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">Zendesk</div>
            <div class="timeline-content">
              <h4>Silicon Valley - enterprise AI deployment</h4>
              <p>Built and deployed AI systems at Zendesk and other Silicon Valley companies at global scale. Enterprise-grade standards. Real accountability. Systems that couldn't afford to fail.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">2024</div>
            <div class="timeline-content">
              <h4>ClinovaAI - focused on aesthetic clinics</h4>
              <p>12 years of engineering experience, deliberately focused on one specific problem: capturing the revenue that aesthetic clinics are losing every single day from missed calls and unanswered enquiries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ DIFFERENT ══ -->
<section class="different">
  <div class="container">
    <div class="different-header">
      <div class="eyebrow reveal">What Makes Us Different</div>
      <h2 class="reveal reveal-delay-1">We are not a software tool.<br><em>We are a specialist service.</em></h2>
      <p class="reveal reveal-delay-2">There's a significant difference between handing a clinic owner a piece of software and actually solving their problem. We do the latter - entirely.</p>
    </div>
    <div class="diff-grid">
      <div class="diff-card reveal">
        <div class="diff-num">01</div>
        <h3>Done for you. Not done by you.</h3>
        <p>We build everything. We install everything. We manage everything on an ongoing basis. Your team doesn't learn a new system. You don't hire a new staff member. You don't change a single thing about how you operate. <strong>We handle it entirely.</strong></p>
      </div>
      <div class="diff-card reveal reveal-delay-1">
        <div class="diff-num">02</div>
        <h3>Built by an AI engineer. Not a reseller.</h3>
        <p>Most "AI automation agencies" are reselling off-the-shelf tools with a markup. ClinovaAI is built by someone who's been engineering AI systems for 12 years, at enterprise scale. <strong>The depth of the technology is genuinely different.</strong></p>
      </div>
      <div class="diff-card reveal reveal-delay-2">
        <div class="diff-num">03</div>
        <h3>Tailored to your clinic. Not templated.</h3>
        <p>Every system is configured specifically to your clinic - your services, your pricing, your tone, your booking process. No generic scripts. No one-size-fits-all chatbots. <strong>A system that represents your brand</strong> as precisely as you do yourself.</p>
      </div>
      <div class="diff-card reveal reveal-delay-3">
        <div class="diff-num">04</div>
        <h3>We're accountable to results.</h3>
        <p>We don't measure success in deliverables. We measure it in captured bookings and recovered revenue. Our 30-day guarantee isn't a marketing line - it's the commercial model we hold ourselves to. <strong>If you don't see results, we don't get paid.</strong></p>
      </div>
      <div class="diff-card reveal reveal-delay-4">
        <div class="diff-num">05</div>
        <h3>We understand your clients.</h3>
        <p>Aesthetic clinic clients are discerning. They respond to warmth, to professionalism, to precision. Our AI receptionist is trained to communicate at the standard your brand demands - never robotic, <strong>never off-brand, never less than excellent.</strong></p>
      </div>
      <div class="diff-card reveal reveal-delay-5">
        <div class="diff-num">06</div>
        <h3>No long-term contracts.</h3>
        <p>We don't lock you into 12-month agreements and hope you forget. We earn your continued business every single month by delivering measurable results. If we stop performing, <strong>you stop paying.</strong> It's that straightforward.</p>
      </div>
    </div>
  </div>
</section>

<!-- ══ EXPERTISE ══ -->
<section class="expertise">
  <div class="container">
    <div class="expertise-inner">
      <div class="expertise-copy">
        <div class="eyebrow reveal">The Engineering Behind It</div>
        <h2 class="reveal reveal-delay-1">This is what a decade of AI expertise <em>actually looks like.</em></h2>
        <p class="reveal reveal-delay-2">The AI receptionist space is crowded with tools that use basic scripting and call it artificial intelligence. What we build is categorically different - the kind of AI that handles nuance, adapts to context, and gets better over time.</p>
        <p class="reveal reveal-delay-3">That capability comes directly from the engineering background behind ClinovaAI. <strong>Stanford-trained AI, refined across enterprise deployments at companies like Zendesk, and now applied with precision to the specific context of aesthetic clinic operations.</strong></p>
        <p class="reveal reveal-delay-4">The result is a system sophisticated enough to handle the subtlety of your client conversations - yet invisible enough that clients simply experience a prompt, professional, and helpful response. Exactly what your brand deserves.</p>
      </div>
      <div>
        <div class="expertise-logos">
          <div class="expertise-logo-card stanford reveal">
            <div class="exp-logo-name">Stanford</div>
            <div class="exp-logo-role">AI Programme</div>
            <div class="exp-logo-desc">One of the world's foremost AI research and education institutions. The same environment that trained the engineers behind the tools the world now uses daily.</div>
          </div>
          <div class="expertise-logo-card reveal reveal-delay-1">
            <div class="exp-logo-name">Zendesk</div>
            <div class="exp-logo-role">AI Engineering</div>
            <div class="exp-logo-desc">Enterprise-scale AI deployment, serving millions of interactions. The standard for reliability, accuracy, and performance under pressure.</div>
          </div>
          <div class="expertise-logo-card reveal reveal-delay-2">
            <div class="exp-logo-name">12 Years</div>
            <div class="exp-logo-role">Software Engineering</div>
            <div class="exp-logo-desc">Not a recent convert to technology. A decade of building systems at the highest level - from Silicon Valley startups to global enterprises.</div>
          </div>
          <div class="expertise-logo-card reveal reveal-delay-3">
            <div class="exp-logo-name">Since 2015</div>
            <div class="exp-logo-role">AI Before It Was Obvious</div>
            <div class="exp-logo-desc">Building AI systems years before ChatGPT made it a household word. The expertise here is genuine, deep, and hard-won.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ PROMISE ══ -->
<section class="promise">
  <div class="container">
    <div class="promise-inner">
      <div class="eyebrow reveal" style="justify-content:center;">Our Commitment</div>
      <p class="promise-quote reveal reveal-delay-1">
        "The clinics we work with deserve a system built by someone who actually understands AI - not one assembled from a template and sold with promises. <em>That's the standard we hold ourselves to.</em>"
      </p>
      <div class="promise-attr reveal reveal-delay-2">Founder &amp; CEO - ClinovaAI · clinovaai.co</div>
    </div>
  </div>
</section>

<!-- ══ FINAL CTA ══ -->
<section class="about-cta" id="about-cta">
  <div class="container">
    <div class="eyebrow reveal" style="justify-content:center;">Work With Us</div>
    <h2 class="reveal reveal-delay-1">Ready to stop<br><em>losing bookings?</em></h2>
    <p class="reveal reveal-delay-2">Book a 30-minute discovery call. We'll review your current missed call volume, show you exactly what we'd build for your clinic, and give you a clear picture of what to expect within 30 days.</p>
    <div class="btn-row reveal reveal-delay-3">
      <a class="btn-primary" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer" style="font-size:13px; padding:18px 40px;">Book a Discovery Call ↗</a>
      <a class="btn-outline" href="/">View Our Services</a>
    </div>
    <p class="reveal reveal-delay-4" style="margin-top:28px; font-size:12px; color:var(--cream-dim); opacity:0.4; letter-spacing:0.04em;">No commitment required · 30 minutes · 30-day results guaranteed</p>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  <div class="footer-inner">
    <img class="brand-logo-mark" src="/brand/clinova-logo-mark.png" alt="ClinovaAI" width="62" height="62">
    <div class="footer-copy">© 2026 ClinovaAI Ltd · clinovaai.co</div>
    <div class="footer-tagline">"Never Miss a Booking Again"</div>
  </div>
</footer>`,
} as const;

export const brandKitPage = {
  css: `
  /* ── TOKENS ── */
  :root {
    --teal:        #0C9E8F;
    --teal-light:  #13BBA9;
    --teal-dim:    #0A7A6E;
    --teal-glow:   rgba(12,158,143,0.18);
    --teal-subtle: rgba(12,158,143,0.07);
    --gold:        #B8935A;
    --gold-light:  #D4AE78;
    --dark:        #080C0B;
    --dark-2:      #0E1512;
    --dark-3:      #162019;
    --dark-4:      #1D2B27;
    --cream:       #F0E8DC;
    --cream-dim:   #C8BEB3;
    --white:       #F6F3F0;
    --rule:        rgba(240,232,220,0.08);
    --serif: var(--font-playfair), Georgia, serif;
    --sans: var(--font-dm-sans), system-ui, sans-serif;
  }

  /* ── RESET ── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--dark);
    color: var(--cream);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* ── LAYOUT ── */
  .layout { display: flex; min-height: 100vh; }

  /* ── SIDEBAR ── */
  .sidebar {
    position: fixed; top: 0; left: 0;
    width: 220px; height: 100vh;
    background: var(--dark-2);
    border-right: 1px solid var(--rule);
    display: flex; flex-direction: column;
    z-index: 100; overflow-y: auto;
    padding: 32px 0 24px;
  }
  .sidebar-logo {
    padding: 0 24px 32px;
    border-bottom: 1px solid var(--rule);
  }
  .sidebar-logo svg { width: 120px; height: auto; }
  .sidebar-nav { padding: 24px 0; flex: 1; }
  .nav-label {
    font-family: var(--sans);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--teal);
    padding: 0 24px 10px;
    display: block;
    margin-top: 20px;
  }
  .nav-label:first-child { margin-top: 0; }
  .nav-link {
    display: block;
    padding: 8px 24px;
    font-size: 13px;
    font-weight: 400;
    color: var(--cream-dim);
    text-decoration: none;
    letter-spacing: 0.01em;
    transition: color 0.2s, background 0.2s;
    border-left: 2px solid transparent;
  }
  .nav-link:hover { color: var(--cream); background: var(--teal-subtle); border-left-color: var(--teal); }
  .nav-link.active { color: var(--cream); border-left-color: var(--teal); }
  .sidebar-footer {
    padding: 16px 24px 0;
    border-top: 1px solid var(--rule);
    font-size: 11px;
    color: var(--cream-dim);
    opacity: 0.5;
  }

  /* ── MAIN ── */
  .main { margin-left: 220px; flex: 1; }

  /* ── SECTIONS ── */
  .section {
    padding: 100px 72px;
    border-bottom: 1px solid var(--rule);
    max-width: 1100px;
  }
  .section:last-child { border-bottom: none; }

  /* ── SECTION HEADERS ── */
  .section-eyebrow {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .section-eyebrow::after {
    content: '';
    display: block;
    height: 1px;
    width: 40px;
    background: var(--teal);
    opacity: 0.5;
  }
  .section-title {
    font-family: var(--serif);
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--white);
    margin-bottom: 20px;
  }
  .section-desc {
    font-size: 15px;
    line-height: 1.75;
    color: var(--cream-dim);
    max-width: 560px;
    margin-bottom: 60px;
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 72px;
    background: var(--dark);
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid var(--rule);
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -200px; right: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(12,158,143,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-eyebrow {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 28px;
  }
  .hero-title {
    font-family: var(--serif);
    font-size: clamp(56px, 7vw, 96px);
    font-weight: 500;
    line-height: 1.0;
    letter-spacing: -0.03em;
    color: var(--white);
    margin-bottom: 32px;
    max-width: 800px;
  }
  .hero-title em { font-style: italic; color: var(--teal-light); }
  .hero-sub {
    font-size: 16px;
    color: var(--cream-dim);
    max-width: 480px;
    line-height: 1.7;
    margin-bottom: 56px;
  }
  .hero-tagline {
    font-family: var(--serif);
    font-size: 18px;
    font-style: italic;
    color: var(--cream-dim);
    letter-spacing: 0.01em;
  }
  .hero-meta {
    position: absolute;
    bottom: 40px; right: 72px;
    display: flex;
    gap: 32px;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--cream-dim);
    opacity: 0.4;
  }

  /* ── COLOUR PALETTE ── */
  .palette-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 2px; margin-bottom: 48px; }
  .swatch {
    padding: 28px 24px 20px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: transform 0.2s;
  }
  .swatch:hover { transform: scale(1.02); z-index: 1; }
  .swatch-name { font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px; }
  .swatch-role { font-size: 10px; letter-spacing: 0.05em; opacity: 0.6; margin-bottom: 20px; text-transform: uppercase; }
  .swatch-values { font-size: 10px; line-height: 1.8; opacity: 0.75; font-variant-numeric: tabular-nums; }
  .swatch-values span { display: block; }

  /* ── TYPOGRAPHY ── */
  .type-specimen { margin-bottom: 60px; padding: 48px; background: var(--dark-2); border: 1px solid var(--rule); border-radius: 8px; }
  .type-meta { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--teal); margin-bottom: 20px; display: flex; gap: 16px; }
  .type-meta span { color: var(--cream-dim); }
  .type-pair-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 48px; }
  .type-card { padding: 40px; background: var(--dark-2); border: 1px solid var(--rule); }
  .type-scale { display: flex; flex-direction: column; gap: 32px; }
  .type-scale-row { display: flex; align-items: baseline; gap: 24px; padding: 24px 0; border-bottom: 1px solid var(--rule); }
  .type-scale-row:last-child { border-bottom: none; }
  .type-scale-label { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream-dim); opacity: 0.5; min-width: 80px; flex-shrink: 0; }
  .ts-h1 { font-family: var(--serif); font-size: 64px; font-weight: 500; line-height: 1.05; letter-spacing: -0.03em; color: var(--white); }
  .ts-h2 { font-family: var(--serif); font-size: 48px; font-weight: 500; line-height: 1.1; letter-spacing: -0.025em; color: var(--white); }
  .ts-h3 { font-family: var(--serif); font-size: 34px; font-weight: 500; line-height: 1.2; letter-spacing: -0.02em; color: var(--white); }
  .ts-h4 { font-family: var(--serif); font-size: 24px; font-weight: 600; line-height: 1.25; letter-spacing: -0.01em; color: var(--white); }
  .ts-body { font-family: var(--sans); font-size: 16px; font-weight: 400; line-height: 1.75; color: var(--cream-dim); }
  .ts-small { font-family: var(--sans); font-size: 14px; font-weight: 400; line-height: 1.6; color: var(--cream-dim); }
  .ts-caption { font-family: var(--sans); font-size: 12px; font-weight: 400; line-height: 1.5; letter-spacing: 0.02em; color: var(--cream-dim); opacity: 0.6; }
  .ts-btn { font-family: var(--sans); font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--teal); }
  .ts-eyebrow { font-family: var(--sans); font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); }

  /* ── LOGO CONCEPTS ── */
  .logo-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px; margin-bottom: 48px; }
  .logo-card { background: var(--dark-2); border: 1px solid var(--rule); padding: 48px 32px; display: flex; flex-direction: column; gap: 0; }
  .logo-card-dark { background: var(--dark-2); }
  .logo-card-light { background: var(--cream); }
  .logo-display { height: 160px; display: flex; align-items: center; justify-content: center; margin-bottom: 32px; }
  .logo-display-sm { height: 80px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
  .logo-name { font-size: 10px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--teal); margin-bottom: 6px; }
  .logo-desc { font-size: 13px; color: var(--cream-dim); line-height: 1.6; }
  .logo-desc-dark { color: #4A5650; }
  .logo-variants { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 2px; }
  .logo-variant-card { background: var(--dark-3); border: 1px solid var(--rule); padding: 32px 24px; text-align: center; }
  .logo-variant-card.on-light { background: var(--cream); }
  .logo-variant-card.on-teal { background: var(--teal); }
  .logo-variant-label { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream-dim); margin-top: 16px; opacity: 0.5; }

  /* ── RULES TABLE ── */
  .rules-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 48px; }
  .rule-card { padding: 32px; background: var(--dark-2); border: 1px solid var(--rule); }
  .rule-card-title { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal); margin-bottom: 16px; }
  .rule-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .rule-list li { font-size: 13px; color: var(--cream-dim); line-height: 1.5; padding-left: 16px; position: relative; }
  .rule-list li::before { content: '-'; position: absolute; left: 0; color: var(--teal); opacity: 0.6; }
  .rule-list li.bad { color: #C47A7A; }
  .rule-list li.bad::before { color: #C47A7A; content: '✕'; font-size: 10px; top: 1px; }

  /* ── UI COMPONENTS ── */
  .component-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 48px; }
  .component-card { background: var(--dark-2); border: 1px solid var(--rule); padding: 40px; }
  .component-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--teal); margin-bottom: 28px; }

  /* buttons */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--teal); color: var(--dark);
    font-family: var(--sans); font-size: 12px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 14px 28px; border: none; border-radius: 2px;
    cursor: pointer; transition: all 0.2s;
    box-shadow: 0 0 24px rgba(12,158,143,0.25);
  }
  .btn-primary:hover { background: var(--teal-light); box-shadow: 0 0 32px rgba(12,158,143,0.4); }
  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--cream);
    font-family: var(--sans); font-size: 12px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 13px 28px; border: 1px solid rgba(240,232,220,0.25); border-radius: 2px;
    cursor: pointer; transition: all 0.2s;
  }
  .btn-secondary:hover { border-color: var(--teal); color: var(--teal); }
  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--teal);
    font-family: var(--sans); font-size: 12px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 13px 0; border: none; border-bottom: 1px solid var(--teal);
    cursor: pointer; transition: all 0.2s;
  }
  .btn-row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }

  /* input */
  .input-demo {
    background: transparent;
    border: 1px solid rgba(240,232,220,0.15);
    color: var(--cream);
    font-family: var(--sans);
    font-size: 14px;
    padding: 14px 18px;
    border-radius: 2px;
    width: 100%;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    margin-bottom: 12px;
  }
  .input-demo::placeholder { color: var(--cream-dim); opacity: 0.35; }
  .input-demo:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(12,158,143,0.12); }
  .input-label { font-size: 11px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cream-dim); margin-bottom: 8px; display: block; }

  /* stat card */
  .stat-card {
    background: var(--dark-3); border: 1px solid var(--rule);
    padding: 28px 24px; border-radius: 4px;
    position: relative; overflow: hidden;
  }
  .stat-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--teal), transparent);
  }
  .stat-number { font-family: var(--serif); font-size: 42px; font-weight: 500; color: var(--white); letter-spacing: -0.03em; line-height: 1; margin-bottom: 8px; }
  .stat-label { font-size: 12px; color: var(--cream-dim); letter-spacing: 0.04em; }
  .stat-change { font-size: 11px; color: var(--teal); letter-spacing: 0.05em; margin-top: 8px; }
  .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }

  /* badge */
  .badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 100px; font-size: 11px; font-weight: 500; letter-spacing: 0.04em; }
  .badge-teal { background: rgba(12,158,143,0.15); color: var(--teal-light); border: 1px solid rgba(12,158,143,0.2); }
  .badge-gold { background: rgba(184,147,90,0.15); color: var(--gold-light); border: 1px solid rgba(184,147,90,0.2); }
  .badge-neutral { background: rgba(240,232,220,0.06); color: var(--cream-dim); border: 1px solid var(--rule); }
  .badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
  .badge-row { display: flex; flex-wrap: wrap; gap: 8px; }

  /* nav component */
  .nav-demo {
    background: rgba(8,12,11,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--rule);
    padding: 0 32px;
    display: flex; align-items: center; justify-content: space-between;
    height: 64px;
  }
  .nav-links-demo { display: flex; gap: 32px; }
  .nav-link-demo { font-size: 13px; color: var(--cream-dim); text-decoration: none; letter-spacing: 0.02em; }
  .nav-link-demo.active { color: var(--cream); }

  /* hero strip */
  .hero-strip {
    background: var(--dark-3);
    padding: 64px 48px;
    border: 1px solid var(--rule);
    position: relative; overflow: hidden;
  }
  .hero-strip::after {
    content: '';
    position: absolute;
    bottom: -100px; right: -100px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(12,158,143,0.1) 0%, transparent 70%);
  }
  .hero-strip-eyebrow { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--teal); margin-bottom: 20px; }
  .hero-strip-title { font-family: var(--serif); font-size: 40px; font-weight: 500; letter-spacing: -0.025em; line-height: 1.1; color: var(--white); margin-bottom: 20px; max-width: 480px; }
  .hero-strip-title em { font-style: italic; color: var(--teal-light); }
  .hero-strip-body { font-size: 14px; color: var(--cream-dim); max-width: 380px; line-height: 1.7; margin-bottom: 32px; }

  /* ── BUSINESS CARD ── */
  .card-wrapper { display: flex; gap: 40px; flex-wrap: wrap; margin-bottom: 48px; }
  .biz-card {
    width: 340px; height: 190px;
    border-radius: 6px;
    position: relative; overflow: hidden;
    flex-shrink: 0;
  }
  .biz-card-dark {
    background: var(--dark-2);
    border: 1px solid var(--rule);
  }
  .biz-card-light {
    background: var(--cream);
  }
  .biz-card-inner { padding: 28px 28px 24px; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
  .biz-card-accent {
    position: absolute; bottom: 0; left: 0;
    width: 100%; height: 2px;
    background: linear-gradient(90deg, var(--teal), var(--gold), transparent);
  }
  .biz-name { font-family: var(--serif); font-size: 15px; font-weight: 500; letter-spacing: -0.01em; color: var(--white); margin-bottom: 3px; }
  .biz-name-light { color: var(--dark); }
  .biz-role { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--teal); }
  .biz-contact { font-size: 10px; color: var(--cream-dim); line-height: 1.8; letter-spacing: 0.01em; }
  .biz-contact-dark { color: #4A5650; }

  /* ── EMAIL SIG ── */
  .email-sig-wrap { background: #1A1F1E; border: 1px solid var(--rule); padding: 40px; margin-bottom: 48px; border-radius: 4px; }
  .email-sig { border-left: 2px solid var(--teal); padding-left: 24px; display: flex; gap: 24px; align-items: flex-start; }
  .sig-info {}
  .sig-name { font-family: var(--serif); font-size: 18px; font-weight: 500; color: var(--white); margin-bottom: 2px; }
  .sig-role { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--teal); margin-bottom: 14px; }
  .sig-contact-row { font-size: 12px; color: var(--cream-dim); line-height: 2; }
  .sig-contact-row a { color: var(--cream-dim); text-decoration: none; }
  .sig-divider { width: 1px; background: var(--rule); align-self: stretch; }
  .sig-brand { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding-left: 24px; }
  .sig-tagline { font-size: 11px; font-style: italic; color: var(--cream-dim); opacity: 0.5; margin-top: 8px; }

  /* ── SOCIAL CARDS ── */
  .social-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-bottom: 48px; }
  .social-card {
    background: var(--dark-2); border: 1px solid var(--rule);
    aspect-ratio: 1; position: relative; overflow: hidden;
    display: flex; flex-direction: column; justify-content: flex-end; padding: 24px;
  }
  .social-card::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 30%, rgba(8,12,11,0.9) 100%);
    z-index: 1;
  }
  .social-card-bg { position: absolute; inset: 0; }
  .social-card-content { position: relative; z-index: 2; }
  .sc-eyebrow { font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--teal); margin-bottom: 8px; }
  .sc-title { font-family: var(--serif); font-size: 18px; font-weight: 500; line-height: 1.2; color: var(--white); margin-bottom: 8px; }
  .sc-handle { font-size: 10px; color: var(--cream-dim); opacity: 0.5; letter-spacing: 0.05em; }

  /* ── BRAND VOICE ── */
  .voice-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 48px; }
  .voice-card { padding: 36px; background: var(--dark-2); border: 1px solid var(--rule); }
  .voice-card-title { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal); margin-bottom: 20px; }
  .vocab-list { display: flex; flex-wrap: wrap; gap: 8px; }
  .vocab-chip {
    padding: 6px 14px;
    background: var(--dark-3); border: 1px solid var(--rule);
    font-size: 12px; color: var(--cream-dim); border-radius: 2px;
    letter-spacing: 0.02em;
  }
  .vocab-chip.avoid { border-color: rgba(196,122,122,0.25); background: rgba(196,122,122,0.06); color: #C47A7A; }
  .headline-card { padding: 36px; background: var(--dark-3); border: 1px solid var(--rule); margin-bottom: 2px; }
  .headline-number { font-size: 10px; letter-spacing: 0.2em; color: var(--teal); margin-bottom: 16px; }
  .headline-text { font-family: var(--serif); font-size: 28px; font-weight: 500; line-height: 1.2; letter-spacing: -0.02em; color: var(--white); margin-bottom: 12px; }
  .headline-text em { font-style: italic; color: var(--teal-light); }
  .headline-note { font-size: 12px; color: var(--cream-dim); opacity: 0.55; line-height: 1.5; }
  .pillar-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin-bottom: 48px; }
  .pillar-card { padding: 32px 24px; background: var(--dark-2); border: 1px solid var(--rule); }
  .pillar-word { font-family: var(--serif); font-size: 22px; font-weight: 500; color: var(--white); margin-bottom: 12px; }
  .pillar-def { font-size: 12px; color: var(--cream-dim); line-height: 1.65; }

  /* ── PITCH DECK PREVIEW ── */
  .deck-preview { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 48px; }
  .deck-slide { aspect-ratio: 16/9; position: relative; overflow: hidden; border: 1px solid var(--rule); }
  .deck-slide-inner { position: absolute; inset: 0; display: flex; flex-direction: column; }
  .ds-title { background: var(--dark); display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 9% 11%; }
  .ds-problem { background: var(--dark-2); }
  .ds-solution { background: var(--dark-3); }
  .ds-result { background: var(--dark); }
  .ds-eyebrow { font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--teal); margin-bottom: 10px; }
  .ds-h { font-family: var(--serif); font-size: clamp(14px, 2.4vw, 22px); font-weight: 500; letter-spacing: -0.025em; line-height: 1.1; color: var(--white); margin-bottom: 8px; }
  .ds-h em { font-style: italic; color: var(--teal-light); }
  .ds-sub { font-size: clamp(8px, 1vw, 10px); color: var(--cream-dim); opacity: 0.6; }
  .ds-accent-line { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--teal), transparent 60%); }
  .ds-number { font-family: var(--serif); font-size: clamp(32px, 5vw, 54px); color: var(--teal); opacity: 0.12; position: absolute; bottom: 6%; right: 8%; font-weight: 700; line-height: 1; }
  .ds-content { padding: 8% 10%; flex: 1; display: flex; flex-direction: column; justify-content: center; }
  .ds-stat-row { display: flex; gap: 12px; margin-top: 12px; }
  .ds-stat { flex: 1; background: rgba(12,158,143,0.06); border: 1px solid rgba(12,158,143,0.12); padding: 12px; border-radius: 2px; }
  .ds-stat-n { font-family: var(--serif); font-size: clamp(16px, 2.5vw, 24px); color: var(--teal); font-weight: 500; }
  .ds-stat-l { font-size: clamp(7px, 0.9vw, 9px); color: var(--cream-dim); opacity: 0.5; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px; }
  .ds-list { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
  .ds-list-item { font-size: clamp(7px, 1vw, 10px); color: var(--cream-dim); padding-left: 12px; position: relative; line-height: 1.4; }
  .ds-list-item::before { content: '-'; position: absolute; left: 0; color: var(--teal); font-size: 8px; }

  /* ── PHOTOGRAPHY DIRECTION ── */
  .photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-bottom: 48px; }
  .photo-placeholder {
    aspect-ratio: 4/3;
    background: var(--dark-3);
    border: 1px solid var(--rule);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 12px;
    padding: 24px;
  }
  .photo-ph-label { font-family: monospace; font-size: 10px; color: var(--cream-dim); opacity: 0.4; text-align: center; line-height: 1.5; letter-spacing: 0.05em; }
  .photo-ph-lines { width: 48px; }
  .photo-ph-lines line { stroke: rgba(12,158,143,0.3); stroke-width: 0.5; }

  /* ── DIVIDER ── */
  hr.fancy { border: none; border-top: 1px solid var(--rule); margin: 48px 0; }

  /* ── SCROLL REVEAL (none - static) ── */
  
  /* ── UTILITY ── */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 48px; }
  .tag { display: inline-block; padding: 3px 10px; background: var(--teal-subtle); border: 1px solid rgba(12,158,143,0.2); color: var(--teal); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 2px; margin-bottom: 12px; }
  .glow-text { color: var(--teal-light); text-shadow: 0 0 40px rgba(12,158,143,0.5); }
  .note { font-size: 12px; color: var(--cream-dim); opacity: 0.45; line-height: 1.6; margin-top: 16px; }
  .full-bleed { max-width: none; }

  /* scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--dark-2); }
  ::-webkit-scrollbar-thumb { background: var(--teal-dim); border-radius: 2px; }
`,
  body: `<div class="layout design-system-layout">

<!-- ══ SIDEBAR ══ -->
<nav class="sidebar">
  <div class="sidebar-logo">
    <!-- Wordmark logo inline -->
    <svg viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" font-family="Georgia, serif" font-size="19" font-weight="400" fill="#F6F3F0" letter-spacing="-0.5">Clinova</text>
      <text x="89" y="22" font-family="Georgia, serif" font-size="19" font-weight="400" fill="#0C9E8F" letter-spacing="-0.5">AI</text>
    </svg>
  </div>
  <div class="sidebar-nav">
    <span class="nav-label">Foundation</span>
    <a class="nav-link" href="#colours">Colour Palette</a>
    <a class="nav-link" href="#typography">Typography</a>
    <span class="nav-label">Identity</span>
    <a class="nav-link" href="#logos">Logo Concepts</a>
    <a class="nav-link" href="#usage">Logo Usage</a>
    <span class="nav-label">Design System</span>
    <a class="nav-link" href="#components">UI Components</a>
    <a class="nav-link" href="#photography">Photography</a>
    <span class="nav-label">Collateral</span>
    <a class="nav-link" href="#bizcard">Business Card</a>
    <a class="nav-link" href="#emailsig">Email Signature</a>
    <a class="nav-link" href="#social">Social Media Kit</a>
    <a class="nav-link" href="#pitchdeck">Pitch Deck</a>
    <span class="nav-label">Voice</span>
    <a class="nav-link" href="#voice">Brand Voice</a>
  </div>
  <div class="sidebar-footer">
    ClinovaAI Brand Kit v1.0<br>April 2026
  </div>
</nav>

<!-- ══ MAIN ══ -->
<main class="main">

  <!-- ── HERO ── -->
  <section class="hero" id="hero">
    <div class="hero-eyebrow">ClinovaAI - Brand Identity System</div>
    <h1 class="hero-title">Where <em>luxury</em> meets intelligence.</h1>
    <p class="hero-sub">A complete brand kit for the AI receptionist built for aesthetic clinics, med spas, and cosmetic practices across the UK.</p>
    <div class="hero-tagline">"Never Miss a Booking Again"</div>
    <div class="hero-meta">
      <span>clinovaai.co</span>
      <span>v1.0 · 2026</span>
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── COLOURS ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="colours">
    <div class="section-eyebrow">01 - Foundation</div>
    <h2 class="section-title">Colour Palette</h2>
    <p class="section-desc">Five colours. Every shade chosen to feel simultaneously medical-grade and luxury-grade - colours that belong in a Harley Street clinic and a Mayfair boutique in equal measure.</p>

    <div class="palette-grid">
      <!-- Primary Teal -->
      <div class="swatch" style="background:#0C9E8F; color:#080C0B;">
        <div class="swatch-name">Clinova Teal</div>
        <div class="swatch-role" style="color:rgba(8,12,11,0.55);">Primary</div>
        <div class="swatch-values" style="color:rgba(8,12,11,0.7);">
          <span>HEX &nbsp; #0C9E8F</span>
          <span>RGB &nbsp; 12, 158, 143</span>
          <span>CMYK &nbsp; 92, 0, 9, 38</span>
        </div>
      </div>
      <!-- Teal Light -->
      <div class="swatch" style="background:#13BBA9; color:#080C0B;">
        <div class="swatch-name">Teal Light</div>
        <div class="swatch-role" style="color:rgba(8,12,11,0.55);">Interactive</div>
        <div class="swatch-values" style="color:rgba(8,12,11,0.7);">
          <span>HEX &nbsp; #13BBA9</span>
          <span>RGB &nbsp; 19, 187, 169</span>
          <span>CMYK &nbsp; 90, 0, 10, 27</span>
        </div>
      </div>
      <!-- Dark -->
      <div class="swatch" style="background:#080C0B; color:#F0E8DC; border: 1px solid rgba(240,232,220,0.08);">
        <div class="swatch-name">Obsidian</div>
        <div class="swatch-role" style="color:rgba(240,232,220,0.45);">Background</div>
        <div class="swatch-values" style="color:rgba(240,232,220,0.6);">
          <span>HEX &nbsp; #080C0B</span>
          <span>RGB &nbsp; 8, 12, 11</span>
          <span>CMYK &nbsp; 33, 0, 8, 95</span>
        </div>
      </div>
      <!-- Cream -->
      <div class="swatch" style="background:#F0E8DC; color:#0E1512;">
        <div class="swatch-name">Ivory</div>
        <div class="swatch-role" style="color:rgba(14,21,18,0.5);">Foreground</div>
        <div class="swatch-values" style="color:rgba(14,21,18,0.65);">
          <span>HEX &nbsp; #F0E8DC</span>
          <span>RGB &nbsp; 240, 232, 220</span>
          <span>CMYK &nbsp; 0, 3, 8, 6</span>
        </div>
      </div>
      <!-- Gold -->
      <div class="swatch" style="background:#B8935A; color:#0E1512;">
        <div class="swatch-name">Warm Brass</div>
        <div class="swatch-role" style="color:rgba(14,21,18,0.5);">Accent</div>
        <div class="swatch-values" style="color:rgba(14,21,18,0.65);">
          <span>HEX &nbsp; #B8935A</span>
          <span>RGB &nbsp; 184, 147, 90</span>
          <span>CMYK &nbsp; 0, 20, 51, 28</span>
        </div>
      </div>
      <!-- Surface -->
      <div class="swatch" style="background:#162019; color:#F0E8DC; border: 1px solid rgba(240,232,220,0.08);">
        <div class="swatch-name">Forest</div>
        <div class="swatch-role" style="color:rgba(240,232,220,0.45);">Surface / UI</div>
        <div class="swatch-values" style="color:rgba(240,232,220,0.6);">
          <span>HEX &nbsp; #162019</span>
          <span>RGB &nbsp; 22, 32, 25</span>
          <span>CMYK &nbsp; 31, 0, 22, 87</span>
        </div>
      </div>
    </div>

    <!-- Colour usage guidance -->
    <div class="two-col">
      <div class="rule-card">
        <div class="rule-card-title">Usage Ratios</div>
        <ul class="rule-list">
          <li>Obsidian - 60% of any composition. The dominant ground.</li>
          <li>Clinova Teal - 20%. The signature. Use boldly on key elements.</li>
          <li>Ivory - 15%. Text, UI labels, and light-on-dark contrast.</li>
          <li>Warm Brass - 5%. Warmth injection. Rare, deliberate.</li>
          <li>Forest - Surfaces, cards, subtle containers.</li>
        </ul>
      </div>
      <div class="rule-card">
        <div class="rule-card-title">Colour Combinations</div>
        <ul class="rule-list">
          <li>Obsidian + Teal + Ivory - the hero combination.</li>
          <li>Obsidian + Teal - minimal and authoritative.</li>
          <li>Ivory + Obsidian - for print on light stock.</li>
          <li class="bad">Never combine Brass + Teal in equal measure - they compete.</li>
          <li class="bad">Never use white (#FFF) - use Ivory only.</li>
          <li class="bad">Never use neon or high-saturation teal. Stay deep.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── TYPOGRAPHY ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="typography">
    <div class="section-eyebrow">02 - Foundation</div>
    <h2 class="section-title">Typography</h2>
    <p class="section-desc">Two fonts. One voice. Playfair Display carries editorial authority. DM Sans delivers clinical clarity. Together they balance warmth and precision - exactly where ClinovaAI lives.</p>

    <div class="type-pair-grid">
      <div class="type-card" style="background:var(--dark-2); border:1px solid var(--rule);">
        <div class="type-meta">Primary Typeface <span>Playfair Display - Google Fonts</span></div>
        <div style="font-family:var(--serif); font-size:56px; font-weight:500; color:var(--white); letter-spacing:-0.03em; line-height:1; margin-bottom:12px;">Aa</div>
        <div style="font-family:var(--serif); font-size:18px; font-weight:400; font-style:italic; color:var(--cream-dim); margin-bottom:24px;">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789 &amp; . , : - " "</div>
        <div style="font-size:12px; color:var(--cream-dim); opacity:0.5; line-height:1.7;">
          Weights: 400 Regular · 500 Medium · 600 SemiBold · 700 Bold<br>
          Use: Headlines H1-H4, pull quotes, large display text
        </div>
      </div>
      <div class="type-card" style="background:var(--dark-2); border:1px solid var(--rule);">
        <div class="type-meta">Secondary Typeface <span>DM Sans - Google Fonts</span></div>
        <div style="font-family:var(--sans); font-size:56px; font-weight:300; color:var(--white); letter-spacing:-0.04em; line-height:1; margin-bottom:12px;">Aa</div>
        <div style="font-family:var(--sans); font-size:14px; font-weight:400; color:var(--cream-dim); margin-bottom:24px; letter-spacing:0.01em;">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789 &amp; . , : - " "</div>
        <div style="font-size:12px; color:var(--cream-dim); opacity:0.5; line-height:1.7;">
          Weights: 300 Light · 400 Regular · 500 Medium · 600 SemiBold<br>
          Use: Body copy, UI labels, captions, buttons, navigation
        </div>
      </div>
    </div>

    <!-- Type Scale -->
    <div class="type-specimen">
      <div class="type-meta">Type Scale - Complete Specification</div>
      <div class="type-scale">
        <div class="type-scale-row">
          <span class="type-scale-label">H1<br><span style="opacity:0.5; font-size:9px;">64px / 500<br>−3% tracking</span></span>
          <span class="ts-h1">Never Miss a Booking.</span>
        </div>
        <div class="type-scale-row">
          <span class="type-scale-label">H2<br><span style="opacity:0.5; font-size:9px;">48px / 500<br>−2.5% tracking</span></span>
          <span class="ts-h2">Your Clinic, Automated.</span>
        </div>
        <div class="type-scale-row">
          <span class="type-scale-label">H3<br><span style="opacity:0.5; font-size:9px;">34px / 500<br>−2% tracking</span></span>
          <span class="ts-h3">The AI Receptionist for Aesthetic Clinics</span>
        </div>
        <div class="type-scale-row">
          <span class="type-scale-label">H4<br><span style="opacity:0.5; font-size:9px;">24px / 600<br>−1% tracking</span></span>
          <span class="ts-h4">Capture Every Enquiry. Convert Every Lead.</span>
        </div>
        <div class="type-scale-row">
          <span class="type-scale-label">Body<br><span style="opacity:0.5; font-size:9px;">16px / 400<br>175% leading</span></span>
          <span class="ts-body">ClinovaAI installs a done-for-you AI receptionist into your clinic - responding to enquiries, booking appointments, and following up with leads around the clock, so you never miss a revenue opportunity again.</span>
        </div>
        <div class="type-scale-row">
          <span class="type-scale-label">Small<br><span style="opacity:0.5; font-size:9px;">14px / 400<br>160% leading</span></span>
          <span class="ts-small">Available 24/7 - when your clinic is closed, ClinovaAI is still working. Responding to enquiries within seconds, qualifying leads, and filling your appointment book.</span>
        </div>
        <div class="type-scale-row">
          <span class="type-scale-label">Caption<br><span style="opacity:0.5; font-size:9px;">12px / 400<br>+2% tracking</span></span>
          <span class="ts-caption">Results within 30 days - guaranteed. No long-term contracts. Cancel anytime.</span>
        </div>
        <div class="type-scale-row">
          <span class="type-scale-label">Button<br><span style="opacity:0.5; font-size:9px;">13px / 600<br>+10% tracking UC</span></span>
          <span class="ts-btn">Book a Discovery Call</span>
        </div>
        <div class="type-scale-row">
          <span class="type-scale-label">Eyebrow<br><span style="opacity:0.5; font-size:9px;">10px / 600<br>+22% tracking UC</span></span>
          <span class="ts-eyebrow">AI Receptionist Platform</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── LOGOS ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="logos">
    <div class="section-eyebrow">03 - Identity</div>
    <h2 class="section-title">Logo Concepts</h2>
    <p class="section-desc">Three distinct directions. Each references the intersection of AI intelligence, clinical precision, and human communication - without being literal. All work at any scale, on any background.</p>

    <div class="logo-grid">

      <!-- CONCEPT 01: MERIDIAN -->
      <div>
        <div class="logo-card logo-card-dark">
          <div class="logo-name">Concept 01 - Meridian</div>
          <div class="logo-display">
            <!-- Combination mark: Arc + wordmark -->
            <svg viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:220px;">
              <!-- Icon: Circle arc with signal pulse -->
              <circle cx="36" cy="40" r="24" stroke="#0C9E8F" stroke-width="1.5" fill="none" opacity="0.3"/>
              <circle cx="36" cy="40" r="16" stroke="#0C9E8F" stroke-width="1" fill="none" opacity="0.5"/>
              <path d="M20 40 Q28 28 36 40 Q44 52 52 40" stroke="#0C9E8F" stroke-width="2" fill="none" stroke-linecap="round"/>
              <circle cx="36" cy="40" r="3" fill="#0C9E8F"/>
              <!-- Wordmark -->
              <text x="70" y="35" font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="400" fill="#F6F3F0" letter-spacing="-0.4">Clinova</text>
              <text x="150" y="35" font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="400" fill="#0C9E8F" letter-spacing="-0.4">AI</text>
              <text x="70" y="50" font-family="Arial, sans-serif" font-size="7" font-weight="400" fill="#C8BEB3" letter-spacing="3">RECEPTIONIST PLATFORM</text>
            </svg>
          </div>
          <div class="logo-desc">Concentric signal rings with a sine-wave pulse. References AI communication, reception/broadcasting, and the precise measurements of medical aesthetics.</div>
        </div>
        <!-- Icon only -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:2px;">
          <div class="logo-variant-card">
            <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
              <circle cx="30" cy="30" r="22" stroke="#0C9E8F" stroke-width="1.5" fill="none" opacity="0.3"/>
              <circle cx="30" cy="30" r="14" stroke="#0C9E8F" stroke-width="1" fill="none" opacity="0.5"/>
              <path d="M14 30 Q22 18 30 30 Q38 42 46 30" stroke="#0C9E8F" stroke-width="2" fill="none" stroke-linecap="round"/>
              <circle cx="30" cy="30" r="3" fill="#0C9E8F"/>
            </svg>
            <div class="logo-variant-label">Icon · Dark BG</div>
          </div>
          <div class="logo-variant-card on-light">
            <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
              <circle cx="30" cy="30" r="22" stroke="#0A7A6E" stroke-width="1.5" fill="none" opacity="0.3"/>
              <circle cx="30" cy="30" r="14" stroke="#0A7A6E" stroke-width="1" fill="none" opacity="0.5"/>
              <path d="M14 30 Q22 18 30 30 Q38 42 46 30" stroke="#0A7A6E" stroke-width="2" fill="none" stroke-linecap="round"/>
              <circle cx="30" cy="30" r="3" fill="#0A7A6E"/>
            </svg>
            <div class="logo-variant-label" style="color:#4A5650;">Icon · Light BG</div>
          </div>
        </div>
      </div>

      <!-- CONCEPT 02: LATTICE -->
      <div>
        <div class="logo-card logo-card-dark">
          <div class="logo-name">Concept 02 - Lattice</div>
          <div class="logo-display">
            <svg viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:220px;">
              <!-- Icon: Connected nodes forming a C shape -->
              <circle cx="18" cy="22" r="4" fill="#0C9E8F"/>
              <circle cx="42" cy="16" r="4" fill="#0C9E8F"/>
              <circle cx="54" cy="40" r="5" fill="#13BBA9"/>
              <circle cx="42" cy="62" r="4" fill="#0C9E8F"/>
              <circle cx="18" cy="56" r="4" fill="#0C9E8F"/>
              <line x1="18" y1="22" x2="42" y2="16" stroke="#0C9E8F" stroke-width="1" opacity="0.4"/>
              <line x1="42" y1="16" x2="54" y2="40" stroke="#0C9E8F" stroke-width="1" opacity="0.4"/>
              <line x1="54" y1="40" x2="42" y2="62" stroke="#0C9E8F" stroke-width="1" opacity="0.4"/>
              <line x1="42" y1="62" x2="18" y2="56" stroke="#0C9E8F" stroke-width="1" opacity="0.4"/>
              <line x1="18" y1="22" x2="18" y2="56" stroke="#0C9E8F" stroke-width="1" opacity="0.2"/>
              <line x1="18" y1="22" x2="54" y2="40" stroke="#0C9E8F" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.2"/>
              <line x1="18" y1="56" x2="54" y2="40" stroke="#0C9E8F" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.2"/>
              <!-- Glow on centre node -->
              <circle cx="54" cy="40" r="10" fill="#0C9E8F" opacity="0.08"/>
              <!-- Wordmark -->
              <text x="74" y="35" font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="400" fill="#F6F3F0" letter-spacing="-0.4">Clinova</text>
              <text x="154" y="35" font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="400" fill="#0C9E8F" letter-spacing="-0.4">AI</text>
              <text x="74" y="50" font-family="Arial, sans-serif" font-size="7" font-weight="400" fill="#C8BEB3" letter-spacing="3">RECEPTIONIST PLATFORM</text>
            </svg>
          </div>
          <div class="logo-desc">Interconnected nodes in a C-arc formation. References AI neural networks, data connectivity, and the web of client relationships a clinic manages - elegant and intelligent.</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:2px;">
          <div class="logo-variant-card">
            <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
              <circle cx="12" cy="16" r="3.5" fill="#0C9E8F"/>
              <circle cx="30" cy="10" r="3.5" fill="#0C9E8F"/>
              <circle cx="42" cy="30" r="4.5" fill="#13BBA9"/>
              <circle cx="30" cy="50" r="3.5" fill="#0C9E8F"/>
              <circle cx="12" cy="44" r="3.5" fill="#0C9E8F"/>
              <line x1="12" y1="16" x2="30" y2="10" stroke="#0C9E8F" stroke-width="1" opacity="0.4"/>
              <line x1="30" y1="10" x2="42" y2="30" stroke="#0C9E8F" stroke-width="1" opacity="0.4"/>
              <line x1="42" y1="30" x2="30" y2="50" stroke="#0C9E8F" stroke-width="1" opacity="0.4"/>
              <line x1="30" y1="50" x2="12" y2="44" stroke="#0C9E8F" stroke-width="1" opacity="0.4"/>
              <line x1="12" y1="16" x2="12" y2="44" stroke="#0C9E8F" stroke-width="1" opacity="0.2"/>
              <circle cx="42" cy="30" r="9" fill="#0C9E8F" opacity="0.08"/>
            </svg>
            <div class="logo-variant-label">Icon · Dark BG</div>
          </div>
          <div class="logo-variant-card on-light">
            <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
              <circle cx="12" cy="16" r="3.5" fill="#0A7A6E"/>
              <circle cx="30" cy="10" r="3.5" fill="#0A7A6E"/>
              <circle cx="42" cy="30" r="4.5" fill="#0C9E8F"/>
              <circle cx="30" cy="50" r="3.5" fill="#0A7A6E"/>
              <circle cx="12" cy="44" r="3.5" fill="#0A7A6E"/>
              <line x1="12" y1="16" x2="30" y2="10" stroke="#0A7A6E" stroke-width="1" opacity="0.4"/>
              <line x1="30" y1="10" x2="42" y2="30" stroke="#0A7A6E" stroke-width="1" opacity="0.4"/>
              <line x1="42" y1="30" x2="30" y2="50" stroke="#0A7A6E" stroke-width="1" opacity="0.4"/>
              <line x1="30" y1="50" x2="12" y2="44" stroke="#0A7A6E" stroke-width="1" opacity="0.4"/>
              <line x1="12" y1="16" x2="12" y2="44" stroke="#0A7A6E" stroke-width="1" opacity="0.2"/>
            </svg>
            <div class="logo-variant-label" style="color:#4A5650;">Icon · Light BG</div>
          </div>
        </div>
      </div>

      <!-- CONCEPT 03: AXIS -->
      <div>
        <div class="logo-card logo-card-dark">
          <div class="logo-name">Concept 03 - Axis</div>
          <div class="logo-display">
            <svg viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:220px;">
              <!-- Icon: Geometric C with single horizontal line = reception desk + AI horizon -->
              <path d="M52 16 Q20 16 14 40 Q20 64 52 64" stroke="#0C9E8F" stroke-width="3" fill="none" stroke-linecap="round"/>
              <line x1="14" y1="40" x2="56" y2="40" stroke="#0C9E8F" stroke-width="1" opacity="0.3"/>
              <circle cx="56" cy="40" r="3" fill="#B8935A"/>
              <line x1="28" y1="40" x2="28" y2="40" stroke="#0C9E8F" stroke-width="2"/>
              <!-- Wordmark -->
              <text x="72" y="35" font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="400" fill="#F6F3F0" letter-spacing="-0.4">Clinova</text>
              <text x="152" y="35" font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="400" fill="#0C9E8F" letter-spacing="-0.4">AI</text>
              <text x="72" y="50" font-family="Arial, sans-serif" font-size="7" font-weight="400" fill="#C8BEB3" letter-spacing="3">RECEPTIONIST PLATFORM</text>
            </svg>
          </div>
          <div class="logo-desc">A refined C-form bisected by a precise horizontal - the reception desk as a line of authority. The brass terminal dot adds warmth. Minimal, typographic, confident.</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:2px;">
          <div class="logo-variant-card">
            <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
              <path d="M44 10 Q16 10 10 30 Q16 50 44 50" stroke="#0C9E8F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <line x1="10" y1="30" x2="46" y2="30" stroke="#0C9E8F" stroke-width="1" opacity="0.35"/>
              <circle cx="46" cy="30" r="3" fill="#B8935A"/>
            </svg>
            <div class="logo-variant-label">Icon · Dark BG</div>
          </div>
          <div class="logo-variant-card on-light">
            <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
              <path d="M44 10 Q16 10 10 30 Q16 50 44 50" stroke="#0A7A6E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <line x1="10" y1="30" x2="46" y2="30" stroke="#0A7A6E" stroke-width="1" opacity="0.35"/>
              <circle cx="46" cy="30" r="3" fill="#B8935A"/>
            </svg>
            <div class="logo-variant-label" style="color:#4A5650;">Icon · Light BG</div>
          </div>
        </div>
      </div>

    </div><!-- /logo-grid -->
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── LOGO USAGE ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="usage">
    <div class="section-eyebrow">04 - Identity</div>
    <h2 class="section-title">Logo Usage</h2>
    <p class="section-desc">Rules that protect the brand. Consistency is what separates luxury brands from everything else.</p>

    <div class="rules-grid">
      <div class="rule-card">
        <div class="rule-card-title">Minimum Sizes</div>
        <ul class="rule-list">
          <li>Combination mark: minimum 160px wide / 32mm print</li>
          <li>Wordmark only: minimum 100px wide / 20mm print</li>
          <li>Icon mark: minimum 24px / 8mm - never smaller</li>
          <li>Favicon/app icon: icon mark only at 32×32px or larger</li>
        </ul>
      </div>
      <div class="rule-card">
        <div class="rule-card-title">Clear Space</div>
        <ul class="rule-list">
          <li>Minimum clear space = height of the 'AI' letterforms on all sides</li>
          <li>Icon mark clear space = half the icon diameter on all sides</li>
          <li>Never place logo within 8px of a screen edge</li>
          <li>Never overlap logo with photography or complex texture</li>
        </ul>
      </div>
      <div class="rule-card">
        <div class="rule-card-title">Approved Backgrounds</div>
        <ul class="rule-list">
          <li>Obsidian (#080C0B) - primary, preferred</li>
          <li>Forest (#162019) - approved, strong</li>
          <li>Ivory (#F0E8DC) - approved, use teal-dark version</li>
          <li>Photography - only on dark areas with sufficient contrast</li>
        </ul>
      </div>
      <div class="rule-card">
        <div class="rule-card-title">Never Do This</div>
        <ul class="rule-list">
          <li class="bad">Stretch, distort, or rotate the logo</li>
          <li class="bad">Recreate in a different font</li>
          <li class="bad">Use on coloured backgrounds other than approved</li>
          <li class="bad">Add drop shadows, outlines, or effects</li>
          <li class="bad">Use the light logo on Obsidian without contrast check</li>
          <li class="bad">Place on busy photography without a dark overlay</li>
        </ul>
      </div>
    </div>

    <!-- Colour variations -->
    <div style="font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--teal); margin-bottom:20px;">Approved Colour Variations</div>
    <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:2px; margin-bottom:48px;">
      <div style="background:var(--dark); border:1px solid var(--rule); padding:32px 24px; text-align:center;">
        <svg viewBox="0 0 120 40" fill="none" width="120" style="margin-bottom:16px;">
          <text x="0" y="29" font-family="Georgia,serif" font-size="22" font-weight="400" fill="#F6F3F0" letter-spacing="-0.5">Clinova</text>
          <text x="92" y="29" font-family="Georgia,serif" font-size="22" font-weight="400" fill="#0C9E8F" letter-spacing="-0.5">AI</text>
        </svg>
        <div style="font-size:10px;color:var(--cream-dim);opacity:0.5;letter-spacing:0.08em;">Full colour · dark</div>
      </div>
      <div style="background:var(--cream); border:1px solid rgba(0,0,0,0.08); padding:32px 24px; text-align:center;">
        <svg viewBox="0 0 120 40" fill="none" width="120" style="margin-bottom:16px;">
          <text x="0" y="29" font-family="Georgia,serif" font-size="22" font-weight="400" fill="#080C0B" letter-spacing="-0.5">Clinova</text>
          <text x="92" y="29" font-family="Georgia,serif" font-size="22" font-weight="400" fill="#0A7A6E" letter-spacing="-0.5">AI</text>
        </svg>
        <div style="font-size:10px;color:#4A5650;letter-spacing:0.08em;opacity:0.7;">Full colour · light</div>
      </div>
      <div style="background:var(--dark-2); border:1px solid var(--rule); padding:32px 24px; text-align:center;">
        <svg viewBox="0 0 120 40" fill="none" width="120" style="margin-bottom:16px;">
          <text x="0" y="29" font-family="Georgia,serif" font-size="22" font-weight="400" fill="#F6F3F0" letter-spacing="-0.5">Clinova</text>
          <text x="92" y="29" font-family="Georgia,serif" font-size="22" font-weight="400" fill="#F6F3F0" letter-spacing="-0.5">AI</text>
        </svg>
        <div style="font-size:10px;color:var(--cream-dim);opacity:0.5;letter-spacing:0.08em;">Mono white</div>
      </div>
      <div style="background:var(--teal); border:1px solid transparent; padding:32px 24px; text-align:center;">
        <svg viewBox="0 0 120 40" fill="none" width="120" style="margin-bottom:16px;">
          <text x="0" y="29" font-family="Georgia,serif" font-size="22" font-weight="400" fill="#080C0B" letter-spacing="-0.5">Clinova</text>
          <text x="92" y="29" font-family="Georgia,serif" font-size="22" font-weight="400" fill="#080C0B" letter-spacing="-0.5">AI</text>
        </svg>
        <div style="font-size:10px;color:rgba(8,12,11,0.55);letter-spacing:0.08em;">Mono dark · teal BG</div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── UI COMPONENTS ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="components">
    <div class="section-eyebrow">05 - Design System</div>
    <h2 class="section-title">UI Components</h2>
    <p class="section-desc">A component library rooted in the brand. Sharp geometry, teal glow on key interactions, and generous negative space throughout.</p>

    <!-- Nav -->
    <div style="font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--teal); margin-bottom:16px;">Navigation</div>
    <div class="nav-demo" style="margin-bottom:2px;">
      <svg viewBox="0 0 100 24" fill="none" width="100">
        <text x="0" y="17" font-family="Georgia,serif" font-size="14" fill="#F6F3F0">Clinova</text>
        <text x="64" y="17" font-family="Georgia,serif" font-size="14" fill="#0C9E8F">AI</text>
      </svg>
      <div class="nav-links-demo">
        <a class="nav-link-demo active" href="#">How It Works</a>
        <a class="nav-link-demo" href="#">Results</a>
        <a class="nav-link-demo" href="#">Pricing</a>
        <a class="nav-link-demo" href="#">About</a>
      </div>
      <a class="btn-primary" style="font-size:11px; padding:10px 20px;" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Book a Call</a>
    </div>
    <p class="note">Navigation: 64px height · blur backdrop · 1px bottom rule · no heavy borders</p>
    <hr class="fancy">

    <!-- Hero Strip -->
    <div style="font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--teal); margin-bottom:16px;">Hero Section</div>
    <div class="hero-strip" style="margin-bottom:2px;">
      <div class="hero-strip-eyebrow">AI Receptionist Platform</div>
      <h2 class="hero-strip-title">Your clinic,<br><em>on autopilot.</em></h2>
      <p class="hero-strip-body">ClinovaAI installs a done-for-you AI receptionist that responds, books, and follows up - 24 hours a day, 7 days a week.</p>
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <a class="btn-primary" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
        <button class="btn-secondary">See How It Works</button>
      </div>
    </div>
    <hr class="fancy">

    <!-- Buttons -->
    <div style="font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--teal); margin-bottom:16px;">Buttons</div>
    <div class="rule-card" style="margin-bottom:2px;">
      <div class="btn-row">
        <a class="btn-primary" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Book a Call ↗</a>
        <button class="btn-secondary">Learn More</button>
        <button class="btn-ghost">View Results →</button>
      </div>
    </div>
    <hr class="fancy">

    <!-- Stats -->
    <div style="font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--teal); margin-bottom:16px;">Metric Cards</div>
    <div class="stats-row" style="margin-bottom:2px;">
      <div class="stat-card">
        <div class="stat-number">94%</div>
        <div class="stat-label">Response rate within 60 seconds</div>
        <div class="stat-change">↑ vs. 38% industry average</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">£18k</div>
        <div class="stat-label">Avg. recovered monthly revenue</div>
        <div class="stat-change">↑ within first 30 days</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">3.2×</div>
        <div class="stat-label">Booking conversion uplift</div>
        <div class="stat-change">↑ vs. manual follow-up</div>
      </div>
    </div>
    <hr class="fancy">

    <!-- Badges + Form -->
    <div class="component-grid">
      <div class="component-card">
        <div class="component-label">Status Badges</div>
        <div class="badge-row" style="margin-bottom:24px;">
          <span class="badge badge-teal"><span class="badge-dot"></span>Active</span>
          <span class="badge badge-gold"><span class="badge-dot"></span>Pending</span>
          <span class="badge badge-neutral">Inactive</span>
        </div>
        <div class="badge-row">
          <span class="badge badge-teal">AI Managed</span>
          <span class="badge badge-gold">Premium Plan</span>
          <span class="badge badge-neutral">Draft</span>
        </div>
      </div>
      <div class="component-card">
        <div class="component-label">Form Inputs</div>
        <label class="input-label">Clinic Name</label>
        <input class="input-demo" type="text" placeholder="e.g. Lumina Aesthetics">
        <label class="input-label">Email Address</label>
        <input class="input-demo" type="email" placeholder="hello@youraesthetics.co.uk">
        <a class="btn-primary" style="width:100%; justify-content:center; margin-top:8px;" href="https://calendly.com/clinova/lost-revenue-audit" target="_blank" rel="noopener noreferrer">Get Started</a>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── PHOTOGRAPHY ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="photography">
    <div class="section-eyebrow">06 - Design System</div>
    <h2 class="section-title">Photography Direction</h2>
    <p class="section-desc">Imagery that earns trust before a word is read. Every photograph should feel like it belongs in a Sunday Times Style supplement - not a medical directory.</p>

    <div class="photo-grid">
      <div class="photo-placeholder">
        <svg class="photo-ph-lines" viewBox="0 0 48 36" width="48" height="36">
          <line x1="0" y1="6" x2="48" y2="6"/><line x1="0" y1="12" x2="48" y2="12"/><line x1="0" y1="18" x2="48" y2="18"/><line x1="0" y1="24" x2="48" y2="24"/><line x1="0" y1="30" x2="48" y2="30"/>
        </svg>
        <div class="photo-ph-label">HERO SHOT<br>Modern clinic interior<br>minimal, pale stone surfaces<br>teal accent light source<br>no people visible</div>
      </div>
      <div class="photo-placeholder">
        <svg class="photo-ph-lines" viewBox="0 0 48 36" width="48" height="36">
          <line x1="0" y1="6" x2="48" y2="6"/><line x1="0" y1="12" x2="48" y2="12"/><line x1="0" y1="18" x2="48" y2="18"/><line x1="0" y1="24" x2="48" y2="24"/><line x1="0" y1="30" x2="48" y2="30"/>
        </svg>
        <div class="photo-ph-label">TREATMENT CLOSE-UP<br>Glowing skin, extreme close<br>warm side-light<br>soft focus background<br>editorial crop</div>
      </div>
      <div class="photo-placeholder">
        <svg class="photo-ph-lines" viewBox="0 0 48 36" width="48" height="36">
          <line x1="0" y1="6" x2="48" y2="6"/><line x1="0" y1="12" x2="48" y2="12"/><line x1="0" y1="18" x2="48" y2="18"/><line x1="0" y1="24" x2="48" y2="24"/><line x1="0" y1="30" x2="48" y2="30"/>
        </svg>
        <div class="photo-ph-label">CLINIC OWNER<br>Confident, mid-30s woman<br>professional but warm<br>shot in clinic context<br>never posed or stock-like</div>
      </div>
      <div class="photo-placeholder">
        <svg class="photo-ph-lines" viewBox="0 0 48 36" width="48" height="36">
          <line x1="0" y1="6" x2="48" y2="6"/><line x1="0" y1="12" x2="48" y2="12"/><line x1="0" y1="18" x2="48" y2="18"/><line x1="0" y1="24" x2="48" y2="24"/><line x1="0" y1="30" x2="48" y2="30"/>
        </svg>
        <div class="photo-ph-label">DEVICE / INTERFACE<br>Phone screen with booking UI<br>resting on marble surface<br>dark ambient background<br>teal glow from screen</div>
      </div>
      <div class="photo-placeholder">
        <svg class="photo-ph-lines" viewBox="0 0 48 36" width="48" height="36">
          <line x1="0" y1="6" x2="48" y2="6"/><line x1="0" y1="12" x2="48" y2="12"/><line x1="0" y1="18" x2="48" y2="18"/><line x1="0" y1="24" x2="48" y2="24"/><line x1="0" y1="30" x2="48" y2="30"/>
        </svg>
        <div class="photo-ph-label">RECEPTION DESK<br>Clean, minimal reception<br>fresh flowers, stone surface<br>no clutter, premium objects<br>natural + artificial light</div>
      </div>
      <div class="photo-placeholder">
        <svg class="photo-ph-lines" viewBox="0 0 48 36" width="48" height="36">
          <line x1="0" y1="6" x2="48" y2="6"/><line x1="0" y1="12" x2="48" y2="12"/><line x1="0" y1="18" x2="48" y2="18"/><line x1="0" y1="24" x2="48" y2="24"/><line x1="0" y1="30" x2="48" y2="30"/>
        </svg>
        <div class="photo-ph-label">ABSTRACT TEXTURE<br>Macro: brushed stone, linen<br>or frosted glass surface<br>for background use<br>warm neutral tones</div>
      </div>
    </div>

    <div class="two-col">
      <div class="rule-card">
        <div class="rule-card-title">Always</div>
        <ul class="rule-list">
          <li>High contrast, intentional lighting - lit scenes, not flat</li>
          <li>Tight crops that feel editorial and confident</li>
          <li>Warm skin tones - flattering, healthy, luminous</li>
          <li>Modern clinic environments: stone, marble, matte surfaces</li>
          <li>Desaturate slightly in post - let teal do the colour work</li>
        </ul>
      </div>
      <div class="rule-card">
        <div class="rule-card-title">Never</div>
        <ul class="rule-list">
          <li class="bad">Obvious stock photography - posed smiles, generic settings</li>
          <li class="bad">Before/after clinical photos in brand materials</li>
          <li class="bad">Brightly lit, overexposed images - no blown highlights</li>
          <li class="bad">Busy, cluttered backgrounds</li>
          <li class="bad">Imagery that codes as "cheap tech" - no robots, chat bubbles</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── BUSINESS CARD ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="bizcard">
    <div class="section-eyebrow">07 - Collateral</div>
    <h2 class="section-title">Business Card</h2>
    <p class="section-desc">Standard 85×55mm. Printed on 600gsm uncoated stock with teal foil on the logotype. The dark card is the flagship - it should feel expensive to hold.</p>

    <div class="card-wrapper">
      <!-- Dark card front -->
      <div>
        <div class="biz-card biz-card-dark">
          <div class="biz-card-inner">
            <div>
              <svg viewBox="0 0 100 24" fill="none" width="100">
                <text x="0" y="17" font-family="Georgia,serif" font-size="14" fill="#F6F3F0">Clinova</text>
                <text x="64" y="17" font-family="Georgia,serif" font-size="14" fill="#0C9E8F">AI</text>
              </svg>
            </div>
            <div>
              <div class="biz-name">Sarah Mitchell</div>
              <div class="biz-role">Founder &amp; CEO</div>
            </div>
          </div>
          <div class="biz-card-accent"></div>
        </div>
        <p class="note" style="text-align:center;">Front · Dark</p>
      </div>

      <!-- Dark card back -->
      <div>
        <div class="biz-card biz-card-dark">
          <div class="biz-card-inner">
            <div style="display:flex; justify-content:flex-end;">
              <!-- Icon mark -->
              <svg viewBox="0 0 40 40" fill="none" width="40">
                <path d="M30 8 Q8 8 6 20 Q8 32 30 32" stroke="#0C9E8F" stroke-width="2" fill="none" stroke-linecap="round"/>
                <line x1="6" y1="20" x2="32" y2="20" stroke="#0C9E8F" stroke-width="0.75" opacity="0.3"/>
                <circle cx="32" cy="20" r="2.5" fill="#B8935A"/>
              </svg>
            </div>
            <div>
              <div class="biz-contact" style="color:var(--cream-dim);">
                sarah@clinovaai.co<br>
                clinovaai.co<br>
                +44 20 7946 0800
              </div>
            </div>
          </div>
          <div class="biz-card-accent"></div>
        </div>
        <p class="note" style="text-align:center;">Back · Dark</p>
      </div>

      <!-- Light card front -->
      <div>
        <div class="biz-card biz-card-light">
          <div class="biz-card-inner">
            <div>
              <svg viewBox="0 0 100 24" fill="none" width="100">
                <text x="0" y="17" font-family="Georgia,serif" font-size="14" fill="#080C0B">Clinova</text>
                <text x="64" y="17" font-family="Georgia,serif" font-size="14" fill="#0A7A6E">AI</text>
              </svg>
            </div>
            <div>
              <div class="biz-name biz-name-light">Sarah Mitchell</div>
              <div class="biz-role">Founder &amp; CEO</div>
            </div>
          </div>
          <div class="biz-card-accent"></div>
        </div>
        <p class="note" style="text-align:center;">Front · Ivory</p>
      </div>
    </div>

    <div style="padding:20px 32px; background:var(--dark-2); border:1px solid var(--rule); font-size:13px; color:var(--cream-dim); line-height:1.8;">
      <strong style="color:var(--cream); font-size:11px; letter-spacing:0.1em; text-transform:uppercase; font-weight:600;">Print Specification</strong><br>
      Size: 85×55mm · Stock: 600gsm uncoated or silk (dark card) · 350gsm uncoated cream (light card) · Finish: Spot teal foil on logotype + teal/brass gradient rule · No laminate on the uncoated stock - the tactile quality is part of the brand.
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── EMAIL SIGNATURE ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="emailsig">
    <div class="section-eyebrow">08 - Collateral</div>
    <h2 class="section-title">Email Signature</h2>
    <p class="section-desc">Every email is a brand touchpoint. The signature should feel like the footer of a luxury website - not an afterthought.</p>

    <div class="email-sig-wrap">
      <div class="email-sig">
        <div class="sig-info">
          <div class="sig-name">Sarah Mitchell</div>
          <div class="sig-role">Founder &amp; CEO · ClinovaAI</div>
          <div class="sig-contact-row">
            <a href="#">sarah@clinovaai.co</a><br>
            <a href="#">clinovaai.co</a><br>
            +44 20 7946 0800
          </div>
        </div>
        <div class="sig-divider"></div>
        <div class="sig-brand">
          <svg viewBox="0 0 110 26" fill="none" width="110">
            <text x="0" y="19" font-family="Georgia,serif" font-size="16" fill="#F6F3F0">Clinova</text>
            <text x="72" y="19" font-family="Georgia,serif" font-size="16" fill="#0C9E8F">AI</text>
          </svg>
          <div class="sig-tagline">"Never Miss a Booking Again"</div>
        </div>
      </div>
    </div>
    <p class="note">Signature uses table-based HTML for maximum email client compatibility. Font falls back to Georgia. Teal rendered as inline colour - no web fonts in email.</p>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── SOCIAL MEDIA ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="social">
    <div class="section-eyebrow">09 - Collateral</div>
    <h2 class="section-title">Social Media Kit</h2>
    <p class="section-desc">Designed for Instagram first. Every post should look like editorial content - not an ad. The grid should feel like a mood board for a premium clinic.</p>

    <div class="social-grid">
      <!-- Post 1 -->
      <div class="social-card">
        <div class="social-card-bg" style="background:linear-gradient(135deg, var(--dark-3) 0%, var(--dark) 100%);">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.06;">
            <svg viewBox="0 0 200 200" width="200" height="200">
              <circle cx="100" cy="100" r="80" stroke="#0C9E8F" stroke-width="1" fill="none"/>
              <circle cx="100" cy="100" r="55" stroke="#0C9E8F" stroke-width="0.75" fill="none"/>
              <path d="M44 100 Q72 60 100 100 Q128 140 156 100" stroke="#0C9E8F" stroke-width="1.5" fill="none"/>
            </svg>
          </div>
        </div>
        <div class="social-card-content">
          <div class="sc-eyebrow">Stat of the Week</div>
          <div class="sc-title">94% of missed calls never call back. But they do text.</div>
          <div class="sc-handle">@clinovaai</div>
        </div>
      </div>

      <!-- Post 2 -->
      <div class="social-card">
        <div class="social-card-bg" style="background:linear-gradient(160deg, var(--dark-4) 0%, var(--dark) 100%);">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.05;">
            <svg viewBox="0 0 200 200" width="200" height="200">
              <circle cx="60" cy="40" r="15" stroke="#0C9E8F" stroke-width="1" fill="none"/>
              <circle cx="140" cy="60" r="15" stroke="#0C9E8F" stroke-width="1" fill="none"/>
              <circle cx="100" cy="130" r="20" stroke="#0C9E8F" stroke-width="1" fill="none"/>
              <circle cx="40" cy="150" r="12" stroke="#0C9E8F" stroke-width="0.75" fill="none"/>
              <line x1="60" y1="40" x2="140" y2="60" stroke="#0C9E8F" stroke-width="0.75"/>
              <line x1="140" y1="60" x2="100" y2="130" stroke="#0C9E8F" stroke-width="0.75"/>
              <line x1="100" y1="130" x2="40" y2="150" stroke="#0C9E8F" stroke-width="0.75"/>
            </svg>
          </div>
        </div>
        <div class="social-card-content">
          <div class="sc-eyebrow">Client Story</div>
          <div class="sc-title">£23k recovered in 30 days. Zero extra staff.</div>
          <div class="sc-handle">@clinovaai</div>
        </div>
      </div>

      <!-- Post 3 -->
      <div class="social-card">
        <div class="social-card-bg" style="background:linear-gradient(200deg, var(--dark) 0%, #0A1A17 100%);">
          <div style="position:absolute;top:0;right:0;width:60%;height:100%;background:radial-gradient(ellipse at right top, rgba(12,158,143,0.15) 0%, transparent 60%);"></div>
        </div>
        <div class="social-card-content">
          <div class="sc-eyebrow">Brand Mantra</div>
          <div class="sc-title" style="font-style:italic;">"Your clinic never closes."</div>
          <div class="sc-handle">@clinovaai</div>
        </div>
      </div>
    </div>

    <!-- Sizes reference -->
    <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:2px; margin-bottom:48px;">
      <div class="rule-card" style="padding:20px 18px;">
        <div class="rule-card-title">Instagram Post</div>
        <div style="font-size:13px; color:var(--cream-dim); line-height:1.7;">1080 × 1080px<br>Square format<br>Safe zone: 60px all sides</div>
      </div>
      <div class="rule-card" style="padding:20px 18px;">
        <div class="rule-card-title">Instagram Story</div>
        <div style="font-size:13px; color:var(--cream-dim); line-height:1.7;">1080 × 1920px<br>9:16 vertical<br>Safe zone: 250px top/bottom</div>
      </div>
      <div class="rule-card" style="padding:20px 18px;">
        <div class="rule-card-title">LinkedIn Banner</div>
        <div style="font-size:13px; color:var(--cream-dim); line-height:1.7;">1584 × 396px<br>4:1 ratio<br>Minimal: logo + tagline only</div>
      </div>
      <div class="rule-card" style="padding:20px 18px;">
        <div class="rule-card-title">LinkedIn Post</div>
        <div style="font-size:13px; color:var(--cream-dim); line-height:1.7;">1200 × 627px<br>1.91:1 ratio<br>Safe zone: 80px all sides</div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── PITCH DECK ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="pitchdeck">
    <div class="section-eyebrow">10 - Collateral</div>
    <h2 class="section-title">Pitch Deck Template</h2>
    <p class="section-desc">Eight slide layouts. Dark-first. Every slide should feel like a considered design decision - not a template filled in. Large numbers, confident type, minimal copy per slide.</p>

    <div class="deck-preview">

      <!-- Slide 1: Title -->
      <div class="deck-slide">
        <div class="deck-slide-inner ds-title">
          <div class="ds-eyebrow">ClinovaAI · Clinic Automation</div>
          <div class="ds-h" style="font-family:var(--serif); font-size:clamp(18px,3vw,30px);">Never Miss a<br><em>Booking Again.</em></div>
          <div class="ds-sub" style="margin-top:10px;">The AI receptionist built for<br>aesthetic clinics &amp; med spas.</div>
          <div class="ds-accent-line"></div>
        </div>
      </div>

      <!-- Slide 2: Problem -->
      <div class="deck-slide">
        <div class="deck-slide-inner" style="background:var(--dark-2);">
          <div class="ds-content">
            <div class="ds-eyebrow">The Problem</div>
            <div class="ds-h">Your clinic is losing<br><em>revenue every day.</em></div>
            <div class="ds-list">
              <div class="ds-list-item">62% of clinic enquiries arrive outside opening hours</div>
              <div class="ds-list-item">94% of missed calls never call back</div>
              <div class="ds-list-item">Manual follow-up takes 3-5 hours per week per staff member</div>
              <div class="ds-list-item">Average aesthetic clinic loses £4,200/month to missed leads</div>
            </div>
          </div>
          <div class="ds-number">01</div>
          <div class="ds-accent-line"></div>
        </div>
      </div>

      <!-- Slide 3: Solution -->
      <div class="deck-slide">
        <div class="deck-slide-inner" style="background:var(--dark-3);">
          <div class="ds-content">
            <div class="ds-eyebrow">The Solution</div>
            <div class="ds-h">An AI receptionist that<br><em>never sleeps.</em></div>
            <div class="ds-stat-row">
              <div class="ds-stat">
                <div class="ds-stat-n">60s</div>
                <div class="ds-stat-l">Response time</div>
              </div>
              <div class="ds-stat">
                <div class="ds-stat-n">24/7</div>
                <div class="ds-stat-l">Availability</div>
              </div>
              <div class="ds-stat">
                <div class="ds-stat-n">3.2×</div>
                <div class="ds-stat-l">Conversion lift</div>
              </div>
            </div>
          </div>
          <div class="ds-number">02</div>
          <div class="ds-accent-line"></div>
        </div>
      </div>

      <!-- Slide 4: Results -->
      <div class="deck-slide">
        <div class="deck-slide-inner" style="background:var(--dark);">
          <div class="ds-content" style="justify-content:center; align-items:center; text-align:center;">
            <div class="ds-eyebrow" style="text-align:center;">Proven Results</div>
            <div style="font-family:var(--serif); font-size:clamp(36px,7vw,72px); color:var(--teal); font-weight:500; line-height:1; letter-spacing:-0.03em;">£18,400</div>
            <div style="font-family:var(--serif); font-size:clamp(10px,1.5vw,14px); color:var(--cream-dim); margin-top:6px;">Average additional monthly revenue<br>recovered by ClinovaAI clients</div>
          </div>
          <div class="ds-accent-line"></div>
        </div>
      </div>

    </div>

    <div style="padding:24px 32px; background:var(--dark-2); border:1px solid var(--rule); font-size:13px; color:var(--cream-dim); line-height:1.8;">
      <strong style="color:var(--cream); font-size:11px; letter-spacing:0.1em; text-transform:uppercase; font-weight:600;">Full Slide Set Includes</strong><br>
      Title · Problem · Solution · How It Works · Social Proof / Results · Pricing · Objection Handler · CTA Close - all with matching dark/teal treatment. Available as Keynote and PowerPoint templates.
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── BRAND VOICE ── -->
  <!-- ══════════════════════════════════════════ -->
  <section class="section" id="voice">
    <div class="section-eyebrow">11 - Voice &amp; Tone</div>
    <h2 class="section-title">Brand Voice</h2>
    <p class="section-desc">ClinovaAI speaks like a specialist consultant - not a salesperson. Calm, precise, results-focused. Every word earns its place.</p>

    <!-- Pillars -->
    <div style="font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--teal); margin-bottom:20px;">Voice Pillars</div>
    <div class="pillar-grid">
      <div class="pillar-card">
        <div class="pillar-word">Authoritative</div>
        <div class="pillar-def">We speak from evidence, not enthusiasm. Numbers, outcomes, and specifics. No fluff, no hype.</div>
      </div>
      <div class="pillar-card">
        <div class="pillar-word">Calm</div>
        <div class="pillar-def">We don't shout about what we do. We demonstrate it. Understated confidence is more persuasive than urgency.</div>
      </div>
      <div class="pillar-card">
        <div class="pillar-word">Premium</div>
        <div class="pillar-def">We write for clinic owners who expect excellence. No abbreviations, no gimmicks, no exclamation marks.</div>
      </div>
      <div class="pillar-card">
        <div class="pillar-word">Direct</div>
        <div class="pillar-def">Short sentences. Specific claims. We say what the outcome is and let it speak. No waffle between you and the point.</div>
      </div>
    </div>
    <hr class="fancy">

    <!-- Vocabulary -->
    <div class="voice-grid">
      <div class="voice-card">
        <div class="voice-card-title">Vocabulary to Use</div>
        <div class="vocab-list">
          <span class="vocab-chip">Recovered revenue</span>
          <span class="vocab-chip">Captured enquiries</span>
          <span class="vocab-chip">Done-for-you</span>
          <span class="vocab-chip">Installed</span>
          <span class="vocab-chip">Seamless</span>
          <span class="vocab-chip">Precision</span>
          <span class="vocab-chip">Your clinic</span>
          <span class="vocab-chip">Results</span>
          <span class="vocab-chip">Qualified leads</span>
          <span class="vocab-chip">Automated</span>
          <span class="vocab-chip">Conversion</span>
          <span class="vocab-chip">White-glove</span>
          <span class="vocab-chip">Consistent</span>
          <span class="vocab-chip">Specialist</span>
          <span class="vocab-chip">Bespoke</span>
        </div>
      </div>
      <div class="voice-card">
        <div class="voice-card-title">Vocabulary to Avoid</div>
        <div class="vocab-list">
          <span class="vocab-chip avoid">Game-changer</span>
          <span class="vocab-chip avoid">Revolutionary</span>
          <span class="vocab-chip avoid">Cutting-edge</span>
          <span class="vocab-chip avoid">Synergy</span>
          <span class="vocab-chip avoid">Disruptive</span>
          <span class="vocab-chip avoid">AI-powered!!!</span>
          <span class="vocab-chip avoid">Leverage</span>
          <span class="vocab-chip avoid">Unlock</span>
          <span class="vocab-chip avoid">Supercharge</span>
          <span class="vocab-chip avoid">Next-level</span>
          <span class="vocab-chip avoid">Cheap / affordable</span>
          <span class="vocab-chip avoid">Easy</span>
          <span class="vocab-chip avoid">Hack</span>
          <span class="vocab-chip avoid">Guys</span>
          <span class="vocab-chip avoid">ASAP</span>
        </div>
      </div>
    </div>
    <hr class="fancy">

    <!-- Do / Don't -->
    <div class="two-col" style="margin-bottom:48px;">
      <div class="rule-card">
        <div class="rule-card-title">Write Like This</div>
        <ul class="rule-list">
          <li>Your AI receptionist responds in under 60 seconds. Always.</li>
          <li>Clinics using ClinovaAI recover an average of £18,400 per month in previously lost bookings.</li>
          <li>We handle the enquiries. You handle the treatments.</li>
          <li>We install, configure, and manage everything. You do nothing differently.</li>
        </ul>
      </div>
      <div class="rule-card">
        <div class="rule-card-title">Not Like This</div>
        <ul class="rule-list">
          <li class="bad">Our revolutionary AI-powered platform will supercharge your bookings!</li>
          <li class="bad">Unlock your clinic's hidden potential with cutting-edge automation.</li>
          <li class="bad">It's super easy to get started - just sign up and you're good to go!!</li>
          <li class="bad">Hey girl! Ready to scale your clinic to the next level? 🚀</li>
        </ul>
      </div>
    </div>

    <!-- Example Headlines -->
    <div style="font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--teal); margin-bottom:20px;">Three Headlines That Capture the Voice Perfectly</div>
    <div class="headline-card">
      <div class="headline-number">01</div>
      <div class="headline-text">The <em>clients you're losing</em> need treatment now. If you don't answer, your competitor will.</div>
      <div class="headline-note">Uses a counter-intuitive reframe. Speaks to the problem without blame. Opens a gap that ClinovaAI fills.</div>
    </div>
    <div class="headline-card">
      <div class="headline-number">02</div>
      <div class="headline-text">Your reputation is built in the treatment room. Your revenue is decided <em>before they walk through the door.</em></div>
      <div class="headline-note">Speaks directly to the clinic owner's identity. Connects what they care most about (reputation) to the problem we solve (pre-visit lead capture).</div>
    </div>
    <div class="headline-card">
      <div class="headline-number">03</div>
      <div class="headline-text">Most clinics are open 8 hours a day. <em>ClinovaAI works 24.</em></div>
      <div class="headline-note">Simple arithmetic. Unarguable. The contrast does all the work. No hyperbole needed.</div>
    </div>

    <!-- Tone guidance -->
    <hr class="fancy">
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:2px;">
      <div class="rule-card" style="padding:24px;">
        <div class="rule-card-title">Email Tone</div>
        <div style="font-size:13px; color:var(--cream-dim); line-height:1.7;">Formal but warm. Short paragraphs. Lead with the outcome. No bulk-mail feel - each email should read like it was written for one person.</div>
      </div>
      <div class="rule-card" style="padding:24px;">
        <div class="rule-card-title">Social Tone</div>
        <div style="font-size:13px; color:var(--cream-dim); line-height:1.7;">Authoritative, occasionally personal. Data-led posts, clinic owner insights, behind-the-scenes intelligence. Never promotional urgency.</div>
      </div>
      <div class="rule-card" style="padding:24px;">
        <div class="rule-card-title">Ad Copy Tone</div>
        <div style="font-size:13px; color:var(--cream-dim); line-height:1.7;">Quiet confidence. Specific numbers. Single focused claim per ad. Never more than one call to action. No ALL CAPS. No exclamation marks.</div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════ -->
  <!-- ── FOOTER ── -->
  <!-- ══════════════════════════════════════════ -->
  <footer style="padding:64px 72px; border-top:1px solid var(--rule); display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;">
    <div>
      <svg viewBox="0 0 140 30" fill="none" width="140">
        <text x="0" y="22" font-family="Georgia,serif" font-size="19" fill="#F6F3F0" letter-spacing="-0.5">Clinova</text>
        <text x="89" y="22" font-family="Georgia,serif" font-size="19" fill="#0C9E8F" letter-spacing="-0.5">AI</text>
      </svg>
      <div style="font-size:12px; color:var(--cream-dim); opacity:0.4; margin-top:8px;">clinovaai.co · Brand Identity System v1.0 · April 2026</div>
    </div>
    <div style="font-size:12px; color:var(--cream-dim); opacity:0.4; font-style:italic; text-align:right; max-width:300px; line-height:1.6;">
      "Never Miss a Booking Again"<br>The AI Receptionist Built for Aesthetic Clinics
    </div>
  </footer>

</main>
</div>`,
} as const;
