import { MarketingFooter } from "./footer";
import { MarketingNav } from "./nav";
import { MarketingStyles } from "./marketing-styles";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
    bullets?: string[];
  }>;
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <>
      <MarketingStyles />
      <MarketingNav />
      <main className="legal-page">
        <div className="container">
          <div className="eyebrow reveal">{eyebrow}</div>
          <h1 className="reveal reveal-delay-1">{title}</h1>
          <p className="reveal reveal-delay-2">{intro}</p>
          <div className="legal-grid">
            {sections.map((section, index) => (
              <div className={`legal-card reveal reveal-delay-${Math.min(index, 4)}`} key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
