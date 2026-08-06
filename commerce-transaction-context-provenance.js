// CyberCrowd CyberShop
// Commerce Transaction Context Provenance Model
// 
// Purpose:
// Preserve descriptive evidence of the origin and
// source relationship of transaction context lifecycle records.
//
// Owns:
// - provenance record shape
// - transaction context linkage
// - lineage linkage
// - integrity linkage
// - origin evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Provenance Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeProvenanceId() {
  return `transaction-context-provenance.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextProvenance(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    provenanceId:
      makeProvenanceId(),

    transactionContextId:
      clean.transactionContextId || null,

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

    recordId:
      clean.recordId || null,

    provenanceState:
      clean.provenanceState || "preserved",

    originMetadata:
      safeClone(clean.originMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_PROVENANCE_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_PROVENANCE_PRESERVES_ORIGIN_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextProvenanceShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-provenance",

    stage:
      "cybershop-commerce-transaction-context-provenance",

    fields: [
      "provenanceId",
      "transactionContextId",
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
      "recordId",
      "provenanceState",
      "originMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextProvenance = {
  createCommerceTransactionContextProvenance,
  readCommerceTransactionContextProvenanceShape,
};
