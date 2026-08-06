/**
 * Repository: cybercrowd-cybershop
 * 
 * Module: ProviderConnector
 *
 * Purpose:
 * Provide a controlled connection point
 * between CyberShop actions and external providers.
 *
 * Responsibility:
 * Receive coordinated actions and prepare
 * provider execution requests.
 */

class ProviderConnector {
  constructor() {
    this.requests = [];
  }

  execute(action) {
    if (!action || !action.route) {
      throw new Error("Invalid provider action");
    }

    const request = {
      route: action.route,
      state: "prepared",
      timestamp: new Date().toISOString()
    };

    this.requests.push(request);

    return request;
  }

  listRequests() {
    return this.requests;
  }
}

module.exports = ProviderConnector;
