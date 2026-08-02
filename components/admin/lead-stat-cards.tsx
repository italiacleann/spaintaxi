import { CheckCircle2Icon, ClipboardListIcon, FlagIcon, InboxIcon } from "lucide-react";

import type { Lead } from "@/lib/leads/types";

export function LeadStatCards({ leads }: { leads: Lead[] }) {
  const stats = [
    {
      label: "Total Leads",
      value: leads.length,
      icon: ClipboardListIcon,
    },
    {
      label: "New Leads",
      value: leads.filter((lead) => lead.status === "new_request").length,
      icon: InboxIcon,
    },
    {
      label: "Confirmed Leads",
      value: leads.filter((lead) => lead.status === "confirmed").length,
      icon: CheckCircle2Icon,
    },
    {
      label: "Completed Leads",
      value: leads.filter((lead) => lead.status === "completed").length,
      icon: FlagIcon,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-semibold text-foreground">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
