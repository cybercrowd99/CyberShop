// CyberCrowd CyberShop
// Commerce Settlement Model
//
// Purpose:
// Preserve settlement state after authorized commerce activity.
//
// Owns:
// - settlement record shape
// - authorization linkage
// - transaction linkage
// - settlement lifecycle evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - payment provider authority
// - credit decisions
// - financial custody
//
// Doctrine:
// Settlement evidence ≠ financial authority

function nowISO() {
  return new Date().toISOString();
}

function makeSettlementId() {
  return `settlement.${Date.now()}.${Math.random()
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

export function createCommerceSettlement(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    settlementId: makeSettlementId(),

    transactionId: clean.transactionId || null,

    authorizationId: clean.authorizationId || null,

    state: clean.state || "pending",

    createdAt: nowISO(),

    updatedAt: nowISO(),

    providerReference:
      clean.providerReference || null,

    evidence: safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_SETTLEMENT_RECORD_CREATED",

    authorityBoundary:
      "SETTLEMENT_RECORD_PRESERVES_EXCHANGE_STATE_DOES_NOT_EXECUTE_FUNDS",
  };
}

export function updateCommerceSettlement(
  settlement = {},
  state = "updated"
) {
  return {
    ...safeClone(settlement),

    state,

    updatedAt: nowISO(),

    updateReason:
      "COMMERCE_SETTLEMENT_STATE_UPDATED",
  };
}

export function readCommerceSettlementShape() {
  return {
    ok: true,

    name: "commerce-settlement",

    stage: "cybershop-commerce-settlement",

    fields: [
      "settlementId",
      "transactionId",
      "authorizationId",
      "state",
      "createdAt",
      "updatedAt",
      "providerReference",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_EXECUTION",
  };
}

export const CommerceSettlement = {
  createCommerceSettlement,
  updateCommerceSettlement,
  readCommerceSettlementShape,
};
