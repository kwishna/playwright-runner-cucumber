// Playwright-style step
import { expect } from '@playwright/test';
// import { createBdd } from 'playwright-bdd';

import {Given, When, Then} from "../support/fixtures"

Given('I open url {string}', async ({ myFixture }, url: string) => {
  await myFixture.page.goto(url);
});

When('I click link {string}', async ({ myFixture }, name: string) => {
  await myFixture.page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ myFixture }, keyword: string) => {
  await expect(myFixture.page).toHaveTitle(new RegExp(keyword));
});

