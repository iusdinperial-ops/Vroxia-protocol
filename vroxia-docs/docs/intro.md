---
id: intro
title: Vroxia Protocol
sidebar_label: Introduction
sidebar_position: 1
---

# Vroxia Protocol

> **Infraestructura Fintech y Seguridad Biométrica de nueva generación.**

## ¿Qué es Vroxia?

Vroxia es un protocolo financiero descentralizado diseñado para operar en entornos de alta exigencia regulatoria. Combina **autenticación biométrica de nivel bancario** con una arquitectura de liquidación de activos de baja volatilidad, permitiendo a instituciones mayoristas, fintechs y emisores de medios de pago operar con seguridad, velocidad y cumplimiento normativo.

---

## Propuesta de Valor

### Billetera Vroxia

La billetera Vroxia es el componente central del protocolo. No es una billetera de custodia tradicional: es un **módulo de identidad financiera soberana** que vincula de forma criptográfica la identidad biométrica del usuario con sus activos digitales.

| Característica | Detalle |
|---|---|
| **Autenticación** | Biométrica multi-factor (huella dactilar, reconocimiento facial, voz) |
| **Custodia** | No-custodial. Las claves privadas nunca abandonan el dispositivo del usuario |
| **Liquidación** | Integración nativa con el protocolo UDSX para operaciones mayoristas |
| **Cumplimiento** | Compatible con KYC/AML Tier-3 y normativas FATF |
| **Velocidad** | Finalidad de transacción en menos de 2 segundos |
| **Interoperabilidad** | Conectores para redes EVM, Stellar y redes de pago ISO 20022 |

---

## Casos de Uso

### 1. Pagos Institucionales
Vroxia permite a bancos y procesadoras de pago liquidar operaciones de alto valor sin exposición a la volatilidad del mercado cripto, gracias al uso de UDSX como unidad de cuenta interna.

### 2. Onboarding Biométrico
El proceso de alta de usuario integra verificación de identidad en tiempo real, eliminando el fraude de identidad sintética en el acceso a servicios financieros digitales.

### 3. Comercio Mayorista
Instituciones que operan en mercados OTC pueden utilizar la billetera Vroxia como nodo de liquidación, reduciendo el riesgo de contraparte mediante contratos de liquidación atómica.

---

## Seguridad

La seguridad de Vroxia se basa en tres pilares:

1. **Enclave de hardware seguro (TEE):** Las operaciones biométricas y de firma se ejecutan en un entorno de ejecución confiable aislado del sistema operativo principal.
2. **Firma umbral (Threshold Signatures):** Ninguna clave única puede autorizar una transacción. Se requieren múltiples fragmentos de firma distribuidos.
3. **Auditoría on-chain:** Cada operación genera una prueba verificable registrada en la cadena, garantizando trazabilidad total sin comprometer la privacidad del usuario.

---

## Próximos pasos

- [Protocolo UDSX](./udsx.md) — Entiende el mecanismo de liquidación de baja volatilidad.
