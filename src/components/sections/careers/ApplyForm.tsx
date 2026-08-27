"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitApplicationAction } from "@/lib/actions";

export default function ApplyForm({ jobId, jobTitle }: { jobId: string; jobTitle: string }) {
  const [state, action, pending] = useActionState(submitApplicationAction, undefined);

  if (state?.ok) {
    return (
      <div className="rounded-3xl border border-border bg-surface p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent-violet" />
        <h3 className="mt-4 font-display text-xl font-semibold">Application received</h3>
        <p className="mt-2 text-sm text-foreground-muted">We&apos;ll be in touch if there&apos;s a fit.</p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <input type="hidden" name="jobId" value={jobId} />
      <input type="hidden" name="jobTitle" value={jobTitle} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="admin-label text-foreground-muted">Name</label>
          <input name="name" required className="admin-input bg-background" />
        </div>
        <div>
          <label className="admin-label text-foreground-muted">Email</label>
          <input name="email" type="email" required className="admin-input bg-background" />
        </div>
        <div>
          <label className="admin-label text-foreground-muted">Phone</label>
          <input name="phone" className="admin-input bg-background" />
        </div>
        <div>
          <label className="admin-label text-foreground-muted">LinkedIn</label>
          <input name="linkedin" className="admin-input bg-background" />
        </div>
      </div>
      <div>
        <label className="admin-label text-foreground-muted">Resume</label>
        <input name="resume" type="file" accept=".pdf,.doc,.docx" className="admin-input bg-background" />
      </div>
      <div>
        <label className="admin-label text-foreground-muted">Note</label>
        <textarea name="coverLetter" rows={4} className="admin-input bg-background" />
      </div>
      {state?.error && <p className="text-sm text-accent-indigo">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        {pending ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </span>
        ) : (
          "Submit application"
        )}
      </button>
    </form>
  );
}
