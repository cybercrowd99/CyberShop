/**
 * Repository: cybercrowd-cybershop
 *
 * Module: RequestOfferLink
 *
 * Purpose:
 * Connect customer requests with
 * available marketplace offers.
 *
 * Responsibility:
 * Maintain explicit relationships between
 * requested needs and available solutions.
 */

class RequestOfferLink {
  constructor() {
    this.links = [];
  }

  connect(link) {
    if (!link || !link.requestId || !link.offerId) {
      throw new Error("Invalid request offer link");
    }

    const record = {
      requestId: link.requestId,
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

module.exports = RequestOfferLink;
