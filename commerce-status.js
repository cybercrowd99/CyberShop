/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CommerceStatus
 *
 * Purpose:
 * Provide a clean commerce state layer
 * for marketplace progress.
 *
 * Responsibility:
 * Translate internal commerce states
 * into stable exchange status records.
 */

class CommerceStatus {
  constructor() {
    this.statuses = new Map();
  }

  createStatus(status) {
    if (!status || !status.id || !status.transactionId) {
      throw new Error("Invalid commerce status");
    }

    if (this.statuses.has(status.id)) {
      return this.statuses.get(status.id);
    }

    const record = {
      id: status.id,
      transactionId: status.transactionId,
      state: status.state || "pending",
      timestamp: new Date().toISOString()
    };

    this.statuses.set(status.id, record);

    return record;
  }

  updateStatus(id, state) {
    const status = this.statuses.get(id);

    if (!status) {
      throw new Error("Commerce status not found");
    }

    status.state = state;

    return status;
  }

  getStatus(id) {
    return this.statuses.get(id);
  }

  listStatuses() {
    return Array.from(this.statuses.values());
  }
}

module.exports = CommerceStatus;
