"use client";

import { useState, useTransition } from "react";
import { Trash2Icon } from "lucide-react";

import { deleteLead } from "@/app/admin/(dashboard)/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DeleteLeadButton({
  leadId,
  customerName,
  variant = "button",
}: {
  leadId: string;
  customerName: string;
  variant?: "button" | "icon";
}) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      await deleteLead(leadId);
      setOpen(false);
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          variant === "icon" ? (
            <Button variant="ghost" size="icon-sm" disabled={isPending} aria-label="Delete lead">
              <Trash2Icon className="size-4 text-destructive" />
            </Button>
          ) : (
            <Button variant="destructive" size="sm" disabled={isPending}>
              Delete
            </Button>
          )
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete this lead?</DialogTitle>
          <DialogDescription>
            This will permanently delete the request from {customerName}. This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" disabled={isPending} onClick={handleDelete}>
            Delete Lead
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
