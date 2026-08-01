import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const groupEventTransfersEs: ServicePageDictionary = {
  meta: {
    title: "Traslados para Grupos y Eventos en España – Sin Complicaciones",
    description:
      "Traslados privados de grupo para bodas, congresos y eventos en toda España. Vehículos amplios, conductores profesionales, precios cerrados.",
    ogAlt: "Furgoneta amplia para un traslado de grupo en España",
  },
  breadcrumb: {
    current: "Traslados para Grupos y Eventos",
  },
  hero: {
    badge: "Traslados para Grupos y Eventos",
    title: "Traslados para Grupos y Eventos en España",
    description:
      "Bodas, congresos y salidas en grupo, coordinados sin complicaciones desde la recogida hasta la llegada. Vehículos amplios y conductores con experiencia en logística de grupos.",
    ctaPrimary: "Solicitar Presupuesto",
    ctaSecondaryLabel: "Contáctanos Hoy",
    image:
      "https://images.unsplash.com/photo-1535655685871-dc8158ff167e?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Furgoneta Mercedes Sprinter blanca al atardecer para un traslado de grupo",
  },
  overview: {
    title: "Traslados de Grupo sin Complicaciones",
    paragraphs: [
      "Coordinar el transporte de un grupo es un reto logístico en sí mismo, sobre todo en el día de una boda o durante la agenda apretada de un congreso. Nosotros nos encargamos de todo con un único punto de contacto y vehículos adaptados al tamaño de tu grupo.",
      "Desde un minibús para la comitiva de boda hasta una caravana coordinada para un congreso completo, cada traslado de grupo se planifica con antelación para que todos lleguen juntos y a tiempo.",
    ],
    image:
      "https://images.unsplash.com/photo-1765461734605-34657fa04db2?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Furgoneta Mercedes Clase V oscura lista para un traslado de grupo",
  },
  whyChoose: {
    title: "Por Qué Elegir Nuestro Traslado de Grupo",
    items: [
      {
        icon: "users",
        title: "Un Único Punto de Coordinación",
        description: "Un solo contacto gestiona todo el plan de transporte de tu grupo.",
      },
      {
        icon: "car-front",
        title: "Vehículos para Cualquier Tamaño de Grupo",
        description: "Desde una Clase V de 6 plazas hasta un minibús completo, según tu número de invitados.",
      },
      {
        icon: "clock",
        title: "Puntuales en Cada Etapa",
        description: "Recogidas coordinadas para que tu grupo llegue junto, según lo planeado.",
      },
      {
        icon: "headset",
        title: "Soporte Dedicado el Día del Evento",
        description: "Una línea directa con nuestro equipo durante todo el día de tu evento.",
      },
    ],
  },
  routes: {
    title: "Destinos de Grupo Populares",
    description: "Logística de grupos y eventos que coordinamos cada semana.",
    items: [
      { title: "Traslados a la Boda", description: "Recogidas coordinadas para la comitiva y los invitados" },
      { title: "Lanzaderas a Centros de Congresos", description: "Rutas de lanzadera programadas para delegados y asistentes" },
      { title: "Retiros de Empresa", description: "Traslados de grupo a sedes y ubicaciones de retiro" },
      { title: "Recogidas de Grupo en Aeropuerto", description: "Una recogida coordinada para grupos que llegan juntos" },
      { title: "Caravanas de Varios Vehículos", description: "Varios vehículos circulando juntos para grupos grandes" },
      { title: "Rutas por Bodegas y Viñedos", description: "Excursiones de grupo con un conductor esperando durante todo el día" },
    ],
  },
  fleet: {
    vehicleKeys: ["mercedes-vclass", "minibus", "premium-suv"],
  },
  faq: {
    items: [
      {
        question: "¿Cuál es el grupo más grande que podéis transportar?",
        answer: "Nuestro minibús tiene capacidad para hasta 16 pasajeros, y podemos coordinar varios vehículos para grupos más numerosos.",
      },
      {
        question: "¿Podéis coordinar varios puntos de recogida para un mismo grupo?",
        answer: "Sí, organizamos habitualmente varios puntos de recogida que confluyen en un mismo evento o lugar.",
      },
      {
        question: "¿Ofrecéis transporte para comitivas de boda?",
        answer: "Sí, los traslados de boda son uno de nuestros servicios de grupo más solicitados, desde los preparativos hasta la ceremonia y el banquete.",
      },
      {
        question: "¿Podéis encargaros del transporte de un congreso de varios días?",
        answer: "Sí, podemos programar rutas de lanzadera recurrentes durante varios días para congresos y eventos de empresa.",
      },
      {
        question: "¿Se requiere depósito para las reservas de grupo?",
        answer: "Las reservas de grupo o evento más grandes pueden requerir un depósito para confirmarse, lo cual se explicará con claridad antes de pagar nada.",
      },
      {
        question: "¿Cuánto espacio para equipaje hay disponible para grupos?",
        answer: "Nuestras opciones de minibús y Clase V incluyen amplio espacio para equipaje; cuéntanos las necesidades de tu grupo y te recomendaremos el vehículo adecuado.",
      },
      {
        question: "¿Podemos reservar un traslado de vuelta al terminar el evento?",
        answer: "Sí, los traslados de grupo de ida y vuelta son habituales, ya sea la misma noche o tras un evento de varios días.",
      },
      {
        question: "¿Ofrecéis coordinación in situ para eventos grandes?",
        answer: "Para eventos más grandes, podemos ofrecer un punto de contacto dedicado el mismo día para gestionar los tiempos y la logística en tiempo real.",
      },
    ],
  },
  cta: {
    title: "Reserva tu Traslado de Grupo",
    description: "¿Organizas una boda, un congreso o un viaje en grupo? Consigue un presupuesto cerrado para tu evento.",
    button: "Solicitar Presupuesto",
  },
};
