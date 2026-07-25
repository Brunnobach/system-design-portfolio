# Case Study: Biogas MLOps Pipeline

## Problem
A biogas plant operator needs to predict daily biogas production to optimize energy sales, maintenance schedules and substrate mix.

## Requirements
* Predict daily production from operational parameters
* Track experiments and model versions
* Serve predictions through an API
* Deploy in containers

## Architecture
```
Operational Data → Feature Engineering → Gradient Boosting Model → MLflow Registry → FastAPI API
```

## Key design decisions
* Synthetic but physically inspired dataset to demonstrate the pipeline without sharing proprietary data
* Feature engineering includes cyclical time features, lag variables and interaction terms
* Confidence interval based on historical residual standard deviation

## Tradeoffs
**scikit learn Gradient Boosting:** Easy to explain and adds no extra dependencies. Not state of the art for very large datasets.

**XGBoost / LightGBM:** Stronger performance. Adds stack complexity.

**Deep learning (LSTM):** Can capture temporal patterns. Needs more data and compute.

## Outcome
Achieved R² = 0.965 with RMSE ≈ 10 m³/day on a simulated 5,000 row dataset. API responds in under 100 ms locally.

## Lessons learned
* Feature engineering matters more than model choice for tabular operational data
* MLflow is essential for reproducibility but requires infrastructure discipline
* Production deployment needs monitoring of data drift and model performance
