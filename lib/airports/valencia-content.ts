import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Valencia Airport (VLC) page — see
// PageContentOverrides in lib/shared/page-copy.ts. Drive times and distances
// are the site's own estimates from lib/routes/data/valencia.ts, and each
// destination links to its route page. Public-transport details were checked
// in Nov 2026 against Visit València and transport guides; times and fares
// change, so the copy points readers to metrovalencia.es rather than quoting
// a timetable. Service claims match the terms (fixed price at booking,
// flight monitoring when a flight number is given, 60/45 min free waiting,
// free cancellation up to 24h).

export const VALENCIA_AIRPORT_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Valencia Airport Transfer | Private Car, Fixed Price",
  metaDescription:
    "Private transfers from Valencia Airport (VLC) to the city centre, hotels, cruise port and coast. Driver in arrivals, flight monitored, fixed price. Get a quote.",
  heroDescription:
    "Private transfers from Valencia Airport to your hotel, the cruise port, the train stations or anywhere on the coast. Your driver meets you in arrivals, and the price is fixed when you book.",
};

export const VALENCIA_AIRPORT_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Transfer y Traslado Aeropuerto de Valencia | Precio Cerrado",
  metaDescription:
    "Transfer privado del Aeropuerto de Valencia al centro, hoteles, puerto y costa. Conductor en llegadas, seguimiento del vuelo y precio cerrado al reservar.",
  heroDescription:
    "Traslados privados desde el Aeropuerto de Valencia a tu hotel, al puerto de cruceros, a las estaciones de tren o a cualquier punto de la costa. Tu conductor te espera en llegadas y el precio queda cerrado al reservar.",
};

export const VALENCIA_AIRPORT_RICH_TITLE_EN = "Getting From Valencia Airport to the City and the Coast";
export const VALENCIA_AIRPORT_RICH_TITLE_ES = "Cómo ir del Aeropuerto de Valencia a la ciudad y a la costa";

