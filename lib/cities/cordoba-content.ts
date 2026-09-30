import type { CityFaqItem } from "@/lib/cities/types";

// Bespoke long-form content for the Córdoba city page — see
// CityRecord.richContentEn/Es in lib/cities/data.ts. Every other city (bar
// Zaragoza, which has its own equivalent file) keeps rendering the fully
// generic templated page; this is additive content specific to Córdoba,
// researched against verified sources (UNESCO, hotel operators' own sites,
// mapping services). No prices, current opening hours, or invented
// statistics are included here.
//
// customFaqEn/Es below REPLACES the generic auto-generated city FAQ, which
// would otherwise ask "Do you offer airport transfers to and from [nearest
// airport]?" — misleading for a city with no airport of its own.

export const CORDOBA_RICH_CONTENT_EN = `<h3>Córdoba Railway Station</h3>
<p>Córdoba's real transport hub for most visitors is still Córdoba's railway station (Córdoba Central), on the Madrid–Seville and Madrid–Málaga high-speed lines. It's a genuinely well-connected station, served by AVE high-speed trains alongside Alvia and regional services. Córdoba Airport (ODB) reopened to scheduled commercial flights in 2025 after a long hiatus, but its current route network is limited to Barcelona and Gran Canaria via Vueling and Binter Canarias — there's no direct service yet from Madrid, Seville, or Málaga — which is why most visitors still arrive by rail rather than by air. The station sits about 2.1km from the Mezquita-Catedral and the historic centre — close enough to walk in about 20 minutes, but far enough that arriving with luggage after a train journey is where a pre-booked private transfer earns its keep, skipping the taxi rank and any uncertainty about bus routes in an unfamiliar city.</p>

<h3>Major Córdoba Attractions</h3>
<p>Córdoba's historic centre is dense with UNESCO World Heritage recognition and compact enough that most landmark sights sit within a short walk of one another.</p>
<ul>
<li><strong>Mezquita-Catedral de Córdoba</strong> — the Mosque-Cathedral, one of the most significant works of Islamic architecture in the world, begun in 785 and later converted into a cathedral after the Christian reconquest; the historic centre around it was inscribed on the UNESCO World Heritage list in 1984.</li>
<li><strong>La Judería</strong> — Córdoba's historic Jewish Quarter, a warren of narrow, winding whitewashed streets immediately around the Mezquita, home to one of Spain's few surviving medieval synagogues.</li>
<li><strong>Puente Romano</strong> — the Roman Bridge across the Guadalquivir, with origins in the 1st century BC, offering one of the classic views back toward the Mezquita-Catedral.</li>
<li><strong>Alcázar de los Reyes Cristianos</strong> — a fortress-palace built in the 14th century for Christian monarchs, with formal gardens along the riverbank.</li>
<li><strong>Plaza de las Tendillas</strong> — the central square of Córdoba's modern city centre, a short walk from the historic quarter and a natural orientation point.</li>
</ul>
<p>For a short stay, most of this is realistically covered on foot from a central hotel — the main exception is timing a visit around Medina Azahara, which sits outside the city itself.</p>

<h3>Connections Across Andalusia</h3>
<p>Córdoba's position roughly midway between Madrid and the Costa del Sol/Seville makes it a natural stop for onward private transfers rather than a one-way destination, and several of the busiest routes already have their own dedicated pages on this site:</p>
<ul>
<li><a href="/cordoba-to-seville-transfer/">Private transfer from Córdoba to Seville</a> — around 1 hr 30 min by road.</li>
<li><a href="/cordoba-to-malaga-transfer/">Private transfer from Córdoba to Málaga</a> — just under 2 hours, with <a href="/malaga-airport-transfer/">Málaga Airport</a> transfers also available given its status as a major international gateway.</li>
<li><a href="/cordoba-to-granada-transfer/">Private transfer from Córdoba to Granada</a> — around 2 hr 10 min by road.</li>
</ul>
<p>Córdoba to Madrid is a longer haul at around 3 hr 45 min by road (389km via the A-4), which is why most travelers on that specific route compare it against the AVE — the private car's advantage is flexibility, groups, and luggage, not raw speed over a solo AVE seat.</p>

<h3>Nearby Destinations &amp; Day Trips</h3>
<p>Two genuinely distinct day trips are covered on this site, both run as private-driver-waits excursions rather than fixed-schedule shuttles:</p>
<ul>
<li><strong>Medina Azahara</strong> — an entire 10th-century palace-city begun in 936 by Abd al-Rahman III, 8km from Córdoba, declared a UNESCO World Heritage Site in 2018. A straightforward half-day round trip.</li>
<li><strong>Úbeda &amp; Baeza</strong> — two UNESCO Renaissance towns in neighbouring Jaén province, only about 15 minutes apart from each other and commonly visited together in a single day, around 1 hr 30 min from Córdoba.</li>
</ul>`;

