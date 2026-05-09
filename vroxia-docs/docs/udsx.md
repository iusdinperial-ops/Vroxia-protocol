---
id: udsx
title: UDSX — Protocolo de Liquidación
sidebar_label: UDSX Protocol
sidebar_position: 2
---

# UDSX — Protocolo de Liquidación de Baja Volatilidad

> **UDSX** es el protocolo de liquidación interno del ecosistema Vroxia, diseñado exclusivamente para **operaciones de comercio mayorista** en entornos institucionales.

---

## Definición

**UDSX** (Universal Digital Settlement Exchange) es un protocolo de liquidación de activos digitales de **baja volatilidad** que actúa como capa de abstracción entre los mercados de activos nativos (cripto, tokenizados, fiat digital) y las contrapartes institucionales que requieren certeza de valor en el momento de la liquidación.

UDSX no es un token de mercado abierto. Es una **unidad de cuenta interna** y un **mecanismo de enrutamiento de liquidación** que opera exclusivamente entre participantes autorizados del protocolo Vroxia.

---

## Principios de Diseño

### Baja Volatilidad por Arquitectura

A diferencia de las stablecoins tradicionales respaldadas por colateral o por algoritmos de oferta, UDSX logra su estabilidad mediante:

- **Reservas de liquidación compartimentadas:** Cada operación mayorista bloquea una reserva de valor equivalente al momento de la instrucción, aislando el riesgo de mercado durante la ventana de liquidación.
- **Precio de referencia TWAP:** El valor de referencia se calcula como el precio medio ponderado por tiempo (TWAP) en ventanas de 15 minutos, eliminando la exposición a flash crashes y manipulación de precios de corto plazo.
- **Sin dependencia de oracle externo único:** UDSX agrega precios de múltiples fuentes de referencia institucionales con ponderación de confianza dinámica.

---

## Arquitectura Técnica

```
┌─────────────────────────────────────────────────────┐
│               CAPA DE INSTRUCCIÓN                   │
│   Billetera Vroxia / API Institucional              │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│            MOTOR DE LIQUIDACIÓN UDSX                │
│  • Validación de identidad biométrica               │
│  • Bloqueo de reserva (Escrow atómico)              │
│  • Cálculo de precio TWAP                           │
│  • Enrutamiento a red de liquidación destino        │
└────────────────────┬────────────────────────────────┘
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
┌─────────────────┐   ┌──────────────────┐
│  Red EVM /      │   │  ISO 20022 /     │
│  Stellar        │   │  SWIFT gpi       │
└─────────────────┘   └──────────────────┘
```

---

## Parámetros del Protocolo

| Parámetro | Valor |
|---|---|
| **Ventana TWAP** | 15 minutos |
| **Finalidad de liquidación** | < 2 segundos |
| **Importe mínimo por operación** | USD 50,000 equivalente |
| **Participantes admitidos** | Instituciones KYB verificadas |
| **Colateral mínimo requerido** | 102% del valor nocional |
| **Tolerancia de desviación de precio** | ± 0.15% respecto al TWAP |
| **Jurisdicciones soportadas** | 34 países con regulación FATF |

---

## Flujo de una Operación Mayorista

1. **Instrucción:** La contraparte compradora envía una instrucción de liquidación firmada biométricamente desde la billetera Vroxia.
2. **Validación:** El motor UDSX valida identidad, límites regulatorios y disponibilidad de colateral.
3. **Bloqueo atómico:** Los fondos de ambas contrapartes quedan bloqueados en escrow on-chain simultáneamente.
4. **Cálculo de precio:** Se determina el precio de liquidación con base en el TWAP vigente.
5. **Liquidación:** La transferencia se ejecuta de forma atómica. Si alguna condición falla, el escrow se libera automáticamente sin costo para las partes.
6. **Registro:** La prueba de liquidación queda registrada on-chain y disponible para auditoría regulatoria.

---

## Diferencias con Stablecoins Convencionales

| Aspecto | Stablecoin Convencional | UDSX |
|---|---|---|
| **Propósito** | Reserva de valor / Medio de pago retail | Liquidación mayorista institucional |
| **Acceso** | Público | Restringido a participantes verificados |
| **Mecanismo de estabilidad** | Colateral o algoritmo | Reservas compartimentadas + TWAP |
| **Transparencia de precio** | Precio de mercado en tiempo real | TWAP con ventana de 15 minutos |
| **Regulación** | Variable | FATF / AML Tier-3 integrado |

---

## Integración

Los participantes institucionales pueden conectarse al protocolo UDSX mediante:

- **API REST** con autenticación JWT + firma biométrica.
- **SDK nativo** para plataformas iOS, Android y Web.
- **Conector FIX/ISO 20022** para integración directa con sistemas bancarios core.

Para solicitar acceso institucional, contacte al equipo de Vroxia a través del canal oficial.
