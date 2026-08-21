"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileTextIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MenuIcon,
  ReceiptIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { signOut } from "@/app/admin/(dashboard)/actions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/admin/leads", label: "Leads", icon: UsersIcon },
  { href: "/admin/quotations", label: "Quotations", icon: FileTextIcon },
  { href: "/admin/invoices", label: "Invoices", icon: ReceiptIcon },
  { href: "/admin/settings", label: "Settings", icon: SettingsIcon },
];

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(href + "/");
}

function Brand() {
  return (
    <div className="flex items-center gap-2.5 px-5 py-5">
      <Image src="/logo.png" alt="Spain Private Transfers" width={36} height={36} className="size-9 rounded-lg object-contain" />
      <div className="flex flex-col leading-tight">
        <span className="font-heading text-sm font-semibold text-foreground">Spain Private Transfers</span>
        <span className="text-xs text-muted-foreground">Admin Panel</span>
      </div>
    </div>
  );
}

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-1 flex-col gap-1 px-3">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="size-4.5 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function AccountFooter({ email }: { email: string }) {
  return (
    <div className="flex flex-col gap-3 border-t border-border px-5 py-4">
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-medium text-foreground">Admin</span>
        <span className="truncate text-xs text-muted-foreground">{email}</span>
      </div>
      <form action={signOut}>
        <Button type="submit" variant="outline" size="sm" className="w-full justify-start gap-2">
          <LogOutIcon className="size-4" />
          Log Out
        </Button>
      </form>
    </div>
  );
}

/** Fixed left sidebar, desktop only. */
export function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-white lg:flex">
      <Brand />
      <NavLinks pathname={pathname} />
      <AccountFooter email={email} />
    </aside>
  );
}

/** Slim top bar with a hamburger-triggered drawer, mobile/tablet only. */
export function AdminMobileHeader({ email }: { email: string }) {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-white px-4 py-3 lg:hidden">
      <div className="flex items-center gap-2.5">
        <Image src="/logo.png" alt="Spain Private Transfers" width={28} height={28} className="size-7 rounded-md object-contain" />
        <span className="font-heading text-sm font-semibold text-foreground">Admin Panel</span>
      </div>
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <MenuIcon className="size-5" />
            </Button>
          }
        />
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader className="border-b border-border p-0">
            <SheetTitle className="sr-only">Admin navigation</SheetTitle>
            <Brand />
          </SheetHeader>
          <NavLinksWithClose pathname={pathname} />
          <AccountFooter email={email} />
        </SheetContent>
      </Sheet>
    </header>
  );
}

function NavLinksWithClose({ pathname }: { pathname: string }) {
  return (
    <nav className="flex flex-1 flex-col gap-1 px-3 py-3">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(pathname, item.href);
        return (
          <SheetClose
            key={item.href}
            render={
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="size-4.5 shrink-0" />
                {item.label}
              </Link>
            }
          />
        );
      })}
    </nav>
  );
}
