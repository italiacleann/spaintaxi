import { getResendClient, getFromAddress, getAdminNotificationEmail } from "@/lib/email/resend";
import { buildClientEmail, buildAdminEmail } from "@/lib/email/templates";
import type { LeadInput } from "@/lib/leads/types";

export async function sendLeadEmails(lead: LeadInput) {
  const resend = getResendClient();
  if (!resend) {
    console.warn("RESEND_API_KEY is not set; skipping lead emails.");
    return;
  }

  const from = getFromAddress();
  const adminEmail = getAdminNotificationEmail();
  const client = buildClientEmail(lead);

  const sends = [
    resend.emails.send({
      from,
      to: lead.email,
      subject: client.subject,
      html: client.html,
    }),
  ];

  if (adminEmail) {
    const admin = buildAdminEmail(lead);
    sends.push(
      resend.emails.send({
        from,
        to: adminEmail,
        subject: admin.subject,
        html: admin.html,
      })
    );
  }

  const results = await Promise.allSettled(sends);
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("Failed to send lead email:", result.reason);
    }
  }
}
