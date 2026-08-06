// CyberCrowd CyberShop
// Commerce Record Model
// 
// Purpose:
// Preserve the unified evidence reference for a commerce lifecycle.
//
// Owns:
// - record shape
// - transaction linkage
// - event linkage
// - state linkage
// - lifecycle evidence references
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
// Commerce Record Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeRecordId() {
  return `record.${Date.now()}.${Math.random()
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

export function createCommerceRecord(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    recordId:
      makeRecordId(),

    transactionId:
      clean.transactionId || null,

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

    recordType:
      clean.recordType || "commerce-record",

    state:
      clean.state || "active",

    createdAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_RECORD_CREATED",

    authorityBoundary:
      "RECORD_PRESERVES_COMMERCE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceRecordShape() {
  return {
    ok: true,

    name:
      "commerce-record",

    stage:
      "cybershop-commerce-record",

    fields: [
      "recordId",
      "transactionId",
      "eventId",
      "stateId",
      "transitionId",
      "completionId",
      "verificationId",
      "recordType",
      "state",
      "createdAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceRecord = {
  createCommerceRecord,
  readCommerceRecordShape,
};
