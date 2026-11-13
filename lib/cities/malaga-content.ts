import type { LocalizedPageCopy, PageFaqItem } from "@/lib/shared/page-copy";

// Hand-written content for the Málaga city page. Search Console (Aug–Nov
// 2026) shows the Spanish page's impressions come mostly from chauffeur /
// car-with-driver searches ("conductor privado malaga", "alquiler coche con
// conductor malaga", "chofer privado malaga", "excursion con chofer privado
// malaga"), so the copy is framed around that service rather than generic
// "transfers". Drive times are the site's own estimates from
// lib/routes/data/malaga.ts; hourly-booking terms (3-hour typical minimum,
// extensions at the same hourly rate) match the hourly-chauffeur service
// page. No prices are quoted.

export const MALAGA_CITY_COPY_EN: LocalizedPageCopy = {
  seoTitle: "Private Chauffeur in Málaga | Car With Driver & Transfers",
  metaDescription:
    "Private chauffeur and car with driver in Málaga: airport and port transfers, hourly hire and day trips to Ronda, Granada or Nerja. Fixed price when you book.",
  heroTitle: "Private Chauffeur and Car With Driver in Málaga",
  heroDescription:
    "A professional driver and a private car for your trip in Málaga: airport and cruise port transfers, a chauffeur by the hour, or a day trip to Ronda, Granada or Nerja. The price is fixed when you book.",
};

export const MALAGA_CITY_COPY_ES: LocalizedPageCopy = {
  seoTitle: "Chófer Privado en Málaga | Coche con Conductor y Traslados",
  metaDescription:
    "Chófer privado y coche con conductor en Málaga: traslados al aeropuerto y al puerto, servicio por horas y excursiones a Ronda, Granada o Nerja. Precio cerrado.",
  heroTitle: "Chófer Privado y Coche con Conductor en Málaga",
  heroDescription:
    "Un conductor profesional y un coche privado para lo que necesites en Málaga: traslados al aeropuerto y al puerto de cruceros, chófer por horas o excursiones a Ronda, Granada o Nerja. El precio queda cerrado al reservar.",
};

export const MALAGA_CITY_RICH_TITLE_EN = "How Our Chauffeur Service in Málaga Works";
export const MALAGA_CITY_RICH_TITLE_ES = "Cómo funciona nuestro servicio de chófer en Málaga";

export const MALAGA_CITY_RICH_CONTENT_EN = `<p>Booking a car with a driver in Málaga means a private vehicle and a professional chauffeur reserved only for you, at a price agreed before you travel. It isn't self-drive car hire: you don't drive, park or return the car. You can book it in three ways, depending on your plans.</p>

<h3>1. Point-to-point transfers</h3>
<p>The most common booking is a single journey at a fixed price, such as from <a href="/malaga-airport-transfer/">Málaga Airport</a> to your hotel, from the city to <a href="/malaga-to-ronda-day-trip/">Ronda</a> or <a href="/malaga-to-granada-transfer/">Granada</a>, or between your hotel and the <a href="/cruise-port-to-malaga-city-centre/">cruise port</a> or <a href="/malaga-airport-to-maria-zambrano-station/">María Zambrano station</a>. For airport pickups, your driver waits in arrivals with a name sign and, if you give us your flight number, follows the flight so the pickup matches your actual landing.</p>

<h3>2. Chauffeur by the hour</h3>
<p>If your day has several stops, such as meetings, shopping, a restaurant booking or an event, you can book a <a href="/hourly-chauffeur/">chauffeur by the hour</a>. The driver and car stay with you and wait between stops. Most hourly bookings start from a three-hour minimum, and you can extend on the day with your driver at the same hourly rate, subject to availability.</p>

<h3>3. Day trips with a private driver from Málaga</h3>
<p>A private driver lets you set your own pace and stop where you like. Popular day trips from Málaga include:</p>
<table>
<thead><tr><th>Day trip</th><th>Approx. drive each way</th></tr></thead>
<tbody>
<tr><td><a href="/malaga-to-frigiliana-day-trip/">Frigiliana and the Axarquía</a></td><td>1 hr</td></tr>
<tr><td><a href="/malaga-to-ronda-day-trip/">Ronda</a></td><td>1 hr 15 min</td></tr>
<tr><td><a href="/malaga-to-granada-day-trip/">Granada and the Alhambra</a></td><td>1 hr 20 min</td></tr>
<tr><td><a href="/malaga-to-gibraltar-day-trip/">Gibraltar</a></td><td>1 hr 45 min</td></tr>
<tr><td><a href="/malaga-to-cordoba-day-trip/">Córdoba</a></td><td>1 hr 45 min</td></tr>
<tr><td><a href="/malaga-to-seville-day-trip/">Seville</a></td><td>2 hr 15 min</td></tr>
</tbody>
</table>
<p>For the Alhambra, book your entry tickets in advance and tell us your time slot so we can plan the drive around it. For Gibraltar, check the border document requirements before you travel.</p>

<h3>Business travel, events and groups</h3>
<p>For meetings, conferences and corporate guests we offer <a href="/corporate-travel/">corporate travel</a> with centralised invoicing, and for weddings or events with several vehicles see <a href="/group-event-transfers/">group and event transfers</a>.</p>

<h3>Vehicles</h3>
<p>When you request a quote you can choose a sedan, executive sedan, SUV, Mercedes V-Class, minivan or minibus, or leave the choice to us based on your group and luggage.</p>

<h3>Booking</h3>
<p>Tell us your date, pickup address, plans for the day and number of passengers in the quote form, and we'll confirm a fixed price. Most bookings can be cancelled free of charge up to 24 hours before pickup. For more about getting around the area, read our <a href="/blog/private-transfer-malaga-guide/">guide to private transport in Málaga</a>.</p>`;

