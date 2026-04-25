import { test, expect } from '@playwright/test';

// VISUAL TESTING
// ใช้ตรวจสอบ UI ด้วย screenshot comparison (visual regression)
// ครั้งแรกที่รัน จะสร้าง baseline snapshot อัตโนมัติ

// หน้า Login
test('VISUAL_TC_001 - Login Page UI', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // 📸 ถ้ายังไม่มี baseline → จะสร้างให้เองครั้งแรก
  await expect(page).toHaveScreenshot('login-page.png', {
    fullPage: true
  });
});


// หน้า Inventory
test('VISUAL_TC_002 - Inventory Page UI', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 📸 snapshot หน้า inventory
  await expect(page).toHaveScreenshot('inventory-page.png', {
    fullPage: true
  });
});