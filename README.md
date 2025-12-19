# 🍬 SE302 Homework 02 - Sweet Shop Automation

<div align="center">

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Testing](https://img.shields.io/badge/Testing-E2E-orange?style=for-the-badge)

**An automated testing solution for Sweet Shop website using Playwright and TypeScript**

[Live Demo](https://sweetshop.netlify.app/) • [Report Issue](https://github.com/taylantaskin/SE302-Homework02/issues)

---

</div>

##  Table of Contents

1. [Project Overview](#-project-overview)
2. [Technologies Used](#-technologies-used)
3. [Project Structure](#-project-structure)
4. [Automated Test Scenarios](#-automated-test-scenarios)
5. [Setup & Installation](#-setup--installation)
6. [Running the Tests](#-running-the-tests)
7. [Test Results](#-test-results)
8. [Design Pattern](#-design-pattern)
9. [Author](#-author)

---

##  Project Overview

This repository contains the **automated test scripts** for the Sweet Shop website, developed as part of the **SE302 - Software Testing and Maintenance** course assignment. The project implements end-to-end testing using modern testing frameworks and best practices.

**Key Features:**
-  Automated testing with Playwright
-  Page Object Model (POM) design pattern
-  Comprehensive test coverage
-  CI/CD ready test suite
-  Detailed test reporting

---

##  Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Playwright** | Latest | End-to-End Testing Framework |
| **TypeScript** | 5.x | Type-safe Programming Language |
| **Node.js** | 18.x+ | JavaScript Runtime Environment |
| **POM Pattern** | - | Design Pattern for Maintainability |
| **npm** | Latest | Package Manager |

### Why These Technologies?

- **Playwright**: Fast, reliable, and supports multiple browsers
- **TypeScript**: Type safety and better IDE support
- **POM**: Maintainable and scalable test architecture

---

##  Project Structure
```text
SE302-Homework02/
│
├── 📁 pages/                    # Page Object Classes
│   ├── HomePage.ts              # Home page elements & methods
│   ├── LoginPage.ts             # Login functionality
│   ├── SweetsPage.ts            # Product listing & browsing
│   └── BasketPage.ts            # Cart & checkout operations
│
├── 📁 tests/                    # Test Scripts
│   └── homework.spec.ts         # Main test execution file
│
├── 📁 test-results/             # Test execution reports
│
├── 📄 playwright.config.ts      # Playwright configuration
├── 📄 package.json              # Project dependencies
├── 📄 tsconfig.json             # TypeScript configuration
└── 📄 README.md                 # Project documentation
```

---

##  Automated Test Scenarios

The following **5 critical scenarios** from the manual test plan have been automated:

| TC ID | Test Scenario | Status | Priority |
|-------|--------------|--------|----------|
| **TC_01** | Verify Successful Login (Positive) | PASSED | High |
| **TC_02** | Verify Login Fails with Empty Password (Negative) | PASSED | High |
| **TC_05** | Verify Navigation via 'Browse Sweets' Button | PASSED | Medium |
| **TC_03** | Add Product to Basket | PASSED | High |
| **TC_10** | Verify Checkout Form Submission | PASSED | High |

### Test Coverage

-  **Login Functionality** - Positive & Negative scenarios
-  **Navigation** - Page routing and button interactions
-  **Shopping Cart** - Add to cart functionality
-  **Checkout Process** - Form validation and submission

---

##  Setup & Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js)
- **Git**

### Installation Steps

**1. Clone the repository:**
```bash
git clone https://github.com/taylantaskin/SE302-Homework02.git
cd SE302-Homework02
```

**2. Install project dependencies:**
```bash
npm install
```

**3. Install Playwright browsers:**
```bash
npx playwright install
```

This will download Chromium, Firefox, and WebKit browsers required for testing.

**4. Verify installation:**
```bash
npx playwright --version
```

---

##  Running the Tests

### Basic Test Execution

**Run all tests in headless mode:**
```bash
npx playwright test
```

**Run tests in headed mode (with browser UI):**
```bash
npx playwright test --headed
```

**Run tests in debug mode:**
```bash
npx playwright test --debug
```

### Advanced Options

**Run specific test file:**
```bash
npx playwright test tests/homework.spec.ts
```

**Run tests in specific browser:**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run with UI mode (interactive):**
```bash
npx playwright test --ui
```

### Viewing Test Reports

**Generate and open HTML report:**
```bash
npx playwright show-report
```

**View last test run results:**
```bash
npx playwright test --reporter=html
```

---

##  Test Results

After running the tests, you can view detailed results:

- **Console Output**: Real-time test execution status
- **HTML Report**: Interactive report with screenshots and traces
- **Video Recording**: Available for failed tests (if configured)
- **Trace Files**: Step-by-step execution trace for debugging

### Sample Test Output
```
Running 5 tests using 1 worker

  ✓ [chromium] › homework.spec.ts:10:5 › TC_01: Verify Successful Login (2.3s)
  ✓ [chromium] › homework.spec.ts:20:5 › TC_02: Login with Empty Password (1.8s)
  ✓ [chromium] › homework.spec.ts:30:5 › TC_05: Navigate via Browse Button (1.5s)
  ✓ [chromium] › homework.spec.ts:40:5 › TC_03: Add Product to Basket (2.1s)
  ✓ [chromium] › homework.spec.ts:50:5 › TC_10: Checkout Form Submission (2.7s)

  5 passed (10.4s)
```

---

##  Design Pattern

This project implements the **Page Object Model (POM)** design pattern:

### Benefits of POM

- **Maintainability**: Easy to update when UI changes
- **Reusability**: Page objects can be reused across multiple tests
- **Readability**: Tests are more readable and self-documenting
- **Separation of Concerns**: Test logic separated from page structure

### Example Structure
```typescript
// LoginPage.ts (Page Object)
export class LoginPage {
    private usernameInput = '#username';
    private passwordInput = '#password';
    private loginButton = '#login-btn';

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

// homework.spec.ts (Test File)
test('Verify Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('testuser', 'password123');
    // assertions...
});
```

---

##  Author

**Taylan Taskin**

- 📧 Email: [Contact](mailto:220302443@student.ius.edu.ba)
- 🎓 Course: **SE302 - Software Testing and Maintenance**
  - 🏫 Institution: İUS: International University of Sarajevo
- 📅 Semester: Fall 2025

---



## 🤝 Contributing

This is an academic project, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

##  Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Sweet Shop Demo Site](https://sweetshop.netlify.app/)

---

<div align="center">

**⭐ If you find this project helpful, please consider giving it a star!**

Made with ❤️ for SE302 Course

</div>
