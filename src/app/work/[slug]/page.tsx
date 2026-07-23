import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocLayout } from "@/components/DocLayout";
import { caseStudies, getCaseStudy } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.meta.title,
    description: study.meta.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <DocLayout
      eyebrow={study.meta.domain}
      title={study.meta.title}
      summary={study.meta.summary}
      meta={[study.meta.outcome, ...study.meta.stack]}
      content={study.content}
      backHref="/#work"
      backLabel="All case studies"
    />
  );
}
