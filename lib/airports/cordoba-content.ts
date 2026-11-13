import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Córdoba Airport (ODB) page, repurposed (Nov
// 2026) instead of noindexed. Scheduled routes are only those listed on
// Aena's official destinations page when checked on 13 Nov 2026
// (https://www.aena.es/en/cordoba/airlines-and-destinations/airport-destinations.html):
// Barcelona-El Prat (Vueling) and Gran Canaria (Binter Canarias). Aena shows
// no dates or seasons, so the copy says schedules change and points readers
// to the airlines. Alternative airports/rail and drive times use the site's
// own route data (lib/routes/data/cordoba.ts, malaga.ts, seville.ts).

export const CORDOBA_AIRPORT_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Córdoba Airport (ODB) Transfers | Flights & Alternatives",
  metaDescription:
    "Córdoba Airport has only a few scheduled routes. See which flights Aena lists, how most visitors reach Córdoba instead, and book a private transfer.",
  heroDescription:
    "Córdoba's own airport has a small schedule, so many visitors arrive by high-speed train or through Málaga or Seville. Here's what flies from Córdoba Airport and how to get into the city from any of them.",
};

export const CORDOBA_AIRPORT_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Aeropuerto de Córdoba (ODB): Vuelos, Alternativas y Traslados",
  metaDescription:
    "El Aeropuerto de Córdoba tiene pocas rutas regulares. Consulta qué vuelos publica Aena, cómo llega la mayoría de viajeros a Córdoba y reserva tu traslado.",
  heroDescription:
    "El aeropuerto de Córdoba tiene una programación reducida, así que muchos viajeros llegan en tren de alta velocidad o por Málaga o Sevilla. Aquí tienes qué vuela desde Córdoba y cómo llegar a la ciudad desde cualquiera de ellos.",
};

export const CORDOBA_AIRPORT_RICH_TITLE_EN = "Flying Into Córdoba: What to Know";
export const CORDOBA_AIRPORT_RICH_TITLE_ES = "Volar a Córdoba: lo que conviene saber";

export const CORDOBA_AIRPORT_RICH_CONTENT_EN = `<p>Córdoba Airport (ODB) is a small regional airport a short drive from the city centre, usually around 15 minutes. It returned to scheduled passenger flights in 2025 after many years without them, but its schedule is still limited. When we checked Aena's official destinations page in November 2026, it listed two routes:</p>
<ul>
<li><strong>Barcelona-El Prat</strong>, operated by Vueling</li>
<li><strong>Gran Canaria</strong>, operated by Binter Canarias</li>
</ul>
<p>Routes and frequencies at small airports often change by season, and Aena's page notes that information comes from airline schedules. Check the airline's own website for your dates before planning around a flight.</p>

<h3>How most visitors reach Córdoba</h3>
<p>Because Córdoba's flight schedule is small, most visitors arrive another way:</p>
<ul>
<li><strong>High-speed train:</strong> Córdoba is on the high-speed lines linking Madrid with Seville and Málaga, and the station is a short drive from the historic centre. See our transfers from <a href="/cordoba-train-station-to-city-centre/">Córdoba station to the city centre</a>.</li>
<li><strong>Via Málaga Airport:</strong> Málaga has a much larger international schedule. Our <a href="/malaga-airport-to-cordoba-transfer/">Málaga Airport to Córdoba transfer</a> takes around 2 hours for about 175 km.</li>
<li><strong>Via Seville:</strong> Seville Airport is the other common gateway; see our <a href="/seville-to-cordoba-transfer/">Seville to Córdoba transfer</a>.</li>
<li><strong>From Madrid:</strong> a <a href="/madrid-to-cordoba-transfer/">Madrid to Córdoba transfer</a> is a long drive (around 3 hr 45 min); the train is usually quicker.</li>
</ul>

<h3>Transfers from Córdoba Airport</h3>
<p>If you do fly into Córdoba, a private transfer takes you from the terminal to your hotel or apartment; the historic centre around the Mezquita has narrow streets with restricted traffic, so give us your exact address and we'll confirm the nearest permitted drop-off point. Your driver meets you in arrivals with a name sign, and if you include your flight number we time the pickup to your actual landing. For the city itself, see our <a href="/cordoba/">Córdoba page</a>.</p>`;

