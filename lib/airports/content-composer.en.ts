import type { AirportRecord } from "@/lib/airports/types";
import type { AirportPageDictionary } from "@/lib/airports/airport-page-types";
import { airports, getAirportPath } from "@/lib/airports/data";
import { pick, buildLengthAwareTitle, buildLengthAwareText } from "@/lib/airports/hash";
import { pickHeroImage, pickOverviewImage } from "@/lib/airports/images";

function titleLabel(shortName: string): string {
  return shortName.replace(/ Airport$/, "");
}

const titleActions = [
  "Book Online",
  "Reserve Today",
  "Get a Free Quote",
  "Travel in Comfort",
  "Fixed Prices",
  "Available 24/7",
  "Instant Booking",
  "Professional Drivers",
  "Contact Us Today",
  "Reserve Your Ride",
];

const titleTemplates: ((label: string, action: string) => string)[] = [
  (label, action) => `Private Airport Transfer from ${label} – ${action}`,
  (label, action) => `${label} Airport Taxi & Chauffeur – ${action}`,
  (label, action) => `Book a Private Taxi from ${label} Airport – ${action}`,
];

const descriptionTemplates: ((label: string) => string)[] = [
  (label) =>
    `Book a private, fixed-price transfer from ${label} Airport. Professional drivers, flight monitoring, and door-to-door service across Spain, 24/7.`,
  (label) =>
    `Private taxi and chauffeur service from ${label} Airport. Professional drivers, flight monitoring, and fixed prices for a comfortable, door-to-door transfer.`,
  (label) =>
    `Reliable, fixed-price airport transfers from ${label} Airport. Professional drivers, flight monitoring, and door-to-door service around the clock.`,
  (label) =>
    `Skip the taxi queue at ${label} Airport. Private, door-to-door transfers with fixed prices, flight monitoring, and professional drivers, available 24/7.`,
  (label) =>
    `Premium private transfers from ${label} Airport. Professional chauffeurs, flight monitoring, fixed prices, and door-to-door service, day or night, 24/7.`,
];

const heroDescriptionTemplates: ((a: string, city: string) => string)[] = [
  (a, city) =>
    `Private, fixed-price transfers between ${a} and ${city} or anywhere in the surrounding area. Flight monitoring included, and a driver waiting for you at arrivals.`,
  (a, city) =>
    `Skip the taxi queue at ${a}. Book a private transfer to ${city} or your final destination, with a professional driver tracking your flight and waiting at arrivals.`,
  (a, city) =>
    `A private car and professional driver waiting at ${a}, ready to take you to ${city} or wherever your trip continues, at a fixed price agreed in advance.`,
  (a, city) =>
    `Land at ${a} and go straight to ${city} in comfort. Fixed pricing, flight monitoring, and a driver holding a sign with your name at arrivals.`,
];

const ctaPrimaryOptions = ["Get a Free Quote", "Reserve Your Ride", "Book Online", "Instant Booking"];
const ctaSecondaryOptions = ["Contact Us Today", "Travel in Comfort", "Fixed Prices", "Professional Drivers"];

const overviewTitleTemplates: ((a: string) => string)[] = [
  (a) => `Reliable Transfers from ${a}`,
  (a) => `Your Private Transfer from ${a}`,
  () => "Airport Transfers Made Simple",
  () => "Private Transfers, Door to Door",
];

const overviewParagraphSlot1: ((a: string, region: string, dest: string) => string)[] = [
  (a, region, dest) =>
    `${a} connects travelers to ${region} and beyond, and getting from the terminal to your destination shouldn't be the hardest part of the trip. Every transfer is booked in advance at a fixed price, with a professional driver tracking your flight and waiting at arrivals.`,
  (a, region, dest) =>
    `Landing at ${a} means your journey is almost over, not just beginning. We meet you at arrivals with a private vehicle booked in advance, a fixed price agreed before you fly, and a driver who already knows the way to ${dest}.`,
  (a, region, dest) =>
    `Whether you're heading into town or continuing on to explore ${region}, a private transfer from ${a} means no taxi queues, no shared rides, and no surprises on the fare.`,
];

