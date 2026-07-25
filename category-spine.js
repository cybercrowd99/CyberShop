/**
 * Repository: cybercrowd-cybershop
 *
 * Module: CategorySpine
 *
 * Purpose:
 * Maintain the classification foundation
 * for CyberShop offerings.
 *
 * Responsibility:
 * Register, preserve, and organize
 * categories used by the marketplace.
 */

class CategorySpine {
  constructor() {
    this.categories = new Map();

    this.registerCategory({
      id: "other",
      name: "Other",
      state: "active"
    });
  }

  registerCategory(category) {
    if (!category || !category.id || !category.name) {
      throw new Error("Invalid category");
    }

    if (this.categories.has(category.id)) {
      return this.categories.get(category.id);
    }

    const record = {
      id: category.id,
      name: category.name,
      state: category.state || "active"
    };

    this.categories.set(category.id, record);

    return record;
  }

  getCategory(id) {
    return this.categories.get(id);
  }

  listCategories() {
    return Array.from(this.categories.values());
  }
}

module.exports = CategorySpine;
