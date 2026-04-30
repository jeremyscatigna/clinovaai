import type { ReactNode } from "react";

export type BrandColor = {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk?: string;
};

export const brandColors: BrandColor[] = [
  { name: "Clinova Teal", role: "Primary", hex: "#0C9E8F", rgb: "12, 158, 143", cmyk: "92, 0, 10, 38" },
  { name: "Teal Light", role: "Interactive", hex: "#13BBA9", rgb: "19, 187, 169", cmyk: "90, 0, 10, 27" },
  { name: "Obsidian", role: "Background", hex: "#080C0B", rgb: "8, 12, 11", cmyk: "33, 0, 8, 95" },
  { name: "Ivory", role: "Foreground", hex: "#F0E8DC", rgb: "240, 232, 220", cmyk: "0, 3, 8, 6" },
  { name: "Warm Brass", role: "Accent", hex: "#B8935A", rgb: "184, 147, 90", cmyk: "0, 20, 51, 28" },
  { name: "Forest", role: "Surface / UI", hex: "#162019", rgb: "22, 32, 25", cmyk: "31, 0, 22, 87" },
];

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  const width = compact ? 100 : 148;

  return (
    <svg viewBox="0 0 148 32" fill="none" width={width} height={compact ? 22 : 32} aria-label="ClinovaAI">
      <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c4.418 0 8.28-2.39 10.36-5.946" stroke="#0C9E8F" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 10a6 6 0 100 12 6 6 0 000-12z" stroke="#B8935A" strokeWidth="1.5" />
      <path d="M32 16h12" stroke="#0C9E8F" strokeWidth="2" strokeLinecap="round" />
      <text x="52" y="21" fill="#F0E8DC" fontFamily="var(--font-playfair), Georgia, serif" fontSize="18" fontWeight="500">Clinova</text>
      <text x="116" y="21" fill="#0C9E8F" fontFamily="var(--font-dm-sans), system-ui, sans-serif" fontSize="14" fontWeight="600">AI</text>
    </svg>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="section-header">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {children ? <p className="section-desc">{children}</p> : null}
    </header>
  );
}

export function BrandButton({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const className = variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost";
  return <button className={className}>{children}</button>;
}

export function BrandBadge({
  children,
  tone = "teal",
}: {
  children: ReactNode;
  tone?: "teal" | "gold" | "neutral";
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function StatCard({
  value,
  label,
  change,
}: {
  value: string;
  label: string;
  change?: string;
}) {
  return (
    <div className="stat-card">
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
      {change ? <div className="stat-change">{change}</div> : null}
    </div>
  );
}

export function ColorSwatch({ color }: { color: BrandColor }) {
  const isDark = color.hex === "#080C0B" || color.hex === "#162019";

  return (
    <div className="swatch" style={{ background: color.hex, color: isDark ? "#F0E8DC" : "#080C0B" }}>
      <div className="swatch-name">{color.name}</div>
      <div className="swatch-role">{color.role}</div>
      <div className="swatch-values">
        HEX {color.hex}
        <br />
        RGB {color.rgb}
        {color.cmyk ? (
          <>
            <br />
            CMYK {color.cmyk}
          </>
        ) : null}
      </div>
    </div>
  );
}
