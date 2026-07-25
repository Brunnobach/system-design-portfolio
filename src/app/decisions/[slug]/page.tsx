import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocLayout } from "@/components/DocLayout";
import { adrs, getAdr } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return adrs.map((adr) => ({ slug: adr.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const adr = getAdr(slug);
  if (!adr) return {};
  return {
    title: `ADR ${adr.meta.number}: ${adr.meta.title}`,
    description: adr.meta.summary,
  };
}

export default async function AdrPage({ params }: PageProps) {
  const { slug } = await params;
  const adr = getAdr(slug);
  if (!adr) notFound();

  return (
    <DocLayout
      eyebrow={`ADR ${adr.meta.number} · ${adr.meta.status}`}
      title={adr.meta.title}
      summary={adr.meta.summary}
      content={adr.content}
      backHref="/#decisions"
      backLabel="All decisions"
    />
  );
}
