import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const corporateTravelEs: ServicePageDictionary = {
  meta: {
    title: "Transporte Corporativo y Chófer de Empresa en España",
    description:
      "Traslados corporativos fiables por toda España. Facturación centralizada, conductores profesionales y reserva prioritaria 24/7.",
    ogAlt: "Profesionales caminando por un distrito de negocios en una ciudad española",
  },
  breadcrumb: {
    current: "Transporte Corporativo",
  },
  hero: {
    badge: "Transporte Corporativo",
    title: "Transporte Corporativo en Toda España",
    description:
      "Traslados fiables y profesionales para viajeros de negocio y equipos. Facturación centralizada, reserva prioritaria y conductores que entienden el ritmo del viaje de empresa.",
    ctaPrimary: "Solicita Presupuesto Gratis",
    ctaSecondaryLabel: "Viajes de Empresa sin Complicaciones",
    image:
      "https://images.unsplash.com/photo-1533478784933-5fdbddc8ea7c?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Profesionales caminando por un distrito financiero de una ciudad",
  },
  overview: {
    title: "Viajes de Empresa sin Complicaciones",
    paragraphs: [
      "Cuando vas contrarreloj, un traslado que llega tarde no es una simple molestia, es una reunión perdida. Nuestro servicio de transporte corporativo se basa en la puntualidad, la discreción y una facturación que simplifica los gastos de empresa.",
      "Desde la recogida de un solo ejecutivo hasta traslados coordinados para todo un equipo visitante, nos encargamos de la logística para que tus viajeros de negocio se centren en la reunión, no en el trayecto hasta ella.",
    ],
    image:
      "https://images.unsplash.com/photo-1758855307960-3a6339cb2c27?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "Sedán business plateado listo para un traslado corporativo",
  },
  whyChoose: {
    title: "Por Qué las Empresas Eligen Nuestro Transporte Corporativo",
    items: [
      {
        icon: "briefcase",
        title: "Facturación Centralizada",
        description: "Una única factura mensual para toda tu empresa, sin notas de gastos.",
      },
      {
        icon: "headset",
        title: "Reserva y Soporte Prioritarios",
        description: "Una línea dedicada para cambios de última hora y solicitudes urgentes.",
      },
      {
        icon: "shield-check",
        title: "Conductores Discretos y Profesionales",
        description: "Conductores verificados y formados para viajes ejecutivos y confidenciales.",
      },
      {
        icon: "plane",
        title: "Coordinación de Reuniones",
        description: "Controlamos los vuelos y ajustamos las recogidas para que nadie espere.",
      },
    ],
  },
  routes: {
    title: "Rutas Corporativas Populares",
    description: "Diseñadas según cómo se mueven realmente los viajeros de negocio por España.",
    items: [
      { title: "Aeropuerto de Madrid → Distrito de Negocios", description: "Traslado ejecutivo directo a las oficinas centrales" },
      { title: "Aeropuerto de Barcelona → Distrito 22@", description: "Traslado rápido al polo tecnológico de Barcelona" },
      { title: "Roadshows Multi-Ciudad", description: "Traslados coordinados por varias ciudades en un mismo viaje" },
      { title: "Visitas a Clientes", description: "Transporte puntual entre reuniones y oficinas" },
      { title: "Traslados de Congresos y Eventos", description: "Coordinación de grupos para delegados y asistentes" },
      { title: "Recepción Ejecutiva VIP", description: "Un conductor esperando en llegadas para invitados VIP" },
    ],
  },
  fleet: {
    vehicleKeys: ["executive-sedan", "business-sedan", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "¿Ofrecéis cuentas corporativas con facturación mensual?",
        answer: "Sí, configuramos facturación centralizada para empresas de cualquier tamaño, con una única factura mensual que cubre todas las reservas.",
      },
      {
        question: "¿Podéis gestionar reservas corporativas de última hora?",
        answer: "Sí, nuestra línea corporativa prioriza las solicitudes urgentes y suele confirmar un vehículo en menos de una hora, según disponibilidad.",
      },
      {
        question: "¿Vuestros conductores están formados para viajes ejecutivos o confidenciales?",
        answer: "Sí, los conductores asignados a cuentas corporativas están verificados y formados en discreción y trato profesional.",
      },
      {
        question: "¿Podéis coordinar traslados para un equipo visitante?",
        answer: "Sí, coordinamos habitualmente varias recogidas simultáneas para equipos y delegaciones que llegan juntas.",
      },
      {
        question: "¿Ofrecéis Wi-Fi en el vehículo para trabajar durante el trayecto?",
        answer: "Sí, el Wi-Fi está disponible bajo petición en nuestros vehículos business y ejecutivos sin coste adicional.",
      },
      {
        question: "¿Podemos configurar una reserva recurrente para rutas habituales?",
        answer: "Sí, se pueden organizar reservas recurrentes para rutas habituales de oficina a aeropuerto o entre oficinas con un gestor de cuenta dedicado.",
      },
      {
        question: "¿El precio es diferente para las cuentas corporativas?",
        answer: "Las cuentas corporativas se benefician de precios por volumen y una facturación centralizada más sencilla frente a las reservas individuales.",
      },
      {
        question: "¿Podéis organizar traslados para un congreso o evento?",
        answer: "Sí, gestionamos la logística de grupos para congresos, desde traslados VIP individuales hasta lanzaderas coordinadas para delegados.",
      },
    ],
  },
  cta: {
    title: "Reserva tu Traslado Corporativo",
    description: "¿Viajas por trabajo? Configura tu cuenta corporativa o solicita un presupuesto cerrado hoy mismo.",
    button: "Solicitar Presupuesto",
  },
};