const overviewParagraphSlot2: ((a: string, city: string, region: string, dest: string) => string)[] = [
  (a, city, region, dest) =>
    `From ${dest} to the wider ${region} area, our drivers know the roads and the traffic patterns, and adjust your pickup automatically if your flight runs late.`,
  (a, city, region, dest) =>
    `Our network covers ${city} and the surrounding towns, with vehicles sized for solo travelers, families, and groups arriving together at ${a}.`,
  (a, city, region, dest) =>
    `Whether you're staying near ${city} or heading further into ${region}, we match you with the right vehicle and a driver who tracks your flight before you land.`,
];

type WhyVariant = { title: string; description: string };

const whySlot1: ((a: string) => WhyVariant)[] = [
  (a) => ({ title: "Flight Delay Protection", description: `We track every flight landing at ${a} and adjust your pickup automatically, at no extra cost.` }),
  (a) => ({ title: "Real-Time Flight Tracking", description: `Your driver knows your exact landing time at ${a}, even if your flight is delayed.` }),
  (a) => ({ title: "No-Wait Flight Monitoring", description: `Land at ${a} any time and your driver will already be adjusting to meet you.` }),
];

const whySlot2: ((a: string) => WhyVariant)[] = [
  (a) => ({ title: "Meet & Greet at Arrivals", description: `Your driver waits at ${a} with a name sign, ready to help with your bags.` }),
  (a) => ({ title: "Personal Airport Greeting", description: `No searching for a driver at ${a}, we meet you right at arrivals.` }),
  (a) => ({ title: "Arrivals Hall Pickup", description: `Your driver is waiting inside the ${a} arrivals hall, every time.` }),
];

const whySlot3: ((a: string) => WhyVariant)[] = [
  (a) => ({ title: "Fixed Airport Pricing", description: `One price for your whole route from ${a}, agreed before you travel.` }),
  (a) => ({ title: "No Meters, No Surprises", description: `Your fare from ${a} is set in advance and never changes on arrival.` }),
  (a) => ({ title: "Transparent Pricing", description: `See your exact fare from ${a} before you book, with nothing added later.` }),
];

const whySlot4: (() => WhyVariant)[] = [
  () => ({ title: "Child Seats Available", description: "Request a child or booster seat for your transfer at no additional charge." }),
  () => ({ title: "Licensed, Vetted Drivers", description: "Every driver in our network is professionally licensed and background-checked." }),
  () => ({ title: "Families Welcome", description: "Child seats and extra luggage space are available on request, at no extra cost." }),
];

const ctaTitleTemplates: ((a: string) => string)[] = [
  (a) => `Book Your ${a} Transfer`,
  (a) => `Reserve Your ${a} Transfer`,
  (a) => `Get Your ${a} Transfer Quote`,
];

const ctaDescriptionTemplates: ((a: string) => string)[] = [
  (a) => `Landing at ${a}? Get your fixed-price transfer booked in under a minute.`,
  (a) => `Flying into ${a}? Confirm your private transfer before you even board.`,
  (a) => `Traveling through ${a}? Lock in your fixed price now.`,
];

function buildFaq(airport: AirportRecord) {
  const a = airport.shortNameEn;
  const dest = airport.destinations[0]?.nameEn ?? airport.cityEn;
  const driveTime = airport.destinations[0]?.driveTime ?? "a short drive";
  const nearby = airport.nearbyAirports[0];

  const items = [
    {
      question: `How do I book a transfer from ${a}?`,
      answer: `Enter ${a}, your destination, flight details, and passenger count in our quote form. You'll receive a fixed price and instant confirmation by email.`,
    },
    {
      question: "What happens if my flight is delayed?",
      answer: `We monitor every flight landing at ${a} in real time, so your driver automatically adjusts to your actual landing time at no extra cost.`,
    },
    {
      question: "Where will my driver meet me?",
      answer: `Your driver waits in the arrivals hall at ${a} holding a sign with your name, ready to help with luggage as soon as you land.`,
    },
    {
      question: `How long does it take to get from ${a} to ${dest}?`,
      answer: `The journey from ${a} to ${dest} typically takes around ${driveTime}, depending on traffic and time of day.`,
    },
    {
      question: "How much luggage can I bring?",
      answer: "Each vehicle category has a listed luggage allowance. Let us know if you have extra bags or oversized items when you book.",
    },
    {
      question: "Can I book a one-way transfer?",
      answer: "Yes, you can book a one-way or round-trip transfer from your airport, whichever suits your itinerary.",
    },
    {
      question: "Is the price per person or per vehicle?",
      answer: "Our prices are per vehicle, not per person, so groups traveling together often save compared to individual taxis.",
    },
    {
      question: "Can I request a child seat?",
      answer: "Yes, child and booster seats are available on request at no additional charge. Just add the details when you book.",
    },
  ];

  if (nearby) {
    items.push({
      question: `Do you also cover transfers from nearby airports?`,
      answer: `Yes, we also serve nearby airports, including a transfer network covering routes roughly ${nearby.driveTime} from ${a}.`,
    });
  }

  return items.slice(0, 8);
}

