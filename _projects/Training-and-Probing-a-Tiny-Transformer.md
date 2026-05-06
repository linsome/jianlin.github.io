---
layout: page
title: Training-and-Probing-a-Tiny-Transformer
description: We build, train, and evaluate a minimal decoder-only Transformer from scratch using PyTorch. We will train this model on the Tiny Shakespeare dataset to generate Shakespeare-like text.
img: assets/img/training-loss-curve.png
importance: 2
category: AI
---

We build, train, and evaluate a minimal **decoder-only Transformer** from scratch using PyTorch, trained on the Tiny Shakespeare dataset to generate Shakespeare-like text.

## Experiments

We systematically varied key architectural hyperparameters across multiple runs, each trained for 5,000 iterations:

- `n_embd` — embedding dimension
- `n_layer` — number of transformer layers
- `n_head` — number of attention heads
- `dropout` — regularization rate

For each configuration, we tracked both **training loss** and **validation loss** to evaluate generalization.

## Finding

{% include figure.liquid path="assets/img/training-loss-curve.png" title="Training Loss Curve" class="img-fluid rounded z-depth-1" style="max-width: 400px; margin: auto; display: block;" %}

Model size (capacity) significantly improves language understanding and text coherence, producing sentences with improved fluency — at the cost of increased training time and computation.

**Timeline:** Spring 2026

<div class="links">
  <a href="https://github.com/linsome/Training-and-Probing-a-Tiny-Transformer" class="btn btn-sm z-depth-0" role="button" target="_blank">GitHub</a>
  <a href="/assets/pdf/189G-hw1-jian.pdf" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
</div>