"use client";

import { useState, useTransition } from "react";
import { PlusIcon } from "lucide-react";

import type { Lead, LeadInput } from "@/lib/leads/types";
import { createLead, updateLead } from "@/app/admin/(dashboard)/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function emptyForm(): LeadInput {
  return {
    locale: "en",
    sourcePath: "admin",
    customerName: "",
    email: "",
    phone: "",
    country: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    isReturnTrip: false,
    returnDate: null,
    returnTime: null,
    passengers: "",
    luggage: "",
    vehicleType: "",
    flightNumber: null,
    notes: null,
    privacyAccepted: true,
  };
}

function toForm(lead: Lead): LeadInput {
  return {
    locale: lead.locale,
    sourcePath: lead.sourcePath,
    customerName: lead.customerName,
    email: lead.email,
    phone: lead.phone,
    country: lead.country,
    pickupLocation: lead.pickupLocation,
    dropoffLocation: lead.dropoffLocation,
    pickupDate: lead.pickupDate,
    pickupTime: lead.pickupTime,
    isReturnTrip: lead.isReturnTrip,
    returnDate: lead.returnDate,
    returnTime: lead.returnTime,
    passengers: lead.passengers,
    luggage: lead.luggage,
    vehicleType: lead.vehicleType,
    flightNumber: lead.flightNumber,
    notes: lead.notes,
    privacyAccepted: lead.privacyAccepted,
  };
}

function LeadForm({
  values,
  onChange,
}: {
  values: LeadInput;
  onChange: (values: LeadInput) => void;
}) {
  function set<K extends keyof LeadInput>(key: K, value: LeadInput[K]) {
    onChange({ ...values, [key]: value });
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="customerName">Customer name</Label>
        <Input
          id="customerName"
          required
          value={values.customerName}
          onChange={(e) => set("customerName", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          required
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          required
          value={values.country}
          onChange={(e) => set("country", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="pickupLocation">Pickup location</Label>
        <Input
          id="pickupLocation"
          required
          value={values.pickupLocation}
          onChange={(e) => set("pickupLocation", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="dropoffLocation">Drop-off location</Label>
        <Input
          id="dropoffLocation"
          required
          value={values.dropoffLocation}
          onChange={(e) => set("dropoffLocation", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="pickupDate">Pickup date</Label>
        <Input
          id="pickupDate"
          type="date"
          required
          value={values.pickupDate}
          onChange={(e) => set("pickupDate", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="pickupTime">Pickup time</Label>
        <Input
          id="pickupTime"
          type="time"
          required
          value={values.pickupTime}
          onChange={(e) => set("pickupTime", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="passengers">Passengers</Label>
        <Input
          id="passengers"
          required
          value={values.passengers}
          onChange={(e) => set("passengers", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="luggage">Luggage</Label>
        <Input
          id="luggage"
          required
          value={values.luggage}
          onChange={(e) => set("luggage", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="vehicleType">Vehicle requirement</Label>
        <Input
          id="vehicleType"
          required
          value={values.vehicleType}
          onChange={(e) => set("vehicleType", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="flightNumber">Flight number</Label>
        <Input
          id="flightNumber"
          value={values.flightNumber ?? ""}
          onChange={(e) => set("flightNumber", e.target.value || null)}
        />
      </div>

      <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2 sm:col-span-2">
        <Label htmlFor="isReturnTrip" className="cursor-pointer">
          Return trip
        </Label>
        <Switch
          id="isReturnTrip"
          checked={values.isReturnTrip}
          onCheckedChange={(checked) => set("isReturnTrip", checked)}
        />
      </div>

      {values.isReturnTrip ? (
        <>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="returnDate">Return date</Label>
            <Input
              id="returnDate"
              type="date"
              value={values.returnDate ?? ""}
              onChange={(e) => set("returnDate", e.target.value || null)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="returnTime">Return time</Label>
            <Input
              id="returnTime"
              type="time"
              value={values.returnTime ?? ""}
              onChange={(e) => set("returnTime", e.target.value || null)}
            />
          </div>
        </>
      ) : null}

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={values.notes ?? ""}
          onChange={(e) => set("notes", e.target.value || null)}
        />
      </div>
    </div>
  );
}

/** Shared Add/Edit lead dialog. Renders its own "+ Add Lead" trigger when `lead` is omitted. */
export function LeadFormDialog({
  lead,
  trigger,
}: {
  lead?: Lead;
  trigger?: React.ReactElement;
}) {
  const isEdit = Boolean(lead);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<LeadInput>(() => (lead ? toForm(lead) : emptyForm()));
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) {
      setValues(lead ? toForm(lead) : emptyForm());
      setError(null);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        if (isEdit && lead) {
          await updateLead(lead.id, values);
        } else {
          await createLead(values);
        }
        setOpen(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          trigger ?? (
            <Button size="sm" className="gap-1.5">
              <PlusIcon className="size-4" />
              Add Lead
            </Button>
          )
        }
      />
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto sm:max-w-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit Lead" : "Add Lead"}</DialogTitle>
            <DialogDescription>
              {isEdit
                ? `Update the transfer request from ${lead?.customerName}.`
                : "Manually create a new transfer request."}
            </DialogDescription>
          </DialogHeader>

          <LeadForm values={values} onChange={setValues} />

          {error ? (
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>
          ) : null}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isPending}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : isEdit ? "Save Changes" : "Add Lead"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
