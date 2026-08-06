/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: CustomerRequest
 *
 * Purpose:
 * Represent a customer-requested
 * marketplace need.
 *
 * Responsibility:
 * Maintain explicit requests that can
 * connect to available offers.
 */

class CustomerRequest {
  constructor() {
    this.requests = new Map();
  }

  createRequest(request) {
    if (!request || !request.id || !request.type) {
      throw new Error("Invalid request");
    }

    if (this.requests.has(request.id)) {
      return this.requests.get(request.id);
    }

    const record = {
      id: request.id,
      type: request.type,
      state: request.state || "open",
      timestamp: new Date().toISOString()
    };

    this.requests.set(request.id, record);

    return record;
  }

  getRequest(id) {
    return this.requests.get(id);
  }

  listRequests() {
    return Array.from(this.requests.values());
  }
}

module.exports = CustomerRequest;
