"use client";

import { useState, useTransition } from "react";
import {
  CalendarIcon,
  LuggageIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  NavigationIcon,
  PhoneIcon,
  UsersIcon,
} from "lucide-react";

import type { Lead, LeadStatus } from "@/lib/leads/types";
import { leadStatuses, leadStatusLabels, leadStatusStyles } from "@/lib/leads/status";
import { confirmLead, deleteLead, updateLeadStatus } from "@/app/admin/(dashboard)/actions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPinIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  );
}

export function LeadCard({ lead }: { lead: Lead }) {
  const [isPending, startTransition] = useTransition();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const dateTime = `${lead.pickupDate} at ${lead.pickupTime}`;

  function handleStatusChange(status: string | null) {
    if (!status) return;
    startTransition(() => {
      void updateLeadStatus(lead.id, status as LeadStatus);
    });
  }

  function handleConfirm() {
    startTransition(() => {
      void confirmLead(lead.id, true);
    });
  }

  function handleDelete() {
    startTransition(async () => {
      await deleteLead(lead.id);
      setDeleteOpen(false);
    });
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-base font-semibold text-foreground">
              {lead.customerName}
            </h3>
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                leadStatusStyles[lead.status]
              )}
            >
              {leadStatusLabels[lead.status]}
            </span>
          </div>
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">
            Lead ID: {lead.id}
          </p>
          <p className="text-xs text-muted-foreground">
            Submitted {new Date(lead.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Select value={lead.status} onValueChange={handleStatusChange} disabled={isPending}>
            <SelectTrigger className="h-9 w-[150px]">
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

          {lead.status !== "confirmed" ? (
            <Button size="sm" disabled={isPending} onClick={handleConfirm}>
              Confirm
            </Button>
          ) : null}

          <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
            <DialogTrigger
              render={
                <Button variant="destructive" size="sm" disabled={isPending}>
                  Delete
                </Button>
              }
            />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete this lead?</DialogTitle>
                <DialogDescription>
                  This will permanently delete the request from {lead.customerName}. This
                  action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDeleteOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" disabled={isPending} onClick={handleDelete}>
                  Delete Lead
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        <Detail icon={MailIcon} label="Email" value={lead.email} />
        <Detail icon={PhoneIcon} label="Phone number" value={lead.phone} />
        <Detail icon={MapPinIcon} label="Pickup location" value={lead.pickupLocation} />
        <Detail icon={NavigationIcon} label="Drop-off location" value={lead.dropoffLocation} />
        <Detail icon={CalendarIcon} label="Date and time" value={dateTime} />
        <Detail icon={UsersIcon} label="Passengers" value={lead.passengers} />
        <Detail icon={LuggageIcon} label="Luggage" value={lead.luggage} />
        <Detail icon={MapPinIcon} label="Vehicle requirement" value={lead.vehicleType} />
        {lead.notes ? (
          <Detail icon={MessageSquareIcon} label="Notes" value={lead.notes} />
        ) : null}
      </div>
    </div>
  );
}
