// CyberCrowd CyberShop
// Commerce Transaction Context Registration Model
// 
// Purpose:
// Preserve descriptive evidence that a recognized
// transaction context linkage has been registered
// within the CyberShop commerce lifecycle.
//
// Owns:
// - registration record shape
// - transaction context linkage
// - recognition linkage
// - verification linkage
// - validation linkage
// - binding linkage
// - registration evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Registration Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeRegistrationId() {
  return `transaction-context-registration.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextRegistration(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    registrationId:
      makeRegistrationId(),

    transactionContextId:
      clean.transactionContextId || null,

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

    registrationState:
      clean.registrationState || "registered",

    registrationMetadata:
      safeClone(clean.registrationMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_REGISTRATION_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_REGISTRATION_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextRegistrationShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-registration",

    stage:
      "cybershop-commerce-transaction-context-registration",

    fields: [
      "registrationId",
      "transactionContextId",
      "recognitionId",
      "verificationId",
      "validationId",
      "bindingId",
      "transactionId",
      "recordId",
      "registrationState",
      "registrationMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextRegistration = {
  createCommerceTransactionContextRegistration,
  readCommerceTransactionContextRegistrationShape,
};
