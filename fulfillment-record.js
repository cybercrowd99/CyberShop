/**
 * Repository: cybercrowd-cybershop
 *
 * Module: FulfillmentRecord
 *
 * Purpose:
 * Preserve fulfillment progress for
 * completed marketplace exchanges.
 *
 * Responsibility:
 * Track explicit fulfillment states
 * between transaction activity and
 * permanent commerce evidence.
 */

class FulfillmentRecord {
  constructor() {
    this.fulfillments = new Map();
  }

  createFulfillment(record) {
    if (!record || !record.id || !record.transactionId) {
      throw new Error("Invalid fulfillment record");
    }

    if (this.fulfillments.has(record.id)) {
      return this.fulfillments.get(record.id);
    }

    const entry = {
      id: record.id,
      transactionId: record.transactionId,
      state: record.state || "pending",
      timestamp: new Date().toISOString()
    };

    this.fulfillments.set(record.id, entry);

    return entry;
  }

  updateFulfillmentState(id, state) {
    const fulfillment = this.fulfillments.get(id);

    if (!fulfillment) {
      throw new Error("Fulfillment not found");
    }

    fulfillment.state = state;

    return fulfillment;
  }

  getFulfillment(id) {
    return this.fulfillments.get(id);
  }

  listFulfillments() {
    return Array.from(this.fulfillments.values());
  }
}

module.exports = FulfillmentRecord;
