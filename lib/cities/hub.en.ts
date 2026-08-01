import type { CityHubDictionary } from "@/lib/cities/hub-types";

export const cityHubEn: CityHubDictionary = {
  meta: {
    title: "Private Car, Taxi & Chauffeur Services Across Spain",
    description:
      "Explore private transfer, airport taxi, and chauffeur services in major cities across Spain. Professional drivers, fixed prices, and 24/7 transportation.",
    ogAlt: "Private chauffeur vehicle parked on a historic Spanish city street",
  },
  breadcrumb: {
    home: "Home",
    current: "Cities",
  },
  hero: {
    badge: "City Directory",
    title: "Private Transfers Across Spain's Cities",
    description:
      "Find reliable airport transfers, private taxis, and chauffeur services in cities across Spain.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondaryLabel: "Browse Airport Transfers",
    image: "https://plus.unsplash.com/premium_photo-1697730402697-51e3757346d7?w=1920&h=1400&fit=crop&q=80",
    imageAlt: "Plaza Mayor in Madrid with its equestrian statue and historic façade",
  },
  intro: {
    title: "Private Transportation in Every Major Spanish City",
    paragraphs: [
      "Spain is a country built for exploring, from the tapas bars of Madrid and the Gothic lanes of Barcelona to the whitewashed hill towns of Andalusia and the surf towns of the Basque coast. Getting between them, and around them, shouldn't mean queuing for a taxi rank or navigating an unfamiliar bus network with luggage in tow. This is where our private transfer network comes in: professional drivers, fixed prices agreed before you travel, and a fleet suited to solo travelers, couples, families, and business groups alike.",
      "Whether you're flying into Madrid–Barajas for a long weekend, arriving in Barcelona for a cruise departure, or touching down in Málaga for a Costa del Sol holiday, our city pages below connect you directly to the transfer information you need: the nearest airport, typical drive times, popular day-trip destinations, and a straightforward way to book. Each city page is built around real, local detail, not generic filler, because the difference between a good transfer and a stressful one is usually in the specifics.",
      "This directory is also designed to grow. As we expand our coverage of Spain, new cities, regional routes, hotel partnerships, cruise ports, and train station transfers will be added here, all sharing the same fixed-price, professionally driven standard. If you don't see your destination listed yet, get in touch directly and we'll arrange your transfer all the same.",
    ],
  },
  directory: {
    searchLabel: "Search cities",
    searchPlaceholder: "Search city...",
    featuredTitle: "Featured Cities",
    allCitiesTitle: "All Cities A–Z",
    resultsCountTemplate: "{count} cities",
    emptyMessage: "No cities match your search. Try a different city or region.",
    cardCta: "View City Transfers",
    mainAirportLabel: "Main Airport",
  },
  popularRoutes: {
    title: "Popular Routes",
    description:
      "Some of the most requested private transfer routes between Spain's major airports and cities.",
  },
  whyChoose: {
    title: "Why Book Your City Transfer With Us",
    items: [
      {
        icon: "shield-check",
        title: "Professional Drivers",
        description: "Every driver in our network is professionally licensed, background-checked, and fully insured.",
      },
      {
        icon: "badge-euro",
        title: "Fixed Prices",
        description: "Your fare is confirmed at booking, with no meters, no surge pricing, and no hidden fees.",
      },
      {
        icon: "plane",
        title: "Flight Monitoring",
        description: "We track your flight in real time, so your driver adjusts automatically if you land late.",
      },
      {
        icon: "car-front",
        title: "Luxury Vehicles",
        description: "From business sedans to spacious vans, our fleet is maintained to a premium standard.",
      },
      {
        icon: "clock",
        title: "24/7 Service",
        description: "Early flight or midnight arrival, our drivers are ready around the clock, every day of the year.",
      },
      {
        icon: "headset",
        title: "Door-to-Door Transfers",
        description: "No shuttle stops or shared rides, just a private vehicle that takes you exactly where you're going.",
      },
    ],
  },
  map: {
    title: "Explore Spain by City",
    description: "Select a city on the map to see transfer details, drive times, and booking information.",
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions about booking a private transfer in one of Spain's cities.",
    items: [
      {
        question: "Which cities do you serve?",
        answer:
          "We currently cover major cities and popular destinations across Spain, including Madrid, Barcelona, Valencia, Málaga, Seville, Alicante, Bilbao, Granada, Marbella, Ibiza, Palma, and dozens more listed in the directory above. Our network continues to grow.",
      },
      {
        question: "Do you offer airport transfers?",
        answer:
          "Yes. Every city page includes a direct link to its nearest airport's transfer page, with real drive times and flight monitoring included at no extra cost.",
      },
      {
        question: "Can I book long-distance transfers between cities?",
        answer:
          "Yes, city-to-city transfers are one of our most popular services. Whether it's Madrid to Toledo or Málaga to Marbella, you can book a one-way or return journey with a fixed price agreed in advance.",
      },
      {
        question: "Are private chauffeurs available for full days or multi-day trips?",
        answer:
          "Yes, our hourly chauffeur service lets you book a driver and vehicle for a set number of hours, ideal for business meetings, city tours, or multi-stop itineraries.",
      },
      {
        question: "Is the price per person or per vehicle?",
        answer:
          "Our prices are per vehicle, not per person, so groups and families traveling together often save compared to booking individual taxis.",
      },
      {
        question: "What if my city isn't listed yet?",
        answer:
          "We're adding new city and route pages regularly. If your destination isn't listed yet, contact us directly and we'll arrange a private transfer for your route all the same.",
      },
    ],
  },
  cta: {
    title: "Looking for a Transfer in a Spanish City?",
    description:
      "Search the directory above or contact us directly, and we'll have your private, fixed-price transfer confirmed in minutes.",
    button: "Get a Quote",
  },
};
