/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CommerceAuthorization
 *
 * Purpose:
 * Preserve transaction-linked authorization records.
 *
 * Responsibility:
 * Maintain explicit authorization states
 * for commerce actions without owning
 * identity, banking, or financial authority.
 *
 * Does NOT own:
 * - identity verification
 * - credit decisions
 * - payment execution
 * - participant relationships
 */

class CommerceAuthorization {
  constructor() {
    this.authorizations = new Map();
  }

  createAuthorization(entry) {
    if (!entry || !entry.id || !entry.transactionId) {
      throw new Error("Invalid commerce authorization");
    }

    if (this.authorizations.has(entry.id)) {
      return this.authorizations.get(entry.id);
    }

    const record = {
      id: entry.id,
      transactionId: entry.transactionId,
      state: entry.state || "authorized",
      timestamp: new Date().toISOString()
    };

    this.authorizations.set(entry.id, record);

    return record;
  }

  getAuthorization(id) {
    return this.authorizations.get(id);
  }

  listAuthorizations() {
    return Array.from(this.authorizations.values());
  }
}

module.exports = CommerceAuthorization;
