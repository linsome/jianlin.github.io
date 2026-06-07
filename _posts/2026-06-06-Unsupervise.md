---
layout: post
title: Unsupervised Learning — Neural Networks vs. Classical Machine Learning
date: 2026-05-25 12:00:00
description: A comparative review of unsupervised learning techniques across neural network and classical ML perspectives, from PCA and SOM to Autoencoders and Diffusion Models.
tags: deep-learning unsupervised-learning PCA SOM VAE
categories: machine-learning
---

This post is a comparative summary of unsupervised learning, bridging Chapter 10 of *Machine Learning with Neural Networks* with classical machine learning techniques — examining how both paradigms tackle the same fundamental problem: learning structure from unlabeled data.

---

## Part 1: Neural Network Perspective

### Oja's Rule — Online PCA

Oja's Rule is the neural network implementation of **Principal Component Analysis (PCA)**. Named after Finnish scientist Erkki Oja, its key distinction from classical PCA is how it processes data: rather than computing a covariance matrix over the entire dataset at once, Oja's Rule updates weights **incrementally with each new sample**.

This online learning approach dramatically reduces memory pressure, making it practical for large-scale or streaming data settings. By extending this idea through **Sanger's Rule** (also known as the Generalized Hebbian Algorithm), the network can sequentially extract higher-order principal components — the second, third, and beyond.

### Competitive Learning — Winner Takes All

Competitive learning operates on a simple but powerful principle: during training, only the **winning neuron** — the one whose weight vector lies closest to the current input — is permitted to update its weights. All other neurons remain unchanged.

This winner-take-all mechanism naturally encourages neurons to specialize, with each neuron gradually becoming an expert on a particular region of the input space.

### Self-Organizing Maps (SOM) — Topology-Preserving Dimensionality Reduction

While PCA is inherently linear, **Self-Organizing Maps (SOM)** are designed to capture **non-linear structures** in data. The key extension over competitive learning: SOM updates not just the winning neuron, but also its **topological neighbors**, governed by a neighborhood function $$h(i, i_0)$$.

When projecting high-dimensional data onto a 2D grid, SOM behaves like an elastic net — the winning neuron pulls its neighbors toward the input at each step, gradually unfolding the data manifold. However, SOM has a well-known limitation: the **boundary effect**, where representation quality degrades near the edges of the grid.

---

## Part 2: Classical Machine Learning Perspective

### Multidimensional Scaling (MDS)

The classical ML analog to SOM is **Multidimensional Scaling (MDS)**, which attempts to preserve **global pairwise distances** — ensuring that the distances between all pairs of points in the low-dimensional space match their original high-dimensional distances.

While principled, this global optimization comes at a significant computational cost: MDS must compute all pairwise distances simultaneously, scaling poorly with dataset size.

### t-SNE — Probabilistic Neighbor Embedding

**t-SNE** improves upon linear baselines like Kernel PCA by leveraging the **Student-t distribution**. It computes the ratio of joint probability distributions of pairwise distances in the high-dimensional versus low-dimensional space, then minimizes the KL divergence between them.

The result: far superior clustering and visualization performance, especially for high-dimensional data like image embeddings.

---

## Part 3: Computational Trade-offs

| Method | Update Strategy | Complexity |
|---|---|---|
| SOM | One sample vs. existing weights | Low — local updates |
| MDS | All pairwise distances globally | High — $$O(n^2)$$ |
| t-SNE | Probabilistic pairwise ratios | Medium — approximate methods needed for large $$n$$ |

SOM's computational advantage comes precisely from its local update rule — it never needs to see the entire dataset at once.

---

## Part 4: Bridge Models & Deep Generative Models

### K-Means vs. Radial Basis Functions (RBF)

Both K-means and RBF networks partition data by geometric distance, but handle decision boundaries differently. K-means enforces **hard assignments** — each point belongs to exactly one cluster. RBF networks soften this by transforming distances into **smooth probabilities** via a Softmax-like normalization, producing more flexible boundaries.

### Autoencoders — Learning to Compress

Standard **Autoencoders (AE)** introduce the concept of reconstruction learning: an encoder compresses the input into a low-dimensional bottleneck, and a decoder reconstructs the original input from that compressed representation. The training signal is simply reconstruction error.

**Variational Autoencoders (VAE)** take this further by imposing a **Gaussian distribution** on the latent space, regularized via **KL Divergence**. This constraint structures the latent space to be continuous and meaningful — enabling not just compression, but controlled generation.

### The Road to Modern Generative AI

VAEs laid the groundwork for today's most powerful generative architectures:

- **GANs** — pitting a generator against a discriminator in an adversarial game
- **Diffusion Models** — learning to iteratively denoise data from pure noise
- **Stable Diffusion** — combines **VQ-VAE** for spatial compression with a Diffusion Model for high-fidelity image synthesis

The thread connecting all of these: learning compact, structured representations of data — the core goal of unsupervised learning.

---

*From Oja's online weight updates to latent diffusion models, unsupervised learning has evolved from elegant mathematical rules into the engine powering modern generative AI.*