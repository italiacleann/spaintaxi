import type { CityRecord } from "@/lib/cities/types";
import type { CityPageDictionary } from "@/lib/cities/city-page-types";
import { cities, getCityPath } from "@/lib/cities/data";
import { airports, getAirportPath } from "@/lib/airports/data";
import { pick, buildLengthAwareTitle, buildLengthAwareText } from "@/lib/airports/hash";
import { pickHeroImage, pickOverviewImage } from "@/lib/cities/images";

const titleActions = [
  "Reserva Online",
  "Reserva Hoy",
  "Presupuesto Gratis",
  "Viaja con Comodidad",
  "Precios Cerrados",
  "Disponible 24/7",
  "Reserva al Instante",
  "Conductores Profesionales",
  "Contáctanos Hoy",
  "Reserva tu Trayecto",
];

const titleTemplates: ((label: string, action: string) => string)[] = [
  (label, action) => `Traslados Privados en ${label} – ${action}`,
  (label, action) => `Taxi y Chófer Privado en ${label} – ${action}`,
  (label, action) => `Reserva un Coche Privado en ${label} – ${action}`,
];

const descriptionTemplates: ((label: string) => string)[] = [
  (label) =>
    `Reserva un taxi privado, chófer y traslado al aeropuerto en ${label}. Conductores profesionales, precios cerrados, seguimiento de vuelo y disponibilidad 24 horas.`,
  (label) =>
    `Traslados privados y servicio de chófer profesional en ${label}. Conductores con licencia, precios cerrados y comodidad puerta a puerta en toda España, 24/7.`,
  (label) =>
    `Traslados privados fiables en ${label}. Conductores profesionales, precios cerrados, seguimiento de vuelo y servicio 24 horas.`,
  (label) =>
    `Olvídate de la parada de taxis en ${label}. Traslados puerta a puerta con precios cerrados, conductores profesionales, 24/7.`,
  (label) =>
    `Traslados privados y chófer en ${label}. Precios cerrados, conductores profesionales, seguimiento de vuelo y comodidad puerta a puerta.`,
  (label) =>
    `Traslado privado y chófer profesional en ${label}, con precios cerrados, seguimiento de vuelo y servicio disponible las 24 horas del día.`,
  (label) =>
    `Chófer privado y traslados con precio cerrado en ${label}. Conductores profesionales, seguimiento de vuelo y disponibilidad los 7 días de la semana.`,
];

const heroDescriptionTemplates: ((city: string, region: string) => string)[] = [
  (city, region) =>
    `Servicio de taxi y chófer privado con precio cerrado en ${city} y en toda ${region}. Conductores profesionales y disponibilidad 24 horas.`,
  (city, region) =>
    `Reserva un coche privado en ${city} para traslados al aeropuerto, excursiones por ${region} o trayectos punto a punto, con precio cerrado.`,
  (city, region) =>
    `Desde recogidas en el aeropuerto hasta excursiones por ${region}, nuestros conductores en ${city} están listos cuando lo necesites.`,
  (city, region) =>
    `Traslados privados en ${city}, con precio cerrado y conductores profesionales listos para el aeropuerto, la ciudad o trayectos por ${region}.`,
];

const ctaPrimaryOptions = ["Solicita Presupuesto Gratis", "Reserva tu Trayecto", "Reserva Online", "Reserva al Instante"];
const ctaSecondaryOptions = ["Contáctanos Hoy", "Viaja con Comodidad", "Precios Cerrados", "Conductores Profesionales"];

const overviewTitleTemplates: ((city: string) => string)[] = [
  (city) => `Traslados Privados en ${city}`,
  (city) => `Tu Conductor Privado en ${city}`,
  () => "Taxi y Chófer sin Complicaciones",
  () => "Traslados Privados, Puerta a Puerta",
];

const overviewParagraphSlot1: ((city: string, region: string, airport: string) => string)[] = [
  (city, region, airport) =>
    `Tanto si llegas a través de ${airport} como si ya estás explorando ${region}, moverte por ${city} no debería ser la parte más complicada del viaje. Cada traslado se reserva por adelantado con precio cerrado y un conductor profesional listo cuando lo necesites.`,
  (city, region, airport) =>
    `${city} es uno de los destinos más solicitados de nuestra red, conectando a los viajeros con ${region} y más allá. Te asignamos un vehículo y conductor privado, tanto si llegas desde ${airport} como si continúas tu viaje.`,
  (city, region, airport) =>
    `Desde viajes de negocios hasta vacaciones en familia, un traslado privado en ${city} significa nada de colas de taxi, nada de trayectos compartidos y ninguna sorpresa en la tarifa, con conductores que conocen bien ${region}.`,
];

const overviewParagraphSlot2: ((city: string, region: string, destination: string) => string)[] = [
  (city, region, destination) =>
    `Más allá de ${city}, nuestros conductores llevan habitualmente a los viajeros de excursión a ${destination} y otros puntos destacados de ${region}, con la misma comodidad de precio cerrado.`,
  (city, region, destination) =>
    `Nuestra red en ${city} y alrededores cubre hoteles, zonas de negocio y rutas populares como ${destination}, con vehículos adaptados a viajeros solos, parejas y grupos.`,
  (city, region, destination) =>
    `Tanto si te alojas en el centro de ${city} como si planeas una excursión a ${destination}, te asignamos el vehículo adecuado y un conductor que conoce bien las carreteras.`,
];

