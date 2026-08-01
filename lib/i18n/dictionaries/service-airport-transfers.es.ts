import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const airportTransfersEs: ServicePageDictionary = {
  meta: {
    title: "Traslado al Aeropuerto y Taxi con Conductor en España – Reserva Online",
    description:
      "Reserva traslados fiables al aeropuerto en toda España. Conductores profesionales, precios cerrados y seguimiento de vuelo, disponible 24/7.",
    ogAlt: "Chófer profesional listo para un traslado al aeropuerto en España",
  },
  breadcrumb: {
    current: "Traslados al Aeropuerto",
  },
  hero: {
    badge: "Traslados al Aeropuerto",
    title: "Traslados al Aeropuerto por Toda España",
    description:
      "Traslados privados con precio cerrado entre cualquier aeropuerto español y tu hotel, casa u oficina. Seguimiento de vuelo incluido y un conductor esperándote en llegadas, siempre.",
    ctaPrimary: "Solicita Presupuesto Gratis",
    ctaSecondaryLabel: "Contáctanos Hoy",
    image:
      "https://images.unsplash.com/photo-1603087462214-2aadc739429c?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Chófer profesional junto a un vehículo premium de color negro",
  },
  overview: {
    title: "Traslados al Aeropuerto de Confianza",
    paragraphs: [
      "Olvídate de las colas de taxi y de las sorpresas de última hora. Cada traslado al aeropuerto se reserva por adelantado con precio cerrado, con un conductor profesional que controla tu vuelo y te espera en llegadas.",
      "Aterrices en Madrid, Barcelona o un aeropuerto regional más pequeño, nuestra red cubre todas las terminales importantes de España, de día y de noche, con un vehículo adaptado al tamaño de tu grupo.",
    ],
    image:
      "https://images.unsplash.com/photo-1772468237159-674f05233185?w=1200&h=1400&fit=crop&crop=right&q=80",
    imageAlt: "Conductor cargando el equipaje en el coche para un traslado al aeropuerto",
  },
  whyChoose: {
    title: "Por Qué Elegir Nuestro Traslado al Aeropuerto",
    items: [
      {
        icon: "plane",
        title: "Protección ante Retrasos",
        description: "Controlamos tu vuelo y ajustamos la recogida automáticamente, sin coste extra.",
      },
      {
        icon: "handshake",
        title: "Recepción en Llegadas",
        description: "Tu conductor te espera en llegadas con un cartel con tu nombre, listo para ayudarte.",
      },
      {
        icon: "badge-euro",
        title: "Precio Cerrado al Aeropuerto",
        description: "Un único precio para todo el trayecto, acordado antes de viajar.",
      },
      {
        icon: "user-check",
        title: "Sillas Infantiles Disponibles",
        description: "Solicita una silla infantil o alzador sin coste adicional.",
      },
    ],
  },
  routes: {
    title: "Aeropuertos Populares",
    description: "Traslados con precio cerrado desde todos los grandes aeropuertos de España.",
    items: [
      { title: "Aeropuerto de Barcelona → Barcelona Ciudad", description: "~25 min • desde El Prat al centro de la ciudad" },
      { title: "Aeropuerto de Madrid → Centro de Madrid", description: "~30 min • desde Barajas al centro de Madrid" },
      { title: "Aeropuerto de Málaga → Marbella", description: "~45 min • traslado a la Costa del Sol" },
      { title: "Aeropuerto de Valencia → Valencia Ciudad", description: "~20 min • trayecto corto del aeropuerto a la ciudad" },
      { title: "Aeropuerto de Alicante → Benidorm", description: "~40 min • traslado a la Costa Blanca" },
      { title: "Aeropuerto de Palma → Palma de Mallorca", description: "~20 min • traslado en la isla" },
    ],
  },
  fleet: {
    vehicleKeys: ["business-sedan", "premium-suv", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "¿Cómo reservo un traslado al aeropuerto?",
        answer: "Introduce tu aeropuerto, destino, datos de vuelo y número de pasajeros en nuestro formulario de presupuesto. Recibirás un precio cerrado y confirmación al instante.",
      },
      {
        question: "¿Qué ocurre si mi vuelo se retrasa?",
        answer: "Controlamos tu vuelo en tiempo real con tu número de vuelo, así que tu conductor ajusta automáticamente la hora de recogida sin coste adicional.",
      },
      {
        question: "¿Dónde me esperará mi conductor?",
        answer: "Tu conductor te esperará en la zona de llegadas con un cartel con tu nombre, listo para ayudarte con el equipaje en cuanto aterrices.",
      },
      {
        question: "¿Cuánto equipaje puedo llevar?",
        answer: "Cada categoría de vehículo tiene un límite de equipaje indicado. Avísanos si llevas maletas extra u objetos voluminosos al reservar.",
      },
      {
        question: "¿Puedo reservar un traslado solo de ida?",
        answer: "Sí, puedes reservar un traslado solo de ida o de ida y vuelta. Los trayectos de vuelta se pueden reservar juntos o por separado, como prefieras.",
      },
      {
        question: "¿Cobráis más por vuelos muy pronto o muy tarde?",
        answer: "No. Nuestro servicio de traslados al aeropuerto funciona las 24 horas al mismo precio cerrado, sea cual sea tu hora de llegada o salida.",
      },
      {
        question: "¿El precio es por persona o por vehículo?",
        answer: "Nuestros precios son por vehículo, no por persona, así que los grupos que viajan juntos suelen ahorrar frente a coger taxis individuales.",
      },
      {
        question: "¿Puedo solicitar una silla infantil para mi traslado?",
        answer: "Sí, las sillas infantiles y alzadores están disponibles bajo petición sin coste adicional. Solo indícalo al reservar.",
      },
    ],
  },
  cta: {
    title: "Reserva tu Traslado al Aeropuerto",
    description: "¿Aterrizas en España? Consigue tu traslado al aeropuerto con precio cerrado en menos de un minuto.",
    button: "Solicitar Presupuesto",
  },
};
