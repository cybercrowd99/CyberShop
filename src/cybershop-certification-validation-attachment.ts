/**
 * CYBERSHOP
 *
 * Certification → Validation Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * Certification surface and the validation layer.
 *
 * Boundary:
 *
 *   CyberShop Certification
 *          │
 *          ▼
 *   Validation Attachment
 *          │
 *          ▼
 *   CyberShop Validation
 *
 * This module does not:
 * - perform validation
 * - create validation records
 * - authorize validation operations
 * - mutate certification history
 * - interpret commerce lifecycle
 * - perform reconciliation
 * - create certifications
 * - infer compliance or trust
 *
 * It only preserves the declared structural connection between the
 * CyberShop Certification surface and the validation layer.
 */

export type CyberShopValidationAttachment = Readonly<{
  certification: unknown;
  layer: "Validation";
}>;

/**
 * Attach the completed CyberShop Certification surface to the
 * validation layer.
 *
 * The supplied Certification surface remains the source of its own
 * declared structure. This function does not modify or reinterpret it.
 */
export function createCyberShopValidationAttachment(
  certification: unknown,
): CyberShopValidationAttachment {
  return Object.freeze({
    certification,
    layer: "Validation",
  });
}
