import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { adrs } from "@/lib/content";

export function DecisionsSection() {
  return (
    <section id="decisions" className="scroll-mt-24 border-t border-[var(--line)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
            Architecture Decision Records
          </p>
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-5xl">
            The reasoning behind the stack — not just the diagram.
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--text-muted)]">
            Each ADR captures context, decision, alternatives, and consequences. Built for hiring managers who want to see how I think under constraints.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {adrs.map((adr, index) => (
            <Reveal key={adr.slug} delay={index * 90}>
              <Link
                href={`/decisions/${adr.slug}`}
                className="group block h-full border border-[var(--line)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--accent)]"
              >
                <div className="mb-8 flex items-center justify-between text-xs tracking-[0.2em] uppercase">
                  <span className="text-[var(--accent)]">ADR {adr.number}</span>
                  <span className="text-[var(--text-faint)]">{adr.status}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight transition-colors group-hover:text-[var(--accent)]">
                  {adr.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {adr.summary}
                </p>
                <span className="mt-8 inline-block text-sm text-[var(--text-faint)] transition-colors group-hover:text-[var(--accent)]">
                  Open decision →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
