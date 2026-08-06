/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: CommerceOffer
 *
 * Purpose:
 * Represent marketplace offerings
 * inside CyberShop.
 *
 * Responsibility:
 * Maintain offer records connecting
 * categories, providers, and available
 * marketplace items.
 */

class CommerceOffer {
  constructor() {
    this.offers = new Map();
  }

  createOffer(offer) {
    if (!offer || !offer.id || !offer.name) {
      throw new Error("Invalid offer");
    }

    if (this.offers.has(offer.id)) {
      return this.offers.get(offer.id);
    }

    const record = {
      id: offer.id,
      name: offer.name,
      category: offer.category || "other",
      state: offer.state || "active",
      timestamp: new Date().toISOString()
    };

    this.offers.set(offer.id, record);

    return record;
  }

  getOffer(id) {
    return this.offers.get(id);
  }

  listOffers() {
    return Array.from(this.offers.values());
  }
}

module.exports = CommerceOffer;
