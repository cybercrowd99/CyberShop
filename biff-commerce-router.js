/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: BiffCommerceRouter
 *
 * Purpose:
 * Provide the interpretation boundary between
 * public commerce requests and internal actions.
 *
 * Responsibility:
 * Classify incoming commerce events and prepare
 * them for internal coordination.
 */

class BiffCommerceRouter {
  constructor() {
    this.events = [];
  }

  interpret(event) {
    if (!event || !event.type) {
      throw new Error("Invalid commerce event");
    }

    const decision = {
      publicEvent: event.type,
      category: event.category || "unknown",
      state: "interpreted",
      timestamp: new Date().toISOString()
    };

    this.events.push(decision);

    return decision;
  }

  listEvents() {
    return this.events;
  }
}

module.exports = BiffCommerceRouter;
