import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Bilbao city page (Nov 2026). The city page
// and the Bilbao Airport page shared 62% of their wording; this content
// gives the city page its own intent (getting around Bilbao, neighbourhoods,
// station, cruise terminal, day trips, chauffeur use) and leaves arrivals at
// BIO to the airport page, which it links to. Drive times come from the
// site's own route data (lib/routes/data/bilbao.ts).

export const BILBAO_CITY_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Bilbao Private Transfers & Day Trips | Car With Driver",
  metaDescription:
    "Private transfers and day trips from Bilbao: Abando station, the Getxo cruise terminal, San Sebastián, Rioja Alavesa and Gaztelugatxe. Fixed price at booking.",
  heroTitle: "Private Transfers and Day Trips in Bilbao",
  heroDescription:
    "Getting around Bilbao and the Basque Country by private car: transfers from Abando station and the Getxo cruise terminal, trips to San Sebastián, and day trips to Rioja Alavesa and San Juan de Gaztelugatxe, at a price fixed when you book.",
};

export const BILBAO_CITY_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Traslados Privados y Excursiones en Bilbao | Coche con Conductor",
  metaDescription:
    "Traslados y excursiones desde Bilbao: estación de Abando, terminal de cruceros de Getxo, San Sebastián, Rioja Alavesa y Gaztelugatxe. Precio cerrado al reservar.",
  heroTitle: "Traslados Privados y Excursiones en Bilbao",
  heroDescription:
    "Moverse por Bilbao y Euskadi en coche privado: traslados desde la estación de Abando y la terminal de cruceros de Getxo, viajes a San Sebastián y excursiones a la Rioja Alavesa y San Juan de Gaztelugatxe, con precio cerrado al reservar.",
};

export const BILBAO_CITY_RICH_TITLE_EN = "Getting Around Bilbao by Private Car";
export const BILBAO_CITY_RICH_TITLE_ES = "Moverse por Bilbao en coche privado";

export const BILBAO_CITY_RICH_CONTENT_EN = `<p>Bilbao is compact, and the centre is easy to explore on foot, by metro or by tram. A private car is most useful for the journeys in between: getting to and from the station or the cruise terminal with luggage, reaching the coast and the rest of the Basque Country, and day trips where public transport is slow or infrequent. If you're arriving by plane, see our <a href="/bilbao-airport-transfer/">Bilbao Airport transfer page</a>.</p>

<h3>Neighbourhoods and the Guggenheim area</h3>
<p>Most visitors stay in one of three areas. Abandoibarra, along the river, is home to the Guggenheim Museum and several large hotels. Abando and Indautxu form the modern centre, with Gran Vía, shops and Abando station. The Casco Viejo, the old town with its "Seven Streets", is largely pedestrianised, so drop-offs there are at the nearest point a car can reach. Tell us your exact address when you book and we'll confirm the pickup or drop-off point.</p>

<h3>Abando station and the cruise terminal</h3>
<p>Long-distance trains arrive at Bilbao-Abando station in the city centre. We run transfers between <a href="/bilbao-airport-to-train-station/">Bilbao Airport and Abando station</a> (around 15 minutes) and to hotels nearby. Cruise ships calling at Bilbao use the terminal at Getxo, at the mouth of the estuary; our <a href="/bilbao-to-getxo-transfer/">Bilbao to Getxo transfer</a> takes around 15 minutes, and Getxo is also home to the Vizcaya Bridge, a UNESCO World Heritage Site.</p>

<h3>San Sebastián and onward travel</h3>
<p>San Sebastián is about an hour away by road. You can book a one-way <a href="/bilbao-to-san-sebastian-transfer/">Bilbao to San Sebastián transfer</a> if you're moving on, or a <a href="/bilbao-to-san-sebastian-day-trip/">day trip</a> with the driver waiting while you explore. For longer journeys we also run transfers to <a href="/bilbao-to-vitoria-gasteiz-transfer/">Vitoria-Gasteiz</a>, <a href="/bilbao-to-zaragoza-transfer/">Zaragoza</a> and <a href="/bilbao-to-madrid-transfer/">Madrid</a>.</p>

<h3>Day trips from Bilbao</h3>
<table>
<thead><tr><th>Day trip</th><th>Approx. drive each way</th></tr></thead>
<tbody>
<tr><td><a href="/bilbao-to-gaztelugatxe-day-trip/">San Juan de Gaztelugatxe</a></td><td>50 min</td></tr>
<tr><td><a href="/bilbao-to-san-sebastian-day-trip/">San Sebastián</a></td><td>1 hr</td></tr>
<tr><td><a href="/bilbao-to-vitoria-gasteiz-day-trip/">Vitoria-Gasteiz</a></td><td>1 hr</td></tr>
<tr><td><a href="/bilbao-to-hondarribia-day-trip/">Hondarribia</a></td><td>1 hr 15 min</td></tr>
<tr><td><a href="/bilbao-to-rioja-wine-region-day-trip/">Rioja Alavesa wine region</a></td><td>1 hr 20 min</td></tr>
</tbody>
</table>
<p>For winery visits, book tours and tastings with the wineries in advance and share the times with us so the driving fits around them.</p>

<h3>Chauffeur by the hour</h3>
<p>For a day of meetings or several stops around the city, you can request a <a href="/hourly-chauffeur/">chauffeur by the hour</a>; availability is confirmed with your quote. Tell us your plans, pickup address and passengers, and we'll reply with a fixed price.</p>`;

