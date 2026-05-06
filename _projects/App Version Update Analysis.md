---
layout: page
title: App Version Update — User Analysis
description: A multi-stage statistical analysis of a mobile app version update (S14) across four global markets, examining behavioral shifts, revenue attribution, and user retention.
img: assets/img/221-pic.png
importance: 3
category: data
---

This project investigates the impact of the **S14 version update** (v1.2.9 → v1.3.3) on a global weather forecasting application developed by Falcon Media, using a dataset of 6,782 user-day observations across four markets: **United States, India, Germany, and Iraq**.

## Methods

We applied a multi-stage statistical framework including Bootstrap resampling (3,000 iterations), Principal Component Analysis (PCA), regularized regression (OLS / Ridge / Lasso), Classification Trees, and Gradient Boosting Machines (GBM) to study monetization and short-term user retention.

## Key Findings

**Market Bifurcation** — The update did not perform uniformly across markets. It exposed a fundamental split between "Engagement-Sensitive" and "Frequency-Driven" user clusters.

- **India** (Frequency-Driven): The only market with a statistically significant revenue increase (+$0.0066 average lift), driven by a 0.47× surge in session open rate.
- **US & Germany** (Engagement-Sensitive): A "lose-lose" outcome — session duration dropped by 23,310 ms and page depth declined by 0.78 pages, with no compensating revenue gain.

**Revenue Attribution** — Lasso regression revealed that US revenue is structurally dependent on `page_home` depth, with a critical profitability threshold at **7.5 home page views** identified by a Decision Tree. Users below this threshold fall into a near-zero revenue "Dead Zone." The version variable itself carries a **negative intrinsic coefficient** in the US market.

**Retention** — GBM (AUC = 0.86) identified install month, version, and engagement (PC1) as the top retention predictors. The S14 update did not cause broad user churn, but elevated retention risk in depth-oriented markets.

## Conclusion

A one-size-fits-all update strategy is detrimental. We recommend a **bifurcated product roadmap**: rolling back S14 for engagement-driven markets (US/Germany) while fully deploying it in frequency-driven markets (India/Iraq).

**Timeline:** Spring 2026 · **Team:** Jian Lin, Zinnia Zeng, Feini Pek

<div class="links">
  <a href="https://github.com/Fei-p/Version-Update-Analysis" class="btn btn-sm z-depth-0" role="button" target="_blank">GitHub</a>
  <a href="/assets/pdf/221-Project-report.pdf" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
</div>