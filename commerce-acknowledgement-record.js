// CyberCrowd CyberShop
// Commerce Acknowledgement Record Model
// 
// Purpose:
// Preserve evidence that a commerce lifecycle record
// contains a durable acknowledgement record reference.
//
// Owns:
// - acknowledgement record shape
// - recognition linkage
// - acknowledgment linkage
// - registration linkage
// - certification linkage
// - validation linkage
// - confirmation linkage
// - attestation linkage
// - integrity linkage
// - lifecycle acknowledgement evidence
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
// Commerce Acknowledgement Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeAcknowledgementRecordId() {
  return `acknowledgement-record.${Date.now()}.${Math.random()
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

export function createCommerceAcknowledgementRecord(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    acknowledgementRecordId:
      makeAcknowledgementRecordId(),

    transactionId:
      clean.transactionId || null,

    recognitionId:
      clean.recognitionId || null,

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

    acknowledgementState:
      clean.acknowledgementState || "recorded",

    acknowledgementMetadata:
      safeClone(clean.acknowledgementMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_ACKNOWLEDGEMENT_RECORD_RECORDED",

    authorityBoundary:
      "ACKNOWLEDGEMENT_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceAcknowledgementRecordShape() {
  return {
    ok: true,

    name:
      "commerce-acknowledgement-record",

    stage:
      "cybershop-commerce-acknowledgement-record",

    fields: [
      "acknowledgementRecordId",
      "transactionId",
      "recognitionId",
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
      "acknowledgementState",
      "acknowledgementMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceAcknowledgementRecord = {
  createCommerceAcknowledgementRecord,
  readCommerceAcknowledgementRecordShape,
};
