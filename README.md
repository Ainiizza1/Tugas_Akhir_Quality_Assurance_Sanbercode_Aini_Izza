# 🧪 Final Project - Quality Assurance Automation (Sanbercode)

Repository ini merupakan tugas akhir dari program **Quality Assurance Sanbercode Bootcamp**, yang berfokus pada pembuatan automation testing menggunakan **Cypress** dengan pendekatan **Page Object Model (POM)** dan **Intercept (API Testing)**.

---
## 🌐 Website Under Test

🔗 https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

---

## 📌 Features Tested

### 1. 🔐 Login
- TC-001 Login valid
- TC-002 Login tanpa username dan password
- TC-003 Login dengan username huruf besar
- TC-004 Login dengan password huruf besar
- TC-005 Login dengan spasi setelah username
- TC-006 Refresh halaman saat login
- TC-007 Login dengan username mengandung angka
- TC-008 Login dengan username sala
- TC-009 Login dengan username kosong
- TC-010 Login dengan Password kosong
- TC-011 Klik login berkali-kali
### 2. 🔑 Forgot Password
- FP-001 Username kosong
- FP-002 Cancel dan kembali ke login
- FP-003 - Username Valid
- FP-004 - Clear + submit reset
- FP-005 Username tidak valid
- FP-006 Username Huruf Besar
- FP-007 Username dengan spasi
### 3. 📂 Directory (Dashboard)
- DT-001 Verifikasi halaman direktori
- DT-002 Verifikasi tombol search
- DT-003 Verifikasi tombol search
- DT-004 Verifikasi tampil directory card
- DT-005 Verifikasi job title filter
- DT-006 Verifikasi location Filter
- DT-007 Verifikasi beberapa filter
- DT-008 Verifikasi employee card
- DT-007 Pencarian tidak valid (kosong)

---

## 🧪 Testing Approach

Project ini menggunakan beberapa pendekatan penting dalam QA:

### ✅ Cypress Automation
Digunakan untuk melakukan automation testing berbasis JavaScript.

### ✅ Page Object Model (POM)
Struktur code dipisahkan berdasarkan halaman agar:
- Lebih clean
- Reusable
- Mudah maintenance

### ✅ Intercept (API Testing)
Digunakan untuk:
- Monitoring request API
- Validasi response backend
- Menghindari ketergantungan UI saja

---

## 📁 Project Structure
cypress/
│
├── e2e/
|  └── auth  
│      ├── forgotPassword.cy.js
│      └── login.js
|  └── dashboard
|      └── directory.cy.js
|
├── fixtures/
|  └── user.json
│
├── support/
|  └── pages  
│      ├── directoryPage.js
│      ├── forgotPasswordPage.js
│      └── loginPage.js

---