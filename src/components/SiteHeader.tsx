"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { href } from "@/lib/paths";
import { site } from "@/lib/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#decisions", label: "Decisions" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[rgba(244,247,244,0.88)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.18em] uppercase"
        >
          {site.name.split(" ")[0]}
          <span className="text-[var(--accent)]">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[var(--text-muted)] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={href(link.href)}
              className="transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[var(--line-strong)] px-3.5 py-1.5 text-xs tracking-wide text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
