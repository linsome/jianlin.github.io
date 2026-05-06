---
layout: page
title: Prompting with In-Context Learning and Evaluation
description: Explore the power and limitations of In-Context Learning (ICL) with Large Language Models for sentiment analysis.
img: assets/img/k-shot_vs_accuracy.png
importance: 1
category: AI
---

This project explores the power and limitations of **In-Context Learning (ICL)**. We designed prompts to guide a base Large Language Model (`Qwen3-0.6B-Base`) to perform sentiment analysis on the SST-2 dataset, without any fine-tuning.

**Key topics:**
- Prompt design strategies for base LLMs
- Few-shot and zero-shot in-context learning
- Evaluation on SST-2 sentiment classification benchmark


**Finding:**
{% include figure.liquid path="assets/img/k-shot_vs_accuracy.png" title="K-shot vs Accuracy" class="img-fluid rounded z-depth-1" %}

Under the zero-shot setting, the sentiment classification accuracy reached 82.5%. As more examples were added to the prompt context, the accuracy steadily increased. However, providing 16 examples (k=16) did not yield better performance compared to the k=8 setting, indicating a saturation point in the few-shot learning curve.

**Timeline:** Spring 2026

<div class="links">
  <a href="https://github.com/linsome/Prompting-with-In-Context-Learning-and-Evaluation" class="btn btn-sm z-depth-0" role="button" target="_blank">GitHub</a>
  <a href="/assets/pdf/189G-HW2.pdf" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
</div>