/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: TransactionOutcome
 *
 * Purpose:
 * Preserve the result of commerce decisions.
 *
 * Responsibility:
 * Record final decision outcomes before
 * and after execution steps.
 */

class TransactionOutcome {
  constructor() {
    this.outcomes = new Map();
  }

  createOutcome(outcome) {
    if (!outcome || !outcome.id || !outcome.decisionId) {
      throw new Error("Invalid transaction outcome");
    }

    if (this.outcomes.has(outcome.id)) {
      return this.outcomes.get(outcome.id);
    }

    const record = {
      id: outcome.id,
      decisionId: outcome.decisionId,
      state: outcome.state || "pending",
      timestamp: new Date().toISOString()
    };

    this.outcomes.set(outcome.id, record);

    return record;
  }

  updateOutcomeState(id, state) {
    const outcome = this.outcomes.get(id);

    if (!outcome) {
      throw new Error("Transaction outcome not found");
    }

    outcome.state = state;

    return outcome;
  }

  getOutcome(id) {
    return this.outcomes.get(id);
  }

  listOutcomes() {
    return Array.from(this.outcomes.values());
  }
}

module.exports = TransactionOutcome;
