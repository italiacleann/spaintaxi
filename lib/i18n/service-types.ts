export type ServiceIconKey =
  | "badge-euro"
  | "user-check"
  | "plane"
  | "handshake"
  | "car-front"
  | "headset"
  | "clock"
  | "map-pin"
  | "shield-check"
  | "star"
  | "briefcase"
  | "users"
  | "timer"
  | "ship"
  | "route"
  | "flag"
  | "building";

export interface ServiceBenefitItem {
  icon: ServiceIconKey;
  title: string;
  description: string;
}

export interface ServiceWhyItem {
  icon: ServiceIconKey;
  title: string;
  description: string;
}

export interface ServiceRouteItem {
  title: string;
  description: string;
}

export interface ServiceFleetVehicle {
  name: string;
  category: string;
  passengers: string;
  luggage: string;
  wifi: boolean;
  ac: boolean;
  image: string;
  imageAlt: string;
}

export type ServiceStepIconKey = "calendar-check" | "mail-check" | "handshake" | "car-front";

export interface ServiceProcessStep {
  step: string;
  icon: ServiceStepIconKey;
  title: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServicePageDictionary {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  breadcrumb: {
    current: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondaryLabel: string;
    image: string;
    imageAlt: string;
  };
  overview: {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  whyChoose: {
    title: string;
    items: ServiceWhyItem[];
  };
  routes: {
    title: string;
    description: string;
    items: ServiceRouteItem[];
  };
  fleet: {
    vehicleKeys: string[];
  };
  faq: {
    items: ServiceFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}
