import type { AboutDictionary } from "@/lib/i18n/about-types";

export const aboutEn: AboutDictionary = {
  meta: {
    title: "About Spain Private Transfers | How Our Transfer Service Works",
    description:
      "Spain Private Transfers helps travelers request private transfer services across Spain by connecting customers with local transport providers.",
    ogAlt: "Private car for a transfer in Spain",
  },
  breadcrumb: {
    home: "Home",
    current: "About Us",
  },
  hero: {
    badge: "Private Transfers in Spain",
    title: "About Spain Private Transfers",
    description:
      "Spain Private Transfers helps travelers request private transfer services across Spain by connecting customers with local transport providers. You tell us your trip, we send you a fixed-price quote, and a professional driver takes you door to door.",
    ctaQuote: "Get a Quote",
    ctaContact: "Contact Us",
    image:
      "https://images.unsplash.com/photo-1603087462214-2aadc739429c?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Black private car ready for a transfer",
  },
  story: {
    whoWeAreTitle: "What We Do",
    whoWeAreParagraphs: [
      "Spain Private Transfers helps travelers request private transfer services across Spain by connecting customers with local transport providers. You send one request with your pickup, destination, date and group size, and we come back with a fixed price for the whole trip.",
      "Transfers are carried out by local transport providers. The price confirmed at booking is fixed, and our terms set out what's included, such as flight monitoring when you give us your flight number and free cancellation on most bookings up to 24 hours before pickup.",
    ],
    missionTitle: "Our Mission",
    missionText:
      "To make booking a private transfer in Spain simple and transparent, with a fixed price agreed before you travel and clear terms.",
    visionText:
      "To be a straightforward way to arrange private transport anywhere in Spain, from airport pickups to long-distance trips.",
    timeline: [
      {
        label: "Step 1",
        title: "You Send a Request",
        description:
          "Tell us your pickup, destination, date, time, passengers and luggage in the quote form.",
      },
      {
        label: "Step 2",
        title: "We Send a Fixed Price",
        description:
          "We check the trip with a local transport provider and reply with a fixed price by email.",
      },
      {
        label: "Step 3",
        title: "You Confirm",
        description:
          "Once you accept the quote, the booking is confirmed with the pickup details you need.",
      },
      {
        label: "Step 4",
        title: "Your Driver Collects You",
        description:
          "A professional driver meets you at the agreed point and takes you directly to your destination.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1772468237159-674f05233185?w=1200&h=1400&fit=crop&crop=right&q=80",
    imageAlt: "Luggage being loaded into a private car",
  },
  whyChoose: {
    title: "Why Travelers Choose Us",
    description:
      "Every part of our service is designed around one idea: private transfers should feel effortless.",
    items: [
      {
        icon: "user-check",
        title: "Professional Drivers",
        description: "Transfers are carried out by professional drivers from local transport providers.",
      },
      {
        icon: "shield-check",
        title: "Clear Terms",
        description: "Free cancellation on most bookings up to 24 hours before pickup.",
      },
      {
        icon: "plane",
        title: "Flight Monitoring",
        description: "Give us your flight number and the pickup follows your actual landing time.",
      },
      {
        icon: "handshake",
        title: "Meet & Greet",
        description: "Your driver waits at arrivals with a name sign, ready to help.",
      },
      {
        icon: "badge-euro",
        title: "Transparent Pricing",
        description: "Your fare is confirmed at booking. No meters, no surprises.",
      },
      {
        icon: "car-front",
        title: "Vehicle Choice",
        description: "Request a sedan, SUV, Mercedes V-Class, minivan or minibus to suit your group.",
      },
      {
        icon: "map-pin",
        title: "Door-to-Door",
        description: "Direct pickup and drop-off, no shared stops or detours.",
      },
      {
        icon: "headset",
        title: "Requests Any Time",
        description: "Send a quote request whenever suits you; we reply by email.",
      },
    ],
  },
  services: {
    title: "Our Services",
    description: "The kinds of trips you can request through us.",
    items: [
      {
        icon: "plane",
        title: "Airport Transfers",
        description: "Private pickups and drop-offs at every major Spanish airport.",
        href: "/airport-transfers/",
      },
      {
        icon: "building",
        title: "Hotel Transfers",
        description: "Door-to-door rides between your hotel and anywhere you need to be.",
        href: "/airport-transfers/",
      },
      {
        icon: "map-pinned",
        title: "City-to-City Transfers",
        description: "Comfortable rides across town for meetings, sightseeing, or events.",
        href: "/city-to-city-transfers/",
      },
      {
        icon: "ship",
        title: "Cruise Port Transfers",
        description: "Timed pickups that get you from port to plane without stress.",
        href: "/cruise-port-transfers/",
      },
      {
        icon: "briefcase",
        title: "Corporate Travel",
        description: "Invoiced, reliable transfers for business travelers and teams.",
        href: "/corporate-travel/",
      },
      {
        icon: "car-front",
        title: "Luxury Chauffeur",
        description: "A dedicated driver and premium vehicle, entirely at your service.",
        href: "/hourly-chauffeur/",
      },
      {
        icon: "timer",
        title: "Hourly Chauffeur",
        description: "Book a driver by the hour for meetings, tours, or full-day use.",
        href: "/hourly-chauffeur/",
      },
      {
        icon: "route",
        title: "Long Distance Transfers",
        description: "Comfortable, direct transfers between cities and regions.",
        href: "/city-to-city-transfers/",
      },
      {
        icon: "flag",
        title: "Border Transfers",
        description: "Cross-border trips into Portugal or France on request, subject to confirmation.",
        href: "/city-to-city-transfers/",
      },
      {
        icon: "users",
        title: "Group & Event Transfers",
        description: "Weddings, conferences, and group outings, handled smoothly.",
        href: "/group-event-transfers/",
      },
    ],
  },
  coverage: {
    title: "Covering Every Destination in Spain",
    description:
      "You can request transfers across mainland Spain and the islands. We confirm availability for each trip with your quote.",
    cities: [
      "Madrid",
      "Barcelona",
      "Valencia",
      "Málaga",
      "Seville",
      "Bilbao",
      "Alicante",
      "Granada",
      "Córdoba",
      "Murcia",
      "Ibiza",
      "Palma",
    ],
    footnote:
      "And all major airports, train stations, cruise ports, hotels, and tourist destinations across Spain.",
    airportsLink: { label: "Browse Popular Airports", href: "/airports/" },
    citiesLink: { label: "Explore Popular Cities", href: "/cities/" },
  },
  drivers: {
    title: "Professional Drivers",
    description:
      "Transfers are carried out by professional drivers working with local transport providers. Here's what you can expect on the day.",
    highlights: [
      "Airport pickups: your driver waits in arrivals with a name sign",
      "Flight monitoring when you include your flight number",
      "Free waiting from actual landing: 60 minutes international, 45 minutes domestic",
      "Direct trip to your destination, with no shared stops",
    ],
    image:
      "https://images.unsplash.com/photo-1617244148194-7971ce22f2fb?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Black Mercedes with the rear door open",
  },
  fleet: {
    title: "Vehicle Types",
    description: "Examples of the vehicle types you can request. The exact vehicle depends on the local provider and is confirmed with your quote.",
    vehicles: [
      {
        name: "Executive Sedan",
        category: "Sedan",
        passengers: "1-3",
        luggage: "2",
        wifi: false,
        ac: true,
        image:
          "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=900&h=700&fit=crop&q=80",
        imageAlt: "Black executive sedan parked for a private transfer",
      },
      {
        name: "Mercedes V-Class",
        category: "Van",
        passengers: "1-5",
        luggage: "4",
        wifi: false,
        ac: true,
        image:
          "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?w=900&h=700&fit=crop&q=80",
        imageAlt: "Mercedes-Benz vehicle for a private transfer",
      },
      {
        name: "Luxury Van",
        category: "Minivan",
        passengers: "1-8",
        luggage: "8",
        wifi: false,
        ac: true,
        image:
          "https://images.unsplash.com/photo-1765461734605-34657fa04db2?w=900&h=700&fit=crop&q=80",
        imageAlt: "Dark Mercedes luxury van with headlights on",
      },
    ],
    passengersLabel: "Passengers",
    luggageLabel: "Luggage",
    wifiLabel: "Wi-Fi",
    acLabel: "A/C",
  },
  process: {
    title: "How It Works",
    steps: [
      {
        step: "01",
        icon: "calendar-check",
        title: "Request a Quote",
        description: "Tell us your pickup, drop-off, date, and passenger count.",
      },
      {
        step: "02",
        icon: "mail-check",
        title: "Receive Confirmation",
        description: "Get your fixed price and booking details by email.",
      },
      {
        step: "03",
        icon: "handshake",
        title: "Meet Your Driver",
        description: "Your driver is waiting with a name sign, ready to help with luggage.",
      },
      {
        step: "04",
        icon: "car-front",
        title: "Enjoy Your Journey",
        description: "Travel directly to your destination, with no shared stops.",
      },
    ],
  },
  trust: {
    title: "What You Can Rely On",
    description:
      "These points come from our booking terms.",
    items: [
      {
        icon: "badge-euro",
        title: "Fixed Price at Booking",
        description: "The price confirmed at booking is fixed. Extras apply only for added stops, extra waiting or changes you request.",
      },
      {
        icon: "smile",
        title: "Free Cancellation",
        description: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup.",
      },
      {
        icon: "headset",
        title: "Contact by Email or WhatsApp",
        description: "Questions about a quote or booking can be sent by email or WhatsApp.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions about how we work.",
    items: [
      {
        question: "How does Spain Private Transfers work?",
        answer:
          "Spain Private Transfers helps travelers request private transfer services across Spain by connecting customers with local transport providers. You send a request, we reply with a fixed price, and once you confirm, a professional driver carries out the transfer.",
      },
      {
        question: "Who carries out the transfer?",
        answer:
          "Transfers are carried out by professional drivers from local transport providers. Your booking confirmation includes the pickup details you need on the day.",
      },
      {
        question: "Which areas of Spain do you cover?",
        answer:
          "You can request transfers across mainland Spain and the Balearic and Canary Islands, including airports, cities, train stations and cruise ports. We confirm availability for each trip with your quote.",
      },
      {
        question: "How is the price of my transfer determined?",
        answer:
          "Pricing is based on your pickup and drop-off points, vehicle type, and passenger count, and is confirmed before you book. Extra charges apply only for added stops, waiting beyond the included allowance, or changes you request after booking.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "If you include your flight number when booking, we monitor the flight and adjust the pickup to your actual landing time. Waiting time counts from that landing and includes 60 minutes free for international arrivals and 45 minutes for domestic ones.",
      },
      {
        question: "Can I book a transfer for someone else?",
        answer:
          "Yes, you can book on behalf of a family member, colleague, or guest. Just add their contact details and flight information when you request your quote.",
      },
      {
        question: "How do I pay?",
        answer:
          "Payment options are confirmed with your quote and set out in our terms and conditions.",
      },
      {
        question: "Do you offer corporate or long-term accounts?",
        answer:
          "Yes. Businesses can request invoiced billing for regular travel. Tell us what you need when you get in touch.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "Send us an email or a WhatsApp message. Contact details are in the footer of every page.",
      },
    ],
  },
  cta: {
    title: "Book Your Transfer Today",
    description: "Need a transfer in Spain? Send your trip details and we'll reply with a fixed-price quote.",
    button: "Request Quote",
  },
  links: {
    home: "/",
    airportTransfers: "/airport-transfer/",
    cityTransfers: "/city-transfer/",
    chauffeurService: "/luxury-chauffeur/",
    longDistanceTransfers: "/long-distance-transfer/",
    borderTransfers: "/border-transfer/",
    popularAirports: "/airports/",
    popularCities: "/cities/",
    blog: "/blog/",
    contact: "/get-a-quote/",
  },
};
