// CyberCrowd CyberShop
// Commerce Transaction Context Validation Model
//
// Purpose:
// Preserve evidence that a transaction context
// linkage reached a validated state.
//
// Owns:
// - validation record shape
// - transaction context linkage
// - binding linkage
// - validation evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Validation Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeValidationId() {
  return `transaction-context-validation.${Date.now()}.${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function normalizeInput(input = {}) {
  if (!input || typeof input !== "object") {
    return {};
  }

  return input;
}

export function createCommerceTransactionContextValidation(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    validationId:
      makeValidationId(),

    transactionContextId:
      clean.transactionContextId || null,

    bindingId:
      clean.bindingId || null,

    transactionId:
      clean.transactionId || null,

    recordId:
      clean.recordId || null,

    validationState:
      clean.validationState || "validated",

    criteria:
      clean.criteria || null,

    evidence:
      clean.evidence || null,

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_VALIDATION_RECORDED",

    authorityBoundary:
      "VALIDATION_RECORD_PRESERVES_CONTEXT_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextValidationShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-validation",

    stage:
      "cybershop-commerce-transaction-context-validation",

    fields: [
      "validationId",
      "transactionContextId",
      "bindingId",
      "transactionId",
      "recordId",
      "validationState",
      "criteria",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextValidation = {
  createCommerceTransactionContextValidation,
  readCommerceTransactionContextValidationShape,
};
