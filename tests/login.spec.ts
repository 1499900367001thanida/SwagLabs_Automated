import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// 🔐 กลุ่ม Login Tests
test.describe('🔐 Login Tests', () => {

  let login: LoginPage; // ประกาศตัวแปรใช้ทั้งกลุ่ม

  // ✅ setup: ทำก่อนทุก test
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page); // สร้าง object
    await login.goto(); // เปิดเว็บก่อนทุกครั้ง
  });

  // TC_001
  test('SL_TC_001 - Valid Login', async ({ page }) => {
    await login.login('standard_user', 'secret_sauce'); // login ถูก

    await expect(page).toHaveURL(/inventory/); // ต้องเข้า Products
  });

  // TC_002
  test('SL_TC_002 - Invalid Password', async () => {
    await login.login('standard_user', 'wrong'); // password ผิด

    await expect(login.getError()).toBeVisible(); // ต้องมี error
  });

  // TC_003
  test('SL_TC_003 - Empty Login', async () => {
    await login.login('', ''); // ไม่กรอก

    await expect(login.getError()).toBeVisible(); // ต้องมี error
  });

});