---
layout: page
title: Does Classroom Size Affect Academic Achievement?
description: A multilevel statistical analysis of Tennessee's Project STAR dataset, examining the causal effect of small class sizes on student SAT performance across kindergarten through 3rd grade.
img: assets/img/207.png
importance: 5
category: data
---

The [Tennessee Project STAR](https://dataverse.harvard.edu/dataverse/star) (Student/Teacher Achievement Ratio) study is a landmark four-year randomized controlled trial conducted by the Tennessee State Department of Education (1985–1990), tracking ~11,600 students across 79 public schools from Kindergarten through Grade 3. Students were randomly assigned to one of three class types: **Small** (13–17 students), **Regular** (22–25), or **Regular with Aide**.

## Methods

**Exploratory Data Analysis** — Density plots and longitudinal score trends confirmed that the average SAT composite score (math, reading, listening, word skills) is more stable than any individual subject. Caterpillar plots revealed significant between-school heterogeneity, motivating a multilevel model.

**Linear Mixed-Effects Model (Multilevel Model)** — To account for the nested structure of students within teachers within schools, we specified a mixed-effects model with student-level fixed effects (class type, gender, race, free-lunch status) and nested random intercepts at the teacher and school levels:

$$Y_{ijk} = \beta_0 + \beta_1\text{ClassType} + \beta_2\text{Covariates} + u_i + v_{ij} + \epsilon_{ijk}$$

**Variance Decomposition & ICC Analysis** — ~27% of total score variance was attributable to the classroom and school hierarchy (School ICC: 15.6%, combined Teacher+School: 26.7%), validating the multilevel framework.

**Robustness Checks** — Three nested specifications (OLS → Random Effects → Full Mixed Model) yielded consistent estimates of the small-class advantage (−5.4 to −5.7 points for regular vs. small), confirming the result is not sensitive to modeling assumptions.

**Time Stability Analysis (Grades K–3)** — The small-class advantage was estimated separately for each grade, revealing a "fade-out" pattern: strongest in Grade 1 (−11.4 pts), gradually declining through Grade 3 (−4.0 pts), but remaining statistically significant throughout.

## Key Findings

- Small classes outperform regular classes by approximately **5 points** on the composite SAT score in Kindergarten, even after controlling for teacher and school heterogeneity.
- Socioeconomic status (free lunch eligibility) is the **strongest predictor** of achievement (16.7 pt gap), yet the small-class advantage holds for all subgroups.
- The treatment effect is most pronounced in Grade 1 and gradually fades, consistent with the Project STAR literature.

**Team:** Liang-Yin Tao, Jian Lin, Elliot Weisberg, Xiaoyi Liu  
**Course:** STA 207 · Winter 2026  
**Data:** [Harvard Dataverse — Project STAR](https://dataverse.harvard.edu/dataverse/star)

<div class="links">
  <a href="https://github.com/vlrytao95/STA-207-Final" class="btn btn-sm z-depth-0" role="button" target="_blank">GitHub</a>
  <a href="/jianlin.github.io/assets/pdf/207-final-project.pdf" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
</div>