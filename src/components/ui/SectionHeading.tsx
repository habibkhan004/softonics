interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  const renderTitle = () => {
    if (!gradientWord || !title.includes(gradientWord)) return title;
    const parts = title.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClasses}`}>
      <span className="inline-flex w-fit items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-blue">
        {eyebrow}
      </span>
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground break-words">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-foreground-muted text-balance">{subtitle}</p>
      )}
    </div>
  );
}
