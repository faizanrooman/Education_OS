# data/

Conventions for the Data Layer. No application code here; each module owns its own
migrations under `<module>/db/`. This folder holds cross-cutting policy and shared
reference data only.

| Folder | Contents |
|---|---|
| [primary-db](primary-db/) | Relational database conventions: schema-per-module, naming, migration policy. |
| [object-storage](object-storage/) | S3 / MinIO buckets, lifecycle and access policies. |
| [cache](cache/) | Redis usage conventions, key namespaces per module. |
| [search-index](search-index/) | Index naming and mapping ownership per module. |
| [warehouse](warehouse/) | Analytics / data warehouse schemas and ETL contracts. |
| [reference-data/](reference-data/) | Shared lookup data (states, districts, categories) loaded once per environment |
