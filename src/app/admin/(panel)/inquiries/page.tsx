import StatusSelect from "@/components/admin/StatusSelect";
import { setInquiryStatusAction } from "@/lib/actions";
import { listInquiries } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

const statuses = ["new", "contacted", "closed"] as const;

export default async function InquiriesPage() {
  const inquiries = await listInquiries();

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Inbox</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Inquiries</h1>
      <div className="mt-8 flex flex-col gap-4">
        {inquiries.length === 0 && <p className="text-sm text-foreground-muted">No inquiries yet.</p>}
        {inquiries.map((item) => (
          <article key={item.id} className="rounded-3xl border border-border bg-background-elevated p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-sm text-foreground-muted">
                  {item.email}
                  {item.company ? ` · ${item.company}` : ""}
                  {item.budget ? ` · ${item.budget}` : ""}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-accent-blue">{item.source}</p>
              </div>
              <span className="text-xs text-foreground-muted">{formatDate(item.createdAt)}</span>
            </div>
            <p className="mt-4 text-sm text-foreground-muted">{item.message}</p>
            <StatusSelect action={setInquiryStatusAction} id={item.id} value={item.status} options={statuses} />
          </article>
        ))}
      </div>
    </div>
  );
}
