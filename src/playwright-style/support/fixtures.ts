// fixtures.ts
// Note: import base from playwright-bdd, not from @playwright/test!
import { test as base, createBdd } from 'playwright-bdd';
import { World } from './world';

export const test = base.extend<{ myFixture: World }>({
  myFixture: async ({ page }, use) => {
    await use(new World(page));
  }
});

export const { Given, When, Then } = createBdd(test, {
    worldFixture: 'myFixture'
});
