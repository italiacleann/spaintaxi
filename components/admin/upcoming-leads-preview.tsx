import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import type { Lead } from "@/lib/leads/types";
import { isUpcomingLead, sortByPickupSoonest } from "@/lib/leads/upcoming";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LeadStatusBadge } from "@/components/admin/lead-status-badge";
import { LeadDetailSheet } from "@/components/admin/lead-detail-sheet";

const PREVIEW_LIMIT = 6;

export function UpcomingLeadsPreview({ leads }: { leads: Lead[] }) {
  const upcoming = sortByPickupSoonest(leads.filter((lead) => isUpcomingLead(lead))).slice(
    0,
    PREVIEW_LIMIT
  );

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-base font-semibold text-foreground">Upcoming Leads</h2>
          <p className="text-xs text-muted-foreground">Transfer requests coming up soonest.</p>
        </div>
        <Link
          href="/admin/leads"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5")}
        >
          View All Leads
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>

      {upcoming.length === 0 ? (
        <div className="flex flex-col items-center gap-1 py-10 text-center">
          <p className="text-sm font-medium text-foreground">No upcoming leads.</p>
          <p className="text-xs text-muted-foreground">New requests with a future pickup date will show up here.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                <th className="py-2.5 pr-4 font-medium">Customer</th>
                <th className="py-2.5 pr-4 font-medium">Pickup</th>
                <th className="py-2.5 pr-4 font-medium">Drop-off</th>
                <th className="py-2.5 pr-4 font-medium">Date</th>
                <th className="py-2.5 pr-4 font-medium">Passengers</th>
                <th className="py-2.5 pr-4 font-medium">Status</th>
                <th className="py-2.5 pr-0 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {upcoming.map((lead) => (
                <tr key={lead.id}>
                  <td className="py-2.5 pr-4 font-medium text-foreground">{lead.customerName}</td>
                  <td className="max-w-[140px] truncate py-2.5 pr-4 text-foreground" title={lead.pickupLocation}>
                    {lead.pickupLocation}
                  </td>
                  <td className="max-w-[140px] truncate py-2.5 pr-4 text-foreground" title={lead.dropoffLocation}>
                    {lead.dropoffLocation}
                  </td>
                  <td className="py-2.5 pr-4 whitespace-nowrap text-foreground">
                    {lead.pickupDate} <span className="text-muted-foreground">{lead.pickupTime}</span>
                  </td>
                  <td className="py-2.5 pr-4 text-foreground">{lead.passengers}</td>
                  <td className="py-2.5 pr-4">
                    <LeadStatusBadge status={lead.status} />
                  </td>
                  <td className="py-2.5 pr-0 text-right">
                    <LeadDetailSheet lead={lead} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
