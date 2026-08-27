"use client";

export default function StatusSelect({
  action,
  id,
  value,
  options,
}: {
  action: (formData: FormData) => void | Promise<void>;
  id: string;
  value: string;
  options: readonly string[];
}) {
  return (
    <form action={action} className="mt-4 flex items-center gap-2">
      <input type="hidden" name="id" value={id} />
      <select name="status" defaultValue={value} className="admin-input max-w-xs">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button type="submit" className="rounded-full border border-border px-3 py-2 text-xs">
        Update
      </button>
    </form>
  );
}
