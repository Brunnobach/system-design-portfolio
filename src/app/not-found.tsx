import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.28em] text-[var(--accent)] uppercase">404</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#06100a]"
      >
        Back home
      </Link>
    </main>
  );
}
