import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {} // รับ page มาใช้งาน

  // เปิดหน้าเว็บ
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // ฟังก์ชัน login (รับค่าจาก test)
  async login(username: string, password: string) {
    await this.page.fill('#user-name', username); // กรอก username
    await this.page.fill('#password', password); // กรอก password
    await this.page.click('#login-button'); // คลิก login
  }

  // locator ของ error message
  getError() {
    return this.page.locator('[data-test="error"]');
  }
}