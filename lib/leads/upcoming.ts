import type { Lead } from "@/lib/leads/types";

/**
 * "Upcoming" is a UI-only concept (not a stored status): today or a future
 * pickup date, excluding trips that are already finished or called off.
 */
export function isUpcomingLead(lead: Lead, today = new Date()): boolean {
  if (lead.status === "cancelled" || lead.status === "completed") return false;
  if (!lead.pickupDate) return false;
  const todayStr = today.toISOString().slice(0, 10);
  return lead.pickupDate >= todayStr;
}

export function sortByPickupSoonest(leads: Lead[]): Lead[] {
  return [...leads].sort((a, b) => {
    const aKey = `${a.pickupDate}T${a.pickupTime || "00:00"}`;
    const bKey = `${b.pickupDate}T${b.pickupTime || "00:00"}`;
    return aKey.localeCompare(bKey);
  });
}
