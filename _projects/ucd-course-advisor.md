---
layout: page
title: UC Davis Course Advisor
description: A RAG-powered bilingual course advisor for UC Davis students, featuring dual-path retrieval, prerequisite DAGs, and Claude-generated recommendations.
img: assets/img/course-advisor-onboarding.png
importance: 1
category: AI
github: https://github.com/linsome/ucd-course-advisor
---

**Live demo:** [ucd-course-advisor.fly.dev](https://ucd-course-advisor.fly.dev)

A RAG-powered course advisor that lets UC Davis students ask questions in **English or Chinese** and get personalized, structured course recommendations — aware of prerequisites, student level, and completed coursework.

## Architecture

<pre>
scrape-catalog.py  →  courses_raw.json
                              ↓
                       build_index.py          build_dag.py
                    (bge-m3 embeddings       (prerequisite DAG
                     → chroma_db/ +           → course_dag.pkl)
                       bm25_index.pkl)
                              ↓
                          RAGPipeline
                    vector + BM25 → RRF fusion
                    → reranker → level boost
                    → DAG tier annotation
                    → Claude API → answer
</pre>

**Retrieval:** Dense vector search (bge-m3) and BM25 keyword search run in parallel, fused via weighted RRF (0.7/0.3), then re-scored by bge-reranker-v2-m3 with a level boost to surface appropriately-leveled courses.

**DAG tier annotation:** Every retrieved course is tagged based on the student's completed coursework:
- ✅ `Available Now` — all prerequisites met
- ➡️ `Coming Soon` — 1–2 prerequisites missing
- 📅 `Long-term Plan` — multi-course path needed

**Generation:** Retrieved context is passed to Claude, which produces a structured, readable answer grounded in actual catalog data.

## Screenshots

{% include figure.liquid path="assets/img/course-advisor-onboarding.png" class="img-fluid rounded" caption="Onboarding: students enter their major, completed courses, and level" %}

{% include figure.liquid path="assets/img/course-advisor-response.png" class="img-fluid rounded" caption="Structured response for a Statistics major asking about AI courses" %}

## Key Design Decisions

**BM25 + vector fusion** — Pure vector search hallucinated on rare course names. Adding BM25 with keyword boosting significantly reduced irrelevant retrievals, especially for Chinese queries.

**Prerequisite DAG** — Built with OR/AND logic to handle complex prerequisite chains, visualizable per department.

**No LLM judge in retrieval** — Every retrieval scoring step uses deterministic signals. Claude is only called once at generation, keeping costs and latency low.

**Bilingual support** — Handles English and Chinese queries natively, with keyword expansion for mixed-language inputs.

*Stack: Python · FastAPI · ChromaDB · bge-m3 · bge-reranker-v2-m3 · BM25 · Claude API · Fly.io*