export type TrustIconKey = "clock" | "badge-euro" | "plane" | "user-check";

export type ServiceIconKey =
  | "plane"
  | "map-pinned"
  | "timer"
  | "briefcase"
  | "users"
  | "ship";

export type WhyIconKey =
  | "shield-check"
  | "badge-euro"
  | "plane"
  | "clock"
  | "car-front"
  | "headset";

export type StepIconKey = "calendar-check" | "mail-check" | "handshake" | "car-front";

export interface NavItem {
  label: string;
  href: string;
}

export interface AirportItem {
  name: string;
  code: string;
  city: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface DestinationItem {
  name: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface ServiceItem {
  icon: ServiceIconKey;
  title: string;
  description: string;
  href: string;
}

export interface WhyItem {
  icon: WhyIconKey;
  title: string;
  description: string;
}

export interface StepItem {
  step: string;
  icon: StepIconKey;
  title: string;
  description: string;
}

export interface FleetItem {
  name: string;
  passengers: string;
  luggage: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Dictionary {
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  header: {
    getQuote: string;
    openMenu: string;
    menuTitle: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ratingSuffix: string;
    transfersCompleted: string;
    formTitle: string;
    formSubtitle: string;
    formNote: string;
  };
  quoteForm: {
    pickupLabel: string;
    pickupPlaceholder: string;
    dropoffLabel: string;
    dropoffPlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    passengersLabel: string;
    passengerOptions: { value: string; label: string }[];
    submit: string;
  };
  trustBar: { icon: TrustIconKey; title: string; description: string }[];
  airportsSection: {
    eyebrow: string;
    title: string;
    description: string;
    transfersTo: string;
  };
  airports: AirportItem[];
  destinationsSection: {
    eyebrow: string;
    title: string;
    description: string;
    viewTransfers: string;
  };
  destinations: DestinationItem[];
  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
    learnMore: string;
  };
  services: ServiceItem[];
  whyChooseSection: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
  };
  whyChooseUs: WhyItem[];
  processSection: {
    eyebrow: string;
    title: string;
  };
  bookingSteps: StepItem[];
  fleetSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  fleet: FleetItem[];
  testimonialsSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  testimonials: TestimonialItem[];
  faqSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  faqs: FaqItem[];
  ctaSection: {
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    servicesTitle: string;
    airportsTitle: string;
    citiesTitle: string;
    companyTitle: string;
    quickLinks: NavItem[];
    company: NavItem[];
    legal: NavItem[];
    copyright: string;
  };
}
