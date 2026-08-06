/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: CapabilityOfferLink
 *
 * Purpose:
 * Connect verified capabilities with
 * marketplace offers.
 *
 * Responsibility:
 * Maintain explicit relationships between
 * what can be provided and what is offered.
 */

class CapabilityOfferLink {
  constructor() {
    this.links = [];
  }

  connect(link) {
    if (!link || !link.capabilityId || !link.offerId) {
      throw new Error("Invalid capability offer link");
    }

    const record = {
      capabilityId: link.capabilityId,
      offerId: link.offerId,
      state: "connected",
      timestamp: new Date().toISOString()
    };

    this.links.push(record);

    return record;
  }

  listLinks() {
    return this.links;
  }
}

module.exports = CapabilityOfferLink;
