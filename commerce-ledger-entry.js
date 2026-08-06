// CyberCrowd CyberShop
// Commerce Ledger Entry Model
// 
// Purpose:
// Preserve evidence relationships between commerce lifecycle events.
//
// Owns:
// - ledger entry record shape
// - transaction linkage
// - authorization linkage
// - settlement linkage
// - evidence timeline
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - credit decisions
//
// Doctrine:
// Settlement Evidence ≠ Financial Authority
// Ledger Evidence ≠ Financial Control

function nowISO() {
  return new Date().toISOString();
}

function makeLedgerEntryId() {
  return `ledger.${Date.now()}.${Math.random()
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

export function createCommerceLedgerEntry(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    ledgerEntryId: makeLedgerEntryId(),

    transactionId:
      clean.transactionId || null,

    authorizationId:
      clean.authorizationId || null,

    settlementId:
      clean.settlementId || null,

    entryType:
      clean.entryType || "commerce-evidence",

    state:
      clean.state || "recorded",

    createdAt: nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_LEDGER_EVIDENCE_RECORDED",

    authorityBoundary:
      "LEDGER_RECORD_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceLedgerEntryShape() {
  return {
    ok: true,

    name:
      "commerce-ledger-entry",

    stage:
      "cybershop-commerce-ledger",

    fields: [
      "ledgerEntryId",
      "transactionId",
      "authorizationId",
      "settlementId",
      "entryType",
      "state",
      "createdAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceLedgerEntry = {
  createCommerceLedgerEntry,
  readCommerceLedgerEntryShape,
};
