import type { LegalPageDictionary } from "@/lib/i18n/legal-types";

export const termsEn: LegalPageDictionary = {
  meta: {
    title: "Terms & Conditions | Spain Private Transfers",
    description:
      "Read the Terms & Conditions governing bookings, cancellations, payments, responsibilities, and the use of Spain Private Transfers.",
  },
  breadcrumb: {
    home: "Home",
    current: "Terms & Conditions",
  },
  hero: {
    badge: "Legal",
    title: "Terms & Conditions",
    description:
      "These terms govern every booking made with Spain Private Transfers. Please read them carefully before reserving a transfer.",
    lastUpdatedLabel: "Last updated",
    lastUpdatedDate: "July 24, 2026",
  },
  tocTitle: "On This Page",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Spain Private Transfers (\"we\", \"us\", \"our\") provides private transportation services, including airport transfers, city transfers, and chauffeur services, across Spain.",
        "By requesting a quote, making a booking, or using our website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.",
      ],
    },
    {
      id: "booking-terms",
      title: "Booking Terms",
      paragraphs: [
        "Bookings can be made through our website, by phone, or by email. A booking is only confirmed once you receive a written confirmation from us, either by email or through our booking system.",
        "You are responsible for providing accurate pickup and drop-off details, flight or train information, passenger numbers, and luggage requirements at the time of booking.",
      ],
      bullets: [
        "Bookings should be made at least 4 hours in advance where possible",
        "Same-day bookings are subject to driver availability",
        "You may be asked to confirm your booking details before pickup",
      ],
    },
    {
      id: "payments",
      title: "Payments",
      paragraphs: [
        "Payment can be made online at the time of booking, or in the vehicle by card or cash, depending on the payment option selected during checkout.",
        "All online payments are processed through encrypted, PCI-compliant payment providers. We do not store your full card details on our servers.",
      ],
    },
    {
      id: "pricing",
      title: "Pricing",
      paragraphs: [
        "The price confirmed at the time of booking is fixed and based on the pickup location, drop-off location, vehicle type, and number of passengers you provide.",
        "Additional charges may apply for extra stops, significant waiting time beyond the included allowance, or changes to the original itinerary requested after booking.",
      ],
    },
    {
      id: "cancellation-policy",
      title: "Cancellation Policy",
      paragraphs: [
        "Most bookings can be cancelled or amended free of charge up to 24 hours before the scheduled pickup time.",
        "Cancellations made within 24 hours of pickup, or failure to show up at the agreed location, may be subject to a cancellation fee of up to the full booking amount.",
      ],
      bullets: [
        "Free cancellation up to 24 hours before pickup",
        "Cancellations within 24 hours may incur a fee",
        "No-shows are charged in full",
      ],
    },
    {
      id: "waiting-time",
      title: "Waiting Time",
      paragraphs: [
        "For airport pickups, waiting time is included from the actual landing time of your flight, as monitored by us, and typically includes 60 minutes of free waiting for international arrivals and 45 minutes for domestic arrivals.",
        "For all other pickups, a grace period of 15 minutes is included from the scheduled pickup time. Waiting time beyond the included allowance may be charged at an hourly rate.",
      ],
    },
    {
      id: "flight-monitoring",
      title: "Flight Monitoring",
      paragraphs: [
        "When you provide your flight number, we monitor your flight's status in real time and automatically adjust your driver's pickup time to match your actual landing time.",
        "Flight monitoring does not apply if flight details were not provided at the time of booking or are inaccurate.",
      ],
    },
    {
      id: "passenger-responsibilities",
      title: "Passenger Responsibilities",
      paragraphs: [
        "Passengers are responsible for providing accurate booking information and being ready at the agreed pickup point at the scheduled time.",
        "Passengers must behave respectfully toward drivers and other passengers. We reserve the right to refuse or end a journey in cases of abusive behavior, intoxication that poses a safety risk, or damage to the vehicle.",
      ],
    },
    {
      id: "vehicle-availability",
      title: "Vehicle Availability",
      paragraphs: [
        "While we make every effort to provide the specific vehicle category booked, we reserve the right to substitute a vehicle of equal or higher category in the event of unforeseen circumstances.",
        "Vehicle images shown on our website are representative of the category booked and may not reflect the exact make or model provided.",
      ],
    },
    {
      id: "lost-property",
      title: "Lost Property",
      paragraphs: [
        "If you believe you have left an item in one of our vehicles, please contact our support team as soon as possible with your booking reference and a description of the item.",
        "We will make reasonable efforts to locate and return lost property, but cannot guarantee recovery. Return shipping costs, where applicable, are the responsibility of the passenger.",
      ],
    },
    {
      id: "liability",
      title: "Liability",
      paragraphs: [
        "Our liability for any claim arising from a booking is limited to the value of the booking in question, except where liability cannot be limited or excluded under applicable Spanish law.",
        "We are not liable for delays, missed connections, or losses caused by circumstances outside our reasonable control, including but not limited to traffic, weather, or airport procedures.",
      ],
    },
    {
      id: "force-majeure",
      title: "Force Majeure",
      paragraphs: [
        "We will not be held responsible for any failure or delay in performing our obligations that results from causes beyond our reasonable control, including natural disasters, strikes, civil unrest, or government restrictions.",
        "In such cases, we will make reasonable efforts to notify affected passengers and offer a rebooking or refund where appropriate.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        "All content on this website, including text, graphics, logos, and images, is the property of Spain Private Transfers or its licensors and is protected by applicable intellectual property laws.",
        "You may not reproduce, distribute, or use our content for commercial purposes without prior written consent.",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [
        "Our website may use third-party services for payment processing, flight tracking, mapping, and analytics. These providers operate under their own terms and privacy policies.",
        "We are not responsible for the availability or performance of third-party services beyond our reasonable control.",
      ],
    },
    {
      id: "changes-to-terms",
      title: "Changes to Terms",
      paragraphs: [
        "We may update these Terms & Conditions from time to time to reflect changes in our services or legal requirements. The updated version will be posted on this page with a revised date.",
        "Continued use of our services after changes are published constitutes acceptance of the updated terms.",
      ],
    },
    {
      id: "contact-information",
      title: "Contact Information",
      paragraphs: [
        "If you have any questions about these Terms & Conditions, please contact our support team using the details below.",
      ],
    },
  ],
  cta: {
    title: "Need Assistance?",
    description: "Have a question about a booking or these terms? Our support team is here to help.",
    button: "Contact Us",
    href: "/contact/",
  },
};
