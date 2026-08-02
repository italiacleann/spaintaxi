import type { LeadStatus } from "@/lib/leads/types";

export const leadStatuses: LeadStatus[] = [
  "new_request",
  "contacted",
  "quoted",
  "confirmed",
  "completed",
  "cancelled",
];

export const leadStatusLabels: Record<LeadStatus, string> = {
  new_request: "New Request",
  contacted: "Contacted",
  quoted: "Quoted",
  confirmed: "Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
};

export const leadStatusStyles: Record<LeadStatus, string> = {
  new_request: "bg-blue-50 text-blue-700 ring-blue-600/20",
  contacted: "bg-amber-50 text-amber-700 ring-amber-600/20",
  quoted: "bg-purple-50 text-purple-700 ring-purple-600/20",
  confirmed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  completed: "bg-slate-100 text-slate-700 ring-slate-600/20",
  cancelled: "bg-red-50 text-red-700 ring-red-600/20",
};
