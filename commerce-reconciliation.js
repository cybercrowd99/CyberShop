// CyberCrowd CyberShop
// Commerce Reconciliation Model
//  
// Purpose:
// Preserve evidence that commerce records were compared
// and their lifecycle states reconciled.
//
// Owns:
// - reconciliation record shape
// - transaction linkage
// - resolution linkage
// - ledger linkage
// - settlement linkage
// - comparison evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - credit decisions
//
// Doctrine:
// Reconciliation Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeReconciliationId() {
  return `reconciliation.${Date.now()}.${Math.random()
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

export function createCommerceReconciliation(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    reconciliationId:
      makeReconciliationId(),

    transactionId:
      clean.transactionId || null,

    resolutionId:
      clean.resolutionId || null,

    ledgerEntryId:
      clean.ledgerEntryId || null,

    settlementId:
      clean.settlementId || null,

    state:
      clean.state || "matched",

    comparison:
      safeClone(clean.comparison),

    createdAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_RECONCILIATION_RECORDED",

    authorityBoundary:
      "RECONCILIATION_RECORD_COMPARES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceReconciliationShape() {
  return {
    ok: true,

    name:
      "commerce-reconciliation",

    stage:
      "cybershop-commerce-reconciliation",

    fields: [
      "reconciliationId",
      "transactionId",
      "resolutionId",
      "ledgerEntryId",
      "settlementId",
      "state",
      "comparison",
      "createdAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceReconciliation = {
  createCommerceReconciliation,
  readCommerceReconciliationShape,
};
