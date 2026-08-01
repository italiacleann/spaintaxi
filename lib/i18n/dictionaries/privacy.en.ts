import type { LegalPageDictionary } from "@/lib/i18n/legal-types";

export const privacyEn: LegalPageDictionary = {
  meta: {
    title: "Privacy Policy | Spain Private Transfers",
    description:
      "Learn how Spain Private Transfers collects, uses, stores, and protects your personal information.",
  },
  breadcrumb: {
    home: "Home",
    current: "Privacy Policy",
  },
  hero: {
    badge: "Privacy Policy",
    title: "Privacy Policy",
    description:
      "Your privacy matters to us. This policy explains what information we collect, how we use it, and the rights you have over it.",
    lastUpdatedLabel: "Last updated",
    lastUpdatedDate: "July 24, 2026",
  },
  tocTitle: "On This Page",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "This Privacy Policy explains how Spain Private Transfers (\"we\", \"us\", \"our\") collects, uses, stores, and protects your personal information when you visit our website or book a transfer with us.",
        "We are committed to handling your data responsibly and in compliance with the EU General Data Protection Regulation (GDPR) and applicable Spanish data protection law.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We collect information that you provide directly to us, as well as some information automatically when you use our website.",
      ],
      bullets: [
        "Booking information: name, email, phone number, pickup and drop-off addresses, flight or train details, and passenger count",
        "Contact form submissions: name, email, and the content of your message",
        "Payment information: processed securely by our payment providers (see Payment Information below)",
        "Technical data: IP address, browser type, device information, and pages visited, collected automatically via cookies and similar technologies",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Information",
      paragraphs: [
        "We use your information to provide and manage your booking, communicate with you about your transfer, respond to enquiries, and improve our website and services.",
      ],
      bullets: [
        "To confirm, schedule, and dispatch your private transfer",
        "To send booking confirmations, driver details, and service updates",
        "To respond to customer support requests",
        "To monitor and improve website performance and security",
        "To meet legal, tax, and regulatory obligations",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "We use cookies and similar technologies to operate our website, remember your preferences, and understand how visitors use our site.",
        "You can control or disable cookies through your browser settings. Disabling certain cookies may affect the functionality of our booking system.",
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      paragraphs: [
        "We use analytics tools, including Google Analytics, to understand how visitors interact with our website, using aggregated and anonymized data where possible.",
        "Analytics data helps us identify popular routes and destinations, improve page performance, and fix usability issues.",
      ],
    },
    {
      id: "marketing-communications",
      title: "Marketing Communications",
      paragraphs: [
        "We will only send you marketing emails if you have opted in to receive them. You can unsubscribe at any time using the link included in every marketing email or by contacting us directly.",
        "Transactional emails related to an active booking, such as confirmations and driver details, are not marketing communications and cannot be opted out of while a booking is active.",
      ],
    },
    {
      id: "payment-information",
      title: "Payment Information",
      paragraphs: [
        "Online payments are processed by third-party, PCI-DSS-compliant payment providers. We do not store your full card number, expiry date, or CVV on our servers.",
        "Payment providers process your payment data under their own privacy policies and security standards.",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      paragraphs: [
        "We retain booking and customer data for as long as necessary to provide our services and to comply with legal, accounting, and tax obligations, typically for up to 5 years after your last booking.",
        "Data no longer required for these purposes is securely deleted or anonymized.",
      ],
    },
    {
      id: "gdpr-rights",
      title: "GDPR Rights",
      paragraphs: [
        "If you are located in the European Economic Area, you have the following rights regarding your personal data under the GDPR:",
      ],
      bullets: [
        "The right to access the personal data we hold about you",
        "The right to correct inaccurate or incomplete data",
        "The right to request deletion of your data (\"right to be forgotten\")",
        "The right to restrict or object to certain processing",
        "The right to data portability",
        "The right to withdraw consent at any time, where processing is based on consent",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [
        "We share data with trusted third parties only where necessary to provide our services, including payment processors, flight tracking providers, mapping services, and email delivery platforms.",
        "These providers are contractually required to protect your data and use it only for the purposes we specify.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "We use industry-standard technical and organizational measures, including encryption in transit, access controls, and regular security reviews, to protect your personal data against unauthorized access, loss, or misuse.",
        "No method of transmission or storage is completely secure, and we cannot guarantee absolute security, but we work continuously to protect your information.",
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      paragraphs: [
        "Our services are intended for use by adults booking transportation for themselves and their travel companions, including children. We do not knowingly collect personal data directly from children.",
        "If you believe a child has provided us with personal data without appropriate parental consent, please contact us so we can remove it.",
      ],
    },
    {
      id: "international-transfers",
      title: "International Transfers",
      paragraphs: [
        "Some of our service providers may process data outside the European Economic Area. When this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses, to protect your data.",
      ],
    },
    {
      id: "changes-to-policy",
      title: "Changes to Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised date.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "If you have questions about this Privacy Policy or wish to exercise any of your data protection rights, please contact us using the details below.",
      ],
    },
  ],
  cta: {
    title: "Questions About Your Privacy?",
    description: "Request a quote or reach out to our team for anything related to your personal data or this policy.",
    button: "Request a Quote",
    href: "/get-a-quote/",
  },
};
