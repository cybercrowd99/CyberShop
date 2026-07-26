// CyberCrowd CyberShop
// Commerce Acknowledgment Model
//
// Purpose:
// Preserve evidence that a commerce lifecycle record
// received a recorded acknowledgment marker.
//
// Owns:
// - acknowledgment record shape
// - registration linkage
// - certification linkage
// - validation linkage
// - confirmation linkage
// - attestation linkage
// - lifecycle acknowledgment evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - credit decisions
// - identity verification
//
// Doctrine:
// Commerce Acknowledgment Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeAcknowledgmentId() {
  return `acknowledgment.${Date.now()}.${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function safeClone(value) {
  if (value === undefined || value === null) {
    return null;
  }

  try {
    return JSON.parse(JSON.stringify(value));
  } catch {
    return null;
  }
}

function normalizeInput(input = {}) {
  if (!input || typeof input !== "object") {
    return {};
  }

  return input;
}

export function createCommerceAcknowledgment(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    acknowledgmentId:
      makeAcknowledgmentId(),

    transactionId:
      clean.transactionId || null,

    registrationId:
      clean.registrationId || null,

    certificationId:
      clean.certificationId || null,

    validationId:
      clean.validationId || null,

    confirmationId:
      clean.confirmationId || null,

    attestationId:
      clean.attestationId || null,

    integrityId:
      clean.integrityId || null,

    provenanceId:
      clean.provenanceId || null,

    lineageId:
      clean.lineageId || null,

    recordId:
      clean.recordId || null,

    acknowledgmentState:
      clean.acknowledgmentState || "acknowledged",

    acknowledgmentMetadata:
      safeClone(clean.acknowledgmentMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_ACKNOWLEDGMENT_RECORDED",

    authorityBoundary:
      "ACKNOWLEDGMENT_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceAcknowledgmentShape() {
  return {
    ok: true,

    name:
      "commerce-acknowledgment",

    stage:
      "cybershop-commerce-acknowledgment",

    fields: [
      "acknowledgmentId",
      "transactionId",
      "registrationId",
      "certificationId",
      "validationId",
      "confirmationId",
      "attestationId",
      "integrityId",
      "provenanceId",
      "lineageId",
      "recordId",
      "acknowledgmentState",
      "acknowledgmentMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceAcknowledgment = {
  createCommerceAcknowledgment,
  readCommerceAcknowledgmentShape,
};
