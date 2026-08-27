import { deleteTestimonialAction, saveTestimonialAction } from "@/lib/actions";
import { listAllTestimonials } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function TestimonialsAdminPage() {
  const items = await listAllTestimonials();

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-blue">Voices</p>
      <h1 className="mt-2 font-display text-4xl font-bold">Testimonials</h1>

      <form action={saveTestimonialAction} className="mt-8 grid gap-4 rounded-3xl border border-border bg-background-elevated p-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="admin-label">Quote</label>
          <textarea name="quote" required rows={3} className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Name</label>
          <input name="name" required className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Role</label>
          <input name="role" required className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Company</label>
          <input name="company" required className="admin-input" />
        </div>
        <div>
          <label className="admin-label">Sort order</label>
          <input name="sortOrder" type="number" defaultValue={items.length + 1} className="admin-input" />
        </div>
        <label className="flex items-center gap-2 text-sm sm:col-span-2">
          <input type="checkbox" name="published" defaultChecked /> Published
        </label>
        <button
          type="submit"
          className="justify-self-start rounded-full px-5 py-2.5 text-sm font-semibold text-black"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          Add testimonial
        </button>
      </form>

      <div className="mt-8 flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-border bg-background-elevated p-5">
            <p className="quote-serif text-lg">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-3 text-sm">
              {item.name} · {item.role}, {item.company}
            </p>
            <form action={deleteTestimonialAction} className="mt-3">
              <input type="hidden" name="id" value={item.id} />
              <button type="submit" className="text-xs text-foreground-muted hover:text-accent-indigo">
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
