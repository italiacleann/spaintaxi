export type AboutWhyIconKey =
  | "user-check"
  | "shield-check"
  | "plane"
  | "handshake"
  | "badge-euro"
  | "car-front"
  | "map-pin"
  | "headset";

export type AboutServiceIconKey =
  | "plane"
  | "building"
  | "map-pinned"
  | "ship"
  | "briefcase"
  | "car-front"
  | "timer"
  | "route"
  | "flag"
  | "users";

export type AboutTrustIconKey =
  | "star"
  | "smile"
  | "lock"
  | "badge-euro"
  | "headset";

export type AboutStepIconKey = "calendar-check" | "mail-check" | "handshake" | "car-front";

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutTimelineItem {
  label: string;
  title: string;
  description: string;
}

export interface AboutWhyItem {
  icon: AboutWhyIconKey;
  title: string;
  description: string;
}

export interface AboutServiceItem {
  icon: AboutServiceIconKey;
  title: string;
  description: string;
  href: string;
}

export interface AboutFleetVehicle {
  name: string;
  category: string;
  passengers: string;
  luggage: string;
  wifi: boolean;
  ac: boolean;
  image: string;
  imageAlt: string;
}

export interface AboutStepItem {
  step: string;
  icon: AboutStepIconKey;
  title: string;
  description: string;
}

export interface AboutTrustItem {
  icon: AboutTrustIconKey;
  title: string;
  description: string;
}

export interface AboutFaqItem {
  question: string;
  answer: string;
}

export interface AboutDictionary {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  breadcrumb: {
    home: string;
    current: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaQuote: string;
    ctaContact: string;
    image: string;
    imageAlt: string;
  };
  story: {
    whoWeAreTitle: string;
    whoWeAreParagraphs: string[];
    missionTitle: string;
    missionText: string;
    visionText: string;
    timeline: AboutTimelineItem[];
    image: string;
    imageAlt: string;
  };
  stats: AboutStat[];
  whyChoose: {
    title: string;
    description: string;
    items: AboutWhyItem[];
  };
  services: {
    title: string;
    description: string;
    items: AboutServiceItem[];
  };
  coverage: {
    title: string;
    description: string;
    cities: string[];
    footnote: string;
    airportsLink: { label: string; href: string };
    citiesLink: { label: string; href: string };
  };
  drivers: {
    title: string;
    description: string;
    highlights: string[];
    image: string;
    imageAlt: string;
  };
  fleet: {
    title: string;
    description: string;
    vehicles: AboutFleetVehicle[];
    passengersLabel: string;
    luggageLabel: string;
    wifiLabel: string;
    acLabel: string;
  };
  process: {
    title: string;
    steps: AboutStepItem[];
  };
  trust: {
    title: string;
    description: string;
    items: AboutTrustItem[];
  };
  faq: {
    title: string;
    description: string;
    items: AboutFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  links: {
    home: string;
    airportTransfers: string;
    cityTransfers: string;
    chauffeurService: string;
    longDistanceTransfers: string;
    borderTransfers: string;
    popularAirports: string;
    popularCities: string;
    blog: string;
    contact: string;
  };
}
