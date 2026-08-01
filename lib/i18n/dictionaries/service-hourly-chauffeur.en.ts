import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const hourlyChauffeurEn: ServicePageDictionary = {
  meta: {
    title: "Hourly Chauffeur Service in Spain – Instant Booking",
    description:
      "Book a private chauffeur by the hour anywhere in Spain. Professional drivers, luxury vehicles, and flexible booking, 24/7.",
    ogAlt: "Professional chauffeur waiting beside a private vehicle in Spain",
  },
  breadcrumb: {
    current: "Hourly Chauffeur",
  },
  hero: {
    badge: "Hourly Chauffeur",
    title: "Hourly Chauffeur Service in Spain",
    description:
      "A dedicated driver and vehicle at your disposal, by the hour. Perfect for meetings, shopping days, city tours, or whenever your schedule needs to stay flexible.",
    ctaPrimary: "Instant Booking",
    ctaSecondaryLabel: "Travel in Comfort",
    image:
      "https://images.unsplash.com/photo-1617244148194-7971ce22f2fb?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Professional chauffeur in a suit standing beside an open black Mercedes",
  },
  overview: {
    title: "Flexible, Dedicated Chauffeur Time",
    paragraphs: [
      "Some days don't fit into a single point-to-point transfer. Our hourly chauffeur service gives you a driver and vehicle reserved entirely for you, ready to adapt as your plans change through the day.",
      "Your driver waits between stops, adjusts the route on request, and keeps you moving without the delays of hailing a new taxi every time your schedule shifts.",
    ],
    image:
      "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Black executive sedan available for hourly chauffeur hire",
  },
  whyChoose: {
    title: "Why Choose Our Hourly Chauffeur Service",
    items: [
      {
        icon: "clock",
        title: "No Fixed Itinerary Required",
        description: "Plan as you go. Your driver adapts to changes through the day.",
      },
      {
        icon: "handshake",
        title: "Driver Waits Between Stops",
        description: "No re-booking, no waiting for a new ride between appointments.",
      },
      {
        icon: "briefcase",
        title: "Ideal for Meetings & Events",
        description: "A polished, reliable option for business days and special occasions.",
      },
      {
        icon: "badge-euro",
        title: "Extend Anytime",
        description: "Running long? Extend your booking directly with your driver.",
      },
    ],
  },
  routes: {
    title: "Popular Uses",
    description: "Flexible hourly hire, built around however your day unfolds.",
    items: [
      { title: "Business Meetings", description: "Point-to-point trips across a single business day" },
      { title: "City Sightseeing Tours", description: "A driver and car for a self-paced day of exploring" },
      { title: "Shopping Day in Barcelona", description: "Multiple stops with the car waiting between each" },
      { title: "Wedding & Event Day", description: "Dependable transport for every stage of the day" },
      { title: "Multi-Stop Itineraries", description: "Several destinations, one continuous booking" },
      { title: "Airport Standby Service", description: "A driver on call around a flexible flight schedule" },
    ],
  },
  fleet: {
    vehicleKeys: ["executive-sedan", "premium-suv", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "What is the minimum booking time for an hourly chauffeur?",
        answer: "Most hourly bookings start at a minimum of 3 hours. Let us know your plans and we'll confirm the right duration for your day.",
      },
      {
        question: "Can I extend my booking on the day?",
        answer: "Yes, just let your driver know. Extensions are billed at the same hourly rate, subject to availability.",
      },
      {
        question: "Does the driver wait while I'm at an appointment?",
        answer: "Yes, your driver and vehicle are reserved exclusively for your booking and wait between every stop.",
      },
      {
        question: "How is hourly chauffeur pricing calculated?",
        answer: "Pricing is based on the number of hours booked and the vehicle category, confirmed in full before your booking begins.",
      },
      {
        question: "Can I book a chauffeur for a full day?",
        answer: "Yes, full-day and multi-day bookings are available at a discounted hourly rate. Ask for a custom quote.",
      },
      {
        question: "Is there a mileage limit included?",
        answer: "Each hourly package includes a generous mileage allowance. Extra distance is billed transparently if you exceed it.",
      },
      {
        question: "Can I use the hourly service for a wedding or event?",
        answer: "Absolutely, hourly hire is a popular choice for weddings, galas, and multi-stop event days.",
      },
      {
        question: "Can I book more than one vehicle for a group?",
        answer: "Yes, we can coordinate multiple vehicles under one booking for larger groups or wedding parties.",
      },
    ],
  },
  cta: {
    title: "Book Your Hourly Chauffeur",
    description: "Need a driver for the day? Get your fixed hourly rate confirmed in under a minute.",
    button: "Request Quote",
  },
};
