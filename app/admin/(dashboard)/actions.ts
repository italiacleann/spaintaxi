"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getResendClient, getFromAddress } from "@/lib/email/resend";
import type { LeadStatus } from "@/lib/leads/types";

async function requireSupabase() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    redirect(
      "/admin/login?error=" +
        encodeURIComponent("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.")
    );
  }
  return supabase;
}

export async function signOut() {
  const supabase = await requireSupabase();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  const supabase = await requireSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { error } = await supabase.from("leads").update({ status }).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
}

export async function confirmLead(id: string, sendEmail: boolean) {
  const supabase = await requireSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: lead, error } = await supabase
    .from("leads")
    .update({ status: "confirmed" satisfies LeadStatus })
    .eq("id", id)
    .select("customer_name, email, locale")
    .single();

  if (error) throw new Error(error.message);

  if (sendEmail && lead) {
    const resend = getResendClient();
    if (resend) {
      const isEs = lead.locale === "es";
      const subject = isEs ? "Tu traslado ha sido confirmado" : "Your transfer has been confirmed";
      const greeting = isEs ? `Hola ${lead.customer_name},` : `Hello ${lead.customer_name},`;
      const message = isEs
        ? "Tu solicitud de traslado ha sido confirmada. Nos pondremos en contacto contigo con los últimos detalles antes de tu viaje."
        : "Your transfer request has been confirmed. We'll be in touch with the final details ahead of your trip.";
      const signOff = isEs ? "Saludos,<br />El equipo" : "Regards,<br />Team";

      await resend.emails.send({
        from: getFromAddress(),
        to: lead.email,
        subject,
        html: `<p>${greeting}</p><p>${message}</p><p>${signOff}</p>`,
      });
    }
  }

  revalidatePath("/admin");
}

export async function deleteLead(id: string) {
  const supabase = await requireSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { error } = await supabase.from("leads").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
}
