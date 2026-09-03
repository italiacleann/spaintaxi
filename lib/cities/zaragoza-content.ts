import type { CityFaqItem } from "@/lib/cities/types";

// Bespoke long-form content for the Zaragoza city page — see CityRecord.richContentEn/Es
// in lib/cities/data.ts. Every other city keeps rendering the fully generic
// templated page; this is additive content specific to Zaragoza, researched
// against Aena, the Zaragoza city council's own tourism pages, Wikipedia,
// and PLAZA/Stellantis/Feria de Zaragoza's own sites. No prices, journey
// times beyond the ranges verified in research, or fleet promises are
// invented here.

export const ZARAGOZA_RICH_CONTENT_EN = `<h3>Zaragoza Airport (ZAZ)</h3>
<p>Zaragoza Airport sits about 16km west of the city centre, around 15-20 minutes by road depending on traffic. It's a smaller passenger airport with a limited domestic and European schedule, but it plays an outsized role in Spanish air cargo — it's the country's second-busiest cargo airport after Madrid-Barajas, built around the adjacent PLAZA logistics platform. For arriving travelers, that means a quiet, easy-to-navigate terminal rather than a sprawling international hub, which is part of why a pre-booked private transfer is worth arranging: there's no taxi rank crowded with other flights, and a driver waiting with your name at arrivals removes any guesswork after you land, whether you're here for a city break, a wedding, or a meeting near the PLAZA site.</p>

<h3>Zaragoza-Delicias Train Station</h3>
<p>Estación de Zaragoza-Delicias, opened in 2003, is one of the busiest stations in Spain and sits almost exactly halfway along the Madrid-Barcelona AVE high-speed line — a genuinely useful position that puts both cities within roughly 1 hour 15 minutes to 1 hour 40 minutes by train, depending on the service. Beyond the AVE, Delicias also handles conventional and regional trains to Huesca, Teruel, Pamplona, Logroño, Bilbao, and Valencia, making it a practical hub for onward travel around Aragon and neighbouring regions. The station sits just outside the historic centre, close enough that a private transfer to a central hotel typically takes around 10 minutes. A private car is particularly useful here for travelers changing between the AVE and a connecting flight at Zaragoza Airport, or for anyone arriving with luggage who'd rather skip the walk to a taxi rank or the city bus.</p>

<h3>Major Zaragoza Attractions</h3>
<p>Zaragoza's historic centre is compact enough that most of its landmark sights are within easy walking distance of one another, which is worth knowing before booking any transfers beyond the airport or station run.</p>
<ul>
<li><strong>Basílica del Pilar</strong> — on the bank of the Ebro, this is one of Spain's most significant Marian pilgrimage sites, built on a site associated with an apparition to the Apostle James. Its riverside setting makes it a natural first stop for most visitors.</li>
<li><strong>Plaza del Pilar</strong> — the square in front of the basilica is one of the largest public squares in Europe, and locals often call it the city's living room. It's the natural starting point for exploring on foot.</li>
<li><strong>Palacio de la Aljafería</strong> — a well-preserved 11th-century Moorish palace built under the Taifa of Zaragoza, and today the seat of the Cortes de Aragón, the regional parliament. It sits a little further from the old town than the other sights, so it's one of the few places in central Zaragoza where a taxi or private car genuinely saves meaningful time over walking.</li>
<li><strong>La Seo (Catedral del Salvador)</strong> — Zaragoza's cathedral, distinct from the Basílica del Pilar and just a short walk away across the square, built over the site of the city's former great mosque. Elements of its architecture are recognised as part of the UNESCO Mudéjar Architecture of Aragon listing.</li>
<li><strong>Puente de Piedra</strong> — the historic stone bridge across the Ebro, built between 1401 and 1440, with seven arches and a set of lion statues added in 1991 that give it its nickname, the Bridge of Lions.</li>
<li><strong>El Tubo</strong> — a tight network of lanes near Plaza España known for tapas bars, with a gastronomic reputation that built up through the mid-20th century. Best explored on foot, ideally in the evening.</li>
<li><strong>Parque Grande José Antonio Labordeta</strong> — Zaragoza's largest urban park, opened in 1929 and renamed in 2010, a straightforward option for travelers wanting green space without leaving the city.</li>
<li><strong>Mercado Central de Zaragoza</strong> — a Belle Époque ironwork market building from 1903, declared a national historic monument and reopened in 2020 after renovation.</li>
<li><strong>Museo del Foro de Caesaraugusta</strong> — built around excavated Roman forum remains beneath Plaza de la Seo, one of four connected Roman museums in the city (the others cover the public baths, river port, and theatre) that together make up the Ruta de Caesaraugusta, all within about five minutes' walk of each other.</li>
</ul>
<p>For a short city stay, most of this is realistically covered on foot once you're dropped at a central hotel — the main exception is the Aljafería, where a private car is genuinely the more practical option.</p>

<h3>Nearby Destinations &amp; Day Trips</h3>
<p>Zaragoza's position in the middle of the Ebro valley puts a wide spread of genuinely different destinations within reach, though several are a proper half-day or full-day trip rather than a quick outing.</p>
<ul>
<li><strong>Huesca</strong> — the nearest of the group, a provincial capital that also functions as a gateway to the Pyrenees.</li>
<li><strong>Tarazona</strong> — a historic Aragonese town known for its Mudéjar cathedral and old quarter, one of the closer options in this list.</li>
<li><strong>Calatayud</strong> — another Mudéjar town, notable for the Colegiata de Santa María and its UNESCO-recognised bell tower, and conveniently positioned directly on the Madrid-Barcelona rail corridor.</li>
<li><strong>Monasterio de Piedra</strong> — a monastery dating to 1194 near Nuévalos, paired with a nature park of waterfalls and caves; a genuine day trip at around 110km away, not a quick detour.</li>
<li><strong>Lleida</strong> — in Catalonia, roughly on the way toward Barcelona.</li>
<li><strong>Teruel</strong> — further south, known for some of Spain's finest Mudéjar architecture and considerably less touristed than the coast.</li>
<li><strong>Pamplona</strong> — the Navarre capital, best known internationally for the Running of the Bulls during the San Fermín festival.</li>
<li><strong>Logroño</strong> — La Rioja's capital and the natural gateway to Spain's best-known wine region.</li>
<li><strong>Ordesa y Monte Perdido National Park</strong> — Spain's oldest national park, in the Huesca Pyrenees, home to Monte Perdido; a scenic but genuinely full-day drive rather than a half-day trip.</li>
</ul>
<p>Given the range of distances involved, a private chauffeur is generally best suited to the closer options — Huesca, Tarazona, and Calatayud in particular — where the whole trip can comfortably fit into a day with time to actually explore.</p>

<h3>Business &amp; Corporate Transfers in Zaragoza</h3>
<p>Zaragoza carries more industrial and logistics weight than its size might suggest. PLAZA, the Plataforma Logística de Zaragoza, sits beside the airport and is one of the largest logistics platforms in Europe by surface area, hosting several hundred companies across warehousing, freight, and distribution. A little further out, the Stellantis plant in Figueruelas (built as Opel in 1982, and still commonly referred to that way locally) remains one of Spain's principal car manufacturing sites. For conferences and trade fairs, Feria de Zaragoza is the city's main venue, with a dedicated conference centre and exhibition halls near the Ebro, within easy reach of both the airport and Delicias station.</p>
<p>For business travelers, that combination of a compact airport, a central AVE station, and event/industrial sites spread around the city's edges makes a private transfer a genuinely practical option — a fixed pickup time from the airport or station straight to a hotel, a meeting venue, or the Feria de Zaragoza grounds removes the need to coordinate car hire or public transport around a schedule that isn't always flexible. Multi-stop itineraries, such as an airport pickup followed by a factory visit and a hotel drop-off later the same day, can also be arranged as a single booking.</p>

<h3>Group &amp; Event Transfers</h3>
<p>Zaragoza's mix of business travel, weddings, and city breaks means group transfer requests are common — families needing extra luggage space, small corporate groups traveling together to the same meeting, or wedding parties moving between a hotel and a venue. Vehicles are matched to group size and luggage volume at the time of booking rather than fixed in advance, so let us know your numbers and any specific requirements, such as a child seat, when you request a quote.</p>

<h3>Where to Stay: Hotel Areas</h3>
<p>Most visitors base themselves in one of two areas. The historic centre around Plaza del Pilar puts the Basílica, La Seo, and El Tubo within walking distance, and suits travelers focused on sightseeing on foot. The area around Zaragoza-Delicias station suits travelers prioritising fast onward connections, whether that's a same-day AVE journey or an early departure the next morning. Whichever you choose, the same private transfer principle applies in both directions — airport to hotel, hotel to airport, station to hotel, and hotel to station — with a fixed pickup time agreed when you book rather than left to a taxi rank on arrival.</p>

<h3>Zaragoza's Connections to Other Spanish Cities</h3>
<p>Given its position roughly midway between Madrid and Barcelona, Zaragoza is a natural stop for travelers moving between Spain's two largest cities, or continuing on to Valencia. If you're arriving from either direction, private transfers already run <a href="/madrid-to-zaragoza-transfer/">from Madrid to Zaragoza</a> and <a href="/barcelona-to-zaragoza-transfer/">from Barcelona to Zaragoza</a>, and both directions are covered between Zaragoza and Valencia, with transfers running <a href="/zaragoza-to-valencia-transfer/">from Zaragoza to Valencia</a> and <a href="/valencia-to-zaragoza-transfer/">from Valencia to Zaragoza</a>.</p>`;

