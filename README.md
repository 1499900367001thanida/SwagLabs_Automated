# 🧪 SwagLabs Automation (Playwright + TypeScript)

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

pages/        → เก็บโค้ดของแต่ละหน้า (Page Object Model)
tests/        → เก็บ test case สำหรับรัน
.github/      → ใช้สำหรับ CI/CD (GitHub Actions)
playwright.config.ts → ตั้งค่าการรัน test
package.json  → จัดการ dependencies และ script

---

## ⚙️ ฟีเจอร์ที่ทดสอบ (Features / Test Coverage)

### 🔐 Login Tests

* Login ด้วยข้อมูลถูกต้อง (Valid Login)
* Login ด้วยข้อมูลผิด (Invalid Login)
* Login แบบไม่กรอกข้อมูล (Empty Login)

### 🛒 Cart Tests

* เพิ่มสินค้าเข้าตะกร้า (Add to Cart)
* ตรวจสอบจำนวนสินค้า (Verify Cart Count)
* ลบสินค้าออกจากตะกร้า (Remove Item)

### 💳 Checkout Test
* ทดสอบการสั่งซื้อสินค้าครบ flow (Complete Checkout Flow End-to-End)

---

## ▶️ วิธีติดตั้งและรัน (How to Install & Run)

### 1. ติดตั้ง dependencies

npm install

### 2. ติดตั้ง browser ของ Playwright

npx playwright install

### 3. รัน test ทั้งหมด
npm run test
👉 หรือใช้คำสั่ง:
npx playwright test

### 4. รันทีละ Test 
npx playwright test tests/login.spec.ts
npx playwright test tests/checkout.spec.ts
npx playwright test tests/cart.spec.ts

---

## 📊 ดูผลลัพธ์ (View Report)

npm run report

👉 หรือ:
npx playwright show-report

ระบบจะเปิด HTML Report ให้ดูผลการทดสอบ เช่น PASS / FAIL พร้อม screenshot,VDO และ log

---

## 🔄 CI/CD (GitHub Actions)

โปรเจกต์นี้ตั้งค่า CI/CD ไว้แล้ว
เมื่อมีการ push code ขึ้น GitHub ระบบจะรัน test อัตโนมัติ

👉 This project uses GitHub Actions to automatically run tests on push.


## 📝 Assumptions / Notes

* ใช้ account demo:

  * Username: standard_user
  * Password: secret_sauce
* เป็นเว็บไซต์ทดสอบ ไม่มีการชำระเงินจริง
* ข้อมูลสินค้าเป็น static (ไม่เปลี่ยนแปลง)

---

## 🐞 Bug Report

ไม่พบข้อผิดพลาดจากการทดสอบ (No bugs found during testing)

---
