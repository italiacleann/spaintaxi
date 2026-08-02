"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  AlertCircleIcon,
  CalendarIcon,
  CheckCircle2Icon,
  ClockIcon,
  LuggageIcon,
  MailIcon,
  MapPinIcon,
  NavigationIcon,
  PlaneIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import type { QuoteFormDictionary } from "@/lib/quote/types";
import { type Locale } from "@/lib/i18n/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function privacyPolicyPath(locale: Locale): string {
  return locale === "es" ? "/es/politica-de-privacidad/" : "/privacy-policy/";
}

interface QuoteFormValues {
  pickup: string;
  dropoff: string;
  pickupDate: string;
  pickupTime: string;
  isReturnTrip: boolean;
  returnDate: string;
  returnTime: string;
  passengers: string;
  suitcases: string;
  vehicle: string;
  flightNumber: string;
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  specialRequests: string;
  privacyAccepted: boolean;
}

export function DetailedQuoteForm({
  dict,
  locale,
  className,
}: {
  dict: QuoteFormDictionary;
  locale: Locale;
  className?: string;
}) {
  const searchParams = useSearchParams();

  const [step, setStep] = useState<1 | 2>(() =>
    searchParams.get("pickup") && searchParams.get("dropoff") ? 2 : 1
  );
  const [values, setValues] = useState<QuoteFormValues>(() => ({
    pickup: searchParams.get("pickup") ?? "",
    dropoff: searchParams.get("dropoff") ?? "",
    pickupDate: searchParams.get("pickupDate") ?? "",
    pickupTime: searchParams.get("pickupTime") ?? "",
    isReturnTrip: false,
    returnDate: "",
    returnTime: "",
    passengers: searchParams.get("passengers") ?? dict.passengerOptions[0]?.value ?? "",
    suitcases: dict.suitcaseOptions[0]?.value ?? "",
    vehicle: dict.vehicleOptions[dict.vehicleOptions.length - 1]?.value ?? "",
    flightNumber: "",
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    specialRequests: "",
    privacyAccepted: false,
  }));
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function update<K extends keyof QuoteFormValues>(key: K, value: QuoteFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setFormError(null);
  }

  function buildRequiredError(fieldLabel: string): string {
    return dict.requiredFieldTemplate.replace("{field}", fieldLabel.replace(" *", ""));
  }

  function validateStep1(): string | null {
    if (!values.pickup.trim()) return buildRequiredError(dict.pickupLabel);
    if (!values.dropoff.trim()) return buildRequiredError(dict.dropoffLabel);
    if (!values.pickupDate) return buildRequiredError(dict.pickupDateLabel);
    if (!values.pickupTime) return buildRequiredError(dict.pickupTimeLabel);
    return null;
  }

  function validateStep2(): string | null {
    if (!values.fullName.trim()) return buildRequiredError(dict.fullNameLabel);
    if (!values.email.trim()) return buildRequiredError(dict.emailLabel);
    if (!values.whatsapp.trim()) return buildRequiredError(dict.whatsappLabel);
    if (!values.country.trim()) return buildRequiredError(dict.countryLabel);
    if (!values.privacyAccepted) return dict.privacyRequiredError;
    return null;
  }

  function handleContinue() {
    const error = validateStep1();
    if (error) {
      setFormError(error);
      return;
    }
    setFormError(null);
    setStep(2);
  }

  async function submitForm() {
    const error = validateStep2();
    if (error) {
      setFormError(error);
      return;
    }
    setFormError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/quote-requests/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          pickupLocation: values.pickup,
          dropoffLocation: values.dropoff,
          pickupDate: values.pickupDate,
          pickupTime: values.pickupTime,
          isReturnTrip: values.isReturnTrip,
          returnDate: values.isReturnTrip ? values.returnDate || null : null,
          returnTime: values.isReturnTrip ? values.returnTime || null : null,
          passengers: values.passengers,
          luggage: values.suitcases,
          vehicleType: values.vehicle,
          flightNumber: values.flightNumber || null,
          customerName: values.fullName,
          email: values.email,
          phone: values.whatsapp,
          country: values.country,
          notes: values.specialRequests || null,
          privacyAccepted: values.privacyAccepted,
          sourcePath: typeof window !== "undefined" ? window.location.pathname : null,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || dict.errorMessage);
      }
      setStatus("success");
    } catch (submitError) {
      console.error("Quote request submission failed:", submitError);
      setFormError(submitError instanceof Error ? submitError.message : dict.errorMessage);
      setStatus("error");
    }
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    // Safety net for native form submission (e.g. pressing Enter in a text
    // field). The primary path is the submit button's onClick below.
    event.preventDefault();
    if (step === 2) {
      void submitForm();
    }
  }

  if (status === "success") {
    const passengerLabel =
      dict.passengerOptions.find((option) => option.value === values.passengers)?.label ??
      values.passengers;
    const suitcaseLabel =
      dict.suitcaseOptions.find((option) => option.value === values.suitcases)?.label ??
      values.suitcases;
    const vehicleLabel =
      dict.vehicleOptions.find((option) => option.value === values.vehicle)?.label ?? values.vehicle;

    const summaryRows: [string, string][] = [
      [dict.pickupLabel.replace(" *", ""), values.pickup],
      [dict.dropoffLabel.replace(" *", ""), values.dropoff],
      [dict.pickupDateLabel.replace(" *", ""), values.pickupDate],
      [dict.pickupTimeLabel.replace(" *", ""), values.pickupTime],
      ...(values.isReturnTrip
        ? ([
            [dict.returnDateLabel, values.returnDate],
            [dict.returnTimeLabel, values.returnTime],
          ] as [string, string][])
        : []),
      [dict.passengersLabel.replace(" *", ""), passengerLabel],
      [dict.suitcasesLabel, suitcaseLabel],
      [dict.vehicleLabel, vehicleLabel],
      ...(values.flightNumber ? ([[dict.flightNumberLabel, values.flightNumber]] as [string, string][]) : []),
      [dict.fullNameLabel.replace(" *", ""), values.fullName],
      [dict.emailLabel.replace(" *", ""), values.email],
      [dict.whatsappLabel.replace(" *", ""), values.whatsapp],
      [dict.countryLabel.replace(" *", ""), values.country],
      ...(values.specialRequests
        ? ([[dict.specialRequestsLabel, values.specialRequests]] as [string, string][])
        : []),
    ];

    return (
      <div className={className}>
        <div className="flex flex-col items-center gap-3 pt-10 pb-6 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <CheckCircle2Icon className="size-7" />
          </span>
          <h3 className="font-heading text-xl font-semibold text-foreground">{dict.successTitle}</h3>
          <p className="max-w-sm text-sm text-muted-foreground">{dict.successMessage}</p>
        </div>

        <div className="rounded-xl bg-muted/50 p-4">
          <dl className="flex flex-col gap-2.5">
            {summaryRows.map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-4 text-sm">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="text-right font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center pt-6">
          <Button
            variant="outline"
            onClick={() => {
              setStatus("idle");
              setFormError(null);
              setStep(1);
            }}
          >
            {dict.requestAnother}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-6 flex items-center gap-3">
        <ol className="flex flex-1 items-center gap-2">
          {[1, 2].map((stepNumber) => (
            <li key={stepNumber} className="flex flex-1 items-center gap-2">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  step >= stepNumber
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {stepNumber}
              </span>
              {stepNumber === 1 ? (
                <span className={`h-0.5 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
      <p className="mb-1 text-xs font-semibold tracking-wide text-primary uppercase">
        {step === 1 ? dict.stepOneLabel : dict.stepTwoLabel}
      </p>
      <h3 className="mb-5 font-heading text-lg font-semibold text-foreground">
        {step === 1 ? dict.stepOneTitle : dict.stepTwoTitle}
      </h3>

      <form onSubmit={handleFormSubmit} noValidate>
        {step === 1 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="pickup">{dict.pickupLabel}</Label>
              <div className="relative">
                <MapPinIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="pickup"
                  required
                  placeholder={dict.pickupPlaceholder}
                  className="h-11 pl-8"
                  value={values.pickup}
                  onChange={(event) => update("pickup", event.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="dropoff">{dict.dropoffLabel}</Label>
              <div className="relative">
                <NavigationIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="dropoff"
                  required
                  placeholder={dict.dropoffPlaceholder}
                  className="h-11 pl-8"
                  value={values.dropoff}
                  onChange={(event) => update("dropoff", event.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="pickup-date">{dict.pickupDateLabel}</Label>
              <div className="relative">
                <CalendarIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="pickup-date"
                  type="date"
                  required
                  className="h-11 pl-8"
                  value={values.pickupDate}
                  onChange={(event) => update("pickupDate", event.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="pickup-time">{dict.pickupTimeLabel}</Label>
              <div className="relative">
                <ClockIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="pickup-time"
                  type="time"
                  required
                  className="h-11 pl-8"
                  value={values.pickupTime}
                  onChange={(event) => update("pickupTime", event.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-lg bg-muted/50 px-3.5 py-3 sm:col-span-2">
              <Label htmlFor="return-trip" className="text-sm font-medium">
                {dict.returnTripLabel}
              </Label>
              <Switch
                id="return-trip"
                checked={values.isReturnTrip}
                onCheckedChange={(checked) => update("isReturnTrip", checked)}
              />
            </div>

            {values.isReturnTrip ? (
              <>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="return-date">{dict.returnDateLabel}</Label>
                  <div className="relative">
                    <CalendarIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="return-date"
                      type="date"
                      className="h-11 pl-8"
                      value={values.returnDate}
                      onChange={(event) => update("returnDate", event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="return-time">{dict.returnTimeLabel}</Label>
                  <div className="relative">
                    <ClockIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="return-time"
                      type="time"
                      className="h-11 pl-8"
                      value={values.returnTime}
                      onChange={(event) => update("returnTime", event.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : null}

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="passengers">{dict.passengersLabel}</Label>
              <Select
                value={values.passengers}
                onValueChange={(value) => update("passengers", value as string)}
              >
                <SelectTrigger id="passengers" className="h-11 w-full">
                  <UsersIcon className="size-4 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {dict.passengerOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="suitcases">{dict.suitcasesLabel}</Label>
              <Select
                value={values.suitcases}
                onValueChange={(value) => update("suitcases", value as string)}
              >
                <SelectTrigger id="suitcases" className="h-11 w-full">
                  <LuggageIcon className="size-4 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {dict.suitcaseOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="vehicle">{dict.vehicleLabel}</Label>
              <Select
                value={values.vehicle}
                onValueChange={(value) => update("vehicle", value as string)}
              >
                <SelectTrigger id="vehicle" className="h-11 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {dict.vehicleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="flight-number">{dict.flightNumberLabel}</Label>
              <div className="relative">
                <PlaneIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="flight-number"
                  placeholder={dict.flightNumberPlaceholder}
                  className="h-11 pl-8"
                  value={values.flightNumber}
                  onChange={(event) => update("flightNumber", event.target.value)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="full-name">{dict.fullNameLabel}</Label>
              <div className="relative">
                <UserIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="full-name"
                  required
                  placeholder={dict.fullNamePlaceholder}
                  className="h-11 pl-8"
                  value={values.fullName}
                  onChange={(event) => update("fullName", event.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">{dict.emailLabel}</Label>
              <div className="relative">
                <MailIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder={dict.emailPlaceholder}
                  className="h-11 pl-8"
                  value={values.email}
                  onChange={(event) => update("email", event.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="whatsapp">{dict.whatsappLabel}</Label>
              <Input
                id="whatsapp"
                type="tel"
                required
                placeholder={dict.whatsappPlaceholder}
                className="h-11"
                value={values.whatsapp}
                onChange={(event) => update("whatsapp", event.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="country">{dict.countryLabel}</Label>
              <Input
                id="country"
                required
                placeholder={dict.countryPlaceholder}
                className="h-11"
                value={values.country}
                onChange={(event) => update("country", event.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="special-requests">{dict.specialRequestsLabel}</Label>
              <Textarea
                id="special-requests"
                placeholder={dict.specialRequestsPlaceholder}
                rows={3}
                value={values.specialRequests}
                onChange={(event) => update("specialRequests", event.target.value)}
              />
            </div>

            <div className="flex items-start gap-2.5 sm:col-span-2">
              <Checkbox
                id="privacy"
                required
                className="mt-0.5"
                checked={values.privacyAccepted}
                onCheckedChange={(checked) => update("privacyAccepted", checked === true)}
              />
              <Label htmlFor="privacy" className="text-sm font-normal text-muted-foreground">
                {dict.privacyLabelBefore}
                <Link href={privacyPolicyPath(locale)} className="text-primary underline hover:no-underline">
                  {dict.privacyLinkLabel}
                </Link>
                {dict.privacyLabelAfter}
              </Label>
            </div>
          </div>
        )}

        {formError ? (
          <p
            role="alert"
            className="mt-4 flex items-center gap-2 rounded-lg bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
          >
            <AlertCircleIcon className="size-4 shrink-0" />
            {formError}
          </p>
        ) : null}

        <div className="mt-6 flex gap-3">
          {step === 2 ? (
            <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setStep(1)}>
              {dict.backButton}
            </Button>
          ) : null}
          {step === 1 ? (
            <Button
              type="button"
              size="lg"
              className="flex-1 bg-cta text-cta-foreground hover:bg-cta/90"
              onClick={handleContinue}
            >
              {dict.continueButton}
            </Button>
          ) : (
            <Button
              type="button"
              size="lg"
              disabled={status === "submitting"}
              className="flex-1 bg-cta text-cta-foreground hover:bg-cta/90"
              onClick={submitForm}
            >
              {status === "submitting" ? "..." : dict.submit}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
