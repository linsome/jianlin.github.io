---
layout: post
title: Reinforcement Learning — From Reward-Penalty Rules to Q-Learning
date: 2026-05-28 12:00:00
description: A structured walkthrough of core RL concepts, from the reward-penalty weight update rule to Temporal Difference learning, SARSA, and Q-learning.
tags: deep-learning reinforcement-learning TD-learning Q-learning
categories: machine-learning
---

In reinforcement learning (RL), an agent receives a reward of $$+1$$ for a correct output and a penalty of $$-1$$ for an incorrect output. RL tasks can be categorized into **non-associative tasks** and **associative tasks** — most practical discussions focus on associative tasks. The ultimate goal is to **maximize the cumulative expected reward** obtained by the model.

---

## Reward-Penalty Rule

The reward-penalty rule governs how weights are updated based on feedback:

$$\delta w_{mn} = \alpha \begin{cases} [y_m - \tanh(\beta b_m)]x_n & \text{for } r = +1 \\ -\delta[y_m + \tanh(\beta b_m)]x_n & \text{for } r = -1 \end{cases}$$

{% include figure.liquid path="assets/img/rl.png" class="img-fluid rounded" %}

Here $$\delta$$ denotes the penalty coefficient. A smaller penalty yields closer convergence to the theoretical optimal reward. When the model performs correctly, a large reward is applied; when it errors, only a minimal correction is made. This design ensures that the network strongly follows positive feedback — analogous to reinforcement concepts in psychology. In the formula, $$\delta$$ adjusts the weights in the opposite direction of $$y_m$$.

> **Note:** For the reward function to converge, the input dimension must exceed the number of samples.

---

## Temporal Difference (TD) Learning

Summing all actual future rewards directly is impractical in engineering because it requires completing an entire episode to compute all subsequent rewards. Instead, we define the **value estimation function**:

$$O(\mathbf{s}_t) = \mathbf{w} \cdot \mathbf{s}_t \tag{11.13}$$

Where $$O(\mathbf{s}_t)$$ is the model's estimate of the expected cumulative future reward for state $$\mathbf{s}_t$$. We define a squared error loss function $$H$$ over the sequence:

$$H = \frac{1}{2}\sum_{t=0}^{T-1}[R_t - O(\mathbf{s}_t)]^2 \tag{11.14}$$

Taking the gradient to update the weights yields:

$$\delta w_m = \alpha \sum_{t=0}^{T-1}[R_t - O(\mathbf{s}_t)]\frac{\partial O}{\partial w_m} \tag{11.15}$$

The prediction error can be mathematically rewritten by decomposing the target into successive time steps:

$$R_t - O(\mathbf{s}_t) = \sum_{\tau=t}^{T-1}[r_{\tau+1} + O(\mathbf{s}_{\tau+1}) - O(\mathbf{s}_\tau)] \tag{11.16}$$

$$\delta \mathbf{w} = \alpha \sum_{t=0}^{T-1}\sum_{\tau=t}^{T-1}[r_{\tau+1} + O(\mathbf{s}_{\tau+1}) - O(\mathbf{s}_\tau)]\mathbf{s}_t \tag{11.17}$$

The term $$r_{\tau+1} + O(\mathbf{s}_{\tau+1}) - O(\mathbf{s}_\tau)$$ is the **TD error**.

---

## TD(λ) — Eligibility Traces

Equation (11.17) requires knowing future states during the summation. To make this computationally feasible, mathematicians altered the summation order. Instead of computing forward from $$t=0$$ at the end of an episode, the **lookback mechanism** calculates incrementally at each current step by updating an eligibility trace of past steps.

{% include figure.liquid path="assets/img/r2.png" class="img-fluid rounded" %}

This reformulation leads to the $$\text{TD}(\lambda)$$ weight update rule:

$$\delta \mathbf{w} = \alpha \sum_{t=0}^{T-1}[r_{t+1} + O(\mathbf{s}_{t+1}) - O(\mathbf{s}_t)]\sum_{\tau=0}^{t}\lambda^{t-\tau}\mathbf{s}_\tau \tag{11.19}$$

By updating weights online at each individual time step:

$$\delta \mathbf{w}_t = \alpha[r_{t+1} + O(\mathbf{w}_t, \mathbf{s}_{t+1}) - O(\mathbf{w}_t, \mathbf{s}_t)]\sum_{\tau=0}^{t}\lambda^{t-\tau}\mathbf{s}_\tau \tag{11.20}$$

The parameter $$\lambda$$ is the discount tracking factor for past states $$(0 \le \lambda \le 1)$$. If $$\lambda = 0.5$$, the influence of states further in the past decays exponentially. If $$\lambda = 0$$, the algorithm becomes **TD(0)** — updating based solely on the immediate next state transition. TD(0) is widely applied in robotic training and control.

---

## SARSA and Q-Learning

In the TD(0) framework, value estimation is coupled with a policy through the Q-function $$Q(\mathbf{s}, \mathbf{a})$$:

$$Q_{t+1}(\mathbf{s}_t, \mathbf{a}_t) = Q_t(\mathbf{s}_t, \mathbf{a}_t) + \alpha_t [r_{t+1} + \gamma Q_t(\mathbf{s}_{t+1}, \mathbf{a}_{t+1}) - Q_t(\mathbf{s}_t, \mathbf{a}_t)] \tag{11.23}$$

Equation (11.23) is the update rule for **SARSA**, an on-policy TD algorithm that evaluates the Q-table using the **actual next action** $$\mathbf{a}_{t+1}$$ chosen by the current policy.

Closely related is **Q-learning**, an off-policy algorithm where the update uses the maximum potential reward of the next state $$\max_{\mathbf{a}} Q_t(\mathbf{s}_{t+1}, \mathbf{a})$$, independent of the policy's actual next choice.

These value-based TD methods serve as the foundational principles for game-playing strategies — from Tic-Tac-Toe all the way up to value-network architectures in Deep RL systems like **AlphaGo**.