export const VALENCIA_AIRPORT_RICH_CONTENT_EN = `<p>Valencia Airport (VLC) is in Manises, west of the city. The drive to central Valencia is usually around 20–25 minutes and roughly 10–12 km, depending on where you're staying and the traffic. Because the airport is so close, most visitors are at their hotel within half an hour of leaving the terminal, whichever way they travel.</p>

<h3>Your options from the terminal</h3>
<ul>
<li><strong>Metro:</strong> Metrovalencia lines 3 and 5 stop at the airport and run into the centre, including Xàtiva (next to Valencia Nord station) and Colón, in roughly 20–25 minutes. It's the cheapest option if you're travelling light and staying near a metro station. Check <a href="https://www.metrovalencia.es">metrovalencia.es</a> for current fares and the last train of the day.</li>
<li><strong>Bus:</strong> a MetroBus line also links the airport with the city. It's slower than the metro and runs less often.</li>
<li><strong>Taxi:</strong> taxis wait at the rank outside arrivals around the clock and are metered.</li>
<li><strong>Private transfer:</strong> a car booked in advance for your group, with the driver waiting for you in arrivals and a price agreed before you travel. It suits families, groups, travellers with a lot of luggage, late arrivals, and anyone going beyond the metro network, such as the beaches or towns along the coast.</li>
</ul>

<h3>How our Valencia Airport pickup works</h3>
<p>Your driver waits in the arrivals hall with a sign showing your name. If you include your flight number when you book, we monitor the flight and time the pickup to your actual landing. Waiting time counts from that landing and includes 60 minutes free for international arrivals and 45 minutes for domestic ones. The price confirmed at booking is fixed. Extra charges apply only for additional stops, waiting beyond the included allowance, or changes you ask for after booking. Most bookings can be cancelled free of charge up to 24 hours before pickup.</p>

<h3>Popular transfers from Valencia Airport</h3>
<p>Typical drive times in normal traffic. Each link has route details and a quote button.</p>
<table>
<thead><tr><th>Destination</th><th>Approx. drive</th><th>Distance</th></tr></thead>
<tbody>
<tr><td><a href="/valencia-airport-to-valencia-old-town/">Old town (Ciutat Vella)</a></td><td>25 min</td><td>12 km</td></tr>
<tr><td><a href="/valencia-airport-to-city-of-arts-and-sciences/">City of Arts and Sciences</a></td><td>20 min</td><td>10 km</td></tr>
<tr><td><a href="/valencia-airport-to-joaquin-sorolla-station/">Joaquín Sorolla station (AVE)</a></td><td>20 min</td><td>10 km</td></tr>
<tr><td><a href="/valencia-airport-to-valencia-nord-station/">Valencia Nord station</a></td><td>25 min</td><td>12 km</td></tr>
<tr><td><a href="/valencia-airport-to-cruise-port/">Cruise port</a></td><td>25 min</td><td>15 km</td></tr>
<tr><td><a href="/valencia-airport-to-malvarrosa-beach/">Malvarrosa beach</a></td><td>30 min</td><td>15 km</td></tr>
<tr><td><a href="/valencia-airport-to-albufera/">La Albufera natural park</a></td><td>30 min</td><td>18 km</td></tr>
<tr><td><a href="/valencia-airport-to-sagunto/">Sagunto</a></td><td>35 min</td><td>25 km</td></tr>
<tr><td><a href="/valencia-airport-to-cullera/">Cullera</a></td><td>40 min</td><td>40 km</td></tr>
<tr><td><a href="/valencia-airport-to-gandia/">Gandía</a></td><td>50 min</td><td>65 km</td></tr>
<tr><td><a href="/valencia-airport-to-xativa/">Xàtiva</a></td><td>1 hr</td><td>60 km</td></tr>
<tr><td><a href="/valencia-airport-to-castellon/">Castellón</a></td><td>1 hr</td><td>75 km</td></tr>
<tr><td><a href="/valencia-airport-to-benicassim/">Benicàssim</a></td><td>1 hr 15 min</td><td>85 km</td></tr>
<tr><td><a href="/valencia-airport-to-peniscola/">Peñíscola</a></td><td>1 hr 15 min</td><td>90 km</td></tr>
</tbody>
</table>

<h3>Transfers to Valencia hotels</h3>
<p>We have dedicated pages for transfers to many of Valencia's best-known hotels, including <a href="/valencia-airport-to-hotel-las-arenas/">Hotel Las Arenas</a>, <a href="/valencia-airport-to-sh-valencia-palace/">SH Valencia Palace</a>, <a href="/valencia-airport-to-the-westin-valencia/">The Westin Valencia</a>, <a href="/valencia-airport-to-melia-valencia/">Meliá Valencia</a>, <a href="/valencia-airport-to-only-you-hotel-valencia/">Only YOU Hotel Valencia</a>, <a href="/valencia-airport-to-hotel-dimar/">Hotel Dimar</a>, <a href="/valencia-airport-to-barcelo-valencia/">Barceló Valencia</a>, <a href="/valencia-airport-to-vincci-lys/">Vincci Lys</a>, <a href="/valencia-airport-to-caro-hotel/">Caro Hotel</a>, <a href="/valencia-airport-to-hospes-palau-de-la-mar/">Hospes Palau de la Mar</a> and <a href="/valencia-airport-to-nh-collection-valencia-colon/">NH Collection Valencia Colón</a>. If your hotel isn't listed, give us the address in the quote form and we'll price the trip.</p>

<h3>Cruise passengers and longer journeys</h3>
<p>If you're joining a cruise, the <a href="/valencia-airport-to-cruise-port/">airport to cruise port transfer</a> takes you straight to the port, and our <a href="/blog/valencia-cruise-port-transfer-guide/">Valencia cruise port guide</a> explains where ships dock. For longer trips, we also drive from Valencia to <a href="/valencia-to-alicante-transfer/">Alicante</a> (around 1 hr 45 min) and <a href="/valencia-to-granada-transfer/">Granada</a> (around 3 hr 30 min), and our <a href="/blog/private-transfer-valencia-guide/">guide to private transport in Valencia</a> covers getting around the city itself.</p>`;

