// CyberCrowd CyberShop
// Commerce Transaction Context Archive Model
// 
// Purpose:
// Preserve durable descriptive evidence of a completed
// transaction context lifecycle chain.
//
// Owns:
// - archive record shape
// - transaction context linkage
// - history linkage
// - record linkage
// - lifecycle preservation evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Archive Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeArchiveId() {
  return `transaction-context-archive.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextArchive(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    archiveId:
      makeArchiveId(),

    transactionContextId:
      clean.transactionContextId || null,

    historyId:
      clean.historyId || null,

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

    archiveState:
      clean.archiveState || "archived",

    archiveMetadata:
      safeClone(clean.archiveMetadata),

    evidence:
      safeClone(clean.evidence),

    archivedAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_ARCHIVE_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_ARCHIVE_PRESERVES_HISTORY_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextArchiveShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-archive",

    stage:
      "cybershop-commerce-transaction-context-archive",

    fields: [
      "archiveId",
      "transactionContextId",
      "historyId",
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
      "archiveState",
      "archiveMetadata",
      "evidence",
      "archivedAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextArchive = {
  createCommerceTransactionContextArchive,
  readCommerceTransactionContextArchiveShape,
};
