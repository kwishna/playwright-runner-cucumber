import { createBdd } from 'playwright-bdd';
const { After, AfterAll, Before, BeforeAll } = createBdd();

BeforeAll(async function ({ $workerInfo, browser }) {
    // runs when each worker starts
});

Before({ tags: '@auth' }, async function () {
    // do sign-in
});

After({ tags: '@auth' }, async function () {
    // do sign-out
});

AfterAll(async function ({ $workerInfo, browser }) {
    // runs when each worker ends
});