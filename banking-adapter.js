/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: BankingAdapter
 *
 * Purpose:
 * Provide a controlled adapter boundary
 * between external financial providers
 * and CyberShop commerce records.
 *
 * Responsibility:
 * Translate approved financial provider
 * responses into commerce-compatible
 * records.
 *
 * Does NOT own:
 * - banking accounts
 * - credit decisions
 * - lending
 * - balances
 * - financial authority
 */

class BankingAdapter {
  constructor() {
    this.records = new Map();
  }

  createRecord(entry) {
    if (!entry || !entry.id || !entry.provider) {
      throw new Error("Invalid banking adapter record");
    }

    if (this.records.has(entry.id)) {
      return this.records.get(entry.id);
    }

    const record = {
      id: entry.id,
      provider: entry.provider,
      state: entry.state || "received",
      timestamp: new Date().toISOString()
    };

    this.records.set(entry.id, record);

    return record;
  }

  getRecord(id) {
    return this.records.get(id);
  }

  listRecords() {
    return Array.from(this.records.values());
  }
}

module.exports = BankingAdapter;
