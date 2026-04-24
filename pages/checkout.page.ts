import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  // กรอกข้อมูล
  async fillInfo(first: string, last: string, zip: string) {
    await this.page.fill('#first-name', first); // First Name
    await this.page.fill('#last-name', last); // Last Name
    await this.page.fill('#postal-code', zip); // Zip
  }

  // ไปหน้า overview
  async continue() {
    await this.page.click('#continue');
  }

  // finish order
  async finish() {
    await this.page.click('#finish');
  }

  // success message
  getSuccessMessage() {
    return this.page.locator('.complete-header');
  }
}