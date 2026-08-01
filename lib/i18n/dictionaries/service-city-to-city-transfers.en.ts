import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const cityToCityTransfersEn: ServicePageDictionary = {
  meta: {
    title: "City-to-City Transfers in Spain – Reserve Your Ride",
    description:
      "Comfortable long-distance transfers between Spanish cities. Fixed prices, professional drivers, and door-to-door service, 24/7.",
    ogAlt: "Private vehicle on a scenic Spanish highway for a city-to-city transfer",
  },
  breadcrumb: {
    current: "City-to-City Transfers",
  },
  hero: {
    badge: "City-to-City Transfers",
    title: "City-to-City Transfers in Spain",
    description:
      "Skip the train station and the rental car counter. Travel directly between Spanish cities in a private vehicle, at a fixed price, door to door.",
    ctaPrimary: "Reserve Your Ride",
    ctaSecondaryLabel: "Get a Free Quote",
    image:
      "https://images.unsplash.com/photo-1613332803480-0e94806c7394?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Scenic winding road along the Spanish coastline",
  },
  overview: {
    title: "Comfortable Long-Distance Travel",
    paragraphs: [
      "Trains and buses mean fixed schedules and shared carriages. A private city-to-city transfer means leaving when you're ready, going straight to your destination, and arriving relaxed rather than road-weary.",
      "Every long-distance transfer is priced in advance, with a professional driver and a comfortable vehicle suited to the length of the journey, from a quick hop between neighboring cities to a multi-hour crossing of the country.",
    ],
    image:
      "https://images.unsplash.com/photo-1758855307960-3a6339cb2c27?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Silver business sedan ready for a long-distance transfer",
  },
  whyChoose: {
    title: "Why Choose Our City Transfer Service",
    items: [
      {
        icon: "route",
        title: "No Station Hassles",
        description: "Skip train platforms, luggage restrictions, and transfer schedules entirely.",
      },
      {
        icon: "map-pin",
        title: "Direct Door-to-Door",
        description: "Picked up at your address, dropped off at exactly where you're headed.",
      },
      {
        icon: "car-front",
        title: "Comfort for Long Journeys",
        description: "Spacious, air-conditioned vehicles built for multi-hour trips.",
      },
      {
        icon: "map-pin",
        title: "Stops on Request",
        description: "Add a break, a scenic detour, or a second pickup along the way.",
      },
    ],
  },
  routes: {
    title: "Popular Routes",
    description: "Fixed-price private transfers between Spain's most-traveled cities.",
    items: [
      { title: "Madrid → Barcelona", description: "~6 hrs • cross-country private transfer" },
      { title: "Barcelona → Valencia", description: "~3.5 hrs • Mediterranean coast route" },
      { title: "Málaga → Seville", description: "~2.5 hrs • Andalusia city-to-city" },
      { title: "Valencia → Alicante", description: "~2 hrs • Costa Blanca route" },
      { title: "Seville → Granada", description: "~2.5 hrs • Andalusia heritage route" },
      { title: "Madrid → Toledo", description: "~1 hr • popular day-trip transfer" },
    ],
  },
  fleet: {
    vehicleKeys: ["business-sedan", "executive-sedan", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "How is the price for a city-to-city transfer calculated?",
        answer: "Pricing is based on the exact distance between your pickup and drop-off cities, plus vehicle type and passenger count, confirmed in full before you book.",
      },
      {
        question: "Can I make a stop along the way?",
        answer: "Yes, let us know when booking and we'll build a stop into your route, whether for a break, a meal, or a short detour.",
      },
      {
        question: "Is there a luggage limit for long-distance transfers?",
        answer: "Each vehicle has a listed luggage allowance. For larger groups or extra bags, we recommend our Mercedes V-Class or minibus options.",
      },
      {
        question: "Can I book an overnight or early-morning transfer?",
        answer: "Yes, city-to-city transfers run 24/7 at the same fixed price, whatever time you need to travel.",
      },
      {
        question: "Do you offer round-trip city transfers?",
        answer: "Yes, you can book a return transfer for later the same day or a future date, whichever suits your schedule.",
      },
      {
        question: "Is the driver the same for the whole journey?",
        answer: "Yes, one driver takes you directly from pickup to drop-off, with no changes or transfers along the way.",
      },
      {
        question: "Can I book a city-to-city transfer for a group?",
        answer: "Absolutely. Larger groups can be accommodated in our Mercedes V-Class or minibus, all within the same fixed-price booking.",
      },
      {
        question: "What if my plans change after booking?",
        answer: "Most bookings can be amended or cancelled free of charge up to 24 hours before pickup. Just contact our support team.",
      },
    ],
  },
  cta: {
    title: "Book Your City Transfer",
    description: "Traveling between Spanish cities? Get your fixed-price transfer booked in under a minute.",
    button: "Request Quote",
  },
};
