export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function parseJsonArray(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value) as unknown;
    if (Array.isArray(parsed)) return parsed.map(String).filter(Boolean);
  } catch {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

export function parseMetrics(value: FormDataEntryValue | null) {
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value) as { value?: string; label?: string }[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((item) => ({ value: String(item.value ?? "").trim(), label: String(item.label ?? "").trim() }))
      .filter((item) => item.value && item.label);
  } catch {
    return [];
  }
}

export function parseGallery(value: FormDataEntryValue | null) {
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value) as { url?: string; caption?: string }[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((item) => ({ url: String(item.url ?? "").trim(), caption: String(item.caption ?? "").trim() || undefined }))
      .filter((item) => item.url);
  } catch {
    return [];
  }
}

export function splitParagraphs(value: string) {
  return value
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
