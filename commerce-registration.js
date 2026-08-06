// CyberCrowd CyberShop
// Commerce Registration Model
// 
// Purpose:
// Preserve evidence that a commerce lifecycle record
// was registered into the commerce evidence chain.
//
// Owns:
// - registration record shape
// - certification linkage
// - validation linkage
// - confirmation linkage
// - attestation linkage
// - integrity linkage
// - lifecycle registration evidence
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
// Commerce Registration Evidence ≠ Financial Authority

function nowISO() {
  return new Date().toISOString();
}

function makeRegistrationId() {
  return `registration.${Date.now()}.${Math.random()
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

export function createCommerceRegistration(input = {}) {
  const clean = normalizeInput(input);

  return {
    ok: true,

    registrationId:
      makeRegistrationId(),

    transactionId:
      clean.transactionId || null,

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
      "COMMERCE_REGISTRATION_RECORDED",

    authorityBoundary:
      "REGISTRATION_RECORD_PRESERVES_LIFECYCLE_EVIDENCE_DOES_NOT_CONTROL_FINANCIAL_ACTIVITY",
  };
}

export function readCommerceRegistrationShape() {
  return {
    ok: true,

    name:
      "commerce-registration",

    stage:
      "cybershop-commerce-registration",

    fields: [
      "registrationId",
      "transactionId",
      "certificationId",
      "validationId",
      "confirmationId",
      "attestationId",
      "integrityId",
      "provenanceId",
      "lineageId",
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

export const CommerceRegistration = {
  createCommerceRegistration,
  readCommerceRegistrationShape,
};
