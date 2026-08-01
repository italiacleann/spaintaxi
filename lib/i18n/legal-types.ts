export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPageDictionary {
  meta: {
    title: string;
    description: string;
  };
  breadcrumb: {
    home: string;
    current: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    lastUpdatedLabel: string;
    lastUpdatedDate: string;
  };
  tocTitle: string;
  sections: LegalSection[];
  cta: {
    title: string;
    description: string;
    button: string;
    href: string;
  };
}
