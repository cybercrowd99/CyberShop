/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: TurnstileEntry
 *
 * Purpose:
 * Provide the entry boundary between
 * verified access signals and CyberShop.
 *
 * Responsibility:
 * Receive approved entry signals and create
 * a controlled commerce session boundary.
 */

class TurnstileEntry {
  constructor() {
    this.entries = [];
  }

  enter(signal) {
    if (!signal || !signal.state) {
      throw new Error("Invalid entry signal");
    }

    if (signal.state !== "allowed") {
      throw new Error("Entry denied");
    }

    const entry = {
      source: signal.source || "turnstile",
      state: "entered",
      timestamp: new Date().toISOString()
    };

    this.entries.push(entry);

    return entry;
  }

  listEntries() {
    return this.entries;
  }
}

module.exports = TurnstileEntry;
