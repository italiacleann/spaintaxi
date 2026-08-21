import { getLeads } from "@/lib/leads/queries";
import { LeadStatCards } from "@/components/admin/lead-stat-cards";
import { UpcomingLeadsPreview } from "@/components/admin/upcoming-leads-preview";

export default async function AdminDashboardPage() {
  const { leads, error } = await getLeads();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          An overview of quote requests submitted through the website.
        </p>
      </div>

      {error ? (
        <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          Could not load leads: {error}
        </div>
      ) : (
        <>
          <LeadStatCards leads={leads} />
          <UpcomingLeadsPreview leads={leads} />
        </>
      )}
    </div>
  );
}
