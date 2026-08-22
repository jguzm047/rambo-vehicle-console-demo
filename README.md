# Rambo Vehicle Console — Public Demo

A responsive connected-vehicle health dashboard demonstrating privacy-first telemetry UX, trend monitoring, diagnostic-event history, and maintenance baselines.

## Public-demo boundary

This repository is deliberately static and contains **synthetic demonstration data only**. It has no API client, OAuth flow, credentials, tokens, VIN, location history, raw vehicle responses, or connection to a real vehicle.

The private production project uses a local Node.js collector, owner-only storage, read-only vehicle authorization, timestamped health rules, and private network access. That authenticated collector is intentionally not deployed with this demo.

## Highlights

- At-a-glance hybrid, 12V, tire, maintenance, and suspension health
- Timestamped terminal-style vehicle event stream
- Engine and transmission telemetry trends
- Warning and diagnostic-code history
- Explicit data-freshness and confidence language
- Responsive, dependency-free HTML/CSS/JavaScript
- Automated public-boundary verification before deployment

## Local preview

Open `site/index.html`, or serve the `site/` directory with any static web server.

## Deployment

The included GitHub Actions workflow verifies the privacy boundary and deploys only `site/` to GitHub Pages. In repository settings, choose **Settings → Pages → Source: GitHub Actions**.

## Security

Run `npm run check` before every push. See `SECURITY.md`.
