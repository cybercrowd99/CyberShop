/**
 * CYBERSHOP
 *
 * Integrity → Attestation Attachment
 *
 * ONE JOB:
 * Provide the structural attachment between the completed CyberShop
 * Integrity surface and the attestation layer.
 *
 * Boundary:
 *
 *   CyberShop Integrity
 *          │
 *          ▼
 *   Attestation Attachment
 *          │
 *          ▼
 *   CyberShop Attestation
 *
 * This module does not:
 * - create attestations
 * - validate attestations
 * - authorize attestation operations
 * - mutate integrity history
 * - interpret commerce lifecycle
 * - perform reconciliation
 * - create integrity evidence
 * - infer trust
 *
 * It only preserves the declared structural connection between the
 * CyberShop Integrity surface and the attestation layer.
 */

export type CyberShopAttestationAttachment = Readonly<{
  integrity: unknown;
  layer: "Attestation";
}>;

/**
 * Attach the completed CyberShop Integrity surface to the attestation
 * layer.
 *
 * The supplied Integrity surface remains the source of its own declared
 * structure. This function does not modify or reinterpret it.
 */
export function createCyberShopAttestationAttachment(
  integrity: unknown,
): CyberShopAttestationAttachment {
  return Object.freeze({
    integrity,
    layer: "Attestation",
  });
}
