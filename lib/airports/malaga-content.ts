import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Málaga Airport (AGP) page — see
// PageContentOverrides in lib/shared/page-copy.ts. Drive times/distances are
// the site's own estimates from lib/routes/data/malaga.ts; each destination
// links to its route page. Public-transport facts checked Nov 2026 (Renfe
// Cercanías C-1, EMT Línea A, ALSA) and kept general, pointing readers to
// the operators for timetables and fares. Service claims match the terms.

export const MALAGA_AIRPORT_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Málaga Airport Transfers | Private Car, Fixed Price",
  metaDescription:
    "Private transfers from Málaga Airport to the city, Marbella, Torremolinos, Nerja, Granada and the Costa del Sol. Driver in arrivals, price fixed at booking.",
  heroDescription:
    "Private transfers from Málaga Airport to the city, the Costa del Sol and inland Andalusia. Your driver meets you in arrivals, follows your flight and the price is fixed when you book.",
};

export const MALAGA_AIRPORT_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Transfer y Traslado Aeropuerto de Málaga | Precio Cerrado",
  metaDescription:
    "Traslados privados del Aeropuerto de Málaga al centro, Marbella, Torremolinos, Nerja, Granada y la Costa del Sol. Conductor en llegadas y precio cerrado.",
  heroTitle: "Traslados y Transfer desde el Aeropuerto de Málaga",
  heroDescription:
    "Traslados privados desde el Aeropuerto de Málaga a la ciudad, a la Costa del Sol y al interior de Andalucía. Tu conductor te espera en llegadas, sigue tu vuelo y el precio queda cerrado al reservar.",
};

export const MALAGA_AIRPORT_RICH_TITLE_EN = "Getting From Málaga Airport to the City and the Costa del Sol";
export const MALAGA_AIRPORT_RICH_TITLE_ES = "Cómo ir del Aeropuerto de Málaga a la ciudad y a la Costa del Sol";

