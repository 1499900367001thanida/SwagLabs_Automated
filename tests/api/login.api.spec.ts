import { test, expect, request } from '@playwright/test';

// ใช้สำหรับยิง HTTP request โดยไม่ต้องเปิด browser
test.describe('API Testing using Playwright Request Context', () => {

  // Test Case 1: ตรวจสอบว่า homepage ของระบบตอบกลับได้ปกติ
  test('API_TC_001 - Check homepage response', async () => {

    // สร้าง API context (เหมือน Postman client)
    const apiContext = await request.newContext();

    // ยิง GET request ไปยังหน้า homepage
    const response = await apiContext.get('https://www.saucedemo.com/');

    // ตรวจสอบว่า server ตอบกลับ status 200 (OK)
    // หมายความว่าเว็บใช้งานได้ปกติ
    expect(response.status()).toBe(200);
  });

  // Test Case 2: ตรวจสอบ endpoint ที่ไม่มีอยู่จริง
  test('API_TC_002 - Invalid endpoint should fail or redirect', async () => {

    // สร้าง API context ใหม่
    const apiContext = await request.newContext();

    // ยิง request ไปยัง URL ที่ไม่มีอยู่จริง
    const response = await apiContext.get(
      'https://www.saucedemo.com/non-existing-page'
    );

    // ตรวจสอบ status code ที่อาจเกิดขึ้นได้
    // บางระบบอาจ:
    // 404 = ไม่พบหน้า
    // 302 = redirect ไปหน้าอื่น
    // 200 = redirect ไป homepage
    expect([404, 200, 302]).toContain(response.status());
  });

});