import type { Metadata } from "next";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = { title: "Admin login" };

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center px-6 py-16">
      <LoginForm />
    </div>
  );
}
