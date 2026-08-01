import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Heading = "h2",
  headingId,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  as?: "h2" | "h3";
  headingId?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <Heading id={headingId} className="text-3xl leading-tight font-semibold text-balance sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