type WhyVariant = { title: string; description: string };

const whySlot1: ((city: string) => WhyVariant)[] = [
  (city) => ({ title: "Precios Fijos y Transparentes", description: `Tu tarifa en ${city} se acuerda antes de viajar, sin taxímetro ni sorpresas al llegar.` }),
  (city) => ({ title: "Sin Taxímetro ni Sorpresas", description: `Consulta tu precio exacto para ${city} antes de reservar, sin añadidos posteriores.` }),
  (city) => ({ title: "Precios Cerrados, Siempre", description: `Un único precio acordado para todo tu trayecto en ${city}, confirmado al reservar.` }),
];

const whySlot2: ((city: string) => WhyVariant)[] = [
  (city) => ({ title: "Conductores con Licencia", description: `Todos los conductores que operan en ${city} cuentan con licencia profesional y verificación de antecedentes.` }),
  (city) => ({ title: "Conductores Locales con Experiencia", description: `Nuestros conductores en ${city} conocen las carreteras, el tráfico y los atajos.` }),
  (city) => ({ title: "Conductores Verificados y Asegurados", description: `Todos los conductores que operan en ${city} cuentan con licencia, seguro y verificación.` }),
];

const whySlot3: (() => WhyVariant)[] = [
  () => ({ title: "Disponible 24/7", description: "Vuelo de madrugada o llegada nocturna, nuestros conductores están listos a cualquier hora." }),
  () => ({ title: "Servicio las 24 Horas", description: "Reserva un traslado a cualquier hora, día o noche, sin recargo adicional." }),
  () => ({ title: "Siempre Disponibles", description: "Nuestros conductores operan 24 horas al día, los 7 días de la semana, en toda España." }),
];

const whySlot4: (() => WhyVariant)[] = [
  () => ({ title: "Comodidad Puerta a Puerta", description: "Cada traslado es puerta a puerta, con ayuda para cargar y descargar el equipaje." }),
  () => ({ title: "Sillas Infantiles Disponibles", description: "Solicita una silla infantil o alzador para tu traslado sin coste adicional." }),
  () => ({ title: "Familias y Grupos Bienvenidos", description: "Vehículos más grandes y espacio extra para equipaje disponibles bajo petición." }),
];

const ctaTitleTemplates: ((city: string) => string)[] = [
  (city) => `Reserva tu Traslado en ${city}`,
  (city) => `Confirma tu Traslado en ${city}`,
  (city) => `Consigue tu Presupuesto para ${city}`,
];

const ctaDescriptionTemplates: ((city: string) => string)[] = [
  (city) => `¿Viajas a ${city}? Consigue tu traslado con precio cerrado en menos de un minuto.`,
  (city) => `¿Te diriges a ${city}? Confirma tu traslado privado antes incluso de salir.`,
  (city) => `¿Explorando ${city}? Fija tu precio cerrado ahora mismo.`,
];

const airportLinkTitleTemplates: ((airport: string) => string)[] = [
  (airport) => `¿Vuelas a ${airport}?`,
  (airport) => `¿Aterrizas en ${airport}?`,
  (airport) => `¿Llegas por ${airport}?`,
];

function buildFaq(city: CityRecord, airportName: string) {
  const name = city.nameEs;
  const dest = city.destinations[0]?.nameEs ?? city.regionEs;
  const driveTime = city.destinations[0]?.driveTime ?? "un trayecto corto";

  return [
    {
      question: `¿Cómo reservo un traslado privado en ${name}?`,
      answer: `Introduce ${name}, tu destino y el número de pasajeros en nuestro formulario de presupuesto. Recibirás un precio cerrado y confirmación al instante por correo electrónico.`,
    },
    {
      question: `¿Ofrecéis traslados al aeropuerto desde y hacia ${name}?`,
      answer: `Sí, operamos traslados privados regulares entre ${airportName} y ${name}, con seguimiento de vuelo incluido sin coste adicional.`,
    },
    {
      question: `¿Puedo reservar una excursión de ${name} a ${dest}?`,
      answer: `Sí, las excursiones a ${dest} suelen tardar unos ${driveTime} por trayecto, y se pueden reservar solo de ida o de ida y vuelta.`,
    },
    {
      question: "¿El precio es por persona o por vehículo?",
      answer: "Nuestros precios son por vehículo, no por persona, así que los grupos que viajan juntos suelen ahorrar frente a taxis individuales.",
    },
    {
      question: "¿Puedo solicitar una silla infantil?",
      answer: "Sí, las sillas infantiles y alzadores están disponibles bajo petición sin coste adicional. Solo indícalo al reservar.",
    },
    {
      question: `¿Dais servicio a hoteles en ${name}?`,
      answer: `Sí, nuestros conductores recogen y dejan pasajeros habitualmente en hoteles de ${name} y sus alrededores.`,
    },
    {
      question: "¿Puedo reservar un traslado solo de ida?",
      answer: "Sí, puedes reservar un traslado solo de ida o de ida y vuelta, como prefieras.",
    },
    {
      question: "¿Cuánto equipaje puedo llevar?",
      answer: "Cada categoría de vehículo tiene un límite de equipaje indicado. Avísanos si llevas maletas extra u objetos voluminosos al reservar.",
    },
  ];
}

