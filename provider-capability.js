/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: ProviderCapability
 *
 * Purpose:
 * Represent verified capability available
 * for marketplace participation.
 *
 * Responsibility:
 * Maintain capability records that connect
 * participants with offers and services
 * without creating behavioral profiles.
 */

class ProviderCapability {
  constructor() {
    this.capabilities = new Map();
  }

  registerCapability(capability) {
    if (!capability || !capability.id || !capability.name) {
      throw new Error("Invalid capability");
    }

    if (this.capabilities.has(capability.id)) {
      return this.capabilities.get(capability.id);
    }

    const record = {
      id: capability.id,
      name: capability.name,
      category: capability.category || "other",
      verificationState: capability.verificationState || "pending",
      timestamp: new Date().toISOString()
    };

    this.capabilities.set(capability.id, record);

    return record;
  }

  getCapability(id) {
    return this.capabilities.get(id);
  }

  listCapabilities() {
    return Array.from(this.capabilities.values());
  }
}

module.exports = ProviderCapability;
