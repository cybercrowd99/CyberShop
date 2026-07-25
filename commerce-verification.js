// CyberCrowd CyberShop
// Commerce Verification Model
//
// Purpose:
// Preserve evidence that commerce lifecycle records
// passed a verification review.
//
// Owns:
// - verification record shape
// - transaction linkage
// - history linkage
// - archive linkage
// - audit linkage
// - verification evidence
//
// Does NOT own:
// - banking accounts
// - payment execution
// - custody of funds
// - financial authority
// - credit decisions
// - identity verification
//
// Doctrine:
// Verification Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeVerificationId() {
  return `verification.${Date.now()}.${Math.random()
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

export function createCommerceVerification(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    verificationId:
      makeVerificationId(),

    transactionId:
      clean.transactionId || null,

    historyId:
      clean.historyId || null,

    archiveId:
      clean.archiveId || null,

    auditId:
      clean.auditId || null,

    reconciliationId:
      clean.reconciliationId || null,

    resolutionId:
      clean.resolutionId || null,

    settlementId:
      clean.settlementId || null,

    ledgerEntryId:
      clean.ledgerEntryId || null,

    state:
      clean.state || "verified",

    verification:
      safeClone(clean.verification),

    createdAt:
      nowISO(),

    evidence:
      safeClone(clean.evidence),

    reason:
      clean.reason ||
      "COMMERCE_VERIFICATION_RECORDED",

    authorityBoundary:
      "VERIFICATION_RECORD_PRESERVES_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceVerificationShape() {
  return {
    ok: true,

    name:
      "commerce-verification",

    stage:
      "cybershop-commerce-verification",

    fields: [
      "verificationId",
      "transactionId",
      "historyId",
      "archiveId",
      "auditId",
      "reconciliationId",
      "resolutionId",
      "settlementId",
      "ledgerEntryId",
      "state",
      "verification",
      "createdAt",
      "evidence",
      "reason",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceVerification = {
  createCommerceVerification,
  readCommerceVerificationShape,
};
