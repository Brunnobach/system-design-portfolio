import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-[var(--line)] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
            About
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-5xl">
            From renewable energy operations to systems that scale.
          </h2>
          <p className="mt-6 font-[family-name:var(--font-serif)] text-xl leading-relaxed text-[var(--text-muted)]">
            {site.summary}
          </p>
          <p className="mt-5 text-[var(--text-muted)]">
            This portfolio stays focused on system design thinking, tradeoff
            analysis, and production awareness across MLOps, IoT, RAG, and ESG
            platforms.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="border border-[var(--line)] bg-[var(--bg-elevated)] p-7">
            <p className="mb-5 text-xs tracking-[0.22em] text-[var(--text-faint)] uppercase">
              Focus areas
            </p>
            <ul className="space-y-3">
              {site.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-[var(--line)] pb-3 text-[var(--ink)] last:border-0 last:pb-0"
                >
                  <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
