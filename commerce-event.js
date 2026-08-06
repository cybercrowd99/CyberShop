// CyberCrowd CyberShop
// Commerce Event Model
// 
// Purpose:
// Preserve evidence of discrete commerce lifecycle events.
//
// Owns:
// - event record shape
// - transaction linkage
// - transition linkage
// - state linkage
// - lifecycle event evidence
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
// Commerce Event Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeEventId() {
  return `event.${Date.now()}.${Math.random()
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

export function createCommerceEvent(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    eventId:
      makeEventId(),

    transactionId:
      clean.transactionId || null,

    transitionId:
      clean.transitionId || null,

    stateId:
      clean.stateId || null,

    completionId:
      clean.completionId || null,

    verificationId:
      clean.verificationId || null,

    eventType:
      clean.eventType || "commerce-lifecycle-event",

    eventState:
      clean.eventState || "recorded",

    occurredAt:
      nowISO(),

    details:
      safeClone(clean.details),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_EVENT_RECORDED",

    authorityBoundary:
      "EVENT_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceEventShape() {
  return {
    ok: true,

    name:
      "commerce-event",

    stage:
      "cybershop-commerce-event",

    fields: [
      "eventId",
      "transactionId",
      "transitionId",
      "stateId",
      "completionId",
      "verificationId",
      "eventType",
      "eventState",
      "occurredAt",
      "details",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceEvent = {
  createCommerceEvent,
  readCommerceEventShape,
};