export const ZARAGOZA_RICH_CONTENT_ES = `<h3>Aeropuerto de Zaragoza (ZAZ)</h3>
<p>El aeropuerto de Zaragoza se encuentra a unos 16 km al oeste del centro de la ciudad, a unos 15-20 minutos en coche según el tráfico. Es un aeropuerto de pasajeros relativamente pequeño, con una oferta limitada de vuelos nacionales y europeos, pero desempeña un papel destacado en el transporte aéreo de mercancías en España: es el segundo aeropuerto de carga más activo del país después de Madrid-Barajas, construido junto a la plataforma logística PLAZA. Para quien llega, eso se traduce en una terminal tranquila y fácil de recorrer en lugar de un gran hub internacional, y es una de las razones por las que reservar un traslado privado con antelación merece la pena: no hay una parada de taxis saturada por otros vuelos, y un conductor esperando con su nombre en llegadas elimina cualquier incertidumbre nada más aterrizar, ya sea por una escapada a la ciudad, una boda o una reunión cerca del recinto de PLAZA.</p>

<h3>Estación de Zaragoza-Delicias</h3>
<p>La Estación de Zaragoza-Delicias, inaugurada en 2003, es una de las estaciones más concurridas de España y se sitúa casi exactamente a medio camino de la línea de alta velocidad Madrid-Barcelona, una posición realmente útil que sitúa ambas ciudades a entre 1 hora 15 minutos y 1 hora 40 minutos en tren, según el servicio. Además del AVE, Delicias también da servicio a trenes convencionales y regionales hacia Huesca, Teruel, Pamplona, Logroño, Bilbao y Valencia, lo que la convierte en un punto práctico para continuar viaje por Aragón y las regiones vecinas. La estación queda justo a las afueras del casco histórico, lo bastante cerca como para que un traslado privado hasta un hotel céntrico tarde en torno a 10 minutos. Un coche privado resulta especialmente útil aquí para quienes combinan el AVE con un vuelo de conexión en el aeropuerto de Zaragoza, o para cualquiera que llegue con equipaje y prefiera evitar el camino hasta una parada de taxis o el autobús urbano.</p>

<h3>Principales Atracciones de Zaragoza</h3>
<p>El casco histórico de Zaragoza es lo bastante compacto como para que la mayoría de sus lugares emblemáticos estén a poca distancia a pie unos de otros, algo que conviene tener en cuenta antes de reservar cualquier traslado más allá del aeropuerto o la estación.</p>
<ul>
<li><strong>Basílica del Pilar</strong> — a orillas del Ebro, es uno de los lugares de peregrinación mariana más importantes de España, construida sobre un emplazamiento vinculado a una aparición al Apóstol Santiago. Su ubicación junto al río la convierte en la primera parada natural para la mayoría de los visitantes.</li>
<li><strong>Plaza del Pilar</strong> — la plaza frente a la basílica es una de las mayores plazas públicas de Europa, y muchos zaragozanos la llaman el salón de la ciudad. Es el punto de partida natural para explorar a pie.</li>
<li><strong>Palacio de la Aljafería</strong> — un palacio musulmán del siglo XI muy bien conservado, construido bajo la Taifa de Zaragoza, y hoy sede de las Cortes de Aragón. Queda algo más alejado del casco antiguo que el resto de lugares, por lo que es uno de los pocos puntos del centro de Zaragoza donde un taxi o coche privado ahorra de verdad tiempo frente a ir caminando.</li>
<li><strong>La Seo (Catedral del Salvador)</strong> — la catedral de Zaragoza, distinta de la Basílica del Pilar y a poca distancia a pie cruzando la plaza, construida sobre el emplazamiento de la antigua mezquita mayor de la ciudad. Varios de sus elementos arquitectónicos están reconocidos dentro de la declaración de la UNESCO de la Arquitectura Mudéjar de Aragón.</li>
<li><strong>Puente de Piedra</strong> — el histórico puente de piedra sobre el Ebro, construido entre 1401 y 1440, con siete arcos y un conjunto de leones añadido en 1991 que le da su apodo, el Puente de los Leones.</li>
<li><strong>El Tubo</strong> — una apretada red de callejuelas cerca de Plaza España conocida por sus bares de tapas, con una reputación gastronómica que se consolidó a mediados del siglo XX. Se disfruta mejor a pie, idealmente por la tarde-noche.</li>
<li><strong>Parque Grande José Antonio Labordeta</strong> — el mayor parque urbano de Zaragoza, inaugurado en 1929 y renombrado en 2010, una opción sencilla para quien busca espacio verde sin salir de la ciudad.</li>
<li><strong>Mercado Central de Zaragoza</strong> — un edificio de mercado de estructura de hierro de estilo Belle Époque de 1903, declarado monumento histórico nacional y reabierto en 2020 tras su rehabilitación.</li>
<li><strong>Museo del Foro de Caesaraugusta</strong> — construido en torno a los restos excavados del foro romano bajo la Plaza de la Seo, uno de los cuatro museos romanos conectados de la ciudad (los otros recogen las termas públicas, el puerto fluvial y el teatro) que juntos forman la Ruta de Caesaraugusta, todos a unos cinco minutos a pie entre sí.</li>
</ul>
<p>Para una estancia corta en la ciudad, la mayor parte de esto se recorre razonablemente a pie una vez que le dejan en un hotel céntrico; la principal excepción es la Aljafería, donde un coche privado sí es la opción más práctica.</p>

<h3>Destinos Cercanos y Excursiones de un Día</h3>
<p>La posición de Zaragoza en pleno valle del Ebro pone a su alcance una amplia variedad de destinos, aunque varios de ellos suponen una excursión de medio día o de día completo, no una salida rápida.</p>
<ul>
<li><strong>Huesca</strong> — el más cercano del grupo, capital de provincia que además funciona como puerta de entrada al Pirineo.</li>
<li><strong>Tarazona</strong> — histórica localidad aragonesa conocida por su catedral mudéjar y su casco antiguo, una de las opciones más cercanas de esta lista.</li>
<li><strong>Calatayud</strong> — otra localidad mudéjar, destacada por la Colegiata de Santa María y su torre reconocida por la UNESCO, situada convenientemente sobre el corredor ferroviario Madrid-Barcelona.</li>
<li><strong>Monasterio de Piedra</strong> — un monasterio que data de 1194 cerca de Nuévalos, junto a un parque natural de cascadas y cuevas; una auténtica excursión de un día a unos 110 km de distancia, no un desvío rápido.</li>
<li><strong>Lleida</strong> — en Cataluña, prácticamente de camino hacia Barcelona.</li>
<li><strong>Teruel</strong> — más al sur, conocida por algunos de los mejores ejemplos de arquitectura mudéjar de España y bastante menos frecuentada que la costa.</li>
<li><strong>Pamplona</strong> — capital de Navarra, conocida internacionalmente por los Sanfermines y el encierro.</li>
<li><strong>Logroño</strong> — capital de La Rioja y puerta de entrada natural a la región vinícola más conocida de España.</li>
<li><strong>Parque Nacional de Ordesa y Monte Perdido</strong> — el parque nacional más antiguo de España, en el Pirineo oscense, con el Monte Perdido como referencia; una excursión escénica pero de día completo, no de medio día.</li>
</ul>
<p>Dado el rango de distancias, un chófer privado encaja mejor con las opciones más cercanas —Huesca, Tarazona y Calatayud en particular—, donde todo el trayecto cabe cómodamente en un día con tiempo real para explorar.</p>

<h3>Traslados de Empresa y Negocios en Zaragoza</h3>
<p>Zaragoza tiene un peso industrial y logístico mayor de lo que su tamaño podría sugerir. PLAZA, la Plataforma Logística de Zaragoza, se sitúa junto al aeropuerto y es una de las mayores plataformas logísticas de Europa por superficie, con varios cientos de empresas dedicadas al almacenaje, el transporte y la distribución. Algo más alejada, la planta de Stellantis en Figueruelas (construida como Opel en 1982, y todavía conocida así habitualmente) sigue siendo uno de los principales centros de fabricación de automóviles de España. Para congresos y ferias, Feria de Zaragoza es el principal recinto de la ciudad, con un centro de congresos propio y pabellones junto al Ebro, a poca distancia tanto del aeropuerto como de la estación de Delicias.</p>
<p>Para el viajero de negocios, esa combinación de un aeropuerto compacto, una estación de AVE céntrica y sedes industriales y de eventos repartidas por los alrededores de la ciudad hace que un traslado privado sea una opción realmente práctica: una hora de recogida fija desde el aeropuerto o la estación directamente a un hotel, una sede de reuniones o el recinto de Feria de Zaragoza evita tener que coordinar un alquiler de coche o el transporte público con un horario que no siempre es flexible. También pueden organizarse itinerarios con varias paradas, como una recogida en el aeropuerto seguida de una visita a fábrica y, más tarde ese mismo día, la llegada al hotel, dentro de una única reserva.</p>

<h3>Traslados para Grupos y Eventos</h3>
<p>La combinación de viajes de negocios, bodas y escapadas urbanas hace que las solicitudes de traslado para grupos sean habituales en Zaragoza: familias que necesitan más espacio para el equipaje, pequeños grupos de empresa que viajan juntos a la misma reunión, o comitivas de boda que se desplazan entre el hotel y el lugar de la celebración. Los vehículos se asignan según el tamaño del grupo y el volumen de equipaje en el momento de la reserva, no de antemano, así que indíquenos el número de personas y cualquier necesidad concreta, como una silla infantil, al solicitar presupuesto.</p>

<h3>Dónde Alojarse: Zonas de Hotel</h3>
<p>La mayoría de los visitantes se alojan en una de dos zonas. El casco histórico en torno a la Plaza del Pilar deja la Basílica, La Seo y El Tubo a poca distancia a pie, y conviene a quien centra su viaje en visitas a pie. La zona en torno a la estación de Zaragoza-Delicias conviene a quien prioriza las conexiones rápidas, ya sea un trayecto en AVE el mismo día o una salida temprana a la mañana siguiente. Elija la que elija, el mismo principio de traslado privado se aplica en ambos sentidos —aeropuerto a hotel, hotel a aeropuerto, estación a hotel y hotel a estación—, con una hora de recogida fija acordada al reservar en lugar de depender de una parada de taxis a la llegada.</p>

<h3>Conexiones de Zaragoza con Otras Ciudades Españolas</h3>
<p>Por su posición prácticamente a medio camino entre Madrid y Barcelona, Zaragoza es una parada natural para quien se desplaza entre las dos mayores ciudades de España, o continúa viaje hacia Valencia. Si llega desde cualquiera de las dos direcciones, ya existen traslados privados <a href="/es/madrid-a-zaragoza-traslado/">de Madrid a Zaragoza</a> y <a href="/es/barcelona-a-zaragoza-traslado/">de Barcelona a Zaragoza</a>, y ambos sentidos están cubiertos entre Zaragoza y Valencia, con traslados <a href="/es/zaragoza-a-valencia-traslado/">de Zaragoza a Valencia</a> y <a href="/es/valencia-a-zaragoza-traslado/">de Valencia a Zaragoza</a>.</p>`;

