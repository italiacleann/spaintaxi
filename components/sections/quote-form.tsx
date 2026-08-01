"use client";

import { useState, type FormEvent } from "react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  NavigationIcon,
  UsersIcon,
  CheckCircle2Icon,
} from "lucide-react";

import type { Dictionary } from "@/lib/i18n/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function QuoteForm({
  dict,
  className,
}: {
  dict: Dictionary;
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const t = dict.quoteForm;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={className}>
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <CheckCircle2Icon className="size-6" />
          </span>
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {t.successTitle}
          </h3>
          <p className="max-w-xs text-sm text-muted-foreground">{t.successMessage}</p>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => setSubmitted(false)}
          >
            {t.requestAnother}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="pickup">{t.pickupLabel}</Label>
          <div className="relative">
            <MapPinIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="pickup"
              name="pickup"
              required
              placeholder={t.pickupPlaceholder}
              className="h-11 pl-8"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="dropoff">{t.dropoffLabel}</Label>
          <div className="relative">
            <NavigationIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="dropoff"
              name="dropoff"
              required
              placeholder={t.dropoffPlaceholder}
              className="h-11 pl-8"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="date">{t.dateLabel}</Label>
          <div className="relative">
            <CalendarIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="date"
              name="date"
              type="date"
              required
              className="h-11 pl-8"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="time">{t.timeLabel}</Label>
          <div className="relative">
            <ClockIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="time"
              name="time"
              type="time"
              required
              className="h-11 pl-8"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="passengers">{t.passengersLabel}</Label>
          <Select name="passengers" defaultValue={t.passengerOptions[0]?.value}>
            <SelectTrigger id="passengers" className="h-11 w-full">
              <UsersIcon className="size-4 text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {t.passengerOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-5 w-full bg-cta text-cta-foreground hover:bg-cta/90"
      >
        {t.submit}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">{dict.hero.formNote}</p>
    </form>
  );
}
