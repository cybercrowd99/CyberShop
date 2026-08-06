// CyberCrowd CyberShop
// Commerce Transaction Context Certification Model
// 
// Purpose:
// Preserve descriptive evidence that a registered
// transaction context linkage reached a certified state.
//
// Owns:
// - certification record shape
// - transaction context linkage
// - registration linkage
// - recognition linkage
// - verification linkage
// - certification evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - identity verification
//
// Doctrine:
// Transaction Context Certification Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeCertificationId() {
  return `transaction-context-certification.${Date.now()}.${Math.random()
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

export function createCommerceTransactionContextCertification(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    certificationId:
      makeCertificationId(),

    transactionContextId:
      clean.transactionContextId || null,

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

    certificationState:
      clean.certificationState || "certified",

    certificationMetadata:
      safeClone(clean.certificationMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "TRANSACTION_CONTEXT_CERTIFICATION_RECORDED",

    authorityBoundary:
      "TRANSACTION_CONTEXT_CERTIFICATION_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceTransactionContextCertificationShape() {
  return {
    ok: true,

    name:
      "commerce-transaction-context-certification",

    stage:
      "cybershop-commerce-transaction-context-certification",

    fields: [
      "certificationId",
      "transactionContextId",
      "registrationId",
      "recognitionId",
      "verificationId",
      "validationId",
      "bindingId",
      "transactionId",
      "recordId",
      "certificationState",
      "certificationMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceTransactionContextCertification = {
  createCommerceTransactionContextCertification,
  readCommerceTransactionContextCertificationShape,
};
