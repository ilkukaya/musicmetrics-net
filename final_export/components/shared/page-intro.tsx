type Props = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: Props) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-ink">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{description}</p>
      </div>
    </section>
  );
}
