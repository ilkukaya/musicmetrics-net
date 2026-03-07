type ContentNoteProps = {
  lastUpdated: string;
  note?: string;
};

export function ContentNote({ lastUpdated, note = "Content is reviewed periodically for editorial accuracy and clarity." }: ContentNoteProps) {
  return (
    <div className="rounded-2xl border border-border bg-slate-50 p-4 text-sm text-slate-600">
      <p>
        <span className="font-semibold text-ink">Last updated:</span> {lastUpdated}
      </p>
      <p className="mt-1">{note}</p>
    </div>
  );
}