export const VALENCIA_AIRPORT_RICH_CONTENT_ES = `<p>El Aeropuerto de Valencia (VLC) está en Manises, al oeste de la ciudad. El trayecto en coche hasta el centro suele durar entre 20 y 25 minutos y son unos 10–12 km, según dónde te alojes y el tráfico. Como el aeropuerto está tan cerca, la mayoría de los viajeros llega a su hotel en menos de media hora tras salir de la terminal, elijan la opción que elijan.</p>

<h3>Tus opciones desde la terminal</h3>
<ul>
<li><strong>Metro:</strong> las líneas 3 y 5 de Metrovalencia paran en el aeropuerto y llegan al centro, entre otras a Xàtiva (junto a la estación del Norte) y Colón, en unos 20–25 minutos. Es la opción más barata si viajas con poco equipaje y te alojas cerca de una parada. Consulta tarifas y el último tren del día en <a href="https://www.metrovalencia.es">metrovalencia.es</a>.</li>
<li><strong>Autobús:</strong> una línea de MetroBus también une el aeropuerto con la ciudad. Es más lenta que el metro y pasa con menos frecuencia.</li>
<li><strong>Taxi:</strong> hay taxis en la parada de la salida de llegadas a cualquier hora, con taxímetro.</li>
<li><strong>Traslado privado:</strong> un coche reservado con antelación solo para tu grupo, con el conductor esperándote en llegadas y un precio acordado antes del viaje. Es la opción más cómoda para familias, grupos, viajeros con mucho equipaje, llegadas tardías y para quien va más allá de la red de metro, como las playas o los pueblos de la costa.</li>
</ul>

<h3>Cómo funciona la recogida en el Aeropuerto de Valencia</h3>
<p>Tu conductor te espera en el vestíbulo de llegadas con un cartel con tu nombre. Si incluyes el número de vuelo al reservar, seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje. El tiempo de espera se cuenta desde ese aterrizaje e incluye 60 minutos gratuitos en vuelos internacionales y 45 en nacionales. El precio confirmado al reservar es cerrado. Solo hay cargos adicionales por paradas extra, por esperas que superen el tiempo incluido o por cambios que pidas después de reservar. La mayoría de las reservas se pueden cancelar sin coste hasta 24 horas antes de la recogida.</p>

<h3>Traslados más habituales desde el Aeropuerto de Valencia</h3>
<p>Tiempos aproximados con tráfico normal. Cada enlace lleva a la página de la ruta, con todos los detalles y el botón para pedir presupuesto.</p>
<table>
<thead><tr><th>Destino</th><th>Trayecto aprox.</th><th>Distancia</th></tr></thead>
<tbody>
<tr><td><a href="/es/traslado-aeropuerto-valencia-al-casco-antiguo-de-valencia/">Casco antiguo (Ciutat Vella)</a></td><td>25 min</td><td>12 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-ciudad-de-las-artes-y-las-ciencias/">Ciudad de las Artes y las Ciencias</a></td><td>20 min</td><td>10 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-estacion-joaquin-sorolla/">Estación Joaquín Sorolla (AVE)</a></td><td>20 min</td><td>10 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-estacion-valencia-nord/">Estación del Norte</a></td><td>25 min</td><td>12 km</td></tr>
<tr><td><a href="/es/aeropuerto-valencia-a-puerto-cruceros/">Puerto de cruceros</a></td><td>25 min</td><td>15 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-la-playa-de-la-malvarrosa/">Playa de la Malvarrosa</a></td><td>30 min</td><td>15 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-al-parque-natural-de-la-albufera/">Parque Natural de la Albufera</a></td><td>30 min</td><td>18 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-sagunto/">Sagunto</a></td><td>35 min</td><td>25 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-cullera/">Cullera</a></td><td>40 min</td><td>40 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-gandia/">Gandía</a></td><td>50 min</td><td>65 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-xativa/">Xàtiva</a></td><td>1 h</td><td>60 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-castellon/">Castellón</a></td><td>1 h</td><td>75 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-benicassim/">Benicàssim</a></td><td>1 h 15 min</td><td>85 km</td></tr>
<tr><td><a href="/es/traslado-aeropuerto-valencia-a-peniscola/">Peñíscola</a></td><td>1 h 15 min</td><td>90 km</td></tr>
</tbody>
</table>

<h3>Traslados a hoteles de Valencia</h3>
<p>Tenemos páginas específicas para los traslados a muchos de los hoteles más conocidos de Valencia, como el <a href="/es/traslado-aeropuerto-valencia-a-hotel-las-arenas/">Hotel Las Arenas</a>, el <a href="/es/traslado-aeropuerto-valencia-a-sh-valencia-palace/">SH Valencia Palace</a>, <a href="/es/traslado-aeropuerto-valencia-a-the-westin-valencia/">The Westin Valencia</a>, el <a href="/es/traslado-aeropuerto-valencia-a-melia-valencia/">Meliá Valencia</a>, el <a href="/es/traslado-aeropuerto-valencia-a-only-you-hotel-valencia/">Only YOU Hotel Valencia</a>, el <a href="/es/traslado-aeropuerto-valencia-a-hotel-dimar/">Hotel Dimar</a>, el <a href="/es/traslado-aeropuerto-valencia-a-barcelo-valencia/">Barceló Valencia</a>, el <a href="/es/traslado-aeropuerto-valencia-a-vincci-lys/">Vincci Lys</a>, el <a href="/es/traslado-aeropuerto-valencia-a-caro-hotel/">Caro Hotel</a>, el <a href="/es/traslado-aeropuerto-valencia-a-hospes-palau-de-la-mar/">Hospes Palau de la Mar</a> y el <a href="/es/traslado-aeropuerto-valencia-a-nh-collection-valencia-colon/">NH Collection Valencia Colón</a>. Si tu hotel no aparece, indícanos la dirección en el formulario de presupuesto y te daremos precio.</p>

<h3>Cruceristas y trayectos más largos</h3>
<p>Si vas a embarcar en un crucero, el <a href="/es/aeropuerto-valencia-a-puerto-cruceros/">traslado del aeropuerto al puerto de cruceros</a> te deja directamente en el puerto, y nuestra <a href="/es/blog/guia-puerto-cruceros-valencia/">guía del puerto de cruceros de Valencia</a> explica dónde atracan los barcos. Para trayectos más largos, también hacemos traslados de Valencia a <a href="/es/valencia-a-alicante-traslado/">Alicante</a> (alrededor de 1 h 45 min) y a <a href="/es/valencia-a-granada-traslado/">Granada</a> (alrededor de 3 h 30 min), y nuestra <a href="/es/blog/transporte-privado-valencia-guia/">guía de transporte privado en Valencia</a> explica cómo moverse por la ciudad.</p>`;