export function composeAirportEn(airport: AirportRecord): AirportPageDictionary {
  const a = airport.shortNameEn;
  const city = airport.cityEn;
  const region = airport.regionEn;
  const dest = airport.destinations[0]?.nameEn ?? city;
  const seed = airport.iata;

  const label = titleLabel(a);
  const title = buildLengthAwareTitle(titleTemplates, titleActions, label, seed, 1);
  const description = buildLengthAwareText(descriptionTemplates, label, seed, 2, 145, 160);
  const hero = pickHeroImage(airport.imageSeed);
  const overviewImg = pickOverviewImage(airport.imageSeed);

  const relatedItems = [
    { label: "Airport Transfers", href: "/airport-transfers/" },
    { label: "City-to-City Transfers", href: "/city-to-city-transfers/" },
    { label: "Corporate Travel", href: "/corporate-travel/" },
    airport.hasCruisePort
      ? { label: "Cruise Port Transfers", href: "/cruise-port-transfers/" }
      : { label: "Hourly Chauffeur", href: "/hourly-chauffeur/" },
  ];

  for (const ref of airport.nearbyAirports.slice(0, 2)) {
    const nearbyAirport = airports.find((item) => item.iata === ref.iata);
    if (nearbyAirport) {
      relatedItems.push({
        label: `${nearbyAirport.shortNameEn} Transfers`,
        href: getAirportPath("en", nearbyAirport),
      });
    }
  }

  return {
    meta: {
      title,
      description,
      ogAlt: `Private transfer service at ${a}`,
    },
    breadcrumb: {
      current: `${a} Transfers`,
    },
    hero: {
      badge: `${a} Transfers`,
      title: `${a} Transfers`,
      description: pick(heroDescriptionTemplates, seed, 3)(a, city),
      ctaPrimary: pick(ctaPrimaryOptions, seed, 4),
      ctaSecondaryLabel: pick(ctaSecondaryOptions, seed, 5),
      image: hero.src,
      imageAlt: hero.altEn,
    },
    overview: {
      title: pick(overviewTitleTemplates, seed, 6)(a),
      paragraphs: [
        pick(overviewParagraphSlot1, seed, 7)(a, region, dest),
        pick(overviewParagraphSlot2, seed, 8)(a, city, region, dest),
      ],
      image: overviewImg.src,
      imageAlt: overviewImg.altEn,
    },
    whyChoose: {
      title: `Why Choose Our ${a} Transfer Service`,
      items: [
        { icon: "plane", ...pick(whySlot1, seed, 9)(a) },
        { icon: "handshake", ...pick(whySlot2, seed, 10)(a) },
        { icon: "badge-euro", ...pick(whySlot3, seed, 11)(a) },
        { icon: "user-check", ...pick(whySlot4, seed, 12)() },
      ],
    },
    routes: {
      title: `Popular Destinations from ${a}`,
      description: `Fixed-price private transfers to the destinations travelers request most.`,
      items: [...airport.destinations, ...airport.nearbyCities].slice(0, 6).map((place) => ({
        title: `${a} → ${place.nameEn}`,
        description: `~${place.driveTime} • private, door-to-door transfer`,
      })),
    },
    fleet: {
      vehicleKeys: ["business-sedan", "premium-suv", "mercedes-vclass"],
    },
    faq: {
      items: buildFaq(airport),
    },
    cta: {
      title: pick(ctaTitleTemplates, seed, 13)(a),
      description: pick(ctaDescriptionTemplates, seed, 14)(a),
      button: "Request Quote",
    },
    nearbyCitiesSection:
      airport.nearbyCities.length > 0
        ? {
            title: `Areas Near ${a}`,
            items: airport.nearbyCities.map((place) => ({
              title: place.nameEn,
              description: `~${place.driveTime} from ${a}`,
            })),
          }
        : null,
    relatedServices: {
      title: "Explore More Services",
      items: relatedItems,
    },
  };
}
