# Public demo security

Only synthetic data belongs in this repository. Never add real credentials, OAuth codes or tokens, VINs, vehicle IDs, coordinates, raw API responses, private telemetry history, or a production `.env` file.

The deployment workflow publishes only `site/`. Its verification step rejects sensitive filenames, credential-like values, coordinates, VIN-shaped values, and any demo dataset not explicitly marked synthetic.

If real data is ever committed, treat it as exposed: remove it from the full Git history and rotate any associated credential or token before publishing again.
