import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Toledo city page (one of the 95 "crawled,
// not indexed" URLs, Nov 2026). Toledo has no airport: most visitors arrive
// from Madrid-Barajas or central Madrid, so the page is framed around those
// journeys. Distances/times are estimates (Madrid centre ~70 km per
// lib/routes/data/madrid.ts; Barajas roughly 90 km). Rail and old-town
// access facts checked Nov 2026 against travel guides and Renfe listings and
// kept general; no prices quoted. Service wording matches the booking terms.

export const TOLEDO_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Toledo Private Transfers | Madrid Airport & Day Trips",
  metaDescription:
    "Private transfers to Toledo from Madrid Airport or central Madrid, about an hour by road, plus day trips with a driver. Fixed price when you book.",
  heroTitle: "Private Transfers to and from Toledo",
  heroDescription:
    "Toledo has no airport of its own, so most visitors arrive from Madrid. Book a private transfer from Madrid-Barajas or central Madrid to your Toledo hotel, or a day trip with a driver, at a price fixed when you book.",
};

export const TOLEDO_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Traslado Privado a Toledo desde Madrid y Barajas",
  metaDescription:
    "Traslados privados a Toledo desde el Aeropuerto de Madrid o el centro de Madrid, en torno a una hora por carretera, y excursiones con conductor. Precio cerrado.",
  heroTitle: "Traslados Privados a Toledo y desde Toledo",
  heroDescription:
    "Toledo no tiene aeropuerto propio, así que la mayoría de los viajeros llega desde Madrid. Reserva un traslado privado desde Madrid-Barajas o el centro de Madrid hasta tu hotel en Toledo, o una excursión con conductor, con precio cerrado al reservar.",
};

export const TOLEDO_RICH_TITLE_EN = "Getting to Toledo: Airport, Train and Private Transfer";
export const TOLEDO_RICH_TITLE_ES = "Cómo llegar a Toledo: aeropuerto, tren y traslado privado";

export const TOLEDO_RICH_CONTENT_EN = `<p>Toledo is a walled hilltop city about 70 km south of Madrid, and its historic centre is a UNESCO World Heritage Site. There is no airport in Toledo: the nearest is Madrid-Barajas, roughly 90 km away, usually around an hour to an hour and a quarter by road depending on traffic. Central Madrid is a little closer, at about an hour's drive.</p>

<h3>Your options for reaching Toledo</h3>
<ul>
<li><strong>Train from Madrid:</strong> Renfe's Avant high-speed trains run from Madrid's Atocha station to Toledo in about half an hour. From Madrid-Barajas you first need to get into the city, so the full trip from the airport takes noticeably longer. Toledo's station is below the old town, so most visitors take a taxi, bus or the public escalators up to the centre.</li>
<li><strong>Bus from Madrid:</strong> regular coaches run between Madrid and Toledo's bus station, also below the old town.</li>
<li><strong>Private transfer:</strong> a car booked in advance for your group, from your arrivals hall at Madrid-Barajas or your Madrid hotel straight to your accommodation in Toledo. It avoids changing between airport transport, a train and a taxi with luggage.</li>
</ul>

<h3>Arriving in Toledo's old town</h3>
<p>Toledo's historic centre is a maze of steep, narrow streets, and much of it is restricted to residents' traffic. Many visitors leave cars outside the walls and use the public escalators that connect the lower town with the upper town. Give us your exact accommodation address when you book: we'll take you to your hotel if access is permitted, or to the nearest permitted drop-off point if it isn't.</p>

<h3>Transfers and day trips involving Toledo</h3>
<p>Many people visit Toledo as a day trip from Madrid. Our <a href="/madrid-to-toledo-day-trip/">Madrid to Toledo day trip</a> page covers that option, with a driver who waits while you explore. If you're flying in, see our <a href="/madrid-airport-transfer/">Madrid Airport transfer page</a> for how pickups at Barajas work. You can also combine Toledo with nearby <a href="/madrid-to-aranjuez-day-trip/">Aranjuez</a>, or book a <a href="/hourly-chauffeur/">chauffeur by the hour</a> if your day has several stops.</p>

<h3>How booking works</h3>
<p>Send your pickup point, Toledo address, date, time, passengers and luggage in the quote form, and we'll reply by email with a fixed price. For airport pickups, include your flight number: we monitor the flight and time the pickup to your actual landing, with 60 minutes' free waiting for international arrivals and 45 minutes for domestic ones. Most bookings can be cancelled free of charge up to 24 hours before pickup.</p>`;

