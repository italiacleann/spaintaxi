import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const cityToCityTransfersEs: ServicePageDictionary = {
  meta: {
    title: "Traslados entre Ciudades en España – Reserva tu Trayecto",
    description:
      "Traslados cómodos de larga distancia entre ciudades españolas. Precios cerrados, conductores profesionales y servicio puerta a puerta 24/7.",
    ogAlt: "Vehículo privado en una carretera panorámica española para un traslado entre ciudades",
  },
  breadcrumb: {
    current: "Traslados entre Ciudades",
  },
  hero: {
    badge: "Traslados entre Ciudades",
    title: "Traslados entre Ciudades de España",
    description:
      "Olvídate de la estación de tren y del mostrador de alquiler de coches. Viaja directamente entre ciudades españolas en un vehículo privado, con precio cerrado, puerta a puerta.",
    ctaPrimary: "Reserva tu Trayecto",
    ctaSecondaryLabel: "Solicita Presupuesto Gratis",
    image:
      "https://images.unsplash.com/photo-1613332803480-0e94806c7394?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Carretera panorámica y sinuosa junto a la costa española",
  },
  overview: {
    title: "Viajes Largos con Comodidad",
    paragraphs: [
      "Los trenes y autobuses implican horarios fijos y vagones compartidos. Un traslado privado entre ciudades significa salir cuando tú quieras, ir directo a tu destino y llegar relajado en lugar de agotado por el viaje.",
      "Cada traslado de larga distancia se cotiza por adelantado, con un conductor profesional y un vehículo cómodo adaptado a la duración del trayecto, desde un salto rápido entre ciudades vecinas hasta un cruce de varias horas por el país.",
    ],
    image:
      "https://images.unsplash.com/photo-1758855307960-3a6339cb2c27?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Sedán business plateado listo para un traslado de larga distancia",
  },
  whyChoose: {
    title: "Por Qué Elegir Nuestro Traslado entre Ciudades",
    items: [
      {
        icon: "route",
        title: "Sin Estaciones ni Esperas",
        description: "Olvídate de andenes, restricciones de equipaje y horarios de conexión.",
      },
      {
        icon: "map-pin",
        title: "Puerta a Puerta",
        description: "Te recogemos en tu dirección y te dejamos exactamente donde necesitas ir.",
      },
      {
        icon: "car-front",
        title: "Confort en Trayectos Largos",
        description: "Vehículos amplios y climatizados, pensados para viajes de varias horas.",
      },
      {
        icon: "map-pin",
        title: "Paradas Bajo Petición",
        description: "Añade un descanso, un desvío panorámico o una segunda recogida en ruta.",
      },
    ],
  },
  routes: {
    title: "Rutas Populares",
    description: "Traslados privados con precio cerrado entre las ciudades más solicitadas de España.",
    items: [
      { title: "Madrid → Barcelona", description: "~6 h • traslado privado de larga distancia" },
      { title: "Barcelona → Valencia", description: "~3,5 h • ruta por la costa mediterránea" },
      { title: "Málaga → Sevilla", description: "~2,5 h • trayecto andaluz entre ciudades" },
      { title: "Valencia → Alicante", description: "~2 h • ruta de la Costa Blanca" },
      { title: "Sevilla → Granada", description: "~2,5 h • ruta del patrimonio andaluz" },
      { title: "Madrid → Toledo", description: "~1 h • traslado de excursión de un día" },
    ],
  },
  fleet: {
    vehicleKeys: ["business-sedan", "executive-sedan", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "¿Cómo se calcula el precio de un traslado entre ciudades?",
        answer: "El precio se calcula según la distancia exacta entre las ciudades de recogida y destino, más el tipo de vehículo y el número de pasajeros, confirmado por completo antes de reservar.",
      },
      {
        question: "¿Puedo hacer una parada en el camino?",
        answer: "Sí, indícalo al reservar y añadiremos una parada a tu ruta, ya sea para descansar, comer o dar un pequeño rodeo.",
      },
      {
        question: "¿Hay límite de equipaje en los traslados de larga distancia?",
        answer: "Cada vehículo tiene un límite de equipaje indicado. Para grupos grandes o equipaje extra, recomendamos nuestro Mercedes Clase V o el minibús.",
      },
      {
        question: "¿Puedo reservar un traslado nocturno o de madrugada?",
        answer: "Sí, los traslados entre ciudades funcionan las 24 horas al mismo precio cerrado, sea cual sea la hora en que necesites viajar.",
      },
      {
        question: "¿Ofrecéis traslados de ida y vuelta entre ciudades?",
        answer: "Sí, puedes reservar un trayecto de vuelta para el mismo día más tarde o para otra fecha, según te convenga.",
      },
      {
        question: "¿El conductor es el mismo durante todo el trayecto?",
        answer: "Sí, un único conductor te lleva directamente de la recogida al destino, sin cambios ni trasbordos en el camino.",
      },
      {
        question: "¿Puedo reservar un traslado entre ciudades para un grupo?",
        answer: "Por supuesto. Los grupos numerosos caben en nuestro Mercedes Clase V o minibús, dentro de la misma reserva con precio cerrado.",
      },
      {
        question: "¿Qué pasa si cambian mis planes después de reservar?",
        answer: "La mayoría de las reservas se pueden modificar o cancelar sin coste hasta 24 horas antes de la recogida. Solo tienes que contactar con nuestro equipo de soporte.",
      },
    ],
  },
  cta: {
    title: "Reserva tu Traslado entre Ciudades",
    description: "¿Viajas entre ciudades españolas? Consigue tu traslado con precio cerrado en menos de un minuto.",
    button: "Solicitar Presupuesto",
  },
};
