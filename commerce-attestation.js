// CyberCrowd CyberShop
// Commerce Attestation Model
//
// Purpose:
// Preserve evidence that a commerce lifecycle record
// was acknowledged as a valid evidentiary state.
//
// Owns:
// - attestation record shape
// - integrity linkage
// - provenance linkage
// - lineage linkage
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
// Commerce Attestation Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeAttestationId() {
  return `attestation.${Date.now()}.${Math.random()
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

export function createCommerceAttestation(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    attestationId:
      makeAttestationId(),

    transactionId:
      clean.transactionId || null,

    integrityId:
      clean.integrityId || null,

    provenanceId:
      clean.provenanceId || null,

    lineageId:
      clean.lineageId || null,

    recordId:
      clean.recordId || null,

    attestationState:
      clean.attestationState || "acknowledged",

    statement:
      clean.statement || "COMMERCE_LIFECYCLE_EVIDENCE_ACKNOWLEDGED",

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_ATTESTATION_RECORDED",

    authorityBoundary:
      "ATTESTATION_RECORD_PRESERVES_ACKNOWLEDGMENT_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceAttestationShape() {
  return {
    ok: true,

    name:
      "commerce-attestation",

    stage:
      "cybershop-commerce-attestation",

    fields: [
      "attestationId",
      "transactionId",
      "integrityId",
      "provenanceId",
      "lineageId",
      "recordId",
      "attestationState",
      "statement",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceAttestation = {
  createCommerceAttestation,
  readCommerceAttestationShape,
};
