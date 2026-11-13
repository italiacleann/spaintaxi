import type { Dictionary } from "@/lib/i18n/types";

export const en: Dictionary = {
  meta: {
    title: "Private Car Transfer, Taxi & Chauffeur Service in Spain | Book Now",
    titleTemplate: "%s | Spain Private Transfers",
    description:
      "Book private car transfers, airport taxis, and chauffeur services across Spain. Fixed prices, professional drivers, 24/7 booking.",
    keywords: [
      "private transfers Spain",
      "Spain airport taxi",
      "private airport transfer",
      "Barcelona airport transfer",
      "Madrid airport taxi",
      "Malaga private transfer",
    ],
    ogAlt: "Spain Private Transfers - premium private transfer vehicle",
  },
  header: {
    getQuote: "Get a Quote",
    openMenu: "Open menu",
    menuTitle: "Menu",
  },
  nav: [
    { label: "Airports", href: "/airports/" },
    { label: "Cities", href: "/cities/" },
    { label: "Services", href: "/#services" },
    { label: "Blog", href: "/blog/" },
    { label: "About Us", href: "/about-us/" },
  ],
  hero: {
    eyebrow: "Private Transfers, Fixed Prices",
    title: "Private Transfers Anywhere in Spain",
    description:
      "Book a fixed-price, chauffeur-driven transfer between any Spanish airport, city, or coastal resort. Request a quote any time; the price is fixed when you book.",
    formTitle: "Request Your Quote",
    formSubtitle: "We reply by email with a fixed price.",
    formNote: "No payment required now. Free cancellation up to 24 hours before pickup.",
  },
  quoteForm: {
    pickupLabel: "Pickup location",
    pickupPlaceholder: "Airport, hotel, or address",
    dropoffLabel: "Drop-off location",
    dropoffPlaceholder: "Airport, hotel, or address",
    dateLabel: "Date",
    timeLabel: "Time",
    passengersLabel: "Passengers",
    passengerOptions: [
      { value: "1-2", label: "1-2 passengers" },
      { value: "3-4", label: "3-4 passengers" },
      { value: "5-6", label: "5-6 passengers" },
      { value: "7-8", label: "7-8 passengers" },
    ],
    submit: "Continue Booking",
  },
  trustBar: [
    {
      icon: "clock",
      title: "Requests Any Time",
      description: "Send a request for any time of day; availability is confirmed with your quote.",
    },
    {
      icon: "badge-euro",
      title: "Fixed Prices",
      description: "The price you're quoted is the price you pay. No surprises.",
    },
    {
      icon: "plane",
      title: "Flight Monitoring",
      description: "We track your flight and adjust for delays automatically.",
    },
    {
      icon: "user-check",
      title: "Professional Drivers",
      description: "Transfers are carried out by drivers from local transport providers.",
    },
  ],
  airportsSection: {
    eyebrow: "Airport Transfers",
    title: "Private Transfers From Every Major Spanish Airport",
    description:
      "Landing anywhere in Spain? We're already there. Choose your airport for fixed-price transfers with real-time flight monitoring.",
    transfersTo: "Transfers to",
  },
  airports: [
    {
      name: "Madrid–Barajas Airport",
      code: "MAD",
      city: "Madrid",
      href: "/madrid-airport-transfer/",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=80",
      imageAlt: "Commercial aircraft preparing for departure at an airport gate",
    },
    {
      name: "Barcelona–El Prat Airport",
      code: "BCN",
      city: "Barcelona",
      href: "/barcelona-airport-transfer/",
      image:
        "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=800&h=600&fit=crop&q=80",
      imageAlt: "Airplane wing above the clouds during a flight to Spain",
    },
    {
      name: "Málaga–Costa del Sol Airport",
      code: "AGP",
      city: "Málaga",
      href: "/malaga-airport-transfer/",
      image:
        "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800&h=600&fit=crop&q=80",
      imageAlt: "Aircraft taxiing on the runway at a coastal airport",
    },
    {
      name: "Alicante–Elche Airport",
      code: "ALC",
      city: "Alicante",
      href: "/alicante-airport-transfer/",
      image:
        "https://images.unsplash.com/photo-1528184039930-bd03972bd974?w=800&h=600&fit=crop&q=80",
      imageAlt: "Airport terminal interior with large glass windows",
    },
    {
      name: "Palma de Mallorca Airport",
      code: "PMI",
      city: "Palma de Mallorca",
      href: "/palma-airport-transfer/",
      image:
        "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800&h=600&fit=crop&q=80",
      imageAlt: "View across an airport apron from the terminal building",
    },
    {
      name: "Valencia Airport",
      code: "VLC",
      city: "Valencia",
      href: "/valencia-airport-transfer/",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&q=80",
      imageAlt: "Aircraft descending toward a coastal Spanish airport",
    },
  ],
  destinationsSection: {
    eyebrow: "Popular Destinations",
    title: "Explore Spain, One Private Ride at a Time",
    description:
      "From Gaudí's Barcelona to Andalusia's whitewashed towns, we'll get you there in comfort, wherever your trip begins.",
    viewTransfers: "View transfers",
  },
  destinations: [
    {
      name: "Barcelona",
      description: "Gaudí architecture, beaches, and Mediterranean energy.",
      href: "/barcelona/",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Sagrada Família spires rising above the Barcelona skyline",
    },
    {
      name: "Madrid",
      description: "Spain's capital, from royal palaces to tapas bars.",
      href: "/madrid/",
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Aerial view of Madrid's Gran Vía at sunset",
    },
    {
      name: "Seville",
      description: "Flamenco, orange trees, and Andalusian charm.",
      href: "/seville/",
      image:
        "https://images.unsplash.com/photo-1688404808661-92f72f2ea258?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Plaza de España's fountain and grand building in Seville",
    },
    {
      name: "Valencia",
      description: "Futuristic architecture and golden Mediterranean coast.",
      href: "/valencia/",
      image:
        "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Modern architecture and reflecting pools in Valencia",
    },
    {
      name: "Málaga",
      description: "Costa del Sol gateway with sun, art, and old town streets.",
      href: "/malaga/",
      image:
        "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Sunny Mediterranean coastline near Málaga",
    },
    {
      name: "Ibiza",
      description: "Turquoise coves, sunset views, and island nightlife.",
      href: "/ibiza/",
      image:
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Turquoise waters along the Ibiza coastline",
    },
  ],
  servicesSection: {
    eyebrow: "Our Services",
    title: "One Fleet, Every Kind of Journey",
    description: "Whatever brings you to Spain, there's a transfer built for it.",
    learnMore: "Learn more",
  },
  services: [
    {
      icon: "plane",
      title: "Airport Transfers",
      description:
        "Direct, private rides between any Spanish airport and your destination.",
      href: "/airport-transfers/",
    },
    {
      icon: "map-pinned",
      title: "City-to-City Transfers",
      description: "Comfortable long-distance transfers between Spanish cities.",
      href: "/city-to-city-transfers/",
    },
    {
      icon: "timer",
      title: "Hourly Chauffeur",
      description: "Book a driver by the hour for meetings, tours, or errands.",
      href: "/hourly-chauffeur/",
    },
    {
      icon: "briefcase",
      title: "Corporate Travel",
      description: "Reliable, invoiced transfers for business travelers and teams.",
      href: "/corporate-travel/",
    },
    {
      icon: "users",
      title: "Group & Event Transfers",
      description: "Weddings, conferences, and group outings, handled smoothly.",
      href: "/group-event-transfers/",
    },
    {
      icon: "ship",
      title: "Cruise Port Transfers",
      description: "Timed pickups to get you from port to plane, stress-free.",
      href: "/cruise-port-transfers/",
    },
  ],
  whyChooseSection: {
    eyebrow: "Why Choose Us",
    title: "Travel the Way Spain Deserves",
    description:
      "We built our service around the moments that matter most: landing on time, being met with a smile, and never worrying about the fare.",
    imageAlt: "Professional driver assisting a traveler with luggage",
  },
  whyChooseUs: [
    {
      icon: "badge-euro",
      title: "Fixed Prices, No Surprises",
      description:
        "Your fare is confirmed at booking. No meters, no surge pricing, no hidden fees.",
    },
    {
      icon: "shield-check",
      title: "Professional Drivers",
      description:
        "Transfers are carried out by professional drivers from local transport providers.",
    },
    {
      icon: "plane",
      title: "Flight Monitoring Included",
      description:
        "Give us your flight number and we monitor the flight, so the pickup follows your actual landing time.",
    },
    {
      icon: "clock",
      title: "Early and Late Pickups",
      description: "Early-morning and late-night pickups can be requested; availability is confirmed with your quote.",
    },
    {
      icon: "car-front",
      title: "Vehicle Choice",
      description: "Request the vehicle size your group needs, from a sedan to a minibus.",
    },
    {
      icon: "headset",
      title: "Contact by Email or WhatsApp",
      description: "Questions about a quote or booking can be sent by email or WhatsApp.",
    },
  ],
  processSection: {
    eyebrow: "How It Works",
    title: "Booking Your Transfer Takes Less Than 2 Minutes",
  },
  bookingSteps: [
    {
      step: "01",
      icon: "calendar-check",
      title: "Book Online in Minutes",
      description: "Enter your pickup, drop-off, date, and passenger details.",
    },
    {
      step: "02",
      icon: "mail-check",
      title: "Get Your Fixed Price",
      description: "Receive your fixed price and booking confirmation by email.",
    },
    {
      step: "03",
      icon: "handshake",
      title: "Meet Your Driver",
      description: "Your driver waits at arrivals with a name sign, ready to go.",
    },
    {
      step: "04",
      icon: "car-front",
      title: "Enjoy Your Ride",
      description: "Travel directly to your destination, with no shared stops.",
    },
  ],
  fleetSection: {
    eyebrow: "Vehicle Types",
    title: "A Vehicle for Every Group Size",
    description:
      "Examples of the vehicle types you can request. The exact vehicle depends on the local provider and is confirmed with your quote.",
  },
  fleet: [
    {
      name: "Executive Sedan",
      passengers: "1-3 passengers",
      luggage: "2 suitcases",
      description: "Suits individuals and couples with standard luggage.",
      features: ["Up to 3 passengers", "Standard luggage"],
      image:
        "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=900&h=700&fit=crop&q=80",
      imageAlt: "Black executive sedan parked for a private airport transfer",
    },
    {
      name: "Premium SUV",
      passengers: "1-5 passengers",
      luggage: "4 suitcases",
      description: "More space for families and small groups.",
      features: ["Up to 5 passengers", "Child seats can be requested"],
      image:
        "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?w=900&h=700&fit=crop&q=80",
      imageAlt: "Premium Mercedes-Benz SUV ready for a private transfer",
    },
    {
      name: "Luxury Minivan",
      passengers: "1-8 passengers",
      luggage: "8 suitcases",
      description:
        "Ideal for groups, families, and business teams traveling together.",
      features: ["Up to 8 passengers", "Room for more luggage"],
      image:
        "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=900&h=700&fit=crop&q=80",
      imageAlt: "Spacious luxury minivan for group airport transfers",
    },
  ],
  faqSection: {
    eyebrow: "FAQ",
    title: "Questions, Answered",
    description:
      "Everything you need to know before you book. Can't find your answer? Reach out anytime.",
  },
  faqs: [
    {
      question: "How is the price of my transfer calculated?",
      answer:
        "Your price is fixed at the time of booking based on your exact pickup point, drop-off point, vehicle type, and passenger count. There are no meters and no surprise charges on arrival.",
    },
    {
      question: "What happens if my flight is delayed?",
      answer:
        "We monitor every flight in real time using your flight number, so your driver automatically adjusts to your actual landing time at no extra cost.",
    },
    {
      question: "Can I request a child seat?",
      answer:
        "You can request child and booster seats when you ask for a quote. Availability and any charge are confirmed with your quote.",
    },
    {
      question: "How and when do I pay?",
      answer:
        "You can pay securely online when you book, or in the vehicle by card or cash, depending on the option you select at checkout.",
    },
    {
      question: "Can I cancel or change my booking?",
      answer:
        "Yes, most bookings can be amended or cancelled free of charge up to 24 hours before pickup. Details are included in your confirmation email.",
    },
    {
      question: "Where will my driver meet me at the airport?",
      answer:
        "Your driver will be waiting in the arrivals hall holding a sign with your name, ready to help with luggage as soon as you land.",
    },
    {
      question: "Do you cover destinations outside major cities?",
      answer:
        "Yes, we provide private transfers to towns, resorts, and rural addresses across mainland Spain and the islands, not just major cities.",
    },
  ],
  ctaSection: {
    title: "Ready for a Stress-Free Transfer in Spain?",
    description:
      "Send your trip details in a couple of minutes. No account and no obligation: we reply by email with a fixed price.",
    cta: "Request My Quote",
  },
  footer: {
    tagline:
      "Fixed-price private transfers across Spain's airports, cities and coastal resorts, arranged with local transport providers.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Services",
    airportsTitle: "Airports",
    citiesTitle: "Cities",
    companyTitle: "Company",
    quickLinks: [
      { label: "Get a Quote", href: "/get-a-quote/" },
      { label: "Fleet", href: "#fleet" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "/get-a-quote/" },
    ],
    company: [
      { label: "About Us", href: "/about-us/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/get-a-quote/" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-and-conditions/" },
    ],
    copyright: "Spain Private Transfers. All rights reserved.",
  },
};
