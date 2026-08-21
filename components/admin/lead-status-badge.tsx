import type { LeadStatus } from "@/lib/leads/types";
import { leadStatusLabels, leadStatusStyles } from "@/lib/leads/status";
import { cn } from "@/lib/utils";

export function LeadStatusBadge({ status, className }: { status: LeadStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        leadStatusStyles[status],
        className
      )}
    >
      {leadStatusLabels[status]}
    </span>
  );
}
