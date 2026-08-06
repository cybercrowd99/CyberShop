// CyberCrowd CyberShop
// Commerce State Model
// 
// Purpose:
// Preserve the current lifecycle state of a commerce record.
//
// Owns:
// - state record shape
// - transaction linkage
// - completion linkage
// - verification linkage
// - lifecycle state evidence
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
// Commerce State Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeStateId() {
  return `state.${Date.now()}.${Math.random()
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

export function createCommerceState(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    stateId:
      makeStateId(),

    transactionId:
      clean.transactionId || null,

    completionId:
      clean.completionId || null,

    verificationId:
      clean.verificationId || null,

    resolutionId:
      clean.resolutionId || null,

    settlementId:
      clean.settlementId || null,

    state:
      clean.state || "active",

    updatedAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_STATE_RECORDED",

    authorityBoundary:
      "STATE_RECORD_PRESERVES_LIFECYCLE_STATUS_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceStateShape() {
  return {
    ok: true,

    name:
      "commerce-state",

    stage:
      "cybershop-commerce-state",

    fields: [
      "stateId",
      "transactionId",
      "completionId",
      "verificationId",
      "resolutionId",
      "settlementId",
      "state",
      "updatedAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceState = {
  createCommerceState,
  readCommerceStateShape,
};
