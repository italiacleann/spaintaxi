"use client";

import type { ReactElement } from "react";

import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { QuoteForm } from "@/components/sections/quote-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function QuoteDialog({
  dict,
  locale,
  trigger,
}: {
  dict: Dictionary;
  locale: Locale;
  trigger: ReactElement;
}) {
  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">{dict.hero.formTitle}</DialogTitle>
          <DialogDescription>{dict.hero.formSubtitle}</DialogDescription>
        </DialogHeader>
        <QuoteForm dict={dict} locale={locale} />
      </DialogContent>
    </Dialog>
  );
}
