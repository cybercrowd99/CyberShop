/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CommerceEventIntake
 *
 * Purpose:
 * Receive public-facing commerce events
 * before interpretation by Biff.
 *
 * Responsibility:
 * Validate incoming events and preserve
 * a clean boundary between public actions
 * and internal commerce processing.
 */

class CommerceEventIntake {
  constructor() {
    this.events = [];
  }

  receive(event) {
    if (!event || !event.type) {
      throw new Error("Invalid commerce event");
    }

    const record = {
      type: event.type,
      source: event.source || "public",
      state: "received",
      timestamp: new Date().toISOString()
    };

    this.events.push(record);

    return record;
  }

  listEvents() {
    return this.events;
  }
}

module.exports = CommerceEventIntake;
