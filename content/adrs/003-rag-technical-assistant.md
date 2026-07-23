# Architecture Decision Record: RAG Technical Assistant

## Status
Accepted

## Context
Engineers and operators need to query technical documentation (PDFs, manuals) and get grounded, cited answers instead of relying on generic LLMs.

## Decision
Use a Retrieval Augmented Generation (RAG) pipeline:
* Extract text from PDFs
* Chunk documents with overlap
* Embed chunks with a local sentence transformer model
* Store in ChromaDB
* Retrieve top k chunks and present them with citations

## Consequences
* Positive: answers are grounded in real documents, no API keys required
* Negative: answer quality depends on chunking strategy and embedding model

## Alternatives considered
* Fine tuning an LLM: expensive and not updatable when documents change
* Using OpenAI API: simpler but requires external API keys and has cost/privacy concerns
