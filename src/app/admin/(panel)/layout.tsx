import AdminShell from "@/components/admin/AdminShell";
import { requireAdmin } from "@/lib/actions";
import type { ReactNode } from "react";

export default async function AdminPanelLayout({ children }: { children: ReactNode }) {
  const session = await requireAdmin();
  return <AdminShell email={session.email}>{children}</AdminShell>;
}
