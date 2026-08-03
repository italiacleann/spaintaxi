"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2Icon } from "lucide-react";

import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function BlogNewsletterForm({
  dict,
  locale,
}: {
  dict: BlogHubDictionary["sidebar"];
  locale: Locale;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), locale, sourcePath: window.location.pathname }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 rounded-lg bg-secondary/10 px-3.5 py-2.5 text-sm font-medium text-secondary">
        <CheckCircle2Icon className="size-4 shrink-0" />
        {dict.newsletterSuccess}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      <Input
        type="email"
        required
        placeholder={dict.newsletterPlaceholder}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-10"
      />
      <Button type="submit" disabled={status === "submitting"} className="h-10 w-full">
        {dict.newsletterButton}
      </Button>
      {status === "error" ? <p className="text-xs text-destructive">{dict.newsletterError}</p> : null}
    </form>
  );
}
