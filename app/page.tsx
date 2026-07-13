import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Skatepark Safety Audits Australia | Innovative Park Group",
  description:
    "Certified AS EN 14974:2021 skatepark audits combining formal compliance testing with real-world skate testing. Trusted by councils across Australia.",
  alternates: {
    canonical: "https://www.innovativeparkgroup.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.innovativeparkgroup.com/",
    siteName: "Innovative Park Group",
    title: "Innovative Park Group | Professional Skatepark Auditing & Safety Assessments",
    description: "Certified safety audits, condition reports, and compliance support for safer skateparks and stronger communities.",
    images: [{ url: "/assets/og-home.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Park Group | Professional Skatepark Auditing & Safety Assessments",
    description: "Certified safety audits, condition reports, and compliance support for safer skateparks and stronger communities.",
    images: ["/assets/og-home.png"],
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.innovativeparkgroup.com/" }],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <HomeClient />
    </>
  );
}
