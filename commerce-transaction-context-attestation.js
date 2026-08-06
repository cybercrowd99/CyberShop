// CyberCrowd CyberShop
// Commerce Transaction Context Attestation Model
// 
// Purpose:
// Preserve descriptive evidence that a confirmed
// transaction context linkage received attestation
// within the CyberShop lifecycle.
//
// Owns:
// - attestation record shape
// - transaction context linkage
// - confirmation linkage
// - certification linkage
// - attestation evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Attestation Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeAttestationId() {
  return `transaction-context-attestation.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextAttestation(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    attestationId:
      makeAttestationId(),

    transactionContextId:
      clean.transactionContextId || null,

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

    attestationState:
      clean.attestationState || "attested",

    attestationMetadata:
      safeClone(clean.attestationMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_ATTESTATION_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_ATTESTATION_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextAttestationShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-attestation",

    stage:
      "cybershop-commerce-transaction-context-attestation",

    fields: [
      "attestationId",
      "transactionContextId",
      "confirmationId",
      "certificationId",
      "registrationId",
      "recognitionId",
      "verificationId",
      "validationId",
      "bindingId",
      "transactionId",
      "recordId",
      "attestationState",
      "attestationMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextAttestation = {
  createCommerceTransactionContextAttestation,
  readCommerceTransactionContextAttestationShape,
};
