# Steam Store Automation Testing 🎮

![Cypress](https://img.shields.io/badge/Cypress-15+-04C38E?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge)

> End-to-end automation testing of the Steam Store using Cypress, focusing on search, validation, and dynamic data handling with a structured Page Object Model (POM).

---
## 📌 Overview

This project automates the search and verification workflow on the Steam Store platform:

- Search for a game  
- Validate search results  
- Extract game data  
- Re-search using extracted data  
- Verify results and data consistency  

🌐 App URL: https://store.steampowered.com/

---

## 🎥 Cypress Test Execution (Live Run)

This video demonstrates the automated test execution of the Steam Store application using Cypress.

👉 Watch Full Test Execution on LinkedIn

---

## 📊 Report

👉 View Live Report

---
```bash
steamstore-cypress/
│
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   └── 📄 steamStore.cy.js        → Main test suite (10 test cases)
│   │
│   ├── 📁 fixtures/
│   │   └── 📄 gameData.json           → Test data storage
│   │
│   ├── 📁 pages/
│   │   └── 📄 SteamSearchPage.js      → POM: Search page
│   │
│   ├── 📁 reports/
│   │   ├── 📁 assets/                → Report UI files
│   │   ├── 📄 mochawesome.html       → HTML report
│   │   └── 📄 mochawesome.json       → Raw report data
│   │
│   ├── 📁 screenshots/              → Failure screenshots
│   │
│   ├── 📁 support/
│   │   ├── 📄 commands.js           → Custom commands
│   │   └── 📄 e2e.js                → Global config
│   │
│   └── 📁 videos/                  → Test execution videos
│
├── 📁 node_modules/                → (ignored via .gitignore)
├── 📄 cypress.config.js           → Cypress settings
├── 📄 cypress.env.json            → Environment variables
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 README.md
```
----
🧪 Test Cases

| #    | Test Case     | Description                             |
| ---- | ------------- | --------------------------------------- |
| TC01 | Search Page   | Verify search results page is displayed |
| TC02 | Search Query  | Verify search query contains "Dota 2"   |
| TC03 | First Result  | Verify first result matches "Dota 2"    |
| TC04 | Extract Data  | Extract data from first game            |
| TC05 | Extract Data  | Extract data from second game           |
| TC06 | Re-search     | Search again using second game name     |
| TC07 | Query Update  | Verify search query is updated          |
| TC08 | Validate List | Verify list contains first game         |
| TC09 | Validate List | Verify list contains second game        |
| TC10 | Data Check    | Validate stored data consistency        |

-----
⭐ Highlights

| Feature         | Detail                        |
| --------------- | ----------------------------- |
| Design Pattern  | Page Object Model (POM)       |
| Dynamic Data    | Extracted and reused in tests |
| Assertions      | Validation after each step    |
| No Hard Waits   | Cypress retry mechanism used  |
| Custom Commands | Reusable Cypress functions    |

---
⚙️ Prerequisites
```bash
Before running the project, make sure you have:
Node.js (v18+)
npm (latest)
Internet access
```
---
## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jahidultr/jahidul-sqa-portfolio.git
cd jahidul-sqa-portfolio
cd Automation/SteamStore

```
---
```bash
2️⃣ Install Dependencies
npx cypress open

3️⃣ Run Tests
npx cypress open
```
----

▶️ Running the Tests

| Command             | Description                    |
| ------------------- | ------------------------------ |
| npm test            | Run all tests in headless mode |
| npm run test:headed | Run tests with browser         |
| npm run test:open   | Open Cypress UI                |

----
📦 Tech Stack
```bash
Cypress
JavaScript (ES6)
Node.js
```
---
📁 Test Data
```bash
📍 Location: cypress/fixtures/gameData.json
```
---

📦 Dynamic Data Handling
```bash
Game Name → Extracted dynamically
Data Storage → Stored in JSON
Data Reuse → Used in later validation
```
---
✅ Validation Strategy
```bash
Search results validation
UI verification
Data consistency checks
Navigation validation
```
----
🧠 Challenges & Solutions
| # | Challenge        | Solution                |
| - | ---------------- | ----------------------- |
| 1 | Dynamic results  | Flexible selectors used |
| 2 | Data consistency | Stored and revalidated  |
| 3 | Async behavior   | Cypress retry mechanism |

----

💡 Why This Project
```bash
This project demonstrates:

End-to-end workflow validation
Clean test architecture using POM
Reliable automation execution
Dynamic data handling
```
---
👨‍💻 Author

Jahidul Islam
