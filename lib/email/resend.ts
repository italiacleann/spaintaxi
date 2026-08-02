import { Resend } from "resend";
import { firstEnv } from "@/lib/env";

let cachedClient: Resend | null | undefined;

export function getResendClient(): Resend | null {
  if (cachedClient !== undefined) return cachedClient;

  const apiKey = firstEnv("RESEND_API_KEY", "RESEND_API");
  cachedClient = apiKey ? new Resend(apiKey) : null;
  return cachedClient;
}

export function getFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL || "Spain Private Transfers <onboarding@resend.dev>";
}

export function getAdminNotificationEmail(): string | null {
  return process.env.ADMIN_NOTIFICATION_EMAIL || "spainprivatetransfer@gmail.com";
}
