/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: CommerceAgreement
 *
 * Purpose:
 * Preserve accepted exchange terms
 * between participants.
 *
 * Responsibility:
 * Maintain transaction-linked agreements
 * without controlling participant relationships.
 */

class CommerceAgreement {
  constructor() {
    this.agreements = new Map();
  }

  createAgreement(entry) {
    if (!entry || !entry.id || !entry.transactionId) {
      throw new Error("Invalid commerce agreement");
    }

    if (this.agreements.has(entry.id)) {
      return this.agreements.get(entry.id);
    }

    const record = {
      id: entry.id,
      transactionId: entry.transactionId,
      state: entry.state || "accepted",
      timestamp: new Date().toISOString()
    };

    this.agreements.set(entry.id, record);

    return record;
  }

  getAgreement(id) {
    return this.agreements.get(id);
  }

  listAgreements() {
    return Array.from(this.agreements.values());
  }
}

module.exports = CommerceAgreement;