export const CORDOBA_RICH_CONTENT_ES = `<h3>Estación de Córdoba</h3>
<p>Córdoba no tiene aeropuerto propio: el verdadero centro de transporte de la ciudad es la estación de Córdoba (Córdoba Central), situada en las líneas de alta velocidad Madrid-Sevilla y Madrid-Málaga. Es una estación muy bien conectada, con servicios AVE de alta velocidad junto con trenes Alvia y regionales, por lo que la mayoría de los visitantes llegan en tren y no por carretera o avión. La estación se encuentra a unos 2,1 km de la Mezquita-Catedral y del centro histórico, lo bastante cerca como para llegar caminando en unos 20 minutos, pero lo bastante lejos como para que un traslado privado reservado con antelación resulte realmente útil tras un viaje en tren con equipaje, evitando la parada de taxis y cualquier duda sobre las líneas de autobús en una ciudad desconocida.</p>

<h3>Principales Atractivos de Córdoba</h3>
<p>El centro histórico de Córdoba concentra un alto reconocimiento de la UNESCO y es lo bastante compacto como para que la mayoría de sus lugares emblemáticos estén a poca distancia a pie entre sí.</p>
<ul>
<li><strong>Mezquita-Catedral de Córdoba</strong> — una de las obras más importantes de la arquitectura islámica del mundo, iniciada en el año 785 y convertida posteriormente en catedral tras la reconquista cristiana; el centro histórico que la rodea fue declarado Patrimonio de la Humanidad por la UNESCO en 1984.</li>
<li><strong>La Judería</strong> — el histórico barrio judío de Córdoba, un entramado de calles estrechas y sinuosas encaladas junto a la Mezquita, sede de una de las pocas sinagogas medievales que se conservan en España.</li>
<li><strong>Puente Romano</strong> — el puente romano sobre el Guadalquivir, con orígenes en el siglo I a.C., que ofrece una de las vistas clásicas de vuelta hacia la Mezquita-Catedral.</li>
<li><strong>Alcázar de los Reyes Cristianos</strong> — una fortaleza-palacio construida en el siglo XIV para los monarcas cristianos, con jardines formales junto al río.</li>
<li><strong>Plaza de las Tendillas</strong> — la plaza central del Córdoba moderno, a poca distancia a pie del casco histórico y un punto de referencia natural.</li>
</ul>
<p>Para una estancia corta, la mayor parte de esto se recorre razonablemente a pie desde un hotel céntrico; la principal excepción es organizar bien el tiempo para visitar Medina Azahara, que queda fuera de la propia ciudad.</p>

<h3>Conexiones por Andalucía</h3>
<p>La posición de Córdoba, a medio camino entre Madrid y la Costa del Sol/Sevilla, la convierte en una parada natural para seguir viaje en traslado privado en lugar de un destino de solo ida, y varias de las rutas con más demanda ya cuentan con su propia página en este sitio:</p>
<ul>
<li><a href="/es/cordoba-a-sevilla-traslado/">Traslado privado de Córdoba a Sevilla</a> — alrededor de 1 h 30 min por carretera.</li>
<li><a href="/es/cordoba-a-malaga-traslado/">Traslado privado de Córdoba a Málaga</a> — poco menos de 2 horas, con traslados también disponibles al <a href="/es/traslado-aeropuerto-malaga/">Aeropuerto de Málaga</a> dado su papel como gran puerta de entrada internacional.</li>
<li><a href="/es/cordoba-a-granada-traslado/">Traslado privado de Córdoba a Granada</a> — alrededor de 2 h 10 min por carretera.</li>
</ul>
<p>Córdoba a Madrid es un trayecto más largo, de alrededor de 3 h 45 min por carretera (389 km por la A-4), por lo que la mayoría de los viajeros en esta ruta lo comparan con el AVE: la ventaja del coche privado está en la flexibilidad, los grupos y el equipaje, no en la velocidad frente a un asiento individual en AVE.</p>

<h3>Destinos Cercanos y Excursiones de un Día</h3>
<p>Este sitio cubre dos excursiones de un día genuinamente distintas, ambas organizadas con un conductor privado que espera en el destino, no como una lanzadera de horario fijo:</p>
<ul>
<li><strong>Medina Azahara</strong> — toda una ciudad-palacio del siglo X iniciada en el año 936 por Abderramán III, a 8 km de Córdoba, declarada Patrimonio de la Humanidad por la UNESCO en 2018. Una sencilla excursión de medio día.</li>
<li><strong>Úbeda y Baeza</strong> — dos localidades renacentistas de la provincia de Jaén, Patrimonio de la Humanidad, separadas solo unos 15 minutos entre sí y visitadas habitualmente juntas en un mismo día, a unos 1 h 30 min de Córdoba.</li>
</ul>`;

