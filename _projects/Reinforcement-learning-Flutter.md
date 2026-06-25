---
layout: page
title: Teaching a Small Model to Write Flutter UI Code with RL
description: A pipeline using GRPO + CLIP rewards to improve screenshot-to-Flutter code generation with Qwen3-VL-8B, trained on a single A100 for under $50.
img: assets/img/rl-flutter-reward.png
importance: 2
category: AI
github: https://huggingface.co/DeliciousGuy/flutter-rl-grpo
---

A pipeline that takes a **mobile UI screenshot** as input and generates **Flutter widget code** that visually recreates it — trained with reinforcement learning on a single A100 GPU for under $50.

Two measurable objectives:
- **Render success rate** — does the generated code compile and render without errors?
- **Visual similarity** — does the rendered output look like the original screenshot?

## Method

**Base Model: Qwen3-VL-8B-Instruct** with QLoRA fine-tuning — 4-bit NF4 quantization reduces ~18GB weights to ~5GB, with a LoRA adapter of ~175M trainable parameters (~1.95% of total). Only the adapter is updated; the base model stays frozen.

**Reward Design** — verifiable rewards based on deterministic signals, no LLM judge in the training loop:

- *Visual similarity (weight 0.8)*: render generated code via Flutter's golden test framework → compute CLIP cosine similarity against the original screenshot
- *Format check (weight 0.2)*: regex-based verification of imports, class definition, and `build()` method structure

**Training Algorithm: GRPO** (Group Relative Policy Optimization) via HuggingFace TRL — samples G=4 completions per prompt, updates the model to prefer completions above the group average. No separate value model required.

Key hyperparameters: `num_generations: 4`, `kl_beta: 0.1`, `lora_rank: 64`, `lora_alpha: 128`, `max_completion_length: 2048`. Trained directly with GRPO without SFT warm-up, hence the higher KL penalty.

**Dataset**: 160 easy-difficulty mobile UI screenshots from a real-world app dataset; eval set of 100 screens across easy/medium/hard difficulties.

{% include figure.liquid path="assets/img/rl-flutter-reward.png" class="img-fluid rounded" caption="Reward Learning Trend" %}

## Results

| Checkpoint | Render Rate | CLIP Similarity | Combined Score |
|---|---|---|---|
| Base model | 64.0% | 0.548 | 0.638 |
| checkpoint-400 | 64.0% | 0.549 | 0.639 |
| **checkpoint-480 (final)** | **67.0%** | **0.576** | **0.661** |

Structured UI patterns improved significantly:

| Screen Type | Render Δ | CLIP Δ |
|---|---|---|
| menu | +25.0pp | +0.221 |
| login | +16.7pp | +0.148 |
| list | +11.1pp | +0.091 |
| modal | +9.1pp | +0.086 |
| form | -10.0pp | -0.087 |

**Key finding**: training only on easy samples improved hard-difficulty screens at checkpoint-400 (+20pp render rate, +0.169 CLIP), suggesting the model learned generalizable Flutter code structure rather than memorizing easy patterns.

## Infrastructure

| Component | Choice | Cost |
|---|---|---|
| GPU | RunPod A100 SXM 80GB | $1.49/hr |
| Training time | ~10 hours | ~$15 |
| **Total spend** | | **~$20–25** |

<div class="row">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/RL-checkpoint-400.png" class="img-fluid rounded" caption="comparison A" %}
  </div>
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/rl-flutter-2.png" class="img-fluid rounded" caption="comparison B" %}
  </div>
</div>

## Lessons Learned

**Verifiable rewards are worth the engineering cost** — no API costs, fast iteration, and reward signals that can't be gamed by surface-level pattern matching.

**CLIP as a reward is surprisingly effective** — even without pixel-perfect matching, CLIP similarity pushes the model toward outputs that capture layout structure, color scheme, and component hierarchy.

**Cold-start GRPO works, but needs a higher KL penalty** — `kl_beta: 0.1` (vs typical 0.04 post-SFT) kept training stable without a warm-up stage.