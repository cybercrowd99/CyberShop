/**
 * CYBERSHOP
 *
 * LedgerSpine Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * TransactionSpine surface and the LedgerSpine.
 *
 * Boundary:
 *
 *   CyberShop TransactionSpine
 *          │
 *          ▼
 *   LedgerSpine Attachment
 *          │
 *          ▼
 *   CyberShop LedgerSpine
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
 * CyberShop TransactionSpine and LedgerSpine.
 */

export type CyberShopLedgerSpineAttachment = Readonly<{
  transactionSpine: unknown;
  spine: "LedgerSpine";
}>;

/**
 * Attach the completed CyberShop TransactionSpine to LedgerSpine.
 *
 * The supplied TransactionSpine attachment remains the source of its own
 * declared structure. This function does not modify or reinterpret it.
 */
export function createCyberShopLedgerSpineAttachment(
  transactionSpine: unknown,
): CyberShopLedgerSpineAttachment {
  return Object.freeze({
    transactionSpine,
    spine: "LedgerSpine",
  });
}