export const BILBAO_CITY_RICH_CONTENT_ES = `<p>Bilbao es una ciudad compacta y el centro se recorre fácilmente a pie, en metro o en tranvía. Un coche privado es más útil para los trayectos intermedios: ir y volver de la estación o de la terminal de cruceros con el equipaje, llegar a la costa y al resto de Euskadi, y hacer excursiones donde el transporte público es lento o poco frecuente. Si llegas en avión, consulta nuestra <a href="/es/traslado-aeropuerto-bilbao/">página de traslados desde el Aeropuerto de Bilbao</a>.</p>

<h3>Barrios y la zona del Guggenheim</h3>
<p>La mayoría de los visitantes se aloja en una de estas tres zonas. Abandoibarra, junto a la ría, alberga el Museo Guggenheim y varios hoteles grandes. Abando e Indautxu forman el centro moderno, con la Gran Vía, las tiendas y la estación de Abando. El Casco Viejo, con sus «Siete Calles», es en gran parte peatonal, así que allí la recogida o la llegada se hace en el punto más cercano al que puede llegar un coche. Indícanos la dirección exacta al reservar y te confirmaremos el punto.</p>

<h3>La estación de Abando y la terminal de cruceros</h3>
<p>Los trenes de larga distancia llegan a la estación de Bilbao-Abando, en el centro de la ciudad. Hacemos traslados entre el <a href="/es/traslado-aeropuerto-bilbao-a-estacion-abando/">Aeropuerto de Bilbao y la estación de Abando</a> (unos 15 minutos) y a los hoteles cercanos. Los cruceros que hacen escala en Bilbao usan la terminal de Getxo, en la desembocadura de la ría; nuestro <a href="/es/bilbao-a-getxo-traslado/">traslado de Bilbao a Getxo</a> dura unos 15 minutos, y en Getxo está también el Puente Colgante de Bizkaia, Patrimonio de la Humanidad de la UNESCO.</p>

<h3>San Sebastián y otros destinos</h3>
<p>San Sebastián está a alrededor de una hora por carretera. Puedes reservar un <a href="/es/bilbao-a-san-sebastian-traslado/">traslado de Bilbao a San Sebastián</a> de ida si continúas viaje, o una <a href="/es/bilbao-a-san-sebastian-excursion-de-un-dia/">excursión de un día</a> con el conductor esperándote mientras recorres la ciudad. Para trayectos más largos también hacemos traslados a <a href="/es/bilbao-a-vitoria-gasteiz-traslado/">Vitoria-Gasteiz</a>, <a href="/es/bilbao-a-zaragoza-traslado/">Zaragoza</a> y <a href="/es/bilbao-a-madrid-traslado/">Madrid</a>.</p>

<h3>Excursiones desde Bilbao</h3>
<table>
<thead><tr><th>Excursión</th><th>Trayecto aprox. por sentido</th></tr></thead>
<tbody>
<tr><td><a href="/es/bilbao-a-gaztelugatxe-excursion-de-un-dia/">San Juan de Gaztelugatxe</a></td><td>50 min</td></tr>
<tr><td><a href="/es/bilbao-a-san-sebastian-excursion-de-un-dia/">San Sebastián</a></td><td>1 h</td></tr>
<tr><td><a href="/es/bilbao-a-vitoria-gasteiz-excursion-de-un-dia/">Vitoria-Gasteiz</a></td><td>1 h</td></tr>
<tr><td><a href="/es/bilbao-a-hondarribia-excursion-de-un-dia/">Hondarribia</a></td><td>1 h 15 min</td></tr>
<tr><td><a href="/es/bilbao-a-rioja-alavesa-excursion-de-un-dia/">Rioja Alavesa</a></td><td>1 h 20 min</td></tr>
</tbody>
</table>
<p>Para visitar bodegas, reserva las visitas y catas directamente con ellas y compártenos los horarios para organizar los trayectos en torno a ellos.</p>

<h3>Chófer por horas</h3>
<p>Para un día de reuniones o varias paradas por la ciudad, puedes solicitar un <a href="/es/chauffeur-por-horas/">chófer por horas</a>; la disponibilidad se confirma con el presupuesto. Indícanos tus planes, la dirección de recogida y el número de pasajeros, y te responderemos con un precio cerrado.</p>`;

