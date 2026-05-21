---
layout: post
title: Supervised Recurrent Networks and the GRU to Vanishing Gradients
date: 2026-05-20 12:00:00
description: A deep dive into how Recurrent Neural Networks handle sequential data
tags: deep-learning RNN GRU neural-networks
categories: machine-learning
---

Feedforward neural networks process each input independently — they have no memory of what came before. **Recurrent Neural Networks (RNNs)** break this limitation by introducing connections across time, making them naturally suited for sequential data like text, audio, and time series.

## The Core Idea: Recurrence

The defining feature of an RNN is that the hidden state at time $$t$$ depends not only on the current input, but also on the hidden state from the previous timestep:

$$V_i(t) = g\!\left(\sum_j w_{ij}^{(vv)} V_j(t-1) + \sum_k w_{ik}^{(vx)} x_k - \theta_i^{(v)}\right) \quad \text{for } t = 1, 2, \ldots$$

The term $$\sum_j w_{ij}^{(vv)} V_j(t-1)$$ is what makes RNNs unique — it is a weighted sum over all hidden units from the **previous timestep**, effectively giving the network a form of memory.

## Backpropagation Through Time

Training an RNN requires a modified version of backpropagation called **Backpropagation Through Time (BPTT)**. The weight update for the recurrent weights $$w_{mn}^{(vv)}$$ is:

$$\delta w_{mn}^{(vv)} = -\eta \frac{\partial H}{\partial w_{mn}^{(vv)}} = \eta \sum_k E_k^* \frac{\partial V_k^*}{\partial w_{mn}^{(vv)}}$$

The key difference from standard backprop: the gradient must account for how neuron $$m$$ influences **all other neurons** across time — not just the immediate next layer. This makes the gradient computation significantly more complex.

## The Vanishing Gradient Problem

As gradients are propagated backwards through many timesteps, they are multiplied together repeatedly. If these values are smaller than 1, the gradients **shrink exponentially** — a phenomenon known as the **vanishing gradient problem**. In practice, this means the network struggles to learn long-range dependencies: information from many steps ago effectively disappears before it can influence the weights.

## The GRU Solution: Gated Recurrent Units

The solution mirrors the intuition behind **ResNet** in computer vision — create a shortcut path that allows gradients to flow unchanged. **Gated Recurrent Units (GRUs)** achieve this through two learnable gates:

$$z_m(t) = \sigma\!\left(\sum_k w_{mk}^{(zx)} x_k(t) + \sum_j w_{mj}^{(zv)} V_j(t-1)\right) \tag{9.30a}$$

$$r_n(t) = \sigma\!\left(\sum_k w_{nk}^{(rx)} x_k(t) + \sum_j w_{nj}^{(rv)} V_j(t-1)\right) \tag{9.30b}$$

$$h_i(t) = g\!\left(\sum_k w_{ik}^{(hx)} x_k(t) + \sum_j w_{ij}^{(hv)} r_j(t) V_j(t-1)\right) \tag{9.30c}$$

$$V_i(t) = [1 - z_i(t)]\, h_i(t) + z_i(t)\, V_i(t-1) \tag{9.30d}$$

The two gates play distinct roles:

- **Update gate $$z(t)$$** — Controls how much **new** information to incorporate. Backed by a sigmoid activation, it outputs a value between 0 and 1.
- **Reset gate $$r(t)$$** — Controls how much **old** memory to forget before computing the new candidate state.

### The ResNet Analogy

Look closely at equation (9.30d):

$$V_i(t) = [1 - z_i(t)]\, h_i(t) + z_i(t)\, V_i(t-1)$$

When $$z(t) = 1$$, this collapses to $$V_i(t) = V_i(t-1)$$ — the hidden state is **copied unchanged** from the previous timestep, with no new information at all. This is precisely the skip connection idea from ResNet: the network can choose to pass the gradient through time without any transformation, preventing it from vanishing.

## Summary

| Problem | Solution |
|---|---|
| Standard RNNs forget long-range context | Recurrent weights carry state across timesteps |
| Vanishing gradients block long-range learning | GRU gates create identity shortcuts through time |

GRUs demonstrate a recurring theme in deep learning: when optimization is hard, **architectural shortcuts** often work better than algorithmic fixes. By giving the network an explicit path to preserve information unchanged, GRUs make learning long-range dependencies tractable — without the full complexity of LSTMs.