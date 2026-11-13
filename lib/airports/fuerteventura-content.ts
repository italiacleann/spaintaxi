import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Fuerteventura Airport (FUE) page (one of the
// 95 "crawled, not indexed" URLs, Nov 2026). No Fuerteventura route pages
// exist yet, so destinations link to a pre-filled quote request. Distances
// are approximate ranges because sources disagree (notably Morro Jable).
// Bus facts (Tiadhe lines 3, 10, 16; no direct airport bus to Corralejo)
// checked Nov 2026 against transport guides; no prices quoted. Service
// wording matches the booking terms.

const quote = (dropoff: string, locale: "en" | "es") => {
  const base = locale === "es" ? "/es/solicitar-presupuesto/" : "/get-a-quote/";
  const pickup = locale === "es" ? "Aeropuerto de Fuerteventura" : "Fuerteventura Airport";
  const from = locale === "es" ? "/es/traslado-aeropuerto-fuerteventura/" : "/fuerteventura-airport-transfer/";
  return `${base}?pickup=${encodeURIComponent(pickup)}&amp;dropoff=${encodeURIComponent(dropoff)}&amp;from=${encodeURIComponent(from)}`;
};

export const FUERTEVENTURA_AIRPORT_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Fuerteventura Airport Transfers | Private Car, Fixed Price",
  metaDescription:
    "Private transfers from Fuerteventura Airport (FUE) to Corralejo, Caleta de Fuste, Costa Calma and Morro Jable. Driver in arrivals, price fixed at booking.",
  heroDescription:
    "Private transfers from Fuerteventura Airport to Corralejo, Caleta de Fuste, Costa Calma, Morro Jable or anywhere on the island. Your driver meets you in arrivals and the price is fixed when you book.",
};

export const FUERTEVENTURA_AIRPORT_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Traslado Aeropuerto de Fuerteventura | Precio Cerrado",
  metaDescription:
    "Traslados privados desde el Aeropuerto de Fuerteventura a Corralejo, Caleta de Fuste, Costa Calma y Morro Jable. Conductor en llegadas y precio cerrado.",
  heroDescription:
    "Traslados privados desde el Aeropuerto de Fuerteventura a Corralejo, Caleta de Fuste, Costa Calma, Morro Jable o cualquier punto de la isla. Tu conductor te espera en llegadas y el precio queda cerrado al reservar.",
};

export const FUERTEVENTURA_AIRPORT_RICH_TITLE_EN = "Getting From Fuerteventura Airport to Your Resort";
export const FUERTEVENTURA_AIRPORT_RICH_TITLE_ES = "Cómo ir del Aeropuerto de Fuerteventura a tu alojamiento";

