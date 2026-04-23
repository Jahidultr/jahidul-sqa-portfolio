# OrangeHRM Test Automation 🍊

![Cypress](https://img.shields.io/badge/Cypress-15.14.0-04C38E?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-v22.11.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

> End-to-end test automation for **OrangeHRM User Management** — built with Cypress using the Page Object Model pattern.

---

## 📌 Overview

This project automates the complete **User Management lifecycle** on the OrangeHRM demo platform:
- Login  
- Navigate to Admin  
- Create User  
- Search User  
- Verify Details

  
🌐 **App URL:** https://opensource-demo.orangehrmlive.com/

## 🎥 Cypress Test Execution (Live Run)

This video demonstrates the automated test execution of the OrangeHRM application using Cypress, covering login, user management, and validation scenarios.

👉 [Watch Full Test Execution on LinkedIn](https://www.linkedin.com/feed/update/urn:li:ugcPost:7452042748419031040/)

---
## 📊 Report

👉 [View Live Report](https://htmlpreview.github.io/?https://raw.githubusercontent.com/Jahidultr/jahidul-sqa-portfolio/main/Automation/OrangeHRM/cypress/reports/mochawesome.html)

## 🏗️ Project Structure

```bash
orangehrm-cypress/
│
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   └── 📄 userManagement.cy.js        → Main test suite (5 test cases)
│   │
│   ├── 📁 fixtures/
│   │   └── 📄 userData.json               → Test input data
│   │
│   ├── 📁 pages/
│   │   ├── 📄 LoginPage.js                → POM: Login page
│   │   └── 📄 UserManagementPage.js       → POM: User Management page
│   │
│   └── 📁 support/
│       ├── 📄 commands.js                 → Custom Cypress commands
│       └── 📄 e2e.js                      → Global support config
│
├── 📄 cypress.config.js                   → Cypress settings
├── 📄 cypress.env.json                    → Environment variables
├── 📄 package.json
└── 📄 README.md
```

---

## 🧪 Test Cases

| # | Test Case | Description |
|---|-----------|-------------|
| TC01 | ✅ Login | Admin login with valid credentials |
| TC02 | ✅ Navigate | Go to Admin → User Management module |
| TC03 | ✅ Create User | Add new user with dynamic unique username |
| TC04 | ✅ Search User | Search by generated username and verify result |
| TC05 | ✅ Verify Details | Open user record and verify all fields match |

---

## ⭐ Highlights

| Feature | Detail |
|---------|--------|
| 🏗️ Design Pattern | Page Object Model (POM) |
| 🆔 Dynamic Username | Generated via `Date.now()` — no duplicates |
| 🔐 Credentials | Stored in `cypress.env.json` — never hardcoded |
| ⏳ Smart Waiting | `cy.intercept()` for API waits — no `cy.wait(ms)` |
| 🤖 Auto Employee | Types `"a"` → picks first autocomplete result |
| ✔️ Assertions | After every major step |
| 🛠️ Custom Commands | `loginAsAdmin`, `selectOxdDropdown` |

---

## ⚙️ Prerequisites

Before running the project, make sure you have:

- ✅ **Node.js** (v18+ recommended, tested on v22.11.0) → [Download](https://nodejs.org/)
- ✅ **npm** (latest, tested on v11.6.2)
- ✅ Internet access to reach the OrangeHRM demo site

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jahidultr/jahidul-sqa-portfolio.git
cd jahidul-sqa-portfolio/Automation/OrangeHRM
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Check Environment Variables

Open `cypress.env.json` and verify:

```json
{
  "ADMIN_USERNAME": "Admin",
  "ADMIN_PASSWORD": "admin123"
}
```

> ⚠️ These are the default OrangeHRM demo credentials. Never commit real credentials to a public repository.

---

## ▶️ Running the Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests in headless mode |
| `npm run test:headed` | Run tests with browser visible |
| `npm run test:open` | Open Cypress interactive UI |

---
## 📦 Tech Stack
- Cypress (v15+)
- JavaScript (ES6+)
- Node.js

---

## 📁 Test Data

📍 **Location:** `cypress/fixtures/userData.json`

### 📦 Dynamic Data Handling

- **🔑 Username** → auto-generated using timestamp  
  `testuser_1776621005279`

- **👤 Employee Name** → auto-selected dynamically from dropdown

---

## ✅ Validation Strategy

The automation verifies:

- Successful login by checking dashboard visibility
- Navigation to Admin module via URL and UI elements
- User creation confirmation message
- Search results matching the created username
- User details accuracy (role, status, employee name)

## 🧠 Challenges & Solutions

| # | Challenge | Solution |
|---|-----------|----------|
| 1 | 🔽 **Dynamic Employee Dropdown** | Instead of hardcoding an employee name, typed `"a"` to trigger the autocomplete API and selected the first available suggestion dynamically |
| 2 | 🆔 **Unique Username Required** | Used `Date.now()` to generate a timestamp-based username (e.g. `testuser_1776621005279`) — guaranteed unique on every run |
| 3 | ⏳ **No Hard Waits Allowed** | Replaced all `cy.wait(ms)` with `cy.intercept()` to wait for actual API responses — making tests faster and more reliable |

## 💡 Why This Project

This project demonstrates real-world automation testing skills including:

- End-to-end workflow validation
- Clean test architecture using POM
- Reliable test execution without flaky waits
