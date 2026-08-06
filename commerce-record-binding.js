// CyberCrowd CyberShop
// Commerce Record Binding Model
// 
// Purpose:
// Preserve evidence that commerce lifecycle records
// maintain linked references across the commerce evidence chain.
//
// Owns:
// - binding record shape
// - transaction linkage
// - record linkage
// - event linkage
// - state linkage
// - transition linkage
// - completion linkage
// - verification linkage
// - certification linkage
// - acknowledgement linkage
// - lifecycle binding evidence
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
// Commerce Binding Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeBindingId() {
  return `binding.${Date.now()}.${Math.random()
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

export function createCommerceRecordBinding(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    bindingId:
      makeBindingId(),

    transactionId:
      clean.transactionId || null,

    recordId:
      clean.recordId || null,

    eventId:
      clean.eventId || null,

    stateId:
      clean.stateId || null,

    transitionId:
      clean.transitionId || null,

    completionId:
      clean.completionId || null,

    verificationId:
      clean.verificationId || null,

    certificationId:
      clean.certificationId || null,

    registrationId:
      clean.registrationId || null,

    acknowledgementRecordId:
      clean.acknowledgementRecordId || null,

    recognitionId:
      clean.recognitionId || null,

    lineageId:
      clean.lineageId || null,

    provenanceId:
      clean.provenanceId || null,

    bindingState:
      clean.bindingState || "bound",

    bindingMetadata:
      safeClone(clean.bindingMetadata),

    evidence:
      safeClone(clean.evidence),

    createdAt:
      nowISO(),

    reason:
      clean.reason ||
      "COMMERCE_RECORD_BINDING_RECORDED",

    authorityBoundary:
      "RECORD_BINDING_PRESERVES_LIFECYCLE_RELATIONSHIPS_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceRecordBindingShape() {
  return {
    ok: true,

    name:
      "commerce-record-binding",

    stage:
      "cybershop-commerce-record-binding",

    fields: [
      "bindingId",
      "transactionId",
      "recordId",
      "eventId",
      "stateId",
      "transitionId",
      "completionId",
      "verificationId",
      "certificationId",
      "registrationId",
      "acknowledgementRecordId",
      "recognitionId",
      "lineageId",
      "provenanceId",
      "bindingState",
      "bindingMetadata",
      "evidence",
      "createdAt",
      "reason",
      "authorityBoundary",
    ],

    boundary:
      "EVIDENCE_NOT_FINANCIAL_AUTHORITY",
  };
}

export const CommerceRecordBinding = {
  createCommerceRecordBinding,
  readCommerceRecordBindingShape,
};
