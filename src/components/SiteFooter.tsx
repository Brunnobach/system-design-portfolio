import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-[var(--text-faint)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Built for Solutions Architecture & Applied AI roles.
        </p>
        <div className="flex gap-5">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
            LinkedIn
          </a>
          <a href={site.links.repo} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
