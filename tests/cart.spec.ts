import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';

// 🛒 กลุ่ม Cart Tests
test.describe('🛒 Cart Tests', () => {

  let login: LoginPage;
  let inventory: InventoryPage;
  let cart: CartPage;

  // ✅ setup: login ก่อนทุก test
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);

    await login.goto(); // เปิดเว็บ
    await login.login('standard_user', 'secret_sauce'); // login
  });

  // TC_011
  test('SL_TC_011 - Add multiple items', async () => {
    await inventory.addMultipleItems(3); // เพิ่ม 3 รายการ

    await expect(inventory.getCartCount()).toHaveText('3'); // ตรวจจำนวน
  });

  // TC_012
  test('SL_TC_012 - Remove item from Products', async () => {
    await inventory.addItem(); // เพิ่มก่อน
    await inventory.removeItem(); // ลบออก

    await expect(inventory.getCartCount()).not.toBeVisible(); // ไม่มี badge
  });

  // TC_013
  test('SL_TC_013 - Remove item from Cart page', async () => {
    await inventory.addItem(); // เพิ่มสินค้า
    await inventory.goToCart(); // ไปหน้า cart

    await cart.removeItem(); // ลบสินค้า

    await expect(cart.getCartItems()).toHaveCount(0); // ต้องเหลือ 0
  });

});