export const FUERTEVENTURA_AIRPORT_RICH_CONTENT_EN = `<p>Fuerteventura Airport (FUE) is on the east coast, just south of the capital, Puerto del Rosario. The island is long and narrow, so journey times vary a lot: Caleta de Fuste is only a few minutes away, Corralejo in the north is around 40 minutes, and the southern resorts of Costa Calma and Morro Jable are roughly an hour or more.</p>

<h3>Your options from the terminal</h3>
<ul>
<li><strong>Bus:</strong> Tiadhe public buses link the airport with Puerto del Rosario and Caleta de Fuste (line 3) and with the south, including Costa Calma and Morro Jable (line 10, which runs only a few times a day). There is no direct airport bus to Corralejo: you change in Puerto del Rosario. Check the current timetable before you travel.</li>
<li><strong>Taxi:</strong> taxis wait outside arrivals and are metered. For the longer southern trips, ask for the expected fare before you set off.</li>
<li><strong>Private transfer:</strong> a car booked in advance for your group, with the driver waiting in arrivals and a price agreed before you travel. It's most useful for Corralejo and the south, where the bus means a change or a long wait, and for families, groups and surf or kite equipment.</li>
</ul>

<h3>Popular transfers from Fuerteventura Airport</h3>
<p>Approximate distances and drive times in normal traffic; sources vary, especially for the south of the island. Each link opens a quote request with the route filled in.</p>
<table>
<thead><tr><th>Destination</th><th>Approx. distance</th><th>Approx. drive</th></tr></thead>
<tbody>
<tr><td><a href="${quote("Puerto del Rosario", "en")}">Puerto del Rosario</a></td><td>about 5 km</td><td>10 min</td></tr>
<tr><td><a href="${quote("Caleta de Fuste", "en")}">Caleta de Fuste</a></td><td>about 7 km</td><td>10–15 min</td></tr>
<tr><td><a href="${quote("Corralejo", "en")}">Corralejo</a></td><td>30–40 km</td><td>35–40 min</td></tr>
<tr><td><a href="${quote("Costa Calma", "en")}">Costa Calma</a></td><td>about 60 km</td><td>about 1 hr</td></tr>
<tr><td><a href="${quote("Morro Jable", "en")}">Morro Jable</a></td><td>about 85–90 km</td><td>about 1 hr 15 min</td></tr>
</tbody>
</table>

<h3>How our Fuerteventura Airport pickup works</h3>
<p>Your driver waits in the arrivals hall with a sign showing your name. If you include your flight number when you book, we monitor the flight and time the pickup to your actual landing. Waiting time counts from that landing and includes 60 minutes free for international arrivals and 45 minutes for domestic and inter-island ones. The price confirmed at booking is fixed, and most bookings can be cancelled free of charge up to 24 hours before pickup.</p>

<h3>Island hopping to Lanzarote</h3>
<p>Ferries run between Corralejo and Playa Blanca on Lanzarote. If you're visiting both islands, we can take you from the airport to the port at Corralejo, and our <a href="/lanzarote-airport-transfer/">Lanzarote Airport transfer page</a> covers the other island.</p>`;

export const FUERTEVENTURA_AIRPORT_RICH_CONTENT_ES = `<p>El Aeropuerto de Fuerteventura (FUE) está en la costa este, justo al sur de la capital, Puerto del Rosario. La isla es larga y estrecha, así que los tiempos de trayecto varían mucho: Caleta de Fuste está a pocos minutos, Corralejo, en el norte, a unos 40 minutos, y las zonas del sur como Costa Calma y Morro Jable a una hora o más.</p>

<h3>Tus opciones desde la terminal</h3>
<ul>
<li><strong>Autobús:</strong> los autobuses públicos de Tiadhe unen el aeropuerto con Puerto del Rosario y Caleta de Fuste (línea 3) y con el sur, incluidos Costa Calma y Morro Jable (línea 10, con pocas salidas al día). No hay autobús directo del aeropuerto a Corralejo: hay que cambiar en Puerto del Rosario. Consulta el horario vigente antes de viajar.</li>
<li><strong>Taxi:</strong> hay taxis en la salida de llegadas, con taxímetro. En los trayectos largos al sur, pregunta el importe aproximado antes de salir.</li>
<li><strong>Traslado privado:</strong> un coche reservado con antelación para tu grupo, con el conductor esperándote en llegadas y un precio acordado antes del viaje. Es especialmente útil para Corralejo y el sur, donde el autobús implica transbordo o largas esperas, y para familias, grupos y material de surf o kite.</li>
</ul>

<h3>Traslados más habituales desde el Aeropuerto de Fuerteventura</h3>
<p>Distancias y tiempos aproximados con tráfico normal; las fuentes varían, sobre todo para el sur de la isla. Cada enlace abre una solicitud de presupuesto con el trayecto ya indicado.</p>
<table>
<thead><tr><th>Destino</th><th>Distancia aprox.</th><th>Trayecto aprox.</th></tr></thead>
<tbody>
<tr><td><a href="${quote("Puerto del Rosario", "es")}">Puerto del Rosario</a></td><td>unos 5 km</td><td>10 min</td></tr>
<tr><td><a href="${quote("Caleta de Fuste", "es")}">Caleta de Fuste</a></td><td>unos 7 km</td><td>10–15 min</td></tr>
<tr><td><a href="${quote("Corralejo", "es")}">Corralejo</a></td><td>30–40 km</td><td>35–40 min</td></tr>
<tr><td><a href="${quote("Costa Calma", "es")}">Costa Calma</a></td><td>unos 60 km</td><td>alrededor de 1 h</td></tr>
<tr><td><a href="${quote("Morro Jable", "es")}">Morro Jable</a></td><td>unos 85–90 km</td><td>alrededor de 1 h 15 min</td></tr>
</tbody>
</table>

<h3>Cómo funciona la recogida en el Aeropuerto de Fuerteventura</h3>
<p>Tu conductor te espera en el vestíbulo de llegadas con un cartel con tu nombre. Si incluyes el número de vuelo al reservar, seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje. El tiempo de espera se cuenta desde ese aterrizaje e incluye 60 minutos gratuitos en vuelos internacionales y 45 en vuelos nacionales e interinsulares. El precio confirmado al reservar es cerrado, y la mayoría de las reservas se pueden cancelar sin coste hasta 24 horas antes de la recogida.</p>

<h3>Combinar con Lanzarote</h3>
<p>Hay ferris entre Corralejo y Playa Blanca, en Lanzarote. Si vas a visitar las dos islas, podemos llevarte del aeropuerto al puerto de Corralejo, y nuestra página de <a href="/es/traslado-aeropuerto-lanzarote/">traslados desde el Aeropuerto de Lanzarote</a> cubre la otra isla.</p>`;

