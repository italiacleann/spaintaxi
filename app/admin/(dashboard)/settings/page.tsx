import { SettingsIcon } from "lucide-react";

import { ComingSoonPanel } from "@/components/admin/coming-soon-panel";

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Admin account and workspace preferences.</p>
      </div>
      <ComingSoonPanel
        icon={SettingsIcon}
        title="Settings are coming soon"
        description="This space is reserved for admin preferences. To change your login credentials today, update them directly in Supabase Auth."
      />
    </div>
  );
}
