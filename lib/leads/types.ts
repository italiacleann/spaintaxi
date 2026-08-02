export interface LeadInput {
  locale: "en" | "es";
  sourcePath: string | null;
  customerName: string;
  email: string;
  phone: string;
  country: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  isReturnTrip: boolean;
  returnDate: string | null;
  returnTime: string | null;
  passengers: string;
  luggage: string;
  vehicleType: string;
  flightNumber: string | null;
  notes: string | null;
  privacyAccepted: boolean;
}

export type LeadStatus =
  | "new_request"
  | "contacted"
  | "quoted"
  | "confirmed"
  | "completed"
  | "cancelled";

export interface Lead extends LeadInput {
  id: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}
