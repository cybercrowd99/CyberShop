/**
 * CYBERSHOP
 *
 * Ledger Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * LedgerSpine surface and the ledger layer.
 *
 * Boundary:
 *
 *   CyberShop LedgerSpine
 *          │
 *          ▼
 *   Ledger Attachment
 *          │
 *          ▼
 *   CyberShop Ledger
 *
 * This module does not:
 * - write ledger records
 * - validate ledger entries
 * - authorize ledger operations
 * - mutate transaction history
 * - interpret commerce lifecycle
 * - perform reconciliation
 * - create provenance or lineage
 *
 * It only preserves the declared structural connection between the
 * CyberShop LedgerSpine and the ledger layer.
 */

export type CyberShopLedgerAttachment = Readonly<{
  ledgerSpine: unknown;
  layer: "Ledger";
}>;

/**
 * Attach the completed CyberShop LedgerSpine to the ledger layer.
 *
 * The supplied LedgerSpine attachment remains the source of its own
 * declared structure. This function does not modify or reinterpret it.
 */
export function createCyberShopLedgerAttachment(
  ledgerSpine: unknown,
): CyberShopLedgerAttachment {
  return Object.freeze({
    ledgerSpine,
    layer: "Ledger",
  });
}
