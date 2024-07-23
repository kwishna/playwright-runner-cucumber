import { test, expect } from '@playwright/test';
test.describe("tear down test", () => {
    test('tear-down', () => {
        console.log(`----------- TEAR DOWN -----------`);
    });
});