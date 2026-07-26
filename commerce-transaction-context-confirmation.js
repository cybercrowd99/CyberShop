// CyberCrowd CyberShop
// Commerce Transaction Context Confirmation Model
//
// Purpose:
// Preserve descriptive evidence that a certified
// transaction context linkage received confirmation
// within the CyberShop lifecycle.
//
// Owns:
// - confirmation record shape
// - transaction context linkage
// - certification linkage
// - registration linkage
// - recognition linkage
// - confirmation evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Confirmation Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeConfirmationId() {
  return `transaction-context-confirmation.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextConfirmation(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    confirmationId:
      makeConfirmationId(),

    transactionContextId:
      clean.transactionContextId || null,

    certificationId:
      clean.certificationId || null,

    registrationId:
      clean.registrationId || null,

    recognitionId:
      clean.recognitionId || null,

    verificationId:
      clean.verificationId || null,

    validationId:
      clean.validationId || null,

    bindingId:
      clean.bindingId || null,

    transactionId:
      clean.transactionId || null,

    recordId:
      clean.recordId || null,

    confirmationState:
      clean.confirmationState || "confirmed",

    confirmationMetadata:
      safeClone(clean.confirmationMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_CONFIRMATION_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_CONFIRMATION_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextConfirmationShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-confirmation",

    stage:
      "cybershop-commerce-transaction-context-confirmation",

    fields: [
      "confirmationId",
      "transactionContextId",
      "certificationId",
      "registrationId",
      "recognitionId",
      "verificationId",
      "validationId",
      "bindingId",
      "transactionId",
      "recordId",
      "confirmationState",
      "confirmationMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextConfirmation = {
  createCommerceTransactionContextConfirmation,
  readCommerceTransactionContextConfirmationShape,
};
