/**
 * CYBERSHOP
 *
 * Provenance → Lineage Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * Provenance surface and the lineage layer.
 *
 * Boundary:
 *
 *   CyberShop Provenance
 *          │
 *          ▼
 *   Lineage Attachment
 *          │
 *          ▼
 *   CyberShop Lineage
 *
 * This module does not:
 * - create lineage records
 * - create provenance records
 * - validate lineage evidence
 * - authorize lineage operations
 * - mutate provenance history
 * - interpret commerce lifecycle
 * - perform reconciliation
 * - infer relationships
 * - generate new lineage meaning
 *
 * It only preserves the declared structural connection between the
 * CyberShop Provenance surface and the lineage layer.
 */

export type CyberShopLineageAttachment = Readonly<{
  provenance: unknown;
  layer: "Lineage";
}>;

/**
 * Attach the completed CyberShop Provenance surface to the lineage layer.
 *
 * The supplied Provenance surface remains the source of its own
 * declared structure. This function does not modify or reinterpret it.
 */
export function createCyberShopLineageAttachment(
  provenance: unknown,
): CyberShopLineageAttachment {
  return Object.freeze({
    provenance,
    layer: "Lineage",
  });
}
