import Link from "next/link";

import type { ServiceItem } from "@/lib/i18n/types";
import { serviceIcons } from "@/components/shared/icon-maps";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function ServicesNavDropdown({
  services,
  label,
  transparent,
}: {
  services: ServiceItem[];
  label: string;
  transparent: boolean;
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "h-auto rounded-md bg-transparent px-3 py-2 text-sm font-medium",
              transparent
                ? "text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-open:bg-white/10 data-popup-open:bg-white/10"
                : "text-muted-foreground hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary data-open:bg-accent data-popup-open:bg-accent"
            )}
          >
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1 p-2">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon];
                return (
                  <li key={service.href}>
                    <NavigationMenuLink render={<Link href={service.href} />}>
                      <Icon className="size-4 text-primary" />
                      <span>{service.title}</span>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
