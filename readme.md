# Playwright BDD Test

A UI automation using Playwright Test Runner intergrated with BDD Cucumber.js.

## Features

- BDD-style testing with Cucumber.js integration
- Multiple test projects: smoke, regression
- Parallel test execution
- Comprehensive reporting (HTML, JUnit, JSON, Allure)
- Environment-specific configurations
- Cross-browser testing support
- Screenshot and video capture on failure
- Trace collection for debugging

## Setup

1. Clone the repository
2. Install dependencies: `npm install`

## Running Tests

- Run all tests: `npm run pw:test`
- Run smoke tests: `npm run pw:smoke`
- Run failed tests: `npm run pw:failed`
- Run tests with specific tags:
  - AND condition: `npm run pw:grep:and`
  - OR condition: `npm run pw:grep:or`
  - Single tag: `npm run pw:grep`

## Reporting

Generate and view test reports:
- `npm run pw:report`

## Configuration

- `playwright.config.ts`: Main configuration file
- `.env`: Environment variables (create this file locally)

## Project Structure
- `src/`: Test files using BDD cucumber.js
- `test/`: Test files without BDD cucumber.js
  - `smoke/`: Smoke tests
  - `regression/`: Regression tests
- `playwright-report/`: Test reports
- `snapshots/`: Screenshot comparisons

## Dependencies

- Playwright
- Cucumber.js (via playwright-bdd)
- Allure reporting

For more details, refer to `package.json` and `playwright.config.ts`.