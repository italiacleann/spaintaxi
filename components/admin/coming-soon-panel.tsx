import type { LucideIcon } from "lucide-react";

export function ComingSoonPanel({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-black/5">
      <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-6" />
      </span>
      <p className="font-heading text-base font-semibold text-foreground">{title}</p>
      <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
