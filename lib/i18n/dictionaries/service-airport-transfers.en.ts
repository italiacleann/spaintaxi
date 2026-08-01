import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const airportTransfersEn: ServicePageDictionary = {
  meta: {
    title: "Airport Transfer, Taxi & Chauffeur Service in Spain – Book Online",
    description:
      "Book reliable airport transfers anywhere in Spain. Professional drivers, fixed prices, and flight monitoring, available 24/7.",
    ogAlt: "Professional chauffeur ready for an airport transfer in Spain",
  },
  breadcrumb: {
    current: "Airport Transfers",
  },
  hero: {
    badge: "Airport Transfers",
    title: "Airport Transfers Across Spain",
    description:
      "Private, fixed-price transfers between any Spanish airport and your hotel, home, or office. Flight monitoring included, and a driver waiting at arrivals, every time.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondaryLabel: "Contact Us Today",
    image:
      "https://images.unsplash.com/photo-1603087462214-2aadc739429c?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Professional chauffeur standing beside a premium black vehicle",
  },
  overview: {
    title: "Reliable Airport Transfers",
    paragraphs: [
      "Skip the taxi queue and the guesswork. Every airport transfer is booked in advance at a fixed price, with a professional driver tracking your flight and waiting for you at arrivals.",
      "Whether you're landing in Madrid, Barcelona, or a smaller regional airport, our network covers every major terminal in Spain, day or night, with a car matched to your group size.",
    ],
    image:
      "https://images.unsplash.com/photo-1772468237159-674f05233185?w=1200&h=1400&fit=crop&crop=right&q=80",
    imageAlt: "Driver loading luggage into the car for an airport transfer",
  },
  whyChoose: {
    title: "Why Choose Our Airport Transfer Service",
    items: [
      {
        icon: "plane",
        title: "Flight Delay Protection",
        description: "We track your flight and adjust pickup automatically, at no extra cost.",
      },
      {
        icon: "handshake",
        title: "Meet & Greet at Arrivals",
        description: "Your driver waits in arrivals with a name sign, ready to help with bags.",
      },
      {
        icon: "badge-euro",
        title: "Fixed Airport Pricing",
        description: "One price for the whole route, agreed before you travel.",
      },
      {
        icon: "user-check",
        title: "Child Seats Available",
        description: "Request a child or booster seat at no additional charge.",
      },
    ],
  },
  routes: {
    title: "Popular Airports",
    description: "Fixed-price transfers from every major airport in Spain.",
    items: [
      { title: "Barcelona Airport → Barcelona City", description: "~25 min • from El Prat to the city centre" },
      { title: "Madrid Airport → City Centre", description: "~30 min • from Barajas to central Madrid" },
      { title: "Málaga Airport → Marbella", description: "~45 min • Costa del Sol resort transfer" },
      { title: "Valencia Airport → Valencia City", description: "~20 min • quick airport-to-city hop" },
      { title: "Alicante Airport → Benidorm", description: "~40 min • Costa Blanca resort transfer" },
      { title: "Palma Airport → Palma de Mallorca", description: "~20 min • island airport transfer" },
    ],
  },
  fleet: {
    vehicleKeys: ["business-sedan", "premium-suv", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "How do I book an airport transfer?",
        answer: "Enter your airport, destination, flight details, and passenger count in our quote form. You'll receive a fixed price and instant confirmation.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer: "We monitor your flight in real time using your flight number, so your driver adjusts automatically to your actual landing time at no extra cost.",
      },
      {
        question: "Where will my driver meet me?",
        answer: "Your driver waits in the arrivals hall holding a sign with your name, ready to help with luggage as soon as you land.",
      },
      {
        question: "How much luggage can I bring?",
        answer: "Each vehicle category has a listed luggage allowance. Let us know if you have extra bags or oversized items when you book.",
      },
      {
        question: "Can I book a one-way airport transfer?",
        answer: "Yes, you can book a one-way or round-trip transfer. Round trips can be booked together or separately, whichever suits your itinerary.",
      },
      {
        question: "Do you charge extra for early or late flights?",
        answer: "No. Our airport transfer service runs 24/7 at the same fixed price, regardless of your arrival or departure time.",
      },
      {
        question: "Is the price per person or per vehicle?",
        answer: "Our prices are per vehicle, not per person, so groups traveling together often save compared to individual taxis.",
      },
      {
        question: "Can I request a child seat for my airport transfer?",
        answer: "Yes, child and booster seats are available on request at no additional charge. Just add the details when you book.",
      },
    ],
  },
  cta: {
    title: "Book Your Airport Transfer",
    description: "Landing in Spain? Get your fixed-price airport transfer booked in under a minute.",
    button: "Request Quote",
  },
};
