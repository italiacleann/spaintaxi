export interface CityHubDictionary {
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
    ctaPrimary: string;
    ctaSecondaryLabel: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    paragraphs: string[];
  };
  directory: {
    searchLabel: string;
    searchPlaceholder: string;
    featuredTitle: string;
    allCitiesTitle: string;
    resultsCountTemplate: string;
    emptyMessage: string;
    cardCta: string;
    mainAirportLabel: string;
  };
  popularRoutes: {
    title: string;
    description: string;
  };
  whyChoose: {
    title: string;
    items: { icon: "badge-euro" | "shield-check" | "clock" | "plane" | "car-front" | "headset"; title: string; description: string }[];
  };
  map: {
    title: string;
    description: string;
  };
  faq: {
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}
