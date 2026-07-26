// CyberCrowd CyberShop
// Commerce Transaction Context Verification Model
//
// Purpose:
// Preserve descriptive evidence that a validated
// transaction context linkage reached a verified state.
//
// Owns:
// - verification record shape
// - transaction context linkage
// - validation linkage
// - binding linkage
// - verification evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Verification Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeVerificationId() {
  return `transaction-context-verification.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextVerification(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    verificationId:
      makeVerificationId(),

    transactionContextId:
      clean.transactionContextId || null,

    validationId:
      clean.validationId || null,

    bindingId:
      clean.bindingId || null,

    transactionId:
      clean.transactionId || null,

    recordId:
      clean.recordId || null,

    verificationState:
      clean.verificationState || "verified",

    verificationMetadata:
      safeClone(clean.verificationMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_VERIFICATION_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_VERIFICATION_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextVerificationShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-verification",

    stage:
      "cybershop-commerce-transaction-context-verification",

    fields: [
      "verificationId",
      "transactionContextId",
      "validationId",
      "bindingId",
      "transactionId",
      "recordId",
      "verificationState",
      "verificationMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextVerification = {
  createCommerceTransactionContextVerification,
  readCommerceTransactionContextVerificationShape,
};
