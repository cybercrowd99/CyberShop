// CyberCrowd CyberShop
// Commerce Certification Model
//
// Purpose:
// Preserve evidence that a commerce lifecycle record
// reached a certified evidentiary state.
//
// Owns:
// - certification record shape
// - validation linkage
// - confirmation linkage
// - attestation linkage
// - integrity linkage
// - lifecycle certification evidence
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
// Commerce Certification Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeCertificationId() {
  return `certification.${Date.now()}.${Math.random()
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

export function createCommerceCertification(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    certificationId:
      makeCertificationId(),

    transactionId:
      clean.transactionId || null,

    validationId:
      clean.validationId || null,

    confirmationId:
      clean.confirmationId || null,

    attestationId:
      clean.attestationId || null,

    integrityId:
      clean.integrityId || null,

    provenanceId:
      clean.provenanceId || null,

    lineageId:
      clean.lineageId || null,

    recordId:
      clean.recordId || null,

    certificationState:
      clean.certificationState || "certified",

    criteria:
      safeClone(clean.criteria),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_CERTIFICATION_RECORDED",

    authorityBoundary:
      "CERTIFICATION_RECORD_PRESERVES_LIFECYCLE_CERTIFICATION_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceCertificationShape() {
  return {
    ok: true,

    name:
      "commerce-certification",

    stage:
      "cybershop-commerce-certification",

    fields: [
      "certificationId",
      "transactionId",
      "validationId",
      "confirmationId",
      "attestationId",
      "integrityId",
      "provenanceId",
      "lineageId",
      "recordId",
      "certificationState",
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

export const CommerceCertification = {
  createCommerceCertification,
  readCommerceCertificationShape,
};
