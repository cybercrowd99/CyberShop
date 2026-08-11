/**
 * CYBERSHOP
 *
 * Confirmation Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * Verification surface and the confirmation layer.
 *
 * Boundary:
 *
 *   CyberShop Verification
 *          │
 *          ▼
 *   Confirmation Attachment
 *          │
 *          ▼
 *   CyberShop Confirmation
 *
 * This module does not:
 * - perform confirmation
 * - create confirmation records
 * - verify data
 * - validate data
 * - authorize confirmation operations
 * - mutate verification history
 * - interpret commerce lifecycle
 * - perform reconciliation
 * - create provenance or lineage
 *
 * It only preserves the declared structural connection between the
 * CyberShop Verification surface and the confirmation layer.
 */

export type CyberShopConfirmationAttachment = Readonly<{
  verification: unknown;
  layer: "Confirmation";
}>;

/**
 * Attach the completed CyberShop Verification surface to the
 * confirmation layer.
 *
 * The supplied Verification surface remains the source of its own
 * declared structure. This function does not modify or reinterpret it.
 */
export function createCyberShopConfirmationAttachment(
  verification: unknown,
): CyberShopConfirmationAttachment {
  return Object.freeze({
    verification,
    layer: "Confirmation",
  });
}
