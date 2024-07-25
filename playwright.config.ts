import { defineConfig, devices } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';
import { config } from "dotenv";
import { resolve } from 'path';
import os from 'os';
import process from 'process';
config({ path: resolve(".env") })


const testDir = defineBddConfig({
    features: ['src/features/**/*.feature'],
    steps: ['src/cucumber-style/steps/**/*step*.js', 'src/cucumber-style/steps/**/*step*.ts'],
    language: 'en',
    verbose: true,
    // tags: 'not @ignore',
    enrichReporterData: true,
    importTestFrom: "./src/cucumber-style/support/fixtures"
    // step-generation configs
    // outputDir: "./src/steps",
    // skip: false,
    // statefulPoms: false,
    // quotes: 'double',
    // featuresRoot: './src/features/',
});

export default defineConfig({
    testDir,
    reporter: [
        // ['html', { fileName: 'playwright-report.html', outputDir: 'playwright-report' }],
        // ['junit', { fileName: 'playwright-junit.xml', outputDir: 'playwright-report' }],
        // ['json', { fileName: 'playwright-json.json', outputDir: 'playwright-report' }],
        // ['blob', { outputFile: `report-${os.platform()}.zip`, outputDir: 'playwright-report' }],
        // ['allure-playwright', { detail: true, outputFolder: 'my-allure-results', suiteTitle: false }],
        cucumberReporter('html', { outputFile: 'cucumber-report/report.html' }),
        cucumberReporter('json', { outputFile: 'cucumber-report/report.json' }),
        cucumberReporter('junit', { outputFile: 'cucumber-report/report.xml', suiteName: 'my suite' }),
        cucumberReporter('message', { outputFile: 'cucumber-report/report.ndjson' }),
    ],
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://the-internet.herokuapp.com/',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'cucumber-test',
            use: {
                baseURL: "https://playwright.dev/",
                ...devices['Desktop Chrome'],
                acceptDownloads: true, // Whether to automatically download all the attachments.
                actionTimeout: 10 * 1000, // Default timeout for each Playwright action in milliseconds
                headless: false, // Whether to run browser in headless mode. 
                javaScriptEnabled: true, // Whether or not to enable JavaScript in the context. 
                navigationTimeout: 30 * 1000, // Timeout for each navigation action in milliseconds.
                launchOptions: { timeout: 30000, downloadsPath: "./downloads", args: ['--window-position=-5,-5'], slowMo: 2 },
                // permissions: ['clipboard'],
                screenshot: { fullPage: true, mode: "only-on-failure", omitBackground: false },
                trace: { mode: 'retain-on-failure', attachments: true, screenshots: true, sources: true, snapshots: true },
                video: { mode: "retain-on-failure", size: { height: 1080, width: 1920 } },
                viewport: { width: 1920, height: 1080 },
                // connectOptions: { wsEndpoint: '', exposeNetwork: "127.0.0.1", timeout: 30000, headers: {} },
                browserName: "chromium",
                // baseURL: "https://the-internet.herokuapp.com/" // already defined globally,
                colorScheme: 'dark',
                bypassCSP: false, // Toggles bypassing page's Content-Security-Policy.
                ignoreHTTPSErrors: true // Whether to ignore HTTPS errors when sending network requests.
            },
        },
    ],
});
