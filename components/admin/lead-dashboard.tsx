"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";

import type { Lead, LeadStatus } from "@/lib/leads/types";
import { leadStatuses, leadStatusLabels } from "@/lib/leads/status";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { LeadCard } from "@/components/admin/lead-card";

export function LeadDashboard({ leads }: { leads: Lead[] }) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");
  const [dateFilter, setDateFilter] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      if (dateFilter && lead.pickupDate !== dateFilter) return false;
      if (!normalized) return true;
      const haystack = [
        lead.customerName,
        lead.email,
        lead.phone,
        lead.pickupLocation,
        lead.dropoffLocation,
        lead.id,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [leads, query, statusFilter, dateFilter]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search name, email, phone, route..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-10 pl-8"
          />
        </div>
        <Input
          type="date"
          value={dateFilter}
          onChange={(event) => setDateFilter(event.target.value)}
          className="h-10 w-full sm:w-auto"
          aria-label="Filter by pickup date"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setStatusFilter("all")}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
            statusFilter === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-white text-muted-foreground hover:border-primary/40"
          )}
        >
          All ({leads.length})
        </button>
        {leadStatuses.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setStatusFilter(status)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              statusFilter === status
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-white text-muted-foreground hover:border-primary/40"
            )}
          >
            {leadStatusLabels[status]} ({leads.filter((lead) => lead.status === status).length})
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        {filtered.length} of {leads.length} leads
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center text-sm text-muted-foreground ring-1 ring-black/5">
          No leads match your search or filters.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      )}
    </div>
  );
}
