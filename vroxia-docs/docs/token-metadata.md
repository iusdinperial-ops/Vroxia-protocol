---
id: token-metadata
title: UDSX — Token-2022 Compliance
sidebar_label: Token-2022 Compliance
sidebar_position: 3
---

# UDSX Token Metadata — Token-2022 Compliance

> This document specifies how the UDSX settlement asset aligns with the **Solana Token-2022 standard** (SPL Token Extensions Program), ensuring institutional-grade metadata integrity, transfer control, and regulatory traceability.

---

## Token Identity

| Field | Value |
|---|---|
| **Token Name** | UDSX |
| **Full Name** | Universal Digital Settlement Exchange |
| **Standard** | SPL Token-2022 (Token Extensions Program) |
| **Decimals** | 6 |
| **Program ID** | `TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb` |
| **Mint Authority** | Vroxia Protocol multisig (threshold 3-of-5) |
| **Freeze Authority** | Vroxia Protocol compliance module |
| **Supply Model** | Controlled issuance — no public minting |

---

## Token-2022 Extensions in Use

### 1. Metadata Extension (`spl-token-metadata`)

UDSX embeds on-chain metadata directly via the Token-2022 Metadata Extension, eliminating dependency on off-chain Metaplex pointers for core identity fields.

```json
{
  "name": "UDSX",
  "symbol": "UDSX",
  "uri": "https://vroxiaprotocol.com/token/udsx-metadata.json",
  "additional_metadata": [
    ["protocol", "Vroxia"],
    ["asset_class", "wholesale_settlement"],
    ["volatility_model", "TWAP-15m"],
    ["compliance_tier", "FATF-AML-3"],
    ["jurisdiction_scope", "34"],
    ["issuer_email", "vroxiausdx@gmail.com"]
  ]
}
```

---

### 2. Transfer Hook Extension

All UDSX transfers execute a **mandatory transfer hook** via a custom on-chain program that:

- Validates KYB/KYC status of both counterparties before settlement completes
- Enforces minimum transfer amount (`USD 50,000 equivalent`)
- Logs transfer metadata to the audit ledger
- Blocks transfers to non-whitelisted addresses

```
Transfer Hook Program: vroxia_transfer_hook_v1
Trigger: Pre-transfer (blocking)
On failure: Transaction reverts — no funds move
```

---

### 3. Confidential Transfers Extension

UDSX supports **confidential transfer amounts** using the Token-2022 Confidential Transfer extension (ElGamal encryption), allowing:

- Counterparties to verify transfer validity without exposing the notional amount publicly
- Regulatory auditors to decrypt amounts using the Vroxia compliance key
- On-chain proofs that balances are non-negative without revealing values

---

### 4. Permanent Delegate Extension

The Vroxia Protocol compliance module holds a **Permanent Delegate** role, enabling:

- Forced clawback of assets in regulatory freeze scenarios
- Compliance with OFAC sanctions enforcement
- Emergency settlement reversal in confirmed fraud cases

> This extension is exercised exclusively under documented legal authority. All delegate actions are logged on-chain with a mandatory 48-hour governance notice.

---

### 5. Interest-Bearing Extension

Idle UDSX held in institutional escrow wallets accrues a protocol-defined yield rate, calculated as:

```
Yield Rate = Base Rate (set by Vroxia governance) + Collateral Premium
```

This rate is embedded in the token account and compounds continuously, ensuring reserve capital is not economically idle during the settlement window.

---

## Off-Chain Metadata Schema

The URI field references a versioned JSON file hosted on Vroxia's infrastructure:

```json
{
  "name": "UDSX — Universal Digital Settlement Exchange",
  "symbol": "UDSX",
  "description": "Low-volatility wholesale settlement asset for institutional counterparties. Issued by Vroxia Protocol. Not available for retail purchase.",
  "image": "https://vroxiaprotocol.com/token/udsx-logo.png",
  "external_url": "https://vroxiaprotocol.com",
  "attributes": [
    { "trait_type": "Asset Class",        "value": "Wholesale Settlement" },
    { "trait_type": "Volatility Model",   "value": "TWAP-15m" },
    { "trait_type": "Compliance",         "value": "FATF AML Tier-3" },
    { "trait_type": "Jurisdictions",      "value": "34" },
    { "trait_type": "Minimum Operation",  "value": "USD 50,000" },
    { "trait_type": "Settlement Time",    "value": "< 2 seconds" },
    { "trait_type": "Collateral Ratio",   "value": "102%" }
  ],
  "properties": {
    "category": "settlement_asset",
    "standard": "Token-2022",
    "issuer": "Vroxia Protocol",
    "contact": "vroxiausdx@gmail.com"
  }
}
```

---

## Compliance Notes

- UDSX is **not a security** under the Howey Test framework — it is a settlement instrument between pre-qualified institutional counterparties.
- All holders must complete KYB (Know Your Business) verification before receiving UDSX to their wallet address.
- Metadata is **immutable after mint finalization**. Any updates require a governance vote and a new metadata version URI.
- The `vroxiaudsx` handle across X, Instagram, and Facebook is the only authorized social identity for UDSX communications.
