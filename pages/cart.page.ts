import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  // ลบสินค้าในหน้า cart
  async removeItem() {
    await this.page.click('.cart_button');
  }

  // กด checkout
  async checkout() {
    await this.page.click('#checkout');
  }

  // locator สินค้าใน cart
  getCartItems() {
    return this.page.locator('.cart_item');
  }
}