export function composeCityEs(city: CityRecord): CityPageDictionary {
  const name = city.nameEs;
  const region = city.regionEs;
  const dest = city.destinations[0]?.nameEs ?? region;
  const seed = `city-${city.slugEn}`;
  const airport = airports.find((item) => item.iata === city.mainAirportIata);
  const airportName = airport?.shortNameEs ?? "el aeropuerto más cercano";

  const title = buildLengthAwareTitle(titleTemplates, titleActions, name, seed, 1);
  const description = buildLengthAwareText(descriptionTemplates, name, seed, 2, 145, 160);
  const hero = pickHeroImage(city.imageSeed);
  const overviewImg = pickOverviewImage(city.imageSeed);

  const relatedItems = [
    { label: "Traslados al Aeropuerto", href: "/es/traslados-aeropuerto/" },
    { label: "Traslados entre Ciudades", href: "/es/traslados-entre-ciudades/" },
    { label: "Transporte Corporativo", href: "/es/transporte-corporativo/" },
    city.hasCruisePort
      ? { label: "Traslados a Puertos de Cruceros", href: "/es/traslados-puertos-cruceros/" }
      : { label: "Chófer por Horas", href: "/es/chauffeur-por-horas/" },
  ];

  if (airport) {
    relatedItems.push({ label: `Traslado ${airport.shortNameEs}`, href: getAirportPath("es", airport) });
  }

  for (const otherCity of cities) {
    if (otherCity.slugEs === city.slugEs) continue;
    if (otherCity.regionEs === city.regionEs && relatedItems.length < 7) {
      relatedItems.push({ label: `Traslado ${otherCity.nameEs}`, href: getCityPath("es", otherCity) });
    }
  }

  return {
    meta: {
      title,
      description,
      ogAlt: `Servicio de traslado privado en ${name}`,
    },
    breadcrumb: {
      current: `Traslado ${name}`,
    },
    hero: {
      badge: `Traslado ${name}`,
      title: `Traslados Privados en ${name}`,
      description: pick(heroDescriptionTemplates, seed, 3)(name, region),
      ctaPrimary: pick(ctaPrimaryOptions, seed, 4),
      ctaSecondaryLabel: pick(ctaSecondaryOptions, seed, 5),
      image: hero.src,
      imageAlt: hero.altEs,
    },
    overview: {
      title: pick(overviewTitleTemplates, seed, 6)(name),
      paragraphs: [
        pick(overviewParagraphSlot1, seed, 7)(name, region, airportName),
        pick(overviewParagraphSlot2, seed, 8)(name, region, dest),
      ],
      image: overviewImg.src,
      imageAlt: overviewImg.altEs,
    },
    whyChoose: {
      title: `Por Qué Elegir Nuestro Traslado en ${name}`,
      items: [
        { icon: "badge-euro", ...pick(whySlot1, seed, 9)(name) },
        { icon: "shield-check", ...pick(whySlot2, seed, 10)(name) },
        { icon: "clock", ...pick(whySlot3, seed, 11)() },
        { icon: "car-front", ...pick(whySlot4, seed, 12)() },
      ],
    },
    routes: {
      title: `Excursiones Populares desde ${name}`,
      description: "Traslados privados con precio cerrado a los destinos más solicitados.",
      items: city.destinations.map((place) => ({
        title: `${name} → ${place.nameEs}`,
        description: `~${place.driveTime} • traslado privado puerta a puerta`,
      })),
    },
    fleet: {
      vehicleKeys: ["business-sedan", "premium-suv", "mercedes-vclass"],
    },
    faq: {
      items: buildFaq(city, airportName),
    },
    cta: {
      title: pick(ctaTitleTemplates, seed, 13)(name),
      description: pick(ctaDescriptionTemplates, seed, 14)(name),
      button: "Solicitar Presupuesto",
    },
    airportLink: {
      title: pick(airportLinkTitleTemplates, seed, 15)(airportName),
      description: airport
        ? `Reserva un traslado privado entre ${airport.shortNameEs} y ${name}. ~${city.airportDriveTime} de trayecto, con seguimiento de vuelo incluido.`
        : `Reserva un traslado privado entre tu aeropuerto de llegada y ${name}, con seguimiento de vuelo incluido.`,
      linkLabel: `Ver Traslado ${airportName}`,
      href: airport ? getAirportPath("es", airport) : "/es/aeropuertos/",
    },
    relatedServices: {
      title: "Descubre Más Servicios",
      items: relatedItems,
    },
  };
}
