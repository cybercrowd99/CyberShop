/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CustomerAction
 *
 * Purpose:
 * Represent customer-controlled commerce
 * actions after an exchange begins.
 *
 * Responsibility:
 * Maintain explicit actions such as
 * purchase changes, cancellations,
 * returns, and requests for review.
 */

class CustomerAction {
  constructor() {
    this.actions = new Map();
  }

  createAction(action) {
    if (!action || !action.id || !action.type) {
      throw new Error("Invalid customer action");
    }

    if (this.actions.has(action.id)) {
      return this.actions.get(action.id);
    }

    const record = {
      id: action.id,
      type: action.type,
      transactionId: action.transactionId || null,
      state: action.state || "requested",
      timestamp: new Date().toISOString()
    };

    this.actions.set(action.id, record);

    return record;
  }

  updateActionState(id, state) {
    const action = this.actions.get(id);

    if (!action) {
      throw new Error("Customer action not found");
    }

    action.state = state;

    return action;
  }

  getAction(id) {
    return this.actions.get(id);
  }

  listActions() {
    return Array.from(this.actions.values());
  }
}

module.exports = CustomerAction;
