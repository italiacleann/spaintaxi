import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const cruisePortTransfersEn: ServicePageDictionary = {
  meta: {
    title: "Cruise Port Transfers in Spain – Fixed Prices",
    description:
      "Private transfers between Spanish cruise ports, airports, and cities. Timed pickups, professional drivers, fixed prices.",
    ogAlt: "Large cruise ship docked at a Spanish port",
  },
  breadcrumb: {
    current: "Cruise Port Transfers",
  },
  hero: {
    badge: "Cruise Port Transfers",
    title: "Cruise Port Transfers in Spain",
    description:
      "Timed pickups that get you from port to plane, or port to hotel, without the stress. A driver tracking your ship's schedule and waiting at the terminal.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondaryLabel: "Reserve Your Ride",
    image:
      "https://images.unsplash.com/photo-1764609287343-7cb772b75c55?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Large white cruise ship docked at a Spanish harbor",
  },
  overview: {
    title: "Timed, Stress-Free Port Transfers",
    paragraphs: [
      "Disembarkation day is unpredictable, docking times shift, terminals are crowded, and the last thing you need is a taxi queue with a flight to catch. We track your ship's schedule and time your pickup to match.",
      "Your driver meets you at the terminal with a name sign, helps with luggage, and takes you directly to the airport, your hotel, or onward into the city, at a price agreed before you ever set sail.",
    ],
    image:
      "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Premium SUV waiting for a cruise port transfer",
  },
  whyChoose: {
    title: "Why Choose Our Cruise Transfer Service",
    items: [
      {
        icon: "ship",
        title: "Docking Time Monitoring",
        description: "We track your ship's schedule and adjust pickup automatically.",
      },
      {
        icon: "handshake",
        title: "Direct Terminal Pickup",
        description: "Your driver meets you right at the terminal exit, no searching required.",
      },
      {
        icon: "car-front",
        title: "Luggage-Friendly Vehicles",
        description: "Ample space for cruise luggage, matched to your group size.",
      },
      {
        icon: "plane",
        title: "Port-to-Airport Timing",
        description: "Coordinated timing so a tight connection doesn't become a missed flight.",
      },
    ],
  },
  routes: {
    title: "Popular Port Routes",
    description: "Fixed-price transfers between Spain's major cruise ports and beyond.",
    items: [
      { title: "Barcelona Port → Barcelona Airport", description: "~20 min • timed for your onward flight" },
      { title: "Barcelona Port → City Centre", description: "~15 min • direct to your hotel" },
      { title: "Valencia Port → Valencia City", description: "~15 min • quick port-to-city transfer" },
      { title: "Palma Port → Palma Airport", description: "~15 min • island port-to-airport route" },
      { title: "Málaga Port → Marbella", description: "~50 min • Costa del Sol resort transfer" },
      { title: "Málaga Port → Málaga Airport", description: "~20 min • timed connection service" },
    ],
  },
  fleet: {
    vehicleKeys: ["premium-suv", "business-sedan", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "What if my cruise ship docks late?",
        answer: "We monitor docking schedules and adjust your pickup time automatically, at no extra charge.",
      },
      {
        question: "Where exactly will my driver meet me?",
        answer: "Your driver waits just outside the cruise terminal with a sign showing your name, ready to help with luggage.",
      },
      {
        question: "Can you time a transfer to catch a flight after disembarking?",
        answer: "Yes, we coordinate port-to-airport timing to give you a safe buffer before your flight, based on your ship's expected docking time.",
      },
      {
        question: "How much luggage can cruise transfers accommodate?",
        answer: "Our premium SUV and V-Class options are built for cruise-sized luggage; let us know your group size and bag count when booking.",
      },
      {
        question: "Can you pick up a large group disembarking together?",
        answer: "Yes, we regularly coordinate transfers for groups and can arrange multiple vehicles for larger parties.",
      },
      {
        question: "Do you offer transfers to multiple cruise ports in Spain?",
        answer: "Yes, we cover all of Spain's major cruise ports, including Barcelona, Valencia, Palma, and Málaga.",
      },
      {
        question: "Can I book a one-way port transfer?",
        answer: "Yes, one-way and round-trip cruise transfers are both available, whichever fits your itinerary.",
      },
      {
        question: "Is the price different if my ship arrives early or late?",
        answer: "No, your fixed price stays the same regardless of docking delays; that's exactly what our schedule monitoring is for.",
      },
    ],
  },
  cta: {
    title: "Book Your Cruise Transfer",
    description: "Disembarking soon? Get your fixed-price port transfer confirmed before you set sail.",
    button: "Request Quote",
  },
};
