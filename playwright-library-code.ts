import { chromium, request } from "@playwright/test";
import { readFileSync } from "fs";

(async () => {
    // const browser = chromium.connect('wss://websocket-link-of-remote-brower-in-cloud');
    const browser = await chromium.launch({
        args: ['--start-maximized', '--window-position=-5,-5', '--window-size=1920,1080'],
        channel: 'chromium',
        ignoreDefaultArgs: ['--mute-audio'],
        downloadsPath: './download',
        tracesDir: './traces',
        slowMo: 0,
        timeout: 1 * 60 * 1000,
        // proxy: {},
        headless: false,
        // env: {},
        // executablePath: 'path-to-exe-file'
    });
    const ctz = await browser.newContext({
        acceptDownloads: true,
        baseURL: 'https://google.co.in/',
        colorScheme: 'dark',
        javaScriptEnabled: true,
        viewport: {
            width: 1920,
            height: 1080
        },
        recordHar: { mode: 'full', content: 'embed', path: './hars' },
        recordVideo: {
            dir: './videos',
            size: {
                height: 1080,
                width: 1920
            }
        },
        extraHTTPHeaders: {
            "X-api-key": "sdXkai1nsks2mmZSdd"
        },
        httpCredentials: {
            "username": "admin",
            "password": "admin"
        },
        locale: 'en',
        permissions: ['clipboard'],
        strictSelectors: false,
        screen: {
            height: 1080,
            width: 1920
        },
        serviceWorkers: "allow",
        // proxy: {},
        bypassCSP: false
    });
    const pg = await ctz.newPage();

    const req = await request.newContext({
        baseURL: "https://localhost:8080",
        extraHTTPHeaders: {},
        ignoreHTTPSErrors: false,
        timeout: 30000,
        // proxy: {},
        // storageState: {},
        httpCredentials: {
            "username": "admin",
            "password": "admin"
        }
    });

    // ------------ API request

    const fd = new FormData()
    fd.append('file', readFileSync('./image.png').toString('base64'));
    fd.append('file', new File(['let x = 2024;'], 'f1.js', { type: 'text/javascript' }));
    fd.append('file', new File(['hello'], 'f2.txt', { type: 'text/plain' }));

    const p = await req.post("/users", {
        data: {
            name: 'hello',
            age: 35,
            address: 'NY',
            ph: '+01'
        },
        failOnStatusCode: false,
        headers: {
            'Accpet': 'application/json',
            'Content-Type': "application/json",
            'Authorization': 'Bearer bjdho938bjeh94heif',
            'X-api-key': 'bjdho938bjeh94heif'
        },
        form: {
            "username": "kwishna",
            "password": "admin",
            "retype password": "admin",
            "accept": true
        },
        maxRedirects: 0,
        multipart: fd,
        timeout: 5000,
        params: {
            "isDone": false
        }
    });

    const body = await p.json();
    const headers = p.headers();
    const statusCode = p.status();
    const statusText = p.statusText();
    const isResponseOk = p.ok();
    const text = await p.text();
    const respUrl = p.url();
    p.dispose(); // Disposes the body of this response. If not called then the body will stay in memory until the context closes.
})();