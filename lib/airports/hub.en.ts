import type { AirportHubDictionary } from "@/lib/airports/hub-types";

export const airportHubEn: AirportHubDictionary = {
  meta: {
    title: "Spain Airport Transfers | Private Taxi at Every Airport",
    description:
      "Book a private airport transfer at any commercial airport in Spain. Fixed prices, flight monitoring, and professional drivers, available 24/7.",
    ogAlt: "Private transfer vehicles waiting outside a Spanish airport terminal",
  },
  breadcrumb: {
    home: "Home",
    current: "Airport Transfers",
  },
  hero: {
    badge: "Airport Directory",
    title: "Private Airport Transfers Across Spain",
    description:
      "From Madrid and Barcelona to the smallest island airstrip, find your private, fixed-price transfer at any commercial airport in Spain.",
  },
  intro: {
    title: "Every Spanish Airport, One Trusted Transfer Network",
    paragraphs: [
      "Whether you're landing on the mainland, in the Balearic Islands, or in the Canary Islands, our network of professional drivers covers every commercial airport in Spain. Search or filter the directory below to find your airport and book a private, door-to-door transfer at a fixed price.",
      "Every airport page includes real drive times to popular destinations and nearby towns, flight monitoring so your driver adjusts automatically to delays, and a fleet ranging from business sedans to spacious vans for groups.",
    ],
  },
  directory: {
    searchLabel: "Search airports",
    searchPlaceholder: "Search by airport, city, or region...",
    filterLabel: "Filter by region",
    filters: {
      all: "All Airports",
      mainland: "Mainland Spain",
      balearic: "Balearic Islands",
      canary: "Canary Islands",
    },
    resultsCountTemplate: "{count} airports",
    emptyMessage: "No airports match your search. Try a different airport, city, or region.",
    cardCta: "View transfer",
    heliportBadge: "Heliport",
  },
  cta: {
    title: "Can't Find Your Airport?",
    description:
      "Contact us directly and we'll arrange a private transfer for any airport, route, or itinerary across Spain.",
    button: "Contact Us",
  },
};
