/**
 * CYBERSHOP
 *
 * Provenance Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * Ledger surface and the provenance layer.
 *
 * Boundary:
 *
 *   CyberShop Ledger
 *          │
 *          ▼
 *   Provenance Attachment
 *          │
 *          ▼
 *   CyberShop Provenance
 *
 * This module does not:
 * - create provenance records
 * - validate provenance evidence
 * - authorize provenance operations
 * - mutate ledger history
 * - interpret commerce lifecycle
 * - perform reconciliation
 * - generate lineage
 *
 * It only preserves the declared structural connection between the
 * CyberShop Ledger and the provenance layer.
 */

export type CyberShopProvenanceAttachment = Readonly<{
  ledger: unknown;
  layer: "Provenance";
}>;

/**
 * Attach the completed CyberShop Ledger to the provenance layer.
 *
 * The supplied Ledger remains the source of its own declared structure.
 * This function does not modify or reinterpret it.
 */
export function createCyberShopProvenanceAttachment(
  ledger: unknown,
): CyberShopProvenanceAttachment {
  return Object.freeze({
    ledger,
    layer: "Provenance",
  });
}
