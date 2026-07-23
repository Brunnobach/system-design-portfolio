import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-[var(--line)] py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-5 sm:px-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--glow)] blur-3xl" />
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
            Contact
          </p>
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-5xl">
            Looking for a Solutions Architect who can own the hard trade-offs?
          </h2>
          <p className="mt-5 max-w-xl text-[var(--text-muted)]">
            I am open to international roles in Solutions Architecture, Applied AI, and technical leadership for industrial and sustainability products.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#06100a] transition-transform hover:scale-[1.02]"
              >
                Email me
              </a>
            )}
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                site.email
                  ? "border border-[var(--line-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  : "bg-[var(--accent)] text-[#06100a]"
              }`}
            >
              Connect on LinkedIn
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--line-strong)] px-6 py-3 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Explore GitHub
            </a>
          </div>
          {site.email && (
            <p className="mt-5 text-sm text-[var(--text-faint)]">{site.email}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
