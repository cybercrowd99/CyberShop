// CyberCrowd CyberShop
// Commerce Confirmation Model
// 
// Purpose:
// Preserve evidence that a commerce lifecycle state
// received a recorded confirmation marker.
//
// Owns:
// - confirmation record shape
// - attestation linkage
// - integrity linkage
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
// Commerce Confirmation Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeConfirmationId() {
  return `confirmation.${Date.now()}.${Math.random()
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

export function createCommerceConfirmation(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    confirmationId:
      makeConfirmationId(),

    transactionId:
      clean.transactionId || null,

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

    confirmationState:
      clean.confirmationState || "confirmed",

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_CONFIRMATION_RECORDED",

    authorityBoundary:
      "CONFIRMATION_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceConfirmationShape() {
  return {
    ok: true,

    name:
      "commerce-confirmation",

    stage:
      "cybershop-commerce-confirmation",

    fields: [
      "confirmationId",
      "transactionId",
      "attestationId",
      "integrityId",
      "provenanceId",
      "lineageId",
      "recordId",
      "confirmationState",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceConfirmation = {
  createCommerceConfirmation,
  readCommerceConfirmationShape,
};
