// CyberCrowd CyberShop
// Commerce Transaction Context Reconciliation Link Model
// 
// Purpose:
// Preserve descriptive linkage between transaction context
// lifecycle evidence and reconciliation records.
//
// Owns:
// - reconciliation linkage record shape
// - transaction context reference
// - ledger relationship reference
// - reconciliation evidence linkage
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
// Reconciliation Link Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeReconciliationLinkId() {
  return `transaction-context-reconciliation-link.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextReconciliationLink(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    reconciliationLinkId:
      makeReconciliationLinkId(),

    transactionContextId:
      clean.transactionContextId || null,

    ledgerLinkId:
      clean.ledgerLinkId || null,

    ledgerEntryId:
      clean.ledgerEntryId || null,

    ledgerRecordId:
      clean.ledgerRecordId || null,

    recordId:
      clean.recordId || null,

    historyId:
      clean.historyId || null,

    archiveId:
      clean.archiveId || null,

    transactionId:
      clean.transactionId || null,

    reconciliationState:
      clean.reconciliationState || "linked",

    reconciliationMetadata:
      safeClone(clean.reconciliationMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_RECONCILIATION_LINK_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_RECONCILIATION_LINK_PRESERVES_RELATIONSHIP_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextReconciliationLinkShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-reconciliation-link",

    stage:
      "cybershop-commerce-transaction-context-reconciliation-link",

    fields: [
      "reconciliationLinkId",
      "transactionContextId",
      "ledgerLinkId",
      "ledgerEntryId",
      "ledgerRecordId",
      "recordId",
      "historyId",
      "archiveId",
      "transactionId",
      "reconciliationState",
      "reconciliationMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextReconciliationLink = {
  createCommerceTransactionContextReconciliationLink,
  readCommerceTransactionContextReconciliationLinkShape,
};
