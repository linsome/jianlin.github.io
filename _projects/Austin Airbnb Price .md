---
layout: page
title: Austin Airbnb Price & Crime Rate Correlation
description: Analyzing Airbnb listing price distributions in Austin, TX, predicting price determinants, and exploring the relationship between neighborhood crime rates and listing prices.
img: assets/img/220.png
importance: 4
category: data
---

This project investigates the **pricing landscape of Airbnb listings in Austin, Texas**, combining listing features with neighborhood-level crime data to understand what drives price variation and how safety perception affects short-term rental markets.

## Analysis

- **Price Distribution**: Explored spatial and statistical distributions of Airbnb listing prices across Austin neighborhoods using feature analysis and regularized regression models.
- **Price Prediction**: Built predictive models using listing characteristics (room type, location, amenities, reviews) to identify key price determinants.
- **Crime Correlation**: Integrated Austin crime dataset to quantify the relationship between neighborhood crime rates and Airbnb pricing, controlling for location and property features.

## Interactive 3D Map

The map below visualizes listing price density across Austin in 3D — zoom, rotate, and explore by neighborhood.

<div style="width: 100%; height: 500px; border-radius: 8px; overflow: hidden; margin: 1rem 0;">
  <iframe 
    src="https://linsome.github.io/Stats-220/dallas_no_token_3d_map.html" 
    width="100%" 
    height="500px" 
    style="border: none;"
    title="Austin Airbnb 3D Price Map">
  </iframe>
</div>

**Timeline:** Winter 2026

<div class="links">
  <a href="https://github.com/linsome/Stats-220" class="btn btn-sm z-depth-0" role="button" target="_blank">GitHub</a>
  <a href="/assets/pdf/STA_220_Final_Report.pdf" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
</div>