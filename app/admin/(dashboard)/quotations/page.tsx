import { FileTextIcon } from "lucide-react";

import { ComingSoonPanel } from "@/components/admin/coming-soon-panel";

export default function AdminQuotationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-foreground">Quotations</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage formal quotes sent to customers.</p>
      </div>
      <ComingSoonPanel
        icon={FileTextIcon}
        title="Quotation management is coming soon"
        description="This space is reserved for the quotations workflow. Leads already carry a 'Quoted' status in the meantime — see the Leads page."
      />
    </div>
  );
}