export const CORDOBA_AIRPORT_RICH_CONTENT_ES = `<p>El Aeropuerto de Córdoba (ODB) es un aeropuerto regional pequeño, a poca distancia en coche del centro, normalmente unos 15 minutos. Recuperó los vuelos regulares de pasajeros en 2025 tras muchos años sin ellos, pero su programación sigue siendo limitada. Cuando consultamos la página oficial de destinos de Aena en noviembre de 2026, figuraban dos rutas:</p>
<ul>
<li><strong>Barcelona-El Prat</strong>, operada por Vueling</li>
<li><strong>Gran Canaria</strong>, operada por Binter Canarias</li>
</ul>
<p>En los aeropuertos pequeños, las rutas y frecuencias cambian a menudo según la temporada, y la propia página de Aena indica que la información procede de la programación de las aerolíneas. Consulta la web de la aerolínea para tus fechas antes de organizar el viaje en torno a un vuelo.</p>

<h3>Cómo llega a Córdoba la mayoría de los viajeros</h3>
<p>Como la programación de vuelos de Córdoba es reducida, la mayoría de los viajeros llega de otra forma:</p>
<ul>
<li><strong>Tren de alta velocidad:</strong> Córdoba está en las líneas de alta velocidad que unen Madrid con Sevilla y Málaga, y la estación está a pocos minutos en coche del centro histórico. Consulta nuestros traslados de la <a href="/es/estacion-de-cordoba-al-centro-de-la-ciudad/">estación de Córdoba al centro</a>.</li>
<li><strong>Por el Aeropuerto de Málaga:</strong> Málaga tiene una programación internacional mucho mayor. Nuestro <a href="/es/aeropuerto-de-malaga-a-cordoba-traslado/">traslado del Aeropuerto de Málaga a Córdoba</a> dura alrededor de 2 horas para unos 175 km.</li>
<li><strong>Por Sevilla:</strong> el Aeropuerto de Sevilla es la otra puerta de entrada habitual; consulta nuestro <a href="/es/sevilla-a-cordoba-traslado/">traslado de Sevilla a Córdoba</a>.</li>
<li><strong>Desde Madrid:</strong> un <a href="/es/madrid-a-cordoba-traslado/">traslado de Madrid a Córdoba</a> es un trayecto largo (alrededor de 3 h 45 min); el tren suele ser más rápido.</li>
</ul>

<h3>Traslados desde el Aeropuerto de Córdoba</h3>
<p>Si vuelas a Córdoba, un traslado privado te lleva de la terminal a tu hotel o apartamento; el centro histórico en torno a la Mezquita tiene calles estrechas con tráfico restringido, así que indícanos la dirección exacta y te confirmaremos el punto de llegada permitido más cercano. El conductor te espera en llegadas con un cartel con tu nombre y, si incluyes el número de vuelo, ajustamos la recogida a la hora real de aterrizaje. Para la ciudad, consulta nuestra <a href="/es/cordoba/">página de Córdoba</a>.</p>`;

export const CORDOBA_AIRPORT_FAQ_EN: PageFaqItem[] = [
  { question: "Does Córdoba Airport have scheduled flights?", answer: "Yes, a small number. In November 2026 Aena listed Barcelona-El Prat (Vueling) and Gran Canaria (Binter Canarias). Schedules can change by season, so check with the airline for your dates." },
  { question: "How far is Córdoba Airport from the city centre?", answer: "It's a short drive, usually around 15 minutes to the centre." },
  { question: "What's the best way to reach Córdoba if there's no suitable flight?", answer: "Most visitors arrive by high-speed train or fly into Málaga or Seville and continue by road or rail. A private transfer from Málaga Airport takes around 2 hours." },
  { question: "Can the car drop me in Córdoba's historic centre?", answer: "Parts of the historic centre around the Mezquita are restricted to traffic. We take you to your accommodation where access is permitted, or to the nearest permitted drop-off point." },
  { question: "Can I cancel or change my booking?", answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee." },
];

export const CORDOBA_AIRPORT_FAQ_ES: PageFaqItem[] = [
  { question: "¿El Aeropuerto de Córdoba tiene vuelos regulares?", answer: "Sí, pocos. En noviembre de 2026 Aena publicaba Barcelona-El Prat (Vueling) y Gran Canaria (Binter Canarias). La programación puede cambiar según la temporada, así que consulta con la aerolínea para tus fechas." },
  { question: "¿A qué distancia está el Aeropuerto de Córdoba del centro?", answer: "Está a poca distancia en coche, normalmente unos 15 minutos hasta el centro." },
  { question: "¿Cuál es la mejor forma de llegar a Córdoba si no hay un vuelo adecuado?", answer: "La mayoría de los viajeros llega en tren de alta velocidad o vuela a Málaga o Sevilla y continúa por carretera o en tren. Un traslado privado desde el Aeropuerto de Málaga dura alrededor de 2 horas." },
  { question: "¿Puede el coche dejarme en el centro histórico de Córdoba?", answer: "Parte del centro histórico en torno a la Mezquita tiene el tráfico restringido. Te llevamos hasta tu alojamiento si el acceso está permitido o hasta el punto de llegada permitido más cercano." },
  { question: "¿Puedo cancelar o modificar la reserva?", answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo." },
];
