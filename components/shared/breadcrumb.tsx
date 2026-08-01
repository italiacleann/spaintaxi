import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({
  items,
  className,
  variant = "dark",
}: {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRightIcon
                  aria-hidden
                  className={cn(
                    "size-3.5",
                    variant === "dark" ? "text-white/40" : "text-muted-foreground/60"
                  )}
                />
              ) : null}
              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-medium",
                    variant === "dark" ? "text-white" : "text-foreground"
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    variant === "dark"
                      ? "text-white/70 hover:text-white"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
