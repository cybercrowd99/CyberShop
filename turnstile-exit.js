/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: TurnstileExit
 *
 * Purpose:
 * Provide the exit boundary between
 * completed commerce activity and
 * external session closure.
 *
 * Responsibility:
 * Record approved exits and maintain
 * a clean boundary after commerce flow.
 */

class TurnstileExit {
  constructor() {
    this.exits = [];
  }

  exit(signal) {
    if (!signal || !signal.state) {
      throw new Error("Invalid exit signal");
    }

    const record = {
      source: signal.source || "turnstile",
      state: "exited",
      timestamp: new Date().toISOString()
    };

    this.exits.push(record);

    return record;
  }

  listExits() {
    return this.exits;
  }
}

module.exports = TurnstileExit;
