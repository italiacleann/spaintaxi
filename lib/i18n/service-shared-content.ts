import type { Locale } from "@/lib/i18n/config";
import type {
  ServiceBenefitItem,
  ServiceFleetVehicle,
  ServiceProcessStep,
} from "@/lib/i18n/service-types";
import { getQuotePagePath } from "@/lib/quote/config";

const benefitsEn: ServiceBenefitItem[] = [
  { icon: "badge-euro", title: "Fixed Prices", description: "No meters, no surprises. Your fare is locked in at booking." },
  { icon: "user-check", title: "Professional Drivers", description: "Licensed, vetted, and fluent in English and Spanish." },
  { icon: "plane", title: "Flight Monitoring", description: "We track your flight and adjust pickup automatically." },
  { icon: "handshake", title: "Meet & Greet", description: "Your driver waits with a name sign, ready to help." },
  { icon: "car-front", title: "Luxury Vehicles", description: "A premium, well-maintained fleet for every group size." },
  { icon: "headset", title: "24/7 Availability", description: "Early flight or midnight arrival, we're always on call." },
  { icon: "clock", title: "Free Waiting Time", description: "A generous grace period included on every pickup." },
  { icon: "map-pin", title: "Door-to-Door", description: "Direct pickup and drop-off, no shared stops or detours." },
];

const benefitsEs: ServiceBenefitItem[] = [
  { icon: "badge-euro", title: "Precios Cerrados", description: "Sin taxímetro, sin sorpresas. Tu tarifa queda fijada al reservar." },
  { icon: "user-check", title: "Conductores Profesionales", description: "Con licencia, verificados y con dominio de español e inglés." },
  { icon: "plane", title: "Seguimiento de Vuelo", description: "Controlamos tu vuelo y ajustamos la recogida automáticamente." },
  { icon: "handshake", title: "Recepción Personalizada", description: "Tu conductor te espera con un cartel con tu nombre." },
  { icon: "car-front", title: "Vehículos de Lujo", description: "Una flota premium y bien mantenida para cualquier grupo." },
  { icon: "headset", title: "Disponibilidad 24/7", description: "Vuelo de madrugada o llegada a medianoche, siempre disponibles." },
  { icon: "clock", title: "Espera Gratuita", description: "Un margen de cortesía generoso incluido en cada recogida." },
  { icon: "map-pin", title: "Puerta a Puerta", description: "Recogida y destino directos, sin paradas ni desvíos." },
];

const processStepsEn: ServiceProcessStep[] = [
  { step: "01", icon: "calendar-check", title: "Request a Quote", description: "Tell us your pickup, drop-off, date, and passenger count." },
  { step: "02", icon: "mail-check", title: "Receive Confirmation", description: "Get your fixed price and booking details by email, instantly." },
  { step: "03", icon: "handshake", title: "Meet Your Driver", description: "Your driver is waiting, ready to help with luggage." },
  { step: "04", icon: "car-front", title: "Enjoy Your Journey", description: "Relax in a premium vehicle all the way to your destination." },
];

const processStepsEs: ServiceProcessStep[] = [
  { step: "01", icon: "calendar-check", title: "Solicita tu Presupuesto", description: "Indícanos el lugar de recogida, destino, fecha y pasajeros." },
  { step: "02", icon: "mail-check", title: "Recibe la Confirmación", description: "Recibe tu precio cerrado y los datos de la reserva al instante." },
  { step: "03", icon: "handshake", title: "Conoce a tu Conductor", description: "Tu conductor te espera, listo para ayudarte con el equipaje." },
  { step: "04", icon: "car-front", title: "Disfruta del Trayecto", description: "Relájate en un vehículo premium hasta tu destino." },
];

