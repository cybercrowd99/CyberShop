// CyberCrowd CyberShop
// Commerce Transaction Context Resolution Link Model
// 
// Purpose:
// Preserve descriptive linkage between transaction context
// lifecycle evidence and resolution records.
//
// Owns:
// - resolution linkage record shape
// - transaction context reference
// - reconciliation relationship reference
// - resolution evidence linkage
//
// Does NOT own:
// - dispute decisions
// - refund authority
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - credit decisions
// - identity verification
//
// Doctrine:
// Resolution Link Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeResolutionLinkId() {
  return `transaction-context-resolution-link.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextResolutionLink(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    resolutionLinkId:
      makeResolutionLinkId(),

    transactionContextId:
      clean.transactionContextId || null,

    reconciliationLinkId:
      clean.reconciliationLinkId || null,

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

    resolutionState:
      clean.resolutionState || "linked",

    resolutionMetadata:
      safeClone(clean.resolutionMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_RESOLUTION_LINK_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_RESOLUTION_LINK_PRESERVES_RELATIONSHIP_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextResolutionLinkShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-resolution-link",

    stage:
      "cybershop-commerce-transaction-context-resolution-link",

    fields: [
      "resolutionLinkId",
      "transactionContextId",
      "reconciliationLinkId",
      "ledgerLinkId",
      "ledgerEntryId",
      "ledgerRecordId",
      "recordId",
      "historyId",
      "archiveId",
      "transactionId",
      "resolutionState",
      "resolutionMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextResolutionLink = {
  createCommerceTransactionContextResolutionLink,
  readCommerceTransactionContextResolutionLinkShape,
};
