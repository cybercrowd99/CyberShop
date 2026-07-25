// CyberCrowd CyberShop
// Commerce Archive Model
//
// Purpose:
// Preserve finalized commerce lifecycle evidence for durable reference.
//
// Owns:
// - archive record shape
// - transaction linkage
// - audit linkage
// - reconciliation linkage
// - resolution linkage
// - lifecycle preservation state
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
// Archive Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeArchiveId() {
  return `archive.${Date.now()}.${Math.random()
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

export function createCommerceArchive(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    archiveId: makeArchiveId(),

    transactionId:
      clean.transactionId || null,

    auditId:
      clean.auditId || null,

    reconciliationId:
      clean.reconciliationId || null,

    resolutionId:
      clean.resolutionId || null,

    ledgerEntryId:
      clean.ledgerEntryId || null,

    settlementId:
      clean.settlementId || null,

    state:
      clean.state || "archived",

    archivedAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_LIFECYCLE_ARCHIVED",

    authorityBoundary:
      "ARCHIVE_RECORD_PRESERVES_HISTORY_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceArchiveShape() {
  return {
    ok: true,

    name:
      "commerce-archive",

    stage:
      "cybershop-commerce-archive",

    fields: [
      "archiveId",
      "transactionId",
      "auditId",
      "reconciliationId",
      "resolutionId",
      "ledgerEntryId",
      "settlementId",
      "state",
      "archivedAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceArchive = {
  createCommerceArchive,
  readCommerceArchiveShape,
};
