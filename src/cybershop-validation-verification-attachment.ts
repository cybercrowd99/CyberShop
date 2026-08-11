/**
 * CYBERSHOP
 *
 * Verification Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * Validation surface and the verification layer.
 *
 * Boundary:
 *
 *   CyberShop Validation
 *          │
 *          ▼
 *   Verification Attachment
 *          │
 *          ▼
 *   CyberShop Verification
 *
 * This module does not:
 * - perform verification
 * - create verification records
 * - validate data
 * - authorize verification operations
 * - mutate validation history
 * - interpret commerce lifecycle
 * - perform reconciliation
 * - create provenance or lineage
 *
 * It only preserves the declared structural connection between the
 * CyberShop Validation surface and the verification layer.
 */

export type CyberShopVerificationAttachment = Readonly<{
  validation: unknown;
  layer: "Verification";
}>;

/**
 * Attach the completed CyberShop Validation surface to the
 * verification layer.
 *
 * The supplied Validation surface remains the source of its own
 * declared structure. This function does not modify or reinterpret it.
 */
export function createCyberShopVerificationAttachment(
  validation: unknown,
): CyberShopVerificationAttachment {
  return Object.freeze({
    validation,
    layer: "Verification",
  });
}
