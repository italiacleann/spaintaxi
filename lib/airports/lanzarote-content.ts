import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Lanzarote Airport (ACE) page (one of the 95
// "crawled, not indexed" URLs, Nov 2026). There are no Lanzarote route pages
// yet, so destinations link to a pre-filled quote request instead of
// inventing route URLs. Distances are approximate ranges because sources
// differ by a few km; bus details (lines 161/261, 22/23) checked Nov 2026
// against transport guides and kept general. No prices quoted. Service
// wording matches the booking terms.

const quote = (dropoff: string, locale: "en" | "es") => {
  const base = locale === "es" ? "/es/solicitar-presupuesto/" : "/get-a-quote/";
  const pickup = locale === "es" ? "Aeropuerto de Lanzarote" : "Lanzarote Airport";
  const from = locale === "es" ? "/es/traslado-aeropuerto-lanzarote/" : "/lanzarote-airport-transfer/";
  return `${base}?pickup=${encodeURIComponent(pickup)}&amp;dropoff=${encodeURIComponent(dropoff)}&amp;from=${encodeURIComponent(from)}`;
};

export const LANZAROTE_AIRPORT_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Lanzarote Airport Transfers | Private Car, Fixed Price",
  metaDescription:
    "Private transfers from Lanzarote Airport (ACE) to Puerto del Carmen, Playa Blanca, Costa Teguise and Arrecife. Driver in arrivals, price fixed at booking.",
  heroDescription:
    "Private transfers from Lanzarote Airport to Puerto del Carmen, Playa Blanca, Costa Teguise, Arrecife or anywhere on the island. Your driver meets you in arrivals and the price is fixed when you book.",
};

export const LANZAROTE_AIRPORT_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Traslado Aeropuerto de Lanzarote | Precio Cerrado",
  metaDescription:
    "Traslados privados desde el Aeropuerto de Lanzarote a Puerto del Carmen, Playa Blanca, Costa Teguise y Arrecife. Conductor en llegadas y precio cerrado.",
  heroDescription:
    "Traslados privados desde el Aeropuerto de Lanzarote a Puerto del Carmen, Playa Blanca, Costa Teguise, Arrecife o cualquier punto de la isla. Tu conductor te espera en llegadas y el precio queda cerrado al reservar.",
};

export const LANZAROTE_AIRPORT_RICH_TITLE_EN = "Getting From Lanzarote Airport to Your Resort";
export const LANZAROTE_AIRPORT_RICH_TITLE_ES = "Cómo ir del Aeropuerto de Lanzarote a tu alojamiento";

export const LANZAROTE_AIRPORT_RICH_CONTENT_EN = `<p>César Manrique-Lanzarote Airport (ACE) sits on the island's south-east coast, just outside the capital, Arrecife. Because Lanzarote is compact, most resorts are within about half an hour of the terminal: Arrecife and Puerto del Carmen are the closest, Costa Teguise a little further north, and Playa Blanca in the far south is the longest of the usual drives.</p>

<h3>Your options from the terminal</h3>
<ul>
<li><strong>Bus:</strong> public buses link the airport with Arrecife and with Puerto del Carmen and Playa Blanca (lines 161 and 261 serve the southern resorts). They're inexpensive but run on a timetable, and Costa Teguise has no direct airport bus. Check the current timetable before you travel.</li>
<li><strong>Taxi:</strong> taxis wait outside arrivals and are metered.</li>
<li><strong>Private transfer:</strong> a car booked in advance for your group, with the driver waiting in arrivals and a price agreed before you travel. It suits families, groups, golf or surf equipment, late arrivals, and villas or apartments away from the bus routes.</li>
</ul>

<h3>Popular transfers from Lanzarote Airport</h3>
<p>Approximate distances and drive times in normal traffic; sources vary by a few kilometres. Each link opens a quote request with the route filled in.</p>
<table>
<thead><tr><th>Destination</th><th>Approx. distance</th><th>Approx. drive</th></tr></thead>
<tbody>
<tr><td><a href="${quote("Arrecife", "en")}">Arrecife</a></td><td>5–10 km</td><td>10 min</td></tr>
<tr><td><a href="${quote("Puerto del Carmen", "en")}">Puerto del Carmen</a></td><td>about 10 km</td><td>15 min</td></tr>
<tr><td><a href="${quote("Costa Teguise", "en")}">Costa Teguise</a></td><td>about 15 km</td><td>20 min</td></tr>
<tr><td><a href="${quote("Playa Blanca", "en")}">Playa Blanca</a></td><td>25–35 km</td><td>30–35 min</td></tr>
</tbody>
</table>

<h3>How our Lanzarote Airport pickup works</h3>
<p>Your driver waits in the arrivals hall with a sign showing your name. If you include your flight number when you book, we monitor the flight and time the pickup to your actual landing. Waiting time counts from that landing and includes 60 minutes free for international arrivals and 45 minutes for domestic and inter-island ones. The price confirmed at booking is fixed, and most bookings can be cancelled free of charge up to 24 hours before pickup.</p>

<h3>Island hopping to Fuerteventura</h3>
<p>Ferries run between Playa Blanca and Corralejo on Fuerteventura. If you're combining both islands, we can take you from the airport to the port at Playa Blanca, and our <a href="/fuerteventura-airport-transfer/">Fuerteventura Airport transfer page</a> covers the other island.</p>`;

