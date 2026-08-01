import type { AirportHubDictionary } from "@/lib/airports/hub-types";

export const airportHubEs: AirportHubDictionary = {
  meta: {
    title: "Traslados a Aeropuertos de España | Taxi Privado en Cada Aeropuerto",
    description:
      "Reserva un traslado privado a cualquier aeropuerto comercial de España. Precios cerrados, seguimiento de vuelo y conductores profesionales, 24/7.",
    ogAlt: "Vehículos de traslado privado esperando frente a una terminal de aeropuerto española",
  },
  breadcrumb: {
    home: "Inicio",
    current: "Traslados a Aeropuertos",
  },
  hero: {
    badge: "Directorio de Aeropuertos",
    title: "Traslados Privados a Aeropuertos en Toda España",
    description:
      "Desde Madrid y Barcelona hasta la pista más pequeña de las islas, encuentra tu traslado privado con precio cerrado en cualquier aeropuerto comercial de España.",
  },
  intro: {
    title: "Todos los Aeropuertos de España, una Red de Confianza",
    paragraphs: [
      "Ya aterrices en la península, en las Islas Baleares o en las Islas Canarias, nuestra red de conductores profesionales cubre todos los aeropuertos comerciales de España. Busca o filtra el directorio para encontrar tu aeropuerto y reservar un traslado privado puerta a puerta con precio cerrado.",
      "Cada página de aeropuerto incluye tiempos de trayecto reales a los destinos más populares y localidades cercanas, seguimiento de vuelo para que tu conductor se ajuste automáticamente a los retrasos, y una flota que va desde sedanes ejecutivos hasta furgonetas espaciosas para grupos.",
    ],
  },
  directory: {
    searchLabel: "Buscar aeropuertos",
    searchPlaceholder: "Busca por aeropuerto, ciudad o región...",
    filterLabel: "Filtrar por región",
    filters: {
      all: "Todos los Aeropuertos",
      mainland: "España Peninsular",
      balearic: "Islas Baleares",
      canary: "Islas Canarias",
    },
    resultsCountTemplate: "{count} aeropuertos",
    emptyMessage: "Ningún aeropuerto coincide con tu búsqueda. Prueba con otro aeropuerto, ciudad o región.",
    cardCta: "Ver traslado",
    heliportBadge: "Helipuerto",
  },
  cta: {
    title: "¿No Encuentras tu Aeropuerto?",
    description:
      "Contáctanos directamente y organizaremos un traslado privado para cualquier aeropuerto, ruta o itinerario en España.",
    button: "Contáctanos",
  },
};