export const VALENCIA_AIRPORT_FAQ_EN: PageFaqItem[] = [
  {
    question: "How far is Valencia Airport from the city centre?",
    answer: "About 10–12 km. By car it usually takes around 20–25 minutes to central Valencia in normal traffic, a little longer to the beaches or the port.",
  },
  {
    question: "Is there a metro from Valencia Airport to the city?",
    answer: "Yes. Metrovalencia lines 3 and 5 run from the airport into the centre in roughly 20–25 minutes. Check metrovalencia.es for current fares and the last train, especially for late arrivals.",
  },
  {
    question: "Where will my driver meet me at Valencia Airport?",
    answer: "In the arrivals hall, holding a sign with your name, after you've collected your luggage.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer: "If you include your flight number when booking, we monitor the flight and adjust the pickup to your actual landing time. Waiting time counts from that landing and includes 60 minutes free for international arrivals and 45 minutes for domestic ones.",
  },
  {
    question: "Can you take me from Valencia Airport to the cruise port?",
    answer: "Yes. The drive is usually around 25 minutes. Give us your ship and embarkation time when you request a quote.",
  },
  {
    question: "Do you go beyond Valencia, for example to Gandía, Peñíscola or Alicante?",
    answer: "Yes. We run transfers from Valencia Airport along the coast, including Cullera, Gandía, Benicàssim and Peñíscola, and longer trips such as Alicante. Tell us the address and we'll quote a fixed price.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee.",
  },
];

export const VALENCIA_AIRPORT_FAQ_ES: PageFaqItem[] = [
  {
    question: "¿A qué distancia está el Aeropuerto de Valencia del centro?",
    answer: "A unos 10–12 km. En coche se suele tardar entre 20 y 25 minutos hasta el centro de Valencia con tráfico normal, algo más hasta las playas o el puerto.",
  },
  {
    question: "¿Hay metro del Aeropuerto de Valencia a la ciudad?",
    answer: "Sí. Las líneas 3 y 5 de Metrovalencia van del aeropuerto al centro en unos 20–25 minutos. Consulta tarifas y el último tren en metrovalencia.es, sobre todo si llegas tarde.",
  },
  {
    question: "¿Dónde me espera el conductor en el Aeropuerto de Valencia?",
    answer: "En el vestíbulo de llegadas, con un cartel con tu nombre, una vez que hayas recogido el equipaje.",
  },
  {
    question: "¿Qué pasa si mi vuelo se retrasa?",
    answer: "Si incluyes el número de vuelo al reservar, seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje. El tiempo de espera se cuenta desde ese aterrizaje e incluye 60 minutos gratuitos en vuelos internacionales y 45 en nacionales.",
  },
  {
    question: "¿Podéis llevarme del Aeropuerto de Valencia al puerto de cruceros?",
    answer: "Sí. El trayecto suele durar unos 25 minutos. Indícanos el barco y la hora de embarque al pedir presupuesto.",
  },
  {
    question: "¿Hacéis traslados fuera de Valencia, por ejemplo a Gandía, Peñíscola o Alicante?",
    answer: "Sí. Hacemos traslados desde el Aeropuerto de Valencia a toda la costa, como Cullera, Gandía, Benicàssim o Peñíscola, y trayectos más largos como Alicante. Indícanos la dirección y te daremos un precio cerrado.",
  },
  {
    question: "¿Puedo cancelar o modificar la reserva?",
    answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo.",
  },
];
