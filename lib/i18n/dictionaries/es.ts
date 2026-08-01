import type { Dictionary } from "@/lib/i18n/types";

export const es: Dictionary = {
  meta: {
    title:
      "Traslados Privados en España | Traslados al Aeropuerto, Taxi y Servicio con Conductor",
    titleTemplate: "%s | Spain Private Transfers",
    description:
      "Reserva traslados privados, taxis al aeropuerto y servicios con conductor en toda España. Precios fijos y conductores profesionales las 24 horas.",
    keywords: [
      "traslados privados España",
      "taxi aeropuerto España",
      "traslado privado aeropuerto",
      "traslado aeropuerto Barcelona",
      "taxi aeropuerto Madrid",
      "traslado privado Málaga",
    ],
    ogAlt: "Spain Private Transfers - vehículo premium de traslado privado",
  },
  header: {
    getQuote: "Solicitar Presupuesto",
    openMenu: "Abrir menú",
    menuTitle: "Menú",
  },
  nav: [
    { label: "Aeropuertos", href: "/es/aeropuertos/" },
    { label: "Ciudades", href: "/es/ciudades/" },
    { label: "Servicios", href: "/es/#services" },
    { label: "Rutas", href: "/es/aeropuertos/" },
    { label: "Blog", href: "/es/blog/" },
    { label: "Sobre Nosotros", href: "/es/sobre-nosotros/" },
  ],
  hero: {
    eyebrow: "Privado y puntual, siempre",
    title: "Traslados Privados por Toda España",
    description:
      "Reserva un traslado privado con conductor y precio cerrado entre cualquier aeropuerto, ciudad o zona costera de España. Seguimiento de vuelo, conductores profesionales y asistencia 24 horas incluidos de serie.",
    ratingSuffix: "4,9/5 según más de 12.000 viajeros",
    transfersCompleted: "Más de 50.000 traslados realizados",
    formTitle: "Consigue tu Presupuesto al Instante",
    formSubtitle: "Precio cerrado, confirmado en segundos.",
    formNote:
      "No se requiere pago ahora. Cancelación gratuita hasta 24 horas antes de la recogida.",
  },
  quoteForm: {
    pickupLabel: "Lugar de recogida",
    pickupPlaceholder: "Aeropuerto, hotel o dirección",
    dropoffLabel: "Lugar de destino",
    dropoffPlaceholder: "Aeropuerto, hotel o dirección",
    dateLabel: "Fecha",
    timeLabel: "Hora",
    passengersLabel: "Pasajeros",
    passengerOptions: [
      { value: "1-2", label: "1-2 pasajeros" },
      { value: "3-4", label: "3-4 pasajeros" },
      { value: "5-6", label: "5-6 pasajeros" },
      { value: "7-8", label: "7-8 pasajeros" },
    ],
    submit: "Continuar con la Reserva",
  },
  trustBar: [
    {
      icon: "clock",
      title: "Servicio 24/7",
      description: "De día o de noche, estamos en la carretera en cuanto aterrizas.",
    },
    {
      icon: "badge-euro",
      title: "Precios Cerrados",
      description: "El precio que te confirmamos es el que pagas. Sin sorpresas.",
    },
    {
      icon: "plane",
      title: "Seguimiento de Vuelo",
      description:
        "Controlamos tu vuelo y ajustamos la recogida automáticamente si hay retrasos.",
    },
    {
      icon: "user-check",
      title: "Conductores Profesionales",
      description: "Con licencia, verificados y con dominio de español e inglés.",
    },
  ],
  airportsSection: {
    eyebrow: "Traslados al Aeropuerto",
    title: "Traslados Privados desde Todos los Grandes Aeropuertos de España",
    description:
      "¿Aterrizas en cualquier punto de España? Ya estamos allí. Elige tu aeropuerto y reserva un traslado con precio cerrado y seguimiento de vuelo en tiempo real.",
    transfersTo: "Traslados a",
  },
  airports: [
    {
      name: "Aeropuerto de Madrid–Barajas",
      code: "MAD",
      city: "Madrid",
      href: "/es/traslado-aeropuerto-madrid/",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=80",
      imageAlt: "Avión comercial preparándose para despegar en la puerta de embarque",
    },
    {
      name: "Aeropuerto de Barcelona–El Prat",
      code: "BCN",
      city: "Barcelona",
      href: "/es/traslado-aeropuerto-barcelona/",
      image:
        "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=800&h=600&fit=crop&q=80",
      imageAlt: "Ala de un avión sobre las nubes durante un vuelo a España",
    },
    {
      name: "Aeropuerto de Málaga–Costa del Sol",
      code: "AGP",
      city: "Málaga",
      href: "/es/traslado-aeropuerto-malaga/",
      image:
        "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800&h=600&fit=crop&q=80",
      imageAlt: "Avión rodando por la pista en un aeropuerto costero",
    },
    {
      name: "Aeropuerto de Alicante–Elche",
      code: "ALC",
      city: "Alicante",
      href: "/es/traslado-aeropuerto-alicante/",
      image:
        "https://images.unsplash.com/photo-1528184039930-bd03972bd974?w=800&h=600&fit=crop&q=80",
      imageAlt: "Interior de una terminal aeroportuaria con amplios ventanales",
    },
    {
      name: "Aeropuerto de Palma de Mallorca",
      code: "PMI",
      city: "Palma de Mallorca",
      href: "/es/traslado-aeropuerto-palma/",
      image:
        "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800&h=600&fit=crop&q=80",
      imageAlt: "Vista de la plataforma del aeropuerto desde la terminal",
    },
    {
      name: "Aeropuerto de Valencia",
      code: "VLC",
      city: "Valencia",
      href: "/es/traslado-aeropuerto-valencia/",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&q=80",
      imageAlt: "Avión descendiendo hacia un aeropuerto costero español",
    },
  ],
  destinationsSection: {
    eyebrow: "Destinos Populares",
    title: "Descubre España, un Trayecto Privado a la Vez",
    description:
      "De la Barcelona de Gaudí a los pueblos blancos de Andalucía, te llevamos con comodidad estés donde estés.",
    viewTransfers: "Ver traslados",
  },
  destinations: [
    {
      name: "Barcelona",
      description: "Arquitectura de Gaudí, playas y energía mediterránea.",
      href: "/es/barcelona/",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Torres de la Sagrada Família sobre el perfil urbano de Barcelona",
    },
    {
      name: "Madrid",
      description: "La capital de España, de los palacios reales a los bares de tapas.",
      href: "/es/madrid/",
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Vista aérea de la Gran Vía de Madrid al atardecer",
    },
    {
      name: "Sevilla",
      description: "Flamenco, naranjos y encanto andaluz.",
      href: "/es/sevilla/",
      image:
        "https://images.unsplash.com/photo-1688404808661-92f72f2ea258?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Fuente y edificio monumental de la Plaza de España en Sevilla",
    },
    {
      name: "Valencia",
      description: "Arquitectura futurista y costa mediterránea dorada.",
      href: "/es/valencia/",
      image:
        "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Arquitectura moderna y estanques reflectantes en Valencia",
    },
    {
      name: "Málaga",
      description: "Puerta de la Costa del Sol, con sol, arte y calles del casco antiguo.",
      href: "/es/malaga/",
      image:
        "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Costa mediterránea soleada cerca de Málaga",
    },
    {
      name: "Ibiza",
      description: "Calas turquesas, atardeceres y vida nocturna insular.",
      href: "/es/ibiza/",
      image:
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&h=1000&fit=crop&q=80",
      imageAlt: "Aguas turquesas en la costa de Ibiza",
    },
  ],
  servicesSection: {
    eyebrow: "Nuestros Servicios",
    title: "Una Flota, Todo Tipo de Viaje",
    description: "Sea cual sea el motivo de tu viaje a España, tenemos un traslado pensado para ti.",
    learnMore: "Saber más",
  },
  services: [
    {
      icon: "plane",
      title: "Traslados al Aeropuerto",
      description:
        "Trayectos directos y privados entre cualquier aeropuerto español y tu destino.",
      href: "/es/traslados-aeropuerto/",
    },
    {
      icon: "map-pinned",
      title: "Traslados entre Ciudades",
      description: "Traslados de larga distancia cómodos entre ciudades españolas.",
      href: "/es/traslados-entre-ciudades/",
    },
    {
      icon: "timer",
      title: "Chófer por Horas",
      description: "Reserva un conductor por horas para reuniones, visitas turísticas o gestiones.",
      href: "/es/chauffeur-por-horas/",
    },
    {
      icon: "briefcase",
      title: "Transporte Corporativo",
      description: "Traslados fiables y facturables para viajeros de negocio y equipos.",
      href: "/es/transporte-corporativo/",
    },
    {
      icon: "users",
      title: "Traslados para Grupos y Eventos",
      description: "Bodas, congresos y salidas en grupo, gestionados sin complicaciones.",
      href: "/es/traslados-para-grupos-y-eventos/",
    },
    {
      icon: "ship",
      title: "Traslados a Puertos de Cruceros",
      description: "Recogidas puntuales para llegar del puerto al aeropuerto sin estrés.",
      href: "/es/traslados-puertos-cruceros/",
    },
  ],
  whyChooseSection: {
    eyebrow: "Por Qué Elegirnos",
    title: "Viaja Como España Se Merece",
    description:
      "Hemos diseñado nuestro servicio en torno a lo que más importa: aterrizar puntual, que te reciban con una sonrisa y no preocuparte nunca por la tarifa.",
    imageAlt: "Conductor profesional ayudando a un viajero con el equipaje",
  },
  whyChooseUs: [
    {
      icon: "badge-euro",
      title: "Precios Cerrados, Sin Sorpresas",
      description:
        "Tu tarifa queda confirmada al reservar. Sin taxímetro, sin tarifas dinámicas ni cargos ocultos.",
    },
    {
      icon: "shield-check",
      title: "Conductores con Licencia y Seguro",
      description:
        "Todos nuestros conductores están licenciados, verificados y con seguro completo.",
    },
    {
      icon: "plane",
      title: "Seguimiento de Vuelo Incluido",
      description:
        "Controlamos tu vuelo en tiempo real, así que tu conductor siempre está ahí, aunque aterrices tarde.",
    },
    {
      icon: "clock",
      title: "Disponibles las 24 Horas",
      description: "Vuelo de madrugada o llegada a medianoche: nuestros conductores están listos las 24 horas.",
    },
    {
      icon: "car-front",
      title: "Vehículos Premium e Impecables",
      description: "Flota moderna y climatizada, mantenida con un estándar premium.",
    },
    {
      icon: "headset",
      title: "Atención Humana Real",
      description: "Un equipo dedicado listo para ayudarte antes, durante y después de tu viaje.",
    },
  ],
  processSection: {
    eyebrow: "Cómo Funciona",
    title: "Reservar tu Traslado Lleva Menos de 2 Minutos",
  },
  bookingSteps: [
    {
      step: "01",
      icon: "calendar-check",
      title: "Reserva Online en Minutos",
      description: "Introduce tu lugar de recogida, destino, fecha y número de pasajeros.",
    },
    {
      step: "02",
      icon: "mail-check",
      title: "Recibe Confirmación al Instante",
      description: "Recibe tu precio cerrado y la confirmación de reserva por correo electrónico.",
    },
    {
      step: "03",
      icon: "handshake",
      title: "Conoce a tu Conductor",
      description: "Tu conductor te espera en llegadas con un cartel con tu nombre, listo para salir.",
    },
    {
      step: "04",
      icon: "car-front",
      title: "Disfruta del Trayecto",
      description: "Siéntate en un vehículo premium y relájate hasta tu destino.",
    },
  ],
  fleetSection: {
    eyebrow: "Nuestra Flota",
    title: "Un Vehículo Premium para Cada Viaje",
    description:
      "Vehículos modernos e impecables, adaptados al tamaño de tu grupo y tus necesidades de confort.",
  },
  fleet: [
    {
      name: "Sedán Ejecutivo",
      passengers: "1-3 pasajeros",
      luggage: "2 maletas",
      description: "Un trayecto refinado y cómodo para viajeros individuales y parejas.",
      features: ["Interior de piel", "Aire acondicionado", "Agua embotellada"],
      image:
        "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=900&h=700&fit=crop&q=80",
      imageAlt: "Sedán ejecutivo negro estacionado para un traslado privado al aeropuerto",
    },
    {
      name: "SUV Premium",
      passengers: "1-5 pasajeros",
      luggage: "4 maletas",
      description: "Espacio y confort extra para familias y grupos pequeños.",
      features: ["Espacio extra para las piernas", "Silla infantil bajo petición", "Wi-Fi a bordo"],
      image:
        "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?w=900&h=700&fit=crop&q=80",
      imageAlt: "SUV Mercedes-Benz premium listo para un traslado privado",
    },
    {
      name: "Monovolumen de Lujo",
      passengers: "1-8 pasajeros",
      luggage: "8 maletas",
      description: "Ideal para grupos, familias y equipos de trabajo que viajan juntos.",
      features: ["Cabina amplia", "Amplio espacio para equipaje", "Salidas de aire individuales"],
      image:
        "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=900&h=700&fit=crop&q=80",
      imageAlt: "Amplio monovolumen de lujo para traslados de grupo al aeropuerto",
    },
  ],
  testimonialsSection: {
    eyebrow: "Opiniones de Clientes",
    title: "La Confianza de Viajeros de Todo el Mundo",
    description: "Viajes reales, precios cerrados reales, conductores esperando en llegadas.",
  },
  testimonials: [
    {
      name: "Emma Whitfield",
      location: "Londres, Reino Unido",
      rating: 5,
      quote:
        "Nuestro vuelo se retrasó dos horas y el conductor seguía esperando cuando aterrizamos. Todo perfecto, muy profesional y el coche impecable.",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Lucas Bergmann",
      location: "Múnich, Alemania",
      rating: 5,
      quote:
        "Reservamos un traslado de Madrid a Toledo para un viaje de trabajo. Precio cerrado, puntual, y el conductor sabía exactamente adónde ir.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sophie Martin",
      location: "París, Francia",
      rating: 5,
      quote:
        "Viajar con tres niños nunca es fácil, pero las sillas infantiles estaban listas y el conductor fue muy paciente. Totalmente recomendable.",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Daniel Cohen",
      location: "Tel Aviv, Israel",
      rating: 5,
      quote:
        "Lo usamos para un traslado de grupo desde el aeropuerto de Barcelona hasta el hotel. Éramos diez, una furgoneta, cero estrés. Repetiremos seguro.",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    {
      name: "Isabella Conti",
      location: "Milán, Italia",
      rating: 5,
      quote:
        "La herramienta de presupuesto al instante hizo que reservar fuera facilísimo, y el precio coincidió exactamente con lo que pagamos. Sin extras ocultos.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ],
  faqSection: {
    eyebrow: "Preguntas Frecuentes",
    title: "Resolvemos tus Dudas",
    description:
      "Todo lo que necesitas saber antes de reservar. ¿No encuentras tu respuesta? Escríbenos cuando quieras.",
  },
  faqs: [
    {
      question: "¿Cómo se calcula el precio de mi traslado?",
      answer:
        "Tu precio queda cerrado en el momento de la reserva según el punto de recogida, el destino, el tipo de vehículo y el número de pasajeros. No hay taxímetro ni cargos sorpresa al llegar.",
    },
    {
      question: "¿Qué ocurre si mi vuelo se retrasa?",
      answer:
        "Controlamos todos los vuelos en tiempo real con tu número de vuelo, así que tu conductor ajusta automáticamente la hora de recogida sin coste adicional.",
    },
    {
      question: "¿Puedo pedir una silla infantil?",
      answer:
        "Sí, las sillas infantiles y alzadores están disponibles bajo petición sin coste adicional. Solo tienes que indicarlo al solicitar tu presupuesto.",
    },
    {
      question: "¿Cómo y cuándo pago?",
      answer:
        "Puedes pagar de forma segura online al reservar, o en el vehículo con tarjeta o efectivo, según la opción que elijas al finalizar la reserva.",
    },
    {
      question: "¿Puedo cancelar o modificar mi reserva?",
      answer:
        "Sí, la mayoría de las reservas se pueden modificar o cancelar sin coste hasta 24 horas antes de la recogida. Los detalles están en tu correo de confirmación.",
    },
    {
      question: "¿Dónde me esperará mi conductor en el aeropuerto?",
      answer:
        "Tu conductor te esperará en la zona de llegadas con un cartel con tu nombre, listo para ayudarte con el equipaje en cuanto aterrices.",
    },
    {
      question: "¿Cubrís destinos fuera de las grandes ciudades?",
      answer:
        "Sí, ofrecemos traslados privados a pueblos, resorts y direcciones rurales en toda la España peninsular y las islas, no solo en las grandes ciudades.",
    },
  ],
  ctaSection: {
    title: "¿Listo para un Traslado sin Complicaciones en España?",
    description:
      "Consigue tu presupuesto con precio cerrado en menos de un minuto. Sin registro, sin compromiso, solo un precio confirmado y un conductor de confianza.",
    cta: "Solicitar Presupuesto al Instante",
  },
  footer: {
    tagline:
      "Traslados privados premium con precio cerrado por los aeropuertos, ciudades y zonas costeras de España, las 24 horas del día.",
    quickLinksTitle: "Enlaces Rápidos",
    servicesTitle: "Servicios",
    airportsTitle: "Aeropuertos",
    citiesTitle: "Ciudades",
    companyTitle: "Empresa",
    quickLinks: [
      { label: "Solicitar Presupuesto", href: "/es/solicitar-presupuesto/" },
      { label: "Flota", href: "#fleet" },
      { label: "Cómo Funciona", href: "#how-it-works" },
      { label: "Preguntas Frecuentes", href: "#faq" },
      { label: "Contacto", href: "/es/solicitar-presupuesto/" },
    ],
    company: [
      { label: "Sobre Nosotros", href: "/es/sobre-nosotros/" },
      { label: "Blog", href: "/es/blog/" },
      { label: "Empleo", href: "/es/empleo/" },
      { label: "Contacto", href: "/es/solicitar-presupuesto/" },
    ],
    legal: [
      { label: "Política de Privacidad", href: "/es/politica-de-privacidad/" },
      { label: "Términos y Condiciones", href: "/es/terminos-y-condiciones/" },
    ],
    copyright: "Spain Private Transfers. Todos los derechos reservados.",
  },
};
