import { getLeads } from "@/lib/leads/queries";
import { LeadsTable } from "@/components/admin/leads-table";
import { LeadFormDialog } from "@/components/admin/lead-form-dialog";

export default async function AdminLeadsPage() {
  const { leads, error } = await getLeads();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-foreground">Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All quote requests submitted through the website.
          </p>
        </div>
        <LeadFormDialog />
      </div>

      {error ? (
        <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          Could not load leads: {error}
        </div>
      ) : (
        <LeadsTable leads={leads} />
      )}
    </div>
  );
}
