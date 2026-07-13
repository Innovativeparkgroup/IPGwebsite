import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Skatepark Auditing & Maintenance Services | IPG",
  description:
    "Skatepark auditing, maintenance planning, and strategic consulting for councils. AS EN 14974:2021 compliance audits with real functional testing.",
  alternates: {
    canonical: "https://www.innovativeparkgroup.com/services",
  },
  openGraph: {
    type: "website",
    url: "https://www.innovativeparkgroup.com/services",
    siteName: "Innovative Park Group",
    title: "Skatepark Audit & Consulting Services | Innovative Park Group",
    description: "Safety audits, condition reports, compliance support, and community engagement for modern skatepark facilities.",
    images: [{ url: "/assets/og-services.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skatepark Audit & Consulting Services | Innovative Park Group",
    description: "Safety audits, condition reports, compliance support, and community engagement for modern skatepark facilities.",
    images: ["/assets/og-services.png"],
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Innovative Park Group",
  url: "https://www.innovativeparkgroup.com",
  email: "admin@innovativeparkgroup.com",
  areaServed: { "@type": "Country", name: "Australia" },
  description: "Certified AS EN 14974:2021 skatepark auditing and safety assessments for councils across Australia.",
  founder: {
    "@type": "Person",
    name: "Tommy Fynn",
    jobTitle: "Director, Certified Safety Auditor & Olympic Skateboarding Coach",
  },
  knowsAbout: ["Skatepark auditing", "AS EN 14974:2021 compliance", "Skatepark maintenance planning"],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Skatepark Compliance Audit",
  provider: { "@type": "ProfessionalService", name: "Innovative Park Group" },
  areaServed: "Australia",
  description: "Comprehensive AS EN 14974:2021 safety and compliance audit for skateparks and wheeled sports facilities, including functional user testing by professional skaters.",
  audience: { "@type": "Audience", audienceType: "Local government councils" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.innovativeparkgroup.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.innovativeparkgroup.com/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServicesClient />
    </>
  );
}
