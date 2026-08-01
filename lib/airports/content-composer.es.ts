import type { AirportRecord } from "@/lib/airports/types";
import type { AirportPageDictionary } from "@/lib/airports/airport-page-types";
import { airports, getAirportPath } from "@/lib/airports/data";
import { pick, buildLengthAwareTitle, buildLengthAwareText } from "@/lib/airports/hash";
import { pickHeroImage, pickOverviewImage } from "@/lib/airports/images";

function titleLabel(shortName: string): string {
  return shortName.replace(/^Aeropuerto de /, "").replace(/^Helipuerto de /, "");
}

const titleActions = [
  "Reserva Online",
  "Reserva Hoy",
  "Presupuesto Gratis",
  "Viaja con Comodidad",
  "Precios Cerrados",
  "Disponible 24/7",
  "Reserva al Instante",
  "Conductores 5 Estrellas",
  "Contáctanos Hoy",
  "Reserva tu Trayecto",
];

const titleTemplates: ((label: string, action: string) => string)[] = [
  (label, action) => `Traslado Privado Aeropuerto ${label} – ${action}`,
  (label, action) => `Taxi Privado desde ${label} Aeropuerto – ${action}`,
  (label, action) => `Chófer Privado en Aeropuerto ${label} – ${action}`,
];

const descriptionTemplates: ((label: string) => string)[] = [
  (label) =>
    `Reserva un traslado privado con precio cerrado desde el Aeropuerto de ${label}. Conductores profesionales, seguimiento de vuelo y servicio 24 horas.`,
  (label) =>
    `Taxi privado y servicio con conductor desde el Aeropuerto de ${label}. Conductores profesionales, seguimiento de vuelo y precios cerrados puerta a puerta.`,
  (label) =>
    `Traslados fiables y con precio cerrado desde el Aeropuerto de ${label}. Conductores profesionales, seguimiento de vuelo y disponibilidad las 24 horas.`,
  (label) =>
    `Olvídate de la cola de taxis en el Aeropuerto de ${label}. Traslados privados puerta a puerta con precios cerrados y conductores profesionales, 24/7.`,
  (label) =>
    `Traslados privados premium desde el Aeropuerto de ${label}. Chóferes profesionales, seguimiento de vuelo, precios cerrados y servicio puerta a puerta.`,
];

const heroDescriptionTemplates: ((a: string, city: string) => string)[] = [
  (a, city) =>
    `Traslados privados con precio cerrado entre ${a} y ${city} o cualquier punto de la zona. Seguimiento de vuelo incluido y un conductor esperándote en llegadas.`,
  (a, city) =>
    `Olvídate de la cola de taxis en ${a}. Reserva un traslado privado a ${city} o tu destino final, con un conductor controlando tu vuelo y esperándote en llegadas.`,
  (a, city) =>
    `Un coche privado y un conductor profesional esperándote en ${a}, listos para llevarte a ${city} o donde continúe tu viaje, a un precio cerrado acordado de antemano.`,
  (a, city) =>
    `Aterriza en ${a} y ve directo a ${city} con comodidad. Precio cerrado, seguimiento de vuelo y un conductor con un cartel con tu nombre en llegadas.`,
];

const ctaPrimaryOptions = ["Solicita Presupuesto Gratis", "Reserva tu Trayecto", "Reserva Online", "Reserva al Instante"];
const ctaSecondaryOptions = ["Contáctanos Hoy", "Viaja con Comodidad", "Precios Cerrados", "Conductores Profesionales"];

const overviewTitleTemplates: ((a: string) => string)[] = [
  (a) => `Traslados Fiables desde ${a}`,
  (a) => `Tu Traslado Privado desde ${a}`,
  () => "Traslados al Aeropuerto sin Complicaciones",
  () => "Traslados Privados, Puerta a Puerta",
];

const overviewParagraphSlot1: ((a: string, region: string, dest: string) => string)[] = [
  (a, region, dest) =>
    `${a} conecta a los viajeros con ${region} y más allá, y llegar de la terminal a tu destino no debería ser la parte más complicada del viaje. Cada traslado se reserva por adelantado con precio cerrado, con un conductor profesional que controla tu vuelo y te espera en llegadas.`,
  (a, region, dest) =>
    `Aterrizar en ${a} significa que tu viaje casi ha terminado, no que acaba de empezar. Te recibimos en llegadas con un vehículo privado reservado de antemano, un precio cerrado acordado antes de volar y un conductor que ya conoce el camino hasta ${dest}.`,
  (a, region, dest) =>
    `Tanto si te diriges al centro como si sigues explorando ${region}, un traslado privado desde ${a} significa nada de colas de taxi, nada de trayectos compartidos y ninguna sorpresa en la tarifa.`,
];

