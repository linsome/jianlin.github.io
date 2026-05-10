---
layout: page
title: Text-to-SQL Generator via QLoRA Fine-Tuning
description: Fine-tuning Qwen2.5-7B-Instruct with QLoRA to generate clean, executable SQL from natural language queries, achieving dramatic parameter efficiency with fewer than 1% trainable parameters.
img: assets/img/text-sql-training_curve.png
importance: 3
category: AI
github: https://github.com/linsome/Text-to-SQL-LoRA-practice
---

This project explores **parameter-efficient fine-tuning** of a large language model for Text-to-SQL generation — converting natural language questions into executable SQL queries using QLoRA (Quantized Low-Rank Adaptation).

## Setup

- **Base Model**: Qwen2.5-7B-Instruct
- **Dataset**: `b-mc2/sql-create-context` from Hugging Face
- **Method**: QLoRA fine-tuning with LoRA rank r = 16
- **Trainable Parameters**: ~10M out of 7B total (<1%)

## Key Findings

**Before fine-tuning**, the base model produced verbose conversational output — the SQL was buried inside natural language explanation, making it unsuitable for direct use.

**After fine-tuning**, the model outputs clean, executable SQL directly:
```sql
SELECT COUNT(*) FROM users
```

**Effect of LoRA Rank** — Comparing r = 4 vs. r = 16, training loss plateaued around 40 steps for both, and output quality was indistinguishable. This suggests r = 4 is sufficient for this task, offering better parameter efficiency with no quality trade-off.

## Takeaway

QLoRA is a highly effective approach for adapting large language models to structured output tasks. With fewer than 1% of parameters trained, the fine-tuned model achieves clean, fast SQL generation — demonstrating that full fine-tuning is unnecessary for domain-specific adaptation.

<div class="links">
  <a href="https://github.com/linsome/Text-to-SQL-LoRA-practice" class="btn btn-sm z-depth-0" role="button" target="_blank">GitHub</a>
</div>