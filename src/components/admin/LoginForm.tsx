"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { loginAction } from "@/lib/actions";
import Logo from "@/components/layout/Logo";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-10 flex flex-col items-center text-center">
        <Logo href="/" variant="lockup" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Studio access</p>
        <h1 className="mt-3 font-display text-3xl font-bold">Sign in to the desk</h1>
        <p className="mt-2 text-sm text-foreground-muted">
          Default local login: <span className="text-foreground">admin@desynt.com</span>
        </p>
      </div>
      <form action={action} className="rounded-3xl border border-border bg-background-elevated p-6 sm:p-8">
        <label className="admin-label">Email</label>
        <input name="email" type="email" required defaultValue="admin@desynt.com" className="admin-input" />
        <label className="admin-label mt-5">Password</label>
        <input name="password" type="password" required className="admin-input" />
        {state?.error && <p className="mt-4 text-sm text-accent-indigo">{state.error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-black disabled:opacity-60"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Enter dashboard"}
        </button>
      </form>
    </div>
  );
}