export const MALAGA_AIRPORT_RICH_CONTENT_EN = `<p>Málaga-Costa del Sol Airport (AGP) sits between Málaga city and Torremolinos, about 10 km from the city centre. That makes it the gateway to the whole Costa del Sol: central Málaga and Torremolinos are around 15–20 minutes away, Marbella around 40 minutes, and inland cities like Granada about an hour and twenty minutes.</p>

<h3>Your options from the terminal</h3>
<p>The airport's terminals are connected under one roof, and most arrivals come through Terminal 3.</p>
<ul>
<li><strong>Train:</strong> the C-1 Cercanías line runs from the airport station into Málaga (María Zambrano and Centro-Alameda, about 12 minutes to the centre) and in the other direction along the coast through Torremolinos and Benalmádena to Fuengirola. Trains run roughly every 20 minutes.</li>
<li><strong>Bus:</strong> EMT's Línea A Express links the airport with central Málaga, and long-distance coaches run to destinations such as Granada and Marbella. Check the operators' websites for timetables.</li>
<li><strong>Taxi:</strong> taxis wait at the rank outside arrivals and are metered. For longer trips, ask for the expected fare before you set off.</li>
<li><strong>Private transfer:</strong> a car booked in advance for your group, with the driver waiting for you in arrivals and a price agreed before you travel. It's the simplest option for families, groups, golf bags and heavy luggage, late arrivals, and anywhere the train doesn't reach, such as Marbella, Estepona, Nerja or Granada.</li>
</ul>

<h3>How our Málaga Airport pickup works</h3>
<p>Your driver waits in the arrivals hall with a sign showing your name. If you include your flight number when you book, we monitor the flight and time the pickup to your actual landing. Waiting time counts from that landing and includes 60 minutes free for international arrivals and 45 minutes for domestic ones. The price confirmed at booking is fixed. Extra charges apply only for additional stops, waiting beyond the included allowance, or changes you ask for after booking. Most bookings can be cancelled free of charge up to 24 hours before pickup.</p>

<h3>Popular transfers from Málaga Airport</h3>
<p>Typical drive times in normal traffic. Each link has route details and a quote button.</p>
<table>
<thead><tr><th>Destination</th><th>Approx. drive</th><th>Distance</th></tr></thead>
<tbody>
<tr><td><a href="/malaga-airport-to-malaga-cathedral/">Málaga city centre (Cathedral)</a></td><td>20 min</td><td>10 km</td></tr>
<tr><td><a href="/malaga-airport-to-maria-zambrano-station/">María Zambrano station</a></td><td>15 min</td><td>9 km</td></tr>
<tr><td><a href="/malaga-airport-to-cruise-port/">Cruise port</a></td><td>15 min</td><td>8 km</td></tr>
<tr><td><a href="/malaga-airport-to-torremolinos/">Torremolinos</a></td><td>15 min</td><td>12 km</td></tr>
<tr><td><a href="/malaga-airport-to-benalmadena/">Benalmádena</a></td><td>20 min</td><td>18 km</td></tr>
<tr><td><a href="/malaga-airport-to-fuengirola/">Fuengirola</a></td><td>25 min</td><td>25 km</td></tr>
<tr><td><a href="/malaga-airport-to-mijas/">Mijas</a></td><td>35 min</td><td>30 km</td></tr>
<tr><td><a href="/malaga-airport-to-marbella/">Marbella</a></td><td>40 min</td><td>60 km</td></tr>
<tr><td><a href="/malaga-airport-to-puerto-banus/">Puerto Banús</a></td><td>45 min</td><td>65 km</td></tr>
<tr><td><a href="/malaga-airport-to-estepona/">Estepona</a></td><td>50 min</td><td>85 km</td></tr>
<tr><td><a href="/malaga-airport-to-nerja/">Nerja</a></td><td>55 min</td><td>52 km</td></tr>
<tr><td><a href="/malaga-airport-to-caminito-del-rey/">Caminito del Rey</a></td><td>1 hr</td><td>55 km</td></tr>
<tr><td><a href="/malaga-airport-to-granada/">Granada</a></td><td>1 hr 20 min</td><td>130 km</td></tr>
</tbody>
</table>

<h3>Transfers to Málaga city hotels</h3>
<p>We also have pages for transfers to many central Málaga hotels, including the <a href="/malaga-airport-to-gran-hotel-miramar/">Gran Hotel Miramar</a>, <a href="/malaga-airport-to-ac-hotel-malaga-palacio/">AC Hotel Málaga Palacio</a>, <a href="/malaga-airport-to-hotel-molina-lario/">Hotel Molina Lario</a>, <a href="/malaga-airport-to-parador-malaga-gibralfaro/">Parador de Málaga Gibralfaro</a>, <a href="/malaga-airport-to-only-you-hotel-malaga/">Only YOU Hotel Málaga</a> and <a href="/malaga-airport-to-barcelo-malaga/">Barceló Málaga</a>. For anywhere else, give us the address in the quote form and we'll price the trip.</p>

<h3>Cruise passengers and onward travel</h3>
<p>Málaga's cruise terminals are only about 15 minutes from the airport. Our <a href="/blog/malaga-cruise-port-transfer-guide/">Málaga cruise port guide</a> explains how the port works. If you're heading inland, our <a href="/blog/malaga-airport-to-granada-transport-options/">guide to getting from Málaga Airport to Granada</a> compares every option, and the <a href="/blog/private-transfer-malaga-guide/">guide to private transport in Málaga</a> covers the rest of the area.</p>`;

