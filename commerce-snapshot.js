// CyberCrowd CyberShop
// Commerce Snapshot Model
// 
// Purpose:
// Preserve a point-in-time evidence snapshot of a commerce lifecycle.
//
// Owns:
// - snapshot record shape
// - transaction linkage
// - record linkage
// - state linkage
// - lifecycle evidence capture
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
// Snapshot Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeSnapshotId() {
  return `snapshot.${Date.now()}.${Math.random()
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

export function createCommerceSnapshot(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    snapshotId:
      makeSnapshotId(),

    transactionId:
      clean.transactionId || null,

    recordId:
      clean.recordId || null,

    eventId:
      clean.eventId || null,

    stateId:
      clean.stateId || null,

    transitionId:
      clean.transitionId || null,

    completionId:
      clean.completionId || null,

    verificationId:
      clean.verificationId || null,

    snapshotState:
      clean.snapshotState || "captured",

    capturedAt:
      nowISO(),

    snapshot:
      safeClone(clean.snapshot),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_SNAPSHOT_CAPTURED",

    authorityBoundary:
      "SNAPSHOT_RECORD_PRESERVES_POINT_IN_TIME_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceSnapshotShape() {
  return {
    ok: true,

    name:
      "commerce-snapshot",

    stage:
      "cybershop-commerce-snapshot",

    fields: [
      "snapshotId",
      "transactionId",
      "recordId",
      "eventId",
      "stateId",
      "transitionId",
      "completionId",
      "verificationId",
      "snapshotState",
      "capturedAt",
      "snapshot",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceSnapshot = {
  createCommerceSnapshot,
  readCommerceSnapshotShape,
};
