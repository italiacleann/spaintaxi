import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { sendLeadEmails } from "@/lib/email/send-lead-emails";
import type { LeadInput } from "@/lib/leads/types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validate(body: Partial<LeadInput>): string | null {
  const required: (keyof LeadInput)[] = [
    "locale",
    "customerName",
    "email",
    "phone",
    "country",
    "pickupLocation",
    "dropoffLocation",
    "pickupDate",
    "pickupTime",
    "passengers",
    "luggage",
    "vehicleType",
  ];
  for (const field of required) {
    if (!isNonEmptyString(body[field] as unknown as string)) {
      return `Missing required field: ${field}`;
    }
  }
  if (!body.privacyAccepted) {
    return "Privacy policy must be accepted.";
  }
  return null;
}

export async function POST(request: Request) {
  let body: Partial<LeadInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const lead: LeadInput = {
    locale: body.locale === "es" ? "es" : "en",
    sourcePath: body.sourcePath ?? null,
    customerName: body.customerName!,
    email: body.email!,
    phone: body.phone!,
    country: body.country!,
    pickupLocation: body.pickupLocation!,
    dropoffLocation: body.dropoffLocation!,
    pickupDate: body.pickupDate!,
    pickupTime: body.pickupTime!,
    isReturnTrip: Boolean(body.isReturnTrip),
    returnDate: body.isReturnTrip ? (body.returnDate ?? null) : null,
    returnTime: body.isReturnTrip ? (body.returnTime ?? null) : null,
    passengers: body.passengers!,
    luggage: body.luggage!,
    vehicleType: body.vehicleType!,
    flightNumber: body.flightNumber ?? null,
    notes: body.notes ?? null,
    privacyAccepted: true,
  };

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "The quote system is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  const { data, error } = await supabase
    .from("leads")
    .insert({
      locale: lead.locale,
      source_path: lead.sourcePath,
      customer_name: lead.customerName,
      email: lead.email,
      phone: lead.phone,
      country: lead.country,
      pickup_location: lead.pickupLocation,
      dropoff_location: lead.dropoffLocation,
      pickup_date: lead.pickupDate,
      pickup_time: lead.pickupTime,
      is_return_trip: lead.isReturnTrip,
      return_date: lead.returnDate,
      return_time: lead.returnTime,
      passengers: lead.passengers,
      luggage: lead.luggage,
      vehicle_type: lead.vehicleType,
      flight_number: lead.flightNumber,
      notes: lead.notes,
      privacy_accepted: lead.privacyAccepted,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Failed to insert lead:", error);
    return NextResponse.json({ error: "Could not save your request. Please try again." }, { status: 500 });
  }

  try {
    await sendLeadEmails(lead);
  } catch (emailError) {
    console.error("Lead saved but email sending failed:", emailError);
  }

  return NextResponse.json({ success: true, id: data.id });
}