export const MALAGA_AIRPORT_RICH_CONTENT_ES = `<p>El Aeropuerto de Málaga-Costa del Sol (AGP) está entre Málaga capital y Torremolinos, a unos 10 km del centro. Por eso es la puerta de entrada a toda la Costa del Sol: el centro de Málaga y Torremolinos quedan a unos 15–20 minutos, Marbella a unos 40 minutos y ciudades del interior como Granada a algo más de una hora y veinte.</p>

<h3>Tus opciones desde la terminal</h3>
<p>Las terminales del aeropuerto están comunicadas bajo un mismo techo, y la mayoría de las llegadas se hacen por la Terminal 3.</p>
<ul>
<li><strong>Tren:</strong> la línea C-1 de Cercanías sale de la estación del aeropuerto hacia Málaga (María Zambrano y Centro-Alameda, unos 12 minutos hasta el centro) y, en sentido contrario, recorre la costa por Torremolinos y Benalmádena hasta Fuengirola. Pasa aproximadamente cada 20 minutos.</li>
<li><strong>Autobús:</strong> la Línea A Express de la EMT une el aeropuerto con el centro de Málaga, y hay autobuses de largo recorrido a destinos como Granada o Marbella. Consulta los horarios en la web de cada operador.</li>
<li><strong>Taxi:</strong> hay taxis en la parada de la salida de llegadas, con taxímetro. En trayectos largos, pregunta el importe aproximado antes de salir.</li>
<li><strong>Traslado privado:</strong> un coche reservado con antelación solo para tu grupo, con el conductor esperándote en llegadas y un precio acordado antes del viaje. Es la opción más sencilla para familias, grupos, bolsas de golf o mucho equipaje, llegadas tardías y destinos a los que no llega el tren, como Marbella, Estepona, Nerja o Granada.</li>
</ul>

<h3>Cómo funciona la recogida en el Aeropuerto de Málaga</h3>
<p>Tu conductor te espera en el vestíbulo de llegadas con un cartel con tu nombre. Si incluyes el número de vuelo al reservar, seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje. El tiempo de espera se cuenta desde ese aterrizaje e incluye 60 minutos gratuitos en vuelos internacionales y 45 en nacionales. El precio confirmado al reservar es cerrado. Solo hay cargos adicionales por paradas extra, por esperas que superen el tiempo incluido o por cambios que pidas después de reservar. La mayoría de las reservas se pueden cancelar sin coste hasta 24 horas antes de la recogida.</p>

<h3>Traslados más habituales desde el Aeropuerto de Málaga</h3>
<p>Tiempos aproximados con tráfico normal. Cada enlace lleva a la página de la ruta, con todos los detalles y el botón para pedir presupuesto.</p>
<table>
<thead><tr><th>Destino</th><th>Trayecto aprox.</th><th>Distancia</th></tr></thead>
<tbody>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-catedral-de-malaga/">Centro de Málaga (Catedral)</a></td><td>20 min</td><td>10 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-estacion-maria-zambrano/">Estación María Zambrano</a></td><td>15 min</td><td>9 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-puerto-crucero/">Puerto de cruceros</a></td><td>15 min</td><td>8 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-torremolinos/">Torremolinos</a></td><td>15 min</td><td>12 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-benalmadena/">Benalmádena</a></td><td>20 min</td><td>18 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-fuengirola/">Fuengirola</a></td><td>25 min</td><td>25 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-mijas/">Mijas</a></td><td>35 min</td><td>30 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-marbella/">Marbella</a></td><td>40 min</td><td>60 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-puerto-banus/">Puerto Banús</a></td><td>45 min</td><td>65 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-estepona/">Estepona</a></td><td>50 min</td><td>85 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-nerja/">Nerja</a></td><td>55 min</td><td>52 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-caminito-del-rey/">Caminito del Rey</a></td><td>1 h</td><td>55 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-malaga-a-granada/">Granada</a></td><td>1 h 20 min</td><td>130 km</td></tr>
</tbody>
</table>

<h3>Traslados a hoteles de Málaga capital</h3>
<p>También tenemos páginas para los traslados a muchos hoteles del centro de Málaga, como el <a href="/es/traslado-aeropuerto-malaga-a-gran-hotel-miramar/">Gran Hotel Miramar</a>, el <a href="/es/traslado-aeropuerto-malaga-a-ac-hotel-malaga-palacio/">AC Hotel Málaga Palacio</a>, el <a href="/es/traslado-aeropuerto-malaga-a-hotel-molina-lario/">Hotel Molina Lario</a>, el <a href="/es/traslado-aeropuerto-malaga-a-parador-malaga-gibralfaro/">Parador de Málaga Gibralfaro</a>, el <a href="/es/traslado-aeropuerto-malaga-a-only-you-hotel-malaga/">Only YOU Hotel Málaga</a> y el <a href="/es/traslado-aeropuerto-malaga-a-barcelo-malaga/">Barceló Málaga</a>. Para cualquier otra dirección, indícala en el formulario de presupuesto y te daremos precio.</p>

<h3>Cruceristas y trayectos al interior</h3>
<p>Las terminales de cruceros de Málaga están a solo unos 15 minutos del aeropuerto. Nuestra <a href="/es/blog/guia-puerto-cruceros-malaga/">guía del puerto de cruceros de Málaga</a> explica cómo funciona el puerto. Si vas al interior, nuestra <a href="/es/blog/aeropuerto-malaga-a-granada-como-llegar/">guía para ir del Aeropuerto de Málaga a Granada</a> compara todas las opciones, y la <a href="/es/blog/transporte-privado-malaga-guia/">guía de transporte privado en Málaga</a> cubre el resto de la zona.</p>`;

