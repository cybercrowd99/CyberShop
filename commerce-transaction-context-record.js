// CyberCrowd CyberShop
// Commerce Transaction Context Record Model
//
// Purpose:
// Preserve a unified descriptive record reference
// for transaction context lifecycle evidence.
//
// Owns:
// - transaction context record shape
// - lifecycle artifact linkage
// - context evidence preservation
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Record Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeRecordId() {
  return `transaction-context-record.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextRecord(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    recordId:
      makeRecordId(),

    transactionContextId:
      clean.transactionContextId || null,

    provenanceId:
      clean.provenanceId || null,

    lineageId:
      clean.lineageId || null,

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

    recordState:
      clean.recordState || "recorded",

    recordMetadata:
      safeClone(clean.recordMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_RECORD_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextRecordShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-record",

    stage:
      "cybershop-commerce-transaction-context-record",

    fields: [
      "recordId",
      "transactionContextId",
      "provenanceId",
      "lineageId",
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
      "recordState",
      "recordMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextRecord = {
  createCommerceTransactionContextRecord,
  readCommerceTransactionContextRecordShape,
};
