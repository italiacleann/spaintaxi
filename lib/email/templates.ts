import type { LeadInput } from "@/lib/leads/types";

const wrapper = (title: string, bodyHtml: string) => `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#F3F4F6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#0B4F6C;padding:24px 32px;">
                <span style="color:#FFFFFF;font-size:18px;font-weight:700;">Spain Private Transfers</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:#1F2937;font-size:15px;line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export function buildClientEmail(lead: LeadInput) {
  const subject =
    lead.locale === "es"
      ? "Hemos recibido tu solicitud de traslado"
      : "Your transfer request has been received";

  const bodyEn = `
    <p>Hello ${lead.customerName},</p>
    <p>Thank you for contacting us.</p>
    <p>We have received your transfer request successfully. Our team is reviewing your requirements and we will reply shortly with the available options and pricing.</p>
    <p>Thank you for choosing us.</p>
    <p>Regards,<br />Team</p>
  `;

  const bodyEs = `
    <p>Hola ${lead.customerName},</p>
    <p>Gracias por contactar con nosotros.</p>
    <p>Hemos recibido correctamente tu solicitud de traslado. Nuestro equipo está revisando los detalles y te responderemos en breve con las opciones disponibles y el precio.</p>
    <p>Gracias por elegirnos.</p>
    <p>Saludos,<br />El equipo</p>
  `;

  return {
    subject,
    html: wrapper(subject, lead.locale === "es" ? bodyEs : bodyEn),
  };
}

function detailRow(label: string, value: string | null | undefined) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:6px 0;color:#6B7280;font-size:13px;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;color:#111827;font-size:13px;">${value}</td>
    </tr>
  `;
}

export function buildAdminEmail(lead: LeadInput) {
  const subject = "New Transfer Request Received";

  const rows = [
    detailRow("Customer name", lead.customerName),
    detailRow("Email", lead.email),
    detailRow("Phone / WhatsApp", lead.phone),
    detailRow("Country", lead.country),
    detailRow("Pickup location", lead.pickupLocation),
    detailRow("Drop-off location", lead.dropoffLocation),
    detailRow("Pickup date", lead.pickupDate),
    detailRow("Pickup time", lead.pickupTime),
    lead.isReturnTrip ? detailRow("Return date", lead.returnDate) : "",
    lead.isReturnTrip ? detailRow("Return time", lead.returnTime) : "",
    detailRow("Passengers", lead.passengers),
    detailRow("Luggage", lead.luggage),
    detailRow("Vehicle requirement", lead.vehicleType),
    detailRow("Flight number", lead.flightNumber),
    detailRow("Notes", lead.notes),
    detailRow("Locale", lead.locale.toUpperCase()),
    detailRow("Source page", lead.sourcePath),
    detailRow("Submitted at", new Date().toISOString()),
  ].join("");

  const body = `
    <p>A new transfer request has been submitted on the website.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;border-top:1px solid #E5E7EB;">
      ${rows}
    </table>
  `;

  return { subject, html: wrapper(subject, body) };
}
