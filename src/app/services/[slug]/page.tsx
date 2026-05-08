import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingCta } from "@/components/marketing/booking-cta";
import { MarketingFooter } from "@/components/marketing/footer";
import { MarketingNav } from "@/components/marketing/nav";
import { MarketingStyles } from "@/components/marketing/marketing-styles";
import { serviceBySlug, servicePages, siteUrl } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.meta,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.navTitle} | ClinovaAI`,
      description: service.meta,
      url: `${siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navTitle,
    provider: { "@type": "Organization", name: "ClinovaAI", url: siteUrl },
    areaServed: "Worldwide",
    serviceType: service.navTitle,
    description: service.meta,
  };

  return (
    <>
      <MarketingStyles />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MarketingNav />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow reveal">{service.eyebrow}</div>
            <h1 className="reveal reveal-delay-1">{service.title}</h1>
            <p className="reveal reveal-delay-2">{service.description}</p>
            <div className="btn-row reveal reveal-delay-3">
              <BookingCta source={`service_${service.slug}`}>{service.cta}</BookingCta>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="service-detail-grid">
              <div className="leak-card reveal">
                <h3>The leak</h3>
                <p>{service.pain}</p>
              </div>
              <div className="leak-card reveal reveal-delay-1">
                <h3>What we run</h3>
                <p>{service.description}</p>
              </div>
              <div className="leak-card reveal reveal-delay-2">
                <h3>The outcome</h3>
                <p>{service.outcome}</p>
              </div>
            </div>

            <div className="pricing-guarantee reveal pricing-tailored">
              <strong>Example workflows</strong>
              <ul className="workflow-list">
                {service.workflows.map((workflow) => (
                  <li key={workflow}>{workflow}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
              Build This System
            </div>
            <h2 className="reveal reveal-delay-1">
              Want this running
              <br />
              <em>inside your clinic?</em>
            </h2>
            <p className="reveal reveal-delay-2">
              Book a 15-minute demo. We will show how this workflow fits your clinic and what needs to happen
              first.
            </p>
            <div className="btn-row reveal reveal-delay-3">
              <BookingCta source={`service_${service.slug}_final`} style={{ fontSize: 13, padding: "18px 40px" }}>
                Book Your 15-Min Demo
              </BookingCta>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
