import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Lead } from "@/lib/leads/types";

/** Same query/mapping the admin dashboard has always used — extracted so both the Dashboard and Leads pages share it. */
export async function getLeads(): Promise<{ leads: Lead[]; error: string | null }> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { leads: [], error: "Supabase is not configured." };

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return { leads: [], error: error.message };

  const leads: Lead[] = (data ?? []).map((row) => ({
    id: row.id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    status: row.status,
    locale: row.locale,
    sourcePath: row.source_path,
    customerName: row.customer_name,
    email: row.email,
    phone: row.phone,
    country: row.country,
    pickupLocation: row.pickup_location,
    dropoffLocation: row.dropoff_location,
    pickupDate: row.pickup_date,
    pickupTime: row.pickup_time,
    isReturnTrip: row.is_return_trip,
    returnDate: row.return_date,
    returnTime: row.return_time,
    passengers: row.passengers,
    luggage: row.luggage,
    vehicleType: row.vehicle_type,
    flightNumber: row.flight_number,
    notes: row.notes,
    privacyAccepted: row.privacy_accepted,
  }));

  return { leads, error: null };
}
