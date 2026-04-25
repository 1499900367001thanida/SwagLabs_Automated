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

### 💳Checkout (End-to-End)
ทดสอบ flow การซื้อสินค้าครบขั้นตอน
ตั้งแต่ login → เลือกสินค้า → checkout → success

### API Testing (Request Context Concept)
โปรเจกต์นี้ใช้ Playwright request context ในการทดสอบ HTTP behavior

เนื่องจากระบบ เป็นระบบ demo ที่ไม่มี public backend API โดยตรง  
ดังนั้นการทดสอบจะเป็นในรูปแบบ:
- HTTP request validation
- response status checking
- endpoint behavior testing

### Visual Testing
ใช้ SauceDemo สำหรับตรวจสอบ UI ด้วยการเปรียบเทียบภาพ (Screenshot Comparison)
📸 หน้าที่ทดสอบ
🔑 หน้า Login
  *ตรวจสอบ layout หน้า login
  *ตรวจสอบ input field และปุ่ม login
  *ตรวจสอบ UI consistency
📦 หน้า Inventory (หลัง login)
  *แสดงรายการสินค้า
  *ปุ่ม Add to cart
  *ราคาและ layout ของสินค้า
  *ตรวจสอบ UI ไม่ให้เพี้ยน

---

## ▶️ วิธีติดตั้งและรัน (How to Install & Run)

### 1. ติดตั้ง dependencies

npm install

### 2. ติดตั้ง browser สำหรับ Playwright

npx playwright install

### 3. รัน test ทั้งหมด
npm run test
👉 หรือใช้คำสั่ง:
npx playwright test

### 4. รันทีละ Test 
npx playwright test tests/login.spec.ts
npx playwright test tests/checkout.spec.ts
npx playwright test tests/cart.spec.ts
npx playwright test tests/visual

---

## 📊 ดูผลลัพธ์ (View Report)

npm run report

👉 หรือ:
npx playwright show-report

ระบบจะเปิด HTML Report ให้ดูผลการทดสอบ เช่น PASS / FAIL พร้อม screenshot,VDO และ log

---

## 🔄 CI/CD (GitHub Actions)

โปรเจกต์นี้มีการตั้งค่า CI/CD แล้ว
Flow การทำงาน:
Push code ไป GitHub
GitHub Actions เริ่มทำงานอัตโนมัติ
ติดตั้ง dependencies
รัน test ทั้งหมด
สร้าง report
ถ้า test fail → pipeline fail


## 📝 Assumptions / Notes

* ใช้ account demo:
  * Username: standard_user
  * Password: secret_sauce
* เป็นเว็บไซต์ทดสอบ ไม่มีการชำระเงินจริง
* ข้อมูลสินค้าเป็น static (ไม่เปลี่ยนแปลง)
📝 หมายเหตุ (Assumptions)

---

## 🐞 Bug Report

ไม่พบข้อผิดพลาดจากการทดสอบ (No bugs found during testing)

---
