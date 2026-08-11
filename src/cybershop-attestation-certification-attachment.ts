/**
 * CYBERSHOP
 *
 * Attestation → Certification Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * Attestation surface and the certification layer.
 *
 * Boundary:
 *
 *   CyberShop Attestation
 *          │
 *          ▼
 *   Certification Attachment
 *          │
 *          ▼
 *   CyberShop Certification
 *
 * This module does not:
 * - create certifications
 * - validate certifications
 * - authorize certification operations
 * - mutate attestation history
 * - interpret commerce lifecycle
 * - perform reconciliation
 * - create attestations
 * - infer trust or compliance
 *
 * It only preserves the declared structural connection between the
 * CyberShop Attestation surface and the certification layer.
 */

export type CyberShopCertificationAttachment = Readonly<{
  attestation: unknown;
  layer: "Certification";
}>;

/**
 * Attach the completed CyberShop Attestation surface to the
 * certification layer.
 *
 * The supplied Attestation surface remains the source of its own
 * declared structure. This function does not modify or reinterpret it.
 */
export function createCyberShopCertificationAttachment(
  attestation: unknown,
): CyberShopCertificationAttachment {
  return Object.freeze({
    attestation,
    layer: "Certification",
  });
}
