import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const hourlyChauffeurEs: ServicePageDictionary = {
  meta: {
    title: "Chófer por Horas en España – Reserva al Instante",
    description:
      "Reserva un chófer privado por horas en cualquier punto de España. Conductores profesionales, vehículos de lujo y reserva flexible 24/7.",
    ogAlt: "Chófer profesional esperando junto a un vehículo privado en España",
  },
  breadcrumb: {
    current: "Chófer por Horas",
  },
  hero: {
    badge: "Chófer por Horas",
    title: "Servicio de Chófer por Horas en España",
    description:
      "Un conductor y un vehículo dedicados exclusivamente a ti, por horas. Ideal para reuniones, días de compras, rutas turísticas o cualquier plan que necesite flexibilidad.",
    ctaPrimary: "Reserva al Instante",
    ctaSecondaryLabel: "Viaja con Comodidad",
    image:
      "https://images.unsplash.com/photo-1617244148194-7971ce22f2fb?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Chófer profesional con traje junto a un Mercedes negro con la puerta abierta",
  },
  overview: {
    title: "Tiempo de Chófer Flexible y Dedicado",
    paragraphs: [
      "Hay días que no encajan en un solo trayecto de punto a punto. Nuestro servicio de chófer por horas te da un conductor y un vehículo reservados solo para ti, listos para adaptarse a tus planes durante todo el día.",
      "Tu conductor espera entre paradas, ajusta la ruta cuando lo necesites y te mantiene en movimiento sin los retrasos de buscar un nuevo taxi cada vez que cambian tus planes.",
    ],
    image:
      "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Sedán ejecutivo negro disponible para alquiler de chófer por horas",
  },
  whyChoose: {
    title: "Por Qué Elegir Nuestro Chófer por Horas",
    items: [
      {
        icon: "clock",
        title: "Sin Itinerario Fijo",
        description: "Planifica sobre la marcha. Tu conductor se adapta a los cambios del día.",
      },
      {
        icon: "handshake",
        title: "El Conductor Espera entre Paradas",
        description: "Sin volver a reservar, sin esperar un nuevo coche entre citas.",
      },
      {
        icon: "briefcase",
        title: "Ideal para Reuniones y Eventos",
        description: "Una opción elegante y fiable para jornadas de trabajo y ocasiones especiales.",
      },
      {
        icon: "badge-euro",
        title: "Amplía Cuando Quieras",
        description: "¿Se alarga el día? Amplía tu reserva directamente con tu conductor.",
      },
    ],
  },
  routes: {
    title: "Usos Más Populares",
    description: "Alquiler por horas flexible, adaptado a como transcurra tu día.",
    items: [
      { title: "Reuniones de Negocios", description: "Trayectos punto a punto durante una jornada laboral" },
      { title: "Rutas Turísticas por la Ciudad", description: "Un conductor y un coche para explorar a tu ritmo" },
      { title: "Día de Compras en Barcelona", description: "Varias paradas con el coche esperando en cada una" },
      { title: "Día de Boda o Evento", description: "Transporte fiable en cada momento de la jornada" },
      { title: "Itinerarios con Varias Paradas", description: "Varios destinos, una sola reserva continua" },
      { title: "Servicio de Espera en Aeropuerto", description: "Un conductor disponible ante horarios de vuelo flexibles" },
    ],
  },
  fleet: {
    vehicleKeys: ["executive-sedan", "premium-suv", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "¿Cuál es el tiempo mínimo de reserva de un chófer por horas?",
        answer: "La mayoría de las reservas por horas empiezan en un mínimo de 3 horas. Cuéntanos tus planes y te confirmaremos la duración adecuada para tu día.",
      },
      {
        question: "¿Puedo ampliar mi reserva el mismo día?",
        answer: "Sí, solo tienes que avisar a tu conductor. Las ampliaciones se facturan a la misma tarifa por hora, según disponibilidad.",
      },
      {
        question: "¿El conductor espera mientras estoy en una cita?",
        answer: "Sí, tu conductor y vehículo están reservados en exclusiva para ti y esperan entre cada parada.",
      },
      {
        question: "¿Cómo se calcula el precio del chófer por horas?",
        answer: "El precio se calcula según el número de horas reservadas y la categoría del vehículo, confirmado por completo antes de empezar tu reserva.",
      },
      {
        question: "¿Puedo reservar un chófer para todo el día?",
        answer: "Sí, hay reservas de día completo o varios días disponibles con una tarifa por hora reducida. Pide un presupuesto personalizado.",
      },
      {
        question: "¿La reserva incluye un límite de kilometraje?",
        answer: "Cada paquete por horas incluye un margen de kilometraje generoso. El exceso se factura de forma transparente si lo superas.",
      },
      {
        question: "¿Puedo usar el servicio por horas para una boda o evento?",
        answer: "Por supuesto, el alquiler por horas es una opción muy popular para bodas, galas y jornadas de eventos con varias paradas.",
      },
      {
        question: "¿Puedo reservar más de un vehículo para un grupo?",
        answer: "Sí, podemos coordinar varios vehículos bajo una misma reserva para grupos grandes o comitivas de boda.",
      },
    ],
  },
  cta: {
    title: "Reserva tu Chófer por Horas",
    description: "¿Necesitas un conductor para el día? Confirma tu tarifa cerrada por horas en menos de un minuto.",
    button: "Solicitar Presupuesto",
  },
};
