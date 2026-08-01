import type { CityRecord } from "@/lib/cities/types";
import type { CityPageDictionary } from "@/lib/cities/city-page-types";
import { cities, getCityPath } from "@/lib/cities/data";
import { airports, getAirportPath } from "@/lib/airports/data";
import { pick, buildLengthAwareTitle, buildLengthAwareText } from "@/lib/airports/hash";
import { pickHeroImage, pickOverviewImage } from "@/lib/cities/images";

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
  (label, action) => `Private Transfers in ${label} – ${action}`,
  (label, action) => `${label} Taxi & Chauffeur Service – ${action}`,
  (label, action) => `Book a Private Car in ${label} – ${action}`,
];

const descriptionTemplates: ((label: string) => string)[] = [
  (label) =>
    `Book a private taxi, chauffeur, and airport transfer service in ${label}. Professional drivers, fixed prices, flight monitoring, and 24/7 availability.`,
  (label) =>
    `Private transfers and professional chauffeur service in ${label}. Fixed prices, licensed drivers, flight monitoring, and door-to-door comfort, 24/7.`,
  (label) =>
    `Reliable private transfers and taxi service in ${label}. Professional drivers, fixed prices, flight monitoring, and availability around the clock.`,
  (label) =>
    `Skip the taxi rank in ${label}. Private, door-to-door transfers with fixed prices, professional drivers, and availability 24 hours a day, every day.`,
  (label) =>
    `Premium private transfers and chauffeur service in ${label}. Fixed prices, professional drivers, flight monitoring, and door-to-door comfort, day or night.`,
];

const heroDescriptionTemplates: ((city: string, region: string) => string)[] = [
  (city, region) =>
    `Private, fixed-price taxi and chauffeur service in ${city} and across ${region}. Professional drivers, door-to-door comfort, and 24/7 availability.`,
  (city, region) =>
    `Book a private car in ${city} for airport transfers, day trips across ${region}, or point-to-point journeys, with a fixed price agreed in advance.`,
  (city, region) =>
    `From airport pickups to day trips around ${region}, our professional drivers in ${city} are ready whenever your trip begins.`,
  (city, region) =>
    `Private transfers in ${city}, with fixed pricing and professional drivers ready for airport runs, city journeys, and trips across ${region}.`,
];

const ctaPrimaryOptions = ["Get a Free Quote", "Reserve Your Ride", "Book Online", "Instant Booking"];
const ctaSecondaryOptions = ["Contact Us Today", "Travel in Comfort", "Fixed Prices", "Professional Drivers"];

const overviewTitleTemplates: ((city: string) => string)[] = [
  (city) => `Private Transfers in ${city}`,
  (city) => `Your Private Driver in ${city}`,
  () => "Taxi & Chauffeur Service Made Simple",
  () => "Private Transfers, Door to Door",
];

const overviewParagraphSlot1: ((city: string, region: string, airport: string) => string)[] = [
  (city, region, airport) =>
    `Whether you're arriving through ${airport} or already exploring ${region}, getting around ${city} shouldn't be the hardest part of your trip. Every transfer is booked in advance at a fixed price, with a professional driver ready when you are.`,
  (city, region, airport) =>
    `${city} is one of the most requested destinations in our network, connecting travelers to ${region} and beyond. We pair you with a private vehicle and driver, whether you're heading in from ${airport} or moving on to your next stop.`,
  (city, region, airport) =>
    `From business trips to family holidays, a private transfer in ${city} means no taxi queues, no shared rides, and no surprises on the fare, with drivers who know ${region} well.`,
];

const overviewParagraphSlot2: ((city: string, region: string, destination: string) => string)[] = [
  (city, region, destination) =>
    `Beyond ${city} itself, our drivers regularly take travelers on day trips to ${destination} and other highlights across ${region}, with the same fixed-price comfort.`,
  (city, region, destination) =>
    `Our network in and around ${city} covers hotels, business districts, and popular day-trip routes like ${destination}, with vehicles sized for solo travelers, couples, and groups.`,
  (city, region, destination) =>
    `Whether you're staying in central ${city} or planning a trip out to ${destination}, we match you with the right vehicle and a driver who knows the roads.`,
];

type WhyVariant = { title: string; description: string };

