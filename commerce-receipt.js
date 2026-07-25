/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CommerceReceipt
 *
 * Purpose:
 * Preserve completed commerce references
 * for participants.
 *
 * Responsibility:
 * Maintain stable receipt records
 * connected to completed exchanges.
 */

class CommerceReceipt {
  constructor() {
    this.receipts = new Map();
  }

  createReceipt(receipt) {
    if (!receipt || !receipt.id || !receipt.transactionId) {
      throw new Error("Invalid commerce receipt");
    }

    if (this.receipts.has(receipt.id)) {
      return this.receipts.get(receipt.id);
    }

    const record = {
      id: receipt.id,
      transactionId: receipt.transactionId,
      status: receipt.status || "completed",
      timestamp: new Date().toISOString()
    };

    this.receipts.set(receipt.id, record);

    return record;
  }

  getReceipt(id) {
    return this.receipts.get(id);
  }

  listReceipts() {
    return Array.from(this.receipts.values());
  }
}

module.exports = CommerceReceipt;
