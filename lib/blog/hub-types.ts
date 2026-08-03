export interface BlogHubDictionary {
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
    highlights: string[];
  };
  directory: {
    searchLabel: string;
    searchPlaceholder: string;
    allCategoriesLabel: string;
    featuredLabel: string;
    latestTitle: string;
    resultsCountTemplate: string;
    emptyMessage: string;
    cardCta: string;
    minReadTemplate: string;
    byLabel: string;
  };
  sidebar: {
    popularTitle: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    newsletterSuccess: string;
    newsletterError: string;
  };
  post: {
    tocTitle: string;
    shareTitle: string;
    shareWhatsapp: string;
    shareFacebook: string;
    shareX: string;
    shareLinkedin: string;
    shareCopy: string;
    shareCopied: string;
    authorLabel: string;
    relatedTitle: string;
    faqTitle: string;
    prevLabel: string;
    nextLabel: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}
