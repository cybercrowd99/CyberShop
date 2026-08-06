// CyberCrowd CyberShop
// Commerce Completion Model
// 
// Purpose:
// Preserve evidence that a commerce lifecycle reached
// a completed terminal state.
//
// Owns:
// - completion record shape
// - transaction linkage
// - verification linkage
// - history linkage
// - final lifecycle evidence
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
// Completion Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeCompletionId() {
  return `completion.${Date.now()}.${Math.random()
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

export function createCommerceCompletion(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    completionId:
      makeCompletionId(),

    transactionId:
      clean.transactionId || null,

    verificationId:
      clean.verificationId || null,

    historyId:
      clean.historyId || null,

    archiveId:
      clean.archiveId || null,

    resolutionId:
      clean.resolutionId || null,

    settlementId:
      clean.settlementId || null,

    state:
      clean.state || "completed",

    completedAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_COMPLETION_RECORDED",

    authorityBoundary:
      "COMPLETION_RECORD_PRESERVES_LIFECYCLE_STATE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceCompletionShape() {
  return {
    ok: true,

    name:
      "commerce-completion",

    stage:
      "cybershop-commerce-completion",

    fields: [
      "completionId",
      "transactionId",
      "verificationId",
      "historyId",
      "archiveId",
      "resolutionId",
      "settlementId",
      "state",
      "completedAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceCompletion = {
  createCommerceCompletion,
  readCommerceCompletionShape,
};
