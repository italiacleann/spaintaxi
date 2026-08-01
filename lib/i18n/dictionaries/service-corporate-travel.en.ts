import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const corporateTravelEn: ServicePageDictionary = {
  meta: {
    title: "Corporate Travel & Business Chauffeur Service in Spain",
    description:
      "Reliable corporate transfers across Spain. Invoiced billing, professional drivers, and priority booking for business travel.",
    ogAlt: "Business professionals walking through a city business district in Spain",
  },
  breadcrumb: {
    current: "Corporate Travel",
  },
  hero: {
    badge: "Corporate Travel",
    title: "Corporate Travel Across Spain",
    description:
      "Dependable, professional transfers for business travelers and teams. Invoiced billing, priority booking, and drivers who understand the pace of business travel.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondaryLabel: "Business Travel Made Easy",
    image:
      "https://images.unsplash.com/photo-1533478784933-5fdbddc8ea7c?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Business professionals walking through a city financial district",
  },
  overview: {
    title: "Business Travel Made Easy",
    paragraphs: [
      "When you're on a schedule, a late transfer isn't an inconvenience, it's a missed meeting. Our corporate travel service is built around punctuality, discretion, and accounts that make expense reporting simple.",
      "From single executive pickups to coordinated transfers for an entire visiting team, we handle the logistics so your business travelers can focus on the meeting, not the journey there.",
    ],
    image:
      "https://images.unsplash.com/photo-1758855307960-3a6339cb2c27?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Silver business sedan ready for a corporate transfer",
  },
  whyChoose: {
    title: "Why Companies Choose Our Corporate Travel Service",
    items: [
      {
        icon: "briefcase",
        title: "Centralized Invoicing",
        description: "One monthly invoice for your whole company, no expense claims needed.",
      },
      {
        icon: "headset",
        title: "Priority Booking & Support",
        description: "A dedicated line for last-minute changes and urgent requests.",
      },
      {
        icon: "shield-check",
        title: "Discreet, Professional Drivers",
        description: "Vetted drivers trained for confidential and executive travel.",
      },
      {
        icon: "plane",
        title: "Meeting Coordination",
        description: "We track flights and adjust pickups so no one waits on either end.",
      },
    ],
  },
  routes: {
    title: "Popular Corporate Routes",
    description: "Built around how business travelers actually move through Spain.",
    items: [
      { title: "Madrid Airport → Business District", description: "Direct executive transfer to central offices" },
      { title: "Barcelona Airport → 22@ Innovation District", description: "Fast transfer to Barcelona's tech hub" },
      { title: "Multi-City Roadshows", description: "Coordinated transfers across several cities in one trip" },
      { title: "Client Site Visits", description: "On-schedule transport between meetings and offices" },
      { title: "Conference & Event Transfers", description: "Group coordination for delegates and attendees" },
      { title: "Executive Meet & Greet", description: "A driver waiting at arrivals for VIP guests" },
    ],
  },
  fleet: {
    vehicleKeys: ["executive-sedan", "business-sedan", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "Do you offer corporate accounts with monthly invoicing?",
        answer: "Yes, we set up centralized billing for companies of any size, with a single monthly invoice covering all bookings.",
      },
      {
        question: "Can you handle last-minute corporate bookings?",
        answer: "Yes, our corporate line prioritizes urgent requests and can typically confirm a vehicle within the hour, subject to availability.",
      },
      {
        question: "Are your drivers trained for executive or confidential travel?",
        answer: "Yes, drivers assigned to corporate accounts are vetted and briefed on discretion and professional conduct.",
      },
      {
        question: "Can you coordinate transfers for a visiting team?",
        answer: "Yes, we regularly coordinate multiple simultaneous pickups for teams and delegations arriving together.",
      },
      {
        question: "Do you provide Wi-Fi in the vehicle for work on the go?",
        answer: "Yes, Wi-Fi is available on request in our business and executive vehicles at no extra cost.",
      },
      {
        question: "Can we set up a recurring booking for regular routes?",
        answer: "Yes, recurring bookings for regular office-to-airport or inter-office routes can be arranged with a dedicated account manager.",
      },
      {
        question: "Is pricing different for corporate accounts?",
        answer: "Corporate accounts benefit from volume pricing and simplified centralized billing compared to individual bookings.",
      },
      {
        question: "Can you arrange transfers for a conference or event?",
        answer: "Yes, we handle group logistics for conferences, from individual VIP transfers to coordinated delegate shuttles.",
      },
    ],
  },
  cta: {
    title: "Book Your Corporate Transfer",
    description: "Traveling for business? Set up your corporate account or request a fixed-price quote today.",
    button: "Request Quote",
  },
};
