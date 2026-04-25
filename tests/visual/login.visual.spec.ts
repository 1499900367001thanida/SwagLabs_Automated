import { test, expect } from '@playwright/test';

const baseUrl = 'https://www.saucedemo.com/';

// 🧼 helper ลดความต่างระหว่าง OS
async function disableAnimations(page) {
  await page.addStyleTag({
    content: `
      * {
        animation: none !important;
        transition: none !important;
      }

      body {
        font-family: Arial, sans-serif !important;
      }

      html {
        scroll-behavior: auto !important;
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

  // ✅ stable wait (แทน networkidle / selector แบบ flaky)
  await expect(page.locator('#login-button')).toBeVisible();

  await disableAnimations(page);

  await expect(page).toHaveScreenshot('login-page.png', {
    fullPage: true,
    animations: 'disabled',
    threshold: 0.3,
    maxDiffPixelRatio: 0.05
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

  // ✅ stable wait หลัง login
  await expect(page.locator('.inventory_list')).toBeVisible();

  await disableAnimations(page);

  await expect(page).toHaveScreenshot('inventory-page.png', {
    fullPage: true,
    animations: 'disabled',
    threshold: 0.3,
    maxDiffPixelRatio: 0.05
  });
});