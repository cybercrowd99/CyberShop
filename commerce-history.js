// CyberCrowd CyberShop
// Commerce History Model
// 
// Purpose:
// Preserve the chronological lifecycle history of commerce events.
//
// Owns:
// - history record shape
// - transaction linkage
// - archive linkage
// - audit linkage
// - lifecycle timeline evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - credit decisions
// - participant relationships
//
// Doctrine:
// Commerce History Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeHistoryId() {
  return `history.${Date.now()}.${Math.random()
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

export function createCommerceHistory(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    historyId: makeHistoryId(),

    transactionId:
      clean.transactionId || null,

    archiveId:
      clean.archiveId || null,

    auditId:
      clean.auditId || null,

    reconciliationId:
      clean.reconciliationId || null,

    resolutionId:
      clean.resolutionId || null,

    settlementId:
      clean.settlementId || null,

    ledgerEntryId:
      clean.ledgerEntryId || null,

    event:
      clean.event || "commerce-lifecycle-event",

    state:
      clean.state || "recorded",

    timeline:
      safeClone(clean.timeline),

    createdAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_HISTORY_RECORD_CREATED",

    authorityBoundary:
      "HISTORY_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceHistoryShape() {
  return {
    ok: true,

    name:
      "commerce-history",

    stage:
      "cybershop-commerce-history",

    fields: [
      "historyId",
      "transactionId",
      "archiveId",
      "auditId",
      "reconciliationId",
      "resolutionId",
      "settlementId",
      "ledgerEntryId",
      "event",
      "state",
      "timeline",
      "createdAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceHistory = {
  createCommerceHistory,
  readCommerceHistoryShape,
};
