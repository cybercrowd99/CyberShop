// CyberCrowd CyberShop
// Commerce Transaction Context Model
// 
// Purpose:
// Preserve the shared context reference for a
// CyberShop commerce lifecycle.
//
// Owns:
// - transaction context shape
// - linked record references
// - lifecycle context state
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeTransactionContextId() {
  return `transaction-context.${Date.now()}.${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function normalizeInput(input = {}) {
  if (!input || typeof input !== "object") {
    return {};
  }

  return input;
}

export function createCommerceTransactionContext(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    transactionContextId:
      makeTransactionContextId(),

    transactionId:
      clean.transactionId || null,

    recordId:
      clean.recordId || null,

    stateId:
      clean.stateId || null,

    eventId:
      clean.eventId || null,

    transitionId:
      clean.transitionId || null,

    contextState:
      clean.contextState || "created",

    createdAt:
      nowISO(),

    metadata:
      clean.metadata || null,

    authorityBoundary:
      "TRANSACTION_CONTEXT_CONNECTS_COMMERCE_RECORDS_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context",

    stage:
      "cybershop-commerce-transaction-context",

    fields: [
      "transactionContextId",
      "transactionId",
      "recordId",
      "stateId",
      "eventId",
      "transitionId",
      "contextState",
      "createdAt",
      "metadata",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContext = {
  createCommerceTransactionContext,
  readCommerceTransactionContextShape,
};