export const TOLEDO_RICH_CONTENT_ES = `<p>Toledo es una ciudad amurallada sobre una colina, a unos 70 km al sur de Madrid, y su casco histórico es Patrimonio de la Humanidad de la UNESCO. Toledo no tiene aeropuerto: el más cercano es Madrid-Barajas, a unos 90 km, normalmente entre una hora y una hora y cuarto por carretera según el tráfico. El centro de Madrid está algo más cerca, a alrededor de una hora en coche.</p>

<h3>Opciones para llegar a Toledo</h3>
<ul>
<li><strong>Tren desde Madrid:</strong> los trenes Avant de Renfe van de la estación de Atocha a Toledo en una media hora. Desde Madrid-Barajas primero hay que llegar a la ciudad, así que el trayecto completo desde el aeropuerto es bastante más largo. La estación de Toledo está por debajo del casco antiguo, por lo que la mayoría de los viajeros sube al centro en taxi, en autobús o por las escaleras mecánicas públicas.</li>
<li><strong>Autobús desde Madrid:</strong> hay autobuses regulares entre Madrid y la estación de autobuses de Toledo, también por debajo del casco antiguo.</li>
<li><strong>Traslado privado:</strong> un coche reservado con antelación para tu grupo, desde el vestíbulo de llegadas de Madrid-Barajas o tu hotel de Madrid directamente hasta tu alojamiento en Toledo. Evita tener que combinar transporte del aeropuerto, tren y taxi con el equipaje.</li>
</ul>

<h3>Llegar al casco antiguo de Toledo</h3>
<p>El casco histórico de Toledo es un laberinto de calles estrechas y empinadas, y buena parte tiene el tráfico restringido a residentes. Muchos visitantes dejan el coche fuera de las murallas y usan las escaleras mecánicas públicas que unen la parte baja con la parte alta. Indícanos la dirección exacta de tu alojamiento al reservar: te llevaremos hasta el hotel si el acceso está permitido o, si no lo está, hasta el punto de llegada permitido más cercano.</p>

<h3>Traslados y excursiones a Toledo</h3>
<p>Mucha gente visita Toledo en una excursión de un día desde Madrid. Nuestra página de la <a href="/es/madrid-a-toledo-excursion-de-un-dia/">excursión de Madrid a Toledo</a> explica esa opción, con un conductor que te espera mientras recorres la ciudad. Si llegas en avión, consulta nuestra página de <a href="/es/traslado-aeropuerto-madrid/">traslados desde el Aeropuerto de Madrid</a> para ver cómo funcionan las recogidas en Barajas. También puedes combinar Toledo con <a href="/es/madrid-a-aranjuez-excursion-de-un-dia/">Aranjuez</a>, o reservar un <a href="/es/chauffeur-por-horas/">chófer por horas</a> si tu día tiene varias paradas.</p>

<h3>Cómo se reserva</h3>
<p>Indícanos en el formulario el punto de recogida, la dirección en Toledo, la fecha, la hora, los pasajeros y el equipaje, y te responderemos por correo con un precio cerrado. En las recogidas en el aeropuerto, incluye el número de vuelo: seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje, con 60 minutos de espera gratuita en vuelos internacionales y 45 en nacionales. La mayoría de las reservas se pueden cancelar sin coste hasta 24 horas antes de la recogida.</p>`;

export const TOLEDO_FAQ_EN: PageFaqItem[] = [
  {
    question: "Does Toledo have an airport?",
    answer: "No. The nearest airport is Madrid-Barajas, roughly 90 km away, usually around an hour to an hour and a quarter by road.",
  },
  {
    question: "How long is the transfer from Madrid to Toledo?",
    answer: "About an hour from central Madrid (around 70 km) in normal traffic, a little longer from Madrid-Barajas.",
  },
  {
    question: "Is there a train from Madrid to Toledo?",
    answer: "Yes. Renfe's Avant trains run from Madrid Atocha to Toledo in about half an hour. Toledo's station is below the old town, so you'll usually need a taxi, bus or the public escalators to reach the centre.",
  },
  {
    question: "Can the car drop me inside Toledo's old town?",
    answer: "Much of the historic centre is restricted to residents' traffic. We take you to your accommodation where access is permitted, or to the nearest permitted drop-off point. Share your exact address when booking.",
  },
  {
    question: "Can I do a day trip to Toledo with a private driver?",
    answer: "Yes. A Madrid to Toledo day trip includes the drive both ways, with the driver waiting while you visit. Tell us your preferred times when requesting a quote.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee.",
  },
];

export const TOLEDO_FAQ_ES: PageFaqItem[] = [
  {
    question: "¿Toledo tiene aeropuerto?",
    answer: "No. El aeropuerto más cercano es Madrid-Barajas, a unos 90 km, normalmente entre una hora y una hora y cuarto por carretera.",
  },
  {
    question: "¿Cuánto dura el traslado de Madrid a Toledo?",
    answer: "Alrededor de una hora desde el centro de Madrid (unos 70 km) con tráfico normal, algo más desde Madrid-Barajas.",
  },
  {
    question: "¿Hay tren de Madrid a Toledo?",
    answer: "Sí. Los trenes Avant de Renfe van de Madrid Atocha a Toledo en una media hora. La estación de Toledo está por debajo del casco antiguo, así que normalmente hace falta un taxi, un autobús o las escaleras mecánicas públicas para llegar al centro.",
  },
  {
    question: "¿Puede el coche dejarme dentro del casco antiguo de Toledo?",
    answer: "Buena parte del casco histórico tiene el tráfico restringido a residentes. Te llevamos hasta tu alojamiento si el acceso está permitido o hasta el punto de llegada permitido más cercano. Indícanos la dirección exacta al reservar.",
  },
  {
    question: "¿Puedo hacer una excursión a Toledo con conductor privado?",
    answer: "Sí. La excursión de Madrid a Toledo incluye el trayecto de ida y vuelta, con el conductor esperándote durante la visita. Indícanos tus horarios preferidos al pedir presupuesto.",
  },
  {
    question: "¿Puedo cancelar o modificar la reserva?",
    answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo.",
  },
];
