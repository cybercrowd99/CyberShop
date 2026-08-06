// CyberCrowd CyberShop
// Commerce Checkpoint Model
// 
// Purpose:
// Preserve verified lifecycle checkpoints inside a commerce chain.
//
// Owns:
// - checkpoint record shape
// - transaction linkage
// - snapshot linkage
// - state linkage
// - evidence capture
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
// Checkpoint Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeCheckpointId() {
  return `checkpoint.${Date.now()}.${Math.random()
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

export function createCommerceCheckpoint(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    checkpointId:
      makeCheckpointId(),

    transactionId:
      clean.transactionId || null,

    snapshotId:
      clean.snapshotId || null,

    recordId:
      clean.recordId || null,

    stateId:
      clean.stateId || null,

    transitionId:
      clean.transitionId || null,

    eventId:
      clean.eventId || null,

    checkpointState:
      clean.checkpointState || "captured",

    createdAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_CHECKPOINT_RECORDED",

    authorityBoundary:
      "CHECKPOINT_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceCheckpointShape() {
  return {
    ok: true,

    name:
      "commerce-checkpoint",

    stage:
      "cybershop-commerce-checkpoint",

    fields: [
      "checkpointId",
      "transactionId",
      "snapshotId",
      "recordId",
      "stateId",
      "transitionId",
      "eventId",
      "checkpointState",
      "createdAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceCheckpoint = {
  createCommerceCheckpoint,
  readCommerceCheckpointShape,
};
