// CyberCrowd CyberShop
// Commerce Lineage Model
//
// Purpose:
// Preserve the connected evidence lineage of a commerce lifecycle.
//
// Owns:
// - lineage record shape
// - transaction linkage
// - record linkage
// - milestone linkage
// - lifecycle relationship evidence
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
// Commerce Lineage Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeLineageId() {
  return `lineage.${Date.now()}.${Math.random()
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

export function createCommerceLineage(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    lineageId:
      makeLineageId(),

    transactionId:
      clean.transactionId || null,

    recordId:
      clean.recordId || null,

    eventIds:
      safeClone(clean.eventIds),

    transitionIds:
      safeClone(clean.transitionIds),

    checkpointIds:
      safeClone(clean.checkpointIds),

    milestoneIds:
      safeClone(clean.milestoneIds),

    lineageState:
      clean.lineageState || "preserved",

    createdAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_LINEAGE_RECORDED",

    authorityBoundary:
      "LINEAGE_RECORD_PRESERVES_LIFECYCLE_RELATIONSHIPS_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceLineageShape() {
  return {
    ok: true,

    name:
      "commerce-lineage",

    stage:
      "cybershop-commerce-lineage",

    fields: [
      "lineageId",
      "transactionId",
      "recordId",
      "eventIds",
      "transitionIds",
      "checkpointIds",
      "milestoneIds",
      "lineageState",
      "createdAt",
      "evidence",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceLineage = {
  createCommerceLineage,
  readCommerceLineageShape,
};
