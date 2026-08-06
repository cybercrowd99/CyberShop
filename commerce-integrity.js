// CyberCrowd CyberShop
// Commerce Integrity Model
//  
// Purpose:
// Preserve evidence that commerce lifecycle records
// maintain structural integrity across the evidence chain.
//
// Owns:
// - integrity record shape
// - lineage linkage
// - provenance linkage
// - record verification evidence
// - lifecycle consistency evidence
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
// Commerce Integrity Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeIntegrityId() {
  return `integrity.${Date.now()}.${Math.random()
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

export function createCommerceIntegrity(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    integrityId:
      makeIntegrityId(),

    transactionId:
      clean.transactionId || null,

    lineageId:
      clean.lineageId || null,

    provenanceId:
      clean.provenanceId || null,

    recordId:
      clean.recordId || null,

    integrityState:
      clean.integrityState || "verified",

    checks:
      safeClone(clean.checks),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_INTEGRITY_RECORDED",

    authorityBoundary:
      "INTEGRITY_RECORD_PRESERVES_CHAIN_CONSISTENCY_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceIntegrityShape() {
  return {
    ok: true,

    name:
      "commerce-integrity",

    stage:
      "cybershop-commerce-integrity",

    fields: [
      "integrityId",
      "transactionId",
      "lineageId",
      "provenanceId",
      "recordId",
      "integrityState",
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

export const CommerceIntegrity = {
  createCommerceIntegrity,
  readCommerceIntegrityShape,
};
