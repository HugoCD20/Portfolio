interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

/** Shared section header: `01 //` kicker + title + optional lede. */
export default function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 space-y-2">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[13px] text-primary">{index} {"//"}</span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-sans text-[30px] font-semibold leading-[38px] tracking-tight text-on-surface md:text-[40px] md:leading-[48px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl font-mono text-[14px] leading-6 text-on-surface-variant">{description}</p>
      ) : null}
    </div>
  );
}
