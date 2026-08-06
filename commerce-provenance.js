// CyberCrowd CyberShop
// Commerce Provenance Model
// 
// Purpose:
// Preserve origin and source evidence for commerce lifecycle records.
//
// Owns:
// - provenance record shape
// - transaction linkage
// - lineage linkage
// - record origin evidence
// - lifecycle source references
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
// Commerce Provenance Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeProvenanceId() {
  return `provenance.${Date.now()}.${Math.random()
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

export function createCommerceProvenance(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    provenanceId:
      makeProvenanceId(),

    transactionId:
      clean.transactionId || null,

    lineageId:
      clean.lineageId || null,

    recordId:
      clean.recordId || null,

    sourceType:
      clean.sourceType || "commerce-lifecycle",

    sourceReference:
      clean.sourceReference || null,

    origin:
      safeClone(clean.origin),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_PROVENANCE_RECORDED",

    authorityBoundary:
      "PROVENANCE_RECORD_PRESERVES_ORIGIN_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceProvenanceShape() {
  return {
    ok: true,

    name:
      "commerce-provenance",

    stage:
      "cybershop-commerce-provenance",

    fields: [
      "provenanceId",
      "transactionId",
      "lineageId",
      "recordId",
      "sourceType",
      "sourceReference",
      "origin",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceProvenance = {
  createCommerceProvenance,
  readCommerceProvenanceShape,
};
