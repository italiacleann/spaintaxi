import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Logroño-Agoncillo Airport (RJL) page,
// repurposed (Nov 2026) instead of noindexed. Scheduled routes are only those
// on Aena's official destinations page when checked on 13 Nov 2026
// (https://www.aena.es/en/logrono-agoncillo/airlines-and-destinations/airport-destinations.html):
// Barcelona-El Prat (Vueling) and Madrid-Barajas (Air Nostrum, Iberia).
// Seasonal routes reported in the press are not listed on Aena's page, so
// they're only mentioned generically. Alternative-airport drive times use
// the site's own route data (lib/routes/data/zaragoza.ts, bilbao.ts).

export const LOGRONO_AIRPORT_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Logroño Airport (RJL) Transfers | Flights & Alternatives",
  metaDescription:
    "Logroño-Agoncillo Airport has a small schedule. See which routes Aena lists, the alternative airports for La Rioja, and book a private transfer.",
  heroDescription:
    "Logroño-Agoncillo is a small airport with a handful of routes, so many visitors to La Rioja fly into Bilbao or Zaragoza instead. Here's what flies from Logroño and how to reach the city from each airport.",
};

export const LOGRONO_AIRPORT_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Aeropuerto de Logroño (RJL): Vuelos, Alternativas y Traslados",
  metaDescription:
    "El Aeropuerto de Logroño-Agoncillo tiene una programación reducida. Consulta qué rutas publica Aena, los aeropuertos alternativos para La Rioja y tu traslado.",
  heroDescription:
    "Logroño-Agoncillo es un aeropuerto pequeño con pocas rutas, así que muchos viajeros que visitan La Rioja vuelan a Bilbao o Zaragoza. Aquí tienes qué vuela desde Logroño y cómo llegar a la ciudad desde cada aeropuerto.",
};

export const LOGRONO_AIRPORT_RICH_TITLE_EN = "Flying Into Logroño and La Rioja";
export const LOGRONO_AIRPORT_RICH_TITLE_ES = "Volar a Logroño y La Rioja";

export const LOGRONO_AIRPORT_RICH_CONTENT_EN = `<p>Logroño-Agoncillo Airport (RJL) is a small regional airport in Agoncillo, east of Logroño, usually around 15 minutes from the city centre by car. When we checked Aena's official destinations page in November 2026, it listed:</p>
<ul>
<li><strong>Madrid-Barajas</strong>, operated by Air Nostrum and Iberia</li>
<li><strong>Barcelona-El Prat</strong>, operated by Vueling</li>
</ul>
<p>Additional seasonal routes have been announced in some years, but they aren't on Aena's current list. Aena notes that its information comes from airline schedules and may change, so check with the airline for your dates.</p>

<h3>Alternative airports for La Rioja</h3>
<p>With so few routes, many visitors to Logroño and the Rioja wine region fly into a larger airport and continue by road:</p>
<ul>
<li><strong>Bilbao Airport:</strong> the most common choice for international flights. Our <a href="/bilbao-airport-to-rioja/">Bilbao Airport to the Rioja wine region transfer</a> takes around 1 hr 40 min for about 135 km.</li>
<li><strong>Zaragoza:</strong> our <a href="/zaragoza-to-logrono-transfer/">Zaragoza to Logroño transfer</a> takes around 1 hr 45 min for about 170 km.</li>
<li><strong>Madrid:</strong> Madrid-Barajas has the widest choice of flights; from there you can fly to Logroño on one of the routes above, or travel on by road or rail.</li>
</ul>

<h3>Transfers from Logroño Airport</h3>
<p>If you fly into Logroño, a private transfer takes you from the terminal to your hotel in the city or to a winery or rural stay in La Rioja. Your driver meets you in arrivals with a name sign, and if you include your flight number we time the pickup to your actual landing. For the city itself, see our <a href="/logrono/">Logroño page</a>.</p>`;

