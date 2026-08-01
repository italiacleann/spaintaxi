export interface AirportHubDictionary {
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
  };
  intro: {
    title: string;
    paragraphs: string[];
  };
  directory: {
    searchLabel: string;
    searchPlaceholder: string;
    filterLabel: string;
    filters: {
      all: string;
      mainland: string;
      balearic: string;
      canary: string;
    };
    resultsCountTemplate: string;
    emptyMessage: string;
    cardCta: string;
    heliportBadge: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}
