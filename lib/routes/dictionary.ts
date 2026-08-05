import type { Locale } from "@/lib/i18n/config";
import type { RouteKind } from "@/lib/routes/types";

export interface RoutePageDictionary {
  factsPanel: {
    driveTimeLabel: string;
    distanceLabel: string;
    quoteButton: string;
    pickupTitle: string;
    pickupBullets: Record<RouteKind, string[]>;
  };
  aboutTitle: string;
  vehiclesTitle: string;
  vehiclesDescription: string;
  faqTitle: string;
  relatedTitle: string;
  relatedLabels: {
    home: string;
    quote: string;
    cityHub: string;
    airportHub: string;
    services: string;
    blog: string;
  };
  cta: { title: string; description: string; button: string };
}

const en: RoutePageDictionary = {
  factsPanel: {
    driveTimeLabel: "Typical drive time",
    distanceLabel: "Distance",
    quoteButton: "Get a Quote",
    pickupTitle: "What to expect",
    pickupBullets: {
      hotel: [
        "Meet & greet at arrivals with a name sign",
        "Direct drop-off at the hotel entrance",
        "Help with luggage on both ends",
      ],
      "cruise-port": [
        "Driver tracks your flight or ship schedule",
        "Drop-off directly at your cruise terminal",
        "Help with luggage to the terminal entrance",
      ],
      "train-station": [
        "Direct drop-off at the station entrance",
        "Extra time built in during peak travel hours",
        "Help with luggage on both ends",
      ],
      attraction: [
        "Direct drop-off near the entrance",
        "Driver can suggest the best time to arrive and avoid queues",
        "Return pickup available on request",
      ],
      "day-trip": [
        "Private vehicle for the whole day",
        "Driver waits while you explore",
        "Flexible pickup and return times",
      ],
      city: [
        "Direct, non-stop private transfer",
        "No shared rides or shuttle stops",
        "Meet & greet at pickup",
      ],
    },
  },
  aboutTitle: "About This Transfer",
  vehiclesTitle: "Vehicle Options",
  vehiclesDescription: "Every vehicle is premium, insured, and matched to your group size.",
  faqTitle: "Frequently Asked Questions",
  relatedTitle: "Explore More",
  relatedLabels: {
    home: "Homepage",
    quote: "Get a Quote",
    cityHub: "Cities Hub",
    airportHub: "Airports Hub",
    services: "Our Services",
    blog: "From the Blog",
  },
  cta: {
    title: "Ready to Book This Transfer?",
    description: "Get a free, fixed-price quote in under a minute and travel with a professional driver from the moment you land.",
    button: "Get a Quote",
  },
};

const es: RoutePageDictionary = {
  factsPanel: {
    driveTimeLabel: "Tiempo de trayecto habitual",
    distanceLabel: "Distancia",
    quoteButton: "Solicitar Presupuesto",
    pickupTitle: "Qué esperar",
    pickupBullets: {
      hotel: [
        "Recepción personalizada en llegadas con cartel con tu nombre",
        "Parada directa en la entrada del hotel",
        "Ayuda con el equipaje en ambos extremos",
      ],
      "cruise-port": [
        "El conductor controla tu vuelo o el horario del crucero",
        "Parada directa en tu terminal de cruceros",
        "Ayuda con el equipaje hasta la entrada de la terminal",
      ],
      "train-station": [
        "Parada directa en la entrada de la estación",
        "Margen extra incluido en horas punta",
        "Ayuda con el equipaje en ambos extremos",
      ],
      attraction: [
        "Parada directa cerca de la entrada",
        "El conductor puede recomendarte el mejor horario para evitar colas",
        "Recogida de vuelta disponible bajo petición",
      ],
      "day-trip": [
        "Vehículo privado durante todo el día",
        "El conductor espera mientras visitas la zona",
        "Horarios de recogida y vuelta flexibles",
      ],
      city: [
        "Traslado privado directo, sin paradas",
        "Sin trayectos compartidos ni paradas de lanzadera",
        "Recepción personalizada en la recogida",
      ],
    },
  },
  aboutTitle: "Sobre Este Traslado",
  vehiclesTitle: "Opciones de Vehículo",
  vehiclesDescription: "Todos nuestros vehículos son premium, están asegurados y se adaptan al tamaño de tu grupo.",
  faqTitle: "Preguntas Frecuentes",
  relatedTitle: "Descubre Más",
  relatedLabels: {
    home: "Inicio",
    quote: "Solicitar Presupuesto",
    cityHub: "Directorio de Ciudades",
    airportHub: "Directorio de Aeropuertos",
    services: "Nuestros Servicios",
    blog: "Desde el Blog",
  },
  cta: {
    title: "¿Listo para Reservar Este Traslado?",
    description: "Consigue un presupuesto gratuito con precio cerrado en menos de un minuto y viaja con un conductor profesional desde el momento en que aterrizas.",
    button: "Solicitar Presupuesto",
  },
};

const dictionaries: Record<Locale, RoutePageDictionary> = { en, es };

export function getRoutePageDictionary(locale: Locale): RoutePageDictionary {
  return dictionaries[locale];
}