export const LOGRONO_AIRPORT_RICH_CONTENT_ES = `<p>El Aeropuerto de Logroño-Agoncillo (RJL) es un aeropuerto regional pequeño situado en Agoncillo, al este de Logroño, normalmente a unos 15 minutos en coche del centro. Cuando consultamos la página oficial de destinos de Aena en noviembre de 2026, figuraban:</p>
<ul>
<li><strong>Madrid-Barajas</strong>, operada por Air Nostrum e Iberia</li>
<li><strong>Barcelona-El Prat</strong>, operada por Vueling</li>
</ul>
<p>Algunos años se han anunciado rutas adicionales de temporada, pero no figuran en la lista actual de Aena. La propia Aena indica que la información procede de la programación de las aerolíneas y puede cambiar, así que consulta con la aerolínea para tus fechas.</p>

<h3>Aeropuertos alternativos para La Rioja</h3>
<p>Con tan pocas rutas, muchos viajeros que visitan Logroño y la región vinícola de La Rioja vuelan a un aeropuerto más grande y continúan por carretera:</p>
<ul>
<li><strong>Aeropuerto de Bilbao:</strong> la opción más habitual para vuelos internacionales. Nuestro <a href="/es/traslado-aeropuerto-bilbao-a-rioja/">traslado del Aeropuerto de Bilbao a la región de La Rioja</a> dura alrededor de 1 h 40 min para unos 135 km.</li>
<li><strong>Zaragoza:</strong> nuestro <a href="/es/zaragoza-a-logrono-traslado/">traslado de Zaragoza a Logroño</a> dura alrededor de 1 h 45 min para unos 170 km.</li>
<li><strong>Madrid:</strong> Madrid-Barajas tiene la mayor oferta de vuelos; desde allí puedes volar a Logroño en una de las rutas anteriores o continuar por carretera o en tren.</li>
</ul>

<h3>Traslados desde el Aeropuerto de Logroño</h3>
<p>Si vuelas a Logroño, un traslado privado te lleva de la terminal a tu hotel en la ciudad o a una bodega o alojamiento rural en La Rioja. El conductor te espera en llegadas con un cartel con tu nombre y, si incluyes el número de vuelo, ajustamos la recogida a la hora real de aterrizaje. Para la ciudad, consulta nuestra <a href="/es/logrono/">página de Logroño</a>.</p>`;

export const LOGRONO_AIRPORT_FAQ_EN: PageFaqItem[] = [
  { question: "Which flights operate from Logroño Airport?", answer: "In November 2026 Aena listed Madrid-Barajas (Air Nostrum and Iberia) and Barcelona-El Prat (Vueling). Schedules can change, so check with the airline for your dates." },
  { question: "How far is Logroño Airport from the city centre?", answer: "Usually around 15 minutes by car. The airport is in Agoncillo, east of Logroño." },
  { question: "Which airport is best for visiting La Rioja?", answer: "If there's no suitable flight to Logroño, Bilbao is the most common choice for international flights; a private transfer from Bilbao Airport to the Rioja wine region takes around 1 hr 40 min." },
  { question: "Can you take me straight to a winery or rural hotel?", answer: "Yes. Give us the exact address when you request a quote and we'll price the trip." },
  { question: "Can I cancel or change my booking?", answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee." },
];

export const LOGRONO_AIRPORT_FAQ_ES: PageFaqItem[] = [
  { question: "¿Qué vuelos operan en el Aeropuerto de Logroño?", answer: "En noviembre de 2026 Aena publicaba Madrid-Barajas (Air Nostrum e Iberia) y Barcelona-El Prat (Vueling). La programación puede cambiar, así que consulta con la aerolínea para tus fechas." },
  { question: "¿A qué distancia está el Aeropuerto de Logroño del centro?", answer: "Normalmente a unos 15 minutos en coche. El aeropuerto está en Agoncillo, al este de Logroño." },
  { question: "¿Qué aeropuerto conviene para visitar La Rioja?", answer: "Si no hay un vuelo adecuado a Logroño, Bilbao es la opción más habitual para vuelos internacionales; un traslado privado del Aeropuerto de Bilbao a la región de La Rioja dura alrededor de 1 h 40 min." },
  { question: "¿Podéis llevarme directamente a una bodega o a un hotel rural?", answer: "Sí. Indícanos la dirección exacta al pedir presupuesto y te daremos precio." },
  { question: "¿Puedo cancelar o modificar la reserva?", answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo." },
];
