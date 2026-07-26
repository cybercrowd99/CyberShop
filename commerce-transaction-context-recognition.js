// CyberCrowd CyberShop
// Commerce Transaction Context Recognition Model
//
// Purpose:
// Preserve descriptive evidence that a verified
// transaction context linkage has been recognized
// within the CyberShop commerce lifecycle.
//
// Owns:
// - recognition record shape
// - transaction context linkage
// - verification linkage
// - binding linkage
// - recognition evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Recognition Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeRecognitionId() {
  return `transaction-context-recognition.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextRecognition(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    recognitionId:
      makeRecognitionId(),

    transactionContextId:
      clean.transactionContextId || null,

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

    recognitionState:
      clean.recognitionState || "recognized",

    recognitionMetadata:
      safeClone(clean.recognitionMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_RECOGNITION_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_RECOGNITION_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextRecognitionShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-recognition",

    stage:
      "cybershop-commerce-transaction-context-recognition",

    fields: [
      "recognitionId",
      "transactionContextId",
      "verificationId",
      "validationId",
      "bindingId",
      "transactionId",
      "recordId",
      "recognitionState",
      "recognitionMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextRecognition = {
  createCommerceTransactionContextRecognition,
  readCommerceTransactionContextRecognitionShape,
};
