---
id: latam
title: LATAM Payment Interoperability
sidebar_label: LATAM Interoperability
sidebar_position: 5
---

# LATAM Payment Interoperability

> Vroxia is positioned as the **institutional settlement backbone for Latin America's emerging instant payment infrastructure**. UDSX provides the low-volatility bridge between local payment rails and the global digital asset ecosystem.

---

## Strategic Positioning

Latin America represents one of the world's fastest-growing markets for digital payments and financial inclusion. With over **$150 billion in annual remittances** flowing through the region and fragmented national payment systems creating friction, Vroxia's protocol is architected to serve as the interoperability layer between:

- Domestic instant payment networks (Pix, Bre-B, CoDi, Yape)
- Cross-border commercial settlement
- Wholesale UDSX liquidity channels
- Solana's high-throughput settlement network

---

## Pix — Brazil

**Pix** is the instant payment system operated by the **Banco Central do Brasil (BCB)**, processing over 5 billion transactions per month and operating 24/7/365.

### Vroxia x Pix Integration Architecture

```
┌─────────────────────────┐      ┌──────────────────────────┐
│   Brazilian Institution │      │   Vroxia Settlement Node │
│   (Pix Participant)     │      │   (UDSX Liquidity Pool)  │
└──────────┬──────────────┘      └────────────┬─────────────┘
           │                                  │
           │  1. Pix transfer instruction     │
           │ ─────────────────────────────►  │
           │                                  │
           │  2. Atomic UDSX lock             │
           │ ◄─────────────────────────────  │
           │                                  │
           │  3. Settlement confirmation      │
           │  (both legs settle or revert)    │
           │ ◄────────────────────────────► │
```

### Integration Capabilities

| Capability | Detail |
|---|---|
| **Settlement Type** | Atomic — Pix leg and UDSX leg settle simultaneously |
| **Latency Target** | < 3 seconds end-to-end |
| **Compliance** | BCB Resolution 1 (Open Finance) compatible |
| **Chave Pix Support** | CPF/CNPJ, email, phone, EVP |
| **Minimum Amount** | R$ 250,000 equivalent (wholesale threshold) |
| **FX Reference** | PTAX rate + UDSX TWAP composite |

### Regulatory Alignment

Vroxia's Pix integration is designed to comply with:
- **BCB Normative Instruction 99/2021** — instant payment scheme rules
- **LGPD (Lei Geral de Proteção de Dados)** — Brazilian data protection law
- **CMN Resolution 4.893** — anti-money laundering for payment institutions

---

## Bre-B — Colombia

**Bre-B** is Colombia's interoperable instant payment system, developed under the coordination of **Banco de la República** and the Colombian financial sector, designed to interconnect all payment service providers in a single real-time network.

### Vroxia x Bre-B Integration Architecture

```
┌──────────────────────────┐      ┌──────────────────────────┐
│  Colombian Institution   │      │   Vroxia Settlement Node │
│  (Bre-B Participant)     │      │   (UDSX Liquidity Pool)  │
└───────────┬──────────────┘      └────────────┬─────────────┘
            │                                  │
            │  Bre-B payment instruction       │
            │ ─────────────────────────────►  │
            │                                  │
            │  UDSX atomic bridge              │
            │ ◄─────────────────────────────  │
            │                                  │
            │  Confirmed settlement + proof    │
            │ ◄────────────────────────────► │
```

### Integration Capabilities

| Capability | Detail |
|---|---|
| **Settlement Type** | Atomic cross-rail |
| **Latency Target** | < 5 seconds end-to-end |
| **Compliance** | SFC (Superintendencia Financiera) standards |
| **Currency** | COP ↔ UDSX with composite FX reference |
| **Minimum Amount** | COP 200,000,000 equivalent (wholesale) |
| **AML Standard** | UIAF reporting compatible |

---

## Cross-Border Settlement

### The LATAM Cross-Border Problem

Traditional cross-border payments in Latin America involve:
- 2–5 day settlement windows
- 3–7% total cost (FX spread + correspondent fees)
- Opaque tracking and no settlement certainty
- Counterparty risk between jurisdictions

### The Vroxia Solution

UDSX acts as a **low-volatility settlement bridge** that eliminates correspondent banking dependencies for wholesale cross-border flows.

```
Colombia (COP)                              Brazil (BRL)
     │                                           │
     │  1. COP → UDSX                           │
     │     (Bre-B rail)                          │
     ▼                                           │
  UDSX Settlement Layer (Solana)                 │
     │                                           │
     │  2. Atomic transfer (<2s)                 │
     │                                           │
     │  3. UDSX → BRL                           │
     │            (Pix rail)                    │
     ▼                                           ▼
                        ✓ Settled
```

### Solana as Settlement Infrastructure

Vroxia leverages **Solana's high-throughput network** as the settlement backbone for cross-border operations:

| Metric | Solana Capability | Vroxia Application |
|---|---|---|
| **Throughput** | 65,000+ TPS | Supports institutional volume without congestion |
| **Finality** | ~400ms | Sub-2-second UDSX settlement confirmed |
| **Transaction Cost** | ~$0.00025 | Negligible settlement cost vs. correspondent banks |
| **Uptime** | 99.9%+ (post-2022) | Always-on settlement availability |

### Target Corridors (Phase 1)

| Corridor | Send Rail | Receive Rail | Target Launch |
|---|---|---|---|
| 🇧🇷 Brazil → 🇨🇴 Colombia | Pix | Bre-B | Phase 1 |
| 🇨🇴 Colombia → 🇲🇽 Mexico | Bre-B | CoDi/SPEI | Phase 2 |
| 🇧🇷 Brazil → 🇺🇸 United States | Pix | ACH / FedNow | Phase 2 |
| 🇺🇸 United States → 🌎 LATAM | FedNow | Regional rails | Phase 3 |

---

## Remittance Impact

The LATAM remittance market receives approximately **$155 billion per year**, with average fees of **6.2%** (World Bank, 2025). Vroxia's cross-border infrastructure targets:

- **Fee reduction:** < 0.5% total cost for wholesale corridors
- **Speed:** Settlement in under 5 seconds vs. 2–5 business days
- **Transparency:** On-chain proof of settlement available in real time
- **Access:** APIs available to licensed payment institutions, neobanks, and fintechs
