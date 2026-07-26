// CyberCrowd CyberShop
// Commerce Validation Model
//
// Purpose:
// Preserve evidence that commerce lifecycle records
// passed a validation checkpoint.
//
// Owns:
// - validation record shape
// - confirmation linkage
// - attestation linkage
// - integrity linkage
// - lifecycle validation evidence
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
// Commerce Validation Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeValidationId() {
  return `validation.${Date.now()}.${Math.random()
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

export function createCommerceValidation(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    validationId:
      makeValidationId(),

    transactionId:
      clean.transactionId || null,

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

    validationState:
      clean.validationState || "validated",

    checks:
      safeClone(clean.checks),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_VALIDATION_RECORDED",

    authorityBoundary:
      "VALIDATION_RECORD_PRESERVES_LIFECYCLE_CHECK_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceValidationShape() {
  return {
    ok: true,

    name:
      "commerce-validation",

    stage:
      "cybershop-commerce-validation",

    fields: [
      "validationId",
      "transactionId",
      "confirmationId",
      "attestationId",
      "integrityId",
      "provenanceId",
      "lineageId",
      "recordId",
      "validationState",
      "checks",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceValidation = {
  createCommerceValidation,
  readCommerceValidationShape,
};
