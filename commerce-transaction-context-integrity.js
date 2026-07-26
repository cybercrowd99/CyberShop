// CyberCrowd CyberShop
// Commerce Transaction Context Integrity Model
//
// Purpose:
// Preserve descriptive evidence that a transaction context
// lifecycle chain maintained integrity within CyberShop.
//
// Owns:
// - integrity record shape
// - transaction context linkage
// - attestation linkage
// - confirmation linkage
// - certification linkage
// - integrity evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Integrity Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeIntegrityId() {
  return `transaction-context-integrity.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextIntegrity(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    integrityId:
      makeIntegrityId(),

    transactionContextId:
      clean.transactionContextId || null,

    attestationId:
      clean.attestationId || null,

    confirmationId:
      clean.confirmationId || null,

    certificationId:
      clean.certificationId || null,

    registrationId:
      clean.registrationId || null,

    recognitionId:
      clean.recognitionId || null,

    verificationId:
      clean.verificationId || null,

    validationId:
      clean.validationId || null,

    bindingId:
      clean.bindingId || null,

    transactionId:
      clean.transactionId || null,

    recordId:
      clean.recordId || null,

    integrityState:
      clean.integrityState || "preserved",

    integrityMetadata:
      safeClone(clean.integrityMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_INTEGRITY_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_INTEGRITY_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextIntegrityShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-integrity",

    stage:
      "cybershop-commerce-transaction-context-integrity",

    fields: [
      "integrityId",
      "transactionContextId",
      "attestationId",
      "confirmationId",
      "certificationId",
      "registrationId",
      "recognitionId",
      "verificationId",
      "validationId",
      "bindingId",
      "transactionId",
      "recordId",
      "integrityState",
      "integrityMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextIntegrity = {
  createCommerceTransactionContextIntegrity,
  readCommerceTransactionContextIntegrityShape,
};
