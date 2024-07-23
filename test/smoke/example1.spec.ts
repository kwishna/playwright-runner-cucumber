import { test, expect } from '@playwright/test';
import { issue } from "allure-js-commons";

// Extend basic test by providing a "todoPage" fixture.
// const test = base.extend<{ todoPage: TodoPage }>({
//   todoPage: async ({ page }, use) => {
//     const todoPage = new TodoPage(page);
//     await todoPage.goto();
//     await todoPage.addToDo('item1');
//     await todoPage.addToDo('item2');
//     await use(todoPage);
//     await todoPage.removeAll();
//   },
// });


test.describe("smoke test", () => {

  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test('has title', {
    tag: ['@title'],
    annotation: [
      { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },
      { type: 'docs', description: 'https://playwright.dev/docs/test-annotations#tag-tests' },
    ]
  }, async ({ page }) => {
    issue('no failure');

    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', {
    tag: ['@link'],
    annotation: { type: 'category', description: 'report' }

  },
    async ({ page }) => {
      await page.goto('https://playwright.dev/');

      // Click the get started link.
      await page.getByRole('link', { name: 'Get started' }).click();

      // Expects page to have a heading with the name of Installation.
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });


  test('has url opened', {
    tag: ['@urlopened']
  }, async (pwInfo, testInfo) => {
    const { page } = pwInfo;

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveURL('playwright');
  });
});
