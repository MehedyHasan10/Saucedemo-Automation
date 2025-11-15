export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstProductName = page.locator(".inventory_item_name").first();
    this.firstAddToCart = page.locator(".btn_inventory").first();
    this.cartIcon = page.locator("#shopping_cart_container");
  }

  async addFirstProduct() {
    const name = await this.firstProductName.textContent();
    await this.firstAddToCart.click();
    return name.trim();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
