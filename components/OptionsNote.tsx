import { optionExamples } from "@/lib/trailers";

export function OptionsNote() {
  return (
    <section className="border-t border-navy/5 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-navy">Popular options</h2>
        <p className="mt-1 text-sm text-muted">
          Options are available as features on units — ask when you text us.
          There is no separate accessories shop in this catalog.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {optionExamples.map((opt) => (
            <li
              key={opt}
              className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs font-medium text-navy/80"
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
