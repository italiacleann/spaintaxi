import { ReceiptIcon } from "lucide-react";

import { ComingSoonPanel } from "@/components/admin/coming-soon-panel";

export default function AdminInvoicesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-foreground">Invoices</h1>
        <p className="mt-1 text-sm text-muted-foreground">Track invoices issued for completed transfers.</p>
      </div>
      <ComingSoonPanel
        icon={ReceiptIcon}
        title="Invoicing is coming soon"
        description="This space is reserved for the invoicing workflow."
      />
    </div>
  );
}
