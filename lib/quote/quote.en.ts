import type { QuotePageDictionary } from "@/lib/quote/types";

export const quoteEn: QuotePageDictionary = {
  meta: {
    title: "Get a Quote for Private Car & Airport Transfers in Spain",
    description:
      "Request a free quote for airport transfers, chauffeur services, city transfers, and long-distance travel anywhere in Spain. Fast responses and fixed prices.",
    ogAlt: "Private chauffeur opening the door of a premium vehicle for a passenger",
  },
  breadcrumb: {
    home: "Home",
    current: "Get a Quote",
  },
  hero: {
    badge: "Get a Quote",
    title: "Get Your Private Transfer Quote",
    description:
      "Tell us your route and travel details, and we'll send you a fixed-price quote for your private transfer anywhere in Spain.",
    cta: "Start Your Booking",
    image: "https://images.unsplash.com/photo-1566154845174-67dfe1adee87?w=1920&h=1400&fit=crop&q=80",
    imageAlt: "Professional chauffeur opening the car door for a passenger on a city street",
  },
  form: {
    sectionTitle: "Request Your Free Quote",
    sectionDescription: "Fill in your trip details below and we'll get back to you with a fixed price, fast.",
    stepOneLabel: "Step 1 of 2",
    stepOneTitle: "Trip Details",
    stepTwoLabel: "Step 2 of 2",
    stepTwoTitle: "Your Details",
    continueButton: "Continue",
    backButton: "Back",
    errorMessage: "Something went wrong submitting your request. Please try again.",
    requiredFieldTemplate: "{field} is required.",
    privacyRequiredError: "Please accept the Privacy Policy to continue.",
    pickupLabel: "Pickup Location *",
    pickupPlaceholder: "Airport, hotel, or address",
    dropoffLabel: "Drop-off Location *",
    dropoffPlaceholder: "Airport, hotel, or address",
    pickupDateLabel: "Pickup Date *",
    pickupTimeLabel: "Pickup Time *",
    returnTripLabel: "This is a return trip",
    returnDateLabel: "Return Date",
    returnTimeLabel: "Return Time",
    passengersLabel: "Number of Passengers *",
    passengerOptions: [
      { value: "1", label: "1 Passenger" },
      { value: "2", label: "2 Passengers" },
      { value: "3", label: "3 Passengers" },
      { value: "4", label: "4 Passengers" },
      { value: "5", label: "5 Passengers" },
      { value: "6", label: "6 Passengers" },
      { value: "7+", label: "7+ Passengers" },
    ],
    suitcasesLabel: "Number of Suitcases",
    suitcaseOptions: [
      { value: "0", label: "0 Suitcases" },
      { value: "1", label: "1 Suitcase" },
      { value: "2", label: "2 Suitcases" },
      { value: "3", label: "3 Suitcases" },
      { value: "4", label: "4 Suitcases" },
      { value: "5+", label: "5+ Suitcases" },
    ],
    vehicleLabel: "Vehicle Preference",
    vehicleOptions: [
      { value: "sedan", label: "Sedan" },
      { value: "executive-sedan", label: "Executive Sedan" },
      { value: "suv", label: "SUV" },
      { value: "mercedes-vclass", label: "Mercedes V-Class" },
      { value: "minivan", label: "Minivan" },
      { value: "minibus", label: "Minibus" },
      { value: "no-preference", label: "No Preference" },
    ],
    flightNumberLabel: "Flight Number",
    flightNumberPlaceholder: "e.g. IB3170",
    fullNameLabel: "Full Name *",
    fullNamePlaceholder: "Your full name",
    emailLabel: "Email Address *",
    emailPlaceholder: "you@example.com",
    whatsappLabel: "WhatsApp Number *",
    whatsappPlaceholder: "+1 234 567 8900",
    countryLabel: "Country *",
    countryPlaceholder: "Your country of residence",
    specialRequestsLabel: "Special Requests",
    specialRequestsPlaceholder: "Child seats, extra luggage, accessibility needs, etc.",
    privacyLabelBefore: "I agree to the ",
    privacyLinkLabel: "Privacy Policy",
    privacyLabelAfter: ".",
    submit: "Get My Quote",
    successTitle: "Quote Request Received",
    successMessage: "Thank you. Our team will send your fixed-price quote by email shortly.",
    requestAnother: "Request Another Quote",
  },
  whyRequest: {
    title: "Why Request a Quote With Us",
    items: [
      { icon: "badge-euro", title: "Fixed Prices", description: "Your fare is confirmed in your quote, with no meters or surprises later." },
      { icon: "user-check", title: "Professional Drivers", description: "Every driver is licensed, background-checked, and fully insured." },
      { icon: "plane", title: "Free Flight Monitoring", description: "We track your flight and adjust your pickup automatically, at no extra cost." },
      { icon: "shield-check", title: "No Hidden Charges", description: "The price in your quote is the price you pay, with nothing added later." },
      { icon: "handshake", title: "Meet & Greet", description: "Your driver waits at arrivals with a name sign, ready to help with luggage." },
      { icon: "car-front", title: "Luxury Vehicles", description: "A premium, well-maintained fleet matched to your group size." },
      { icon: "clock", title: "Fast Response", description: "Most quote requests receive a fixed-price reply within minutes." },
      { icon: "map-pin", title: "Door-to-Door Service", description: "Direct pickup and drop-off, with no shared rides or shuttle stops." },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions about requesting and confirming your private transfer quote.",
    items: [
      {
        question: "How quickly will I receive my quote?",
        answer:
          "Most quote requests receive a fixed-price reply by email within minutes during business hours, and no later than a few hours outside of them.",
      },
      {
        question: "How and when do I pay?",
        answer:
          "You don't pay anything to request a quote. Once you confirm your booking, payment is handled securely online, and your price is fixed from that point on.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "We monitor your flight in real time using the flight number you provide, so your driver automatically adjusts to your actual landing time at no extra charge.",
      },
      {
        question: "Can I request a child seat?",
        answer:
          "Yes, just mention the number and age of children needing a seat in the Special Requests field, and we'll include it in your quote at no additional charge.",
      },
      {
        question: "What types of vehicles are available?",
        answer:
          "Our fleet ranges from business sedans and SUVs to Mercedes V-Class vans and minibuses for larger groups. Select a preference in the form, or choose \"No Preference\" and we'll match you to the right vehicle.",
      },
      {
        question: "Can I cancel or change my booking after confirming?",
        answer:
          "Yes, bookings can be amended or cancelled free of charge up until the cutoff outlined in your confirmation email, in line with our Terms & Conditions.",
      },
    ],
  },
  cta: {
    title: "Need a Private Transfer Anywhere in Spain?",
    description: "Get your free, fixed-price quote today and travel with a professional driver from the moment you land.",
    button: "Get a Quote",
  },
  relatedLinks: {
    title: "Explore More",
    items: [
      { label: "Homepage", href: "/" },
      { label: "Airport Transfers", href: "/airport-transfers/" },
      { label: "City-to-City Transfers", href: "/city-to-city-transfers/" },
      { label: "Corporate Travel", href: "/corporate-travel/" },
      { label: "Group & Event Transfers", href: "/group-event-transfers/" },
      { label: "Cruise Port Transfers", href: "/cruise-port-transfers/" },
      { label: "Airports Hub", href: "/airports/" },
      { label: "Cities Hub", href: "/cities/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-and-conditions/" },
    ],
  },
};
