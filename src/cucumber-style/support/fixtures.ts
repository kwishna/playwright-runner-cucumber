// fixtures.ts
import { test as base, createBdd } from 'playwright-bdd';
import { World } from './world';

export const test = base.extend<{ world: World, firefoxOnly: void }>({
    world: ({ page }, use) => use(new World(page)),
    firefoxOnly: [async ({ $tags }, use, testInfo) => {
        if ($tags.includes('@firefox')) testInfo.skip();
        await use();
    }, { auto: true }],
});

export const { Given, When, Then } = createBdd(test, {
    worldFixture: 'world'
});
