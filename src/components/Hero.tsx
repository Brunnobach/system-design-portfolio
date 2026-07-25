import Link from "next/link";
import { ArchitectureMesh } from "@/components/ArchitectureMesh";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="atmosphere" />
      <div className="grid-fade" />
      <div className="pointer-events-none absolute inset-y-0 right-[-6%] hidden w-[60%] opacity-90 lg:block">
        <ArchitectureMesh />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-0">
        <p className="animate-rise delay-1 mb-5 max-w-xl text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
          {site.role}
        </p>

        <h1 className="animate-rise delay-2 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(3.2rem,10vw,7.4rem)] leading-[0.92] font-semibold tracking-[-0.04em] text-[var(--ink)]">
          {site.name}
        </h1>

        <p className="animate-rise delay-3 mt-7 max-w-xl font-[family-name:var(--font-serif)] text-[clamp(1.2rem,2.4vw,1.65rem)] leading-snug text-[var(--text-muted)]">
          {site.tagline}
        </p>

        <div className="animate-rise delay-4 mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#f4f7f4] transition-colors hover:bg-[var(--accent-deep)]"
          >
            View selected work
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center border border-[var(--line-strong)] px-6 py-3 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Get in touch
          </Link>
        </div>

        <p className="animate-rise delay-4 mt-8 text-sm text-[var(--text-faint)]">
          {site.location}
        </p>
      </div>
    </section>
  );
}