export const BILBAO_CITY_FAQ_EN: PageFaqItem[] = [
  { question: "Do I need a car to get around Bilbao?", answer: "Not for the centre, which is easy to explore on foot, by metro or by tram. A private car is most useful for the station or cruise terminal with luggage, trips along the coast and day trips." },
  { question: "How far is San Sebastián from Bilbao?", answer: "About an hour by road (roughly 100 km). You can book a one-way transfer or a day trip with the driver waiting." },
  { question: "Where do cruise ships dock in Bilbao?", answer: "At the cruise terminal in Getxo, at the mouth of the estuary, around 15 minutes from central Bilbao by car." },
  { question: "Can the car drop me in the Casco Viejo?", answer: "The old town is largely pedestrianised. We take you to the nearest point a car can reach, confirmed when you book." },
  { question: "Can I book a driver for a Rioja wine day trip?", answer: "Yes. The Rioja Alavesa wine region is around 1 hr 20 min from Bilbao. Book winery visits directly with the wineries and share the times with us." },
  { question: "Can I cancel or change my booking?", answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee." },
];

export const BILBAO_CITY_FAQ_ES: PageFaqItem[] = [
  { question: "¿Necesito coche para moverme por Bilbao?", answer: "No para el centro, que se recorre fácilmente a pie, en metro o en tranvía. Un coche privado es más útil para ir a la estación o a la terminal de cruceros con equipaje, recorrer la costa y hacer excursiones." },
  { question: "¿A qué distancia está San Sebastián de Bilbao?", answer: "A alrededor de una hora por carretera (unos 100 km). Puedes reservar un traslado de ida o una excursión de un día con el conductor esperándote." },
  { question: "¿Dónde atracan los cruceros en Bilbao?", answer: "En la terminal de cruceros de Getxo, en la desembocadura de la ría, a unos 15 minutos en coche del centro de Bilbao." },
  { question: "¿Puede el coche dejarme en el Casco Viejo?", answer: "El casco antiguo es en gran parte peatonal. Te llevamos al punto más cercano al que puede llegar un coche, que se confirma al reservar." },
  { question: "¿Puedo reservar un conductor para una excursión a La Rioja?", answer: "Sí. La Rioja Alavesa está a alrededor de 1 h 20 min de Bilbao. Reserva las visitas directamente con las bodegas y compártenos los horarios." },
  { question: "¿Puedo cancelar o modificar la reserva?", answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo." },
];