const overviewParagraphSlot2: ((a: string, city: string, region: string, dest: string) => string)[] = [
  (a, city, region, dest) =>
    `Desde ${dest} hasta el resto de ${region}, nuestros conductores conocen las carreteras y el tráfico, y ajustan tu recogida automáticamente si tu vuelo se retrasa.`,
  (a, city, region, dest) =>
    `Nuestra red cubre ${city} y las localidades cercanas, con vehículos adaptados a viajeros solos, familias y grupos que llegan juntos a ${a}.`,
  (a, city, region, dest) =>
    `Tanto si te alojas cerca de ${city} como si sigues hacia ${region}, te asignamos el vehículo adecuado y un conductor que controla tu vuelo antes de que aterrices.`,
];

type WhyVariant = { title: string; description: string };

const whySlot1: ((a: string) => WhyVariant)[] = [
  (a) => ({ title: "Protección ante Retrasos", description: `Controlamos todos los vuelos que aterrizan en ${a} y ajustamos la recogida automáticamente, sin coste extra.` }),
  (a) => ({ title: "Seguimiento de Vuelo en Tiempo Real", description: `Tu conductor conoce tu hora exacta de aterrizaje en ${a}, aunque tu vuelo se retrase.` }),
  (a) => ({ title: "Control de Vuelo sin Esperas", description: `Aterriza en ${a} a cualquier hora y tu conductor ya se estará ajustando para recibirte.` }),
];

const whySlot2: ((a: string) => WhyVariant)[] = [
  (a) => ({ title: "Recepción en Llegadas", description: `Tu conductor te espera en ${a} con un cartel con tu nombre, listo para ayudarte con las maletas.` }),
  (a) => ({ title: "Recibimiento Personalizado", description: `Nada de buscar un conductor en ${a}, te recibimos justo en llegadas.` }),
  (a) => ({ title: "Recogida en la Zona de Llegadas", description: `Tu conductor te espera dentro de la zona de llegadas de ${a}, siempre.` }),
];

const whySlot3: ((a: string) => WhyVariant)[] = [
  (a) => ({ title: "Precio Cerrado al Aeropuerto", description: `Un único precio para todo tu trayecto desde ${a}, acordado antes de viajar.` }),
  (a) => ({ title: "Sin Taxímetro ni Sorpresas", description: `Tu tarifa desde ${a} queda fijada de antemano y no cambia al llegar.` }),
  (a) => ({ title: "Precios Transparentes", description: `Consulta tu tarifa exacta desde ${a} antes de reservar, sin añadidos posteriores.` }),
];

const whySlot4: (() => WhyVariant)[] = [
  () => ({ title: "Sillas Infantiles Disponibles", description: "Solicita una silla infantil o alzador para tu traslado sin coste adicional." }),
  () => ({ title: "Conductores con Licencia y Verificados", description: "Todos los conductores de nuestra red cuentan con licencia profesional y verificación de antecedentes." }),
  () => ({ title: "Familias Bienvenidas", description: "Sillas infantiles y espacio extra para equipaje disponibles bajo petición, sin coste adicional." }),
];

const ctaTitleTemplates: ((a: string) => string)[] = [
  (a) => `Reserva tu Traslado desde ${a}`,
  (a) => `Confirma tu Traslado desde ${a}`,
  (a) => `Consigue tu Presupuesto para ${a}`,
];

const ctaDescriptionTemplates: ((a: string) => string)[] = [
  (a) => `¿Aterrizas en ${a}? Consigue tu traslado con precio cerrado en menos de un minuto.`,
  (a) => `¿Vuelas a ${a}? Confirma tu traslado privado antes incluso de embarcar.`,
  (a) => `¿Viajas por ${a}? Fija tu precio cerrado ahora mismo.`,
];

function buildFaq(airport: AirportRecord) {
  const a = airport.shortNameEs;
  const dest = airport.destinations[0]?.nameEs ?? airport.cityEs;
  const driveTime = airport.destinations[0]?.driveTime ?? "un trayecto corto";
  const nearby = airport.nearbyAirports[0];

  const items = [
    {
      question: `¿Cómo reservo un traslado desde ${a}?`,
      answer: `Introduce ${a}, tu destino, los datos de tu vuelo y el número de pasajeros en nuestro formulario de presupuesto. Recibirás un precio cerrado y confirmación al instante por correo electrónico.`,
    },
    {
      question: "¿Qué ocurre si mi vuelo se retrasa?",
      answer: `Controlamos en tiempo real todos los vuelos que aterrizan en ${a}, así que tu conductor ajusta automáticamente la hora de recogida sin coste adicional.`,
    },
    {
      question: "¿Dónde me esperará mi conductor?",
      answer: `Tu conductor te esperará en la zona de llegadas de ${a} con un cartel con tu nombre, listo para ayudarte con el equipaje en cuanto aterrices.`,
    },
    {
      question: `¿Cuánto se tarda de ${a} a ${dest}?`,
      answer: `El trayecto de ${a} a ${dest} suele durar unos ${driveTime}, dependiendo del tráfico y la hora del día.`,
    },
    {
      question: "¿Cuánto equipaje puedo llevar?",
      answer: "Cada categoría de vehículo tiene un límite de equipaje indicado. Avísanos si llevas maletas extra u objetos voluminosos al reservar.",
    },
    {
      question: "¿Puedo reservar un traslado solo de ida?",
      answer: "Sí, puedes reservar un traslado solo de ida o de ida y vuelta desde tu aeropuerto, como prefieras.",
    },
    {
      question: "¿El precio es por persona o por vehículo?",
      answer: "Nuestros precios son por vehículo, no por persona, así que los grupos que viajan juntos suelen ahorrar frente a taxis individuales.",
    },
    {
      question: "¿Puedo solicitar una silla infantil?",
      answer: "Sí, las sillas infantiles y alzadores están disponibles bajo petición sin coste adicional. Solo indícalo al reservar.",
    },
  ];

  if (nearby) {
    items.push({
      question: "¿También cubrís traslados desde aeropuertos cercanos?",
      answer: `Sí, también damos servicio a aeropuertos cercanos, con una red de traslados que cubre rutas a aproximadamente ${nearby.driveTime} de ${a}.`,
    });
  }

  return items.slice(0, 8);
}

