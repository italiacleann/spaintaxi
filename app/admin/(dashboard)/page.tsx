import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Lead } from "@/lib/leads/types";
import { LeadStatCards } from "@/components/admin/lead-stat-cards";
import { LeadDashboard } from "@/components/admin/lead-dashboard";

export default async function AdminDashboardPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/admin/login");

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

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

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-foreground">Leads</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          All quote requests submitted through the website.
        </p>
      </div>

      {error ? (
        <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          Could not load leads: {error.message}
        </div>
      ) : (
        <>
          <LeadStatCards leads={leads} />
          <LeadDashboard leads={leads} />
        </>
      )}
    </div>
  );
}