export const MALAGA_CITY_RICH_CONTENT_ES = `<p>Reservar un coche con conductor en Málaga significa contar con un vehículo privado y un chófer profesional solo para ti, con un precio acordado antes del viaje. No es un alquiler de coche sin conductor: no tienes que conducir, aparcar ni devolver el coche. Puedes reservarlo de tres formas, según tus planes.</p>

<h3>1. Traslados de punto a punto</h3>
<p>Lo más habitual es un trayecto único con precio cerrado: del <a href="/es/traslado-aeropuerto-malaga/">Aeropuerto de Málaga</a> a tu hotel, de la ciudad a <a href="/es/malaga-a-ronda-excursion-de-un-dia/">Ronda</a> o <a href="/es/malaga-a-granada-traslado/">Granada</a>, o entre tu hotel y el <a href="/es/puerto-crucero-al-centro-de-malaga/">puerto de cruceros</a> o la <a href="/es/traslado-aeropuerto-malaga-a-estacion-maria-zambrano/">estación María Zambrano</a>. En las recogidas en el aeropuerto, el conductor te espera en llegadas con un cartel con tu nombre y, si nos das el número de vuelo, sigue el vuelo para que la recogida coincida con la hora real de aterrizaje.</p>

<h3>2. Chófer por horas</h3>
<p>Si tu día tiene varias paradas, como reuniones, compras, una reserva en un restaurante o un evento, puedes reservar un <a href="/es/chauffeur-por-horas/">chófer por horas</a>. El conductor y el coche se quedan contigo y te esperan entre parada y parada. La mayoría de las reservas por horas empiezan con un mínimo de tres horas, y puedes ampliarla en el momento con tu conductor a la misma tarifa por hora, según disponibilidad.</p>

<h3>3. Excursiones con chófer privado desde Málaga</h3>
<p>Con un conductor privado marcas tu propio ritmo y paras donde quieras. Estas son algunas de las excursiones más solicitadas desde Málaga:</p>
<table>
<thead><tr><th>Excursión</th><th>Trayecto aprox. por sentido</th></tr></thead>
<tbody>
<tr><td><a href="/es/malaga-a-frigiliana-excursion-de-un-dia/">Frigiliana y la Axarquía</a></td><td>1 h</td></tr>
<tr><td><a href="/es/malaga-a-ronda-excursion-de-un-dia/">Ronda</a></td><td>1 h 15 min</td></tr>
<tr><td><a href="/es/malaga-a-granada-excursion-de-un-dia/">Granada y la Alhambra</a></td><td>1 h 20 min</td></tr>
<tr><td><a href="/es/malaga-a-gibraltar-excursion-de-un-dia/">Gibraltar</a></td><td>1 h 45 min</td></tr>
<tr><td><a href="/es/malaga-a-cordoba-excursion-de-un-dia/">Córdoba</a></td><td>1 h 45 min</td></tr>
<tr><td><a href="/es/malaga-a-sevilla-excursion-de-un-dia/">Sevilla</a></td><td>2 h 15 min</td></tr>
</tbody>
</table>
<p>Para la Alhambra, compra las entradas con antelación y dinos tu franja horaria para organizar el trayecto en torno a ella. Para Gibraltar, comprueba antes del viaje qué documentación se exige en la frontera.</p>

<h3>Empresas, eventos y grupos</h3>
<p>Para reuniones, congresos e invitados de empresa ofrecemos <a href="/es/transporte-corporativo/">transporte corporativo</a> con facturación centralizada, y para bodas o eventos con varios vehículos consulta nuestros <a href="/es/traslados-para-grupos-y-eventos/">traslados para grupos y eventos</a>.</p>

<h3>Vehículos</h3>
<p>Al pedir presupuesto puedes elegir sedán, sedán ejecutivo, SUV, Mercedes Clase V, furgoneta o minibús, o dejar que lo elijamos nosotros según tu grupo y tu equipaje.</p>

<h3>Cómo reservar</h3>
<p>Indícanos en el formulario la fecha, la dirección de recogida, tus planes para el día y el número de pasajeros, y te confirmaremos un precio cerrado. La mayoría de las reservas se pueden cancelar sin coste hasta 24 horas antes de la recogida. Si quieres saber más sobre cómo moverte por la zona, lee nuestra <a href="/es/blog/transporte-privado-malaga-guia/">guía de transporte privado en Málaga</a>.</p>`;

