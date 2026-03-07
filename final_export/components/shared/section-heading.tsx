type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8">
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-slate-600">{description}</p> : null}
    </div>
  );
}
