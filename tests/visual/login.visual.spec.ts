import { test, expect } from '@playwright/test';

// 👁️ VISUAL TESTING
// ใช้ตรวจสอบ UI ด้วย screenshot comparison (Visual Regression Testing)

const baseUrl = 'https://www.saucedemo.com/';

// =========================
// 🔑 LOGIN PAGE
// =========================
test('VISUAL_TC_001 - Login Page UI', async ({ page }) => {

  // 📏 fix viewport ให้เหมือนกันทุก environment (สำคัญมาก)
  await page.setViewportSize({ width: 1280, height: 720 });

  await page.goto(baseUrl);

  // ⏳ รอ page โหลดนิ่ง
  await page.waitForLoadState('networkidle');

  // 📴 ปิด animation ลด pixel diff
  await page.addStyleTag({
    content: `
      * {
        animation: none !important;
        transition: none !important;
      }
    `
  });

  // 📸 screenshot comparison
  await expect(page).toHaveScreenshot('login-page.png', {
    fullPage: true,
    animations: 'disabled'
  });
});


// =========================
// 🛒 INVENTORY PAGE
// =========================
test('VISUAL_TC_002 - Inventory Page UI', async ({ page }) => {

  await page.setViewportSize({ width: 1280, height: 720 });

  await page.goto(baseUrl);

  // 🔐 login flow
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // ⏳ รอหน้าโหลดหลัง login
  await page.waitForLoadState('networkidle');

  // 📴 ปิด animation
  await page.addStyleTag({
    content: `
      * {
        animation: none !important;
        transition: none !important;
      }
    `
  });

  // 📸 snapshot inventory page
  await expect(page).toHaveScreenshot('inventory-page.png', {
    fullPage: true,
    animations: 'disabled'
  });
});