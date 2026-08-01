export interface QuoteFormDictionary {
  sectionTitle: string;
  sectionDescription: string;
  stepOneLabel: string;
  stepOneTitle: string;
  stepTwoLabel: string;
  stepTwoTitle: string;
  continueButton: string;
  backButton: string;
  errorMessage: string;
  pickupLabel: string;
  pickupPlaceholder: string;
  dropoffLabel: string;
  dropoffPlaceholder: string;
  pickupDateLabel: string;
  pickupTimeLabel: string;
  returnTripLabel: string;
  returnDateLabel: string;
  returnTimeLabel: string;
  passengersLabel: string;
  passengerOptions: { value: string; label: string }[];
  suitcasesLabel: string;
  suitcaseOptions: { value: string; label: string }[];
  vehicleLabel: string;
  vehicleOptions: { value: string; label: string }[];
  flightNumberLabel: string;
  flightNumberPlaceholder: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  whatsappLabel: string;
  whatsappPlaceholder: string;
  countryLabel: string;
  countryPlaceholder: string;
  specialRequestsLabel: string;
  specialRequestsPlaceholder: string;
  privacyLabelBefore: string;
  privacyLinkLabel: string;
  privacyLabelAfter: string;
  submit: string;
  successTitle: string;
  successMessage: string;
  requestAnother: string;
}

export interface QuotePageDictionary {
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
    cta: string;
    image: string;
    imageAlt: string;
  };
  form: QuoteFormDictionary;
  whyRequest: {
    title: string;
    items: { icon: "badge-euro" | "user-check" | "plane" | "shield-check" | "handshake" | "car-front" | "clock" | "map-pin"; title: string; description: string }[];
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
  relatedLinks: {
    title: string;
    items: { label: string; href: string }[];
  };
}
