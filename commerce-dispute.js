/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CommerceDispute
 *
 * Purpose:
 * Preserve transaction-linked dispute records.
 *
 * Responsibility:
 * Record disagreement states without acting
 * as a financial authority or deciding outcomes.
 */

class CommerceDispute {
  constructor() {
    this.disputes = new Map();
  }

  createDispute(entry) {
    if (!entry || !entry.id || !entry.transactionId) {
      throw new Error("Invalid commerce dispute");
    }

    if (this.disputes.has(entry.id)) {
      return this.disputes.get(entry.id);
    }

    const record = {
      id: entry.id,
      transactionId: entry.transactionId,
      state: entry.state || "opened",
      timestamp: new Date().toISOString()
    };

    this.disputes.set(entry.id, record);

    return record;
  }

  updateDisputeState(id, state) {
    const dispute = this.disputes.get(id);

    if (!dispute) {
      throw new Error("Commerce dispute not found");
    }

    dispute.state = state;

    return dispute;
  }

  getDispute(id) {
    return this.disputes.get(id);
  }

  listDisputes() {
    return Array.from(this.disputes.values());
  }
}

module.exports = CommerceDispute;
