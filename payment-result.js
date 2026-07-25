/**
 * Repository: cybercrowd-cybershop
 *
 * Module: PaymentResult
 *
 * Purpose:
 * Preserve responses returned from
 * financial execution.
 *
 * Responsibility:
 * Record external payment outcomes
 * after connector execution.
 */

class PaymentResult {
  constructor() {
    this.results = new Map();
  }

  createResult(result) {
    if (!result || !result.id || !result.paymentId) {
      throw new Error("Invalid payment result");
    }

    if (this.results.has(result.id)) {
      return this.results.get(result.id);
    }

    const record = {
      id: result.id,
      paymentId: result.paymentId,
      state: result.state || "pending",
      timestamp: new Date().toISOString()
    };

    this.results.set(result.id, record);

    return record;
  }

  updateResultState(id, state) {
    const result = this.results.get(id);

    if (!result) {
      throw new Error("Payment result not found");
    }

    result.state = state;

    return result;
  }

  getResult(id) {
    return this.results.get(id);
  }

  listResults() {
    return Array.from(this.results.values());
  }
}

module.exports = PaymentResult;
