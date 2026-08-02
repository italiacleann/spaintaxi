import { AlertCircleIcon } from "lucide-react";

import { signIn } from "@/app/admin/login/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
            S
          </span>
          <h1 className="font-heading text-xl font-semibold text-foreground">Admin Login</h1>
          <p className="text-sm text-muted-foreground">Sign in to manage leads and bookings.</p>
        </div>

        {error ? (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive">
            <AlertCircleIcon className="size-4 shrink-0" />
            {error}
          </div>
        ) : null}

        <form action={signIn} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" className="h-11" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="h-11"
            />
          </div>
          <Button type="submit" size="lg" className="mt-2 bg-cta text-cta-foreground hover:bg-cta/90">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
