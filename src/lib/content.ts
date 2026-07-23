import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  domain: string;
  summary: string;
  outcome: string;
  stack: string[];
  accent: string;
  file: string;
};

export type AdrMeta = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  status: string;
  file: string;
};

export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "biogas-mlops",
    title: "Biogas MLOps Pipeline",
    domain: "MLOps · Energy",
    summary:
      "Forecast daily biogas production to optimize energy sales, maintenance, and substrate mix.",
    outcome: "R² = 0.965 · API < 100 ms",
    stack: ["scikit-learn", "MLflow", "FastAPI", "Docker"],
    accent: "#0f7a4a",
    file: "biogas-mlops.md",
  },
  {
    slug: "industrial-iot-biogas",
    title: "Industrial IoT for Biogas Plants",
    domain: "IoT · Observability",
    summary:
      "Real-time monitoring for 50+ biodigesters — temperature, pH, pressure, and gas flow at scale.",
    outcome: "100 sensors @ 1 Hz · < 1% CPU",
    stack: ["MQTT", "InfluxDB", "Grafana", "FastAPI"],
    accent: "#0a6b7a",
    file: "industrial-iot-biogas.md",
  },
  {
    slug: "rag-technical-documents",
    title: "RAG for Technical Documents",
    domain: "Applied AI · Knowledge",
    summary:
      "Grounded Q&A over manuals and SOPs with citations — running locally, no API keys.",
    outcome: "Cited answers from 50-page manuals",
    stack: ["ChromaDB", "sentence-transformers", "PDF"],
    accent: "#3b5b8c",
    file: "rag-technical-documents.md",
  },
  {
    slug: "esg-data-platform",
    title: "ESG Data Platform",
    domain: "Sustainability · Data",
    summary:
      "Centralize emissions and ESG metrics with auditability instead of fragile spreadsheets.",
    outcome: "Footprint · intensity · audit trail",
    stack: ["PostgreSQL", "FastAPI", "Pydantic", "GHG Protocol"],
    accent: "#1f6b4a",
    file: "esg-data-platform.md",
  },
  {
    slug: "multi-agent-sales-platform",
    title: "Multi-Agent Sales Platform",
    domain: "Agents · Product",
    summary:
      "Hierarchical AI agents for research, writing, and scheduling with persistent memory.",
    outcome: "Working multi-agent prototype",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    accent: "#c45c16",
    file: "multi-agent-sales-platform.md",
  },
];

export const adrs: AdrMeta[] = [
  {
    slug: "001-biogas-mlops-architecture",
    number: "001",
    title: "Biogas MLOps Platform",
    summary:
      "Why scikit-learn, MLflow, and FastAPI for a reproducible production ML pipeline.",
    status: "Accepted",
    file: "001-biogas-mlops-architecture.md",
  },
  {
    slug: "002-industrial-iot-platform",
    number: "002",
    title: "Industrial IoT Platform",
    summary:
      "MQTT, InfluxDB, and Grafana for real-time sensor monitoring at industrial scale.",
    status: "Accepted",
    file: "002-industrial-iot-platform.md",
  },
  {
    slug: "003-rag-technical-assistant",
    number: "003",
    title: "RAG Technical Assistant",
    summary:
      "Local embeddings and ChromaDB for grounded, cited document Q&A.",
    status: "Accepted",
    file: "003-rag-technical-assistant.md",
  },
];

function stripLeadingTitle(markdown: string) {
  return markdown.replace(/^#\s+.*\n+/, "").trimStart();
}

export function getCaseStudy(slug: string) {
  const meta = caseStudies.find((c) => c.slug === slug);
  if (!meta) return null;
  const raw = fs.readFileSync(
    path.join(contentRoot, "case-studies", meta.file),
    "utf8",
  );
  const { content } = matter(raw);
  return { meta, content: stripLeadingTitle(content) };
}

export function getAdr(slug: string) {
  const meta = adrs.find((a) => a.slug === slug);
  if (!meta) return null;
  const raw = fs.readFileSync(
    path.join(contentRoot, "adrs", meta.file),
    "utf8",
  );
  const { content } = matter(raw);
  return { meta, content: stripLeadingTitle(content) };
}
