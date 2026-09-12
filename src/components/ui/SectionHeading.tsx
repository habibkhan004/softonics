import SectionLabel from "@/components/ui/SectionLabel";
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Rendered in the accent green. */
  gradientWord?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  const renderTitle = () => {
    if (!gradientWord || !title.includes(gradientWord)) return title;
    const parts = title.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className="text-accent-indigo">{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignClasses}`}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="display-type text-[1.75rem] text-foreground sm:text-[2.5rem] lg:text-[3rem]">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="max-w-[650px] text-[16px] leading-[1.55] text-foreground-muted sm:text-[18px]">{subtitle}</p>
      )}
    </div>
  );
}
