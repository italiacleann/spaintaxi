import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export const cruisePortTransfersEs: ServicePageDictionary = {
  meta: {
    title: "Traslados a Puertos de Cruceros en España – Precios Cerrados",
    description:
      "Traslados privados entre puertos de crucero, aeropuertos y ciudades de España. Recogidas cronometradas, conductores profesionales, precios cerrados.",
    ogAlt: "Gran crucero atracado en un puerto español",
  },
  breadcrumb: {
    current: "Traslados a Puertos de Cruceros",
  },
  hero: {
    badge: "Traslados a Puertos de Cruceros",
    title: "Traslados a Puertos de Cruceros en España",
    description:
      "Recogidas cronometradas que te llevan del puerto al aeropuerto, o del puerto al hotel, sin estrés. Un conductor que controla el horario de tu barco y te espera en la terminal.",
    ctaPrimary: "Solicita Presupuesto Gratis",
    ctaSecondaryLabel: "Reserva tu Trayecto",
    image:
      "https://images.unsplash.com/photo-1764609287343-7cb772b75c55?w=1600&h=1400&fit=crop&q=80",
    imageAlt: "Gran crucero blanco atracado en un puerto español",
  },
  overview: {
    title: "Traslados de Puerto sin Estrés",
    paragraphs: [
      "El día del desembarco es impredecible: los horarios de atraque cambian, las terminales están abarrotadas, y lo último que necesitas es una cola de taxis con un vuelo que coger. Controlamos el horario de tu barco y ajustamos tu recogida en consecuencia.",
      "Tu conductor te espera en la terminal con un cartel con tu nombre, te ayuda con el equipaje y te lleva directamente al aeropuerto, a tu hotel o a la ciudad, a un precio acordado antes incluso de zarpar.",
    ],
    image:
      "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?w=1200&h=1400&fit=crop&q=80",
    imageAlt: "SUV premium esperando para un traslado desde el puerto de cruceros",
  },
  whyChoose: {
    title: "Por Qué Elegir Nuestro Traslado de Crucero",
    items: [
      {
        icon: "ship",
        title: "Control del Horario de Atraque",
        description: "Controlamos el horario de tu barco y ajustamos la recogida automáticamente.",
      },
      {
        icon: "handshake",
        title: "Recogida Directa en la Terminal",
        description: "Tu conductor te espera justo a la salida de la terminal, sin tener que buscarlo.",
      },
      {
        icon: "car-front",
        title: "Vehículos para Equipaje de Crucero",
        description: "Amplio espacio para el equipaje de crucero, adaptado al tamaño de tu grupo.",
      },
      {
        icon: "plane",
        title: "Conexión Puerto-Aeropuerto",
        description: "Tiempos coordinados para que una conexión ajustada no se convierta en un vuelo perdido.",
      },
    ],
  },
  routes: {
    title: "Rutas de Puerto Populares",
    description: "Traslados con precio cerrado entre los grandes puertos de crucero de España y más allá.",
    items: [
      { title: "Puerto de Barcelona → Aeropuerto de Barcelona", description: "~20 min • cronometrado para tu vuelo" },
      { title: "Puerto de Barcelona → Centro de la Ciudad", description: "~15 min • directo a tu hotel" },
      { title: "Puerto de Valencia → Valencia Ciudad", description: "~15 min • traslado rápido del puerto a la ciudad" },
      { title: "Puerto de Palma → Aeropuerto de Palma", description: "~15 min • ruta de puerto a aeropuerto en la isla" },
      { title: "Puerto de Málaga → Marbella", description: "~50 min • traslado a la Costa del Sol" },
      { title: "Puerto de Málaga → Aeropuerto de Málaga", description: "~20 min • servicio de conexión cronometrado" },
    ],
  },
  fleet: {
    vehicleKeys: ["premium-suv", "business-sedan", "mercedes-vclass"],
  },
  faq: {
    items: [
      {
        question: "¿Qué pasa si mi crucero atraca tarde?",
        answer: "Controlamos los horarios de atraque y ajustamos automáticamente la hora de recogida, sin coste adicional.",
      },
      {
        question: "¿Dónde exactamente me esperará mi conductor?",
        answer: "Tu conductor te espera justo a la salida de la terminal de cruceros con un cartel con tu nombre, listo para ayudarte con el equipaje.",
      },
      {
        question: "¿Podéis cronometrar un traslado para coger un vuelo tras desembarcar?",
        answer: "Sí, coordinamos los tiempos de puerto a aeropuerto para darte un margen de seguridad antes de tu vuelo, según la hora prevista de atraque de tu barco.",
      },
      {
        question: "¿Cuánto equipaje admiten los traslados de crucero?",
        answer: "Nuestras opciones de SUV premium y Clase V están pensadas para el equipaje típico de un crucero; indícanos el tamaño de tu grupo y el número de maletas al reservar.",
      },
      {
        question: "¿Podéis recoger a un grupo grande que desembarca junto?",
        answer: "Sí, coordinamos habitualmente traslados para grupos y podemos organizar varios vehículos para grupos numerosos.",
      },
      {
        question: "¿Ofrecéis traslados a varios puertos de crucero en España?",
        answer: "Sí, cubrimos todos los grandes puertos de crucero de España, incluyendo Barcelona, Valencia, Palma y Málaga.",
      },
      {
        question: "¿Puedo reservar un traslado solo de ida desde el puerto?",
        answer: "Sí, tanto los traslados de ida como los de ida y vuelta están disponibles, según se ajuste a tu itinerario.",
      },
      {
        question: "¿El precio cambia si mi barco llega antes o después de lo previsto?",
        answer: "No, tu precio cerrado se mantiene igual sea cual sea el retraso en el atraque; para eso está precisamente nuestro control de horarios.",
      },
    ],
  },
  cta: {
    title: "Reserva tu Traslado de Crucero",
    description: "¿Desembarcas próximamente? Confirma tu traslado de puerto con precio cerrado antes de zarpar.",
    button: "Solicitar Presupuesto",
  },
};