const whySlot1: ((city: string) => WhyVariant)[] = [
  (city) => ({ title: "Fixed, Transparent Pricing", description: `Your fare in ${city} is agreed before you travel, with no meters and no surprises on arrival.` }),
  (city) => ({ title: "No Meters, No Surprises", description: `See your exact price for ${city} before you book, with nothing added later.` }),
  (city) => ({ title: "Fixed Prices, Every Time", description: `One agreed price for your whole journey in ${city}, confirmed at booking.` }),
];

const whySlot2: ((city: string) => WhyVariant)[] = [
  (city) => ({ title: "Licensed, Professional Drivers", description: `Every driver serving ${city} is professionally licensed and background-checked.` }),
  (city) => ({ title: "Experienced Local Drivers", description: `Our drivers in ${city} know the roads, the traffic patterns, and the shortcuts.` }),
  (city) => ({ title: "Vetted, Insured Drivers", description: `All drivers operating in ${city} are fully licensed, insured, and vetted.` }),
];

const whySlot3: (() => WhyVariant)[] = [
  () => ({ title: "Available 24/7", description: "Early flight or late-night arrival, our drivers are ready around the clock." }),
  () => ({ title: "Round-the-Clock Service", description: "Book a transfer any time, day or night, with no extra call-out fee." }),
  () => ({ title: "Always On Call", description: "Our drivers operate 24 hours a day, 7 days a week, across Spain." }),
];

const whySlot4: (() => WhyVariant)[] = [
  () => ({ title: "Door-to-Door Comfort", description: "Every transfer is door-to-door, with help loading and unloading your luggage." }),
  () => ({ title: "Child Seats Available", description: "Request a child or booster seat for your transfer at no additional charge." }),
  () => ({ title: "Families & Groups Welcome", description: "Larger vehicles and extra luggage space are available on request." }),
];

const ctaTitleTemplates: ((city: string) => string)[] = [
  (city) => `Book Your ${city} Transfer`,
  (city) => `Reserve Your ${city} Transfer`,
  (city) => `Get Your ${city} Transfer Quote`,
];

const ctaDescriptionTemplates: ((city: string) => string)[] = [
  (city) => `Traveling to ${city}? Get your fixed-price transfer booked in under a minute.`,
  (city) => `Heading to ${city}? Confirm your private transfer before you even set off.`,
  (city) => `Exploring ${city}? Lock in your fixed price now.`,
];

const airportLinkTitleTemplates: ((airport: string) => string)[] = [
  (airport) => `Flying into ${airport}?`,
  (airport) => `Landing at ${airport}?`,
  (airport) => `Arriving via ${airport}?`,
];

function buildFaq(city: CityRecord, airportName: string) {
  const name = city.nameEn;
  const dest = city.destinations[0]?.nameEn ?? city.regionEn;
  const driveTime = city.destinations[0]?.driveTime ?? "a short drive";

  return [
    {
      question: `How do I book a private transfer in ${name}?`,
      answer: `Enter ${name}, your destination, and passenger count in our quote form. You'll receive a fixed price and instant confirmation by email.`,
    },
    {
      question: `Do you offer airport transfers to and from ${name}?`,
      answer: `Yes, we run regular private transfers between ${airportName} and ${name}, with flight monitoring included at no extra cost.`,
    },
    {
      question: `Can I book a day trip from ${name} to ${dest}?`,
      answer: `Yes, day trips to ${dest} typically take around ${driveTime} each way, and can be booked as a one-way or return journey.`,
    },
    {
      question: "Is the price per person or per vehicle?",
      answer: "Our prices are per vehicle, not per person, so groups traveling together often save compared to individual taxis.",
    },
    {
      question: "Can I request a child seat?",
      answer: "Yes, child and booster seats are available on request at no additional charge. Just add the details when you book.",
    },
    {
      question: `Do you serve hotels in ${name}?`,
      answer: `Yes, our drivers regularly pick up and drop off at hotels throughout ${name} and the surrounding area.`,
    },
    {
      question: "Can I book a one-way transfer?",
      answer: "Yes, you can book a one-way or round-trip transfer, whichever suits your itinerary.",
    },
    {
      question: "How much luggage can I bring?",
      answer: "Each vehicle category has a listed luggage allowance. Let us know if you have extra bags or oversized items when you book.",
    },
  ];
}

