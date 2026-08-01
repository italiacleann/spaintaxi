"use client";

import { type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  NavigationIcon,
  UsersIcon,
} from "lucide-react";

import type { Dictionary } from "@/lib/i18n/types";
import { type Locale } from "@/lib/i18n/config";
import { getQuotePagePath } from "@/lib/quote/config";
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

const passengerRangeToCount: Record<string, string> = {
  "1-2": "2",
  "3-4": "4",
  "5-6": "6",
  "7-8": "7+",
};

export function QuoteForm({
  dict,
  locale,
  className,
}: {
  dict: Dictionary;
  locale: Locale;
  className?: string;
}) {
  const router = useRouter();
  const t = dict.quoteForm;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const passengerRange = String(data.get("passengers") ?? "");

    const params = new URLSearchParams();
    const pickup = String(data.get("pickup") ?? "");
    const dropoff = String(data.get("dropoff") ?? "");
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");
    if (pickup) params.set("pickup", pickup);
    if (dropoff) params.set("dropoff", dropoff);
    if (date) params.set("pickupDate", date);
    if (time) params.set("pickupTime", time);
    if (passengerRange in passengerRangeToCount) {
      params.set("passengers", passengerRangeToCount[passengerRange]);
    }

    router.push(`${getQuotePagePath(locale)}?${params.toString()}`);
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
