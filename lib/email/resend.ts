import { Resend } from "resend";

let cachedClient: Resend | null | undefined;

export function getResendClient(): Resend | null {
  if (cachedClient !== undefined) return cachedClient;

  const apiKey = process.env.RESEND_API_KEY;
  cachedClient = apiKey ? new Resend(apiKey) : null;
  return cachedClient;
}

export function getFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL || "Spain Private Transfers <onboarding@resend.dev>";
}

export function getAdminNotificationEmail(): string | null {
  return process.env.ADMIN_NOTIFICATION_EMAIL || "spainprivatetransfer@gmail.com";
}
