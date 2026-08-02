import { LogOutIcon } from "lucide-react";

import { signOut } from "@/app/admin/(dashboard)/actions";
import { Button } from "@/components/ui/button";

export function AdminNav({ email }: { email: string }) {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            S
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-semibold text-foreground">
              Lead Management
            </span>
            <span className="text-xs text-muted-foreground">{email}</span>
          </div>
        </div>
        <form action={signOut}>
          <Button type="submit" variant="outline" size="sm" className="gap-1.5">
            <LogOutIcon className="size-4" />
            Log Out
          </Button>
        </form>
      </div>
    </header>
  );
}
