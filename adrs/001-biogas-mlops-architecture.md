# Architecture Decision Record: Biogas MLOps Platform

## Status
Accepted

## Context
We need a system to forecast biogas production from operational parameters in a way that is reproducible, observable and deployable.

## Decision
Use a modular Python pipeline with:
- scikit-learn for the regression model
- MLflow for experiment tracking and model registry
- FastAPI for the inference API
- Docker Compose for local development

## Consequences
- Positive: reproducible experiments, easy deployment, standard ML stack
- Negative: requires running MLflow server; model retraining is still manual

## Alternatives considered
- SageMaker/Vertex AI: too much vendor lock-in for a portfolio project
- Flask instead of FastAPI: FastAPI has better validation and OpenAPI docs
- XGBoost vs Gradient Boosting: scikit-learn is sufficient and easier to explain
