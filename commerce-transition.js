// CyberCrowd CyberShop
// Commerce Transition Model
//
// Purpose:
// Preserve evidence of lifecycle state movement
// from one commerce state to another.
//
// Owns:
// - transition record shape
// - previous state reference
// - next state reference
// - lifecycle movement evidence
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
// Transition Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeTransitionId() {
  return `transition.${Date.now()}.${Math.random()
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

export function createCommerceTransition(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    transitionId:
      makeTransitionId(),

    transactionId:
      clean.transactionId || null,

    stateId:
      clean.stateId || null,

    fromState:
      clean.fromState || null,

    toState:
      clean.toState || null,

    completionId:
      clean.completionId || null,

    verificationId:
      clean.verificationId || null,

    settlementId:
      clean.settlementId || null,

    transitionedAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_STATE_TRANSITION_RECORDED",

    authorityBoundary:
      "TRANSITION_RECORD_PRESERVES_STATE_MOVEMENT_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransitionShape() {
  return {
    ok: true,

    name:
      "commerce-transition",

    stage:
      "cybershop-commerce-transition",

    fields: [
      "transitionId",
      "transactionId",
      "stateId",
      "fromState",
      "toState",
      "completionId",
      "verificationId",
      "settlementId",
      "transitionedAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransition = {
  createCommerceTransition,
  readCommerceTransitionShape,
};
