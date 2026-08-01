export function QuoteFormSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden>
      <div className="mb-6 flex items-center gap-3">
        <div className="h-7 w-7 shrink-0 rounded-full bg-muted" />
        <div className="h-0.5 flex-1 rounded-full bg-muted" />
        <div className="h-7 w-7 shrink-0 rounded-full bg-muted" />
      </div>
      <div className="mb-1 h-3 w-20 rounded bg-muted" />
      <div className="mb-5 h-5 w-32 rounded bg-muted" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="h-11 rounded-lg bg-muted sm:col-span-2" />
        <div className="h-11 rounded-lg bg-muted sm:col-span-2" />
        <div className="h-11 rounded-lg bg-muted" />
        <div className="h-11 rounded-lg bg-muted" />
        <div className="h-11 rounded-lg bg-muted sm:col-span-2" />
        <div className="h-11 rounded-lg bg-muted" />
        <div className="h-11 rounded-lg bg-muted" />
      </div>
      <div className="mt-6 h-11 rounded-lg bg-muted" />
    </div>
  );
}
