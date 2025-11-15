export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartProductName = page.locator(".inventory_item_name");
  }

  async getProductName() {
    const name = await this.cartProductName.textContent();
    return name.trim();
  }
}
