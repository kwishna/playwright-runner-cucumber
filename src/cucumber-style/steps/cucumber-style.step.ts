import { expect } from '@playwright/test';
import { Given, When, Then } from '../support/fixtures';
// Cucumber-style step
// with World fixture
Given('I open url {string}', async function (url: string) {
  await this.page.goto(url);
});

When('I click link {string}', async function (name: string) {
  await this.page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async function (keyword: string) {
  await expect(this.page).toHaveTitle(new RegExp(keyword));
});


