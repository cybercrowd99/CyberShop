// CyberCrowd CyberShop
// Commerce Milestone Model
// 
// Purpose:
// Preserve significant lifecycle milestone evidence
// within a commerce chain.
//
// Owns:
// - milestone record shape
// - transaction linkage
// - checkpoint linkage
// - snapshot linkage
// - lifecycle significance evidence
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
// Milestone Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeMilestoneId() {
  return `milestone.${Date.now()}.${Math.random()
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

export function createCommerceMilestone(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    milestoneId:
      makeMilestoneId(),

    transactionId:
      clean.transactionId || null,

    checkpointId:
      clean.checkpointId || null,

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

    milestoneType:
      clean.milestoneType || "commerce-lifecycle-milestone",

    milestoneState:
      clean.milestoneState || "recorded",

    createdAt:
      nowISO(),

    significance:
      safeClone(clean.significance),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_MILESTONE_RECORDED",

    authorityBoundary:
      "MILESTONE_RECORD_PRESERVES_LIFECYCLE_SIGNIFICANCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceMilestoneShape() {
  return {
    ok: true,

    name:
      "commerce-milestone",

    stage:
      "cybershop-commerce-milestone",

    fields: [
      "milestoneId",
      "transactionId",
      "checkpointId",
      "snapshotId",
      "recordId",
      "stateId",
      "transitionId",
      "eventId",
      "milestoneType",
      "milestoneState",
      "createdAt",
      "significance",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceMilestone = {
  createCommerceMilestone,
  readCommerceMilestoneShape,
};