export const MALAGA_CITY_FAQ_EN: PageFaqItem[] = [
  {
    question: "Is this car hire or a car with a driver?",
    answer: "It's a car with a professional driver. You don't drive the vehicle; the chauffeur drives you, waits where needed and handles parking.",
  },
  {
    question: "Can I hire a private chauffeur in Málaga by the hour?",
    answer: "Yes. Most hourly bookings start from a three-hour minimum, and you can extend on the day with your driver at the same hourly rate, subject to availability.",
  },
  {
    question: "Do you offer day trips with a private driver from Málaga?",
    answer: "Yes. Popular trips include Ronda, Frigiliana, Granada and the Alhambra, Córdoba, Seville and Gibraltar. You choose the pickup time and stops.",
  },
  {
    question: "Can the driver meet me at Málaga Airport?",
    answer: "Yes. Your driver waits in the arrivals hall with a name sign. If you give us your flight number, we follow the flight and adjust the pickup to your actual landing time.",
  },
  {
    question: "How is the price calculated?",
    answer: "Transfers and day trips are priced by route, vehicle and passengers; hourly bookings by the number of hours and the vehicle. The price is confirmed before you book.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer: "Most bookings can be cancelled or changed free of charge up to 24 hours before pickup. Cancellations within 24 hours may incur a fee.",
  },
];

export const MALAGA_CITY_FAQ_ES: PageFaqItem[] = [
  {
    question: "¿Es un alquiler de coche o un coche con conductor?",
    answer: "Es un coche con conductor profesional. No conduces tú: el chófer te lleva, te espera cuando hace falta y se ocupa del aparcamiento.",
  },
  {
    question: "¿Puedo contratar un chófer privado en Málaga por horas?",
    answer: "Sí. La mayoría de las reservas por horas empiezan con un mínimo de tres horas, y puedes ampliarla en el momento con tu conductor a la misma tarifa por hora, según disponibilidad.",
  },
  {
    question: "¿Hacéis excursiones con chófer privado desde Málaga?",
    answer: "Sí. Entre las más solicitadas están Ronda, Frigiliana, Granada y la Alhambra, Córdoba, Sevilla y Gibraltar. Tú eliges la hora de salida y las paradas.",
  },
  {
    question: "¿El conductor puede recogerme en el Aeropuerto de Málaga?",
    answer: "Sí. Tu conductor te espera en el vestíbulo de llegadas con un cartel con tu nombre. Si nos das el número de vuelo, seguimos el vuelo y ajustamos la recogida a la hora real de aterrizaje.",
  },
  {
    question: "¿Cómo se calcula el precio?",
    answer: "Los traslados y las excursiones se calculan según la ruta, el vehículo y el número de pasajeros; las reservas por horas, según las horas y el vehículo. El precio se confirma antes de reservar.",
  },
  {
    question: "¿Puedo cancelar o modificar la reserva?",
    answer: "La mayoría de las reservas se pueden cancelar o modificar sin coste hasta 24 horas antes de la recogida. Las cancelaciones con menos de 24 horas pueden tener un cargo.",
  },
];
