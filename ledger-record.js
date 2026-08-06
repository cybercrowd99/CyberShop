/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: LedgerRecord
 *
 * Purpose:
 * Preserve evidence of commerce events.
 *
 * Responsibility:
 * Record completed commerce actions with
 * stable identifiers, states, and timestamps.
 */

class LedgerRecord {
  constructor() {
    this.records = [];
  }

  record(event) {
    if (!event || !event.state) {
      throw new Error("Invalid ledger event");
    }

    const entry = {
      id: event.id || crypto.randomUUID(),
      type: event.type || "commerce",
      state: event.state,
      timestamp: new Date().toISOString()
    };

    this.records.push(entry);

    return entry;
  }

  listRecords() {
    return this.records;
  }
}

module.exports = LedgerRecord;
