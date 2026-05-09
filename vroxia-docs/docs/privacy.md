---
id: privacy
title: Privacy & Security Bunker
sidebar_label: Privacy & Security
sidebar_position: 4
---

# Privacy & Security Bunker

> Vroxia is built on the principle that **financial privacy is a fundamental right**, not a feature. Every architectural decision — from key management to settlement proofs — is designed to minimize data exposure while maintaining full regulatory auditability.

---

## End-to-End Encryption Protocol

All transactional data within the Vroxia ecosystem is protected by native end-to-end encryption at the protocol layer, not the application layer.

### Encryption Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT DEVICE (TEE)                      │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Biometric Auth → Key Derivation → Message Signing  │    │
│  │  (Encrypted payload generated inside secure enclave)│    │
│  └──────────────────────────┬──────────────────────────┘    │
└─────────────────────────────┼───────────────────────────────┘
                              │ E2E Encrypted Payload
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  VROXIA SETTLEMENT LAYER                    │
│  Processes encrypted payloads — never sees plaintext data   │
│  Settlement proof generated without decrypting content      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│             COUNTERPARTY DEVICE (TEE)                       │
│  Decryption occurs exclusively inside recipient's enclave   │
└─────────────────────────────────────────────────────────────┘
```

### Key Standards Applied

| Standard | Application |
|---|---|
| **X25519** | Diffie-Hellman key exchange for session keys |
| **ChaCha20-Poly1305** | Symmetric encryption of transaction payloads |
| **Ed25519** | Transaction signing (Solana-native) |
| **AES-256-GCM** | At-rest encryption of biometric templates |
| **HKDF-SHA256** | Key derivation from biometric entropy |

---

## Zero-Knowledge Readiness

The Vroxia architecture is designed from the ground up to be **ZK-proof compatible**, allowing the network to evolve toward full zero-knowledge validation without requiring a protocol redesign.

### Current ZK-Ready Components

**1. Confidential Transfers (Token-2022)**
UDSX already uses the Token-2022 Confidential Transfer extension, which applies ElGamal encryption to transfer amounts. On-chain validators can verify the transfer is valid (non-negative balances, correct arithmetic) without ever seeing the actual amounts.

**2. Compliance Proofs Without Data Exposure**
Instead of sharing raw KYC documents, Vroxia generates **compliance attestation proofs** — cryptographic commitments that prove a user has passed verification without revealing the underlying data to counterparties.

```
Prover (Vroxia Compliance Module)
  → "I attest this address has completed KYB Tier-3"
  → Generates ZK proof of compliance statement
  → Proof is verifiable by counterparty without seeing KYC data
```

**3. Selective Disclosure**
Users can prove specific attributes (e.g., "jurisdiction is FATF-compliant", "balance exceeds minimum") without revealing the full state of their account.

### Roadmap to Full ZK Integration

| Phase | Milestone | Status |
|---|---|---|
| **Phase 1** | Confidential Transfer amounts (ElGamal) | Active |
| **Phase 2** | ZK compliance attestations | In design |
| **Phase 3** | Private settlement proofs (Groth16 / PLONK) | Planned |
| **Phase 4** | Full ZK rollup settlement layer | Research |

---

## Trusted Execution Environment (TEE)

All sensitive operations — biometric processing, key derivation, transaction signing — execute inside a **hardware-isolated Trusted Execution Environment**.

- **Isolation guarantee:** The TEE is physically separated from the main OS. Even a fully compromised operating system cannot access keys or biometric data inside the enclave.
- **Remote attestation:** Counterparties and the Vroxia settlement layer can cryptographically verify they are communicating with a genuine, unmodified TEE before processing any operation.
- **Supported hardware:** ARM TrustZone (mobile), Intel SGX (server-side compliance nodes).

---

## Data Minimization Principles

Vroxia collects and processes the **minimum data necessary** at each layer:

| Layer | Data Collected | Retention |
|---|---|---|
| **Biometric Auth** | Template hash (never raw biometric) | On-device only |
| **KYB/KYC** | Compliance attestation hash | Encrypted, compliance node |
| **Settlement** | Encrypted transfer proof | On-chain, confidential |
| **Audit** | Regulatory decryption key (escrow) | Regulatory request only |

Raw biometric data — fingerprints, facial geometry, voice prints — **never leaves the user's device** and **never enters Vroxia's infrastructure**.
