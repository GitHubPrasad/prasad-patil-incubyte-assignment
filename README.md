# ParaBank Automation Test Suite

## Project Overview

This repository contains a comprehensive automation test suite for the ParaBank website (https://parabank.parasoft.com/parabank/index.htm) using Playwright and Cucumber BDD framework.

## Technology Stack

- **Framework**: Playwright
- **BDD**: Cucumber.js
- **Language**: TypeScript
- **Test Architecture**: Page Object Model (POM)
- **Node.js Runtime**: ts-node

## Project Structure

```
prasad-patil-incubyte-assignment/
├── tests/
│   ├── features/
│   │   └── signup_login.feature       # BDD Feature files
│   ├── step_definitions/
│   │   └── steps.ts                   # Step implementations
│   └── pages/
│       ├── BasePage.ts                # Base page class
│       ├── LoginPage.ts               # Login page POM
│       ├── RegisterPage.ts            # Register page POM
│       └── AccountsPage.ts            # Accounts page POM
├── cucumber.js                        # Cucumber configuration
├── playwright.config.ts               # Playwright configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Project dependencies
├── TestCases.xlsx                     # Test cases documentation
├── README.md                          # This file
└── generateTestCases.js              # Test cases generator script
```

## Features Tested

### Scenario 1: Test ParaBank Website Access and Navigation

- ✓ Navigate to ParaBank homepage
- ✓ Verify website accessibility
- ✓ Verify website title contains "ParaBank"
- ✓ Capture page details for documentation

### Scenario 2: Register a New User Account

- ✓ Navigate to registration page
- ✓ Fill in user registration details
- ✓ Submit the registration form
- ✓ Verify registration was processed

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. Clone the repository:

```bash
git clone https://github.com/GitHubPrasad/prasad-patil-incubyte-assignment.git
cd prasad-patil-incubyte-assignment
```

2. Install dependencies:

```bash
npm install
```

3. Run the tests:

```bash
npm test
```

## Running Tests

### Run all tests

```bash
npm test
```

### Run with detailed output

```bash
npx cucumber-js tests/features/signup_login.feature --require tests/step_definitions/steps.ts --require-module ts-node/register
```

### Run specific feature file

```bash
npx cucumber-js tests/features/signup_login.feature
```

## Test Results

Last test execution:

- **Total Scenarios**: 2
- **Passed**: 2
- **Failed**: 0
- **Total Steps**: 10
- **Passed Steps**: 10
- **Execution Time**: ~14.8 seconds

## Page Object Model (POM) Implementation

The project follows the POM design pattern with the following page classes:

### BasePage

- Provides common functionality for all pages
- Handles navigation and page load waits
- Methods: `goto()`, `waitForPageLoad()`

### LoginPage

- Elements: Username field, Password field, Login button, Register link
- Methods: `enterUsername()`, `enterPassword()`, `clickLogin()`, `clickRegister()`, `isLoggedIn()`

### RegisterPage

- Elements: All registration form fields
- Methods: `fillRegistrationForm()`, `clickRegisterButton()`, `isSuccessMessageDisplayed()`

### AccountsPage

- Elements: Account list, Account balances
- Methods: `getAccountBalance()`, `getAllAccountBalances()`, `logout()`

## BDD Feature Files

BDD scenarios are written in Gherkin language in the `tests/features/` directory. Each scenario demonstrates clear business requirements:

```gherkin
Feature: ParaBank Automation Test
  Scenario: Test ParaBank Website Access and Navigation
    Given I navigate to ParaBank website
    When I navigate to the ParaBank homepage
    Then I should verify the website is accessible
    And I should verify the website title contains "ParaBank"
```

## Test Cases Documentation

Test cases are documented in `TestCases.xlsx` with the following information:

- Test Case ID
- Test Case Name
- Feature
- Description
- Preconditions
- Test Steps
- Expected Results
- Priority
- Status

## CI/CD Integration

The project is ready for CI/CD integration. Key files:

- `playwright.config.ts` - Playwright configuration
- `cucumber.js` - Cucumber configuration with HTML reporting
- `tsconfig.json` - TypeScript compilation settings

## Troubleshooting

### Tests timing out

- Increase timeout values in `cucumber.js` configuration
- Check internet connectivity
- Verify ParaBank website is accessible

### Module not found errors

- Run `npm install` to install dependencies
- Delete `node_modules` folder and reinstall if issues persist

### Playwright/Browser issues

- Clear browser cache: `rm -rf ~/.cache/ms-playwright`
- Reinstall Playwright browsers: `npx playwright install`

## Best Practices Implemented

1. **Page Object Model**: All UI interactions are encapsulated in page classes
2. **BDD Approach**: Test scenarios are written in business-readable Gherkin language
3. **TypeScript**: Strong typing ensures code safety and maintainability
4. **Separation of Concerns**: Features, steps, and pages are in separate modules
5. **Error Handling**: Comprehensive try-catch blocks with meaningful error messages
6. **Logging**: Detailed console logging for debugging and test tracking
7. **Dynamic Data Generation**: Unique usernames generated for each test run

## Author

Prasad Patil
GitHub: https://github.com/GitHubPrasad

## License

ISC

## References

- [Playwright Documentation](https://playwright.dev)
- [Cucumber.js Documentation](https://github.com/cucumber/cucumber-js)
- [ParaBank Official Site](https://parabank.parasoft.com)
