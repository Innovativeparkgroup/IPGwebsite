import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Innovative Park Group | Certified Skatepark Auditors",
  description:
    "Meet the team behind Innovative Park Group, led by Olympic-level skateboarding coach and certified AS EN 14974:2021 auditor Tommy Fynn.",
  alternates: {
    canonical: "https://www.innovativeparkgroup.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://www.innovativeparkgroup.com/about",
    siteName: "Innovative Park Group",
    title: "About Innovative Park Group | Skatepark Safety & Compliance Experts",
    description: "Field-tested expertise in skatepark safety, compliance, and community-first park audits.",
    images: [{ url: "/assets/og-about.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Innovative Park Group | Skatepark Safety & Compliance Experts",
    description: "Field-tested expertise in skatepark safety, compliance, and community-first park audits.",
    images: ["/assets/og-about.png"],
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tommy Fynn",
  jobTitle: "Director, Certified Safety Auditor & Olympic Skateboarding Coach",
  worksFor: { "@type": "Organization", name: "Innovative Park Group" },
  hasCredential: ["Certified AS EN 14974:2021 Safety Auditor", "Olympic-Level Skateboarding Coach"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.innovativeparkgroup.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.innovativeparkgroup.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AboutClient />
    </>
  );
}