export const ZARAGOZA_FAQ_EN: CityFaqItem[] = [
  {
    question: "How do I get from Zaragoza Airport to the city centre?",
    answer:
      "A private transfer takes around 15-20 minutes for the roughly 16km journey. Your driver tracks your flight and meets you at arrivals, so there's no need to find a taxi rank.",
  },
  {
    question: "How far is Zaragoza Airport from Zaragoza?",
    answer: "About 16km, west of the city centre — a short, straightforward drive of around 15-20 minutes depending on traffic.",
  },
  {
    question: "Is it better to pre-book a private transfer in Zaragoza?",
    answer:
      "Pre-booking means your price, pickup time, and vehicle are confirmed before you travel, with a driver already tracking your flight or train, rather than relying on a taxi rank on arrival.",
  },
  {
    question: "Can I book a private transfer from Zaragoza Airport to my hotel?",
    answer: "Yes, we run direct transfers from Zaragoza Airport to hotels throughout the city, including the historic centre and the Delicias station area.",
  },
  {
    question: "Can I book a transfer from Zaragoza-Delicias train station?",
    answer:
      "Yes, we cover transfers between Zaragoza-Delicias and hotels across the city, as well as connections onward to Zaragoza Airport for travelers combining the AVE with a flight.",
  },
  {
    question: "Do private transfers accommodate families and groups?",
    answer: "Yes, vehicles are matched to your group size and luggage at the time of booking, and a child or booster seat can be requested when you get a quote.",
  },
  {
    question: "Can I book a transfer from Zaragoza to another Spanish city?",
    answer:
      "Private transfers already run between Zaragoza and Madrid, Barcelona, and Valencia. Given its position roughly midway between Madrid and Barcelona, Zaragoza is also a practical stop for travelers continuing their journey by road.",
  },
  {
    question: "How far in advance should I book a Zaragoza transfer?",
    answer: "Booking as soon as your travel dates are confirmed is sensible, though transfers can typically be arranged with shorter notice too — get in touch with your details and we'll confirm availability.",
  },
];

