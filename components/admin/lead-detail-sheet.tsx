"use client";

import { useTransition } from "react";
import {
  CalendarIcon,
  EyeIcon,
  LuggageIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  NavigationIcon,
  PhoneIcon,
  PlaneIcon,
  UsersIcon,
} from "lucide-react";

import type { Lead, LeadStatus } from "@/lib/leads/types";
import { leadStatuses, leadStatusLabels } from "@/lib/leads/status";
import { confirmLead, updateLeadStatus } from "@/app/admin/(dashboard)/actions";
import { LeadStatusBadge } from "@/components/admin/lead-status-badge";
import { LeadFormDialog } from "@/components/admin/lead-form-dialog";
import { DeleteLeadButton } from "@/components/admin/delete-lead-button";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Field({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPinIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-xs font-semibold tracking-wide text-muted-foreground uppercase">
      {children}
    </h3>
  );
}

export function LeadDetailSheet({
  lead,
  trigger,
}: {
  lead: Lead;
  trigger?: React.ReactElement;
}) {
  const [isPending, startTransition] = useTransition();

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

  return (
    <Sheet>
      <SheetTrigger
        render={
          trigger ?? (
            <Button variant="ghost" size="icon-sm" aria-label="View lead">
              <EyeIcon className="size-4" />
            </Button>
          )
        }
      />
      <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-lg">
        <SheetHeader className="border-b border-border">
          <SheetTitle>Lead Details</SheetTitle>
        </SheetHeader>

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-heading text-lg font-semibold text-foreground">{lead.customerName}</p>
              <p className="font-mono text-xs text-muted-foreground">Lead ID: {lead.id}</p>
              <p className="text-xs text-muted-foreground">
                Submitted {new Date(lead.createdAt).toLocaleString()}
              </p>
            </div>
            <LeadStatusBadge status={lead.status} />
          </div>

          <div className="flex flex-col gap-3">
            <SectionLabel>Customer Information</SectionLabel>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field icon={MailIcon} label="Email" value={lead.email} />
              <Field icon={PhoneIcon} label="Phone" value={lead.phone} />
              <Field icon={MapPinIcon} label="Country" value={lead.country} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <SectionLabel>Transfer Information</SectionLabel>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field icon={MapPinIcon} label="Pickup" value={lead.pickupLocation} />
              <Field icon={NavigationIcon} label="Drop-off" value={lead.dropoffLocation} />
              <Field icon={CalendarIcon} label="Date & time" value={`${lead.pickupDate} at ${lead.pickupTime}`} />
              <Field icon={UsersIcon} label="Passengers" value={lead.passengers} />
              <Field icon={LuggageIcon} label="Luggage" value={lead.luggage} />
              <Field icon={MapPinIcon} label="Vehicle requirement" value={lead.vehicleType} />
              {lead.isReturnTrip ? (
                <Field
                  icon={CalendarIcon}
                  label="Return"
                  value={`${lead.returnDate ?? "—"} at ${lead.returnTime ?? "—"}`}
                />
              ) : null}
              {lead.flightNumber ? (
                <Field icon={PlaneIcon} label="Flight number" value={lead.flightNumber} />
              ) : null}
            </div>
            {lead.notes ? <Field icon={MessageSquareIcon} label="Notes" value={lead.notes} /> : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border px-4 py-4">
          <SectionLabel>Actions</SectionLabel>
          <div className="flex flex-wrap items-center gap-2">
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

            <LeadFormDialog
              lead={lead}
              trigger={
                <Button variant="outline" size="sm" disabled={isPending}>
                  Edit
                </Button>
              }
            />

            <DeleteLeadButton leadId={lead.id} customerName={lead.customerName} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
