import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const groupEventTransfersEn: ServicePageDictionary = {
  meta: {
    title: "Group & Event Transfers in Spain – Stress-Free Travel",
    description:
      "Private group transfers for weddings, conferences, and events across Spain. Spacious vehicles, professional drivers, fixed prices.",
    ogAlt: "Spacious passenger van for a group transfer in Spain",
  },
  breadcrumb: {
    current: "Group & Event Transfers",
  },
  hero: {
    badge: "Group & Event Transfers",
    title: "Group & Event Transfers in Spain",
    description:
      "Weddings, conferences, and group outings, coordinated smoothly from pickup to arrival. Spacious vehicles and drivers experienced in group logistics.",
    ctaPrimary: "Request a Quote",
    ctaSecondaryLabel: "Contact Us Today",
    image:
      "https://images.unsplash.com/photo-1535655685871-dc8158ff167e?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "White Mercedes Sprinter minibus at dusk for a group transfer",
  },
  overview: {
    title: "Group Transfers, Handled Smoothly",
    paragraphs: [
      "Coordinating transport for a group is its own kind of logistics problem, especially on a wedding day or during a packed conference schedule. We take that off your plate with a single point of contact and vehicles matched to your group size.",
      "From one minibus for the wedding party to a coordinated convoy for a full conference, every group transfer is planned in advance so everyone arrives together, on time.",
    ],
    image:
      "https://images.unsplash.com/photo-1765461734605-34657fa04db2?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Dark Mercedes V-Class van ready for a group transfer",
  },
  whyChoose: {
    title: "Why Choose Our Group Transfer Service",
    items: [
      {
        icon: "users",
        title: "Single Point of Coordination",
        description: "One contact manages your entire group's transport plan.",
      },
      {
        icon: "car-front",
        title: "Vehicles for Any Group Size",
        description: "From a 6-seat V-Class to a full minibus, matched to your headcount.",
      },
      {
        icon: "clock",
        title: "On-Time for Every Stage",
        description: "Coordinated pickups so your group arrives together, as planned.",
      },
      {
        icon: "headset",
        title: "Dedicated Event-Day Support",
        description: "A direct line to our team throughout your event day.",
      },
    ],
  },
  routes: {
    title: "Popular Group Destinations",
    description: "Group and event logistics we coordinate every week.",
    items: [
      { title: "Wedding Venue Transfers", description: "Coordinated pickups for the wedding party and guests" },
      { title: "Conference Centre Shuttles", description: "Scheduled shuttle runs for delegates and attendees" },
      { title: "Corporate Retreats", description: "Group transfers to offsite venues and retreat locations" },
      { title: "Airport Group Pickups", description: "One coordinated pickup for groups landing together" },
      { title: "Multi-Vehicle Convoys", description: "Several vehicles moving together for larger parties" },
      { title: "Vineyard & Winery Tours", description: "Group day trips with a driver waiting throughout" },
    ],
  },
  fleet: {
    vehicleKeys: ["mercedes-vclass", "minibus", "premium-suv"],
  },
  faq: {
    items: [
      {
        question: "What's the largest group you can transport?",
        answer: "Our minibus option seats up to 16 passengers, and we can coordinate multiple vehicles for larger parties.",
      },
      {
        question: "Can you coordinate multiple pickup points for one group?",
        answer: "Yes, we regularly arrange multiple pickup locations that converge at a single event or venue.",
      },
      {
        question: "Do you provide transport for wedding parties?",
        answer: "Yes, wedding transfers are one of our most requested group services, from getting ready venues to the ceremony and reception.",
      },
      {
        question: "Can you handle transport for a multi-day conference?",
        answer: "Yes, we can schedule recurring shuttle runs across multiple days for conferences and corporate events.",
      },
      {
        question: "Is there a deposit required for group bookings?",
        answer: "Larger group and event bookings may require a deposit to confirm, which will be clearly explained before you pay anything.",
      },
      {
        question: "How much luggage space is available for groups?",
        answer: "Our minibus and V-Class options include generous luggage space; let us know your group's needs and we'll recommend the right vehicle.",
      },
      {
        question: "Can we book a return transfer at the end of the event?",
        answer: "Yes, round-trip group transfers are common, whether returning the same night or after a multi-day event.",
      },
      {
        question: "Do you offer on-site coordination for large events?",
        answer: "For larger events, we can provide a dedicated point of contact on the day to manage timing and logistics in real time.",
      },
    ],
  },
  cta: {
    title: "Book Your Group Transfer",
    description: "Planning a wedding, conference, or group trip? Get a fixed-price quote for your event.",
    button: "Request Quote",
  },
};