export const FUERTEVENTURA_AIRPORT_FAQ_EN: PageFaqItem[] = [
  { question: "How far is Fuerteventura Airport from Corralejo?", answer: "Roughly 30–40 km, usually around 35–40 minutes by car." },
  { question: "How long is the transfer to Morro Jable or Costa Calma?", answer: "Costa Calma is about an hour away and Morro Jable about an hour and a quarter, depending on traffic and where you're staying." },
  { question: "Is there a bus from Fuerteventura Airport to Corralejo?", answer: "Not directly. You take a bus to Puerto del Rosario and change there. Lines from the airport also serve Caleta de Fuste and the south of the island." },
  { question: "Where will my driver meet me?", answer: "In the arrivals hall, holding a sign with your name, after you've collected your luggage." },
  { question: "Can I bring surf or kite equipment?", answer: "Yes. Mention it in the quote form so we can confirm a vehicle with enough space." },
  { question: "Can I cancel or change my booking?", answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee." },
];

export const FUERTEVENTURA_AIRPORT_FAQ_ES: PageFaqItem[] = [
  { question: "¿A qué distancia está el Aeropuerto de Fuerteventura de Corralejo?", answer: "A unos 30–40 km, normalmente entre 35 y 40 minutos en coche." },
  { question: "¿Cuánto dura el traslado a Morro Jable o Costa Calma?", answer: "Costa Calma está a alrededor de una hora y Morro Jable a una hora y cuarto, según el tráfico y dónde te alojes." },
  { question: "¿Hay autobús del Aeropuerto de Fuerteventura a Corralejo?", answer: "Directo, no. Hay que tomar un autobús a Puerto del Rosario y cambiar allí. Las líneas del aeropuerto también llegan a Caleta de Fuste y al sur de la isla." },
  { question: "¿Dónde me espera el conductor?", answer: "En el vestíbulo de llegadas, con un cartel con tu nombre, una vez que hayas recogido el equipaje." },
  { question: "¿Puedo llevar material de surf o kite?", answer: "Sí. Indícalo en el formulario de presupuesto para que confirmemos un vehículo con espacio suficiente." },
  { question: "¿Puedo cancelar o modificar la reserva?", answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo." },
];
