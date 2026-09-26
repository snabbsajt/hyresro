export function AdNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm text-stone-400 ${className}`}>
      Annons. Vissa länkar är affiliatelänkar. Handlar ni via dem kan Hyresro få provision,
      utan extra kostnad för er.
    </p>
  );
}
