/**
 * Repository: cybercrowd-cybershop
 *
 * Module: PaymentConnector
 *
 * Purpose:
 * Provide the controlled financial execution
 * boundary for CyberShop.
 *
 * Responsibility:
 * Prepare approved transaction outcomes
 * for external payment providers.
 */

class PaymentConnector {
  constructor() {
    this.payments = [];
  }

  execute(outcome) {
    if (!outcome || !outcome.state) {
      throw new Error("Invalid payment request");
    }

    const payment = {
      outcomeId: outcome.id,
      state: "prepared",
      timestamp: new Date().toISOString()
    };

    this.payments.push(payment);

    return payment;
  }

  listPayments() {
    return this.payments;
  }
}

module.exports = PaymentConnector;
