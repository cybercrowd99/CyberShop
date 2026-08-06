// CyberCrowd CyberShop
// Commerce Resolution Model
// 
// Purpose:
// Preserve the final resolved state of a commerce lifecycle.
//
// Owns:
// - resolution record shape
// - transaction linkage
// - settlement linkage
// - ledger linkage
// - final lifecycle state evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - dispute authority
// - credit decisions
//
// Doctrine:
// Resolution Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeResolutionId() {
  return `resolution.${Date.now()}.${Math.random()
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

export function createCommerceResolution(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    resolutionId: makeResolutionId(),

    transactionId:
      clean.transactionId || null,

    settlementId:
      clean.settlementId || null,

    ledgerEntryId:
      clean.ledgerEntryId || null,

    state:
      clean.state || "resolved",

    createdAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_RESOLUTION_RECORDED",

    authorityBoundary:
      "RESOLUTION_RECORD_PRESERVES_FINAL_STATE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceResolutionShape() {
  return {
    ok: true,

    name:
      "commerce-resolution",

    stage:
      "cybershop-commerce-resolution",

    fields: [
      "resolutionId",
      "transactionId",
      "settlementId",
      "ledgerEntryId",
      "state",
      "createdAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceResolution = {
  createCommerceResolution,
  readCommerceResolutionShape,
};
