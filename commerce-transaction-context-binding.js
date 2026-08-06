// CyberCrowd CyberShop
// Commerce Transaction Context Binding Model
// 
// Purpose:
// Preserve linkage between transaction context
// and commerce lifecycle records.
//
// Owns:
// - context binding record shape
// - transaction context linkage
// - commerce record linkage
// - binding evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Context Binding Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeBindingId() {
  return `transaction-context-binding.${Date.now()}.${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function normalizeInput(input = {}) {
  if (!input || typeof input !== "object") {
    return {};
  }

  return input;
}

export function createCommerceTransactionContextBinding(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    bindingId:
      makeBindingId(),

    transactionContextId:
      clean.transactionContextId || null,

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

    bindingState:
      clean.bindingState || "linked",

    createdAt:
      nowISO(),

    evidence:
      clean.evidence || null,

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_BOUND",

    authorityBoundary:
      "CONTEXT_BINDING_PRESERVES_LINKAGE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextBindingShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-binding",

    stage:
      "cybershop-commerce-transaction-context-binding",

    fields: [
      "bindingId",
      "transactionContextId",
      "transactionId",
      "recordId",
      "stateId",
      "eventId",
      "transitionId",
      "bindingState",
      "createdAt",
      "evidence",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextBinding = {
  createCommerceTransactionContextBinding,
  readCommerceTransactionContextBindingShape,
};