export const LANZAROTE_AIRPORT_RICH_CONTENT_ES = `<p>El Aeropuerto César Manrique-Lanzarote (ACE) está en la costa sureste de la isla, junto a la capital, Arrecife. Como Lanzarote es una isla pequeña, la mayoría de las zonas turísticas quedan a menos de media hora de la terminal: Arrecife y Puerto del Carmen son las más cercanas, Costa Teguise está algo más al norte y Playa Blanca, en el extremo sur, es el trayecto habitual más largo.</p>

<h3>Tus opciones desde la terminal</h3>
<ul>
<li><strong>Autobús:</strong> hay autobuses públicos del aeropuerto a Arrecife y a Puerto del Carmen y Playa Blanca (las líneas 161 y 261 cubren el sur). Son económicos pero funcionan con horario fijo, y no hay autobús directo del aeropuerto a Costa Teguise. Consulta el horario vigente antes de viajar.</li>
<li><strong>Taxi:</strong> hay taxis en la salida de llegadas, con taxímetro.</li>
<li><strong>Traslado privado:</strong> un coche reservado con antelación para tu grupo, con el conductor esperándote en llegadas y un precio acordado antes del viaje. Es la opción más cómoda para familias, grupos, material de golf o surf, llegadas tardías y villas o apartamentos alejados de las líneas de autobús.</li>
</ul>

<h3>Traslados más habituales desde el Aeropuerto de Lanzarote</h3>
<p>Distancias y tiempos aproximados con tráfico normal; las fuentes varían unos pocos kilómetros. Cada enlace abre una solicitud de presupuesto con el trayecto ya indicado.</p>
<table>
<thead><tr><th>Destino</th><th>Distancia aprox.</th><th>Trayecto aprox.</th></tr></thead>
<tbody>
<tr><td><a href="${quote("Arrecife", "es")}">Arrecife</a></td><td>5–10 km</td><td>10 min</td></tr>
<tr><td><a href="${quote("Puerto del Carmen", "es")}">Puerto del Carmen</a></td><td>unos 10 km</td><td>15 min</td></tr>
<tr><td><a href="${quote("Costa Teguise", "es")}">Costa Teguise</a></td><td>unos 15 km</td><td>20 min</td></tr>
<tr><td><a href="${quote("Playa Blanca", "es")}">Playa Blanca</a></td><td>25–35 km</td><td>30–35 min</td></tr>
</tbody>
</table>

<h3>Cómo funciona la recogida en el Aeropuerto de Lanzarote</h3>
<p>Tu conductor te espera en el vestíbulo de llegadas con un cartel con tu nombre. Si incluyes el número de vuelo al reservar, seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje. El tiempo de espera se cuenta desde ese aterrizaje e incluye 60 minutos gratuitos en vuelos internacionales y 45 en vuelos nacionales e interinsulares. El precio confirmado al reservar es cerrado, y la mayoría de las reservas se pueden cancelar sin coste hasta 24 horas antes de la recogida.</p>

<h3>Combinar con Fuerteventura</h3>
<p>Hay ferris entre Playa Blanca y Corralejo, en Fuerteventura. Si vas a combinar las dos islas, podemos llevarte del aeropuerto al puerto de Playa Blanca, y nuestra página de <a href="/es/traslado-aeropuerto-fuerteventura/">traslados desde el Aeropuerto de Fuerteventura</a> cubre la otra isla.</p>`;

export const LANZAROTE_AIRPORT_FAQ_EN: PageFaqItem[] = [
  { question: "How far is Lanzarote Airport from Puerto del Carmen?", answer: "About 10 km, usually around 15 minutes by car." },
  { question: "How long is the transfer from Lanzarote Airport to Playa Blanca?", answer: "Usually around 30–35 minutes, roughly 25–35 km depending on where you're staying." },
  { question: "Is there a bus from Lanzarote Airport?", answer: "Yes. Buses run to Arrecife and to Puerto del Carmen and Playa Blanca (lines 161 and 261). There's no direct airport bus to Costa Teguise. Check the current timetable before travelling." },
  { question: "Where will my driver meet me?", answer: "In the arrivals hall, holding a sign with your name, after you've collected your luggage." },
  { question: "What happens if my flight is delayed?", answer: "If you include your flight number when booking, we monitor the flight and adjust the pickup to your actual landing time. Waiting time counts from that landing." },
  { question: "Can I cancel or change my booking?", answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee." },
];

export const LANZAROTE_AIRPORT_FAQ_ES: PageFaqItem[] = [
  { question: "¿A qué distancia está el Aeropuerto de Lanzarote de Puerto del Carmen?", answer: "A unos 10 km, normalmente unos 15 minutos en coche." },
  { question: "¿Cuánto dura el traslado del Aeropuerto de Lanzarote a Playa Blanca?", answer: "Normalmente entre 30 y 35 minutos, unos 25–35 km según dónde te alojes." },
  { question: "¿Hay autobús desde el Aeropuerto de Lanzarote?", answer: "Sí. Hay autobuses a Arrecife y a Puerto del Carmen y Playa Blanca (líneas 161 y 261). No hay autobús directo del aeropuerto a Costa Teguise. Consulta el horario vigente antes de viajar." },
  { question: "¿Dónde me espera el conductor?", answer: "En el vestíbulo de llegadas, con un cartel con tu nombre, una vez que hayas recogido el equipaje." },
  { question: "¿Qué pasa si mi vuelo se retrasa?", answer: "Si incluyes el número de vuelo al reservar, seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje. El tiempo de espera se cuenta desde ese aterrizaje." },
  { question: "¿Puedo cancelar o modificar la reserva?", answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo." },
];
