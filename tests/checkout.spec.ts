import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

// 💳 กลุ่ม Checkout Tests
test.describe('💳 Checkout Tests', () => {

  let login: LoginPage;
  let inventory: InventoryPage;
  let cart: CartPage;
  let checkout: CheckoutPage;

  // ✅ setup: เตรียมก่อนทุก test
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);
    checkout = new CheckoutPage(page);

    await login.goto(); // เปิดเว็บ
    await login.login('standard_user', 'secret_sauce'); // login
  });

  // TC_015
  test('SL_TC_015 - Complete Checkout', async () => {
    await inventory.addItem(); // เพิ่มสินค้า
    await inventory.goToCart(); // ไป cart

    await cart.checkout(); // ไปหน้า checkout

    await checkout.fillInfo('Test', 'User', '1000'); // กรอกข้อมูล
    await checkout.continue(); // ไป overview
    await checkout.finish(); // finish order

    await expect(checkout.getSuccessMessage())
      .toHaveText('Thank you for your order!'); // ตรวจ success
  });

});