export function composeAirportEs(airport: AirportRecord): AirportPageDictionary {
  const a = airport.shortNameEs;
  const city = airport.cityEs;
  const region = airport.regionEs;
  const dest = airport.destinations[0]?.nameEs ?? city;
  const seed = airport.iata;

  const label = titleLabel(a);
  const title = buildLengthAwareTitle(titleTemplates, titleActions, label, seed, 1);
  const description = buildLengthAwareText(descriptionTemplates, label, seed, 2, 145, 160);
  const hero = pickHeroImage(airport.imageSeed);
  const overviewImg = pickOverviewImage(airport.imageSeed);

  const relatedItems = [
    { label: "Traslados al Aeropuerto", href: "/es/traslados-aeropuerto/" },
    { label: "Traslados entre Ciudades", href: "/es/traslados-entre-ciudades/" },
    { label: "Transporte Corporativo", href: "/es/transporte-corporativo/" },
    airport.hasCruisePort
      ? { label: "Traslados a Puertos de Cruceros", href: "/es/traslados-puertos-cruceros/" }
      : { label: "Chófer por Horas", href: "/es/chauffeur-por-horas/" },
  ];

  for (const ref of airport.nearbyAirports.slice(0, 2)) {
    const nearbyAirport = airports.find((item) => item.iata === ref.iata);
    if (nearbyAirport) {
      relatedItems.push({
        label: `Traslado ${nearbyAirport.shortNameEs}`,
        href: getAirportPath("es", nearbyAirport),
      });
    }
  }

  return {
    meta: {
      title,
      description,
      ogAlt: `Servicio de traslado privado en ${a}`,
    },
    breadcrumb: {
      current: `Traslado ${a}`,
    },
    hero: {
      badge: `Traslado ${a}`,
      title: `Traslado ${a}`,
      description: pick(heroDescriptionTemplates, seed, 3)(a, city),
      ctaPrimary: pick(ctaPrimaryOptions, seed, 4),
      ctaSecondaryLabel: pick(ctaSecondaryOptions, seed, 5),
      image: hero.src,
      imageAlt: hero.altEs,
    },
    overview: {
      title: pick(overviewTitleTemplates, seed, 6)(a),
      paragraphs: [
        pick(overviewParagraphSlot1, seed, 7)(a, region, dest),
        pick(overviewParagraphSlot2, seed, 8)(a, city, region, dest),
      ],
      image: overviewImg.src,
      imageAlt: overviewImg.altEs,
    },
    whyChoose: {
      title: `Por Qué Elegir Nuestro Traslado en ${a}`,
      items: [
        { icon: "plane", ...pick(whySlot1, seed, 9)(a) },
        { icon: "handshake", ...pick(whySlot2, seed, 10)(a) },
        { icon: "badge-euro", ...pick(whySlot3, seed, 11)(a) },
        { icon: "user-check", ...pick(whySlot4, seed, 12)() },
      ],
    },
    routes: {
      title: `Destinos Populares desde ${a}`,
      description: "Traslados privados con precio cerrado a los destinos más solicitados.",
      items: [...airport.destinations, ...airport.nearbyCities].slice(0, 6).map((place) => ({
        title: `${a} → ${place.nameEs}`,
        description: `~${place.driveTime} • traslado privado puerta a puerta`,
      })),
    },
    fleet: {
      vehicleKeys: ["business-sedan", "premium-suv", "mercedes-vclass"],
    },
    faq: {
      items: buildFaq(airport),
    },
    cta: {
      title: pick(ctaTitleTemplates, seed, 13)(a),
      description: pick(ctaDescriptionTemplates, seed, 14)(a),
      button: "Solicitar Presupuesto",
    },
    nearbyCitiesSection:
      airport.nearbyCities.length > 0
        ? {
            title: `Zonas Cercanas a ${a}`,
            items: airport.nearbyCities.map((place) => ({
              title: place.nameEs,
              description: `~${place.driveTime} desde ${a}`,
            })),
          }
        : null,
    relatedServices: {
      title: "Descubre Más Servicios",
      items: relatedItems,
    },
  };
}
