# Vroxia Protocol — Official Documentation Bunker

> **Next-generation Fintech Infrastructure & Biometric Security.**  
> This repository is the single source of truth for all technical documentation, protocol specifications, and developer resources of the Vroxia ecosystem.

---

## What is Vroxia Protocol?

**Vroxia** is a decentralized financial protocol engineered for high-compliance institutional environments. It combines **bank-grade biometric authentication** with a low-volatility settlement architecture, enabling wholesale institutions, fintechs, and payment issuers to operate with security, speed, and full regulatory alignment.

Vroxia is not a consumer app. It is infrastructure — the kind that moves real money between real institutions, with cryptographic guarantees at every step.

---

## The UDSX Asset

**UDSX** (Universal Digital Settlement Exchange) is Vroxia's internal settlement protocol and unit of account, designed exclusively for wholesale trade operations.

Key properties:

- **Low volatility by design** — not an open-market stablecoin. Settlement reserves are compartmentalized per operation, isolating market risk during the settlement window.
- **TWAP-referenced pricing** — 15-minute time-weighted average price, eliminating exposure to flash crashes and short-term manipulation.
- **Institutional-only access** — participants must be KYB-verified. No retail exposure.
- **Atomic settlement** — both counterparties lock collateral simultaneously. If any condition fails, funds are released automatically with zero cost.
- **Regulatory-grade audit trail** — every operation generates an on-chain verifiable proof, available for regulatory inspection without compromising user privacy.

UDSX is the settlement backbone of the Vroxia wallet — it is what makes instant, stable, high-value transfers possible across 34 FATF-compliant jurisdictions.

---

## This Repository

This is the **official documentation bunker** — built with [Docusaurus](https://docusaurus.io/) and deployed automatically to GitHub Pages via GitHub Actions on every commit to `main`.

```
vroxia-docs/
├── docs/
│   ├── intro.md        # Vroxia Protocol — value proposition & wallet architecture
│   └── udsx.md         # UDSX — wholesale settlement protocol specification
├── src/css/
│   └── custom.css      # Obsidian black & gold premium theme
├── .github/workflows/
│   └── deploy.yml      # CI/CD — auto-deploy to GitHub Pages on push
└── docusaurus.config.js
```

---

## Local Development

```bash
npm install
npm run start
```

## Production Build

```bash
npm run build
```

## Deploy to GitHub Pages

Push to `main` — the GitHub Actions workflow handles the rest automatically.

---

## Official Channels

All official Vroxia Protocol communications happen exclusively through the following verified channels.

| Platform | Handle | Link |
|---|---|---|
| 𝕏 (Twitter) | @vroxiaudsx | [x.com/vroxiaudsx](https://x.com/vroxiaudsx) |
| Instagram | @vroxiaudsx | [instagram.com/vroxiaudsx](https://instagram.com/vroxiaudsx) |
| Facebook | @vroxiaudsx | [facebook.com/vroxiaudsx](https://facebook.com/vroxiaudsx) |
| Email | vroxiausdx@gmail.com | [vroxiausdx@gmail.com](mailto:vroxiausdx@gmail.com) |

> Any account, channel, or domain not listed above is not affiliated with Vroxia Protocol.

---

## Legal

Copyright © 2026 Vroxia Protocol. All rights reserved.  
Unauthorized reproduction or distribution of this documentation is prohibited.  
UDSX and Vroxia Protocol are proprietary marks of the Vroxia organization.