const fleetCatalogEn: Record<string, ServiceFleetVehicle> = {
  "business-sedan": {
    name: "Business Sedan",
    category: "Sedan",
    passengers: "1-3",
    luggage: "2",
    wifi: true,
    ac: true,
    image: "https://images.unsplash.com/photo-1758855307960-3a6339cb2c27?w=900&h=700&fit=crop&q=80",
    imageAlt: "Silver business sedan for a private transfer",
  },
  "executive-sedan": {
    name: "Executive Sedan",
    category: "Sedan",
    passengers: "1-3",
    luggage: "2",
    wifi: true,
    ac: true,
    image: "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=900&h=700&fit=crop&q=80",
    imageAlt: "Black executive sedan parked for a private transfer",
  },
  "premium-suv": {
    name: "Premium SUV",
    category: "SUV",
    passengers: "1-5",
    luggage: "4",
    wifi: true,
    ac: true,
    image: "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?w=900&h=700&fit=crop&q=80",
    imageAlt: "Premium Mercedes-Benz SUV for a private transfer",
  },
  "mercedes-vclass": {
    name: "Mercedes V-Class",
    category: "Van",
    passengers: "1-6",
    luggage: "6",
    wifi: true,
    ac: true,
    image: "https://images.unsplash.com/photo-1765461734605-34657fa04db2?w=900&h=700&fit=crop&q=80",
    imageAlt: "Dark Mercedes V-Class van with headlights on",
  },
  minibus: {
    name: "Minibus",
    category: "Minibus",
    passengers: "1-16",
    luggage: "16",
    wifi: true,
    ac: true,
    image: "https://images.unsplash.com/photo-1535655685871-dc8158ff167e?w=900&h=700&fit=crop&q=80",
    imageAlt: "White Mercedes Sprinter minibus at dusk",
  },
};

const fleetCatalogEs: Record<string, ServiceFleetVehicle> = {
  "business-sedan": {
    ...fleetCatalogEn["business-sedan"],
    name: "Sedán Business",
    category: "Sedán",
  },
  "executive-sedan": {
    ...fleetCatalogEn["executive-sedan"],
    name: "Sedán Ejecutivo",
    category: "Sedán",
  },
  "premium-suv": {
    ...fleetCatalogEn["premium-suv"],
    name: "SUV Premium",
    category: "SUV",
  },
  "mercedes-vclass": {
    ...fleetCatalogEn["mercedes-vclass"],
    name: "Mercedes Clase V",
    category: "Furgoneta",
  },
  minibus: {
    ...fleetCatalogEn["minibus"],
    name: "Minibús",
    category: "Minibús",
  },
};

export interface ServiceSharedContent {
  benefits: ServiceBenefitItem[];
  processTitle: string;
  processSteps: ServiceProcessStep[];
  fleetSectionTitle: string;
  fleetSectionDescription: string;
  fleetLabels: { passengers: string; luggage: string; wifi: string; ac: string };
  fleetCatalog: Record<string, ServiceFleetVehicle>;
  faqSectionTitle: string;
  faqSectionDescription: string;
  ctaSecondaryHref: string;
}

const sharedEn: ServiceSharedContent = {
  benefits: benefitsEn,
  processTitle: "How It Works",
  processSteps: processStepsEn,
  fleetSectionTitle: "Vehicle Options",
  fleetSectionDescription: "Every vehicle is premium, insured, and matched to your group size.",
  fleetLabels: { passengers: "Passengers", luggage: "Luggage", wifi: "Wi-Fi", ac: "A/C" },
  fleetCatalog: fleetCatalogEn,
  faqSectionTitle: "Frequently Asked Questions",
  faqSectionDescription: "Everything travelers ask us most about this service.",
  ctaSecondaryHref: getQuotePagePath("en"),
};

const sharedEs: ServiceSharedContent = {
  benefits: benefitsEs,
  processTitle: "Cómo Funciona",
  processSteps: processStepsEs,
  fleetSectionTitle: "Opciones de Vehículo",
  fleetSectionDescription: "Todos nuestros vehículos son premium, están asegurados y se adaptan al tamaño de tu grupo.",
  fleetLabels: { passengers: "Pasajeros", luggage: "Equipaje", wifi: "Wi-Fi", ac: "A/C" },
  fleetCatalog: fleetCatalogEs,
  faqSectionTitle: "Preguntas Frecuentes",
  faqSectionDescription: "Todo lo que más nos preguntan los viajeros sobre este servicio.",
  ctaSecondaryHref: getQuotePagePath("es"),
};

export function getServiceSharedContent(locale: Locale): ServiceSharedContent {
  return locale === "es" ? sharedEs : sharedEn;
}