export const ZARAGOZA_FAQ_ES: CityFaqItem[] = [
  {
    question: "¿Cómo llego del Aeropuerto de Zaragoza al centro de la ciudad?",
    answer:
      "Un traslado privado tarda entre 15 y 20 minutos para recorrer los aproximadamente 16 km. Su conductor sigue su vuelo y le espera en llegadas, así que no necesita buscar una parada de taxis.",
  },
  {
    question: "¿A qué distancia está el Aeropuerto de Zaragoza de la ciudad?",
    answer: "A unos 16 km al oeste del centro, un trayecto corto y sencillo de entre 15 y 20 minutos según el tráfico.",
  },
  {
    question: "¿Es mejor reservar con antelación un traslado privado en Zaragoza?",
    answer:
      "Reservar con antelación significa que el precio, la hora de recogida y el vehículo quedan confirmados antes de viajar, con un conductor siguiendo ya su vuelo o tren, en lugar de depender de una parada de taxis a la llegada.",
  },
  {
    question: "¿Puedo reservar un traslado privado del Aeropuerto de Zaragoza a mi hotel?",
    answer: "Sí, ofrecemos traslados directos desde el Aeropuerto de Zaragoza a hoteles de toda la ciudad, incluido el casco histórico y la zona de la estación de Delicias.",
  },
  {
    question: "¿Puedo reservar un traslado desde la estación de Zaragoza-Delicias?",
    answer:
      "Sí, cubrimos traslados entre Zaragoza-Delicias y hoteles de toda la ciudad, así como conexiones hacia el Aeropuerto de Zaragoza para quienes combinan el AVE con un vuelo.",
  },
  {
    question: "¿Los traslados privados admiten familias y grupos?",
    answer: "Sí, el vehículo se ajusta al tamaño de su grupo y equipaje en el momento de la reserva, y puede solicitar una silla infantil al pedir presupuesto.",
  },
  {
    question: "¿Puedo reservar un traslado de Zaragoza a otra ciudad española?",
    answer:
      "Ya existen traslados privados entre Zaragoza y Madrid, Barcelona y Valencia. Por su posición prácticamente a medio camino entre Madrid y Barcelona, Zaragoza también es una parada práctica para quien continúa viaje por carretera.",
  },
  {
    question: "¿Con cuánta antelación debo reservar un traslado en Zaragoza?",
    answer: "Es recomendable reservar en cuanto tenga confirmadas sus fechas de viaje, aunque normalmente también pueden organizarse traslados con menos antelación — contáctenos con sus datos y confirmaremos disponibilidad.",
  },
];
