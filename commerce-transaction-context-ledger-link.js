// CyberCrowd CyberShop
// Commerce Transaction Context Ledger Link Model
//
// Purpose:
// Preserve descriptive linkage between transaction context
// evidence and commerce ledger records.
//
// Owns:
// - ledger linkage record shape
// - transaction context reference
// - ledger reference relationship
// - evidence linkage
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
// Ledger Link Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeLedgerLinkId() {
  return `transaction-context-ledger-link.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextLedgerLink(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    ledgerLinkId:
      makeLedgerLinkId(),

    transactionContextId:
      clean.transactionContextId || null,

    recordId:
      clean.recordId || null,

    historyId:
      clean.historyId || null,

    archiveId:
      clean.archiveId || null,

    ledgerEntryId:
      clean.ledgerEntryId || null,

    ledgerRecordId:
      clean.ledgerRecordId || null,

    transactionId:
      clean.transactionId || null,

    linkState:
      clean.linkState || "linked",

    ledgerMetadata:
      safeClone(clean.ledgerMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_LEDGER_LINK_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_LEDGER_LINK_PRESERVES_RECORD_RELATIONSHIP_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextLedgerLinkShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-ledger-link",

    stage:
      "cybershop-commerce-transaction-context-ledger-link",

    fields: [
      "ledgerLinkId",
      "transactionContextId",
      "recordId",
      "historyId",
      "archiveId",
      "ledgerEntryId",
      "ledgerRecordId",
      "transactionId",
      "linkState",
      "ledgerMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextLedgerLink = {
  createCommerceTransactionContextLedgerLink,
  readCommerceTransactionContextLedgerLinkShape,
};
