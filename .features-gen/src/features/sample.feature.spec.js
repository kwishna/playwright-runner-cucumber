/** Generated from: src\features\sample.feature */
import { test } from "../../../src/cucumber-style/support/fixtures";

test.describe("Playwright site", () => {

  test("Check title", async ({ Given, When, Then }) => {
    await Given("I open url \"https://playwright.dev\"");
    await When("I click link \"Get started\"");
    await Then("I see in title \"Playwright\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("src\\features\\sample.feature"),
  $world: ({ world }, use) => use(world),
});

const testMetaMap = {
  "Check title": {"pickleLocation":"3:5"},
};