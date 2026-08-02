import type { QuotePageDictionary } from "@/lib/quote/types";

export const quoteEs: QuotePageDictionary = {
  meta: {
    title: "Solicitar Presupuesto para Traslados Privados en España",
    description:
      "Solicite un presupuesto gratuito para traslados al aeropuerto, servicios con conductor y viajes privados en toda España.",
    ogAlt: "Chófer privado abriendo la puerta trasera de un vehículo premium para un pasajero",
  },
  breadcrumb: {
    home: "Inicio",
    current: "Solicitar Presupuesto",
  },
  hero: {
    badge: "Solicitar Presupuesto",
    title: "Solicite Su Presupuesto",
    description:
      "Indícanos tu ruta y los detalles de tu viaje, y te enviaremos un presupuesto con precio cerrado para tu traslado privado en cualquier punto de España.",
    cta: "Comienza tu Reserva",
    image: "https://images.unsplash.com/photo-1566154845174-67dfe1adee87?w=1920&h=1400&fit=crop&q=80",
    imageAlt: "Chófer profesional abriendo la puerta del coche a un pasajero en una calle de la ciudad",
  },
  form: {
    sectionTitle: "Solicita tu Presupuesto Gratuito",
    sectionDescription: "Completa los datos de tu viaje y te responderemos con un precio cerrado enseguida.",
    stepOneLabel: "Paso 1 de 2",
    stepOneTitle: "Detalles del Viaje",
    stepTwoLabel: "Paso 2 de 2",
    stepTwoTitle: "Tus Datos",
    continueButton: "Continuar",
    backButton: "Atrás",
    errorMessage: "Ha ocurrido un error al enviar tu solicitud. Inténtalo de nuevo.",
    requiredFieldTemplate: "{field} es obligatorio.",
    privacyRequiredError: "Debes aceptar la Política de Privacidad para continuar.",
    pickupLabel: "Lugar de Recogida *",
    pickupPlaceholder: "Aeropuerto, hotel o dirección",
    dropoffLabel: "Lugar de Destino *",
    dropoffPlaceholder: "Aeropuerto, hotel o dirección",
    pickupDateLabel: "Fecha de Recogida *",
    pickupTimeLabel: "Hora de Recogida *",
    returnTripLabel: "Este es un trayecto de ida y vuelta",
    returnDateLabel: "Fecha de Vuelta",
    returnTimeLabel: "Hora de Vuelta",
    passengersLabel: "Número de Pasajeros *",
    passengerOptions: [
      { value: "1", label: "1 Pasajero" },
      { value: "2", label: "2 Pasajeros" },
      { value: "3", label: "3 Pasajeros" },
      { value: "4", label: "4 Pasajeros" },
      { value: "5", label: "5 Pasajeros" },
      { value: "6", label: "6 Pasajeros" },
      { value: "7+", label: "7+ Pasajeros" },
    ],
    suitcasesLabel: "Número de Maletas",
    suitcaseOptions: [
      { value: "0", label: "0 Maletas" },
      { value: "1", label: "1 Maleta" },
      { value: "2", label: "2 Maletas" },
      { value: "3", label: "3 Maletas" },
      { value: "4", label: "4 Maletas" },
      { value: "5+", label: "5+ Maletas" },
    ],
    vehicleLabel: "Preferencia de Vehículo",
    vehicleOptions: [
      { value: "sedan", label: "Sedán" },
      { value: "executive-sedan", label: "Sedán Ejecutivo" },
      { value: "suv", label: "SUV" },
      { value: "mercedes-vclass", label: "Mercedes Clase V" },
      { value: "minivan", label: "Furgoneta" },
      { value: "minibus", label: "Minibús" },
      { value: "no-preference", label: "Sin Preferencia" },
    ],
    flightNumberLabel: "Número de Vuelo",
    flightNumberPlaceholder: "ej. IB3170",
    fullNameLabel: "Nombre Completo *",
    fullNamePlaceholder: "Tu nombre completo",
    emailLabel: "Correo Electrónico *",
    emailPlaceholder: "tu@ejemplo.com",
    whatsappLabel: "Número de WhatsApp *",
    whatsappPlaceholder: "+34 600 000 000",
    countryLabel: "País *",
    countryPlaceholder: "Tu país de residencia",
    specialRequestsLabel: "Peticiones Especiales",
    specialRequestsPlaceholder: "Sillas infantiles, equipaje extra, necesidades de accesibilidad, etc.",
    privacyLabelBefore: "Acepto la ",
    privacyLinkLabel: "Política de Privacidad",
    privacyLabelAfter: ".",
    submit: "Solicitar Mi Presupuesto",
    successTitle: "Solicitud de Presupuesto Recibida",
    successMessage: "Gracias. Nuestro equipo te enviará tu presupuesto con precio cerrado por correo electrónico en breve.",
    requestAnother: "Solicitar Otro Presupuesto",
  },
  whyRequest: {
    title: "Por Qué Solicitar tu Presupuesto con Nosotros",
    items: [
      { icon: "badge-euro", title: "Precios Cerrados", description: "Tu tarifa queda confirmada en el presupuesto, sin taxímetro ni sorpresas después." },
      { icon: "user-check", title: "Conductores Profesionales", description: "Todos los conductores cuentan con licencia, verificación de antecedentes y seguro." },
      { icon: "plane", title: "Seguimiento de Vuelo Gratuito", description: "Controlamos tu vuelo y ajustamos la recogida automáticamente, sin coste extra." },
      { icon: "shield-check", title: "Sin Cargos Ocultos", description: "El precio de tu presupuesto es el precio que pagas, sin añadidos posteriores." },
      { icon: "handshake", title: "Recepción Personalizada", description: "Tu conductor te espera en llegadas con un cartel con tu nombre, listo para ayudarte." },
      { icon: "car-front", title: "Vehículos de Lujo", description: "Una flota premium y bien mantenida, adaptada al tamaño de tu grupo." },
      { icon: "clock", title: "Respuesta Rápida", description: "La mayoría de las solicitudes de presupuesto reciben respuesta en cuestión de minutos." },
      { icon: "map-pin", title: "Servicio Puerta a Puerta", description: "Recogida y destino directos, sin trayectos compartidos ni paradas de lanzadera." },
    ],
  },
  faq: {
    title: "Preguntas Frecuentes",
    description: "Preguntas habituales sobre cómo solicitar y confirmar tu presupuesto de traslado privado.",
    items: [
      {
        question: "¿Con qué rapidez recibiré mi presupuesto?",
        answer:
          "La mayoría de las solicitudes reciben respuesta por correo electrónico con precio cerrado en cuestión de minutos en horario laboral, y en pocas horas fuera de él.",
      },
      {
        question: "¿Cómo y cuándo pago?",
        answer:
          "No pagas nada al solicitar un presupuesto. Una vez confirmes tu reserva, el pago se gestiona de forma segura online, y tu precio queda cerrado desde ese momento.",
      },
      {
        question: "¿Qué ocurre si mi vuelo se retrasa?",
        answer:
          "Controlamos tu vuelo en tiempo real con el número de vuelo que nos facilites, así que tu conductor ajusta automáticamente la hora de recogida sin coste adicional.",
      },
      {
        question: "¿Puedo solicitar una silla infantil?",
        answer:
          "Sí, indica el número y la edad de los niños que necesiten silla en el campo de Peticiones Especiales, y la incluiremos en tu presupuesto sin coste adicional.",
      },
      {
        question: "¿Qué tipos de vehículos hay disponibles?",
        answer:
          "Nuestra flota va desde sedanes ejecutivos y SUV hasta furgonetas Mercedes Clase V y minibuses para grupos grandes. Indica tu preferencia en el formulario o elige \"Sin Preferencia\" y te asignaremos el vehículo adecuado.",
      },
      {
        question: "¿Puedo cancelar o modificar mi reserva tras confirmarla?",
        answer:
          "Sí, las reservas se pueden modificar o cancelar sin coste hasta el plazo indicado en tu correo de confirmación, conforme a nuestros Términos y Condiciones.",
      },
    ],
  },
  cta: {
    title: "¿Necesitas un Traslado Privado en Cualquier Punto de España?",
    description: "Consigue tu presupuesto gratuito con precio cerrado hoy mismo y viaja con un conductor profesional desde el momento en que aterrizas.",
    button: "Solicitar Presupuesto",
  },
  relatedLinks: {
    title: "Descubre Más",
    items: [
      { label: "Inicio", href: "/es/" },
      { label: "Traslados al Aeropuerto", href: "/es/traslados-aeropuerto/" },
      { label: "Traslados entre Ciudades", href: "/es/traslados-entre-ciudades/" },
      { label: "Transporte Corporativo", href: "/es/transporte-corporativo/" },
      { label: "Traslados para Grupos y Eventos", href: "/es/traslados-para-grupos-y-eventos/" },
      { label: "Traslados a Puertos de Cruceros", href: "/es/traslados-puertos-cruceros/" },
      { label: "Directorio de Aeropuertos", href: "/es/aeropuertos/" },
      { label: "Directorio de Ciudades", href: "/es/ciudades/" },
      { label: "Política de Privacidad", href: "/es/politica-de-privacidad/" },
      { label: "Términos y Condiciones", href: "/es/terminos-y-condiciones/" },
    ],
  },
};
