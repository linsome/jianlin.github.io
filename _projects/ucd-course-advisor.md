---
layout: post
title: Building a RAG-Powered Course Advisor for UC Davis Students
date: 2026-06-01 12:00:00
description: How I built a bilingual course recommendation system using dual-path retrieval, prerequisite DAGs, and Claude — deployed live on Fly.io.
img: assets/img/course-advisor-onboarding.png
importance: 1
categories: AI
---

**Live demo:** [ucd-course-advisor.fly.dev](https://ucd-course-advisor.fly.dev)

Choosing the right courses at UC Davis is harder than it sounds. The catalog has hundreds of options across departments, prerequisites vary in complexity, and not every course is suited to every student's background. I built a RAG-powered course advisor that lets students ask questions in **English or Chinese** and get personalized, structured recommendations.

---

## The Problem

A student asking *"what AI courses can I take?"* needs more than a keyword search. They need to know:

- Which courses they're actually eligible for right now
- Which ones they're one or two prerequisites away from
- Which ones require a longer-term plan

Standard search can't answer this — it has no knowledge of what courses a student has already taken, or how prerequisites chain together.

---

## Architecture

The system is built around a **dual-path retrieval pipeline**:
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

**Retrieval:** Dense vector search (bge-m3) and BM25 keyword search run in parallel, fused via weighted RRF (0.7/0.3). A bge-reranker-v2-m3 reranker then re-scores results, followed by a level boost to surface appropriately-leveled courses.

**DAG tier annotation:** Once the student's profile is known (major + completed courses), every retrieved course is tagged:
- ✅ `Available Now` — all prerequisites met
- ➡️ `Coming Soon` — 1–2 prerequisites missing
- 📅 `Long-term Plan` — multi-course path needed

Courses requiring instructor consent are automatically bumped one tier higher.

**Generation:** Retrieved context is passed to Claude, which produces a structured, readable answer grounded in actual catalog data.

---

## What It Looks Like

{% include figure.liquid path="assets/img/blog/course-advisor-onboarding.png" class="img-fluid rounded" caption="Onboarding: students enter their major, completed courses, and level" %}

{% include figure.liquid path="assets/img/blog/course-advisor-response.png" class="img-fluid rounded" caption="A structured response for a Statistics major asking about AI courses" %}

---

## Key Engineering Decisions

**BM25 + vector fusion** — Pure vector search hallucinated on rare course names (e.g. returning "Avian Reproduction" for "drone history"). Adding BM25 with keyword boosting significantly reduced irrelevant retrievals, especially for Chinese queries.

**Prerequisite DAG** — Built with OR/AND logic to handle complex prerequisite chains. Visualizable per department. Resolves the problem of recommending courses the student can't actually enroll in.

**No LLM judge in retrieval** — Every retrieval scoring step uses deterministic signals (BM25 scores, CLIP similarity, reranker scores). Claude is only called once at the end for generation, keeping costs and latency low.

**Bilingual support** — The system handles English and Chinese queries natively. For mixed-language inputs, keyword expansion translates before retrieval to improve recall.

---

## Known Limitations (and what's next)

- Graduate/undergraduate mixing is partially resolved via level boost, but not perfect
- Syllabus-level data (textbooks, weekly topics) not yet integrated — would significantly improve recommendation quality

Next steps include adding syllabus data from Canvas, Rate My Professor integration, and degree requirement mapping for full four-year planning.

---

*Stack: Python · FastAPI · ChromaDB · bge-m3 · bge-reranker-v2-m3 · BM25 · Claude API · Fly.io*