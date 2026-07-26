// CyberCrowd CyberShop
// Commerce Transaction Context History Model
//
// Purpose:
// Preserve chronological descriptive evidence
// of transaction context lifecycle progression.
//
// Owns:
// - history record shape
// - transaction context linkage
// - record linkage
// - lifecycle sequence evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context History Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeHistoryId() {
  return `transaction-context-history.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextHistory(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    historyId:
      makeHistoryId(),

    transactionContextId:
      clean.transactionContextId || null,

    recordId:
      clean.recordId || null,

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

    historyState:
      clean.historyState || "recorded",

    historyMetadata:
      safeClone(clean.historyMetadata),

    entries:
      safeClone(clean.entries),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_HISTORY_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_HISTORY_PRESERVES_CHRONOLOGY_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextHistoryShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-history",

    stage:
      "cybershop-commerce-transaction-context-history",

    fields: [
      "historyId",
      "transactionContextId",
      "recordId",
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
      "historyState",
      "historyMetadata",
      "entries",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextHistory = {
  createCommerceTransactionContextHistory,
  readCommerceTransactionContextHistoryShape,
};
