// CyberCrowd CyberShop
// Commerce Audit Model
// 
// Purpose:
// Preserve evidence that commerce lifecycle events were reviewed
// and recorded across the commerce chain.
//
// Owns:
// - audit record shape
// - transaction linkage
// - reconciliation linkage
// - resolution linkage
// - lifecycle review evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - credit decisions
// - dispute decisions
//
// Doctrine:
// Audit Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeAuditId() {
  return `audit.${Date.now()}.${Math.random()
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

export function createCommerceAudit(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    auditId: makeAuditId(),

    transactionId:
      clean.transactionId || null,

    reconciliationId:
      clean.reconciliationId || null,

    resolutionId:
      clean.resolutionId || null,

    ledgerEntryId:
      clean.ledgerEntryId || null,

    settlementId:
      clean.settlementId || null,

    state:
      clean.state || "recorded",

    review:
      safeClone(clean.review),

    createdAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_AUDIT_RECORD_CREATED",

    authorityBoundary:
      "AUDIT_RECORD_PRESERVES_COMMERCE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceAuditShape() {
  return {
    ok: true,

    name:
      "commerce-audit",

    stage:
      "cybershop-commerce-audit",

    fields: [
      "auditId",
      "transactionId",
      "reconciliationId",
      "resolutionId",
      "ledgerEntryId",
      "settlementId",
      "state",
      "review",
      "createdAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceAudit = {
  createCommerceAudit,
  readCommerceAuditShape,
};
