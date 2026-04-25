import { test, expect } from '@playwright/test';

const baseUrl = 'https://www.saucedemo.com/';

// 🧼 helper ลด repetition
async function disableAnimations(page) {
  await page.addStyleTag({
    content: `
      * {
        animation: none !important;
        transition: none !important;
        font-family: Arial !important;
      }
    `
  });
}

// =========================
// 🔑 LOGIN PAGE
// =========================
test('VISUAL_TC_001 - Login Page UI', async ({ page }) => {

  await page.setViewportSize({ width: 1280, height: 720 });

  await page.goto(baseUrl);

  // ❌ ไม่ใช้ networkidle (flaky)
  // await page.waitForLoadState('networkidle');

  // ✅ ใช้ element จริงแทน
  await page.waitForSelector('#login-button', { state: 'visible' });

  await disableAnimations(page);

  await expect(page).toHaveScreenshot('login-page.png', {
    fullPage: true,
    animations: 'disabled',
    threshold: 0.2,
    maxDiffPixelRatio: 0.02
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

  // ✅ รอ element หลัง login (stable มากกว่า networkidle)
  await page.waitForSelector('.inventory_list', { state: 'visible' });

  await disableAnimations(page);

  await expect(page).toHaveScreenshot('inventory-page.png', {
    fullPage: true,
    animations: 'disabled',
    threshold: 0.2,
    maxDiffPixelRatio: 0.02
  });
});