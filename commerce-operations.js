/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CommerceOperations
 *
 * Purpose:
 * Maintain the operational layer that supports
 * marketplace activity.
 *
 * Responsibility:
 * Coordinate inventory, scheduling, orders,
 * fulfillment, and customer actions.
 */

class CommerceOperations {
  constructor() {
    this.operations = new Map();
  }

  createOperation(operation) {
    if (!operation || !operation.id || !operation.type) {
      throw new Error("Invalid operation");
    }

    if (this.operations.has(operation.id)) {
      return this.operations.get(operation.id);
    }

    const record = {
      id: operation.id,
      type: operation.type,
      state: operation.state || "created",
      createdAt: new Date().toISOString()
    };

    this.operations.set(operation.id, record);

    return record;
  }

  updateOperationState(id, state) {
    const operation = this.operations.get(id);

    if (!operation) {
      throw new Error("Operation not found");
    }

    operation.state = state;

    return operation;
  }

  getOperation(id) {
    return this.operations.get(id);
  }

  listOperations() {
    return Array.from(this.operations.values());
  }
}

module.exports = CommerceOperations;
