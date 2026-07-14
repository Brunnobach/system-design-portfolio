# Architecture Decision Record: Industrial IoT Data Platform

## Status
Accepted

## Context
An industrial biogas plant has hundreds of sensors (temperature, pH, flow, pressure) that emit data continuously. We need to ingest, store, query and visualize this data.

## Decision
Use MQTT for lightweight ingestion, InfluxDB for time-series storage, and Grafana for visualization. A FastAPI layer provides application access.

## Consequences
- Positive: industry-standard stack, high write throughput, rich dashboarding
- Negative: InfluxDB is specialized; needs backup strategy for long-term retention

## Alternatives considered
- PostgreSQL + TimescaleDB: viable, but InfluxDB has better native sensor tooling
- Kafka instead of MQTT: Kafka is powerful but overkill for small to mid-scale plants
