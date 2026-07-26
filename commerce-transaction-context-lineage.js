// CyberCrowd CyberShop
// Commerce Transaction Context Lineage Model
//
// Purpose:
// Preserve descriptive evidence of the historical
// relationship between transaction context lifecycle records.
//
// Owns:
// - lineage record shape
// - transaction context linkage
// - integrity linkage
// - attestation linkage
// - lifecycle relationship evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Lineage Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeLineageId() {
  return `transaction-context-lineage.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextLineage(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    lineageId:
      makeLineageId(),

    transactionContextId:
      clean.transactionContextId || null,

    integrityId:
      clean.integrityId || null,

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

    lineageState:
      clean.lineageState || "preserved",

    lineageMetadata:
      safeClone(clean.lineageMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_LINEAGE_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_LINEAGE_PRESERVES_HISTORY_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextLineageShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-lineage",

    stage:
      "cybershop-commerce-transaction-context-lineage",

    fields: [
      "lineageId",
      "transactionContextId",
      "integrityId",
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
      "lineageState",
      "lineageMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextLineage = {
  createCommerceTransactionContextLineage,
  readCommerceTransactionContextLineageShape,
};
