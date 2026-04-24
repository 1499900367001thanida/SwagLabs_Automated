import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  // เพิ่มสินค้า (คลิก Add to cart ตัวแรก)
  async addItem() {
    await this.page.click('.inventory_item button');
  }

  // เพิ่มหลายสินค้า (ใช้ใน TC_011)
  async addMultipleItems(count: number) {
    const buttons = this.page.locator('.inventory_item button');
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click(); // คลิกทีละรายการ
    }
  }

  // จำนวนสินค้าใน cart
  getCartCount() {
    return this.page.locator('.shopping_cart_badge');
  }

  // ลบสินค้า (หน้า Products)
  async removeItem() {
    await this.page.click('.inventory_item button'); // ปุ่มจะเปลี่ยนเป็น Remove
  }

  // ไปหน้า cart
  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}