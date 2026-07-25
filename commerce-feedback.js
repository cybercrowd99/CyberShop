/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CommerceFeedback
 *
 * Purpose:
 * Preserve participant feedback connected
 * to completed exchanges.
 *
 * Responsibility:
 * Maintain transaction-linked feedback
 * without creating behavioral profiles.
 */

class CommerceFeedback {
  constructor() {
    this.feedback = new Map();
  }

  createFeedback(entry) {
    if (!entry || !entry.id || !entry.transactionId) {
      throw new Error("Invalid commerce feedback");
    }

    if (this.feedback.has(entry.id)) {
      return this.feedback.get(entry.id);
    }

    const record = {
      id: entry.id,
      transactionId: entry.transactionId,
      state: entry.state || "submitted",
      timestamp: new Date().toISOString()
    };

    this.feedback.set(entry.id, record);

    return record;
  }

  getFeedback(id) {
    return this.feedback.get(id);
  }

  listFeedback() {
    return Array.from(this.feedback.values());
  }
}

module.exports = CommerceFeedback;
