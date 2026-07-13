import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Innovative Park Group | Request an Audit",
  description:
    "Ready to audit your skateparks? Contact Innovative Park Group for a free 30-minute consultation. We respond to all council inquiries within 24 hours.",
  alternates: {
    canonical: "https://www.innovativeparkgroup.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://www.innovativeparkgroup.com/contact",
    siteName: "Innovative Park Group",
    title: "Contact Innovative Park Group | Request a Skatepark Audit",
    description: "Ready to audit your skateparks? Let's talk about your facilities and figure out the right next step.",
    images: [{ url: "/assets/og-contact.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Innovative Park Group | Request a Skatepark Audit",
    description: "Ready to audit your skateparks? Let's talk about your facilities and figure out the right next step.",
    images: ["/assets/og-contact.png"],
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does an audit take?", acceptedAnswer: { "@type": "Answer", text: "Most audits run 4 to 8 hours on site, depending on the size and complexity of the facility. We'll give you a clear timeline once we understand the scope." } },
    { "@type": "Question", name: "How much does an audit cost?", acceptedAnswer: { "@type": "Answer", text: "Pricing depends on the number of facilities, their location, and their condition. Reach out and we'll work through it together. No flat-rate quotes before we know what we're dealing with." } },
    { "@type": "Question", name: "Can you audit multiple parks at once?", acceptedAnswer: { "@type": "Answer", text: "Yes, and it's often more efficient that way. Many councils bring us in to assess their full portfolio in a single engagement." } },
    { "@type": "Question", name: "When will I receive the report?", acceptedAnswer: { "@type": "Answer", text: "Comprehensive reports are typically delivered within 2 to 3 weeks of the site visit. Urgent turnarounds are available on request." } },
    { "@type": "Question", name: "What if a park fails compliance?", acceptedAnswer: { "@type": "Answer", text: "Our reports don't just flag issues. They prioritize them. You'll know what's urgent, what can wait, and what it's likely to cost to fix." } },
    { "@type": "Question", name: "Do you offer ongoing maintenance support?", acceptedAnswer: { "@type": "Answer", text: "Yes. Beyond the initial audit we support councils with regular inspection schedules and long-term maintenance planning." } },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.innovativeparkgroup.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.innovativeparkgroup.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ContactClient />
    </>
  );
}
