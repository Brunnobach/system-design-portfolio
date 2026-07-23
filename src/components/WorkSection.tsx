import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/content";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-[var(--line)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
            Selected work
          </p>
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-5xl">
            Architecture case studies from industrial and sustainability systems.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 70}>
              <Link
                href={`/work/${study.slug}`}
                className="group grid gap-4 py-8 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:items-start sm:gap-8"
              >
                <span className="pt-1 font-mono text-xs tracking-widest text-[var(--text-faint)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="mb-2 text-xs tracking-[0.2em] text-[var(--text-faint)] uppercase">
                    {study.domain}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight transition-colors group-hover:text-[var(--accent)] sm:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
                    {study.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="sm:pt-1 sm:text-right">
                  <p
                    className="font-[family-name:var(--font-serif)] text-lg"
                    style={{ color: study.accent }}
                  >
                    {study.outcome}
                  </p>
                  <span className="mt-3 inline-block text-sm text-[var(--text-faint)] transition-colors group-hover:text-[var(--accent)]">
                    Read case study →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
