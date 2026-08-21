"use client";

import { useMemo, useState, useTransition } from "react";
import { CheckIcon, SearchIcon } from "lucide-react";

import type { Lead, LeadStatus } from "@/lib/leads/types";
import { leadStatuses, leadStatusLabels } from "@/lib/leads/status";
import { confirmLead, updateLeadStatus } from "@/app/admin/(dashboard)/actions";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeadDetailSheet } from "@/components/admin/lead-detail-sheet";
import { LeadFormDialog } from "@/components/admin/lead-form-dialog";
import { DeleteLeadButton } from "@/components/admin/delete-lead-button";

function StatusCell({ lead }: { lead: Lead }) {
  const [isPending, startTransition] = useTransition();

  function handleStatusChange(status: string | null) {
    if (!status) return;
    startTransition(() => {
      void updateLeadStatus(lead.id, status as LeadStatus);
    });
  }

  return (
    <Select value={lead.status} onValueChange={handleStatusChange} disabled={isPending}>
      <SelectTrigger className="h-8 w-[144px]" size="sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {leadStatuses.map((status) => (
          <SelectItem key={status} value={status}>
            {leadStatusLabels[status]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function RowActions({ lead }: { lead: Lead }) {
  const [isPending, startTransition] = useTransition();

  function handleConfirm() {
    startTransition(() => {
      void confirmLead(lead.id, true);
    });
  }

  return (
    <div className="flex items-center justify-end gap-1">
      {lead.status !== "confirmed" ? (
        <Button
          variant="ghost"
          size="icon-sm"
          disabled={isPending}
          onClick={handleConfirm}
          aria-label="Confirm lead"
          title="Confirm"
        >
          <CheckIcon className="size-4 text-primary" />
        </Button>
      ) : null}
      <LeadDetailSheet lead={lead} />
      <LeadFormDialog
        lead={lead}
        trigger={
          <Button variant="ghost" size="sm">
            Edit
          </Button>
        }
      />
      <DeleteLeadButton leadId={lead.id} customerName={lead.customerName} variant="icon" />
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="flex flex-col gap-2 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-12 w-full animate-pulse rounded-lg bg-muted" />
      ))}
    </div>
  );
}

export function LeadsTable({ leads, loading = false }: { leads: Lead[]; loading?: boolean }) {
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
    <div className="flex flex-col gap-4">
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
        <div className="flex items-center gap-2">
          <Input
            type="date"
            value={dateFilter}
            onChange={(event) => setDateFilter(event.target.value)}
            className="h-10 w-full sm:w-auto"
            aria-label="Filter by pickup date"
          />
          {dateFilter ? (
            <Button variant="ghost" size="sm" onClick={() => setDateFilter("")}>
              Clear
            </Button>
          ) : null}
        </div>
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

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        {loading ? (
          <TableSkeleton />
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-1 p-12 text-center">
            <p className="text-sm font-medium text-foreground">
              {leads.length === 0 ? "No leads found." : "No leads match your search or filters."}
            </p>
            <p className="text-xs text-muted-foreground">
              {leads.length === 0
                ? "New quote requests will appear here as soon as they come in."
                : "Try adjusting your search, status filter, or date."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Customer</th>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Pickup</th>
                  <th className="px-4 py-3 font-medium">Drop-off</th>
                  <th className="px-4 py-3 font-medium">Date &amp; Time</th>
                  <th className="px-4 py-3 font-medium">Passengers</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((lead) => (
                  <tr key={lead.id} className="transition-colors hover:bg-muted/40">
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{lead.customerName}</span>
                        <span className="font-mono text-xs text-muted-foreground">{lead.id.slice(0, 8)}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span className="text-foreground">{lead.email}</span>
                        <span className="text-xs text-muted-foreground">{lead.phone}</span>
                      </div>
                    </td>
                    <td className="max-w-[160px] truncate px-4 py-3 text-foreground" title={lead.pickupLocation}>
                      {lead.pickupLocation}
                    </td>
                    <td className="max-w-[160px] truncate px-4 py-3 text-foreground" title={lead.dropoffLocation}>
                      {lead.dropoffLocation}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-foreground">
                      {lead.pickupDate} <span className="text-muted-foreground">{lead.pickupTime}</span>
                    </td>
                    <td className="px-4 py-3 text-foreground">{lead.passengers}</td>
                    <td className="px-4 py-3">
                      <StatusCell lead={lead} />
                    </td>
                    <td className="px-4 py-3">
                      <RowActions lead={lead} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        {filtered.length} of {leads.length} leads
      </p>
    </div>
  );
}