export const CORDOBA_FAQ_EN: CityFaqItem[] = [
  {
    question: "How do I book a private transfer in Córdoba?",
    answer: "Enter Córdoba, your destination, and passenger count in our quote form. You'll receive a fixed price and instant confirmation by email.",
  },
  {
    question: "Does Córdoba have an airport?",
    answer: "Yes — Córdoba Airport (ODB) reopened to scheduled commercial flights in 2025 after a long hiatus, currently served by Vueling and Binter Canarias with a limited schedule to Barcelona and Gran Canaria only. There's no direct service from Madrid, Seville, or Málaga, so most visitors still arrive by AVE high-speed train into Córdoba's railway station, or by road. We can also arrange a private transfer directly from Madrid, Seville, or Málaga Airport.",
  },
  {
    question: "Can I book a private transfer from Córdoba's train station to my hotel?",
    answer: "Yes, we run private transfers between Córdoba's railway station and hotels throughout the city, with driver meet-and-greet included.",
  },
  {
    question: "Can I book a private transfer from Córdoba to Seville, Málaga, or Granada?",
    answer: "Yes — Córdoba to Seville, Córdoba to Málaga, and Córdoba to Granada are all covered as dedicated private transfer routes, each around 1.5 to 2.5 hours by road.",
  },
  {
    question: "Can I book a day trip from Córdoba to Medina Azahara or Úbeda and Baeza?",
    answer: "Yes, both are available as private driver-waits day trips, bookable as a half-day (Medina Azahara) or full-day (Úbeda & Baeza) round trip.",
  },
  {
    question: "Is the price per person or per vehicle?",
    answer: "Our prices are per vehicle, not per person, so groups traveling together often save compared to individual taxis.",
  },
  {
    question: "Can I request a child seat?",
    answer: "Yes, child and booster seats are available on request at no additional charge. Just add the details when you book.",
  },
];

export const CORDOBA_FAQ_ES: CityFaqItem[] = [
  {
    question: "¿Cómo reservo un traslado privado en Córdoba?",
    answer: "Indica Córdoba, tu destino y el número de pasajeros en nuestro formulario de presupuesto. Recibirás un precio fijo y confirmación instantánea por correo electrónico.",
  },
  {
    question: "¿Tiene Córdoba aeropuerto?",
    answer: "Sí. El Aeropuerto de Córdoba (ODB) reabrió a vuelos comerciales regulares en 2025 tras una larga pausa, con un horario limitado operado por Vueling y Binter Canarias solo a Barcelona y Gran Canaria. No hay conexión directa con Madrid, Sevilla o Málaga, por lo que la mayoría de los visitantes siguen llegando en AVE a la estación de Córdoba, o por carretera. También podemos organizar un traslado privado directo desde Madrid, Sevilla o el Aeropuerto de Málaga.",
  },
  {
    question: "¿Puedo reservar un traslado privado desde la estación de Córdoba a mi hotel?",
    answer: "Sí, ofrecemos traslados privados entre la estación de tren de Córdoba y hoteles de toda la ciudad, con recepción personalizada del conductor incluida.",
  },
  {
    question: "¿Puedo reservar un traslado privado de Córdoba a Sevilla, Málaga o Granada?",
    answer: "Sí. Córdoba a Sevilla, Córdoba a Málaga y Córdoba a Granada son rutas de traslado privado ya disponibles, cada una de entre 1,5 y 2,5 horas por carretera aproximadamente.",
  },
  {
    question: "¿Puedo reservar una excursión de un día desde Córdoba a Medina Azahara o a Úbeda y Baeza?",
    answer: "Sí, ambas están disponibles como excursiones de un día con conductor privado que espera en el destino, reservables como medio día (Medina Azahara) o día completo (Úbeda y Baeza).",
  },
  {
    question: "¿El precio es por persona o por vehículo?",
    answer: "Nuestros precios son por vehículo, no por persona, así que los grupos que viajan juntos suelen ahorrar frente a tomar taxis individuales.",
  },
  {
    question: "¿Puedo solicitar una silla infantil?",
    answer: "Sí, las sillas infantiles y elevadores están disponibles a petición sin coste adicional. Solo indica los detalles al reservar.",
  },
];
