// CyberCrowd CyberShop
// Commerce Recognition Model
// 
// Purpose:
// Preserve evidence that a commerce lifecycle record
// received a recorded recognition marker.
//
// Owns:
// - recognition record shape
// - acknowledgment linkage
// - registration linkage
// - certification linkage
// - validation linkage
// - confirmation linkage
// - attestation linkage
// - lifecycle recognition evidence
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
// Commerce Recognition Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeRecognitionId() {
  return `recognition.${Date.now()}.${Math.random()
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

export function createCommerceRecognition(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    recognitionId:
      makeRecognitionId(),

    transactionId:
      clean.transactionId || null,

    acknowledgmentId:
      clean.acknowledgmentId || null,

    registrationId:
      clean.registrationId || null,

    certificationId:
      clean.certificationId || null,

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
      "COMMERCE_RECOGNITION_RECORDED",

    authorityBoundary:
      "RECOGNITION_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceRecognitionShape() {
  return {
    ok: true,

    name:
      "commerce-recognition",

    stage:
      "cybershop-commerce-recognition",

    fields: [
      "recognitionId",
      "transactionId",
      "acknowledgmentId",
      "registrationId",
      "certificationId",
      "validationId",
      "confirmationId",
      "attestationId",
      "integrityId",
      "provenanceId",
      "lineageId",
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

export const CommerceRecognition = {
  createCommerceRecognition,
  readCommerceRecognitionShape,
};
