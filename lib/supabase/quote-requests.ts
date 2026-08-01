import { supabase } from "@/lib/supabase/client";
import type { Locale } from "@/lib/i18n/config";

export interface QuoteRequestInput {
  locale: Locale;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  isReturnTrip: boolean;
  returnDate: string | null;
  returnTime: string | null;
  passengers: string;
  suitcases: string;
  vehiclePreference: string;
  flightNumber: string | null;
  fullName: string;
  email: string;
  whatsappNumber: string;
  country: string;
  specialRequests: string | null;
  privacyAccepted: boolean;
  sourcePath: string | null;
}

export async function submitQuoteRequest(input: QuoteRequestInput) {
  if (!supabase) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  const { error } = await supabase.from("quote_requests").insert({
    locale: input.locale,
    pickup_location: input.pickupLocation,
    dropoff_location: input.dropoffLocation,
    pickup_date: input.pickupDate,
    pickup_time: input.pickupTime,
    is_return_trip: input.isReturnTrip,
    return_date: input.returnDate,
    return_time: input.returnTime,
    passengers: input.passengers,
    suitcases: input.suitcases,
    vehicle_preference: input.vehiclePreference,
    flight_number: input.flightNumber,
    full_name: input.fullName,
    email: input.email,
    whatsapp_number: input.whatsappNumber,
    country: input.country,
    special_requests: input.specialRequests,
    privacy_accepted: input.privacyAccepted,
    source_path: input.sourcePath,
  });

  if (error) {
    throw error;
  }
}