export const MALAGA_AIRPORT_FAQ_EN: PageFaqItem[] = [
  {
    question: "How far is Málaga Airport from the city centre?",
    answer: "About 10 km. By car it usually takes 15–20 minutes to central Málaga in normal traffic.",
  },
  {
    question: "How long is the transfer from Málaga Airport to Marbella?",
    answer: "Around 40 minutes for roughly 60 km in normal traffic, a little longer to Puerto Banús or Estepona.",
  },
  {
    question: "Is there a train from Málaga Airport?",
    answer: "Yes. The C-1 Cercanías runs from the airport into Málaga (about 12 minutes to Centro-Alameda) and along the coast to Torremolinos, Benalmádena and Fuengirola. It doesn't reach Marbella, Estepona or Nerja.",
  },
  {
    question: "Where will my driver meet me at Málaga Airport?",
    answer: "In the arrivals hall, holding a sign with your name, after you've collected your luggage.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer: "If you include your flight number when booking, we monitor the flight and adjust the pickup to your actual landing time. Waiting time counts from that landing and includes 60 minutes free for international arrivals and 45 minutes for domestic ones.",
  },
  {
    question: "Can I travel with golf bags or extra luggage?",
    answer: "Yes. Tell us about golf bags, extra suitcases or child seats in the quote form so we can send a suitable vehicle, such as an SUV, Mercedes V-Class or minivan.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee.",
  },
];

export const MALAGA_AIRPORT_FAQ_ES: PageFaqItem[] = [
  {
    question: "¿A qué distancia está el Aeropuerto de Málaga del centro?",
    answer: "A unos 10 km. En coche se suele tardar entre 15 y 20 minutos hasta el centro de Málaga con tráfico normal.",
  },
  {
    question: "¿Cuánto dura el traslado del Aeropuerto de Málaga a Marbella?",
    answer: "Alrededor de 40 minutos para unos 60 km con tráfico normal, algo más hasta Puerto Banús o Estepona.",
  },
  {
    question: "¿Hay tren desde el Aeropuerto de Málaga?",
    answer: "Sí. El Cercanías C-1 va del aeropuerto a Málaga (unos 12 minutos hasta Centro-Alameda) y por la costa hasta Torremolinos, Benalmádena y Fuengirola. No llega a Marbella, Estepona ni Nerja.",
  },
  {
    question: "¿Dónde me espera el conductor en el Aeropuerto de Málaga?",
    answer: "En el vestíbulo de llegadas, con un cartel con tu nombre, una vez que hayas recogido el equipaje.",
  },
  {
    question: "¿Qué pasa si mi vuelo se retrasa?",
    answer: "Si incluyes el número de vuelo al reservar, seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje. El tiempo de espera se cuenta desde ese aterrizaje e incluye 60 minutos gratuitos en vuelos internacionales y 45 en nacionales.",
  },
  {
    question: "¿Puedo viajar con bolsas de golf o equipaje extra?",
    answer: "Sí. Indica en el formulario de presupuesto si llevas bolsas de golf, maletas adicionales o necesitas sillas infantiles, y te enviaremos un vehículo adecuado, como un SUV, una Mercedes Clase V o una furgoneta.",
  },
  {
    question: "¿Puedo cancelar o modificar la reserva?",
    answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo.",
  },
];
