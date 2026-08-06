/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: TransactionSpine
 *
 * Purpose:
 * Maintain the commerce transaction backbone
 * for CyberShop.
 *
 * Responsibility:
 * Track transaction events without exposing
 * internal processing language to the public surface.
 */

class TransactionSpine {
  constructor() {
    this.transactions = new Map();
  }

  createTransaction(transaction) {
    if (!transaction || !transaction.id || !transaction.type) {
      throw new Error("Invalid transaction");
    }

    if (this.transactions.has(transaction.id)) {
      return this.transactions.get(transaction.id);
    }

    const record = {
      id: transaction.id,
      type: transaction.type,
      state: transaction.state || "created",
      createdAt: new Date().toISOString()
    };

    this.transactions.set(transaction.id, record);

    return record;
  }

  updateTransactionState(id, state) {
    const transaction = this.transactions.get(id);

    if (!transaction) {
      throw new Error("Transaction not found");
    }

    transaction.state = state;

    return transaction;
  }

  getTransaction(id) {
    return this.transactions.get(id);
  }

  listTransactions() {
    return Array.from(this.transactions.values());
  }
}

module.exports = TransactionSpine;