export function composeCityEn(city: CityRecord): CityPageDictionary {
  const name = city.nameEn;
  const region = city.regionEn;
  const dest = city.destinations[0]?.nameEn ?? region;
  const seed = `city-${city.slugEn}`;
  const airport = airports.find((item) => item.iata === city.mainAirportIata);
  const airportName = airport?.shortNameEn ?? "the nearest airport";

  const title = buildLengthAwareTitle(titleTemplates, titleActions, name, seed, 1);
  const description = buildLengthAwareText(descriptionTemplates, name, seed, 2, 145, 160);
  const hero = pickHeroImage(city.imageSeed);
  const overviewImg = pickOverviewImage(city.imageSeed);

  const relatedItems = [
    { label: "Airport Transfers", href: "/airport-transfers/" },
    { label: "City-to-City Transfers", href: "/city-to-city-transfers/" },
    { label: "Corporate Travel", href: "/corporate-travel/" },
    city.hasCruisePort
      ? { label: "Cruise Port Transfers", href: "/cruise-port-transfers/" }
      : { label: "Hourly Chauffeur", href: "/hourly-chauffeur/" },
  ];

  if (airport) {
    relatedItems.push({ label: `${airport.shortNameEn} Transfers`, href: getAirportPath("en", airport) });
  }

  for (const otherCity of cities) {
    if (otherCity.slugEn === city.slugEn) continue;
    if (otherCity.regionEn === city.regionEn && relatedItems.length < 7) {
      relatedItems.push({ label: `${otherCity.nameEn} Transfers`, href: getCityPath("en", otherCity) });
    }
  }

  return {
    meta: {
      title,
      description,
      ogAlt: `Private transfer service in ${name}`,
    },
    breadcrumb: {
      current: `${name} Transfers`,
    },
    hero: {
      badge: `${name} Transfers`,
      title: `Private Transfers in ${name}`,
      description: pick(heroDescriptionTemplates, seed, 3)(name, region),
      ctaPrimary: pick(ctaPrimaryOptions, seed, 4),
      ctaSecondaryLabel: pick(ctaSecondaryOptions, seed, 5),
      image: hero.src,
      imageAlt: hero.altEn,
    },
    overview: {
      title: pick(overviewTitleTemplates, seed, 6)(name),
      paragraphs: [
        pick(overviewParagraphSlot1, seed, 7)(name, region, airportName),
        pick(overviewParagraphSlot2, seed, 8)(name, region, dest),
      ],
      image: overviewImg.src,
      imageAlt: overviewImg.altEn,
    },
    whyChoose: {
      title: `Why Choose Our ${name} Transfer Service`,
      items: [
        { icon: "badge-euro", ...pick(whySlot1, seed, 9)(name) },
        { icon: "shield-check", ...pick(whySlot2, seed, 10)(name) },
        { icon: "clock", ...pick(whySlot3, seed, 11)() },
        { icon: "car-front", ...pick(whySlot4, seed, 12)() },
      ],
    },
    routes: {
      title: `Popular Day Trips from ${name}`,
      description: "Fixed-price private transfers to the destinations travelers request most.",
      items: city.destinations.map((place) => ({
        title: `${name} → ${place.nameEn}`,
        description: `~${place.driveTime} • private, door-to-door transfer`,
      })),
    },
    fleet: {
      vehicleKeys: ["business-sedan", "premium-suv", "mercedes-vclass"],
    },
    faq: {
      items: buildFaq(city, airportName),
    },
    cta: {
      title: pick(ctaTitleTemplates, seed, 13)(name),
      description: pick(ctaDescriptionTemplates, seed, 14)(name),
      button: "Request Quote",
    },
    airportLink: {
      title: pick(airportLinkTitleTemplates, seed, 15)(airportName),
      description: airport
        ? `Book a private transfer between ${airport.shortNameEn} and ${name}. ~${city.airportDriveTime} drive, with flight monitoring included.`
        : `Book a private transfer between your arrival airport and ${name}, with flight monitoring included.`,
      linkLabel: `View ${airportName} Transfers`,
      href: airport ? getAirportPath("en", airport) : "/airports/",
    },
    relatedServices: {
      title: "Explore More Services",
      items: relatedItems,
    },
  };
}
