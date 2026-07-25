import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Markdown } from "@/components/Markdown";

type DocLayoutProps = {
  eyebrow: string;
  title: string;
  summary: string;
  meta?: string[];
  content: string;
  backHref: string;
  backLabel: string;
};

export function DocLayout({
  eyebrow,
  title,
  summary,
  meta = [],
  content,
  backHref,
  backLabel,
}: DocLayoutProps) {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
          <Link
            href={backHref}
            className="text-sm text-[var(--text-faint)] transition-colors hover:text-[var(--accent)]"
          >
            ← {backLabel}
          </Link>
          <p className="mt-10 text-xs tracking-[0.28em] text-[var(--accent)] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 font-[family-name:var(--font-serif)] text-xl text-[var(--text-muted)]">
            {summary}
          </p>
          {meta.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {meta.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          <div className="mt-12 border-t border-[var(--line)] pt-10">
            <Markdown content={content} />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
