# QA Automation Portfolio — Playwright + TypeScript

Automated test suite for web applications using Playwright and TypeScript.

## Tech Stack

- [Playwright](https://playwright.dev/) — test framework
- TypeScript — programming language
- GitHub Actions — CI/CD pipeline

## Project Structure
    pages/          — Page Object Model classes
    tests/          — test files
    .github/        — CI/CD workflows

## Test Coverage

### smoke.spec.ts
- Home page opens successfully
- Login form is visible
- Successful login
- Failed login shows error message

### cart.spec.ts
- Add item to cart updates badge
- Item is visible in cart
- Remove item from cart

## How to Run

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run with browser visible
npx playwright test --headed

# Run specific file
npx playwright test smoke.spec.ts
```
