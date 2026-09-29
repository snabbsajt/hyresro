import type { GuideAnswer } from "@/data/guides";

type Props = {
  answer: GuideAnswer;
};

export function GuideAnswerBox({ answer }: Props) {
  const sections = [
    { key: "tillatet", label: "Tillåtet", items: answer.tillatet, tone: "ok" as const },
    {
      key: "fraga",
      label: "Fråga först",
      items: answer.fragaForst,
      tone: "ask" as const,
    },
    { key: "undvik", label: "Undvik", items: answer.undvik, tone: "no" as const },
  ].filter((s) => s.items.length > 0);

  if (sections.length === 0) return null;

  return (
    <section
      aria-label="Kort svar"
      className="glass-panel space-y-4 px-4 py-4 sm:px-5 sm:py-5"
    >
      <h2 className="text-lg font-semibold text-stone-100">Kort svar</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {sections.map((s) => (
          <div key={s.key} className="space-y-2">
            <p
              className={
                s.tone === "ok"
                  ? "text-xs font-semibold uppercase tracking-[0.1em] text-emerald-400/90"
                  : s.tone === "ask"
                    ? "text-xs font-semibold uppercase tracking-[0.1em] text-amber-300/90"
                    : "text-xs font-semibold uppercase tracking-[0.1em] text-rose-300/90"
              }
            >
              {s.label}
            </p>
            <ul className="space-y-1.5 text-sm leading-snug text-stone-400">
              {s.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current opacity-50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
