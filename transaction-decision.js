/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: TransactionDecision
 *
 * Purpose:
 * Represent approved decisions affecting
 * commerce transactions.
 *
 * Responsibility:
 * Maintain controlled decisions before
 * financial or operational execution.
 */

class TransactionDecision {
  constructor() {
    this.decisions = new Map();
  }

  createDecision(decision) {
    if (!decision || !decision.id || !decision.action) {
      throw new Error("Invalid transaction decision");
    }

    if (this.decisions.has(decision.id)) {
      return this.decisions.get(decision.id);
    }

    const record = {
      id: decision.id,
      action: decision.action,
      transactionId: decision.transactionId || null,
      state: decision.state || "pending",
      timestamp: new Date().toISOString()
    };

    this.decisions.set(decision.id, record);

    return record;
  }

  updateDecisionState(id, state) {
    const decision = this.decisions.get(id);

    if (!decision) {
      throw new Error("Transaction decision not found");
    }

    decision.state = state;

    return decision;
  }

  getDecision(id) {
    return this.decisions.get(id);
  }

  listDecisions() {
    return Array.from(this.decisions.values());
  }
}

module.exports = TransactionDecision;
